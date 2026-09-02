---
title: "Unity"
description: "LSDE integruje się z Unity, aby zarządzać, tłumaczyć i synchronizować Twoje dialogi bezpośrednio w projektach Unity."
section: engines
outline: [2, 3]
---

# Unity

LSDE integruje się z **Unity**, aby zarządzać, tłumaczyć i synchronizować Twoje dialogi bezpośrednio w projektach Unity.

<YouTube id="NNlNnLo18Mo" />

## Wtyczka LSDE Bridge {#lsde-bridge}
LSDE oferuje bezpłatną wtyczkę Unity: **LSDE Bridge — Unity Localization Sync**.
Ten pakiet eliminuje potrzebę ręcznego importowania/eksportowania każdej String Table Collection pojedynczo.

**Główne funkcje:**
- **Import/Eksport wsadowy** — Synchronizuj wszystkie swoje tabele lokalizacyjne w jednej operacji.
- **Obsługiwane formaty** — XLIFF 2.0 i CSV, kompatybilne z pakietem Unity Localization.
- **Automatyczne zmienianie nazw** — Wykrywa klucze z tym samym ID, ale inną nazwą i zmienia ich nazwy w Unity.
- **Czyszczenie osieroconych elementów** — Usuwa klucze obecne w Unity, ale brakujące w importowanych plikach.
- **Dry Run** — Podgląd zmian przed ich zastosowaniem.
- **Raport deweloperski** — Generuje raport Markdown z wykonanymi działaniami i poleceniami grep, aby znaleźć przestarzałe odniesienia w twoich skryptach C#.

**Wymagania wstępne:**
- Unity **2021.3 LTS** lub nowszy
- Pakiet [Unity Localization](https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/index.html) **1.4.2+**

**Instalacja:**
Otwórz **Window > Package Manager**, kliknij **+** > **Add package from git URL** i wprowadź adres URL repozytorium.
Link będzie dostępny wkrótce.

## Przepływ pracy CSV {#workflow-csv}
Przepływ pracy CSV jest najprostszy na początek:
- **Eksport** — W LSDE Bridge kliknij „Export All”, aby wyeksportować wszystkie swoje tabele do plików CSV.
- **Edycja** — Zaimportuj te pliki CSV do LSDE, edytuj i przetłumacz swoje teksty.
- **Import** — LSDE eksportuje zmodyfikowane pliki CSV, a następnie w LSDE Bridge kliknij „Import All CSV”, aby zsynchronizować Unity.

## Przepływ pracy XLIFF {#workflow-xliff}
Dla projektów wymagających większej kontroli:
- **Eksport** — Użyj wbudowanego eksportu XLIFF Unity, aby wygenerować pliki .xlf.
- **Edycja** — Zaimportuj do LSDE, edytuj z pomocą LLM i metadanych.
- **Import** — LSDE eksportuje pliki .xlf, a następnie LSDE Bridge wykonuje import z parsowaniem XML i bezpośrednią aktualizacją StringTables.

## Dostęp do wtyczki {#access}
Otwórz wtyczkę w Unity poprzez **Window > Asset Management > LSDE Bridge**.
Skonfiguruj format (XLIFF lub CSV), foldery importu/eksportu oraz opcje synchronizacji.

## Wskazówki {#tips}
- Umieść plik `.lsde` w katalogu głównym swojego projektu Unity, aby korzystać z kontroli wersji Git.
- Zawsze używaj **Dry Run** przed importem, aby sprawdzić zmiany.
- Aktywuj **raport deweloperski**, aby zidentyfikować zmienione lub usunięte klucze i zaktualizować swoje odniesienia C#.
