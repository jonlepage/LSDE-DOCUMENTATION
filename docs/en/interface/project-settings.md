---
title: "Project Settings"
description: "The Project Settings window in LSDE allows you to adjust parameters specific to the currently open project."
section: interface
outline: [2, 3]
---

# Project Settings

The Project Settings window in LSDE allows you to adjust parameters specific to the currently open project.
These settings are organized into several sections.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-prompt.webp" />

## LLM Directive {#llm-directive}
This section allows you to create custom tasks for LLMs, tailored to your project.
While LSDE offers default tasks, you can define your own to precisely meet your needs.
You will have access to the following fields:
1. **New Prompt**
Add new prompts to the project.
2. **Label and Descriptions** :
- Fill in the task's name (this label can influence the LLM).
- Add an explanatory note, visible only to you and not sent to the LLM.
3. **Prompt Content** :
Write here the directive that will be sent to the LLM to accomplish the task.
4. **Telemetry** :
Displays information on the word count and an estimated token cost of the prompt.
5. **Activation**
Activate or deactivate the task at any time without deleting it.

::: tip Note
Note that LLMs always receive task directives with predefined context and rules. Options for refining these elements are presented later.
:::

---

## Variables {#variables}
The variable manager is a powerful system designed to interact with LLMs, while optimizing your productivity and facilitating dialogue translation and writing.

### Why use them? {#why-use-variable}
- They are particularly well-suited for video game projects with complex narrative requirements, such as JRPGs.
- They can contain a wealth of information to display custom tooltips, highlight keywords, and much more.
- They form an essential basis for optimizing your workflow in LSDE.

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-variable.webp" />

To create a variable, start by selecting its category.

::: tip Note
If no category exists, you will first need to create one (e.g., Actors, Objects, HTML, etc.).
:::

Once created, the variable appears in a list as an expandable block. Expand it to access its full configuration interface.

### The Interface {#interface}
1. **Variable Group or Category**
Create and select a variable group.

::: tip Note
Right-clicking on a group allows you to delete it, as well as all variables it contains.
:::
2. **Create a Variable**
Once a group is selected, use this button to create a new variable within it.
3. **Edit a Variable**
Variables are displayed in containers, with quick actions in the header to:
- Activate/deactivate the variable.
- Reorder it by drag and drop.
- Give it a label (used in tooltips and options).
- Change its group.
- Delete it.
4. **Tags/Regular Expressions**
Enter the keywords (tags) or regular expression (regex) that will allow the system to identify this variable.

::: tip Note
For example, a text capture pattern will rely on these tags or this regex to find a match.
:::
5. **Switch to Regular Expression**
The default mode uses keywords (tags). Activate this mode to use a regular expression, offering more flexibility and dynamism.

::: tip Note
Example: `/actor\\d+/` avoids having to manually define tags like « actor1 », « actor2 », « actor11 », etc.
:::

### Descriptions {#descriptions}
6. **Note**
Write a note for the user, which will be displayed in tooltips but not sent to LLMs.

::: tip Note
Avoid describing sensitive content if you are versioning the project, as these notes are saved in `.lsde` files.
:::
7. **Descriptions**
This description provides directives to the LLM when the variable is included in the context of a query.

::: tip Note
It can describe a character's personality, world elements, or even formatting rules (Markdown, JSX, HTML...).
:::

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-variable-emoji.webp" />

### Appearance {#appearance}
This section allows you to associate visual elements with the variable, facilitating its recognition in the interface for artists, translators, and writers.
8. **Render Icon**
Associate an icon (image or emoji) that will represent the variable in editors and menus.
9. **Tooltip Image**
Add a larger image, displayed in tooltips to provide better visual context to the user.

::: tip Note
Images are automatically compressed and saved with the project to facilitate sharing.
:::
10. **Colorimetry**
Define a text and background color. These colors will take priority if the variable is associated with a pattern or another visual element.

### Additional Information {#additional-info}
This section gathers additional design options for tooltips, as well as coupling parameters with suggestion triggers.
11. **Decorations**
Add optional information that will be displayed in the decoration section of the tooltip.
12. **External Link**
Insert an external link in the tooltip, which will open in your default browser.
13. **Voice Label**
Redefine the variable's name when it is associated with a voice. By default, its label is used; otherwise, its UUID.
14. **Associate with Suggestions**
Allows the variable to be included in suggestion triggers during input.

::: tip Note
The variable's tags will be used as suggestions.
:::
15. **Telemetry**
Displays statistics on the variable's usage in the project.

---

## Patterns {#patterns}
<DocImage src="/doc/lsde/doc-lsde-ui-psetting-pattern.webp" />

Patterns allow LSDE to capture specific text portions in dialogues. By relying on regular expressions, this system offers great flexibility for formatting and processing your dialogues.
[Learn more about patterns and rendering here](/en/features/rendering)

