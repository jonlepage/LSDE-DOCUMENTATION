---
title: "MCP Bridge"
description: "MCP Bridge サーバーは、外部の AI ツールおよびエージェントが、標準の MCP (Model Context Protocol) プロトコルを介してエディターと連携することを可能にします。"
section: resources
outline: [2, 3]
---

# MCP Bridge

MCP Bridge サーバーは、外部の AI ツールおよびエージェントが、標準の MCP (Model Context Protocol) プロトコルを介してエディターと連携することを可能にします。

## MCP とは？ {#what-is-mcp}
MCP は、言語モデルや AI エージェントが外部アプリケーションと通信できるようにするオープンプロトコルです。
お使いの IDE (VS Code、Cursor など) は、MCP サーバーに自動的に接続し、AI アシスタントの機能を拡張できます。
接続は、プロジェクトのルートに配置された `.mcp.json` 設定ファイルを介して行われます — 手動でのインストールは不要です。

## 設定 {#configuration}
プロジェクトのルートにある `.mcp.json` ファイルを作成または編集して、サーバーを追加します。
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
このファイルを配置した後、IDE (または AI 拡張機能) を再起動して、サーバーが検出されるようにします。
プロセスは完全に自動化されています。パッケージは `npx` を介してダウンロードされ、サーバーはバックグラウンドで起動します。

[npm パッケージ： @lsde/mcp-server](https://www.npmjs.com/package/@lsde/mcp-server)

## 機能 {#capabilities}
MCP Bridge サーバーは、外部エージェントに次のことを可能にします。
- **プロジェクト構造の読み取り** — シーンツリー、ブロック、接続、メタデータ。
- **ノードの参照** — グラフ内の任意のノードのテキストとプロパティへのアクセス。
- **変数の管理** — プロジェクトの変数と辞書の読み取りおよび連携。
- **シーン生成のトリガー** — 構造化されたコマンドを介した新しいシーンの作成。
- **変更の提案** — 検証のためのテキストまたは構造の編集の提出。

## ユースケース {#use-cases}
- **Claude Code / Cursor** — AI 支援開発ワークフローにエディターを統合します。
- **自動化パイプライン** — エディターをビルドまたは CI/CD スクリプトに接続します。
- **QA エージェント** — ダイアログの物語の一貫性を自動的に検証します。
- **カスタムツール** — 標準プロトコルを介して独自の統合を構築します。

## 利用可能プラン {#availability}
MCP Bridge は、**Professional** および **Enterprise/Educational** プランでご利用いただけます。
