---
title: "Godot"
description: "LSDE 与 Godot 4 集成，用于管理和翻译您的对话，并原生支持 GDScript 和 C# (Mono)。"
section: engines
outline: [2, 3]
---

# Godot

LSDE 与 **Godot 4** 集成，用于管理和翻译您的对话，并原生支持 GDScript 和 C# (Mono)。

## 集成 {#integration}
Godot 通过其 `TranslationServer` 系统使用 CSV 或 JSON 文件进行本地化。
LSDE 可以导入和导出这些格式，以实现两个工具之间的流畅工作流程。

工作流程：
- **导入** — 通过智能导入将您的 Godot 翻译文件（CSV 或 JSON）导入 LSDE。
- **编辑** — 借助 LLM 辅助、元数据和拼写检查进行翻译和编辑。
- **导出** — 将本地化文件直接重新导出到您的 Godot 项目文件夹。

## 代码生成 {#code-generation}
LSDE 自动生成两种语言的类型化访问类：
- **GDScript** — Godot 原生类，在 Godot 编辑器中具有自动补全功能。
- **C# (Mono)** — 适用于使用 .NET 运行时的 Godot 项目。

这些类允许通过类型检查访问您的对话键，从而避免硬编码字符串错误。

## 提示 {#tips}
- Godot 通过 `TranslationServer.set_locale()` 加载翻译 — 您由 LSDE 导出的文件直接兼容。
- 将 `.lsde` 文件放置在 Godot 项目的根目录下，以便进行 Git 版本控制。
- 在 LSDE 中配置保存时自动导出，以便与 Godot 持续同步您的修改。
- 在您的 GDScript 脚本中使用 `tr()` 来访问导出的翻译键。
