---
title: "RPG Maker"
description: "LSDE integrates natively with RPG Maker MV and RPG Maker MZ for managing and translating your dialogues."
section: engines
outline: [2, 3]
---

# RPG Maker

LSDE integrates natively with **RPG Maker MV** and **RPG Maker MZ** for managing and translating your dialogues.

## How it works {#how-it-works}
RPG Maker stores its dialogues in JSON files (Map, CommonEvents, System, etc.).
LSDE can import these files, allow you to comfortably edit and translate them, and then re-export them in the format expected by RPG Maker.

If you want full support for RMMZ i18n, you must download the [plugin here](https://raw.githubusercontent.com/jonlepage/LSDE-RMMZ-I18N/refs/heads/main/dist/LSDE_i18n.js)

The typical workflow:
- **Import** — Point LSDE to your RPG Maker project's `data/` folder. Smart Import automatically detects and extracts dialogue keys.
- **Editing** — Write, correct, and translate your texts manually or with LLM assistance, metadata, and spell checker.
- **Export** — Re-export the modified JSON files directly into your RPG Maker project.

## Supported versions {#supported-versions}
- **RPG Maker MV** — Full JSON Import/Export
- **RPG Maker MZ** — Full JSON Import/Export
- Older versions (VX Ace, XP) are not natively supported but may work via a custom parser.

## Video tutorial {#video-tutorial}
<YouTube id="0cJjxtI088Q" />

## Tips {#tips}
- Use the code scanner to verify that all your keys are present in the RPG Maker files.
- Configure Regex patterns in the project settings to automatically detect RPG Maker dialogue keys.
- Take advantage of MAD (Multi Actor Dialog) mode if your events contain dialogues with multiple characters.
