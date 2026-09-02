---
layout: home

title: "LSDE — 공식 문서 LS-Dialog Editor"
# Le titre porte déjà le nom du produit : le suffixe du site ferait doublon dans l'onglet
# et dans les résultats de recherche.
titleTemplate: false
description: "AI 기반 번역 도구와 고급 스토리텔링 기능을 활용하여 소프트웨어 및 게임 현지화 수준을 향상시키세요. 당신은 여전히 조종석에 앉아 있습니다."

hero:
  name: "LSDE"
  text: "AI 코파일럿과 함께 작성 & 번역하세요"
  tagline: "AI 기반 번역 도구와 고급 스토리텔링 기능을 활용하여 소프트웨어 및 게임 현지화 수준을 향상시키세요. 당신은 여전히 조종석에 앉아 있습니다."
  image:
    src: /brand/lsde-hero.webp
    alt: "LS-Dialog Editor"
  actions:
    - theme: brand
      text: "시작하기"
      link: /ko/getting-started/introduction
    - theme: alt
      text: "LSDE 다운로드"
      link: https://lepasoft.com/ko/software/ls-dialog-editor#download

features:
  - icon:
      src: /icons/translation.svg
    title: "번역"
    details: "LSDE는 전 세계 모든 언어로 번역할 수 있는 강력한 도구를 제공합니다."
    link: /ko/features/translation
  - icon:
      src: /icons/blueprint.svg
    title: "Blueprint"
    details: "Blueprint 에디터는 LSDE에서 대화 구성용 시각적 인터페이스입니다."
    link: /ko/interface/blueprint
  - icon:
      src: /icons/agents.svg
    title: "MCP Bridge"
    details: "MCP Bridge 서버를 통해 외부 AI 도구 및 에이전트는 표준 MCP(Model Context Protocol) 프로토콜을 통해 에디터와 상호 작용할 수 있습니다."
    link: /ko/resources/mcp-bridge
  - icon:
      src: /icons/codebase.svg
    title: "스캔"
    details: "'LSDE' 프로젝트에서 코드베이스 스캐너 구성은 패턴 섹션을 통해 이루어집니다."
    link: /ko/features/scanning
  - icon:
      src: /icons/voice.svg
    title: "음성"
    details: "LSDE는 프로젝트의 사운드트랙을 대화와 동기화하여 관리하는 기능을 통합합니다."
    link: /ko/features/voice
  - icon:
      src: /icons/diagnostic.svg
    title: "현지화"
    details: "이 필수 모듈을 통해 프로젝트의 언어와 네임스페이스를 구성할 수 있습니다."
    link: /ko/interface/localization-manager
  - icon:
      src: /icons/rendering.svg
    title: "렌더링"
    details: "LSDE는 텍스트 세그먼트의 렌더링을 실시간으로 사용자 지정할 수 있는 매우 고급 텍스트 렌더링 엔진을 제공합니다."
    link: /ko/features/rendering
  - icon:
      src: /icons/importexport.svg
    title: "가져오기/내보내기"
    details: "i18next 이외의 커스텀 엔진을 사용하는 경우, LSDE를 통해 자체 middleware를 구성할 수 있습니다. 이를 통해 데이터를 LSDE 형식으로 import하거나, 반대로 LSDE 형식을 자체 구조로 export할 수 있습니다."
    link: /ko/features/import-export
  - icon:
      src: /icons/runtime.svg
    title: "Runtime (LSDEDE)"
    details: "멀티 런타임 실행 엔진은 에디터에서 내보낸 블루프린트를 로드하고 실행합니다."
    link: /ko/engines/runtime
---
