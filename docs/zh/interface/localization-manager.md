---
title: "本地化"
description: "LSDE 支持 ISO 639-1 代码或 ISO 639-1 - ISO 3166-1 组合。点击此处了解更多规格详情。"
section: interface
outline: [2, 3]
---

# 本地化

这个必选模块可让您配置项目的语言和命名空间。
您可以选择使用智能导入或手动配置语言服务。

::: tip 备注
LSDE 支持 ISO 639-1 代码或 ISO 639-1 - ISO 3166-1 组合。[点击此处](/zh/getting-started/introduction#i18n-key-convention)了解更多规格详情。
:::

## 界面 {#interface}
<DocImage src="/doc/lsde/doc-lsde-ui-localisations.webp" />

界面提供以下部分：
0. **智能导入** (可选)
导入已存在的文件夹结构，组织方式如下：
`../folder/lang/namespace.json` => `../locales/en/main.json`

### 语言配置 {#setup-languages}
- **`ISO 639-1` 和 `ISO 3166-1` 代码配置**
语言代码可以根据两种规范进行连接，例如：`en` 或 `en-US`、`en-GB`。
这些 `ISO 639-1 - ISO 3166-1` 代码对应于语言及其本地化。

**本节允许：**
1. 添加/删除语言
打开一个新对话框，您可以在其中使用管理器查找和/或删除项目语言。
2. 定义主语言
该语言在某些任务中用作源语言，并且是使用该软件的强制要求。
4. 按所需顺序查看、删除或重新排序语言。

::: tip 备注
（这是编辑器中的渲染顺序。）这是项目的主语言。
:::

### 命名空间 {#namespace}
3. 这是创建命名空间的地方。
命名空间简单地表示**包含键的文件名**。就是这么简单。
示例：`locales/en-GB/main.json`。在此处，命名空间将是 `main`，文件中的键将具有相对路径。

::: tip 备注
您可以重新定义命名空间文件夹或将其删除。
:::
