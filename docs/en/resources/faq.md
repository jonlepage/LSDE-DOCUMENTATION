---
title: "FAQ"
description: "A: Go to the key tree, click the \"Create a file or folder\" button, or use the context menu (right-click). Enter the full path of the key and confirm."
section: resources
outline: [2, 3]
---

# FAQ

### Q: How to create a new translation key? {#create-new-key}
A: Go to the key tree, click the "Create a file or folder" button, or use the context menu (right-click). Enter the full path of the key and confirm. The key will be created in the selected namespace.

### Q: What is the difference between a folder and a file in the tree? {#difference-folder-file}
A: Folders are logical containers for organizing your keys. Files are individual keys containing the text to be translated. Folders can contain other folders or keys.

### Q: How to delete an unused key? {#delete-unused-key}
A: Enable the "Show/Hide orphan keys" option in the tree header to identify keys present in LSDE but missing from your source code. You can then delete them via the context menu.

### Q: Which LLMs are available in LSDE? {#available-llms}
A: LSDE supports 7 main providers: Anthropic, OpenAI, Mistral, Gemini, Deepseek, ElevenLabs, and a free service via temporary emails. You can configure your API keys in the global settings, [Authentication section](/en/interface/global-settings#authentication).

### Q: How to use LLMs for free? {#use-llms-free}
A: LSDE offers a free method for OpenAI via account creation with temporary emails (temp-mail or 10minmail). You will have about 70 tasks per hour with a limited quota.
You can also use Google services with Gemini, which offers free API keys.

### Q: Are LLM translations reliable? {#llm-reliability}
A: The results are relevant and satisfactory, but it remains essential to call upon a language professional for final verification. LLMs excel in translation when provided with the appropriate context.

### Q: How to improve LLM translation quality? {#improve-llm-quality}
A: Fill in your keys' metadata with descriptions, variables, and contextual notes. This information is integrated into LLM requests to ensure more relevant results.

### Q: What is the purpose of metadata? {#metadata-purpose}
A: Metadata provides additional context to translators, writers, and LLMs. It includes descriptions, allowed variables, user notes, and images to visually contextualize the content.

### Q: How to add images to keys? {#add-images-to-keys}
A: Open the metadata window for the selected key and use the "Images" section. Images are compressed and integrated into the .lsde file for easy sharing.

### Q: Do LLMs have access to user notes? {#llm-user-notes-access}
A: No, user notes are intended only for composers and translators. They are not transmitted to LLMs.

### Q: How to configure the code scanner? {#configure-code-scanner}
A: Go to the Patterns section (project settings). Create a pattern with a regular expression (Regex) containing at least 1 capture group to identify your i18n keys in your codebase.

### Q: Which programming languages are supported? {#supported-languages}
A: There are no intrinsic limitations. You simply need to create the appropriate Regex to capture your keys, regardless of the language. Use a tool like regexr.com to test your patterns.

### Q: How to identify missing keys in my code? {#identify-missing-keys}
A: Enable the "Missing Key" mode in the code scanner. LSDE will only display keys present in your source code but absent from the LSDE tree. You can create them in bulk.

### Q: What is post-processing text rendering? {#post-processing-rendering}
A: It is a system for customizing text display in real-time. You can configure Regex patterns to capture text groups and assign them decorators (colors, icons, widgets) to improve readability.

### Q: How to add "widgets" to text? {#add-widgets-to-text}
A: Create a pattern with a Regex in the project settings. Assign a capture group to a "Widget" type decorator. The widget will only be displayed in active windows to optimize performance.

### Q: How to link variables to rendering? {#link-variables-to-rendering}
A: In the project settings, Variables section, create a category and variables with "tags". Configure your Regex patterns to capture these tags, and LSDE will automatically associate the decorators with the found instances.

### Q: How to generate voices for my dialogs? {#generate-voices}
A: You must first obtain an ElevenLabs API key (free plan available). Configure your voice profiles in the project settings, then use the voice manager to generate narrations.

### Q: What is the difference between SAD and MAD? {#sad-vs-mad}
A: *SAD* (Single Actor Dialog) = one speaker per key. *MAD* (Multi Actor Dialog) = multiple speakers within the same key, identified by Regex tags. MAD significantly reduces the number of keys to manage.

### Q: How to handle multiple characters in a dialog? {#handle-multiple-characters}
A: In MAD mode, use tags like `{character} text` in your key. Configure a Regex to capture the character ID and their text, then associate voice profiles with each character in the variables.

### Q: What if I modified the text after voice generation? {#voice-modification-after-gen}
A: LSDE detects modifications and offers to revalidate the voices. In MAD mode, you can reassign existing voice instances via drag-and-drop if you have moved or added characters.

### Q: How to change the font or text size in the editor? {#change-font-size}
A: Go to Global Settings > User Interface > Typography. You can adjust size, spacing, font, and line height.

### Q: How to change the LSDE interface language? {#change-interface-language}
A: Go to Global Settings > Accessibility > Language Selection. You can configure 2 interface languages and switch between them with [F1].

### Q: How to import an existing project? {#import-existing-project}
A: Go to the Localization Manager and use the "Smart Import" option. Structure your folders following the format `../folder/lang/namespace.json` and LSDE will import them automatically.

### Q: How to protect my keys from modifications? {#protect-keys}
A: In the main editor, check the "Protect" box to mark a text as final. LLM tasks will automatically ignore it.

### Q: How to share my LSDE project with a team? {#share-project-team}
A: The `.lsde` file contains the entire project. Share it via Git, email, or a cloud service. LSDE will automatically synchronize modifications upon opening.

### Q: How to track a collaborator's ongoing tasks? {#track-collaborator-tasks}
A: Enable the "Show/Hide keys with ongoing tasks" option in the tree. You will quickly see keys assigned to active tasks or awaiting validation.

### Q: Why does the editor slow down with multiple languages displayed? {#performance-multiple-languages}
A: By default, LSDE disables complex renderings (widgets) in inactive windows to optimize performance. If this is not an issue, you can disable this optimization in the global configurations.

### Q: How to improve the code scanner speed? {#improve-scanner-speed}
A: Select a specific key in the tree rather than displaying all results. This filters the results and speeds up the scanner. Also, avoid overly complex Regex with conditionals.

### Q: What is a .lsde file? {#what-is-lsde-file}
R: It is the central file of your project. Based on the JSON format, it centralizes all of your keys, translations, metadata, and audio voices.

You can even integrate it directly into your codebase to extract entries and map them according to your needs:
```ts
type MetasEntries = [key: StructureKeyWithNamespace, value: IStructureMetaData][];
type ValuesEntries = [StructureKeyWithNamespace, [Locales, string][]][];
type VoicesEntriesMap = [StructureKeyWithNamespace, [Locales, ISpeakerVoiceConfig[]][]][];
```
It is recommended to save it at the root of your project to take advantage of versioning with Git. Since it contains no sensitive data, it can be easily shared with a translator or an editor.

Its presence at the root also facilitates searching for full key paths, such as: `game:.scenes.the-ice-land.events.the-lost-house.1`. Your IDE will recognize it as a standard JSON file, allowing you to easily read the notes and metadata provided.

Finally, `.lsde` files are backward compatible: your old projects will open without any issues in newer versions of the software.

### Q: Is LSDE free? {#lsde-is-free}
Access is free during the beta phase, but will become paid upon public release. A trial version will be available to evaluate all features according to your needs.

LSDE will then offer 4 plans tailored to your budget:
- **Essential**: for basic writing and composition needs (lifetime license).
- **Professional**: for advanced developer needs (lifetime license).
- **Enterprise**: for studio needs with multiple workstations (annual license).
- **Educational**: for language or video game schools (annual license).

### Q: Why do I need LSDE? {#why-i-need-lsde}
LSDE drastically reduces the complexity of your projects by offering an intuitive and organized interface. It allows you to compose and translate comfortably, without the constraints related to your IDE or the rendering of your programming language.

It supports different design paradigms, making it compatible with the majority of "in-house" game engines wishing to optimize their workflow.

### Q: How to install LSDE? {#how-install-lsde}
LSDE is not available for direct download. You must use the `LS-Installer` installation program, which will handle downloading and configuring the software for you.

### Q: How to activate LSDE? {#how-activate-lsde}
Your license will be sent to you automatically by email after payment. You simply need to enter the email address used and the key received into the software to activate it. 
Note that one activation corresponds to one user per machine.
