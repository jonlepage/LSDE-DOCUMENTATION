---
title: "LLMs"
description: "要在 LSDE 中使用 LLM（Large Language Models），您需要配置访问权限：填写您预先创建的用于 Cloud 的 API 密钥，或者如果您更倾向于使用本地模型，请配置 “localhost” 地址。"
section: features
outline: [2, 3]
---

# LLMs

<DocImage src="/doc/lsde/doc-lsde-features-llms-2.webp" />

## 使用 LLM {#usage}
要在 LSDE 中使用 LLM（Large Language Models），您需要配置访问权限：填写您预先创建的用于 Cloud 的 API 密钥，或者如果您更倾向于使用本地模型，请配置 “localhost” 地址。

### 多密钥系统 {#multi-keys}
LSDE 支持同时管理多个 API 密钥。
该系统允许您通过自动切换到仍有额度的密钥，来充分利用多个配额有限的密钥。

此功能非常适合最大限度地使用受每日更新限制的免费密钥。
通过启用自动轮换，您可以安全且无需手动干预地耗尽您的额度。

::: tip 备注
当检测到错误时，LSDE 会将该 API 密钥视为已耗尽，并自动切换到下一个。您可以定义多个轮换周期（通常为 2 次），以确保获取所有密钥上的全部免费额度。
:::

### 激活 LLM {#activate-llm}
您可以在应用程序的页脚处激活或停用任何可用的 LLM。
当未选择任何 LLM 时，LSDE 将尝试使用您预先配置的 LLM fallback。

---

<DocImage src="/doc/lsde/doc-lsde-features-llms-1.webp" />

## 本地 LLM {#local-llm}
如果您希望在本地使用模型，只需填写服务器的 localhost 地址。LSDE 将连接到该地址以执行您的任务。

### 如何安装本地 LLM？ {#local-llm-install}
- [下载 Ollama](https://ollama.com/download)（适用于您的操作系统）。
- 启动服务器并安装您的模型。
- 关闭应用程序（它必须在后台保持运行）。
- 在 LSDE 的 Ollama 配置中填写您的 localhost 地址和相应端口。
- 点击 “连接” 并选择您的模型之一。
- 确保在软件底部的状态栏中激活 LLM。
