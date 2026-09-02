---
title: "MCP Bridge"
description: "MCP Bridge 服务器允许外部 AI 工具和代理通过标准的 MCP（Model Context Protocol）协议与编辑器交互。"
section: resources
outline: [2, 3]
---

# MCP Bridge

MCP Bridge 服务器允许外部 AI 工具和代理通过标准的 MCP（Model Context Protocol）协议与编辑器交互。

## 什么是 MCP？ {#what-is-mcp}
MCP 是一个开放协议，允许语言模型和 AI 代理与外部应用程序通信。
您的 IDE（例如 VS Code、Cursor 等）可以自动连接到 MCP 服务器，以增强您的 AI 助手的 EAI 能力。
连接通过放置在项目根目录下的 `.mcp.json` 配置文件进行——无需手动安装。

## 配置 {#configuration}
在项目根目录下创建或编辑 `.mcp.json` 文件以添加服务器配置：
```json
{
	"mcpServers": {
		"lsde": {
			"command": "npx",
			"args": ["-y", "@lsde/mcp-server@latest"],
			"env": {
				"LSDE_MCP_PORT": "9225"
			}
		}
	}
}
```
一旦该文件就位，请重启您的 IDE（或 AI 扩展）以便服务器被检测到。
整个过程是完全自动化的：软件包通过 `npx` 下载，并且服务器在后台启动。

[npm 包：@lsde/mcp-server](https://www.npmjs.com/package/@lsde/mcp-server)

## 功能 {#capabilities}
MCP Bridge 服务器允许外部代理：
- **读取项目结构** — 场景树、区块、连接和元数据。
- **查询节点** — 访问图中任何节点的文本和属性。
- **管理变量** — 读取并与项目变量和字典交互。
- **触发场景生成** — 通过结构化命令创建新场景。
- **提议修改** — 提交文本或结构编辑以供验证。

## 用例 {#use-cases}
- **Claude Code / Cursor** — 将编辑器集成到您的 AI 辅助开发工作流程中。
- **自动化管道** — 将编辑器连接到您的构建脚本或 CI/CD。
- **QA 代理** — 自动验证对话的叙事一致性。
- **自定义工具** — 通过标准协议构建您自己的集成。

## 可用性 {#availability}
MCP Bridge 在**专业版**和**企业/教育版**计划中可用。
