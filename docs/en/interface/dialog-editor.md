---
title: "Dialog Editor"
description: "This section presents the rendered content of keys. The editor organizes the selected key vertically and recursively, displaying its content in all…"
section: interface
outline: [2, 3]
---

# Dialog Editor

This section presents the rendered content of keys. The editor organizes the selected key vertically and recursively, displaying its content in all languages, its contexts, and its child keys.
It offers navigation and rendering options to filter languages and contexts, as well as action and telemetry tools.

## Rendering System {#rendering-system}
LSDE features a "post-processing" rendering system to customize text display, facilitating reading and writing.
Configure Regex patterns to capture text groups and assign decorations to them.
These captures can be associated with variables to provide additional information to the translator, editor, or LLM.
[Access the advanced section on rendering and pattern creation](/en/features/rendering)

<DocImage src="/doc/lsde/doc-lsde-ui-editor.webp" />

## Header Tools {#header-tools}
1.  **Enable/Disable Post-rendering**
Quickly disables pattern rendering.
2.  **Navigation**
Buttons to quickly navigate between the next and previous keys.
3.  **Create a Key**
Quickly creates a new key.
4.  **Show/Hide Contexts**
Shows or hides contexts related to a key to simplify the view.
Each icon corresponds to the label of the configured contexts.
5.  **Show/Hide Languages**
Filters languages for simultaneous work.

::: tip Note
These filters are also used by LSDE for other system operations, thus impacting other diagnostic tools.
:::

## Editing Zones {#editing-zones}
This zone displays the text of active languages and ongoing tasks for the key.
6.  **Select the Key in the Tree**
Locates and selects the key in the tree.

::: tip Note
Useful for editing metadata, only possible on the active key.
:::
7.  **Tasks**
A menu offers tasks applicable to this key, its relationships, and its child keys.
8.  **Protect**
Check this box to mark the text as final and protected, thus ignoring certain tasks and operations.
Disabling this option suggests disabling all validations of other languages linked to this key.
0.  **The Key**
Displays the full path of the key, **in LSDE format**

## Search/Replace {#search-replace}
8.  **Search/Replace**
[CTRL+F] opens the internal search tool.
It offers a Regex mode for complex cases.
A search can also be launched via the context menu.

## Performance {#performance}
By default, LSDE disables complex renderings (widgets) in inactive windows.
This ensures a good compromise between visual experience and low latency.
If performance is not an issue, disable this optimization in the global configurations.

::: tip Note
Can consume resources if multiple languages are displayed simultaneously, as the rendering system is segmented by key.
:::
