const { createApp, ref, reactive, nextTick, onMounted, computed, watch } = Vue;

createApp({
    setup() {
        // ==========================================
        // 1. 核心状态管理 (State Management)
        // ==========================================
        
        // 运行时临时状态 (不随存档保存)
        const history = ref([]);          // 历史对话流
        const currentChoices = ref([]);   // 当前显示的选项
        const isTyping = ref(false);      // 打字机正在输出标志
        const scrollTarget = ref(null);   // 滚动容器 DOM 引用
        
        // UI 模态框状态
        const modalMode = ref('none');    // 当前打开的窗口: 'none' | 'settings' | 'codex' | 'save'
        const selectedKeyword = ref(null);// 百科中当前选中的词条
        
        // 提示框系统 (Toast)
        const toast = reactive({ 
            show: false, 
            msg: '', 
            subMsg: '' 
        });
        let toastTimer = null;

        // 存档槽位缓存 (用于显示存档界面的元数据)
        const saves = ref({}); 

        // 全局系统设置 (独立于游戏存档，保存在 localStorage 的 gda_settings 中)
        const settings = reactive({
            speed: 1.0,         // 文字显示速度倍率
            volume: 0.5,        // 全局音量
            loopMode: 'single'  // BGM 循环模式
        });

        // 游戏核心状态 (随存档保存，保存在 localStorage 的 gda_save_slot_x 中)
        const state = reactive({
            currentNodeId: 'prologue_worldview', // 当前剧情节点 ID
            tech: 50,           // 秩序/理性值
            human: 50,          // 人性/感性值
            items: [],          // 物品栏
            bgStyle: '',        // 当前背景样式
            currentBgm: null,   // 当前播放的 BGM ID
            unlockedKeywords: [], 
            readKeywords: [] 
        });

        // 计算属性：物品栏只读视图
        const inventory = computed(() => state.items);

// ==========================================
// 2. 音频系统 (Audio System) - REFACTORED
// ==========================================

const bgmAudio = new Audio();
bgmAudio.loop = true; // BGM 默认循环

// 用于追踪上一条 SFX，以便进行“10秒缓冲”处理
let lastSfxAudio = null;

// 监听音量设置变化
watch(() => settings.volume, (newVol) => {
    const vol = Number(newVol);
    bgmAudio.volume = Math.min(Math.max(vol, 0), 1);
    // 同时也调整当前正在播放的 SFX 音量（可选，提升体验）
    if (lastSfxAudio && !lastSfxAudio.paused) {
        lastSfxAudio.volume = bgmAudio.volume;
    }
});

// 播放背景音乐 (单例 + 继承 + 防抖)
const playBgm = (audioId) => {
    // 场景 B & D (继承/静音): 
    // 由 loadNode 的调用逻辑控制。如果传入 null/undefined/""，
    // loadNode 不会调用此函数，从而实现“继承上一首”。
    // 如果你想通过传入 "silent" 等特殊ID来实现静音，可以在这里处理，
    // 但根据你的需求，这里只负责“切歌”和“防抖”。

    if (!audioId) return;

    // 场景 C: 同名音乐防抖 (Debounce)
    // 如果 ID 相同且正在播放，直接忽略，避免重新加载导致的卡顿
    if (state.currentBgm === audioId && !bgmAudio.paused) {
        return;
    }

    // 场景 A: 切换新音乐 (Singleton)
    // 直接替换 src 会自动停止上一首
    state.currentBgm = audioId;
    
    const src = /^\d+$/.test(audioId) 
        ? `https://music.163.com/song/media/outer/url?id=${audioId}.mp3` 
        : audioId;

    bgmAudio.src = src;
    bgmAudio.volume = settings.volume;
    
    bgmAudio.play().catch(e => {
        console.warn("Autoplay blocked, waiting for interaction.");
    });
};

// 播放音效 (共存 + 10秒缓冲逻辑)
const playSfx = (url) => {
    if (!url) return;

    // --- 核心修改：处理上一条 SFX ---
    // 如果上一条 SFX 还在播放，不要立即停止，而是给它 10秒 的“淡出/缓冲期”
    if (lastSfxAudio && !lastSfxAudio.paused) {
        const dyingSfx = lastSfxAudio; // 闭包锁住当前的音频对象
        setTimeout(() => {
            try {
                // 10秒后，如果它还没播完，强制暂停
                if (!dyingSfx.paused) {
                    dyingSfx.pause();
                    console.log("Previous SFX stopped after 10s grace period.");
                }
            } catch (e) { /* 忽略已被销毁的对象错误 */ }
        }, 10000); // 10000ms = 10秒
    }

    // --- 播放新 SFX ---
    const src = /^\d+$/.test(url) 
        ? `https://music.163.com/song/media/outer/url?id=${url}.mp3` 
        : url;
    
    const sfx = new Audio(src);
    sfx.volume = settings.volume;
    sfx.play().catch(e => console.warn("SFX error:", e));

    // 更新追踪引用
    lastSfxAudio = sfx;
};

        // ==========================================
        // 3. 百科全书系统 (Codex System)
        // ==========================================
        // 当前选中的分类 Key (默认为 ALL)
        const activeCategory = ref('ALL');
        // 1. 基础列表计算 (计算解锁状态和是否为新条目)
        const keywordList = computed(() => {
            if (typeof KEYWORDS_DB === 'undefined') return [];
            return Object.values(KEYWORDS_DB).map(k => ({
                ...k,
                unlocked: state.unlockedKeywords.includes(k.id),
                // isNew: 已解锁 但 未在 readKeywords 中
                isNew: state.unlockedKeywords.includes(k.id) && !state.readKeywords.includes(k.id)
            })).sort((a, b) => a.id.localeCompare(b.id)); 
        });

// 2. 全局红点 (用于主入口按钮)
const hasNewKeyword = computed(() => {
    return keywordList.value.some(k => k.isNew);
});

// 3. 动态生成分类标签页 (Tab) 数据
        // 这里直接读取全局变量 LORE_CATEGORIES
        const categoryTabs = computed(() => {
            if (typeof LORE_CATEGORIES === 'undefined') return [];

            // 遍历配置对象生成数组
            return Object.keys(LORE_CATEGORIES).map(key => {
                const config = LORE_CATEGORIES[key];
                
                // 计算该分类下是否有红点
                let hasNewInTab = false;
                
                if (key === 'ALL') {
                    // ALL 分类：只要有任意新条目就亮
                    hasNewInTab = hasNewKeyword.value;
                } else {
                    // 其他分类：检查该分类定义的 types 列表
                    hasNewInTab = keywordList.value.some(k => 
                        k.isNew && config.types.includes(k.type)
                    );
                }

                return {
                    key: key,           // 例如 'PROFILE'
                    label: config.label,// 例如 '档案'
                    hasNew: hasNewInTab
                };
            });
        });

        // 4. 根据当前 Tab 筛选列表
        const filteredKeywordList = computed(() => {
            // 先获取所有已解锁的
            const list = keywordList.value.filter(k => k.unlocked);
            
            // 安全检查
            if (typeof LORE_CATEGORIES === 'undefined') return list;

            const currentConfig = LORE_CATEGORIES[activeCategory.value];
            if (!currentConfig) return list;

            // 如果是 ALL，返回全部
            if (activeCategory.value === 'ALL') {
                return list;
            }
            
            // 否则根据 types 数组过滤
            // 比如 PROFILE 只返回 types 包含 'PROFILE' 的条目
            // 比如 WORLD 返回 types 包含 'LOCATION', 'HISTORY' 等的条目
            return list.filter(k => currentConfig.types.includes(k.type));
        });
        
        // 选择词条时，标记为已读
// 选择条目逻辑 (标记已读)
const selectKeyword = (k) => {
    if (k.unlocked) {
        selectedKeyword.value = k;
        if (!state.readKeywords.includes(k.id)) {
            state.readKeywords.push(k.id);
            // Vue 的响应式系统会自动重新计算 computed，更新所有红点状态
        }
    }
};
        
        // 核心动作：解锁关键词
        const unlockKeyword = (id) => {
            if (typeof KEYWORDS_DB === 'undefined' || !KEYWORDS_DB[id]) return;
            
            if (!state.unlockedKeywords.includes(id)) {
                state.unlockedKeywords.push(id);
                // 注意：这里不再手动设置 hasNewKeyword.value = true
                // 因为计算属性会自动检测到 unlockedKeywords 变了，且 readKeywords 没变
                
                showToast(`DATABASE UPDATED`, `New Entry: ${KEYWORDS_DB[id].title}`);
                playSfx('assets/sfx_notification.mp3'); 
            }
        };

        // 【自动文本扫描器：忽略括号内容进行匹配
        // 逻辑：遍历数据库 -> 检查文本是否包含 Title -> 解锁, 
        const scanTextForKeywords = (text) => {
            if (!text || typeof KEYWORDS_DB === 'undefined') return;
            
            for (const key in KEYWORDS_DB) {
                const entry = KEYWORDS_DB[key];
                
                // 性能优化：如果已经解锁了，就跳过检测
                if (state.unlockedKeywords.includes(entry.id)) continue;
        
                // 1. 获取原始标题
                let matchTarget = entry.title;
        
                // 2. 正则清洗：移除括号及括号内的内容 (支持中英文括号)
                // 正则解释：
                // \s*      -> 匹配可选的前导空格 (防止 "Arno (你)" 变成 "Arno " 带个空格)
                // [\(（]   -> 匹配英文左括号 或 中文左括号
                // [^\)）]* -> 匹配括号内除了右括号以外的所有字符
                // [\)）]   -> 匹配英文右括号 或 中文右括号
                matchTarget = matchTarget.replace(/\s*[\(（][^\)）]*[\)）]/g, '').trim();
        
                // 3. 核心检测：只要清洗后的词不为空且存在于文本中，即解锁
                if (matchTarget && text.includes(matchTarget)) {
                    unlockKeyword(entry.id);
                }
            }
        };

        // ==========================================
        // 4. 辅助功能 (Helpers)
        // ==========================================

        // 滚动到底部
        const scrollToBottom = () => {
            if (scrollTarget.value) {
                // 使用 setTimeout 确保 DOM 布局更新（Footer 出现挤压高度）后再滚动
                setTimeout(() => {
                    scrollTarget.value.scrollTo({
                        top: scrollTarget.value.scrollHeight, // 滚到底
                        behavior: 'smooth'
                    });
                }, 50); // 给一点点延迟让 Vue 更新 DOM
            }
        };

        // 显示 Toast 提示
        const showToast = (msg, subMsg = '') => {
            // 如果有正在显示的，先清除
            if (toastTimer) clearTimeout(toastTimer);
            
            toast.show = true;
            toast.msg = msg;
            toast.subMsg = subMsg;
            
            // 3秒后自动消失
            toastTimer = setTimeout(() => {
                toast.show = false;
            }, 3000);
        };

        // 根据角色名颜色获取边框颜色 (用于 HTML class绑定)
        const getSpeakerConfig = (speaker) => {
            const config = (typeof STORY !== 'undefined' && STORY.__CONFIG__ && STORY.__CONFIG__.speakers) 
                ? STORY.__CONFIG__.speakers 
                : {};
            return config[speaker] || null;
        };
        const getSpeakerBorder = (speaker) => {
            const conf = getSpeakerConfig(speaker);
            // 默认灰色 #4b5563 (gray-600)
            const color = conf ? conf.color : '#4b5563'; 
            return {
                backgroundColor: color,
                boxShadow: `0 0 10px ${color}`
            };
        };

        // 获取文字颜色的辅助函数
        const getSpeakerColor = (speaker) => {
            const conf = getSpeakerConfig(speaker);
            return {
                color: conf ? conf.color : '#9ca3af' // 默认 gray-400
            };
        };
        
        // 异步延迟函数 (用于打字机效果)
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        // ==========================================
        // 5. 核心引擎逻辑 (Node Loader)
        // ==========================================

        const loadNode = async (nodeId, isRestoreMode = false) => {
            // 校验节点是否存在
            if (typeof STORY === 'undefined') {
                console.error("Critical Error: STORY object not found.");
                return;
            }
            
            const node = STORY[nodeId];
            if (!node) {
                console.error(`Error: Node [${nodeId}] not found`);
                showToast(`ERR: MISSING NODE [${nodeId}]`);
                return;
            }

            // 更新当前节点指针
            state.currentNodeId = nodeId;

            // 1. 处理纯逻辑节点 (Function Node)
            // 如果节点包含 fn，执行它并跳转到返回值指向的节点
            if (node.fn) {
                const nextId = node.fn(state);
                loadNode(nextId, isRestoreMode);
                return;
            }

            // 2. 环境渲染 (Environment)
            if (node.bg) state.bgStyle = node.bg;
            if (node.bgm) playBgm(node.bgm);
            if (node.sfx && !isRestoreMode) playSfx(node.sfx);

            // 3. 执行节点动作 (Action)
            // 兼容性保留：传入 unlock 助手，虽然现在主要靠自动扫描
            if (node.action && !isRestoreMode) {
                node.action(state, { unlock: unlockKeyword });
            }

            // 4. 文本渲染 (Text Rendering)
            if (!isRestoreMode) {
                isTyping.value = true;
                currentChoices.value = [];

                if (node.text && node.text.length > 0) {
                    for (const segment of node.text) {
                        // 【关键步骤】在显示文本前，先扫描其中是否包含关键词
                        scanTextForKeywords(segment.t);
                        scanTextForKeywords(segment.s); // 扫名字 (Speaker)
                        // 动态计算延迟：字数越多停顿越久，受全局速度设置影响
                        const baseDelay = 500 + (segment.t.length * 20);
                        const finalDelay = Math.max(100, baseDelay / settings.speed);
                        
                        await delay(finalDelay);

                        // 推入历史记录
                        history.value.push({
                            speaker: segment.s,
                            text: segment.t,
                            type: segment.s === 'SYSTEM' ? 'system' : 'normal'
                        });

                        await nextTick();
                        scrollToBottom();
                    }
                }
                isTyping.value = false;
            }

            // 5. 选项渲染 (Choice Rendering)
            if (node.choices) {
                let rawChoices = [];
                // 支持函数动态生成选项
                if (typeof node.choices === 'function') {
                    rawChoices = node.choices(state);
                } else {
                    // 静态选项增加 showIf 条件过滤
                    rawChoices = node.choices.filter(c => {
                        if (c.showIf && typeof c.showIf === 'function') {
                            return c.showIf(state);
                        }
                        return true;
                    });
                }

                // 选项文本也需要扫描关键词
                rawChoices.forEach(choice => {
                    scanTextForKeywords(choice.text);
                });

                currentChoices.value = rawChoices;

            } else if (node.next) {
                // 如果没有 choices 但有 next，自动生成继续按钮
                currentChoices.value = [{ 
                    text: ">> CONTINUE [继续]", 
                    next: node.next,
                    action: node.action 
                }];
            } else {
                // 结局节点，无选项
                currentChoices.value = [];
            }

            await nextTick();
            scrollToBottom();
        };

        const makeChoice = (choice) => {
            // 1. 记录玩家选择 (排除系统跳转)
            if (choice.text.indexOf(">>") === -1) {
                history.value.push({
                    speaker: 'Arno',
                    text: choice.text.replace(/<[^>]+>/g, ''), // 去除 HTML 标签后记录
                    type: 'normal'
                });
            }

            // 2. 执行选项副作用
            if (choice.action) {
                choice.action(state, { unlock: unlockKeyword });
            }

            // 3. 决定下一跳
            // 优先检查 fn (用于结局判定等动态跳转)，其次检查 next
            let nextId = choice.next;

            if (choice.fn) {
                const result = choice.fn(state);
                if (result) {
                    nextId = result;
                }
            }

            // 4. 执行跳转
            if (nextId) {
                loadNode(nextId);
            } else {
                console.warn("End of line or missing next node.");
            }
        };

        // ==========================================
        // 6. 存档管理系统 (Save/Load System)
        // ==========================================
        
        // 刷新存档列表 (读取 LocalStorage 中的元数据)
        const refreshSaves = () => {
            for (let i = 1; i <= 3; i++) {
                const key = `gda_save_slot_${i}`;
                const raw = localStorage.getItem(key);
                if (raw) {
                    try {
                        const data = JSON.parse(raw);
                        saves.value[i] = {
                            date: data.date,
                            nodeName: data.nodeId // 这里简单存 ID，也可以存章节名
                        };
                    } catch (e) { 
                        saves.value[i] = null; // 数据损坏视为空
                    }
                } else {
                    saves.value[i] = null;
                }
            }
        };

        // 打开存档管理器
        const openSaveManager = () => {
            refreshSaves();
            modalMode.value = 'save';
        };

        // 执行保存 (Slot 1-3)
        const doSave = (slot) => {
            const saveFile = {
                id: state.currentNodeId, // 兼容旧版字段名 id
                nodeId: state.currentNodeId,
                state: state,
                history: history.value,
                date: new Date().toLocaleString()
            };
            try {
                localStorage.setItem(`gda_save_slot_${slot}`, JSON.stringify(saveFile));
                refreshSaves(); // 保存后立即刷新 UI
                showToast("SYSTEM", `Data Written to Memory Block 0${slot}`);
            } catch (e) {
                showToast("ERROR", "LocalStorage Full");
                console.error("Save failed:", e);
            }
        };

        // 执行读取 (Slot 1-3)
        const doLoad = (slot) => {
            const raw = localStorage.getItem(`gda_save_slot_${slot}`);
            if (!raw) {
                showToast("ERROR", "Empty Slot");
                return;
            }
            try {
                const data = JSON.parse(raw);
                
                // 1. 恢复状态
                // 使用 Object.assign 保持响应性
                Object.assign(state, data.state);
                // 兼容性处理：如果旧存档没有 readKeywords，
                // 默认将当前已解锁的全部设为已读，避免旧玩家上线看到满屏红点
                if (!state.readKeywords) {
                    state.readKeywords = [...state.unlockedKeywords];
                }
                history.value = data.history || [];
                state.currentNodeId = data.nodeId || data.id; // 兼容旧版

                // 2. 恢复环境
                if (state.bgStyle) {
                    const bgEl = document.getElementById('bg-layer');
                    if (bgEl) bgEl.style.backgroundImage = state.bgStyle;
                }
                if (state.currentBgm) {
                    playBgm(state.currentBgm);
                }

                // 3. 恢复节点 (isRestoreMode = true，不播放打字机动画)
                loadNode(state.currentNodeId, true);

                // 4. 关闭菜单并提示
                modalMode.value = 'none';
                showToast("SYSTEM", "Timeline Restored successfully");
                
                setTimeout(scrollToBottom, 100);
            } catch (e) {
                console.error(e);
                showToast("ERROR", "Save File Corrupted");
            }
        };

        // 重置游戏
        const resetGame = () => {
            if (confirm("WARNING: RESET SYSTEM? \n这将清除所有设置和自动存档，但保留手动存档位。")) {
                // 清除设置
                localStorage.removeItem('gda_settings');
                // 这里我们选择不清除 Slot 1-3，只重置当前状态
                // 如果想完全清除，可以遍历 remove
                location.reload();
            }
        };

        // ==========================================
        // 7. 初始化与交互绑定 (Initialization)
        // ==========================================

        const openSettings = () => {
            modalMode.value = 'settings';
        };

        const closeModal = () => {
            modalMode.value = 'none';
        };

        onMounted(() => {
            // 注入 Story 中定义的自定义 CSS
            if (typeof STORY !== 'undefined' && STORY.__CONFIG__ && STORY.__CONFIG__.css) {
                const styleId = 'story-custom-css';
                if (!document.getElementById(styleId)) {
                    const style = document.createElement('style');
                    style.id = styleId;
                    style.innerHTML = STORY.__CONFIG__.css;
                    document.head.appendChild(style);
                }
            }
             // 1. 加载系统设置
            const savedSettings = localStorage.getItem('gda_settings');
            if (savedSettings) {
                try {
                    Object.assign(settings, JSON.parse(savedSettings));
                } catch (e) { console.warn("Settings reset"); }
            }

            // 监听设置变化自动保存
            watch(settings, () => {
                localStorage.setItem('gda_settings', JSON.stringify(settings));
            }, { deep: true });

            // 2. 启动游戏逻辑
            // 优先检查是否有"自动存档" (如果是刷新页面的话)，或者直接开始新游戏
            // 这里我们设计为直接进入序章
            loadNode('prologue_worldview');

            // 3. 移动端音频自动播放限制解除 Hack
            const unlockAudio = () => {
                // 如果当前有 BGM 且未播放，尝试播放
                if (state.currentBgm && bgmAudio.paused) {
                    bgmAudio.play().then(() => {
                        console.log("Audio Context Unlocked");
                        // 解锁成功后移除监听
                        document.removeEventListener('click', unlockAudio);
                        document.removeEventListener('touchstart', unlockAudio);
                    }).catch(e => {});
                }
            };
            document.addEventListener('click', unlockAudio);
            document.addEventListener('touchstart', unlockAudio);
        });

        // 导出给模板使用
        return {
            // 响应式数据
            history, currentChoices, isTyping, scrollTarget, showSettings: modalMode, // 兼容旧模板变量名
            toast, state, settings, inventory, saves,
            modalMode, hasNewKeyword, keywordList, selectedKeyword,activeCategory,categoryTabs,filteredKeywordList,
            
            // 方法
            makeChoice, saveGame: () => openSaveManager(), // 映射到新管理器
            loadGame: () => openSaveManager(),
            resetGame, getSpeakerBorder, getSpeakerColor, 
            
            // 新版 UI 方法
            openSettings, closeModal, selectKeyword,
            openSaveManager, doSave, doLoad
        };
    }
}).mount('#app');