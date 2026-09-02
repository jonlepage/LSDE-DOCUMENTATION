---
title: "Unreal Engine"
description: "LSDE supports Unreal Engine through Unreal's native localization system and C++ class generation."
section: engines
outline: [2, 3]
---

# Unreal Engine

LSDE supports **Unreal Engine** through Unreal's native localization system and C++ class generation.

The workflow:
- **Import** — Export your texts from Unreal via the Localization Dashboard, then import them into LSDE.
- **Edit** — Translate and edit your texts in LSDE with LLM assistance.
- **Export** — Re-export the localized files and re-import them into Unreal.

## C++ Class Generation {#cpp-generation}
LSDE automatically generates typed **C++** access classes from your Blueprint definitions.
These classes integrate into your Unreal project and allow you to access your dialogues with compile-time type checking.

## Tips {#tips}
- Use Unreal's **Localization Dashboard** for initial language setup and localization targets.
- Place the `.lsde` file in the root of your Unreal project for Git version control.
- LSDE handles translation and composition — Unreal manages packaging and runtime loading via `FText`.
