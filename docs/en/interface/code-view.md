---
title: "Code scanner"
description: "The code scanner module allows you to scan an external project linked to LSDE."
section: interface
outline: [2, 3]
---

# Code scanner

The **code scanner** module allows you to scan an external project linked to LSDE.
By attaching a project, you visualize all the keys (existing or potential) in your source code.
This facilitates their identification, creation, or addition to the key tree.
The module also displays all occurrences of keys already existing in your codebase.

## How it works {#how-it-works}
The scanner relies on the **Regex patterns** [configured in the settings](/en/interface/project-settings#codeview).
It identifies keys via capture groups and displays them as instances, classified by file, based on the keys found in your code.
To start the search in your codebase, select a key (folder or file); this selection acts as an initial filter.

For example, selecting the key `namespace.a.b.c` will only display matches with this prefix (e.g., `namespace.a.b.c.d.e`, but not `namespace.a.b.x.d.e`).
To view all project keys, deselect all active keys or, if the project has only one namespace, select the root namespace.

## Supported languages {#supported-languages}
There is no intrinsic limitation regarding supported programming languages.
Simply create the appropriate `Regex` to capture your keys, regardless of the language.
The [settings configuration](/en/interface/project-settings#codeview) allows you to define how LSDE will search for translation keys.
A [complete tutorial section](/en/features/scanning) will guide you through configuring your LSDE project, requiring a `Regex` with **at least 1 capture group** assigned to the 'key' interpolator.

## The interface {#interface}
Several tools and configurations are available to manipulate the scanner's results.

<DocImage src="/doc/lsde/doc-lsde-ui-codeview.webp" />

1. **Open/Close all files**:
Opens or closes all found reference sections.

::: tip Note
May harm performance if all instances are open in a very large project.
:::
2. **Copy to JSON format**:
Copies the results in JSON format to the clipboard, ideal for an external LLM (e.g., IDE) to create or verify keys.
**Example:**
```json
[
{
"file": "\\scr\\folder\\file1. tsx",
"lines": [
213
]
}
]
```

::: tip Note
Paste [CTRL]+[V] this result into a query to, for example, find other similar keys that LSDE could detect.
:::
3. **Code delimiter**:
Adjusts the amount of code displayed around the key for increased context, without opening the IDE.
4. **Theme**:
Allows you to choose a theme similar to your source code for better visual familiarity.
5. **RAW Mode**:
Activates Regex dedicated to searching for **RAW** code.
These capture raw text potentially to be converted or encapsulated within your key system.
Double-click on the results to access them and encapsulate these texts for translation, exposing them to the scanner in 'Missing Key' mode.
6. **Missing Key Mode**:
Displays only missing keys.
Allows them to be created in bulk (by checking them) or individually (right-click).
7. **Filter keys with context**:
Allows you to filter contextual keys, often requiring special attention or further processing.

::: tip Note
Functional if the \context\ field is filled in your [Regex configuration](/en/interface/project-settings#codeview).
:::
8. **Filter dynamic keys**:
Excludes dynamic keys, which are often complex and sometimes unavoidable, for separate processing. LSDE manages their creation via a specific dialog box.

::: tip Note
Functional if the \dynamic key\ Regex is filled in the [scanner configuration](/en/interface/project-settings#codeview).
:::
9. **Show ignored**:
Displays ignored keys in creation mode (e.g., false positives difficult to exclude with your Regex) if necessary.

## Integration with your IDE {#coupling-to-your-ide}
Once configured, a double-click on a key in the code section opens your IDE directly at the corresponding location.
This allows you to further examine the context or make modifications in your codebase as needed.