### The Interface {#interface-2}
1. **Create a Pattern/Template**
Create a new pattern, either from a predefined template or from scratch.
2. **Internal Reference**
Define a pattern to reference other project keys (« nesting » mechanism), if your game engine or framework supports it.
For example, if you use [i18next's « nesting »](https://www.i18next.com/translation-function/nesting).
3. **Regular Expression**
Enter your regular expression. It is not necessary to escape curly braces `{}`.
4. **Add Decorators**
Add additional decorators in addition to the initial capture, then associate them with the capture groups of your regular expression.
5. **Initial Decorator**
The initial decorator defines the rendering of the text captured by the regular expression in the editor.

::: tip Note
Initial decorators must be of « inline » type and cannot be « widgets ».
:::
6. **Group and Type**
Assign the capture group and the desired rendering type for additional decorators.
[More details here](/en/features/rendering#what-is-decorator)

---

## Contexts {#contexts}
<DocImage src="/doc/lsde/doc-lsde-ui-psetting-context.webp" />

This section allows you to define rules for managing different contexts, such as plurals or genders.

A context is identified by a suffix added to the end of the key (e.g., `key_plural`). LSDE manages these variants so that you can gradually integrate them into your project, without having to modify existing source code.

This way, you can support contexts only when necessary, without altering your project.

### The Interface {#interface-3}
1. **Labeling**
Define the context's ID, label, and separator.
For example, to manage plurals with i18next:
`name_space.folder.key_context`
would become:
`game.common.welcome-to-my-shop_one`
`game.common.welcome-to-my-shop_many`
`game.common.welcome-to-my-shop_other`
More information on [i18n plurals with i18next](https://www.i18next.com/translation-function/plurals)
2. **Tags**
Define the suffixes (tags) that will be used to identify each context variant.
3. **Description (LLM)**
Write here the description that will be sent to the LLM when it processes a key using this context.
4. **Delimiter**
Choose the character used as the context delimiter.

::: tip Note
Periods are not allowed.
:::

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-codeview.webp" />

## Codeview {#codeview}
This section is used to configure the analysis module for your source code (codebase). This module scans your files to automatically extract translation keys, their contexts, and their default values.
To be valid, a regular expression must contain at least one capture group assigned to the key.
Consult the [advanced section here](/en/features/scanning).

### The Interface {#interface-4}
1. **Project Codebase Path**
Indicate the path to your project's root folder, containing the source files that use translation keys.
2. **Exclusions**
Specify folders and files to exclude from analysis to optimize performance.

::: tip Note
Separate entries with commas. Use full folder names or file names (with extension).
:::

### Pattern {#pattern}
Manage your list of capture patterns here, presented in expandable blocks.
3. **Note/Label**
A label or note to easily identify the pattern and its role.
4. **Regular Expression**
Insert or modify your regular expression. The number of detected capture groups is displayed below.
5. **Namespace**
Associate the capture group that corresponds to the namespace of your keys (optional).

::: tip Note
Automatically suggests the correct namespace when creating keys.
:::
6. **Key**
Associate the capture group that corresponds to the key itself (without the namespace).

::: tip Note
Keys should not contain a namespace; use the dedicated field for this purpose.
:::
7. **Default Text**
Associate the capture group that corresponds to the default text.

::: tip Note
In software projects, developers often insert default text for a quick UI/UX preview.
:::
8. **Context**
Associate the capture group that corresponds to the context (e.g., plural).

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-codeview-templates.webp" left />

### Templates {#templates}
When creating a pattern, you can choose from predefined templates.
They serve as a starting point to avoid writing a regular expression from scratch or to help you build one.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-generator.webp" />

## Generator {#generator}
This section allows you to configure the automatic generation of a file containing your keys, in a format adapted to your project.
This is useful, for example, for creating a TypeScript `enum` from your keys.

1. Name of the class that will export the keys.
2. Name of the generated file.
3. Destination folder for the exported file.
4. Language of the generated JSDOC comments.
5. Maximum length of JSDOC comments.
6. Replacement character for periods (`.`).

::: tip Note
In JS/TS, periods are not allowed in key names; the converter will automatically create string literals as keys.
:::
7. Include the namespace in the generated keys.
8. Include contextual keys (with suffixes).

::: tip Note
It is generally not necessary to include these keys, as their management is handled by your internationalization framework.
:::

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-voice.webp" />

## Voices {#voices}
The Voice section allows you to configure the voice generator for your dialogues.
Building on advancements in LLM and TTS (Text-to-Speech) technologies, this feature allows you to create synthetic voices by controlling tone, intonation, and emotion.
These voices can then be integrated into your game engine, offering immersive audio narration at a fraction of the cost of traditional studio recording.

::: tip Note
Although this technology is still evolving, it offers independent creators a tremendous opportunity to stand out and enhance the narrative immersion of their work.
:::

A [dedicated section on integrating voices into your project is available here](/en/features/voice).

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-suggestion.webp" />

## Suggestions {#suggestion}
This section allows you to configure the display of the suggestions menu.
When a key combination (a trigger) is entered in the editor, a contextual menu appears. It can suggest variables (based on their tags) or translation keys (if the trigger is associated with internal references).

1. **Key Suggestions**
Define the trigger to display all project keys.

::: tip Note
Useful for projects using internal dictionaries and cross-references.
:::
2. **Conditions**
Choose a modifier key (e.g., Ctrl, Alt) for the trigger (optional).
3. **Letter**
Specify the letter or symbol which, combined with the modifier key, will activate suggestions.
4. **Label**
A name to easily identify this trigger in the interface.
5. **Affixes**
- **Prefix** : Content to add before the user's selection.
- **Suffix** : Content to add after the user's selection.
