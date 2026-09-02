---
title: "Introduction"
description: "More than just a simple translation tool, LSDE is optimized to allow you to establish an ideal and personalized workflow for each project."
section: getting-started
outline: [2, 3]
---

# Introduction

<DocImage src="/doc/lsde/lsde-banner.webp" h="80" icon />

## What is LS-Dialog Editor? {#what-is-ls-dialog-editor}
**LSDE**: an acronym for *LepaSoft Dialog Editor*, is a tool designed to **assist developers in writing and translating their projects**.
More than just a simple translation tool, LSDE is optimized to allow you to establish an ideal and personalized workflow for each project.
- Manual or LLM-assisted text translation.
- Manual or LLM-assisted text composition.
- Centralized management of dialogues and text strings.
- Change tracking and version history.
- Automatic detection of inconsistencies or issues.
- Support for multiple export and import formats.
- Possible integration with external tools (game engines, CI/CD pipelines).
- Organization of your project's structure and interface rendering.
- Linguistic validation tools (length, constraints, tags, variables).
- Real-time collaboration or via shared files.
- Generation and synchronization of voice audio narration.
- Advanced software customizations for your needs.

## How does LS-Dialog Editor work? {#how-it-works}
LSDE relies on **i18n best practices** to organize your translation keys.
Without imposing a unique structure, it integrates approaches proven by frameworks to manage linguistic complexities such as contexts and plurals.

**The workflow is very simple:**
- You create a new project.
- You define your project folder.
- You create keys manually or automatically by scanning your project.
- You apply tasks to the keys (translations, corrections, reorganizations...).

## The keys {#the-keys}
LSDE employs a hierarchical key system to precisely locate each dialogue.
Example: The key `game:scenes.events.The-quest-of-sun.d1`
- `game:` indicates the namespace. This name is defined by the name of the translation file, for example: `locales/en/game.json`, `locales/en/scenes.json`...
- `scenes.events.The-quest-of-sun.d1` represents the access path to find the dialogue in the file's JSON structure.

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
LS Dialog Editor caches dialogues in `.lsde` files. This facilitates sharing and retrieving your projects, thus avoiding sending a set of complex files to your clients.
:::

## i18n Key Convention {#i18n-key-convention}
[W3C Internationalization](https://www.w3.org/International/) is the reference that defines i18n as a standard, independently of any software library.
The W3C recommendations define the fundamental rules:
- avoid concatenation
- manage plurals according to CLDR linguistic rules
- manage dates, numbers, and currencies
- provide context to translators
- separate text from code
- provide fallback locales
- never assume a length or word order
- support RTL writing (Arabic, Hebrew)
Regarding JSON architectural standards and best practices, [ICU (International Components for Unicode)](https://cldr.unicode.org/index/json-format-data) serves as a reference.

## i18next & i18n ? {#i18next-i18n}
LSDE relies on both i18n and certain best practices from [i18next](https://www.i18next.com/misc/the-history-of-i18next).
Specifically for:
- folder structure
- plural contextualization
- support for nesting and variables...

### For games {#for-game-dev}
LSDE supports two types of dialogues for games.
There is no universal "right" approach, but rather tools adapted to each task.
- SAD : "Single Actor Dialog"
A single actor per dialogue, generally ideal for action games or games without complex narration.
This means that each key corresponds to a dialogue or a piece of text and must be concatenated and assembled within the game engine.

::: tip Note
This approach can introduce a lot of complexity in a narrative game with many interactions between multiple characters, such as JRPGs, for example.
:::
- MAD: "Multiple Actors Dialog"
Multiple actors in the same dialogue, identified by tags, ideal for RPGs or games with complex narration involving multiple actors.
This means you will integrate a series of dialogues, separated by tags, which will then be interpreted by your game engine.

::: tip Note
This greatly facilitates taking a step back from complex dialogues involving multiple interlocutors, but it's a bit too complex for simple action games, for example.
:::

### For WEB {#for-web-dev}
There's no real reason anymore not to translate your website to expose your tool to the whole world.
LSDE offers a comfortable working environment for developing your web showcase with real-time preview thanks to HMR and i18n libraries like i18next in its React or Next.js versions, for example.

- Q: Shouldn't we let extensions handle website multilingualism?
- A: Yes and no. These tools can help out, but they will degrade the UX and UI of your showcase. They also don't allow for good SEO, unlike a translated website that can be indexed and offered to people searching for content in their native language.

### For software {#for-app-dev}
Translating your software and applications is extremely important.
Software development architectures, languages, and techniques are generally much more flexible than those of the web.
That's why LSDE offers 100% configurable tools to adapt them to your needs and architecture.
It is regular expressions (regex) that allow for creating a coupling between your architecture and LSDE.
