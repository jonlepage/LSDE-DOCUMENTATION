---
title: "Импорт/экспорт"
description: "Если вы работаете с кастомным движком, отличным от i18next, LSDE позволяет настроить ваш собственный middleware."
section: features
outline: [2, 3]
---

# Импорт/экспорт

<DocImage src="/doc/lsde/doc-lsde-import-export-1.webp" />

## Пользовательский Импорт/Экспорт {#middleware}
Если вы работаете с кастомным движком, отличным от i18next, LSDE позволяет настроить ваш собственный middleware. Таким образом, вы сможете импортировать ваши данные в формат LSDE и, наоборот, экспортировать формат LSDE в вашу собственную структуру.

## Как это работает? {#howiswork}
1. Включите **расширенный режим**, чтобы отобразить настраиваемые параметры.
2. Определите здесь фильтр импорта файлов:
- Укажите расширения файлов, которые LSDE должен включить в поиск.
- Укажите имена или ключевые слова, которые должны содержаться в названиях файлов.

::: tip Примечание
Эти опции поддерживают регулярные выражения (Regex). Например: `/filename\\d+/` найдет все файлы с именем «filename», за которым следует число (например: `filename004`).
:::

3. Вы можете выбрать предварительно настроенные парсеры для определенных фреймворков.
Эти middleware могут быть отредактированы в любой момент в соответствии с вашими потребностями.
[Если вам нужно написать собственный middleware, это делается здесь](/ru/features/import-export#interface).

4. Эти опции позволяют усилить безопасность и определить стандарт структуры ваших файлов локализации:
- **Monolithic**: означает, что все ваши языки сгруппированы в одном единственном файле.
- **Locale dans les dossiers parents** (Локаль в родительских папках): указывает на то, что язык определяется родительской папкой.
- **Locale dans le nom de fichier** (Локаль в имени файла): указывает на то, что язык должен присутствовать в названии файла.

5. При выборе middleware вам необходимо реализовать код для импорта и экспорта. Эти вкладки позволяют переключаться между двумя интерфейсами.

## Интерфейс middleware {#interface}
Для импорта ваш парсер должен возвращать LSDE следующий интерфейс:
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

Вы должны собрать этот объект на основе файлов, найденных LSDE и переданных в параметрах. Интерфейс полученных файлов следующий:
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

Для экспорта LSDE передает вам следующий интерфейс, позволяющий воссоздать вашу собственную структуру данных:
```ts
interface ILocalizationExportParams {
	files: ILocalizationImportParams['files']

	// ReadonlyMap<LSI18NKey, ReadonlyMap<language, text>>
	valuesEntriesMap: ReadonlyMap<string, ReadonlyMap<string, string>>;
	metasEntries: ILocalizationImportResult['metasEntries'];
	nameSpacePackage: ILocalizationImportResult['nameSpacePackage'];

}
```

Вы должны вернуть следующую структуру:
```ts
interface ILocalizationExportResult {
	i18nFiles: {
		locale: Locales;
		src: string,
		data: unknown;
	}[];
}
```

::: tip Примечание
Объект `data` будет содержать структуру, которую вы создали для вашего игрового движка или для специфических нужд вашего проекта.
:::
