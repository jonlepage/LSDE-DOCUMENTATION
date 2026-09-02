---
title: "扫描"
description: "在您的 'LSDE' 项目中，代码库扫描器的配置通过 Patterns 部分 进行。"
section: features
outline: [2, 3]
---

# 扫描

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-1.webp" left />

在您的 'LSDE' 项目中，代码库扫描器的配置通过 [Patterns 部分](/zh/interface/project-settings#patterns) 进行。

## 创建模式 {#create-pattern}
创建新的模式实例（例如，初始为空）后：
1. 填写将用于在您的代码库中捕获组的正则表达式（*Regex*）。
2. 您必须填写此部分，指明捕获您的 'i18n' 键的组。

::: tip 备注
您必须至少有 1 个捕获组。[了解更多关于正则表达式捕获组的信息](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-2.webp" />

### 查看 i18n 键 {#see-i18n-keys}
一旦 *Regex* 创建完成，结果同步是实时的。
1. 打开代码扫描器窗口，实时观察其结果。

如果树形结构中未选择任何键，则不会应用任何过滤器，扫描器将显示所有结果。

---

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-3.webp" />

相反，如果您选择一个键：
系统将过滤掉不相关的父键和相邻键。
通过层级传播，选择一个文件夹将显示其所有子键。
示例：
选择文件夹：
`A.B.C`
所有至少包含此组的键也将显示：
`A.B.C.d`
`A.B.C.d.e.f`

1. 要显示 'LSDE' 无法关联的捕获键（即缺失的键），请勾选此选项。它也允许过滤现有键。

::: tip 备注
如果此选项被禁用，'LSDE' 将显示在您的源代码中找到的缺失键，与现有键混合。
:::

---

## 测试您的模式 {#test-pattern}
<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-5.webp" />

为了验证您的模式按预期运行，打开 *Test* 标签页。将您项目的源代码粘贴到其中，以观察所进行的捕获。

### 理解您的 Regex {#understand-regex}
要理解您的 *Regex* 及其捕获组，请使用 [regexr](https://regexr.com) 等工具。
1. 将您的 *Regex* 复制并粘贴到专用区域。
```text
[^\\\\\\\\w_\\\\\\\\-\\\\\\\\$]t\\\\\\\\(\\\\\\\\s*(?:['\\\\\\\])?(?:([^\\\\\\\\s:'\\\\\\\)]+):)?([^\\\\\\\\s'\\\\\\\),]+)(?:['\\\\\\\])?\\\\\\\\s*(?:,\\\\\\\\s*(\\\\\\\\{[\\\\\\\\s\\\\\\\\S]*?(?:defaultValue\\\\\\\\s*:\\\\\\\\s*(['\\\\\\\`])((?:\\\\\\\\\\\\\\\\.|(?!\\\\\\\\4)[\\\\\\\\s\\\\\\\\S])*?)\\\\\\\\4)[\\\\\\\\s\\\\\\\\S]*?\\\\\\\\}|\\\\\\\\{[\\\\\\\\s\\\\\\\\S]*?\\\\\\\\})\\\\\\\\s*)?\\\\\\\\)
```
2. 粘贴包含要捕获的键（来自您的框架或文本引擎）的项目源代码。
3. 点击一个捕获以激活它。
4. 随后选择 'Détail'（详情）。
5. 识别您的 *Regex* 放置所需捕获的组的索引。

使用此 *Regex*，您会发现它在第 2 组中捕获您的键。因此，您需要向 'LSDE' 指明该键位于此组中，如前图所示。
系统随后可以执行此 *Regex* 并使用此捕获进行各种遥测服务。
