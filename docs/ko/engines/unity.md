---
title: "Unity"
description: "LSDE는 Unity와 통합되어 Unity 프로젝트 내에서 직접 대화를 관리, 번역 및 동기화합니다."
section: engines
outline: [2, 3]
---

# Unity

LSDE는 **Unity**와 통합되어 Unity 프로젝트 내에서 직접 대화를 관리, 번역 및 동기화합니다.

<YouTube id="NNlNnLo18Mo" />

## LSDE Bridge 플러그인 {#lsde-bridge}
LSDE는 무료 Unity 플러그인인 **LSDE Bridge — Unity Localization Sync**를 제공합니다.
이 패키지는 각 String Table Collection을 하나씩 수동으로 가져오거나 내보낼 필요를 없애줍니다.

**주요 기능:**
- **일괄 가져오기/내보내기** — 한 번의 작업으로 모든 로컬라이제이션 테이블을 동기화합니다.
- **지원 형식** — XLIFF 2.0 및 CSV, Unity Localization 패키지와 호환됩니다.
- **자동 이름 변경** — 동일한 ID를 가졌지만 이름이 다른 키를 감지하고 Unity에서 이름을 변경합니다.
- **고아 키 정리** — Unity에는 있지만 가져온 파일에는 없는 키를 제거합니다.
- **Dry Run** — 변경 사항을 적용하기 전에 미리 봅니다.
- **개발자 보고서** — 수행된 작업과 C# 스크립트에서 더 이상 사용되지 않는 참조를 찾기 위한 grep 명령어가 포함된 Markdown 보고서를 생성합니다.

**필수 조건:**
- Unity **2021.3 LTS** 또는 최신 버전
- [Unity Localization](https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/index.html) 패키지 **1.4.2+**

**설치:**
**Window > Package Manager**를 열고, **+** > **Add package from git URL**을 클릭한 다음 저장소 URL을 입력하십시오.
링크는 곧 제공될 예정입니다.

## CSV 워크플로우 {#workflow-csv}
CSV 워크플로우는 시작하기 가장 간단합니다:
- **내보내기** — LSDE Bridge에서 "Export All"을 클릭하여 모든 테이블을 CSV 파일로 내보냅니다.
- **편집** — LSDE로 CSV 파일을 가져와 텍스트를 편집하고 번역합니다.
- **가져오기** — LSDE가 수정된 CSV를 내보내면 LSDE Bridge에서 "Import All CSV"를 클릭하여 Unity를 동기화합니다.

## XLIFF 워크플로우 {#workflow-xliff}
더 정교한 제어가 필요한 프로젝트의 경우:
- **내보내기** — Unity의 내장 XLIFF 내보내기 기능을 사용하여 .xlf 파일을 생성합니다.
- **편집** — LSDE로 가져와 LLM 지원 및 메타데이터를 사용하여 편집합니다.
- **가져오기** — LSDE가 .xlf 파일을 내보내면 LSDE Bridge가 XML 파싱 및 StringTables 직접 업데이트와 함께 가져오기를 수행합니다.

## 플러그인 접근 {#access}
Unity에서 **Window > Asset Management > LSDE Bridge**를 통해 플러그인을 엽니다.
형식(XLIFF 또는 CSV), 가져오기/내보내기 폴더 및 동기화 옵션을 구성하십시오.

## 팁 {#tips}
- Git 버전 관리를 활용하려면 `.lsde` 파일을 Unity 프로젝트 루트에 배치하십시오.
- 가져오기 전에 변경 사항을 확인하기 위해 항상 **Dry Run**을 사용하십시오.
- 이름이 변경되거나 삭제된 키를 식별하고 C# 참조를 업데이트하려면 **개발자 보고서**를 활성화하십시오.
