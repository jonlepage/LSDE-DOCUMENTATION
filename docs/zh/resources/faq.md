---
title: "常见问题"
description: "R: 前往键树，点击“创建文件或文件夹”按钮或使用右键菜单。填写完整的键路径并确认。该键将在选定的命名空间中创建。"
section: resources
outline: [2, 3]
---

# 常见问题

### Q: 如何创建新的翻译键？ {#create-new-key}
R: 前往键树，点击“创建文件或文件夹”按钮或使用右键菜单。填写完整的键路径并确认。该键将在选定的命名空间中创建。

### Q: 树状结构中文件夹和文件的区别是什么？ {#difference-folder-file}
R: 文件夹是用于组织键的逻辑容器。文件是包含待翻译文本的单个键。文件夹可以包含其他文件夹或键。

### Q: 如何删除未使用的键？ {#delete-unused-key}
R: 在键树页眉中启用“显示/隐藏孤立键”选项，以识别 LSDE 中存在但源代码中缺失的键。然后您可以通过右键菜单将其删除。

### Q: LSDE 支持哪些 LLM？ {#available-llms}
R: LSDE 支持 7 个主要供应商：Anthropic、OpenAI、Mistral、Gemini、Deepseek、ElevenLabs 以及一个通过临时电子邮件提供的免费服务。您可以在全局设置的 [身份验证部分](/zh/interface/global-settings#authentication) 配置您的 API 密钥。

### Q: 如何免费使用 LLM？ {#use-llms-free}
R: LSDE 为 OpenAI 提供了一种免费方法，即通过临时电子邮件（temp-mail 或 10minmail）创建帐户。您每小时将拥有约 70 个任务，配额有限。
您还可以通过 Gemini 使用 Google 服务，它提供免费的 API 密钥。

### Q: LLM 翻译可靠吗？ {#llm-reliability}
R: 结果是相关且令人满意的，但仍然必须聘请语言专业人员进行最终验证。当提供适当的上下文时，LLM 在翻译方面表现出色。

### Q: 如何提高 LLM 翻译的质量？ {#improve-llm-quality}
R: 在键的元数据中填写描述、变量和上下文注释。这些信息会被整合到 LLM 请求中，以确保获得更相关的结果。

### Q: 元数据有什么作用？ {#metadata-purpose}
R: 元数据为翻译人员、撰稿人和 LLM 提供额外的上下文。它们包括描述、允许的变量、用户注释以及用于直观展示内容背景的图像。

### Q: 如何为键添加图像？ {#add-images-to-keys}
R: 打开所选键的元数据窗口并使用“图像”部分。图像会被压缩并集成到 .lsde 文件中，以便于共享。

### Q: LLM 是否可以访问用户注释？ {#llm-user-notes-access}
R: 不可以，用户注释仅供编排者和翻译人员使用。它们不会被传输给 LLM。

### Q: 如何配置代码扫描器？ {#configure-code-scanner}
R: 前往 Patterns 部分（项目设置）。创建一个带有正则表达式 (Regex) 的模式，该模式至少包含 1 个捕获组，以便在代码库中识别您的 i18n 键。

### Q: 支持哪些编程语言？ {#supported-languages}
R: 没有固有的限制。无论使用何种语言，您只需创建合适的 Regex 来捕获您的键即可。使用像 regexr.com 这样的工具来测试您的模式。

### Q: 如何识别代码中缺失的键？ {#identify-missing-keys}
R: 在代码扫描器中启用“缺失键”模式。LSDE 将仅显示源代码中存在但 LSDE 键树中缺失的键。您可以批量创建它们。

### Q: 什么是后处理文本渲染？ {#post-processing-rendering}
R: 这是一个允许实时自定义文本显示的系统。您可以配置 Regex 模式来捕获文本组，并为其分配装饰器（颜色、图标、小部件）以提高可读性。

### Q: 如何在文本中添加“小部件”？ {#add-widgets-to-text}
R: 在项目设置中创建一个带有 Regex 的模式。将捕获组分配给“Widget”类型的装饰器。小部件将仅在活动窗口中显示以优化性能。

### Q: 如何将变量链接到渲染？ {#link-variables-to-rendering}
R: 在项目设置的 Variables 部分，创建一个类别和带有“标签 (tags)”的变量。配置您的 Regex 模式以捕获这些标签，LSDE 将自动把装饰器与找到的实例相关联。

### Q: 如何为我的对话生成配音？ {#generate-voices}
R: 您需要先获取 ElevenLabs 的 API 密钥（提供免费计划）。在项目设置中配置您的语音配置，然后使用语音管理器生成旁白。

### Q: SAD 和 MAD 有什么区别？ {#sad-vs-mad}
R: *SAD* (Single Actor Dialog) = 每个键对应一个对话者。*MAD* (Multi Actor Dialog) = 同一个键中包含多个对话者，通过 Regex 标签进行识别。MAD 显著减少了需要管理的键的数量。

### Q: 如何在一段对话中管理多个角色？ {#handle-multiple-characters}
R: 在 MAD 模式下，在您的键中使用类似 `{角色ID} 文本` 的标签。配置一个 Regex 来捕获角色 ID 及其文本，然后在变量中为每个角色关联语音配置。

### Q: 生成语音后修改了文本怎么办？ {#voice-modification-after-gen}
R: LSDE 会检测到修改并提示您重新验证语音。在 MAD 模式下，如果您移动或添加了角色，可以通过拖放重新分配现有的语音实例。

### Q: 如何在编辑器中更改字体或文字大小？ {#change-font-size}
R: 前往 全局设置 > 用户界面 > 排版 (Typography)。您可以调整大小、间距、字体和行高。

### Q: 如何更改 LSDE 界面语言？ {#change-interface-language}
R: 前往 全局设置 > 辅助功能 > 语言选择。您可以配置 2 种界面语言，并使用 [F1] 在它们之间切换。

### Q: 如何导入现有项目？ {#import-existing-project}
R: 前往本地化管理器并使用“智能导入”选项。按照 `../folder/lang/namespace.json` 格式组织您的文件夹，LSDE 将自动导入它们。

### Q: 如何保护我的键不被修改？ {#protect-keys}
R: 在主编辑器中，勾选“保护”框将文本标记为最终版本。LLM 任务将自动忽略它。

### Q: 如何与团队共享我的 LSDE 项目？ {#share-project-team}
R: `.lsde` 文件包含整个项目。通过 Git、电子邮件或云服务进行共享。LSDE 将在打开时自动同步更改。

### Q: 如何跟踪协作人员正在进行的任务？ {#track-collaborator-tasks}
R: 在键树中启用“显示/隐藏带有进行中任务的键”选项。您可以快速查看分配给活动任务或等待验证的键。

### Q: 为什么显示多种语言时编辑器会变慢？ {#performance-multiple-languages}
R: 默认情况下，LSDE 会在非活动窗口中禁用复杂渲染（小部件）以优化性能。如果这不构成问题，您可以在全局配置中禁用此优化。

### Q: 如何提高代码扫描器的速度？ {#improve-scanner-speed}
R: 在键树中选择特定的键，而不是显示所有结果。这样可以过滤结果并加快扫描速度。此外，请避免使用带有条件判断的过于复杂的 Regex。

### Q: 什么是 .lsde 文件？ {#what-is-lsde-file}
答：这是您项目的核心文件。它基于 **JSON** 格式，集中管理了所有的 **key**、翻译、元数据（**metadata**）以及音频。

您甚至可以将其直接集成到您的 **codebase** 中，以提取其中的条目并根据您的需求进行映射：
```ts
type MetasEntries = [key: StructureKeyWithNamespace, value: IStructureMetaData][];
type ValuesEntries = [StructureKeyWithNamespace, [Locales, string][]][];
type VoicesEntriesMap = [StructureKeyWithNamespace, [Locales, ISpeakerVoiceConfig[]][]][];
```
建议将其保存在项目的根目录下，以便利用 **Git** 进行版本管理。由于它不包含任何敏感数据，因此可以轻松地与翻译人员或撰稿人共享。

将其放在根目录还有利于查找完整的 **key** 路径，例如：`game:.scenes.the-ice-land.events.the-lost-house.1`。您的 **IDE** 会将其识别为标准的 **JSON** 文件，让您能够轻松阅读其中填写的注释和元数据。

最后，`.lsde` 文件是向后兼容的：您的旧项目可以在较新版本的软件中无障碍打开。

### Q: LSDE 是免费的吗？ {#lsde-is-free}
在 **beta** 测试阶段可以免费使用，但在正式发布后将转为付费模式。届时将提供试用版，以便您根据需求评估所有功能。

**LSDE** 随后将提供 4 种适合您预算的方案：
- **Essentiel**：满足基础的撰写和排版需求（终身授权）。
- **Professionnel**：满足开发者的进阶需求（终身授权）。
- **Entreprise**：满足多工位工作室的需求（年度授权）。
- **Éducatif**：面向语言学校或游戏开发学校（年度授权）。

### Q: 为什么我需要 LSDE？ {#why-i-need-lsde}
**LSDE** 通过提供直观且有条理的界面，大幅降低了项目的复杂性。它让您可以舒适地进行创作和翻译，而不受 **IDE** 或编程语言渲染方式的限制。

它支持不同的设计范式，使其能够与大多数希望优化工作流（**workflow**）的“自研”游戏引擎兼容。

### Q: 如何安装 LSDE？ {#how-install-lsde}
**LSDE** 不提供直接下载。您需要通过安装程序 `LS-Installer` 进行安装，它会自动为您下载并配置软件。

### Q: 如何激活 LSDE？ {#how-activate-lsde}
付款后，您的授权许可（licence）将自动通过电子邮件发送给您。您只需在软件中输入所使用的电子邮箱地址和收到的 **key** 即可激活。
请注意，一次激活对应一台设备上的一个用户。
