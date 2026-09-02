---
title: "Unreal Engine"
description: "LSDE 通过 Unreal 的原生本地化系统和 C++ 类生成来支持 Unreal Engine。"
section: engines
outline: [2, 3]
---

# Unreal Engine

LSDE 通过 Unreal 的原生本地化系统和 C++ 类生成来支持 **Unreal Engine**。

工作流程：
- **导入** — 通过 Localization Dashboard 从 Unreal 导出文本，然后导入到 LSDE。
- **编辑** — 在 LSDE 中翻译和编辑文本，借助 LLM 协助。
- **导出** — 重新导出本地化文件并重新导入到 Unreal。

## C++ 类生成 {#cpp-generation}
LSDE 基于您的蓝图定义自动生成类型化 **C++** 访问类。
这些类集成到您的 Unreal 项目中，让您能够访问您的对话并进行编译时类型检查。

## 提示 {#tips}
- 使用 Unreal 的 **Localization Dashboard** 进行语言和本地化目标的初始配置。
- 将 `.lsde` 文件放置在您的 Unreal 项目根目录，以进行 Git 版本控制。
- LSDE 负责翻译和排版 — Unreal 通过 `FText` 管理打包和运行时加载。
