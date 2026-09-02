---
title: "MCP Bridge"
description: "Le serveur MCP Bridge permet aux outils et agents AI externes d'interagir avec l'éditeur via le protocole standard MCP (Model Context Protocol)."
section: resources
outline: [2, 3]
---

# MCP Bridge

Le serveur MCP Bridge permet aux outils et agents AI externes d'interagir avec l'éditeur via le protocole standard MCP (Model Context Protocol).

## Qu'est-ce que MCP ? {#what-is-mcp}
MCP est un protocole ouvert qui permet aux modèles de langage et aux agents AI de communiquer avec des applications externes.
Votre IDE (VS Code, Cursor, etc.) peut se connecter automatiquement à un serveur MCP pour enrichir les capacités de votre assistant AI.
La connexion se fait via un fichier de configuration `.mcp.json` placé à la racine de votre projet — aucune installation manuelle n'est requise.

## Configuration {#configuration}
Créez ou éditez le fichier `.mcp.json` à la racine de votre projet pour y ajouter le serveur :
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
Une fois ce fichier en place, redémarrez votre IDE (ou l'extension AI) pour que le serveur soit détecté.
Le processus est entièrement automatisé : le package est téléchargé via `npx` et le serveur se lance en arrière-plan.

[Package npm : @lsde/mcp-server](https://www.npmjs.com/package/@lsde/mcp-server)

## Capacités {#capabilities}
Le serveur MCP Bridge permet aux agents externes de :
- **Lire la structure du projet** — Arbre des scènes, blocs, connexions et métadonnées.
- **Consulter les noeuds** — Accéder au texte et aux propriétés de n'importe quel noeud du graphe.
- **Gérer les variables** — Lire et interagir avec les variables et dictionnaires du projet.
- **Déclencher la génération de scènes** — Créer de nouvelles scènes via des commandes structurées.
- **Proposer des modifications** — Soumettre des éditions de texte ou de structure pour validation.

## Cas d'usage {#use-cases}
- **Claude Code / Cursor** — Intégrez l'éditeur dans votre workflow de développement assisté par AI.
- **Pipelines automatisés** — Connectez l'éditeur à vos scripts de build ou de CI/CD.
- **Agents de QA** — Validez automatiquement la cohérence narrative de vos dialogues.
- **Outils custom** — Construisez vos propres intégrations via le protocole standard.

## Disponibilité {#availability}
Le MCP Bridge est disponible dans les plans **Professionnel** et **Entreprise/Éducatif**.
