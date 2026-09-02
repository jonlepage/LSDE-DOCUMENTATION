---
title: "MCP Bridge"
description: "MCP Bridge 서버를 통해 외부 AI 도구 및 에이전트는 표준 MCP(Model Context Protocol) 프로토콜을 통해 에디터와 상호 작용할 수 있습니다."
section: resources
outline: [2, 3]
---

# MCP Bridge

MCP Bridge 서버를 통해 외부 AI 도구 및 에이전트는 표준 MCP(Model Context Protocol) 프로토콜을 통해 에디터와 상호 작용할 수 있습니다.

## MCP란 무엇인가요? {#what-is-mcp}
MCP는 언어 모델과 AI 에이전트가 외부 애플리케이션과 통신할 수 있도록 하는 개방형 프로토콜입니다.
귀하의 IDE(VS Code, Cursor 등)는 AI 어시스턴트의 기능을 풍부하게 하기 위해 MCP 서버에 자동으로 연결될 수 있습니다.
연결은 프로젝트 루트에 배치된 `.mcp.json` 구성 파일을 통해 이루어집니다. 수동 설치는 필요하지 않습니다.

## 구성 {#configuration}
프로젝트 루트에서 `.mcp.json` 파일을 생성하거나 편집하여 서버를 추가하세요.
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
이 파일이 준비되면 IDE(또는 AI 확장 프로그램)를 다시 시작하여 서버가 감지되도록 하십시오.
프로세스는 완전히 자동화됩니다. 패키지는 `npx`를 통해 다운로드되고 서버는 백그라운드에서 실행됩니다.

[npm 패키지: @lsde/mcp-server](https://www.npmjs.com/package/@lsde/mcp-server)

## 기능 {#capabilities}
MCP Bridge 서버는 외부 에이전트가 다음을 수행할 수 있도록 합니다.
- **프로젝트 구조 읽기** — 장면 트리, 블록, 연결 및 메타데이터.
- **노드 조회** — 그래프의 모든 노드에 대한 텍스트 및 속성에 액세스.
- **변수 관리** — 프로젝트의 변수 및 사전을 읽고 상호 작용.
- **장면 생성 트리거** — 구조화된 명령을 통해 새로운 장면 생성.
- **수정 제안** — 검증을 위해 텍스트 또는 구조 편집 제출.

## 사용 사례 {#use-cases}
- **Claude Code / Cursor** — AI 지원 개발 워크플로우에 에디터를 통합.
- **자동화된 파이프라인** — 에디터를 빌드 또는 CI/CD 스크립트에 연결.
- **QA 에이전트** — 대화의 서술적 일관성을 자동으로 검증.
- **맞춤형 도구** — 표준 프로토콜을 통해 자신만의 통합 구축.

## 가용성 {#availability}
MCP Bridge는 **전문가** 및 **기업/교육** 플랜에서 사용할 수 있습니다.
