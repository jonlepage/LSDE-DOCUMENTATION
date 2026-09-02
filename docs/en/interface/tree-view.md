---
title: "The Key Tree"
description: "The LSDE interface provides a clear and structured overview of all your project's translation keys."
section: interface
outline: [2, 3]
---

# The Key Tree

The LSDE interface provides a clear and structured overview of all your project's translation keys. Designed to simplify their management, it automatically adapts keys – whether imported or newly created – to its optimized internal format, then renders them in your project's specific format, thus ensuring perfect compatibility and integration.

::: tip Note
Thus, a `.lsde` project file can be shared and retrieved in its entirety.
:::

Let's take the example of `name_space.folderA.folderB.folderC.fileABC`:
- Key paths are structured hierarchically, using dots as separators. This convention, similar to i18next, facilitates navigation and identification of each key's location and folder. It should be noted that i18next uses `name_space:folderA.folderB.folderC.fileABC` by default.
- The first segment of each path (before the first dot) defines the namespace. It is crucial to emphasize that this namespace is **immutable** within the tree.

::: tip Note
For any modification of the namespace, you will need to use the dedicated language management interface. This centralized approach ensures the integrity of your translations.
:::

Let's now explore in detail the different sections and functionalities of the key tree interface.

<DocImage src="/doc/lsde/doc-lsde-ui-tree.webp" />

## Header Actions {#header-actions}
1. **Show/Hide Orphan Keys.**
This option is essential for maintaining the cleanliness and relevance of your translations. It allows you to quickly identify keys present in the tree but absent from your external project's source code, thus facilitating the detection of obsolete or unused keys for potential cleanup or relocation.
2. **Show/Hide Incomplete Keys.**
This function highlights all keys for which translations are missing in one or more languages.

::: warning Warning
**Important Note:** The LSDE key scanner only analyzes languages activated in the editor window. Disabled languages are excluded from the analysis process, allowing verification to focus on active languages.
:::

3. **Create File or Folder.**
Beyond the contextual menu (right-click), this function allows you to manually create new keys or proactively organize your tree. LSDE supports the creation of "internal" folders, offering you the possibility to logically structure your keys, including by creating empty folders for future translations. These operations are performed via an intuitive interactive window that guides you step by step.

<DocImage src="/doc/lsde/doc-lsde-ui-createfolder.webp" left />

4. **Namespace Field.**
This field displays the namespace where the new key or folder will be created, ensuring its correct insertion into the existing hierarchy.
5. **Key Path.**
This location is reserved for entering the full key path. The system offers live assistance and instantly alerts if the path does not comply with formatting or uniqueness rules, thus helping you avoid errors.
6. **Move Selections.**
Particularly useful when creating a new folder, this option allows you to simultaneously transfer selected items from the tree to this new directory. It thus optimizes your workflow and facilitates key reorganization.
7. **Show/Hide Keys with Ongoing Tasks.**
Activate this feature to quickly view keys associated with active tasks or awaiting validation by a team member. It is a valuable asset for tracking translation progress and collaborative project management.
8. **Expand/Collapse Folders.**
This button offers two convenient navigation modes in the tree:
- expand all folders for an exhaustive overview
- or collapse them "to the active selection" to focus on a specific section without distraction.
