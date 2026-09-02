---
title: "Blueprint"
description: "The Blueprint editor is the visual interface for composing dialogues in LSDE."
section: interface
outline: [2, 3]
---

# Blueprint

<DocImage src="/doc/lsde/doc-lsde-blueprint-1.webp" left />

The Blueprint editor is the visual interface for composing dialogues in LSDE.
It allows you to build narrative graphs by connecting blocks, offering a clear overview of the conversational flow.
You can then retrieve these flows as pure data and use them in your Runtime or [LSDEDE](https://jonlepage.github.io/LS-Dialog-Editor-Engine), the generic Runtime designed to meet this need.

## Overview {#overview}
The Blueprint functions as an infinite canvas where you place and link blocks.
Each scene has its own graph, with a starting block and a flow that branches according to your design choices.
Scenes are automatically saved when you switch between them.

---

## Block Types {#block-types}
The Blueprint system relies on **4 types of content blocks** and one note type:
- **Dialog** — A line of dialogue assigned to a character. The most common block.
- **Choice** — A branching point where the player chooses a response from several options.
- **Condition** — An invisible switch that evaluates the game's state and silently redirects the flow.
- **Action** — Triggers in-game effects (give an item, play a sound, activate a flag).
- **Note** — A comment block for the narrative designer, ignored during execution.

## Canvas Interactions {#canvas-interactions}
The editor offers a fluid composition experience designed so you don't have to leave the keyboard:
- **Drag-and-drop** to move and reorganize blocks.
- **Multi-selection** to move or delete multiple blocks simultaneously.
- **Copy/Paste** of blocks and connections between scenes.
- **Full Undo/Redo** on all operations.
- **Alignment guides** for a clean and readable graph.
- **Block locking** to protect finalized sections.
- **Keyboard shortcuts** Stay in your flow; you don't need to juggle between mouse and keyboard.

## Fast Carousel {#fast-carousel}
The fast carousel allows you to configure actors, emotions, and choices block by block, directly from the canvas.
No need to open each block individually — navigate with the keyboard and continuously assign properties.

## Navigation {#navigation}
- **Minimap** — Reduced view of the complete graph for quick navigation in large scenes.
- **Scene tree** — Side panel listing all scenes in the project.
- **Folder mode** — Visualizes scenes as connected cards for an overview of the project.

## Export {#export}
Blueprints can be exported to game engine formats with per-scene target selection, metadata, and character identifiers.
The system automatically generates **typed interface classes** for:
- **TypeScript** / JavaScript
- **C#** (.NET, Unity, Godot Mono)
- **C++** (Unreal Engine, custom engines)
- **GDScript** (Godot 4)

Naming conventions are configurable according to your project.
