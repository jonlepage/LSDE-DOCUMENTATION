---
title: "Introduction"
description: "Plus qu'un simple outil de traduction, LSDE est optimisé pour vous permettre d'établir un flux de travail idéal et personnalisé pour chaque projet."
section: getting-started
outline: [2, 3]
---

# Introduction

<DocImage src="/doc/lsde/lsde-banner.webp" h="80" icon />

## Qu'est-ce que LS-Dialog Editor ? {#what-is-ls-dialog-editor}
**LSDE**: acronyme de *LepaSoft Dialog Editor*, est un outil conçu pour **assister les développeurs dans la rédaction et la traduction de leurs projets**.
Plus qu'un simple outil de traduction, LSDE est optimisé pour vous permettre d'établir un flux de travail idéal et personnalisé pour chaque projet.
- Traduction de texte manuelle ou assistée par des LLM.
- Composition de texte manuelle ou assistée par des LLM.
- Gestion centralisée des dialogues et chaînes textuelles.
- Suivi des modifications et historique de version.
- Détection automatique des incohérences ou problèmes.
- Prise en charge de plusieurs formats d’exportation et d’importation.
- Intégration possible avec des outils externes (moteurs de jeu, pipelines CI/CD).
- Organisation de la structure et du rendu de l'interface de votre projet.
- Outils de validation linguistique (longueur, contraintes, tags, variables).
- Collaboration en temps réel ou via fichiers partagés.
- Génération et synchronisation de la narration audio vocale.
- Personnalisations avancées du logiciel pour vos besoins.

## Comment fonctionne LS-Dialog Editor ? {#how-it-works}
LSDE s'appuie sur **les bonnes pratiques d'i18n** pour organiser vos clés de traduction.
Sans imposer une structure unique, il intègre les approches éprouvées par les frameworks pour gérer les complexités linguistiques comme les contextes et les pluriels.

**Le workflow est très simple :**
- Vous créez un nouveau projet.
- Vous définissez le dossier de votre projet.
- Vous créez des clés manuellement ou automatiquement en scannant votre projet.
- Vous appliquez des tâches sur les clés (traductions, corrections, réorganisations...).

## Les clés {#the-keys}
LSDE emploie un système de clés hiérarchiques pour localiser précisément chaque dialogue.
Exemple : La clé `game:scenes.events.The-quest-of-sun.d1`
- `game:` indique le namespace (espace de noms). Ce nom est défini par le nom du fichier de traduction, par exemple : `locales/en/game.json`, `locales/en/scenes.json`...
- `scenes.events.The-quest-of-sun.d1` représente le chemin d'accès pour retrouver le dialogue dans la structure JSON du fichier.

```json
	// file game.json
	{
		'scenes': {
			'title': '',
			'description': '',
			'events': {
				'The-quest-of-sun': {
					'd1': '',
				},

			},
		},
	},
```

::: tip Note
LS Dialog Editor met en cache les dialogues dans les fichiers `.lsde`. Cela facilite le partage et la récupération de vos projets, évitant ainsi l'envoi d'un ensemble de fichiers complexes à vos clients.
:::

## Conventions de clés i18n {#i18n-key-convention}
[W3C Internationalization](https://www.w3.org/International/) est la référence qui définit l'i18n comme norme, indépendamment de toute bibliothèque logicielle.
Les recommandations W3C définissent les règles fondamentales :
- éviter la concaténation
- gérer les pluriels selon les règles linguistiques CLDR
- gérer les dates, les nombres et les monnaies
- fournir du contexte aux traducteurs
- séparer le texte du code
- prévoir des locales de secours (fallback)
- ne jamais supposer une longueur ou un ordre de mots
- prendre en charge les écritures RTL (arabe, hébreu)
Concernant les standards et les bonnes pratiques architecturales JSON, [ICU (International Components for Unicode)](https://cldr.unicode.org/index/json-format-data) sert de référence.

## i18next & i18n ? {#i18next-i18n}
LSDE s'appuie à la fois sur i18n et sur certaines bonnes pratiques issues de [i18next](https://www.i18next.com/misc/the-history-of-i18next).
Notamment pour :
- la structure des dossiers
- la contextualisation des pluriels
- la prise en charge des imbrications (nesting) et des variables...

### Pour les jeux {#for-game-dev}
LSDE prend en charge deux types de dialogues pour les jeux.
Il n'y a pas de bonne approche universelle, mais plutôt des outils adaptés à chaque tâche.
- SAD : "Single Actor Dialog"
Un seul acteur par dialogue, généralement idéal pour les jeux d'action ou sans narration complexe.
Ce qui veut dire que chaque clé correspond à un dialogue ou à un morceau de texte et doit être concaténé et assemblé dans le moteur de jeu.

::: tip Note
Cette approche peut introduire beaucoup de complexité dans un jeu narratif avec beaucoup d'interactions entre plusieurs personnages, comme les JRPG, par exemple.
:::
- MAD: "Multiple Actors Dialog"
Plusieurs acteurs dans un même dialogue, identifiés par des balises (tags), idéal pour les RPG ou les jeux avec une narration complexe impliquant plusieurs acteurs.
Cela signifie que vous intégrerez une suite de dialogues, séparés par des balises (tags), qui seront ensuite interprétés par votre moteur de jeu.

::: tip Note
Cela facilite grandement la prise de recul sur des dialogues complexes impliquant plusieurs interlocuteurs, mais c'est un peu trop complexe pour de simples jeux d'action, par exemple.
:::

### Pour le WEB {#for-web-dev}
Il n'y a plus vraiment de raison de ne pas traduire votre site web pour pouvoir exposer votre outil dans le monde entier.
LSDE offre un confort de travail pour développer votre vitrine web avec un aperçu en temps réel grâce au HMR et à des bibliothèques i18n comme i18next dans ses versions React ou Next.js, par exemple.

- Q: Ne devrions-nous pas laisser les extensions gérer le multilinguisme des sites web ?
- R: Oui et non. Ces outils peuvent dépanner, mais ils vont dégrader l'UX et l'UI de votre vitrine. Ils ne permettent pas non plus un bon référencement SEO, contrairement à un site web traduit qui peut être indexé et proposé aux personnes qui recherchent du contenu dans leur langue maternelle.

### Pour les logiciels {#for-app-dev}
La traduction de vos logiciels et applications est extrêmement importante.
Les architectures, langages et techniques de développement logiciel sont généralement beaucoup plus libres que ceux du web.
C'est pourquoi LSDE offre des outils 100 % configurables pour les adapter à vos besoins et à votre architecture.
Ce sont les expressions régulières (regex) qui permettent de créer un couplage entre votre architecture et LSDE.
