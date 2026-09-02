---
title: "Godot"
description: "LSDE integruje się z Godot 4 w celu zarządzania i tłumaczenia dialogów, z natywną obsługą GDScript i C# (Mono)."
section: engines
outline: [2, 3]
---

# Godot

LSDE integruje się z **Godot 4** w celu zarządzania i tłumaczenia dialogów, z natywną obsługą GDScript i C# (Mono).

## Integracja {#integration}
Godot wykorzystuje pliki CSV lub JSON do lokalizacji za pośrednictwem swojego systemu `TranslationServer`.
LSDE może importować i eksportować te formaty, zapewniając płynny przepływ pracy między obydwoma narzędziami.

Proces pracy:
- **Import** — Importuj pliki tłumaczeń Godot (CSV lub JSON) do LSDE za pośrednictwem funkcji Smart Import.
- **Edycja** — Tłumacz i edytuj z pomocą LLM, metadanych oraz sprawdzania pisowni.
- **Eksport** — Ponownie eksportuj zlokalizowane pliki bezpośrednio do folderu projektu Godot.

## Generowanie kodu {#code-generation}
LSDE automatycznie generuje typowane klasy dostępu w dwóch językach:
- **GDScript** — Natywne klasy Godot z autouzupełnianiem w edytorze Godot.
- **C# (Mono)** — Dla projektów Godot wykorzystujących środowisko uruchomieniowe .NET.

Klasy te zapewniają dostęp do kluczy dialogowych z weryfikacją typów, co pozwala uniknąć błędów związanych z zakodowanymi na stałe ciągami znaków.

## Wskazówki {#tips}
- Godot ładuje tłumaczenia za pośrednictwem `TranslationServer.set_locale()` — twoje pliki wyeksportowane przez LSDE są bezpośrednio kompatybilne.
- Umieść plik `.lsde` w katalogu głównym projektu Godot do kontroli wersji Git.
- Skonfiguruj automatyczny eksport przy zapisie w LSDE, aby na bieżąco synchronizować zmiany z Godot.
- Użyj `tr()` w swoich skryptach GDScript, aby uzyskać dostęp do wyeksportowanych kluczy tłumaczeniowych.
