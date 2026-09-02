---
title: "Features Sheet"
description: "The public Beta version brings major improvements to the user experience (UX) and features to support any type of project."
section: resources
outline: [2, 3]
---

# Features Sheet

The public Beta version brings major improvements to the user experience (UX) and features to support any type of project. 
Here is a summary of the features (Cheat Sheet):

## General {#general}
- Very compact, modern, and ergonomic interface.
- Interface fully translated into 10 languages: fr, en, es, de, it, pl, ja, ko, zh, ru.
- Quick interface toggle between two favorite languages via `[F1]`.
- Modular layout system with dockable windows (ideal for multi-monitor setups).
- Full-screen mode for all windows.
- Tooltip help on all buttons on hover.
- Accessibility: dedicated options for color blindness and vision impairments.
- Keyboard shortcuts for context-specific quick actions.
- Several Zen modes to promote focus during writing.
- Real-time project statistics: keys, words, characters, tokens, keystrokes, selections.
- Fast guided and preconfigured project creation in one click.
- `.lsde` project files in JSON, compatible with versioning (Git) and easy to share.
- System support (OS) for icons and for opening projects with the `.lsde` extension.
- Option to automatically reopen the last used project.
- History of recently opened projects.
- Detection of unexpected closures with session restoration.
- Individual Import/Export of the LSDE global configuration profile.
- One-click activation/deactivation and LLM model switching.
- Support for a free and anonymous native fallback LLM, without account or API key.
- Support for LLM copilots: Claude, DeepSeek, Gemini, GPT, Mistral, Ollama, ElevenLabs...
- Support for local LLMs via `localhost`.
- Integrated LLM assistant trained on documentation to guide you.
- LLM assistance menu on configuration fields: help, filling, improvement, translation.
- Diagnostic and management of internal errors and warnings.
- Full LSDE and i18n documentation available online.
- Support for opening links externally (browser) or internally (LSDE).
- Preconfigurations for: Unity, Godot, RPG Maker, Unreal Engine, GameMaker, Construct3, Cocos2d, Phaser, Babylon.js, SugarCube, NovelStudio...
- Customizable i18n context manager: plurals, genders, booleans, etc.

## Developer {#dev}
- Codebase analysis system for automatic key referencing.
- RAW scanner to identify raw text potentially requiring i18n keys.
- Preconfigured and customizable RegEx for proprietary game engines.
- Support for dynamic keys (e.g., `game:.scenes.${index}.events.1`).
- Automatic key creation with context and default text detection.
- Display filter for detected but not yet created keys.
- Double-click to open the IDE at the exact key location in the source code.
- Control over the number of source code lines displayed.
- Display themes for source code.
- Real-time detection and visualization of external i18n file desynchronization.
- One-click manual synchronization option.

## Tree {#tree}
- Multiple rendering modes: tree structure, flat list (with or without full path), missing translations, keys without reference, with audio, or with ongoing task.
- Search by key or associated content.
- Namespace (root) folder design optimized for quick identification.
- Display of the number of subfolders upon selection.
- Intelligent i18n key creation with auto-increment based on selections.
- Full context menu via right-click.
- Multi-selection with `Ctrl+click`.
- Drag & Drop support.
- Contextual tags on each item: plural, gender, voice, incomplete, unknown in code, etc.
- Batch tasks via context menu to iterate over subfolders.

## LLM {#LLM}
- Favorite models manager.
- Secure API key management.
- Ability to save multiple API keys with automatic rotation (auto-roll) in case of errors.
- Management and customization of native tasks: instructions and rules sent to the LLM.

## Editing / Composition {#editing}
- Customization of theme and typography: fonts, spacing, line height, colors, and RTL support.
- 100% customizable text rendering engine: variables, colors, links, tooltips.
- Filtering of languages and contexts to display.
- Text search, replace, and navigation with RegEx support.
- Task menu to process each dialogue: translation, correction, rewriting, length adjustment, text continuation.
- LLM spellchecker configurable in real-time.
- Quick action bar: navigation, rendering management, context or key creation.
- Paragraph mode option via double line break.
- Quick line deletion (IDE behavior).
- Context menu on text selection.
- Customizable wrapper manager to wrap selected text.
- Incremental and reversible wrappers based on the number of interactions.
- Validation system: change detection, translations to revalidate or ignore.
- Comparison of modifications and result refinement during a task.
- Saving quick configurations for each task type.
- Support for SAD/MAD paradigms (Single/Multi Actor Per Dialog).
- Voice (audio) manager per character for each string.
- Metadata visualization: images, notes, LLM contexts, characters, voices, icons.
- Display of dependent variables and text references.
