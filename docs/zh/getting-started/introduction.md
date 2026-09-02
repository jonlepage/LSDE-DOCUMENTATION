---
title: "介绍"
description: "LSDE 不仅仅是一个简单的翻译工具，它经过优化，可让您为每个项目建立理想的个性化工作流程。"
section: getting-started
outline: [2, 3]
---

# 介绍

<DocImage src="/doc/lsde/lsde-banner.webp" h="80" icon />

## 什么是 LS-Dialog Editor？ {#what-is-ls-dialog-editor}
**LSDE**：*LepaSoft Dialog Editor*的缩写，是一款旨在**协助开发者编写和翻译其项目**的工具。
LSDE 不仅仅是一个简单的翻译工具，它经过优化，可让您为每个项目建立理想的个性化工作流程。
- 手动或由 LLM 辅助的文本翻译。
- 手动或由 LLM 辅助的文本撰写。
- 对话和文本字符串的集中管理。
- 变更跟踪和版本历史。
- 自动检测不一致或问题。
- 支持多种导出和导入格式。
- 可与外部工具（游戏引擎、CI/CD 流水线）集成。
- 组织项目界面的结构和渲染。
- 语言验证工具（长度、约束、标签、变量）。
- 实时协作或通过共享文件协作。
- 音频旁白的生成和同步。
- 根据您的需求对软件进行高级定制。

## LS-Dialog Editor 如何运作？ {#how-it-works}
LSDE 依赖于 **i18n 最佳实践**来组织您的翻译键。
它不强制采用单一结构，而是整合了框架验证过的方法来管理语言复杂性，例如上下文和复数。

**工作流程非常简单：**
- 您创建一个新项目。
- 您定义项目的文件夹。
- 您通过扫描项目手动或自动创建键。
- 您对键执行任务（翻译、更正、重新组织等）。

## 键 {#the-keys}
LSDE 采用分层键系统来精确地定位每个对话。
示例：键 `game:scenes.events.The-quest-of-sun.d1`
- `game:` 表示命名空间（namespace）。此名称由翻译文件的名称定义，例如：`locales/en/game.json`、`locales/en/scenes.json`...
- `scenes.events.The-quest-of-sun.d1` 表示在文件的 JSON 结构中查找对话的访问路径。

```json
	// file game.json
	{
		'scenes': {
			'title': '',
			'description': '',
			'events': {
				'The-quest-of-sun': {
					'd1': '',
				},

			},
		},
	},
```

::: tip 备注
 将对话缓存到 `.lsde` 文件中。这便于项目共享和恢复，避免向客户发送一组复杂的文件。
:::

## i18n 键约定 {#i18n-key-convention}
[W3C Internationalization](https://www.w3.org/International/) 是定义 i18n 为标准的参考，不依赖于任何软件库。
W3C 建议定义了基本规则：
- 避免字符串拼接
- 根据 CLDR 语言规则处理复数
- 处理日期、数字和货币
- 为翻译人员提供上下文
- 将文本与代码分离
- 提供备用语言环境（fallback）
- 绝不假定长度或词序
- 支持 RTL 书写（阿拉伯语、希伯来语）
关于 JSON 标准和架构最佳实践，[ICU (International Components for Unicode)](https://cldr.unicode.org/index/json-format-data) 用作参考。

## i18next 和 i18n？ {#i18next-i18n}
LSDE 既依赖 i18n，也依赖 [i18next](https://www.i18next.com/misc/the-history-of-i18next) 的一些最佳实践。
特别是针对：
- 文件夹结构
- 复数的语境化
- 支持嵌套（nesting）和变量...

### 适用于游戏开发 {#for-game-dev}
LSDE 支持两种类型的游戏对话。
没有普遍适用的最佳方法，而是针对每项任务选择合适的工具。
- SAD：“单角色对话”（Single Actor Dialog）
每个对话只有一个角色，通常适用于动作游戏或没有复杂叙事的场景。
这意味着每个键对应一个对话或一段文本，并且必须在游戏引擎中进行拼接和组装。

::: tip 备注
这种方法可能会在具有大量角色互动（例如 JRPG）的叙事游戏中引入很多复杂性。
:::
- MAD：“多角色对话”（Multiple Actors Dialog）
一个对话中有多个角色，通过标签（tags）识别，非常适合 RPG 或涉及多个角色的复杂叙事游戏。
这意味着您将集成一系列由标签（tags）分隔的对话，然后由您的游戏引擎进行解释。

::: tip 备注
这极大地便于对涉及多个对话者的复杂对话进行全局审视，但对于简单的动作游戏来说可能过于复杂。
:::

### 适用于网页开发 {#for-web-dev}
如今，不再有任何理由不翻译您的网站，以便将您的工具展示给全球。
LSDE 提供了舒适的工作体验，通过 HMR 和像 i18next（其 React 或 Next.js 版本）这样的 i18n 库，您可以实时预览并开发您的网络展示网站。

- 问：我们不应该让扩展程序来管理网站的多语言功能吗？
- 答：是，也不是。这些工具可以应急，但它们会降低您的展示网站的用户体验（UX）和用户界面（UI）。它们也不利于良好的搜索引擎优化（SEO），这与一个已翻译的网站不同，已翻译的网站可以被索引并推荐给那些用母语搜索内容的人。

### 适用于软件开发 {#for-app-dev}
翻译您的软件和应用程序极其重要。
软件开发的架构、语言和技术通常比网络开发更自由。
因此，LSDE 提供了 100% 可配置的工具，以适应您的需求和架构。
正则表达式（regex）允许在您的架构和 LSDE 之间建立耦合。
