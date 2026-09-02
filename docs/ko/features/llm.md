---
title: "LLMs"
description: "LSDE에서 LLM(Large Language Models)을 사용하려면 액세스 권한을 설정해야 합니다. 클라우드를 통해 사용하려면 미리 생성한 API 키를 입력하거나, 로컬 모델 사용을 선호하는 경우 \"localhost\" 주소를 설정하십시오."
section: features
outline: [2, 3]
---

# LLMs

<DocImage src="/doc/lsde/doc-lsde-features-llms-2.webp" />

## LLM 사용하기 {#usage}
LSDE에서 LLM(Large Language Models)을 사용하려면 액세스 권한을 설정해야 합니다. 클라우드를 통해 사용하려면 미리 생성한 API 키를 입력하거나, 로컬 모델 사용을 선호하는 경우 "localhost" 주소를 설정하십시오.

### 멀티 키 시스템 {#multi-keys}
LSDE는 여러 개의 API 키를 동시에 관리할 수 있도록 지원합니다. 
이 시스템은 할당량(quota)이 제한된 여러 키를 활용하며, 크레딧이 남아 있는 키로 자동 전환해 줍니다. 

이 기능은 매일 갱신되는 무료 키의 사용량을 최대화하는 데 이상적입니다. 
자동 로테이션(rotation)을 활성화하면 수동 조작 없이 안전하게 크레딧을 모두 소진할 수 있습니다.

::: tip 참고
오류가 감지되면 LSDE는 해당 API 키가 소진된 것으로 간주하고 자동으로 다음 키로 넘어갑니다. 모든 키의 무료 크레딧을 남김없이 사용할 수 있도록 여러 번의 로테이션 사이클(보통 2회)을 설정할 수 있습니다.
:::

### LLM 활성화하기 {#activate-llm}
애플리케이션 하단(footer)에서 사용 가능한 LLM 중 하나를 활성화하거나 비활성화할 수 있습니다.
선택된 LLM이 없을 경우, LSDE는 미리 설정해 둔 fallback LLM 사용을 시도합니다.

---

<DocImage src="/doc/lsde/doc-lsde-features-llms-1.webp" />

## 로컬 LLM {#local-llm}
모델을 로컬에서 사용하려면 서버의 localhost 주소를 입력하기만 하면 됩니다. LSDE가 해당 주소에 접속하여 작업을 실행합니다.

### 로컬 LLM 설치 방법 {#local-llm-install}
- 운영 체제에 맞는 [Ollama 다운로드](https://ollama.com/download)를 진행하세요.
- 서버를 시작하고 모델을 설치하세요.
- 애플리케이션을 닫으세요 (백그라운드에서 계속 실행 중이어야 합니다).
- LSDE의 Ollama 설정에 localhost 주소와 해당 포트를 입력하세요.
- « Connecter »를 클릭하고 모델 중 하나를 선택하세요.
- 소프트웨어 하단에 위치한 상태 표시줄에서 LLM을 활성화했는지 확인하세요.
