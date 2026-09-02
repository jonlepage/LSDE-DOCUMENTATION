---
title: "Import/Eksport"
description: "Jeśli pracujesz z własnym silnikiem innym niż i18next, LSDE pozwala na skonfigurowanie własnego middleware."
section: features
outline: [2, 3]
---

# Import/Eksport

<DocImage src="/doc/lsde/doc-lsde-import-export-1.webp" />

## Własny Import/Eksport {#middleware}
Jeśli pracujesz z własnym silnikiem innym niż i18next, LSDE pozwala na skonfigurowanie własnego middleware. Dzięki temu będziesz mógł importować swoje dane do formatu LSDE i, odwrotnie, eksportować format LSDE do własnej struktury.

## Jak to działa? {#howiswork}
1. Aktywuj **tryb zaawansowany**, aby wyświetlić konfigurowalne parametry.
2. Zdefiniuj tutaj filtr importu plików:
- Określ rozszerzenia plików, które LSDE powinien uwzględnić w wyszukiwaniu.
- Wskaż nazwy lub słowa kluczowe, które pliki muszą zawierać.

::: tip Uwaga
Opcje te obsługują wyrażenia regularne (Regex). Na przykład: `/filename\\d+/` pobierze wszystkie pliki o nazwie „filename” z następującym po niej numerem (np. `filename004`).
:::

3. Możesz wybrać prekonfigurowane parsery dla określonych frameworków.
Te middleware mogą być dostosowane w dowolnym momencie zgodnie z Twoimi potrzebami.
[Jeśli musisz napisać własny middleware, zrób to tutaj](/pl/features/import-export#interface).

4. Opcje te pozwalają zwiększyć bezpieczeństwo i zdefiniować standard struktury Twoich plików lokalizacyjnych:
- **Monolithic**: oznacza, że wszystkie Twoje języki są zgrupowane w jednym, pojedynczym pliku.
- **Locale w folderach nadrzędnych**: wskazuje, że to folder nadrzędny definiuje język.
- **Locale w nazwie pliku**: wskazuje, że język musi znajdować się w nazwie pliku.

5. Wybierając middleware, musisz zaimplementować kod do importu i eksportu. Te karty pozwalają przełączać się między oboma interfejsami.

## Interfejs middleware {#interface}
W przypadku importu Twój parser musi zwrócić do LSDE następujący interfejs:
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

Musisz zbudować ten obiekt na podstawie plików znalezionych przez LSDE i przekazanych w parametrach. Interfejs otrzymanych plików jest następujący:
```ts
interface ILocalizationImportParams {
	files: {

		/** nazwa pliku bez rozszerzenia */
		filename: string;

		/** pełna ścieżka do pliku */
		path: string;

		/** zawartość pliku */
		datafile: string;

		/** folder nadrzędny pliku */
		parentFolder: string;

		/** katalog pliku */
		pathWithoutFilename: string;

		/** rozszerzenie z kropką, np.: '.json' */
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

W przypadku eksportu LSDE przekazuje następujący interfejs, umożliwiając Ci przebudowanie własnej struktury danych:
```ts
interface ILocalizationExportParams {
	files: ILocalizationImportParams['files']

	// ReadonlyMap<LSI18NKey, ReadonlyMap<language, text>>
	valuesEntriesMap: ReadonlyMap<string, ReadonlyMap<string, string>>;
	metasEntries: ILocalizationImportResult['metasEntries'];
	nameSpacePackage: ILocalizationImportResult['nameSpacePackage'];

}
```

Musisz zwrócić tę strukturę:
```ts
interface ILocalizationExportResult {
	i18nFiles: {
		locale: Locales;
		src: string,
		data: unknown;
	}[];
}
```

::: tip Uwaga
Obiekt `data` będzie zawierał strukturę, którą zbudowałeś dla swojego silnika gry lub specyficznych potrzeb projektu.
:::
