---
title: "Import/Export"
description: "If you are working with a custom engine other than i18next, LSDE allows you to configure your own middleware."
section: features
outline: [2, 3]
---

# Import/Export

<DocImage src="/doc/lsde/doc-lsde-import-export-1.webp" />

## Custom Import/Export {#middleware}
If you are working with a custom engine other than i18next, LSDE allows you to configure your own middleware. This way, you can import your data into the LSDE format and, conversely, export the LSDE format to your own structure.

## How it works? {#howiswork}
1. Enable **advanced mode** to display customizable settings.
2. Define the file import filter here:
- Specify the file extensions that LSDE should include in its search.
- Indicate the names or keywords that the files must contain.

::: tip Note
These options support regular expressions (Regex). For example: `/filename\\d+/` will retrieve all files named "filename" followed by a number (e.g., `filename004`).
:::

3. You can select preconfigured parsers for certain frameworks.
These middlewares can be adjusted at any time according to your needs.
[If you need to write your own middleware, click here](/en/features/import-export#interface).

4. These options allow you to enhance security and define the structure standard for your localization files:
- **Monolithic**: means that all your languages are grouped into a single file.
- **Locale in parent folders**: indicates that the parent folder defines the language.
- **Locale in filename**: indicates that the language must appear in the file name.

5. When you choose a middleware, you must implement the code for importing and exporting. These tabs allow you to switch between the two interfaces.

## Middleware Interface {#interface}
For importing, your parser must return the following interface to LSDE:
`return { valuesEntries, metasEntries, nameSpacePackage }`
```ts
interface ILocalizationImportResult {
	metasEntries: [
		i18nKey:string,
		value: IStructureMetaData
	][];
	valuesEntries: [
		i18nKey:string,
		[language:string, text:string][]
	][];
	nameSpacePackage: [
		ns:string,
		[language:string, filePath:string][]
	][];
}
```

You must build this object from the files found by LSDE and passed as parameters. The interface of the received files is as follows:
```ts
interface ILocalizationImportParams {
	files: {

		/** filename without extension */
		filename: string;

		/** full path of the file */
		path: string;

		/** file content */
		datafile: string;

		/** parent folder of the file */
		parentFolder: string;

		/** directory of the file */
		pathWithoutFilename: string;

		/** ext with dot ex: '.json' */
		type: string;
		metadata: {
			modifiedTime: Date;
			accessedTime: Date;
			createdTime: Date;
			fileSize: number;
			inode: number;
		}
	}[]
}
```

For exporting, LSDE passes the following interface to you, allowing you to rebuild your own data structure:
```ts
interface ILocalizationExportParams {
	files: ILocalizationImportParams['files']

	// ReadonlyMap<LSI18NKey, ReadonlyMap<language, text>>
	valuesEntriesMap: ReadonlyMap<string, ReadonlyMap<string, string>>;
	metasEntries: ILocalizationImportResult['metasEntries'];
	nameSpacePackage: ILocalizationImportResult['nameSpacePackage'];

}
```

You must return this structure:
```ts
interface ILocalizationExportResult {
	i18nFiles: {
		locale: Locales;
		src: string,
		data: unknown;
	}[];
}
```

::: tip Note
The `data` object will contain the structure you have built for your game engine or for the specific needs of your project.
:::
