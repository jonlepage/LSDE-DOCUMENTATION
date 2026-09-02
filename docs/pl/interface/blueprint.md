---
title: "Blueprint"
description: "Edytor Blueprint to wizualny interfejs do tworzenia dialogów w LSDE."
section: interface
outline: [2, 3]
---

# Blueprint

<DocImage src="/doc/lsde/doc-lsde-blueprint-1.webp" left />

Edytor Blueprint to wizualny interfejs do tworzenia dialogów w LSDE.
Umożliwia budowanie grafów narracyjnych poprzez łączenie bloków, oferując jasny przegląd przepływu konwersacji.
Możesz pobrać te przepływy jako czyste dane i używać ich w swoim środowisku uruchomieniowym (Runtime) lub [LSDEDE](https://jonlepage.github.io/LS-Dialog-Editor-Engine), ogólnym środowisku uruchomieniowym zaprojektowanym do zaspokojenia tej potrzeby.

## Przegląd {#overview}
Blueprint działa jak nieskończona kanwa, na której umieszczasz i łączysz bloki.
Każda scena ma swój własny graf, z blokiem startowym i przepływem, który rozgałęzia się zgodnie z Twoimi wyborami projektowymi.
Sceny są automatycznie zapisywane, gdy przełączasz się między nimi.

---

## Typy bloków {#block-types}
System Blueprint opiera się na **4 typach bloków zawartości** i jednym typie notatki:
- **Dialog** — Linia dialogowa przypisana do postaci. Najczęściej używany blok.
- **Choice** — Punkt rozgałęzienia, w którym gracz wybiera odpowiedź spośród kilku opcji.
- **Condition** — Niewidzialny przełącznik, który ocenia stan gry i cicho przekierowuje przepływ.
- **Action** — Wyzwala efekty w grze (daje przedmiot, odtwarza dźwięk, aktywuje flagę).
- **Note** — Blok komentarzy dla projektanta narracji, ignorowany podczas wykonywania.

## Interakcje na kanwie {#canvas-interactions}
Edytor oferuje płynne doświadczenie kompozycji, zaprojektowane tak, aby nie odrywać rąk od klawiatury:
- **Przeciągnij i upuść** do przenoszenia i reorganizowania bloków.
- **Wielokrotne zaznaczanie** do jednoczesnego przenoszenia lub usuwania wielu bloków.
- **Kopiuj/Wklej** bloków i połączeń między scenami.
- Pełna funkcja **Cofnij/Ponów** dla wszystkich operacji.
- **Prowadnice wyrównania** dla czystego i czytelnego grafu.
- **Blokowanie bloków** w celu ochrony sfinalizowanych części.
- **Skrót klawiaturowy** Nie odrywaj rąk od klawiatury podczas pracy; nie musisz żonglować myszką i klawiaturą.

## Szybka karuzela {#fast-carousel}
Szybka karuzela umożliwia konfigurowanie aktorów, emocji i wyborów blok po bloku, bezpośrednio z kanwy.
Nie ma potrzeby otwierania każdego bloku indywidualnie — nawiguj za pomocą klawiatury i ciągle przypisuj właściwości.

## Nawigacja {#navigation}
- **Minimapa** — Zmniejszony widok całego grafu do szybkiej nawigacji po dużych scenach.
- **Drzewo scen** — Boczny panel wyświetlający wszystkie sceny projektu.
- **Tryb folderów** — Wizualizuje sceny jako połączone karty dla przeglądu projektu.

## Eksport {#export}
Blueprinty eksportują się do formatów silników gier z wyborem celu dla sceny, metadanymi i identyfikatorami postaci.
System automatycznie generuje **typizowane klasy interfejsów** dla:
- **TypeScript** / JavaScript
- **C#** (.NET, Unity, Godot Mono)
- **C++** (Unreal Engine, niestandardowe silniki)
- **GDScript** (Godot 4)

Konwencje nazewnictwa są konfigurowalne zgodnie z Twoim projektem.
