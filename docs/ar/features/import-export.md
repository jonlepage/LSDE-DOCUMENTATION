---
title: "استيراد/تصدير"
description: "إذا كنت تعمل مع محرك مخصص بخلاف i18next، فإن LSDE يتيح لك تهيئة الـ middleware الخاص بك."
section: features
outline: [2, 3]
---

# استيراد/تصدير

<DocImage src="/doc/lsde/doc-lsde-import-export-1.webp" />

## استيراد/تصدير مخصص {#middleware}
إذا كنت تعمل مع محرك مخصص بخلاف i18next، فإن LSDE يتيح لك تهيئة الـ **middleware** الخاص بك. سيسمح لك ذلك باستيراد بياناتك إلى تنسيق LSDE، وبالعكس، تصدير تنسيق LSDE إلى هيكليتك الخاصة.

## كيف يعمل هذا؟ {#howiswork}
1. قم بتفعيل **الوضع المتقدم (Advanced mode)** لعرض الإعدادات القابلة للتخصيص.
2. حدد هنا فلتر استيراد الملفات:
- حدد امتدادات الملفات التي يجب أن يشملها LSDE في بحثه.
- حدد الأسماء أو الكلمات المفتاحية التي يجب أن تحتوي عليها الملفات.

::: tip ملاحظة
تدعم هذه الخيارات التعبيرات النمطية (**Regex**). على سبيل المثال: `/filename\d+/` سيجلب جميع الملفات المسماة « filename » متبوعة برقم (مثال: `filename004`).
:::

3. يمكنك اختيار **parsers** معدة مسبقاً لبعض الـ **frameworks**.
يمكن تعديل هذه الـ **middlewares** في أي وقت وفقاً لاحتياجاتك.
[إذا كنت بحاجة إلى كتابة middleware خاص بك، فمن هنا](/ar/features/import-export#interface).

4. تسمح هذه الخيارات بتعزيز الأمان وتحديد معيار هيكلية ملفات التوطين (localization) الخاصة بك:
- **Monolithic**: يعني أن جميع لغاتك مجمعة في ملف واحد ووحيد.
- **Locale dans les dossiers parents**: يشير إلى أن المجلد الأب هو الذي يحدد الـ **locale**.
- **Locale dans le nom de fichier**: يشير إلى وجوب ظهور الـ **locale** في اسم الملف.

5. عند اختيار **middleware**، يجب عليك تنفيذ الكود الخاص بالاستيراد والتصدير. تسمح هذه التبويبات بالتبديل بين الواجهتين.

## واجهة الـ middlewares {#interface}
بالنسبة للاستيراد، يجب أن يعيد الـ **parser** الخاص بك الواجهة التالية إلى LSDE:
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

يجب عليك بناء هذا الكائن (**object**) بناءً على الملفات التي عثر عليها LSDE وتم تمريرها كبارامترات. واجهة الملفات المستلمة هي كالتالي:
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

بالنسبة للتصدير، ينقل لك LSDE الواجهة التالية، مما يسمح لك بإعادة بناء هيكلية البيانات الخاصة بك:
```ts
interface ILocalizationExportParams {
	files: ILocalizationImportParams['files']

	// ReadonlyMap<LSI18NKey, ReadonlyMap<language, text>>
	valuesEntriesMap: ReadonlyMap<string, ReadonlyMap<string, string>>;
	metasEntries: ILocalizationImportResult['metasEntries'];
	nameSpacePackage: ILocalizationImportResult['nameSpacePackage'];

}
```

يجب عليك إعادة هذه الهيكلية:
```ts
interface ILocalizationExportResult {
	i18nFiles: {
		locale: Locales;
		src: string,
		data: unknown;
	}[];
}
```

::: tip ملاحظة
سيحتوي الكائن `data` على الهيكلية التي قمت ببنائها لمحرك الألعاب الخاص بك أو للاحتياجات المحددة لمشروعك.
:::
