---
title: "Unity"
description: "LSDE integrates with Unity to manage, translate, and synchronize your dialogues directly within your Unity projects."
section: engines
outline: [2, 3]
---

# Unity

LSDE integrates with **Unity** to manage, translate, and synchronize your dialogues directly within your Unity projects.

<YouTube id="NNlNnLo18Mo" />

## LSDE Bridge Plugin {#lsde-bridge}
LSDE provides a free Unity plugin: **LSDE Bridge — Unity Localization Sync**.
This package eliminates the need to manually import/export each String Table Collection one by one.

**Key Features:**
- **Batch Import/Export** — Synchronize all your localization tables in a single operation.
- **Supported Formats** — XLIFF 2.0 and CSV, compatible with the Unity Localization package.
- **Automatic Renaming** — Detects keys with the same ID but a different name and renames them in Unity.
- **Orphan Cleanup** — Deletes keys present in Unity but absent from the imported files.
- **Dry Run** — Preview changes before applying them.
- **Developer Report** — Generates a Markdown report with actions performed and grep commands to find obsolete references in your C# scripts.

**Prerequisites:**
- Unity **2021.3 LTS** or newer
- [Unity Localization](https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/index.html) package **1.4.2+**

**Installation:**
Open **Window > Package Manager**, click **+** > **Add package from git URL** and enter the repository URL.
The link will be available soon.

## CSV Workflow {#workflow-csv}
The CSV workflow is the simplest to get started:
- **Export** — In LSDE Bridge, click "Export All" to export all your tables as CSV files.
- **Edit** — Import these CSVs into LSDE, edit and translate your texts.
- **Import** — LSDE exports the modified CSVs, then in LSDE Bridge click "Import All CSV" to synchronize Unity.

## XLIFF Workflow {#workflow-xliff}
For projects requiring finer control:
- **Export** — Use Unity's built-in XLIFF export to generate the .xlf files.
- **Edit** — Import into LSDE, edit with LLM assistance and metadata.
- **Import** — LSDE exports the .xlf files, then LSDE Bridge performs the import with XML parsing and direct StringTables update.

## Accessing the Plugin {#access}
Open the plugin in Unity via **Window > Asset Management > LSDE Bridge**.
Configure the format (XLIFF or CSV), the import/export folders, and synchronization options.

## Tips {#tips}
- Place the `.lsde` file at the root of your Unity project to benefit from Git versioning.
- Systematically use the **Dry Run** before an import to verify changes.
- Activate the **Developer report** to identify renamed or deleted keys and update your C# references.
