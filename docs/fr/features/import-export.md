---
title: "Import/Export"
description: "Si vous travaillez avec un moteur personnalisé autre que i18next, LSDE vous permet de configurer votre propre middleware."
section: features
outline: [2, 3]
---

# Import/Export

<DocImage src="/doc/lsde/doc-lsde-import-export-1.webp" />

## Import/Export personnalisé {#middleware}
Si vous travaillez avec un moteur personnalisé autre que i18next, LSDE vous permet de configurer votre propre middleware. Vous pourrez ainsi importer vos données vers le format LSDE et, inversement, exporter le format LSDE vers votre propre structure.

## Comment ça marche ? {#howiswork}
1. Activez le **mode avancé** pour afficher les paramètres personnalisables.
2. Définissez ici le filtre d'importation des fichiers :
- Spécifiez les extensions de fichiers que LSDE doit inclure dans sa recherche.
- Indiquez les noms ou mots-clés que les fichiers doivent contenir.

::: tip Note
Ces options supportent les expressions régulières (Regex). Par exemple : `/filename\d+/` récupérera tous les fichiers nommés « filename » suivis d'un nombre (ex: `filename004`).
:::

3. Vous pouvez sélectionner des parsers préconfigurés pour certains frameworks.
Ces middlewares peuvent être ajustés à tout moment selon vos besoins.
[Si vous devez écrire votre propre middleware, c'est ici](/fr/features/import-export#interface).

4. Ces options permettent de renforcer la sécurité et de définir le standard de structure de vos fichiers de localisation :
- **Monolithic** : signifie que toutes vos langues sont regroupées dans un seul et unique fichier.
- **Locale dans les dossiers parents** : indique que c'est le dossier parent qui définit la langue.
- **Locale dans le nom de fichier** : indique que la langue doit figurer dans le nom du fichier.

5. Lorsque vous choisissez un middleware, vous devez implémenter le code pour l'importation et l'exportation. Ces onglets permettent de basculer entre les deux interfaces.

## Interface des middlewares {#interface}
Pour l'importation, votre parser doit retourner l'interface suivante à LSDE :
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

Vous devez construire cet objet à partir des fichiers trouvés par LSDE et passés en paramètres. L'interface des fichiers reçus est la suivante :
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

Pour l'exportation, LSDE vous transmet l'interface suivante, vous permettant de reconstruire votre propre structure de données :
```ts
interface ILocalizationExportParams {
	files: ILocalizationImportParams['files']

	// ReadonlyMap<LSI18NKey, ReadonlyMap<language, text>>
	valuesEntriesMap: ReadonlyMap<string, ReadonlyMap<string, string>>;
	metasEntries: ILocalizationImportResult['metasEntries'];
	nameSpacePackage: ILocalizationImportResult['nameSpacePackage'];

}
```

Vous devez retourner cette structure :
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
L'objet `data` contiendra la structure que vous aurez construite pour votre moteur de jeu ou pour les besoins spécifiques de votre projet.
:::
