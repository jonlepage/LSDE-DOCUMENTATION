---
title: "Localization"
description: "This mandatory module allows you to configure your project's languages and namespaces."
section: interface
outline: [2, 3]
---

# Localization

This mandatory module allows you to configure your project's languages and namespaces.
You have the option to use smart import or manually configure the language service.

::: tip Note
LSDE supports ISO 639-1 codes or ISO 639-1 - ISO 3166-1 combinations. [For more details on specifications, click here](/en/getting-started/introduction#i18n-key-convention)
:::

## Interface {#interface}
<DocImage src="/doc/lsde/doc-lsde-ui-localisations.webp" />

The interface offers the following sections:
0. **Smart Import** (optional)
Import an existing folder structure, organized as follows:
`../folder/lang/namespace.json` => `../locales/en/main.json`

### Language Configuration {#setup-languages}
- **Configuration of `ISO 639-1` and `ISO 3166-1` codes**
Language codes can be concatenated according to two specifications, for example: `en` or `en-US`, `en-GB`.
These `ISO 639-1 - ISO 3166-1` codes correspond to the language followed by its localization.

**This section allows you to:**
1. Add/Delete languages
Opens a new dialog box where you can use a manager to find and/or delete project languages.
2. Set the primary language
This language is used as a source in certain tasks and is mandatory for working with the software.
4. View, delete, or reorder languages in the desired order.

::: tip Note
(This is the rendering order in the editor.) This is the project's primary language.
:::

### Namespaces {#namespace}
3. This is where you create namespaces.
A namespace simply represents **the name of a file containing keys**. It's as simple as that.
Example: `locales/en-GB/main.json`. Here, the namespace will be `main`, and the file's keys will have relative paths.

::: tip Note
You can redefine namespace folders or delete them.
:::
