---
title: "导入/导出"
description: "如果您使用的是 i18next 以外的自定义引擎，LSDE 允许您配置自己的 middleware。这样，您就可以将数据导入为 LSDE 格式，反之亦然，将 LSDE 格式导出为您自己的结构。"
section: features
outline: [2, 3]
---

# 导入/导出

<DocImage src="/doc/lsde/doc-lsde-import-export-1.webp" />

## 自定义导入/导出 {#middleware}
如果您使用的是 i18next 以外的自定义引擎，LSDE 允许您配置自己的 middleware。这样，您就可以将数据导入为 LSDE 格式，反之亦然，将 LSDE 格式导出为您自己的结构。

## 运作原理 {#howiswork}
1. 开启 **高级模式** 以显示可自定义的参数。
2. 在此处定义文件导入过滤器：
- 指定 LSDE 在搜索中应包含的文件扩展名。
- 指示文件必须包含的名称或关键词。

::: tip 备注
这些选项支持正则表达式 (Regex)。例如：`/filename\\d+/` 将获取所有名为“filename”且后跟数字的文件（例如：`filename004`）。
:::

3. 您可以为某些 frameworks 选择预配置的 parsers。
这些 middlewares 可以根据您的需要随时进行调整。
[如果您需要编写自己的 middleware，请点击此处](/zh/features/import-export#interface)。

4. 这些选项可以加强安全性并为您定义本地化文件的结构标准：
- **Monolithic**：表示您的所有语言都汇总在一个单一的文件中。
- **父文件夹中的 Locale**：表示由父文件夹定义语言。
- **文件名中的 Locale**：表示语言必须包含在文件名中。

5. 当您选择一个 middleware 时，您必须实现导入和导出的代码。这些选项卡允许在两个接口之间切换。

## Middleware 接口 {#interface}
对于导入，您的 parser 必须向 LSDE 返回以下接口：
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

您必须根据 LSDE 找到并作为参数传递的文件构建此对象。接收到的文件接口如下：
```ts
interface ILocalizationImportParams {
	files: {

		/** 不带扩展名的文件名 */
		filename: string;

		/** 文件的完整路径 */
		path: string;

		/** 文件内容 */
		datafile: string;

		/** 文件的父文件夹 */
		parentFolder: string;

		/** 不含文件名的目录 */
		pathWithoutFilename: string;

		/** 带点的扩展名，例如：'.json' */
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

对于导出，LSDE 向您传递以下接口，允许您重建自己的数据结构：
```ts
interface ILocalizationExportParams {
	files: ILocalizationImportParams['files']

	// ReadonlyMap<LSI18NKey, ReadonlyMap<language, text>>
	valuesEntriesMap: ReadonlyMap<string, ReadonlyMap<string, string>>;
	metasEntries: ILocalizationImportResult['metasEntries'];
	nameSpacePackage: ILocalizationImportResult['nameSpacePackage'];

}
```

您必须返回此结构：
```ts
interface ILocalizationExportResult {
	i18nFiles: {
		locale: Locales;
		src: string,
		data: unknown;
	}[];
}
```

::: tip 备注
`data` 对象将包含您为游戏引擎或项目的特定需求而构建的结构。
:::
