---
title: "आयात/निर्यात"
description: "यदि आप i18next के अलावा किसी अन्य कस्टम इंजन के साथ काम कर रहे हैं, तो LSDE आपको अपना स्वयं का middleware कॉन्फ़िगर करने की अनुमति देता है।"
section: features
outline: [2, 3]
---

# आयात/निर्यात

<DocImage src="/doc/lsde/doc-lsde-import-export-1.webp" />

## कस्टम इंपोर्ट/एक्सपोर्ट {#middleware}
यदि आप i18next के अलावा किसी अन्य कस्टम इंजन के साथ काम कर रहे हैं, तो LSDE आपको अपना स्वयं का middleware कॉन्फ़िगर करने की अनुमति देता है। इस तरह, आप अपने डेटा को LSDE फॉर्मेट में इंपोर्ट कर सकते हैं और इसके विपरीत, LSDE फॉर्मेट को अपनी स्वयं की संरचना (structure) में एक्सपोर्ट कर सकते हैं।

## यह कैसे काम करता है? {#howiswork}
1. कस्टमाइज़ करने योग्य सेटिंग्स देखने के लिए **एडवांस्ड मोड** (advanced mode) को सक्रिय करें।
2. यहाँ फ़ाइल इंपोर्ट फ़िल्टर को परिभाषित करें:
- उन फ़ाइल एक्सटेंशन को निर्दिष्ट करें जिन्हें LSDE को अपनी खोज में शामिल करना चाहिए।
- उन नामों या कीवर्ड्स को इंगित करें जो फ़ाइलों में होने चाहिए।

::: tip नोट
ये विकल्प रेगुलर एक्सप्रेशन (Regex) का समर्थन करते हैं। उदाहरण के लिए: `/filename\\d+/` उन सभी फ़ाइलों को प्राप्त करेगा जिनका नाम « filename » है और उसके बाद एक संख्या है (जैसे: `filename004`)।
:::

3. आप कुछ फ्रेमवर्क के लिए प्री-कॉन्फ़िगर किए गए parsers चुन सकते हैं।
इन middlewares को आपकी आवश्यकताओं के अनुसार किसी भी समय एडजस्ट किया जा सकता है।
[यदि आपको अपना स्वयं का middleware लिखना है, तो यहाँ देखें](/hi/features/import-export#interface)।

4. ये विकल्प सुरक्षा को मजबूत करने और आपकी लोकलाइजेशन फ़ाइलों के स्ट्रक्चर मानक को परिभाषित करने की अनुमति देते हैं:
- **Monolithic**: इसका मतलब है कि आपकी सभी भाषाएं एक ही फ़ाइल में समूहीकृत (grouped) हैं।
- **Locale पैरेंट फोल्डर में**: यह इंगित करता है कि पैरेंट फोल्डर ही भाषा को परिभाषित करता है।
- **Locale फ़ाइल के नाम में**: यह इंगित करता है कि भाषा फ़ाइल के नाम में होनी चाहिए।

5. जब आप एक middleware चुनते हैं, तो आपको इंपोर्ट और एक्सपोर्ट के लिए कोड लागू (implement) करना होगा। ये टैब दोनों इंटरफेस के बीच स्विच करने की अनुमति देते हैं।

## Middlewares का इंटरफ़ेस {#interface}
इंपोर्ट के लिए, आपके parser को LSDE को निम्न इंटरफ़ेस वापस करना चाहिए:
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

आपको LSDE द्वारा मिली और मापदंडों (parameters) के रूप में पास की गई फ़ाइलों से इस ऑब्जेक्ट को बनाना होगा। प्राप्त फ़ाइलों का इंटरफ़ेस निम्न है:
```ts
interface ILocalizationImportParams {
	files: {

		/** बिना एक्सटेंशन के फ़ाइल नाम */
		filename: string;

		/** फ़ाइल का पूरा पाथ */
		path: string;

		/** फ़ाइल की सामग्री */
		datafile: string;

		/** फ़ाइल का पैरेंट फोल्डर */
		parentFolder: string;

		/** फ़ाइल की डायरेक्टरी */
		pathWithoutFilename: string;

		/** डॉट के साथ एक्सटेंशन जैसे: '.json' */
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

एक्सपोर्ट के लिए, LSDE आपको निम्न इंटरफ़ेस भेजता है, जो आपको अपनी डेटा संरचना (data structure) को फिर से बनाने की अनुमति देता है:
```ts
interface ILocalizationExportParams {
	files: ILocalizationImportParams['files']

	// ReadonlyMap<LSI18NKey, ReadonlyMap<language, text>>
	valuesEntriesMap: ReadonlyMap<string, ReadonlyMap<string, string>>;
	metasEntries: ILocalizationImportResult['metasEntries'];
	nameSpacePackage: ILocalizationImportResult['nameSpacePackage'];

}
```

आपको यह संरचना वापस करनी होगी:
```ts
interface ILocalizationExportResult {
	i18nFiles: {
		locale: Locales;
		src: string,
		data: unknown;
	}[];
}
```

::: tip नोट
`data` ऑब्जेक्ट में वह संरचना होगी जिसे आपने अपने गेम इंजन या अपने प्रोजेक्ट की विशिष्ट आवश्यकताओं के लिए बनाया है।
:::
