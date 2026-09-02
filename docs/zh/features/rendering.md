---
title: "渲染"
description: "以 JRPG 游戏为例，对话引擎需要捕获所有参数组，例如 {{number:number:number}}。"
section: features
outline: [2, 3]
---

# 渲染

<DocImage src="/doc/lsde/doc-lsde-features-howtorendering-0-animate.webm" />

## 什么是文本渲染？ {#what-is-text-rendering}
LSDE 提供了一个非常先进的文本渲染引擎，支持实时自定义文本片段的渲染。

### 对谁有用？ {#who-is-it-for}
通常，此功能主要由游戏开发者需要，因为网页和软件通常对叙事复杂度的要求较低。
以 JRPG 游戏为例，对话引擎需要捕获所有参数组，例如 `{{number:number:number}}`。
这些索引随后用于查找说话角色的 ID、角色应该为该行执行的动画表情，以及其情绪的强度。

对于开发者来说，这不会造成任何可读性问题。然而，对于翻译人员或编剧来说，要求他们持续查阅文档以核对引擎代码和每个角色的个性，可能会引起强烈的不满，甚至让他们成为终身敌人。

在专业工作室中，这样的部门需要一个专门的团队，并且耗资数百万，这对于独立工作室（无论是单人还是小团队）来说是不现实的。

### 解决方案 {#solution}
因此，文本渲染提供了一个非常强大的解决方案，可以随时验证用于引擎的受保护术语是否存在。它还允许翻译人员、编剧以及 LLM 工具利用这些信息，确保叙事和翻译的质量。

现在不再是角色 `{{3:4:2}}` 说话，而是 `{{LIA:HAPPY:2}}`，并且在需要时可以参考其角色档案并可视化所有这些交互，这极大地简化了创作和翻译过程。

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-1.webp" />

## 创建模式 {#create-pattern}
前往 [模式配置](/zh/interface/project-settings#patterns)。
在那里创建一个新的空白模式。
1. 您可以在此部分填写您的模式。
`(xxxxxxx)(xx)(xxxxxxx)`
在此示例中，我们的模式将由3个组构成。
LSDE 将自动检测捕获组，以便您进行填写。

第0组表示完整的捕获本身，并且将始终存在。您只需配置主捕获即可，这通常足以满足大多数情况。

但是，如果您想利用添加到 Regex 中的其他3个组，您可以创建额外的装饰器。
### 什么是装饰器？ {#what-is-decorator}
装饰器，顾名思义，是一种“装饰”，一旦分配给一个组，它将美化捕获的文本并改善其视觉呈现。
这是一个实验性系统，目前有一些规则需要遵循：
- 您不能在同一个模式中为同一个组分配多个装饰。
- 如果使用不当，装饰器可能会损害而非改善阅读体验。
- 'Widget' 类型的装饰器仅在活动窗口中显示。
- 避免使用过于复杂的 Regex 模式，其中包含条件和“lookbehind”，这可能会影响编辑器中滚动的性能。

当您创建装饰器时，可以使用不同的行为进行配置。
2. 在此，您将捕获组分配给装饰器。我们在此将捕获组1、2和3分配给它。
3. 您可以选择装饰器的类型，例如 'Widget'。
4. 我们可以指示每个捕获将与一个变量类别关联。

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-2.webp" />

## 测试模式 {#test-pattern}
前往 [regexr](https://regexr.com) 来测试并更好地理解您的 Regex。
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```

1. 如果我们选择第一个捕获，
2. 并显示完整的详细信息，
3. 我们可以观察到以下捕获细节：
第0组是完整的捕获本身。
对于组1、2和3，我们确实捕获到了 'a2'、'e1' 和 '1'。

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-3.webp" />

## 链接变量 {#link-variable}
我们可以通过将这些捕获与示例中的某物，或者更确切地说，与某人对应起来，从而进行更多操作。
在我们虚构的引擎中，'a1'、'a2'、'a3'... 将对应游戏中的角色。

1. 在您的模式中激活“变量”选项。
2. 我们将配置捕获组，用于通过标签识别我们的变量。在这里，我们希望 LSDE 搜索“ACTORS”组的变量。

::: tip 备注
为什么不搜索所有变量而只搜索一个组？这是出于项目可维护性和性能的考虑。
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-4.webp" />

## 自定义变量 {#customize-variable}
在为变量分配装饰之前，该变量必须已经存在。
前往 [变量部分](/zh/interface/project-settings#les-variables)。
您需要在那里创建一个新类别以及一个变量。
1. 创建一个名为 'ACTORS' 的类别，并在其中添加一个新变量。
2. 接着，在“标签”字段中，我们可以添加关键词，这些关键词将被模式捕获和其他系统搜索。
例如，添加“a1”，它将对应于我们虚构游戏引擎中角色的虚构 ID。
3. 然后，您可以为它在文本编辑器中分配一个渲染外观，以及一个特定的工具提示外观。

之后，您将可以直接在文本编辑器中体验此变量的“Widget”渲染效果。
通过简单的点击，您还可以显示一个工具提示，其中将展示为该变量配置的信息。

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-5.webp" />

::: tip 备注
单击将显示装饰而无需 Widget。
:::

---
