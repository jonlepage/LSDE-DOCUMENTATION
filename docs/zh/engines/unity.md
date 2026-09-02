---
title: "Unity"
description: "LSDE 与 Unity 集成，用于直接在您的 Unity 项目中管理、翻译和同步您的对话。"
section: engines
outline: [2, 3]
---

# Unity

LSDE 与 **Unity** 集成，用于直接在您的 Unity 项目中管理、翻译和同步您的对话。

<YouTube id="NNlNnLo18Mo" />

## LSDE Bridge 插件 {#lsde-bridge}
LSDE 提供一个免费的 Unity 插件：**LSDE Bridge — Unity Localization Sync**。
此软件包消除了逐个手动导入/导出每个 String Table Collection 的需求。

**主要功能：**
- **批量导入/导出** — 一次性同步所有本地化表。
- **支持格式** — XLIFF 2.0 和 CSV，兼容 Unity Localization 软件包。
- **自动重命名** — 检测 ID 相同但名称不同的键，并在 Unity 中进行重命名。
- **孤立项清理** — 删除 Unity 中存在但导入文件中缺失的键。
- **试运行** — 在应用更改之前预览。
- **开发者报告** — 生成一个 Markdown 报告，其中包含已执行的操作和用于查找 C# 脚本中过时引用的 grep 命令。

**先决条件：**
- Unity **2021.3 LTS** 或更高版本
- [Unity Localization](https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/index.html) 软件包 **1.4.2+**

**安装：**
打开 **Window > Package Manager**，点击 **+** > **Add package from git URL** 并输入仓库 URL。
链接即将提供。

## CSV 工作流 {#workflow-csv}
CSV 工作流是入门最简单的方式：
- **导出** — 在 LSDE Bridge 中，点击“Export All”将所有表导出为 CSV 文件。
- **编辑** — 将这些 CSV 文件导入 LSDE，编辑并翻译您的文本。
- **导入** — LSDE 导出修改后的 CSV 文件，然后在 LSDE Bridge 中点击“Import All CSV”以同步 Unity。

## XLIFF 工作流 {#workflow-xliff}
对于需要更精细控制的项目：
- **导出** — 使用 Unity 内置的 XLIFF 导出功能生成 .xlf 文件。
- **编辑** — 导入 LSDE，在 LLM 协助下编辑并添加元数据。
- **导入** — LSDE 导出 .xlf 文件，然后 LSDE Bridge 执行 XML 解析导入并直接更新 StringTables。

## 插件访问 {#access}
通过 **Window > Asset Management > LSDE Bridge** 在 Unity 中打开插件。
配置格式（XLIFF 或 CSV）、导入/导出文件夹以及同步选项。

## 提示 {#tips}
- 将 `.lsde` 文件放置在 Unity 项目的根目录，以便利用 Git 版本控制。
- 在导入前务必使用 **试运行** 来检查更改。
- 启用**开发者报告**以识别已重命名或删除的键，并更新您的 C# 引用。
