---
title: "LLMs"
description: "Aby korzystać z LLM (Large Language Models) w LSDE, musisz skonfigurować swój dostęp: wprowadź swoje klucze API utworzone wcześniej do użytku via Cloud…"
section: features
outline: [2, 3]
---

# LLMs

<DocImage src="/doc/lsde/doc-lsde-features-llms-2.webp" />

## Korzystanie z LLM {#usage}
Aby korzystać z LLM (Large Language Models) w LSDE, musisz skonfigurować swój dostęp: wprowadź swoje klucze API utworzone wcześniej do użytku via Cloud lub skonfiguruj adres "localhost", jeśli wolisz korzystać z lokalnego modelu.

### System wielu kluczy {#multi-keys}
LSDE pozwala na zarządzanie wieloma kluczami API jednocześnie. 
System ten pozwala na wykorzystanie wielu kluczy z ograniczonymi quotas poprzez automatyczne przełączanie się na te, które wciąż posiadają kredyty. 

Ta funkcjonalność jest idealna do maksymalizacji wykorzystania darmowych kluczy podlegających codziennemu odnowieniu. 
Aktywując automatyczną rotację, możesz zużyć swoje kredyty bez ręcznej interwencji i w pełni bezpiecznie.

::: tip Uwaga
W przypadku wykrycia błędu LSDE uznaje klucz API za wyczerpany i automatycznie przechodzi do następnego. Możesz zdefiniować kilka cykli rotacji (zazwyczaj 2), aby upewnić się, że wykorzystano wszystkie darmowe kredyty na wszystkich Twoich kluczach.
:::

### Aktywacja LLM {#activate-llm}
W stopce aplikacji masz możliwość aktywacji lub dezaktywacji jednego z dostępnych LLM.
Gdy żaden LLM nie jest wybrany, LSDE spróbuje użyć LLM fallback, który został przez Ciebie wcześniej skonfigurowany.

---

<DocImage src="/doc/lsde/doc-lsde-features-llms-1.webp" />

## Lokalne LLM {#local-llm}
Jeśli chcesz używać swoich modeli lokalnie, wystarczy podać adres localhost swojego serwera. LSDE połączy się z nim, aby wykonywać Twoje zadania.

### Jak zainstalować lokalny LLM? {#local-llm-install}
- [Pobierz Ollama](https://ollama.com/download) dla swojego systemu operacyjnego.
- Uruchom serwer i zainstaluj swoje modele.
- Zamknij aplikację (musi ona pozostać aktywna w tle).
- Wprowadź swój adres localhost i odpowiedni port w konfiguracji Ollama w LSDE.
- Kliknij „Połącz” i wybierz jeden ze swoich modeli.
- Upewnij się, że aktywowałeś LLM w pasku stanu znajdującym się na dole oprogramowania.
