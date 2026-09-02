---
title: "全局设置"
description: "LSDE 的界面具有部分可自定义的 UI/UX 设计，但出于设计原因，某些方面是固定的。"
section: interface
outline: [2, 3]
---

# 全局设置

您可以在此处配置 LSDE 软件的全局设置。
这些设置将与您的所有项目共享。

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-typo.webp" />

## 排版 {#typography}
排版主要影响编辑器的文本区域和笔记选项中的某些元素。
LSDE 的界面具有部分可自定义的 UI/UX 设计，但出于设计原因，某些方面是固定的。
只有对话框可以适应您喜欢的主题。

::: tip 备注
如果此功能需求量大，可能会随着时间而发展。
:::
1. **font size**：编辑器和其他输入区域中的文本大小。
2. **font spacing**：编辑器中字母之间的间距。
3. **police de charactere**：文本编辑器中使用的字体（font-family）。
4. **haute des ligne**：修改编辑器中的行高。
5. **couleur**：编辑器中的文本颜色。
6. **epaisseur**：如果字体允许，使文本更粗（加粗）。
7. **couleur arriereplan**：定义文本编辑器的背景颜色，无论是活动（焦点）还是非活动状态。
8. **direction du texte**：定义应从右到左 (RTL) 显示的语言。

---

## 封装器 {#wrappers}
<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-wrappers.webp" />

封装器是可添加到选择系统的封装行为。
当您在编辑器中选择文本并使用键盘快捷键时，可以选择用符号将其封装起来。
这种在开发环境 (IDE) 中非常流行的行为也受到 LSDE 的支持。
1. 选择文本时将触发封装的按键。
2. 在选定文本之前和之后插入的字符。
3. 在删除文本封装之前可能的迭代次数。
4. 如果激活，则删除选定文本开头和结尾的空格，并将其重新放置到封装外部。

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-flags.webp" />

## 编辑器 {#editor}
本部分汇集了各种功能（标志），以丰富您使用 $t(main.words.lsde-title) 的体验。
要了解更多信息，您只需将鼠标悬停在每个选项上，即可显示其功能的详细工具提示。

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-tasks.webp" />

## 任务 {#tasks}
任务部分允许您管理 LSDE 的原生任务。
您可以在此处找到发送给 LLM 的规则 (rules) 和指令。

- **规则 (rules)** 是适用于所有任务的通用且重要的指令。
- **任务 (tasks)** 是更具体的子规则，发送给 LLM 以进行精确操作。

让我们了解一下原生任务界面。

<!-- TODO image introuvable : configGlobTaks -->

1. 您可以禁用项目中不需要的任务（例如，禁用菜单任务）。
2. 一个用于恢复原生指令的按钮。
3. 一个用于复制原生指令的按钮。

::: tip 备注
LSDE 试用版中不可用。
:::
4. 字数和 token 成本估算。
5. 您可以随时导出 JSON 文件，以分析发送给 LLM 的请求示例，并完善您的提示工程。

::: tip 备注
请注意，不建议修改 LSDE 的原生规则和任务。
建议优先选择其他解决方案，例如 [fine-tuning](/zh/interface/fine-tuning) 或 [项目指令](/zh/interface/project-settings#llm-directive)。
:::

---

## 认证 {#authentication}
本部分专门用于配置 LLM，无论是免费的还是通过您自己的 API 密钥访问的。
您可以在此处输入并保护您首选 LLM 服务的 API 密钥。

::: tip 备注
请注意，Gemini 或 ElevenLabs 等一些提供商现在提供免费 API 密钥，并带有每月或每周的使用配额。
:::

对于文本处理 LLM，有 6 个提供商可用。
### 用于文本处理的 LLM {#text-processing-llm}
- Anthropic
- OpenAI
- Mistral
- Gemini
- Deepseek

### 用于语音的 LLM {#voice-llm}
我们为您提供 ElevenLabs（它也提供带有每月配额的免费密钥）。

::: tip 备注
您需要在其工具上创建您的语音资料。
:::

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-auth.webp" />

您只需点击 `temp-mail` 或 `10minmail` 获取一个临时地址，然后点击 `open` 注册此电子邮件。
会话将因此保存数天，让您可以使用 GPT 和批量任务。
您还将受到配额限制（目前，截至 2025 年 11 月 25 日，大约每小时 70 个任务），之后您需要等待。
当 OpenAI 删除该帐户时，您需要重复此过程。

::: tip 备注
请注意，此服务仅应用于基本测试，而非生产。免费的 GPT 模型质量较低，并且不支持 LSDE 提供的后响应细化功能。
:::
### 界面 {#interface}
0. 记住您的 API 密钥，以免每次启动软件时都输入。

::: tip 备注
密钥已编码，但仍暴露给恶意用户。
:::
1. 您可以通过软件的编码系统安全地加密您的密钥。

::: tip 备注
您的密钥将使用您机器和安装的唯一标识符进行加密。它们无法在除此 LSDE 实例之外的任何地方执行。
:::
2. 您可以在此处检索您的加密密钥，并将其用于预定字段，以代替标准 API 密钥。
3. 您应该在此处插入您的提供商的 API 密钥。
4. 一个快速访问提供商网站的按钮，用于查看您的消费。
5. 选择所选提供商可用的模型。
6. 您可以将您喜欢的模型添加到收藏夹。

::: tip 备注
收藏夹模型可在软件页脚的 LLM 选项卡中访问。右键单击可快速切换到其中一个。
:::
### 免费 LLM {#free-LLM}
LSDE 还提供一种免费方法，通过特殊过程使用 GPT。
您通常希望使用此 LLM 进行测试或免费执行小型任务。
7. 您可以创建一个免费的 ChatGPT 帐户来测试软件功能。
建议您使用两个临时电子邮件提供商。

::: tip 备注
请勿使用您的官方帐户，以免因大量使用而被关闭。
:::
8. 点击此处使用您的临时电子邮件创建 GPT 帐户。

::: tip 备注
您通常可以每小时处理大约 70 个实例。
:::

::: tip 备注
Google AI 等一些服务现在提供免费 API 密钥，但每小时请求数量有限。
:::
您也可以享受他们的服务。

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-accessibility.webp" />

## 辅助功能 {#accessibility}
本部分允许您配置界面语言和显示过滤器，如果您在屏幕校准方面遇到问题或患有某种形式的色盲，这将很有用。

1. 界面语言选择：与启动屏幕一样，您可以重新分配您最喜欢的 2 种语言。
然后，您只需按下 [F1] 键即可在两个界面之间即时切换。
此功能允许您（例如）使用您的母语工作，并随时切换到另一种语言，以便与同事交流或查阅文档。
2. 您可以在此处更改软件的对比度。
3. 以及色调 (hue)，它允许您在有视力障碍时管理颜色主题。

---
