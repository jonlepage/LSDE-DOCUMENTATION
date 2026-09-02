---
title: "Unreal Engine"
description: "LSDE wspiera Unreal Engine poprzez natywny system lokalizacji Unreal i generowanie klas C++."
section: engines
outline: [2, 3]
---

# Unreal Engine

LSDE wspiera **Unreal Engine** poprzez natywny system lokalizacji Unreal i generowanie klas C++.

Przebieg pracy:
- **Import** — Eksportuj swoje teksty z Unreal przez Localization Dashboard, a następnie zaimportuj je do LSDE.
- **Edycja** — Tłumacz i edytuj swoje teksty w LSDE z pomocą LLM.
- **Eksport** — Ponownie wyeksportuj zlokalizowane pliki i ponownie zaimportuj je do Unreal.

## Generowanie klas C++ {#cpp-generation}
LSDE automatycznie generuje typowane klasy dostępu w **C++** z twoich definicji blueprintów.
Te klasy integrują się z twoim projektem Unreal i pozwalają na dostęp do twoich dialogów z weryfikacją typów podczas kompilacji.

## Wskazówki {#tips}
- Użyj **Localization Dashboard** w Unreal do początkowej konfiguracji języków i celów lokalizacji.
- Umieść plik `.lsde` w katalogu głównym projektu Unreal dla kontroli wersji Git.
- LSDE zajmuje się tłumaczeniem i kompozycją — Unreal zarządza pakowaniem i ładowaniem w czasie wykonania za pośrednictwem `FText`.
