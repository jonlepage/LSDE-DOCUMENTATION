---
title: "RPG Maker"
description: "LSDE는 RPG Maker MV 및 RPG Maker MZ와 기본적으로 통합되어 대화를 관리하고 번역할 수 있습니다."
section: engines
outline: [2, 3]
---

# RPG Maker

LSDE는 **RPG Maker MV** 및 **RPG Maker MZ**와 기본적으로 통합되어 대화를 관리하고 번역할 수 있습니다.

## 작동 방식 {#how-it-works}
RPG Maker는 대화를 JSON 파일(Map, CommonEvents, System 등)에 저장합니다.
LSDE는 이러한 파일을 가져와서 편리하게 편집하고 번역할 수 있도록 해주며, RPG Maker가 예상하는 형식으로 다시 내보낼 수 있습니다.

RMMZ i18n에 대한 전체 지원을 원하시면 [여기](https://raw.githubusercontent.com/jonlepage/LSDE-RMMZ-I18N/refs/heads/main/dist/LSDE_i18n.js)에서 플러그인을 다운로드해야 합니다.

일반적인 작업 흐름:
- **가져오기** — LSDE를 RPG Maker 프로젝트의 `data/` 폴더로 지정합니다. 스마트 가져오기(Smart Import) 기능이 대화 키를 자동으로 감지하고 추출합니다.
- **편집** — 텍스트를 수동으로 또는 LLM 지원, 메타데이터, 맞춤법 검사기와 함께 작성, 수정 및 번역합니다.
- **내보내기** — 수정된 JSON 파일을 RPG Maker 프로젝트로 직접 다시 내보냅니다.

## 지원 버전 {#supported-versions}
- **RPG Maker MV** — JSON 완전 가져오기/내보내기
- **RPG Maker MZ** — JSON 완전 가져오기/내보내기
- 이전 버전(VX Ace, XP)은 기본적으로 지원되지 않지만 사용자 지정 파서(parser)를 통해 작동할 수 있습니다.

## 비디오 튜토리얼 {#video-tutorial}
<YouTube id="0cJjxtI088Q" />

## 팁 {#tips}
- 코드 스캐너를 사용하여 모든 키가 RPG Maker 파일에 올바르게 존재하는지 확인하십시오.
- RPG Maker 대화 키를 자동으로 감지하도록 프로젝트 설정에서 Regex 패턴을 구성하십시오.
- 이벤트에 여러 캐릭터와의 대화가 포함되어 있다면 MAD (Multi Actor Dialog) 모드를 활용하십시오.
