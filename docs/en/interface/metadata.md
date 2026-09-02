---
title: "Metadata"
description: "The Metadata window allows adding additional information to a key, distributable to this key and its children."
section: interface
outline: [2, 3]
---

# Metadata

The Metadata window allows adding additional information to a key, distributable to this key and its children.

## Why use metadata? {#why-use-metas}
When executing tasks, this information is integrated into LLM requests.
The entered information can also be viewed at any time in the metadata viewer.
The view is recursive, from top to bottom, from the active key up to the project's namespace root.

::: tip Note
Your source project should not depend on metadata. These are purely for informational purposes and should only influence writing and thought.
:::

**This information can offer several advantages:**
- Help translators/editors understand the context.
- Visualize information recursively, from the key's parentage.
- Add relevant information to LLMs for processing the key or neighboring keys.

::: tip Note
For a key in the same folder, LLMs also read neighboring keys to understand the narrative flow.
:::
- Customize icon and color in the key tree for better identification.
- Add images to visually contextualize the dialogue.
- Enable/disable variables usable by LLMs.

---

## The Metadata Interface {#metas-interface}
<DocImage src="/doc/lsde/doc-lsde-ui-metadata.webp" />

0. **Recursions**
Limits the range of information retrieved, from the active key to its hierarchical parents.
1. **Descriptions (LLM)**
Information taken into account when the key is sent to the LLM. It contextualizes the key's belonging, its surroundings, and the role of its children.
2. **Allowed Variables**
Allows adding variables to be processed by LLMs to optimize their tasks. For example, authorize character variables and ask the LLM that only these appear in the quest folder. Additional characters can be reassigned/deleted by the LLM or used to compose additional interactions.
3. **Voice Variables**
Assign interlocutors here if the voice variable group is configured.

::: tip Note
LLMs can also prioritize using them to verify dialogues.
:::
4. **User Notes**
Write memos and reminders here for composers, translators, or yourself.

::: tip Note
LLMs do not have access to them. Since notes are integrated into the .lsde file, avoid sensitive information there if shared or versioned via Git.
:::
5. **Images**
Display images to contextualize folders or keys. Very useful for a translator without access to the source code or preview.

::: tip Note
Images are compressed and degraded in the .lsde file to facilitate sharing.
:::
6. **Parentage**
These sections recursively display parent information, from top to bottom.
7. **Edit**
This button activates metadata editing mode.

::: tip Note
By default, metadata is read-only.
:::
8. **Editing Actions**
In editing mode, cancel or apply changes. Any key change in editing mode automatically saves the previous key.
9. **Variable Filter**
This box filters the variable groups to activate, highlighting the importance of **good initial variable organization**.

---
