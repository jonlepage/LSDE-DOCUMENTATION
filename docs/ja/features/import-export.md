---
title: "インポート/エクスポート"
description: "i18next 以外のカスタムエンジンを使用している場合、LSDE では独自の middleware を設定できます。これにより、データを LSDE フォーマットにインポートしたり、逆に LSDE フォーマットを独自の構造にエクスポートしたりすることが可能になります。"
section: features
outline: [2, 3]
---

# インポート/エクスポート

<DocImage src="/doc/lsde/doc-lsde-import-export-1.webp" />

## カスタムインポート/エクスポート {#middleware}
i18next 以外のカスタムエンジンを使用している場合、LSDE では独自の middleware を設定できます。これにより、データを LSDE フォーマットにインポートしたり、逆に LSDE フォーマットを独自の構造にエクスポートしたりすることが可能になります。

## 仕組みは？ {#howiswork}
1. **高度なモード**を有効にして、カスタマイズ可能な設定を表示します。
2. ここでファイルのインポートフィルターを定義します：
- LSDE の検索対象に含めるファイルの拡張子を指定します。
- ファイル名に含まれるべき名前やキーワードを指定します。

::: tip メモ
これらのオプションは正規表現 (Regex) をサポートしています。例えば：`/filename\\d+/` は、「filename」の後に数字が続くすべてのファイル（例：`filename004`）を取得します。
:::

3. 一部の framework 向けに事前設定された parser を選択できます。
これらの middleware は、必要に応じていつでも調整可能です。
[独自の middleware を記述する必要がある場合は、こちらを参照してください](/ja/features/import-export#interface)。

4. これらのオプションにより、セキュリティを強化し、ローカライズファイルの構造標準を定義できます：
- **Monolithic** : すべての言語が単一のファイルにまとめられていることを意味します。
- **Locale dans les dossiers parents** : 親フォルダ名によって言語が定義されていることを示します。
- **Locale dans le nom de fichier** : ファイル名に言語が含まれている必要があることを示します。

5. middleware を選択したら、インポートとエクスポートのためのコードを実装する必要があります。これらのタブで 2 つのインターフェースを切り替えることができます。

## middleware のインターフェース {#interface}
インポートの場合、parser は LSDE に対して以下のインターフェースを返す必要があります：
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

LSDE によって検出され、パラメータとして渡されたファイルから、このオブジェクトを構築する必要があります。受信するファイルのインターフェースは以下の通りです：
```ts
interface ILocalizationImportParams {
	files: {

		/** 拡張子なしのファイル名 */
		filename: string;

		/** ファイルのフルパス */
		path: string;

		/** ファイルの内容 */
		datafile: string;

		/** ファイルの親フォルダ */
		parentFolder: string;

		/** ファイルのディレクトリ（ファイル名なし） */
		pathWithoutFilename: string;

		/** ドット付きの拡張子（例: '.json'） */
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

エクスポートの場合、LSDE は以下のインターフェースを渡します。これにより、独自のデータ構造を再構築できます：
```ts
interface ILocalizationExportParams {
	files: ILocalizationImportParams['files']

	// ReadonlyMap<LSI18NKey, ReadonlyMap<language, text>>
	valuesEntriesMap: ReadonlyMap<string, ReadonlyMap<string, string>>;
	metasEntries: ILocalizationImportResult['metasEntries'];
	nameSpacePackage: ILocalizationImportResult['nameSpacePackage'];

}
```

以下の構造を返す必要があります：
```ts
interface ILocalizationExportResult {
	i18nFiles: {
		locale: Locales;
		src: string,
		data: unknown;
	}[];
}
```

::: tip メモ
`data` オブジェクトには、ゲームエンジンまたはプロジェクトの特定のニーズに合わせて構築した構造が含まれます。
:::
