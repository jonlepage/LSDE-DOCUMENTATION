---
title: "MCP Bridge"
description: "El servidor MCP Bridge permite a las herramientas y agentes de IA externos interactuar con el editor a través del protocolo estándar MCP (Model Context…"
section: resources
outline: [2, 3]
---

# MCP Bridge

El servidor MCP Bridge permite a las herramientas y agentes de IA externos interactuar con el editor a través del protocolo estándar MCP (Model Context Protocol).

## ¿Qué es MCP? {#what-is-mcp}
MCP es un protocolo abierto que permite a los modelos de lenguaje y a los agentes de IA comunicarse con aplicaciones externas.
Su IDE (VS Code, Cursor, etc.) puede conectarse automáticamente a un servidor MCP para enriquecer las capacidades de su asistente de IA.
La conexión se realiza a través de un archivo de configuración `.mcp.json` ubicado en la raíz de su proyecto — no se requiere instalación manual.

## Configuración {#configuration}
Cree o edite el archivo `.mcp.json` en la raíz de su proyecto para añadir el servidor:
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
Una vez que este archivo esté en su lugar, reinicie su IDE (o la extensión de IA) para que el servidor sea detectado.
El proceso está completamente automatizado: el paquete se descarga a través de `npx` y el servidor se inicia en segundo plano.

[Paquete npm: @lsde/mcp-server](https://www.npmjs.com/package/@lsde/mcp-server)

## Capacidades {#capabilities}
El servidor MCP Bridge permite a los agentes externos:
- **Leer la estructura del proyecto** — Árbol de escenas, bloques, conexiones y metadatos.
- **Consultar los nodos** — Acceder al texto y a las propiedades de cualquier nodo del grafo.
- **Gestionar las variables** — Leer e interactuar con las variables y diccionarios del proyecto.
- **Disparar la generación de escenas** — Crear nuevas escenas a través de comandos estructurados.
- **Proponer modificaciones** — Enviar ediciones de texto o de estructura para su validación.

## Casos de uso {#use-cases}
- **Claude Code / Cursor** — Integre el editor en su flujo de trabajo de desarrollo asistido por IA.
- **Pipelines automatizados** — Conecte el editor a sus scripts de build o de CI/CD.
- **Agentes de QA** — Valide automáticamente la coherencia narrativa de sus diálogos.
- **Herramientas personalizadas** — Construya sus propias integraciones a través del protocolo estándar.

## Disponibilidad {#availability}
El MCP Bridge está disponible en los planes **Profesional** y **Empresarial/Educativo**.
