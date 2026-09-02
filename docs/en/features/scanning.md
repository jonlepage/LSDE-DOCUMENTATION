---
title: "Scanning"
description: "In your 'LSDE' project, codebase scanner configuration is done via the Patterns section."
section: features
outline: [2, 3]
---

# Scanning

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-1.webp" left />

In your 'LSDE' project, codebase scanner configuration is done via [the Patterns section](/en/interface/project-settings#patterns).

## Create a pattern {#create-pattern}
After creating a new (initially empty, for example) pattern instance:
1. Fill in the regular expression ('Regex') that will be used to capture groups in your codebase.
2. You must specify the group that captures your 'i18n' key in this section.

::: tip Note
You must have at least 1 capturing group. [Learn more about regex groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-2.webp" />

### Display i18n keys {#see-i18n-keys}
Once the 'Regex' is created, the synchronization of results is real-time.
1. Open the code scanner window to observe its results in real time.

If no key is selected in the tree view, no filter will be applied, and the scanner will display all results.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-3.webp" />

However, if you select a key:
The system will filter out unrelated parent and sibling keys.
Thanks to hierarchical propagation, selecting a folder will display all its child keys.
Example:
Folder selection:
`A.B.C`
All keys containing at least this group will also be displayed:
`A.B.C.d`
`A.B.C.d.e.f`

1. To display captured keys that 'LSDE' cannot associate (missing keys), check this option. It also allows filtering existing keys.

::: tip Note
If this option is disabled, 'LSDE' displays missing keys found in your source code, mixed with existing keys.
:::

---

## Test your pattern {#test-pattern}
<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-5.webp" />

To verify that your pattern behaves as expected, open the 'Test' tab. Paste source code from your project into it to observe the captures made.

### Understand your Regex {#understand-regex}
To understand your 'Regex' and its groups, use a tool like [regexr](https://regexr.com).
1. Copy and paste your 'Regex' into the dedicated space.
```text
[^\\\\\\\\w_\\\\\\\\-\\\\\\\\$]t\\\\\\\\(\\\\\\\\s*(?:['\\\\\\\])?(?:([^\\\\\\\\s:'\\\\\\\)]+):)?([^\\\\\\\\s'\\\\\\\),]+)(?:['\\\\\\\])?\\\\\\\\s*(?:,\\\\\\\\s*(\\\\\\\\{[\\\\\\\\s\\\\\\\\S]*?(?:defaultValue\\\\\\\\s*:\\\\\\\\s*(['\\\\\\\`])((?:\\\\\\\\\\\\\\\\.|(?!\\\\\\\\4)[\\\\\\\\s\\\\\\\\S])*?)\\\\\\\\4)[\\\\\\\\s\\\\\\\\S]*?\\\\\\\\}|\\\\\\\\{[\\\\\\\\s\\\\\\\\S]*?\\\\\\\\})\\\\\\\\s*)?\\\\\\\\)
```
2. Paste source code from your project containing the keys to be captured (from your framework or text engine).
3. Click on a capture to activate it.
4. Then select 'Detail'.
5. Identify the index of the group where your 'Regex' places the desired capture.

With this 'Regex', you will find that it captures your key in group 2. You will then need to inform 'LSDE' that the key is located in this group, as illustrated in the previous image.
The system can then execute this 'Regex' and use this capture for various telemetry services.
