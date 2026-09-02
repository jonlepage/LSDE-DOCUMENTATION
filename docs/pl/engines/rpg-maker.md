---
title: "RPG Maker"
description: "LSDE natywnie integruje się z RPG Maker MV i RPG Maker MZ w celu zarządzania i tłumaczenia twoich dialogów."
section: engines
outline: [2, 3]
---

# RPG Maker

LSDE natywnie integruje się z **RPG Maker MV** i **RPG Maker MZ** w celu zarządzania i tłumaczenia twoich dialogów.

## Jak to działa {#how-it-works}
RPG Maker przechowuje swoje dialogi w plikach JSON (Map, CommonEvents, System itd.).
LSDE może importować te pliki, pozwala je wygodnie edytować i tłumaczyć, a następnie eksportować je z powrotem w formacie oczekiwanym przez RPG Maker.

Jeśli chcesz pełnego wsparcia dla RMMZ i18n, musisz pobrać [wtyczkę tutaj](https://raw.githubusercontent.com/jonlepage/LSDE-RMMZ-I18N/refs/heads/main/dist/LSDE_i18n.js)

Typowy przepływ pracy:
- **Importowanie** — Wskaż LSDE folder `data/` swojego projektu RPG Maker. Funkcja Smart Import automatycznie wykrywa i wyodrębnia klucze dialogowe.
- **Edycja** — Pisz, poprawiaj i tłumacz swoje teksty ręcznie lub z pomocą LLM, metadanych i korektora ortograficznego.
- **Eksportowanie** — Eksportuj zmodyfikowane pliki JSON bezpośrednio do swojego projektu RPG Maker.

## Obsługiwane wersje {#supported-versions}
- **RPG Maker MV** — Pełny import/eksport JSON
- **RPG Maker MZ** — Pełny import/eksport JSON
- Starsze wersje (VX Ace, XP) nie są natywnie obsługiwane, ale mogą działać za pośrednictwem niestandardowego parsera.

## Samouczek wideo {#video-tutorial}
<YouTube id="0cJjxtI088Q" />

## Wskazówki {#tips}
- Użyj skanera kodu, aby sprawdzić, czy wszystkie twoje klucze są obecne w plikach RPG Maker.
- Skonfiguruj wzorce Regex w ustawieniach projektu, aby automatycznie wykrywać klucze dialogowe RPG Maker.
- Skorzystaj z trybu MAD (Multi Actor Dialog), jeśli twoje wydarzenia zawierają dialogi z udziałem wielu postaci.
