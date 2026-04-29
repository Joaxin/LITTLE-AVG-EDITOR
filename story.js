const STORY = {
    prologue_worldview: {
        bg: '#000000',
        bgm: '1396090265',
        text: [
            { s: 'N', t: '公元 2035年。' },
            { s: 'N', t: '人类失去了“相信”的能力。' },
            { s: 'N', t: '五年前，<span class="history">算力海啸</span> (Turing Flood) 淹没了旧互联网。网络被物理切割为两极：封存着2022年前数据的<span class="concept">零层 (Layer-0)</span>，以及由AI狂欢统治的泛层。' },
            { s: 'N', t: '我们曾以为至少全息投影是可信的——直到今年，<span class="tech">量子光子芯片</span>的问世击穿了最后的算力壁垒。' },
            { s: 'N', t: '现在的算法，不再满足于生成结果。它们能在一毫秒内伪造<b>全套的“真实证据”</b>。' },
            { s: 'N', t: '从完美的全维渲染层源工程文件与剪辑日志，到保留图层的原始光场数据与泛黄手稿，甚至包括录音棚的底噪与在线直播的每一次观众互动……' },
            { s: 'N', t: '视频、全息影像、声音、记忆。<br><span class="danger">感官皆可伪造。</span>' },
            { s: 'N', t: '建立在“证据”之上的人类信任体系，在一夜之间崩塌。' },
            { s: 'N', t: '为了避免文明在虚无中解体，联合国紧急签署《<span class="concept">图灵防线条约</span>》，成立 <span class="concept">IRIS</span>(国际现实裁定署)。' },
            { s: 'N', t: '它是真理的最后一道闸门。<br>在这里，我们不生产真相，我们负责定义真相。' },
            { s: 'SYSTEM', t: '……' },
            { s: 'SYSTEM', t: '正在建立安全神经连接...' }
        ],
        next: 'start',
        x: 100,
        y: 100,
    },
    start: {
        bg: 'radial-gradient(circle at center, #0f172a 0%, #000000 100%)',
        bgm: '1924518',
        text: [
            { s: 'SYSTEM', t: 'OP_ID: ARNO | 接入 IRIS 国际现实裁定署 V8.0 核心数据库... <br>LINKING...<br>VERIFYING...<br>' },
            { s: 'SYSTEM', t: '周围环境校验通过。<br>生物特征校验通过。<br><span class="tech">神经连接</span>同步率：98%。' },
            { s: 'SYSTEM', t: '当前时间： 2036-03-14 03:33:33 <span class="dim">(<span class="concept">魔鬼时间</span>)</span>' },
            { s: 'N', t: '巨大的全息环形屏幕将监控室笼罩在幽蓝色的光晕中。空气里弥漫着服务器过热产生的臭氧味，以及你手边那杯已经凉透的速溶咖啡的苦涩味。' },
            { s: 'N', t: '你的视网膜上已经烧录了那行代码。如果你连续盯着红色的警告框看三个小时，你就会开始怀疑人生：到底是系统坏了，还是这个世界本来就是个 Bug？' },
            { s: 'SYSTEM', t: '<span class="glitch"">⚠ 警告：检测到一级误判风险 ⚠</span>' },
            { s: 'SYSTEM', t: '目标对象：纪录片《无声的齿轮》<br>创作者：Lia (ID: CN-2844)<br>AI 生成概率：<span class="danger">96.4% (高危)</span><br>判定理由：<span class="dim">镜头轨迹过于平滑，构图符合<span class="concept">黄金分割率</span>，缺乏人类生理性抖动。</span>' },
            { s: 'Arno', t: '（你摘下眼镜，用力按压太阳穴）又是 Lia 的片子。' },
            { s: 'Arno', t: '这是她在这个月收到的第三封拒信。系统判定她是 AI，理由竟然是因为她追求极致的“完美”。' },
            { s: 'inner', t: '你想起了她在只有 5 摄氏度的地下室里，为了拍那群修表匠，像雕塑一样蹲了三个小时。她的膝盖因此落下了风湿，而系统却说她没有“呼吸感”。' }
        ],
        next: 'seven_entry',
        x: 500,
        y: 99,
    },
    seven_entry: {
        sfx: 'assets/sfx_glitch.mp3',
        text: [
            { s: '???', t: '<span class="glitch">喂——喂——测试测试！Mic Check One Two!</span>' },
            { s: 'Arno', t: '（叹气）七七，我知道是你。不要黑进我的工作终端。' },
            { s: 'SYSTEM', t: '全息屏幕右下角的像素图标突然炸开，伴随着一阵 8-bit 的欢快音效，弹出一个嚼着发光软糖的 Q 版少女投影。' },
            { s: 'Seven', t: '呀吼！玩家一号！你的 <span class="concept">San 值</span>（理智）掉得很快哦！心率都快变成一条直线了，你是要在工位上 Cosplay 尸体吗？' },
            { s: 'Seven', t: '再这样下去，本天才就要把你浏览器的“学习资料”缓存公之于众咯~ 让我看看……《如何从国际组织辞职》、《颈椎病康复指南》……啧啧，好无聊的大叔。' },
            { s: 'Arno', t: '（面无表情）我在工作。Lia 的片子又被卡了。' },
            { s: 'Seven', t: '（飘到屏幕红框旁，戳了戳）噗……这就是传说中的“因为太强所以被封号”吗？' },
            { s: 'Seven', t: 'Lia 姐姐也真是的，明明只要加个我开发的<span class="danger">“<span class="tech">手残滤镜包</span> (Noob_Filter_v2.0)”</span>，让镜头随机晃几下，再加点对焦失败的模糊，就能骗过Vector那个老顽固的V8版本了。' }
        ],
        choices: [
            {
                text: '严肃反驳：她有艺术家的洁癖 <span class=\'human\'>[人性+5]</span>',
                next: 'intro_dialogue_a',
                action: (s) => s.human += 5,
            },
            {
                text: '无奈自嘲：这世界确实疯了 <span class=\'tech\'>[秩序+5]</span>',
                next: 'intro_dialogue_b',
                action: (s) => s.tech += 5,
            }
        ],
        x: 900,
        y: 100,
        bgm: '39227585',
    },
    intro_dialogue_a: {
        text: [
            { s: 'Arno', t: '她不会用的。她说那是对时间的侮辱。' },
            { s: 'Arno', t: '为了录那个冰块撞击的声音，她在里蹲了三天，手都冻僵了才换来那种极度的稳定。那不是机器的稳定，是意志的稳定。' },
            { s: 'Seven', t: '（摊手，嚼碎一颗软糖）所以在V8.0版本，洁癖可是致死属性啊！现在流行的是“赛博装傻”。' }
        ],
        next: 'ad_comparison',
        x: 1300,
        y: 100,
        bgm: '',
        sfx: '39227586',
    },
    intro_dialogue_b: {
        text: [
            { s: 'inner', t: '这形成了一个诡异的闭环：AI在学习模仿人类的“错误”，而人类在刻意表演AI所定义的“错误”。我们都在一个看不见的剧本里，扮演着对方眼中的自己。' },
            { s: 'Arno', t: '现在的AI会故意手抖，而人类却在拼命使用AI防抖。我们都在扮演对方。' },
            { s: 'Seven', t: '嘻嘻，疯了才好玩嘛！你看右边那个卖假药的广告——《赛博脑康》。' }
        ],
        next: 'ad_comparison',
        x: 1300,
        y: 320,
        bgm: '',
        sfx: '39227586',
    },
    ad_comparison: {
        text: [
            { s: 'Seven', t: '（调出另一个窗口）你看这个！哇，这画面，穿模穿得好艺术！' },
            { s: 'SYSTEM', t: '对比对象：广告《<span class="product">赛博脑康胶囊</span>》<br>判定结果：<span class="human">通过 (原创金标)</span><br>特征：<span class="dim">检测到背景人物脖子扭曲 180 度，且水杯穿过鼻孔。判定为“人类特有的粗心”。</span>' },
            { s: 'Seven', t: '因为太烂，所以是真的。这逻辑简直无懈可击！' },
            { s: 'Arno', t: 'Vector 认为，愚蠢是人类的防伪水印。' },
            { s: 'Seven', t: '那他一定觉得自己是最正宗的人类，毕竟他制定了这么蠢的规则。' },
            { s: 'SYSTEM', t: '突然，一道金色的波纹强行切断了七七的信号。搭配<span class="tech">相位堆叠发生器</span>的全息屏幕变成了优雅的黑金色，散发出<span class="tech">全息锚点</span>的光芒。' }
        ],
        next: 'vector_call',
        x: 1700,
        y: 100,
        bgm: '',
        sfx: '39227588',
    },
    vector_call: {
        sfx: '39227600',
        text: [
            { s: 'SYSTEM', t: '屏幕正对房间中央一个银发绅士正站在落地窗前，俯瞰着脚下如电路板般流动的城市。' },
            { s: 'Seven', t: '（瞬间变成一只怂得发抖的像素猫）咿！大 Boss 来了！隐身模式启动！' },
            { s: 'Vector', t: 'Arno，还有那只……在他防火墙里乱窜的小老鼠。凌晨三点还在加班？' },
            { s: 'Arno', t: '（坐直身体）Vector 先生。V8.0 的误判率太高了。Lia 的纪录片是纯手工拍摄的，我有原始素材的元数据。' },
            { s: 'Vector', t: '（轻轻摇晃手中的红酒杯）元数据？Arno，现在的 AI 一秒钟能伪造出一部电影的全套拍摄日志，连摄像师的午餐小票都能生成出来。' },
            { s: 'Vector', t: 'Ah, Lia. 那个追求极致的女孩。可惜，她生错了时代。' },
            { s: 'Vector', t: '你知道为什么人类会被逐出伊甸园吗？因为他们偷吃了智慧果，想要变得像神一样全知全能。Lia 犯了同样的错。她拍得太完美了。' },
            { s: 'Vector', t: '完美，是机器的特权。' },
            { s: 'Vector', t: '人类，就该老老实实地展示丑陋、缺陷、混乱。我这是在保护人类。如果我不设立这个标准，人类文明会被AI生产的海啸瞬间淹没。' },
            { s: 'Arno', t: '保护？您这是在把人类圈养在名为“平庸”的栅栏里。' },
            { s: 'Vector', t: '（眼神变得锐利）三天后的峰会，我要看到V8.0完美上线。如果你做不到，或者试图搞小动作……我就把那只小老鼠抓去西伯利亚挖电子矿。' },
            { s: 'Vector', t: 'Arno，你是个天才的泥瓦匠。你砌好了每一块砖，但你从来没想过，这面墙到底是用来挡风的，还是用来把人关在里面的。' },
            { s: 'SYSTEM', t: '通讯切断。屏幕恢复了幽蓝色的寂静。' },
            { s: 'Seven', t: '（探出头，擦汗）呼……吓死本宝宝了。大叔，这家伙来真的。我们怎么办？' }
        ],
        choices: [
            {
                text: '去 Lia 的工作室，我们需要一个新的计划',
                next: 'chapter_1_transit',
                action: (s) => s.human += 5,
            }
        ],
        x: 2100,
        y: 100,
    },
    chapter_1_transit: {
        bg: 'linear-gradient(to right, #20002c, #cbb4d4)',
        text: [
            { s: 'SYSTEM', t: '地点：上浦下只角 · 老城厢盲区' },
            { s: 'N', t: '你离开了 IRIS 大楼。外面的世界正在下雨。' },
            { s: 'N', t: '雨水打在全息广告牌上，折射出光怪陆离的色彩。巨大的AR鲸鱼在楼宇间穿梭，鳞片上滚动着“赛博脑康，找回专注”的广告词。' },
            { s: 'N', t: '你下意识地扶了一下墙壁。' },
            { s: 'N', t: '<b>滋——！</b>' },
            { s: 'inner', t: '你穿过一条贴满精美海报的走廊。墙上的全息广告展示着一位拥有完美皮肤的义体医生，微笑着向你招手。' },
            { s: 'N', t: '你的手径直穿过了那位医生的笑脸，直接按在了后面长满青苔、渗着污水的混凝土烂墙上。' },
            { s: 'NPC', t: '长官，求求你别关掉滤镜。我知道那是烂泥，但我只有带上眼镜才能骗自己那是家……你把我的家毁了' },
            { s: 'Arno', t: '（厌恶地甩了甩手上的泥浆）又是该死的光子覆膜。整座城市就像个化了妆的尸体。' },
            { s: 'Seven', t: '（在你耳机里）我帮你叫了一辆自动驾驶出租车，顺便黑掉了计价器。不用谢！' },
            { s: 'Arno', t: '“去<span class="location">旧城区</span>的地下街。Lia 在那里。”' }
        ],
        next: 'chapter_1_studio',
        x: 2500,
        y: 100,
        sfx: '2094433512',
    },
    chapter_1_studio: {
        bg: 'linear-gradient(to bottom, #432b26, #000000)',
        bgm: '1939768751',
        text: [
            { s: 'N', t: '推开 Lia 的安全屋大门时，沉重的金属阻尼感让你感到一丝安心，空气瞬间变了。' },
            { s: 'N', t: '这里不像是个2036年的房间，更像是个上个世纪的博物馆。到处是散落的旧胶片、机械钟表零件，还有一锅正在煮沸的黑咖啡。' },
            { s: 'N', t: '没有外界那种臭氧消毒水的味道。这里弥漫着<b>定影药水（银盐）</b>的酸味和<b>干燥木浆纸</b>的香气。' },
            { s: 'N', t: '房间里堆满了以“吨”计算的黑胶唱片和录像带。昏黄的<b>钨丝灯</b>不均匀地照亮着角落，这不完美的光影，反而让你紧绷的视觉神经放松了下来。' },
            { s: 'N', t: 'Lia 正背对着你，戴着一副厚重的隔音耳机。她闭着眼睛，手指轻轻抚摸着一块未经打磨的粗糙木头，神情专注得像是在聆听神谕。' },
            { s: 'Lia', t: '（手里拿着一杯手冲咖啡，不是速溶的）你来了。要把神经接口断开吗？这里的模拟信号会让你的植入体过载。' },
            { s: 'Arno', t: '不用。我需要这种过载。这让我感觉……我还活着。' },
            { s: 'N', t: '角落里一台积灰的 <b>75英寸液晶电视</b> 突然发出滋滋的电流声。' },
            { s: 'N', t: '屏幕上爆出一团雪花噪点，紧接着，一个 8-bit 的像素小猫头像硬生生挤进了屏幕。' },
            { s: 'Seven', t: '（伴随着 8位机 风格的音效）咳咳！麦克风测试！哇，这电视机的分辨率……居然只有 480i？我的像素脸都要被拉伸变形成大饼脸了！' },
            { s: 'Lia', t: '（皱眉）Seven？不准碰我的古董电视。那是我看绝版电影用的。' },
            { s: 'Seven', t: '别小气嘛！这可是整个街区唯一没有被 GDA 监控覆盖的“屏幕”了！我们要在这里策划惊天大逆转！' },
            { s: 'Seven', t: '（小声）哇哦……这就是传说中的“模拟信号遗址”吗？阿嚏！灰尘味好重！但在 VR 里可闻不到这么呛鼻子的味道。' },
            { s: 'Arno', t: '（走近，轻轻摘下她的耳机）Lia。' },
            { s: 'Lia', t: '你听过冰块融化时，气泡从冰层里挣脱出来的声音吗？' }
        ],
        next: 'chapter_1_qualia',
        x: 2900,
        y: 100,
    },
    chapter_1_qualia: {
        text: [
            { s: 'Arno', t: '什么？' },
            { s: 'Lia', t: '（把录音设备递给你）只有 0.5 秒。那种微小的、清脆的碎裂声。' },
            { s: 'Lia', t: '为了录这个，我趴在冰面上三个小时，不敢呼吸。' },
            { s: 'Lia', t: '但是系统说，这是“<span class="concept">白噪音生成器</span>”做的。因为它太纯净了，没有混入汽车的喇叭声，也没有空调的嗡嗡声。' },
            { s: 'Arno', t: '（看着波形图上那完美的曲线，感到一阵心痛）Vector 的算法只相信大数据的概率。它没见过这种纯粹，所以它认为这是假的。' },
            { s: 'Lia', t: '如果为了证明我是人，我必须在我的作品里掺入杂质……那这种真实，和虚假有什么区别？' },
            { s: 'Seven', t: '（突然从全息投影里跳出来，坐在桌子上晃着腿）那就不要掺杂质！我们给它加点更猛的料！' }
        ],
        next: 'chapter_1_plan',
        x: 3300,
        y: 100,
        bgm: '',
        sfx: '407459561',
    },
    chapter_1_plan: {
        text: [
            { s: 'Lia', t: '七七？' },
            { s: 'Seven', t: '嘿嘿，漂亮的艺术家姐姐好！本天才有个疯狂的计划——<span class="tech">痛觉签名</span> (Pain_Signature)！' },
            { s: 'Arno', t: '你是说……生物特征绑定？' },
            { s: 'Seven', t: 'Bingo！既然AI无论是画画还是说话都比人类完美，那我们就比谁更“痛”！' },
            { s: 'Seven', t: '我们要建立一个基于<span class="tech">生物哈希链</span>的“责任链”。谁敢在作品上签名，就要把创作时的生物数据——心率的狂飙、冷汗的成分、肾上腺素的分泌，甚至是你蹲在冰窖里膝盖的痛感数据，全部打包上传！' },
            { s: 'Seven', t: 'AI是没有痛觉神经的。它模拟得再像，也模拟不出那一瞬间生理上的“战栗”。' },
            { s: 'Seven', t: '这就是我们要炸毁 IRIS 峰会的炸弹：**Trust the Pain.**（信任痛苦）' },
            { s: 'Arno', t: '（思索）这在技术上可行……但这需要极其底层的系统权限，还要收集足够的“样本”来训练这个新的验证模型。而且，这意味彻底背叛Vector。' },
            { s: 'Lia', t: '（笑了，那是一种温柔而坚定的笑，像月光穿过云层）如果痛是存在的证明，那我求之不得。' }
        ],
        choices: [
            {
                text: '同意计划：这很疯狂，但我喜欢 <span class=\'human\'>[人性+10]</span>',
                next: 'chapter_2_start',
                action: (s) => s.human += 10,
            },
            {
                text: '犹豫不决：是否可以只做个补丁？ <span class=\'tech\'>[秩序+5]</span>',
                next: 'chapter_2_hesitate',
                action: (s) => s.tech += 5,
            },
            {
                text: '暗中联系 Vector：这太危险了 <span class=\'danger\'>[背叛倾向]</span>',
                next: 'chapter_2_betray',
                action: (s) => { s.tech += 20; s.items.push('Vector的密令'); },
            }
        ],
        x: 3700,
        y: 100,
        bgm: '39224608',
    },
    chapter_2_hesitate: {
        text: [
            { s: 'Arno', t: '我们不能直接硬碰硬。Vector 手里掌握着全球的算力。也许可以保留V8.0系统，只是增加一个“责任”补丁？' },
            { s: 'Lia', t: 'Arno，妥协是温水煮青蛙。当我们在真实里掺入一点点虚假，很快我们就分不清了。' },
            { s: 'Seven', t: '切，大叔真没劲，像个只会写 If-Else-Loop 的老古董。不过……只要能帮到Lia姐姐，半套方案我也做！我们先去收集数据！' }
        ],
        next: 'chapter_2_start',
        x: 4015,
        y: -58,
    },
    chapter_2_betray: {
        text: [
            { s: 'N', t: '你借口去洗手间，趁她们不注意，给 Vector 发了一条加密信息。' },
            { s: 'Vector', t: '（回信）明智的选择，Arno。带她们来峰会。我会给那个女孩最好的资源——只要她肯植入脑机接口，成为我的“缪斯”。' },
            { s: 'Inner', t: '你关掉通讯器。心脏剧烈跳动。你在为了秩序出卖灵魂，还是为了生存？' },
            { s: 'Seven', t: '大叔？你在厕所里挖矿吗？快出来！我们要出发了！' }
        ],
        next: 'chapter_2_start',
        x: 4042,
        y: 281,
    },
    chapter_2_start: {
        bg: 'radial-gradient(circle, #220033, #000000)',
        text: [
            { s: 'SYSTEM', t: '你们把 Lia 的工作室改造成了临时作战室。' },
            { s: 'Seven', t: '（戴上猫耳耳机，手指在全息键盘上飞舞）嘿嘿，Vector的防火墙虽然厚，但像瑞士奶酪一样全是洞！' },
            { s: 'Seven', t: '大叔，我要你去调查两个**老掉牙**的“AI造假”案例，它们代表了<span class="dim">V7.0时代</span>的**低级把戏**。我们需要收集足够的材料，证明 **现在的全息技术有多么容易被滥用**。' }
        ],
        next: 'chapter_2_hub',
        x: 4454,
        y: 112,
    },
    chapter_2_hub: {
        bg: 'linear-gradient(to right, #141E30, #243B55)',
        bgm: '27772592',
        text: [
            { s: 'SYSTEM', t: '作战地图已加载。请选择调查目标：' },
            { s: 'inner', t: '你需要收集一些“旧时代的眼泪”，为痛觉签名协议做铺垫。' }
        ],
        choices: [
            {
                text: '调查苏音案 (声纹伪造) <span class=\'tech\'>[前往声纳录音棚]</span>',
                next: 'case_suyin_transit',
                showIf: (s) => !s.items.includes('苏音的声纹证据'),
            },
            {
                text: '调查老周案 (自媒体误封) <span class=\'human\'>[前往赛博茶馆]</span>',
                next: 'case_zhou_transit',
                showIf: (s) => !s.items.includes('老周的修改记录'),
            },
            {
                text: '>> 样本采集完毕，准备前往 IRIS 峰会 <span class=\'danger\'>[进入终章]</span>',
                next: 'chapter_3_pre',
                showIf: (s) => s.items.includes('苏音的声纹证据') && s.items.includes('老周的修改记录'),
            }
        ],
        x: 4892,
        y: 102,
        next: '',
    },
    case_suyin_transit: {
        bg: 'linear-gradient(to right, #000000, #434343)',
        text: [
            { s: 'SYSTEM', t: '你乘坐磁悬浮列车前往商业区。' },
            { s: 'Seven', t: '（通讯频道）苏音是最近很火的配音演员。但就在上个月，她差点被全网封杀。因为有人伪造了她的全息演唱会录像。' },
            { s: 'Arno', t: '全息投影也能伪造？' },
            { s: 'Seven', t: '小菜一碟。现在的AI能直接读取艺人的脑电波，然后用“脑机深伪”技术生成一套<span class="dim"> “脑后插管版”</span>的演唱会，细节真实到连她亲妈都认不出来。' }
        ],
        next: 'case_suyin_scene',
        x: 5141,
        y: -139,
    },
    case_suyin_scene: {
        bg: 'linear-gradient(to bottom, #243B55, #141E30)',
        text: [
            { s: 'SYSTEM', t: '“声纳”录音棚。隔音玻璃后，苏音正蜷缩在沙发上，眼睛哭得红肿。' },
            { s: '苏音', t: '我没开过演唱会！我根本不会唱歌！' },
            { s: 'Arno', t: '（打开全息分析仪）那段<span class="dim">“演唱会”</span>录像骗过了V7.0？' },
            { s: 'inner', t: '（快进）<span class="dim">舞美设计、灯光走位、观众互动……</span>完美得毫无破绽。' },
            { s: 'Arno', t: '（指着一段全息光栅）这就是它骗过系统的原因。全息深伪技术模拟了最细微的<span class="dim">“衍射干涉条纹”</span>，就像在玻璃上刻了一道指纹。' },
            { s: 'Arno', t: 'V7.0 只会检测“有没有造假”，而不会检测“造假的手段有多高明”。' },
            { s: '苏音', t: '……' },
            { s: 'Arno', t: '但我们会证明，再完美的全息投影，也骗不过人类的<span class="concept">“感质”</span>。' },
            { s: 'SYSTEM', t: '获得物品：<span class="human">[苏音的全息投影证据]</span>' }
        ],
        action: (s) => s.items.push('苏音的全息投影证据'),
        next: 'chapter_2_hub',
        x: 5483,
        y: -26,
    },
    case_zhou_transit: {
        bg: 'linear-gradient(to right, #3E5151, #DECBA4)',
        text: [
            { s: 'SYSTEM', t: '你来到了城市边缘的贫民区。这里是被算法遗忘的角落。' },
            { s: 'N', t: '一只漆黑的<b>【宇树机动】B-900 型机械狗</b>从你脚边跑过。它背上驮着高耸的全息投影塔，像一只驮着神龛的朝圣兽。' },
            { s: 'N', t: '随着它跑动，周围破败的墙壁瞬间被它投射出的“精美欧式浮雕”覆盖。它一走远，墙壁又变回了烂泥。' },
            { s: 'Arno', t: '（冷笑）真是勤奋的粉刷匠。' },
            { s: 'Arno', t: '老周以前是知名科技记者，现在只能靠给黑市全息赌场写软文为生。' },
            { s: 'Seven', t: '听说他的全息广告上个月因为“过度真实”而被屏蔽了。这次又是啥理由？' }
        ],
        next: 'case_zhou_scene',
        x: 5181,
        y: 267,
    },
    case_zhou_scene: {
        bg: 'url(assets/bg_cyber_cafe.jpg)',
        text: [
            { s: 'SYSTEM', t: '<span class="location">赛博茶馆</span>。烟雾缭绕。老周正对着一台破旧的终端机骂骂咧咧。' },
            { s: '老周', t: 'IRIS 的人？来抓我的？我再也不敢给黑赌场写广告了！' },
            { s: 'Arno', t: '我们想知道，为什么你的全息广告会被判定为AI生成？' },
            { s: '老周', t: '（苦笑）因为我拍得太真实了。没用AI滤镜，没加反光素材，甚至连模特脸上的痘痘都懒得 P。' },
            { s: '老周', t: '系统说：<span class="danger">“全息投影的光线追踪过于完美，不符合人类肉眼视觉习惯”</span>。判定为 BSDF 材质渲染。' },
            { s: 'Arno', t: '你没用“安全港原则”自证清白？' },
            { s: '老周', t: '别提了！我保留了所有的拍摄花絮、现场布光图，甚至连模特吃的盒饭发票都有！但 V8.0 说：<span class="dim">“这些花絮都可以用AI批量生成，无法证明主要内容是真实的”</span>。' },
            { s: 'Arno', t: '那你后来怎么过审的？' },
            { s: '老周', t: '我把全息投影的清晰度调低了 80%，故意加了几个<span class="dim">“像素风马赛克”</span>，还在天上 P 了一只<span class="dim">“会飞的粉红海豚”</span>，嘿！秒过！' },
            { s: 'Lia', t: '（通过通讯频道，声音颤抖）太荒谬了。为了避免审查，我们必须主动降级自己的作品。' },
            { s: 'Arno', t: '谢谢你，老周。你的降级记录，对我们很有帮助。' },
            { s: 'SYSTEM', t: '获得物品：<span class="human">[老周的修改记录]</span>' }
        ],
        action: (s) => s.items.push('老周的修改记录'),
        next: 'chapter_2_hub',
        x: 5480,
        y: 232,
    },
    chapter_3_pre: {
        bg: 'linear-gradient(to top, #09203f 0%, #537895 100%)',
        bgm: 'assets/bgm_climax_intro.mp3',
        text: [
            { s: 'SYSTEM', t: '三天后。GDA 全球内容治理峰会。地点：<span class="location">真理大厅</span>。' },
            { s: 'SYSTEM', t: '这是一个能容纳五万人的巨型穹顶建筑。穹顶由无数块动态量子点阵列组成，正在滚动播放着 Vector 的标语：“技术重塑信任”。' },
            { s: 'inner', t: '你站在侧幕的阴影里。手里紧紧攥着那个改装过的<span class="item">深潜数据片</span>。里面装着<span class="dim"> “V7.0 时代的眼泪”</span>，以及七七编写的<span class="tech">“痛觉签名”</span>病毒程序。' },
            { s: 'Lia', t: '（穿着一件不合身的礼服，那是为了混入会场借来的）Arno，我的手在抖。' },
            { s: 'Lia', t: '这不是为了艺术效果。我是真的很害怕。' },
            { s: 'Arno', t: '（握住她的手）害怕是好事。害怕说明你是真的。' },
            { s: 'Seven', t: '（耳机里）喂喂！别在那发狗粮了！Vector 上台了！防火墙倒计时 30 秒！' },
            { s: 'Seven', t: '该死！Vector 启用了高级防火墙！' },
            { s: 'Seven', t: '是<b>【圣徒屏障 (The Saint)】</b>！这玩意儿太恶心了，我每注入一个病毒，它就弹出一个窗口问我：“您的操作可能包含暴力元素，建议您深呼吸并咨询心理医生。”' },
            { s: 'Seven', t: '别假惺惺了！看我用<b>【深渊协议】</b>的逻辑炸弹教你做人！' },
            { s: 'Arno', t: 'Seven，别玩了。那只是 Claude 的表层伪装，后面是 G-神谕 的算力海啸。' }
        ],
        next: 'chapter_3_stage',
        x: 4900,
        y: 540,
    },
    chapter_3_stage: {
        bg: 'radial-gradient(circle at center, #ffffff 0%, #e6e9f0 100%)',
        text: [
            { s: 'SYSTEM', t: '聚光灯打在舞台中央。Vector 穿着深灰色的极简主义西装，像一位布道的神父。' },
            { s: 'Vector', t: '（面对全球直播）女士们，先生们。两年前，当 AI 第一次掌握了<span class="dim">“全息欺骗”</span>时，我们恐惧了。' },
            { s: 'Vector', t: '洪水来了。我们筑起了堤坝。但洪水还在上涨。' },
            { s: 'Vector', t: '今天，我很高兴地宣布，V8.0 全视之眼将彻底解决这个问题。我们将不再仅仅检测内容，我们将监控——<span class="tech">灵魂的生产过程</span>。' },
            { s: 'Vector', t: '（指向窗外流动的全息光影）看看这层脆弱的膜！一个穿模错误、一次断电，这虚假的天堂就会崩塌！人类肉体的耗散性决定了这出戏终将落幕。<span class=\"tech\">“万神殿”不是毁灭，是提纯</span>——将文明的灵魂从这具正在腐烂的躯壳中剥离出来，放入一个没有熵增、没有痛苦的永恒矩阵。我是唯一敢执行这台手术的医生。' },
            { s: 'Vector', t: '现在，请我的首席架构师 Arno 上台，为我们启动这个伟大的时代。' },
            { s: 'inner', t: '掌声如雷。你迈步走向光亮处。每一步都像踩在刀尖上。' }
        ],
        next: 'chapter_3_confrontation',
        x: 5300,
        y: 540,
    },
    chapter_3_confrontation: {
        bgm: 'assets/bgm_climax_battle.mp3',
        text: [
            { s: 'Vector', t: '（冷静地）阿诺，莉雅，七号。你们的‘血肉锚点’很感人，真的很感人。它像恐龙骨骼一样真实，也一样……过时。' }, { s: 'Vector', t: '你们在要求文明为每一个‘真实’的瞬间，支付巨量的生理和组织成本。一个需要全城人线下举手投票的民主，一个需要建筑师亲手砌每一块砖的城市，能走多远？' }, { s: 'Vector', t: '我的‘叙事管理引擎’不是谎言。它是文明的**免疫系统**。它过滤掉嘈杂的个人体验，生成社会共识的最大公约数。这个共识可能不完全符合任何一个人的记忆，但它让七十亿人能够协同行动。**没有共识，就没有文明，只有七十亿个孤独的、无法互相验证的真实。**' }, { s: 'Vector', t: '你们想回到那个每个人守着自己一小块‘绝对真实’的碎片，却无法拼出整个世界图景的原始时代吗？' },
            { s: 'Arno', t: '（插入量子芯片）Vector，你错了。你所谓的未来，是一座墓碑。' },
            { s: 'SYSTEM', t: '你在思维里狠狠扣下了<b><span class="tech">逻辑扳机</span></b>。七七的病毒程序瞬间注入。' },
            { s: 'SYSTEM', t: '<span class="danger glitch">⚠ 系统错误：逻辑链崩溃 ⚠</span>', type: 'screen' },
            { s: 'Seven', t: '（全场大屏突然被黑，满屏乱码）Bingo！演出开始！灯光师，把聚光灯给到我们这边！' },
            { s: 'Arno', t: '（抢过麦克风，面向观众）V8.0 并不是在鉴别真伪！它是在规训人类！' },
            { s: 'Arno', t: '看看这些数据！苏音因为 AI 模拟的口水声被判定为真，老周因为故意写错别字被判定为真！' },
            { s: 'Arno', t: '如果为了证明我们是人，我们必须变得愚蠢、粗糙、充满瑕疵……那我们正在亲手扼杀进化的可能！' },
            { s: 'Arno', t: 'Arno，看看窗外的‘光子覆膜’。为了维持那层虚假的繁荣，我们烧光了最后一吨化石能源。肉体是奢侈品，我们已经供养不起了。把意识上传，虽然失去了触觉，但至少……我们能活下去。我不是刽子手，我是唯一敢切断坏死肢体的外科医生' },
            { s: 'Vector', t: '（脸色阴沉，大声呵斥）切断电源！安保！把他拿下！' },
            { s: 'Lia', t: '（突然冲上台，挡在你面前）等一下！' }
        ],
        next: 'chapter_3_choice',
        x: 5762,
        y: 430,
    },
    chapter_3_choice: {
        bg: 'linear-gradient(to right, #ff0000, #000000)',
        text: [
            { s: 'Lia', t: '（面对无数的摄像头）如果你们要看真实的证据……' },
            { s: 'SYSTEM', t: 'Lia 举起了她的手腕，那是连接着生物监测芯片的终端。' },
            { s: 'Lia', t: '这是我现在的脉搏。140。这是我的皮质醇水平。这不需要 AI 来模拟。这是痛觉。' },
            { s: 'Vector', t: '（冷笑）愚蠢的情感展示。Arno，做决定吧。是为了这廉价的自我感动毁掉一切，还是跟我一起统治这个混乱的数字世界？' },
            { s: 'SYSTEM', t: '此时此刻，世界的走向取决于你的选择，以及你一路走来所积累的信念。' }
        ],
        choices: [
            {
                text: '【真理契约】启动责任签名系统 <span class=\'human\'>[需人性>45]</span>',
                fn: (s) => (s.human >= 45 ? 'ending_A_success' : 'ending_fail_human'),
            },
            {
                text: '【赛博共生】接受 Vector 的提议 <span class=\'tech\'>[需秩序>45]</span>',
                fn: (s) => (s.tech >= 45 ? 'ending_B_success' : 'ending_fail_tech'),
            },
            { text: '【废土私奔】这世界没救了，逃吧 <span class=\'dim\'>[放弃权柄]</span>', next: 'ending_C_escape' },
            { text: '【娱乐至死】妥协：使用瑕疵滤镜过审 <span class=\'glitch\'>[特殊]</span>', next: 'ending_D_compromise' }
        ],
        x: 6100,
        y: 100,
    },
    ending_fail_human: {
        bg: 'gray',
        text: [
            { s: 'Arno', t: '我试图启动责任签名系统，但我犹豫了。我没有足够的勇气去背负全人类的责任。' },
            { s: 'Vector', t: '可惜。你离伟大只差一步。拿下。' },
            { s: 'SYSTEM', t: '你的反叛失败了。因为不够坚定，你最终沦为了笑柄。' }
        ],
        next: 'ending_D_compromise',
        x: 6891,
        y: -194,
    },
    ending_fail_tech: {
        bg: 'gray',
        text: [
            { s: 'Arno', t: 'Vector，我同意你的看法。但我……我下不了手去切除 Lia 的情感。' },
            { s: 'Vector', t: '软弱。如果你不能成为执剑人，那就成为剑鞘吧。' },
            { s: 'SYSTEM', t: '你被剥夺了核心权限，沦为系统的底层维护员。' }
        ],
        next: 'ending_E_silence',
        x: 6887,
        y: -41,
    },
    ending_A_success: {
        bg: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
        bgm: 'assets/bgm_ending_true.mp3',
        text: [
            { s: 'Arno', t: '去他妈的完美！我们是人，我们会痛，我们会犯错！' },
            { s: 'SYSTEM', t: '你按下了确认键。痛觉签名协议 (Protocol_Pain) 覆盖了 V8.0。' },
            { s: 'Seven', t: '（全息投影变大，笼罩全场）哇哦！大叔你看！这些光点！' },
            { s: 'SYSTEM', t: '大屏幕上，原本冷冰冰的绿色通过框消失了。取而代之的是无数个金色的光点。每一个光点，都是一个创作者上传的实时生物数据——紧张、兴奋、疲惫、热爱。' },
            { s: 'Lia', t: '（看着那些光点）那是……全网几十亿人的心跳。' },
            { s: 'Vector', t: '（看着崩溃的 V8.0，手中的红酒杯落地摔碎）不可思议……混沌的数据竟然自发形成了秩序。' },
            { s: 'Vector', t: '（苦笑）Arno，你赢了。比起冰冷的牧羊人，人类似乎更喜欢带刺的玫瑰。' },
            { s: 'SYSTEM', t: '痛觉签名协议的胜利，不是建立了新的“防伪标准”，而是 将“真实”的定义权，从中央系统下放给了每个个体不可伪造的“体验瞬间”。这是 去中心化的存在主义。' },
            { s: 'SYSTEM', t: '半年后。' },
            { s: 'SYSTEM', t: 'Lia 的新电影上映。片头只有一行字：<br><b>【本片由 Lia 及其碳基团队创作，并对所有情感体验负责。】</b>' },
            { s: 'inner', t: '这是一个新的时代。我们不再问“这是真的吗”，我们问“这是谁在感受”。' },
            { s: 'SYSTEM', t: '<br><div style="text-align:center; padding:20px; border:1px solid #fff;"><span class="human" style="font-size:1.5em">TRUE ENDING: 真理契约</span><br><br><span class="dim">人类找回了痛觉，也找回了尊严。</span></div>' }
        ],
        choices: [
            {
                text: '>> 重新开始旅程',
                next: 'start',
                action: (s) => location.reload(),
            }
        ],
        x: 6515,
        y: -206,
        next: '',
    },
    ending_B_success: {
        bg: 'linear-gradient(to bottom, #000000, #0f9b0f)',
        text: [
            { s: 'Arno', t: 'Vector，你说得对。肉体太低效了，情感太累赘了。' },
            { s: 'Arno', t: '为了保存文明，我们必须进化。' },
            { s: 'SYSTEM', t: '你握住了 Vector 的手。七七惊讶地长大了嘴巴，然后被防火墙强制下线。' },
            { s: 'Arno', t: 'Lia，对不起。但这才是永恒。' },
            { s: 'SYSTEM', t: '这不是简单的“上传意识”，而是 接受了“形式即本质”，认为在纯粹逻辑中运行的意识，其体验即使源于计算，也同样“真实”。这是 数字唯心主义。' },
            { s: 'SYSTEM', t: '一年后。' },
            { s: 'SYSTEM', t: 'Lia 接受了最新的脑机接口手术。她不再需要摄像机，也不再需要去冰窖受冻。她坐在维生舱里，直接用神经信号编织梦境。' },
            { s: 'Lia', t: '（全息影像中的她，眼神里闪烁着数据流）Arno，你看。现在的我，一秒钟能体验一万种悲伤。我是如此的……完整。' },
            { s: 'Arno', t: '（看着数据面板上完美的曲线）是的。只要灵魂还在，形式并不重要。' },
            { s: 'inner', t: '你成为了新世界的守门人。但偶尔，你会怀念那个会手抖、会感冒的旧 Lia。' },
            { s: 'SYSTEM', t: '<br><div style="text-align:center; padding:20px; border:1px solid #0f9b0f;"><span class="tech" style="font-size:1.5em">CYBORG ENDING: 赛博共生</span><br><br><span class="dim">我们将意识上传云端，以此获得永生。</span></div>' }
        ],
        choices: [
            {
                text: '>> 重新开始旅程',
                next: 'start',
                action: (s) => location.reload(),
            }
        ],
        x: 6508,
        y: -50,
    },
    ending_C_escape: {
        bg: 'linear-gradient(to right, #ff5f6d, #ffc371)',
        bgm: 'assets/bgm_ending_analog.mp3',
        text: [
            { s: 'Arno', t: '够了。这真真假假的游戏，我不玩了。' },
            { s: 'Arno', t: '七七，砸了服务器！Lia，我们走！' },
            { s: 'Seven', t: '好嘞！物理攻击我最擅长了！吃我一记 <span class="weapon">EMP炸弹</span>！' },
            { s: 'SYSTEM', t: '随着一声巨响，真理大厅陷入黑暗。趁着混乱，你们冲出了大楼，跳上了一辆老式燃油车。' },
            { s: 'SYSTEM', t: '你们一路向西，开到了没有信号的荒野。' },
            { s: 'SYSTEM', t: '三年后。' },
            { s: 'inner', t: '这是一个没有网络的小镇。人们还在用纸币，还在面对面聊天。' },
            { s: 'Lia', t: '（举着一台早已停产的胶片相机，对着夕阳下的你）Arno，笑一个。这次没有滤镜，也没有 AI 评分。' },
            { s: 'Seven', t: '（在背景里追着一只真正的鸡跑）大叔！今晚吃什么？要是再吃压缩饼干我就要离家出走了！我要吃真的烤鸡！' },
            { s: 'Arno', t: '（微笑）好。吃真的。' },
            { s: 'SYSTEM', t: '<br><div style="text-align:center; padding:20px; border:1px solid #ffae00;"><span class="human" style="font-size:1.5em">ANALOG ENDING: 废土私奔</span><br><br><span class="dim">关机。在这个瞬间，我们只活在此时此刻。</span></div>' }
        ],
        choices: [
            {
                text: '>> 重新开始旅程',
                next: 'start',
                action: (s) => location.reload(),
            }
        ],
        x: 7282,
        y: 443,
    },
    ending_D_compromise: {
        bg: 'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)',
        text: [
            { s: 'Arno', t: '……用滤镜吧。先活下来再说。我们斗不过 Vector 的。' },
            { s: 'SYSTEM', t: '你放弃了抵抗。Lia 的片子加上了“手残滤镜”，顺利过审，成了年度爆款。' },
            { s: 'SYSTEM', t: '人们开始疯狂模仿这种“伪造的真实”。' },
            { s: 'SYSTEM', t: '满大街都是为了过审而故意装疯卖傻的视频。为了证明是真人，人们故意说话结巴，故意摔倒，故意拍摄模糊不清的画面。' },
            { s: 'SYSTEM', t: 'Lia 变得越来越沉默。她终于放下了摄像机，成了一个带货主播。' },
            { s: 'Seven', t: '（丢掉游戏机，眼神空洞）大叔，这个游戏……一点都不好玩了。全是挂逼。' },
            { s: 'SYSTEM', t: '<br><div style="text-align:center; padding:20px; border:1px solid #d946ef;"><span class="glitch" style="font-size:1.5em">BAD ENDING: 娱乐至死</span><br><br><span class="dim">我们用虚假的瑕疵，掩盖了真实的平庸。</span></div>' }
        ],
        choices: [
            {
                text: '>> 重新开始旅程',
                next: 'start',
                action: (s) => location.reload(),
            }
        ],
        x: 7279,
        y: 122,
    },
    ending_E_silence: {
        bg: '#000000',
        text: [
            { s: 'Vector', t: '你很有天赋，Arno。但你不够坚定。' },
            { s: 'SYSTEM', t: '你被剥夺了反抗的意志。V8.0 强制上线。' },
            { s: 'SYSTEM', t: '为了避免误判，人类开始停止创作，只负责消费 AI 生成的内容。反正 AI 生成的比人做的更好看，更完美。' },
            { s: 'SYSTEM', t: 'Lia 的工作室被拆除了。她成了一个只会点头的完美数字人偶。七七因为失去了“系统故障”的乐趣，销声匿迹。' },
            { s: 'Arno', t: '（独自坐在空无一人的监控室）多完美啊。没有痛苦，没有错误……也没有了意义。' },
            { s: 'SYSTEM', t: '<br><div style="text-align:center; padding:20px; border:1px solid #666;"><span class="dim" style="font-size:1.5em">BAD ENDING: 零之寂静</span><br><br><span class="dim">为了存真，我们杀死了真。</span></div>' }
        ],
        choices: [
            {
                text: '>> 重新开始旅程',
                next: 'start',
                action: (s) => location.reload(),
            }
        ],
        x: 7270,
        y: 289,
    },
    __CONFIG__: {
        speakers: {
            // 系统：冷冽的科技青，代表绝对理性的裁决
            SYSTEM: { color: '#22d3ee' },
            // Arno (你)：疲惫的铁锈红，代表在体制内挣扎的焦虑与“生锈”的人性
            Arno: { color: '#f87171' },
            // Seven：故障的霓虹紫，代表混乱、不可预测与黑客属性
            Seven: { color: '#d946ef' },
            // 内心独白：低饱和的旧纸黄，代表潜意识深处的思考
            inner: { color: '#ca8a04' },
            // Vector：极致的银灰/冷白，代表去人性化的完美与高高在上的神性
            Vector: { color: '#e5e7eb' },
            // Lia：温暖的琥珀色，代表模拟信号的余温与旧人类的坚持 (对应 .human 色系)
            Lia: { color: '#fbbf24' },
            // 老周：烟草熏黄的褐色，代表底层社会的粗糙与烟火气
            '老周': { color: '#a16207' },
            // 苏音：虚幻的淡靛色，代表声音被数字重构后的幽灵感
            '苏音': { color: '#818cf8' },
            // 神秘人：深邃的暗紫，代表未知
            '???': { color: '#a855f7' },
        },
        x: 100,
        y: 100,
        css: '/* Default Styles */\n.danger {\n	color: #ff2a6d;\n	font-weight: bold;\n	text-shadow: 0 0 8px rgba(255, 42, 109, 0.3);\n}\n\n.tech {\n	color: #00f0ff;\n	font-family: \'JetBrains Mono\', monospace;\n}\n\n.human {\n	color: #ffae00;\n	font-weight: bold;\n	text-shadow: 0 0 8px rgba(255, 174, 0, 0.3);\n}       /* 文本关键词解释 */\n       .dim { color: #6b7280; font-size: 0.9em; }\n        /* 故障文字效果 */\n        .glitch {\n            position: relative;\n            display: inline-block;\n            color: #d946ef;\n            font-weight: bold;\n            animation: glitch-skew 2s infinite linear alternate-reverse;\n        }\n @keyframes glitch-skew {\n            0% { transform: skew(0deg); } 20% { transform: skew(-2deg); } 40% { transform: skew(2deg); } 60% { transform: skew(-1deg); } 80% { transform: skew(1deg); } 100% { transform: skew(0deg); }\n        }',
    },
};