🌌 LITTLE TEXT Novel Studio
![alt text](https://img.shields.io/badge/version-1.0.0-blue.svg) ![alt text](https://img.shields.io/badge/built%20with-Vue%203-4fc08d.svg) ![alt text](https://img.shields.io/badge/CSS-Tailwind-38b2ac.svg) ![alt text](https://img.shields.io/badge/license-MIT-green.svg)

LITTLE TEXT Novel Studio 是一款极其轻量级、开箱即用的节点式互动小说（AVG/VN）可视化编辑器。
它作为一个纯前端单文件（Single HTML）应用，无需安装任何环境，直接在浏览器中运行。它使用原生 JavaScript 编写剧情逻辑与状态管理，并将最终成果无缝导出为标准的 JS Object，专为现代 Web 游戏引擎和独立开发者设计。
## ✨ 核心特性 (Key Features)

- 🪢 无限连线，节点可视化：直观的拖拽界面，支持分支（Branch）、流（Flow）和结局（End）节点的自动识别与连线。
- ⚡ 原生 JavaScript 逻辑注入：不需要学习新的宏语言！直接在节点中编写 JS 箭头函数（如 state => state.hp -= 10）来处理状态、数值检定和条件分支。
- 📦 零解析，纯 JS 导出：告别繁杂的 XML/JSON 解析。导出文件就是一段原生的 JS 代码，例如直接 import STORY from './story.js' 即可接入你的 Vue/React/PixiJS 游戏前端。
- 📖 智能 Lore / 词条系统：自动扫描剧情文本并生成自定义 CSS 高亮，内置基于正则的批量替换和词条图鉴（Codex）弹窗。
- 🎭 全局角色与资产管理：统一管理发言人（Speaker）颜色、快速重命名，以及无缝绑定 BGM 与 SFX。
- 🔍 版本对比（Diff）系统：内置 LCS 算法，在导出时实时高亮对比原始导入文件与当前修改的差异。
- 🪄 一键智能排版（Auto-Layout）：基于图层深度（BFS）的智能整理，一键拯救混乱的连线（支持 LR/TB 两种流向）。

## ⚔️ 什么时候选择 LITTLE TEXT？
目前市面上有许多优秀的文字游戏开发工具（如 Twine、Ren'Py），LITTLE TEXT是为了解决特定工作流下的痛点：与现代 Web 前端框架的无缝集成。
| 特性对比     | 🌌 LITTLE TEXT                    | 🕸️ Twine (Sugarcube等)          | 🌸 Ren'Py                        | 🧶 Yarn Spinner                 |
| ------------ | -------------------------------- | ------------------------------ | ------------------------------- | ------------------------------ |
| **核心定位** | Web 游戏 / JS 引擎的最佳搭档     | 独立的 HTML 互动小说生成器     | 传统的桌面端视觉小说霸主        | 面向 Unity/C# 等重型引擎的插件 |
| **底层语法** | **纯原生 JavaScript**            | 私有宏脚本（Macro Script）     | Python                          | 私有 Yarn 脚本                 |
| **打包产物** | 原生 JS 对象 (const STORY={...}) | 单文件 HTML                    | 跨平台可执行文件 / WebAssembly  | .yarn 文本文件（需解析）       |
| **前端集成** | 极简（原生支持 Vue/React 等）    | 困难（难以提取纯数据并复用UI） | 困难（重构 Web 界面几乎不可能） | 较难（需要引入专门的解析器库） |
| **运行环境** | 单文件浏览器运行，0 安装         | 桌面客户端或 Web端             | 需安装 Python 运行环境及 SDK    | 依赖引擎环境（Unity/Godot等）  |
| **学习成本** | 极低（会点 JS 就能写动态逻辑）   | 适中（需学习专属语法）         | 适中（需学习 Ren'Py 脚本）      | 适中（需学习节点语法）         |

如果你是一名 Web 开发者/全栈独立游戏人，想用自己的 React/Vue/PixiJS/Cocos 写游戏 UI 和表现层，只需要一个轻量、极客、且输出原生 JS 数据结构的节点编辑器。

## 🚀 快速开始 (Quick Start)
直接运行：克隆本仓库，在浏览器中双击打开 index.html，即可开始创作。
创建节点：点击右下角 + 按钮创建节点，配置你的台词内容。
```js
// 只有玩家持有"钥匙"时显示该选项
showIf: state => state.items.includes('Key')
// 选择后扣除10点体力
action: state => state.human -= 10
```
测试预览：点击顶部导航栏的 ▶ PREVIEW GAME 立即在内置引擎中试玩。
导出集成：点击 导出 / Diff 获取 story.js。
## 导出数据结构示例
生成的 story.js 直接就是一个可以直接调用的状态机对象：
```js
const STORY = {
    "node_001": {
        x: 100, y: 100,
        bg: "url('assets/bg.jpg')",
        bgm: "bgm_main",
        action: (s) => { s.visited_001 = true; },
        text:[
            { s: 'SYSTEM', t: 'Welcome to the simulation.' },
            { s: 'ALICE', t: 'Are you ready?' }
        ],
        choices:[
            { text: 'Yes', next: 'node_002', action: s => s.ready = true },
            { text: 'No', next: 'node_003', showIf: s => !s.ready }
        ]
    }
};
```
## 🗺️ 未来开发计划 (Roadmap & Future Plans)
LITTLE TEXT 目前处于高可用原型阶段，我们接下来的开发重点将围绕大型工程管理与沉浸式体验展开：
- 撤销/重做系统 (Undo/Redo)：基于状态快照的 Ctrl+Z / Ctrl+Y 操作栈
- 本地图片以及动态背景图片, 人物图片支持
- 自定义节点系统 (Custom Plugin Nodes)：允许除了对话和选项外，插入诸如“小游戏节点”、“计算节点”、“商店节点”等自定义模块。
- 多文件模块化拆分 (Multi-file Modularization)：支持将庞大的 Story 树拆分成多个 Chapter（章节），解决超大型剧本的内存占用问题。
- i18n 多语言工作流：支持将文本一键剥离导出为 .csv 或 .json 以供翻译，并支持多语言热切换注入。
- 高级变量监视器：在 Preview 模式下加入实时的 State 调试面板，方便在复杂条件判断下追踪变量变化。
- Stand-alone Web Engine Templates：官方提供基于 Vue、React 和 PixiJS 的“空游戏模板”，开发者只需将 story.js 丢进去即可获得一个功能齐全的精美游戏前端。
- AI 辅助创作介入：结合本地或云端 LLM，根据连线上下文智能补全分支对话或提供选项建议。
## 🛠️ 贡献 (Contributing)
非常欢迎提交 Issue 和 Pull Request！
（由于项目是单文件 HTML，请在提交 PR 前确保代码格式整洁，并在注释中说明改动原因。）
## 📄 开源协议 (License)
本项目基于 MIT License 开源。这意味着你可以自由地将它用于任何免费或商业游戏开发中，完全不受限制。你的故事，属于你自己。
