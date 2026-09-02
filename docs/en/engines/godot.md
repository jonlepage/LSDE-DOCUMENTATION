---
title: "Godot"
description: "LSDE integrates with Godot 4 for managing and translating your dialogues, with native support for GDScript and C# (Mono)."
section: engines
outline: [2, 3]
---

# Godot

LSDE integrates with **Godot 4** for managing and translating your dialogues, with native support for GDScript and C# (Mono).

## Integration
Godot uses CSV or JSON files for localization via its `TranslationServer` system.
LSDE can import and export these formats for a fluid workflow between the two tools.

The workflow:
- **Import** — Import your Godot translation files (CSV or JSON) into LSDE via Smart Import.
- **Edit** — Translate and edit with LLM assistance, metadata, and spell checker.
- **Export** — Re-export the localized files directly into your Godot project folder.

## Code Generation
LSDE automatically generates typed access classes in two languages:
- **GDScript** — Native Godot classes with autocompletion in the Godot editor.
- **C# (Mono)** — For Godot projects using the .NET runtime.

These classes provide access to your dialogue keys with type checking, avoiding hardcoded string errors.

## Tips
- Godot loads translations via `TranslationServer.set_locale()` — your files exported by LSDE are directly compatible.
- Place the `.lsde` file at the root of your Godot project for Git version control.
- Configure automatic export on save in LSDE to continuously synchronize your changes with Godot.
- Use `tr()` in your GDScript scripts to access the exported translation keys.
