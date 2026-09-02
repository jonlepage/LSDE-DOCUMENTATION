---
title: "LLM's"
description: "Pour utiliser des LLM (Large Language Models) dans LSDE, vous devez configurer vos accès : renseignez vos clés API préalablement créées pour un usage via…"
section: features
outline: [2, 3]
---

# LLM's

<DocImage src="/doc/lsde/doc-lsde-features-llms-2.webp" />

## Utiliser un LLM {#usage}
Pour utiliser des LLM (Large Language Models) dans LSDE, vous devez configurer vos accès : renseignez vos clés API préalablement créées pour un usage via le Cloud, ou configurez une adresse "localhost" si vous préférez utiliser un modèle local.

### Système multi-clés {#multi-keys}
LSDE permet de gérer plusieurs clés API simultanément. 
Ce système vous permet d'exploiter plusieurs clés aux quotas limités en basculant automatiquement vers celles disposant encore de crédits. 

Cette fonctionnalité est idéale pour maximiser l'usage de clés gratuites soumises à un renouvellement journalier. 
En activant la rotation automatique, vous pouvez épuiser vos crédits sans intervention manuelle et en toute sécurité.

::: tip Note
Lorsqu'une erreur est détectée, LSDE considère la clé API comme épuisée et passe automatiquement à la suivante. Vous pouvez définir plusieurs cycles de rotation (généralement 2) pour vous assurer d'avoir récupéré l'ensemble des crédits gratuits sur toutes vos clés.
:::

### Activer un LLM {#activate-llm}
C'est dans le pied de page de l'application que vous aurez la possibilité d'activer ou de désactiver l'un de vos LLM disponibles.
Lorsqu'aucun LLM n'est sélectionné, LSDE essaiera d'utiliser le LLM fallback que vous aurez au préalable configuré.

---

<DocImage src="/doc/lsde/doc-lsde-features-llms-1.webp" />

## LLM locaux {#local-llm}
Si vous souhaitez utiliser vos modèles localement, il vous suffit de renseigner l'adresse localhost de votre serveur. LSDE s'y connectera pour exécuter vos tâches.

### Comment installer un LLM local ? {#local-llm-install}
- [Téléchargez Ollama](https://ollama.com/download) pour votre système d'exploitation.
- Démarrez le serveur et installez vos modèles.
- Fermez l'application (elle doit rester active en arrière-plan).
- Renseignez votre adresse localhost et le port correspondant dans la configuration Ollama de LSDE.
- Cliquez sur « Connecter » et choisissez l'un de vos modèles.
- Assurez-vous d'activer le LLM dans la barre d'état située en bas du logiciel.
