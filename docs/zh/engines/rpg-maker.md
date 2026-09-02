---
title: "RPG Maker"
description: "LSDE 原生集成 RPG Maker MV 和 RPG Maker MZ，用于管理和翻译您的对话。"
section: engines
outline: [2, 3]
---

# RPG Maker

LSDE 原生集成 **RPG Maker MV** 和 **RPG Maker MZ**，用于管理和翻译您的对话。

## 工作原理 {#how-it-works}
RPG Maker 将其对话存储在 JSON 文件中（Map、CommonEvents、System 等）。
LSDE 可以导入这些文件，让您舒适地编辑和翻译它们，然后以 RPG Maker 期望的格式重新导出。

如果您想完全支持 RMMZ i18n，您需要[在此处下载插件](https://raw.githubusercontent.com/jonlepage/LSDE-RMMZ-I18N/refs/heads/main/dist/LSDE_i18n.js)

典型的工作流程：
- **导入** — 将 LSDE 指向您的 RPG Maker 项目的 `data/` 文件夹。智能导入会自动检测并提取对话键。
- **编辑** — 手动或在 LLM 辅助、元数据和拼写检查器的帮助下，撰写、修正和翻译您的文本。
- **导出** — 将修改后的 JSON 文件直接重新导出到您的 RPG Maker 项目中。

## 支持版本 {#supported-versions}
- **RPG Maker MV** — 完整 JSON 导入/导出
- **RPG Maker MZ** — 完整 JSON 导入/导出
- 较旧版本（VX Ace、XP）不受原生支持，但可能通过自定义解析器工作。

## 视频教程 {#video-tutorial}
<YouTube id="0cJjxtI088Q" />

## 提示 {#tips}
- 使用代码扫描器检查您的所有键是否都存在于 RPG Maker 文件中。
- 在项目设置中配置正则表达式模式，以自动检测 RPG Maker 对话键。
- 如果您的事件包含多个角色的对话，请利用 MAD（多角色对话）模式。
