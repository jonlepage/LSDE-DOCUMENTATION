---
title: "Importación/Exportación"
description: "Si trabajas con un motor personalizado que no sea i18next, LSDE te permite configurar tu propio middleware."
section: features
outline: [2, 3]
---

# Importación/Exportación

<DocImage src="/doc/lsde/doc-lsde-import-export-1.webp" />

## Importación/Exportación personalizada {#middleware}
Si trabajas con un motor personalizado que no sea i18next, LSDE te permite configurar tu propio middleware. De esta manera, podrás importar tus datos al formato LSDE y, a la inversa, exportar el formato LSDE a tu propia estructura.

## ¿Cómo funciona? {#howiswork}
1. Activa el **modo avanzado** para mostrar los ajustes personalizables.
2. Define aquí el filtro de importación de archivos:
- Especifica las extensiones de archivos que LSDE debe incluir en su búsqueda.
- Indica los nombres o palabras clave que deben contener los archivos.

::: tip Nota
Estas opciones soportan expresiones regulares (Regex). Por ejemplo: `/filename\\d+/` recuperará todos los archivos llamados « filename » seguidos de un número (ej: `filename004`).
:::

3. Puedes seleccionar parsers preconfigurados para ciertos frameworks.
Estos middlewares pueden ajustarse en cualquier momento según tus necesidades.
[Si necesitas escribir tu propio middleware, hazlo aquí](/es/features/import-export#interface).

4. Estas opciones permiten reforzar la seguridad y definir el estándar de estructura de tus archivos de localización:
- **Monolithic**: significa que todos tus idiomas están agrupados en un único archivo.
- **Locale en las carpetas padre**: indica que es la carpeta padre la que define el idioma.
- **Locale en el nombre de archivo**: indica que el idioma debe figurar en el nombre del archivo.

5. Al elegir un middleware, debes implementar el código para la importación y la exportación. Estas pestañas permiten alternar entre las dos interfaces.

## Interfaz de los middlewares {#interface}
Para la importación, tu parser debe devolver la siguiente interfaz a LSDE:
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

Debes construir este objeto a partir de los archivos encontrados por LSDE y pasados como parámetros. La interfaz de los archivos recibidos es la siguiente:
```ts
interface ILocalizationImportParams {
	files: {

		/** nombre del archivo sin extensión */
		filename: string;

		/** ruta completa del archivo */
		path: string;

		/** contenido del archivo */
		datafile: string;

		/** carpeta padre del archivo */
		parentFolder: string;

		/** directorio del archivo */
		pathWithoutFilename: string;

		/** extensión con punto, ej: '.json' */
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

Para la exportación, LSDE te transmite la siguiente interfaz, permitiéndote reconstruir tu propia estructura de datos:
```ts
interface ILocalizationExportParams {
	files: ILocalizationImportParams['files']

	// ReadonlyMap<LSI18NKey, ReadonlyMap<language, text>>
	valuesEntriesMap: ReadonlyMap<string, ReadonlyMap<string, string>>;
	metasEntries: ILocalizationImportResult['metasEntries'];
	nameSpacePackage: ILocalizationImportResult['nameSpacePackage'];

}
```

Debes devolver esta estructura:
```ts
interface ILocalizationExportResult {
	i18nFiles: {
		locale: Locales;
		src: string,
		data: unknown;
	}[];
}
```

::: tip Nota
El objeto `data` contendrá la estructura que hayas construido para tu motor de juego o para las necesidades específicas de tu proyecto.
:::
