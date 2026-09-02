---
title: "Unreal Engine"
description: "LSDE는 Unreal의 네이티브 현지화 시스템과 C++ 클래스 생성을 통해 Unreal Engine을 지원합니다."
section: engines
outline: [2, 3]
---

# Unreal Engine

LSDE는 Unreal의 네이티브 현지화 시스템과 C++ 클래스 생성을 통해 **Unreal Engine**을 지원합니다.

워크플로:
- **가져오기** — Localization Dashboard를 통해 Unreal에서 텍스트를 내보낸 다음 LSDE로 가져옵니다.
- **편집** — LLM 지원을 받아 LSDE에서 텍스트를 번역하고 편집합니다.
- **내보내기** — 현지화된 파일을 다시 내보내고 Unreal로 다시 가져옵니다.

## C++ 클래스 생성 {#cpp-generation}
LSDE는 블루프린트 정의에서 **C++** 형식화된 접근 클래스를 자동으로 생성합니다.
이 클래스는 Unreal 프로젝트에 통합되어 컴파일 시간 타입 검사를 통해 대화에 접근할 수 있게 합니다.

## 팁 {#tips}
- Unreal의 **Localization Dashboard**를 사용하여 언어 및 현지화 대상의 초기 설정을 구성하세요.
- Git 버전 관리를 위해 `.lsde` 파일을 Unreal 프로젝트의 루트에 배치하세요.
- LSDE는 번역 및 작성을 처리하며, Unreal은 `FText`를 통해 패키징 및 런타임 로딩을 관리합니다.
