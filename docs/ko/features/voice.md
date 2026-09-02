---
title: "음성"
description: "LSDE는 프로젝트의 사운드트랙을 대화와 동기화하여 관리하는 기능을 통합합니다."
section: features
outline: [2, 3]
---

# 음성

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-1.webp" />

LSDE는 프로젝트의 사운드트랙을 대화와 동기화하여 관리하는 기능을 통합합니다.

## 사전 요구 사항 {#prerequisites}
먼저 [Elevenlabs](/ko/interface/global-settings#llm-pour-les-voix) API 키를 발급받아야 합니다.
Elevenlabs는 현재 무료 월간 플랜을 제공하며, 이는 API를 테스트하고 그들의 전문성을 경험하기에 이상적입니다.

## 구성 {#configuration}
프로젝트의 음성 시스템을 구성하려면 [음성 구성 섹션](/ko/interface/project-settings#voices)으로 이동하십시오.

1.  프로젝트 저장 시마다 음성이 저장될 음성 내보내기 폴더를 정의합니다.
2.  시스템은 출력 파일의 이름을 지정할 수 있도록 합니다.
    이 옵션은 게임 엔진 또는 프로젝트의 필요에 따라 이름을 조정합니다.
    드래그 앤 드롭으로 태그 순서를 조정할 수 있습니다.

---

## 변수 연결 (자동) {#associate-variables-auto}
<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-2.webp" />

이 예시는 게임 엔진이 추출해야 하는, 대화당 여러 캐릭터가 있는 JRPG를 위한 음성 시스템을 구성하는 방법을 보여줍니다.

1.  대화 상대(interlocuteurs)를 위한 변수 그룹을 선택합니다.
2.  '대화당 여러 대화 상대' 옵션을 체크합니다.
3.  반드시 하나의 그룹을 포함하는 정규 표현식(`regex`)을 구성하기 위한 섹션이 열립니다:
    -   `id` 그룹: 선택된 그룹 변수에서 검색할 `tag` 값을 캡처합니다.
    -   `value` 그룹: `id` 그룹에 대해 캡처된 텍스트입니다.
    > 선택 사항입니다. 텍스트를 직접 작성할 수 있기 때문입니다. 이 그룹은 자동화를 극대화하고 작업 부하를 줄여줍니다.
4.  그러면 설정된 그룹의 모든 변수를 해당 아이콘(정보가 제공된 경우)과 함께 볼 수 있습니다.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-3.webp" />

## `regex` 테스트하기 {#test-regex}
[regexr](https://regexr.com)에서 `regex`를 테스트하여 더 잘 이해할 수 있습니다.
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```
1.  예를 들어 두 번째 캡처를 선택합니다.
2.  '세부 정보'에 접근합니다.
3.  다음을 확인할 수 있습니다:
    -   그룹 1은 캐릭터 'a1'의 `tag id`를 캡처합니다.
    -   그룹 2는 'a1' `id`에 대한 나머지 텍스트를 캡처합니다.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-4.webp" />

## 변수 {#variables}
[변수 섹션](/ko/interface/project-settings#les-variables)에서:

1.  이전에 생성된 `ACTORS` 그룹 내에서.
2.  이 목록은 [이전에 보았던](/ko/features/voice#associer-des-variables) 목록과 일치합니다.
3.  외형(apparence)을 입력하면 대화 및 캐릭터 성격의 구성과 검증이 훨씬 용이해집니다.

::: tip 참고
이 정보는 언제든지 수정하거나 나중에 추가할 수 있습니다.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-5.webp" />

## 캐릭터 구성 {#configure-character}
[음성 구성](/ko/features/voice#associer-des-variables)으로 돌아가 봅시다.

1.  음성 ID를 변수에 연결합니다.
    > 음성 ID는 Elevenlabs 플랫폼에서 생성됩니다. Elevenlabs 계정에는 이미 기본 모델이 포함되어 있습니다.
2.  음성 생성기를 테스트하고 조정할 수도 있습니다.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-6.webp" />

## 음성 ID 생성 {#create-voice-id}
[Elevenlabs](https://elevenlabs.io/app/voice-lab) 프로필에서:

1.  새로운 맞춤형 음성을 생성합니다.
    LSDE는 모든 API 모델을 지원합니다. 현재로서는 감정 태그 관리에 뛰어나고 더 나은 서사 제어를 제공하는 `V3` 모델을 강력히 권장합니다.
2.  생성 후, '내 음성' 섹션으로 이동합니다.
3.  ID 존재 여부를 확인합니다 (예: [FCT7O](https://lepasoft.com/ko/games/fanatic-cardboard-f7o)의 주요 캐릭터인 'Lia Sun-berry').

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-7.webp" />

## 음성 텍스트 생성 {#generate-voice-text}
ID를 입력한 후, 음성 텍스트를 시각화하거나 생성하려면 [음성 관리자](/ko/interface/voice-manager) 창을 엽니다.

1.  트리 구조에서 키를 선택합니다.
    폴더는 선택하지 마십시오. 음성 텍스트가 읽기 전용으로 표시됩니다.
2.  `regex`는 대화의 캐릭터를 캡처하고 음성 생성 인터페이스를 제공합니다.
3.  생성 시, 텍스트는 현재 시점의 '서명'을 받습니다. 캐릭터 순서를 변경하지 않고 텍스트가 변경되면, 음성 재성성 필요성을 확인하도록 알림이 표시됩니다.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-8.webp" />

## 변수 연결 (수동) {#associate-variables-manual}
간단한 프로젝트에 일반적인, 대화당 한 명의 캐릭터(상호 작용 없음) 시나리오의 경우.
1.  '키당 여러 대화 상대' 확인란의 선택을 해제할 수 있습니다.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-9.webp" />

## 메타데이터 구성 {#configure-metas}
각 대화에 대해 음성을 생성할 캐릭터를 연결합니다.

1.  대상 대화의 키를 선택합니다.
2.  이 대화에서 관리할 각 액터를 체크합니다.

### 여러 캐릭터가 필요한 이유? {#why-multiple-characters}
이는 다양한 성격이나 성별을 가진 여러 무작위 PNJ가 재사용하는 환영 문구와 같은 일반적인 대화에 유용할 수 있습니다.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-10.webp" />

## 재구성 {#reorganization}
1.  항상 키를 대상으로 하며, 폴더는 아닙니다.
2.  음성 관리자가 재구성 문제를 보고할 수 있습니다.
    이 예시에서는 여러 캐릭터의 자동 할당에서 수동 시스템으로 전환했습니다.

::: tip 참고
시스템이 캐릭터의 순서 또는 수량에 중대한 변경 사항을 감지하면, 이미 생성된 각 음성 인스턴스를 수동으로 재구성해야 합니다.
:::

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-11.webp" />

각 대화 음성 파일을 메타데이터에 선언되었거나 자동 할당 시스템을 통해 연결된 캐릭터로 드래그 앤 드롭하기만 하면 됩니다.
