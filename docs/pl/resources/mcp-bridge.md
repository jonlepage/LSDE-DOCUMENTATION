---
title: "MCP Bridge"
description: "Serwer MCP Bridge umożliwia zewnętrznym narzędziom i agentom AI interakcję z edytorem za pośrednictwem standardowego protokołu MCP (Model Context…"
section: resources
outline: [2, 3]
---

# MCP Bridge

Serwer MCP Bridge umożliwia zewnętrznym narzędziom i agentom AI interakcję z edytorem za pośrednictwem standardowego protokołu MCP (Model Context Protocol).

## Czym jest MCP? {#what-is-mcp}
MCP to otwarty protokół, który umożliwia modelom językowym i agentom AI komunikację z zewnętrznymi aplikacjami.
Twoje IDE (VS Code, Cursor itp.) może automatycznie połączyć się z serwerem MCP, aby wzbogacić możliwości Twojego asystenta AI.
Połączenie odbywa się za pośrednictwem pliku konfiguracyjnego `.mcp.json` umieszczonego w katalogu głównym projektu — nie jest wymagana żadna ręczna instalacja.

## Konfiguracja {#configuration}
Utwórz lub edytuj plik `.mcp.json` w katalogu głównym projektu, aby dodać serwer:
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
Gdy ten plik zostanie umieszczony, ponownie uruchom swoje IDE (lub rozszerzenie AI), aby serwer został wykryty.
Proces jest w pełni zautomatyzowany: pakiet jest pobierany za pośrednictwem `npx`, a serwer uruchamia się w tle.

[Pakiet npm: @lsde/mcp-server](https://www.npmjs.com/package/@lsde/mcp-server)

## Możliwości {#capabilities}
Serwer MCP Bridge umożliwia zewnętrznym agentom:
- **Odczyt struktury projektu** — Drzewo scen, bloki, połączenia i metadane.
- **Konsultacja węzłów** — Dostęp do tekstu i właściwości dowolnego węzła w grafie.
- **Zarządzanie zmiennymi** — Odczyt i interakcja ze zmiennymi i słownikami projektu.
- **Uruchamianie generowania scen** — Tworzenie nowych scen za pośrednictwem ustrukturyzowanych poleceń.
- **Proponowanie modyfikacji** — Przedkładanie edycji tekstu lub struktury do walidacji.

## Przypadki użycia {#use-cases}
- **Claude Code / Cursor** — Zintegruj edytor ze swoim przepływem pracy w zakresie rozwoju wspomaganego AI.
- **Zautomatyzowane potoki** — Podłącz edytor do swoich skryptów kompilacji lub CI/CD.
- **Agenci QA** — Automatycznie weryfikuj spójność narracyjną swoich dialogów.
- **Narzędzia niestandardowe** — Twórz własne integracje za pośrednictwem standardowego protokołu.

## Dostępność {#availability}
MCP Bridge jest dostępny w planach **Profesjonalnym** oraz **Korporacyjnym/Edukacyjnym**.
