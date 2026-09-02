---
title: "가져오기/내보내기"
description: "i18next 이외의 커스텀 엔진을 사용하는 경우, LSDE를 통해 자체 middleware를 구성할 수 있습니다. 이를 통해 데이터를 LSDE 형식으로 import하거나, 반대로 LSDE 형식을 자체 구조로 export할 수 있습니다."
section: features
outline: [2, 3]
---

# 가져오기/내보내기

<DocImage src="/doc/lsde/doc-lsde-import-export-1.webp" />

## 커스텀 Import/Export {#middleware}
i18next 이외의 커스텀 엔진을 사용하는 경우, LSDE를 통해 자체 middleware를 구성할 수 있습니다. 이를 통해 데이터를 LSDE 형식으로 import하거나, 반대로 LSDE 형식을 자체 구조로 export할 수 있습니다.

## 어떻게 작동하나요? {#howiswork}
1. 사용자 정의 설정을 표시하려면 **고급 모드(mode avancé)**를 활성화하세요.
2. 여기서 파일 import 필터를 정의합니다:
- LSDE가 검색에 포함할 파일 확장자를 지정합니다.
- 파일 이름이나 포함되어야 할 키워드를 지정합니다.

::: tip 참고
이 옵션들은 정규 표현식(Regex)을 지원합니다. 예를 들어: `/filename\\d+/`는 "filename" 뒤에 숫자가 붙은 모든 파일(예: `filename004`)을 가져옵니다.
:::

3. 특정 framework용으로 사전 구성된 parser를 선택할 수 있습니다.
이 middleware들은 필요에 따라 언제든지 조정할 수 있습니다.
[자체 middleware를 작성해야 하는 경우 여기를 참조하세요](/ko/features/import-export#interface).

4. 이 옵션들을 통해 보안을 강화하고 로컬라이제이션 파일 구조의 표준을 정의할 수 있습니다:
- **Monolithic**: 모든 언어가 하나의 단일 파일에 그룹화됨을 의미합니다.
- **부모 폴더의 Locale**: 부모 폴더가 언어를 정의함을 나타냅니다.
- **파일명의 Locale**: 언어가 파일 이름에 포함되어야 함을 나타냅니다.

5. middleware를 선택할 때 import 및 export를 위한 코드를 구현해야 합니다. 이 탭들을 통해 두 인터페이스 사이를 전환할 수 있습니다.

## Middleware 인터페이스 {#interface}
import의 경우, parser는 LSDE에 다음 인터페이스를 반환해야 합니다:
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

LSDE가 찾아 파라미터로 전달한 파일들을 바탕으로 이 객체를 구성해야 합니다. 수신된 파일의 인터페이스는 다음과 같습니다:
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

export의 경우, LSDE는 자체 데이터 구조를 재구성할 수 있도록 다음 인터페이스를 전달합니다:
```ts
interface ILocalizationExportParams {
	files: ILocalizationImportParams['files']

	// ReadonlyMap<LSI18NKey, ReadonlyMap<language, text>>
	valuesEntriesMap: ReadonlyMap<string, ReadonlyMap<string, string>>;
	metasEntries: ILocalizationImportResult['metasEntries'];
	nameSpacePackage: ILocalizationImportResult['nameSpacePackage'];

}
```

다음 구조를 반환해야 합니다:
```ts
interface ILocalizationExportResult {
	i18nFiles: {
		locale: Locales;
		src: string,
		data: unknown;
	}[];
}
```

::: tip 참고
`data` 객체에는 게임 엔진이나 프로젝트의 특정 요구 사항에 맞게 구성한 구조가 포함됩니다.
:::
