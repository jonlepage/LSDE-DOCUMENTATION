---
title: "MCP Bridge"
description: "The MCP Bridge server allows external AI tools and agents to interact with the editor via the standard MCP (Model Context Protocol)."
section: resources
outline: [2, 3]
---

# MCP Bridge

The MCP Bridge server allows external AI tools and agents to interact with the editor via the standard MCP (Model Context Protocol).

## What is MCP? {#what-is-mcp}
MCP is an open protocol that allows language models and AI agents to communicate with external applications.
Your IDE (VS Code, Cursor, etc.) can automatically connect to an MCP server to enhance the capabilities of your AI assistant.
The connection is made via a `.mcp.json` configuration file placed at the root of your project — no manual installation is required.

## Configuration {#configuration}
Create or edit the `.mcp.json` file at the root of your project to add the server:
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
Once this file is in place, restart your IDE (or the AI extension) for the server to be detected.
The process is fully automated: the package is downloaded via `npx` and the server launches in the background.

[npm Package: @lsde/mcp-server](https://www.npmjs.com/package/@lsde/mcp-server)

## Capabilities {#capabilities}
The MCP Bridge server allows external agents to:
- **Read project structure** — Scene tree, blocks, connections, and metadata.
- **Query nodes** — Access the text and properties of any node in the graph.
- **Manage variables** — Read and interact with project variables and dictionaries.
- **Trigger scene generation** — Create new scenes via structured commands.
- **Propose modifications** — Submit text or structure edits for validation.

## Use Cases {#use-cases}
- **Claude Code / Cursor** — Integrate the editor into your AI-assisted development workflow.
- **Automated Pipelines** — Connect the editor to your build or CI/CD scripts.
- **QA Agents** — Automatically validate the narrative consistency of your dialogues.
- **Custom Tools** — Build your own integrations via the standard protocol.

## Availability {#availability}
The MCP Bridge is available in **Professional** and **Enterprise/Educational** plans.
