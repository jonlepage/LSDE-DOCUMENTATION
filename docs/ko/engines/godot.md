---
title: "Godot"
description: "LSDE는 Godot 4와 통합되어 대화 관리 및 번역을 제공하며, GDScript 및 C# (Mono)를 네이티브로 지원합니다."
section: engines
outline: [2, 3]
---

# Godot

LSDE는 **Godot 4**와 통합되어 대화 관리 및 번역을 제공하며, GDScript 및 C# (Mono)를 네이티브로 지원합니다.

## 통합 {#integration}
Godot은 `TranslationServer` 시스템을 통해 로컬라이제이션을 위해 CSV 또는 JSON 파일을 사용합니다. LSDE는 두 도구 간의 원활한 워크플로를 위해 이러한 형식을 가져오고 내보낼 수 있습니다.

워크플로는 다음과 같습니다:
- **가져오기** — 스마트 임포트를 통해 Godot 번역 파일(CSV 또는 JSON)을 LSDE로 가져옵니다.
- **편집** — LLM 지원, 메타데이터 및 맞춤법 검사기로 번역하고 편집합니다.
- **내보내기** — 로컬라이즈된 파일을 Godot 프로젝트 폴더로 직접 다시 내보냅니다.

## 코드 생성 {#code-generation}
LSDE는 두 가지 언어로 형식화된 접근 클래스를 자동으로 생성합니다:
- **GDScript** — Godot 에디터에서 자동 완성을 지원하는 Godot 네이티브 클래스.
- **C# (Mono)** — .NET 런타임을 사용하는 Godot 프로젝트용.

이러한 클래스는 타입 검사를 통해 대화 키에 접근할 수 있도록 하여, 하드코딩된 문자열 오류를 방지합니다.

## 팁 {#tips}
- Godot은 `TranslationServer.set_locale()`를 통해 번역을 로드합니다. LSDE에서 내보낸 파일은 직접 호환됩니다.
- Git 버전 관리를 위해 `.lsde` 파일을 Godot 프로젝트 루트에 배치하십시오.
- LSDE에서 저장 시 자동 내보내기를 구성하여 변경 사항을 Godot과 지속적으로 동기화하십시오.
- 내보낸 번역 키에 접근하려면 GDScript 스크립트에서 `tr()`을 사용하십시오.
