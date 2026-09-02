---
title: "Translation"
description: "LSDE offers powerful tools to allow us to translate into every language in the world."
section: features
outline: [2, 3]
---

# Translation

## How to translate {#how-to-translate}
::: tip Note
LSDE offers powerful tools to allow us to translate into every language in the world.
:::
LLMs ("Large Language Models") are human-designed mathematical architectures that excel at translation, provided they are given the appropriate context.
LS Dialog Editor provides a default context for every request addressed to an LLM, which ensures more relevant results.

::: warning Warning
Although the results are satisfactory and can considerably reduce production costs, it remains essential to use a professional studio for final verification.
:::

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-1.webp" />

To translate a dialogue with LSDE, let's start by adding the supported languages to our project via the language manager.

1. Open the [i18n localization configuration](/en/interface/localization-manager#patterns) window.
2. Add languages to your project via the indicated button.
3. Select the desired languages as well as the main project language.
The choices offered are in `ISO 639-1` and `ISO 3166-1` format.

Once the languages are added, make sure to correctly define the main project language. This step is essential to unlock most of the software's actions.

::: tip Note
While the main language should ideally be final, it can be modified at any time.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-2.webp" left />

1. Next, select a key in the tree structure. This selection will display all associated dialogues in the main editor window.
2. You can then filter the languages you wish to work on.

::: tip Note
A right-click allows you to quickly toggle between displaying all languages or only the main language.
:::

---

## Translate with LLMs {#translate-with-llm}
<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-3.webp" />

1. First, click on a dialogue in the editor to activate its editing.
An icon will appear, allowing you to manage the desired task via a menu.

By default, LS Dialog Editor offers pre-configured tasks.
In this specific case, we will use the "Translate" task.

::: tip Note
Available tasks can be reconfigured in the global settings if necessary.
:::
2. Let's select the translation task.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-4.webp" />

A configuration window opens to adjust the task details:
1. Ability to enable or disable certain filters before launching.
2. Adjustment of iteration depth (if the processing concerns a folder).
3. Showing/hiding ignored keys according to current settings.
4. Manual activation/deactivation of instances to include if automatic settings are not sufficient.
5. Adding additional directives to guide the LLM.

::: tip Note
Use the up/down arrows on the keyboard to navigate your global history.
:::

Once the settings are adjusted, click "Confirm" (bottom right).

::: tip Note
As soon as a task is created, it is transmitted to the automatic processing system. The latter activates as soon as a project is opened to resume ongoing tasks.
:::

---

All instances assigned to the task switch to comparison mode, allowing you to visualize the original text on the left and the response on the right.

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-5.webp" left />

1. This button displays the number of letters added compared to the original text.

::: tip Note
It also allows you to show or hide added tokens.
:::
2. This button displays the number of letters removed.

::: tip Note
It also allows you to show or hide deleted tokens.
:::
3. This button displays the final global state (positive or negative character balance).

::: tip Note
It also allows you to switch to the final rendering if you cancel changes by clicking on the relevant text portions.
:::
4. Modification rendering: you can click on each tag to cancel an unwanted change.
5. You can iterate as many times as necessary by sending additional directives to the LLM.

::: warning Warning
depending on the model used, caching is not systematic, which can increase costs exponentially because the entire history is sent back with each iteration.
:::
6. Telemetry: displays the token costs returned by the LLM provider.
7. Buttons to accept or refuse changes once refinement is complete.
8. "Experimental": allows adding automatic corrections according to certain scenarios (e.g., if the LLM does not return the original text during a discussion sequence).
9. Navigation in the change history to return to a previous version.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-6.webp" />

Once the result is satisfactory, validate it and manually adjust the final details if necessary.

---
