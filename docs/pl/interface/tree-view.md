---
title: "Drzewo kluczy"
description: "Interfejs LSDE zapewnia jasny i uporządkowany przegląd wszystkich kluczy tłumaczeń w Twoim projekcie."
section: interface
outline: [2, 3]
---

# Drzewo kluczy

Interfejs LSDE zapewnia jasny i uporządkowany przegląd wszystkich kluczy tłumaczeń w Twoim projekcie. Zaprojektowany, aby uprościć ich zarządzanie, automatycznie dostosowuje klucze – niezależnie od tego, czy są zaimportowane, czy nowo utworzone – do swojego zoptymalizowanego formatu wewnętrznego, a następnie zwraca je w specyficznym dla Twojego projektu formacie, zapewniając tym samym doskonałą kompatybilność i integrację.

::: tip Uwaga
Dzięki temu plik projektu `.lsde` może być udostępniany i pobierany w całości.
:::

Weźmy na przykład `name_space.folderA.folderB.folderC.fileABC` :
- Ścieżki kluczy są strukturyzowane hierarchicznie, z kropkami jako separatorami. Ta konwencja, podobna do tej w i18next, ułatwia nawigację i identyfikację lokalizacji oraz folderu każdego klucza. Warto zauważyć, że i18next domyślnie używa `name_space:folderA.folderB.folderC.fileABC`.
- Pierwszy segment każdej ścieżki (przed pierwszą kropką) definiuje przestrzeń nazw (namespace). Należy podkreślić, że ta przestrzeń nazw jest **niezmienna** w obrębie drzewa.

::: tip Uwaga
W przypadku jakiejkolwiek modyfikacji przestrzeni nazw, będziesz musiał użyć interfejsu przeznaczonego do zarządzania językami. To scentralizowane podejście zapewnia integralność Twoich tłumaczeń.
:::

Przyjrzyjmy się teraz szczegółowo różnym sekcjom i funkcjonalnościom interfejsu drzewa kluczy.

<DocImage src="/doc/lsde/doc-lsde-ui-tree.webp" />

## Działania w nagłówku {#header-actions}
1. **Pokaż/Ukryj osierocone klucze.**
Ta opcja jest kluczowa dla utrzymania czystości i trafności Twoich tłumaczeń. Umożliwia szybkie zidentyfikowanie kluczy obecnych w drzewie, ale brakujących w kodzie źródłowym Twojego zewnętrznego projektu, ułatwiając tym samym wykrycie przestarzałych lub nieużywanych kluczy w celu ich potencjalnego oczyszczenia lub przeniesienia.
2. **Pokaż/Ukryj niekompletne klucze.**
Ta funkcja wyróżnia wszystkie klucze, dla których brakuje tłumaczeń w jednym lub więcej językach.

::: tip Uwaga
**Ważna uwaga:** Skaner kluczy LSDE analizuje tylko języki aktywowane w oknie edytora. Języki dezaktywowane są wykluczone z procesu analizy, co pozwala skupić weryfikację na językach aktywnych.
:::

3. **Utwórz plik lub folder.**
Oprócz menu kontekstowego (prawy przycisk myszy), ta funkcja umożliwia ręczne tworzenie nowych kluczy lub proaktywne organizowanie drzewa. LSDE obsługuje tworzenie folderów „wewnętrznych”, dając Ci możliwość logicznego strukturyzowania kluczy, w tym tworzenia pustych folderów na przyszłe tłumaczenia. Operacje te są wykonywane za pomocą intuicyjnego interaktywnego okna, które prowadzi Cię krok po kroku.

<DocImage src="/doc/lsde/doc-lsde-ui-createfolder.webp" left />

4. **Pole przestrzeni nazw.**
To pole wyświetla przestrzeń nazw (namespace), w której zostanie utworzony nowy klucz lub folder, gwarantując jego poprawne wstawienie do istniejącej hierarchii.
5. **Ścieżka klucza.**
To pole jest przeznaczone do wprowadzenia pełnej ścieżki klucza. System oferuje pomoc na żywo i natychmiast ostrzega, jeśli ścieżka nie spełnia zasad formatowania lub unikalności, pomagając w ten sposób uniknąć błędów.
6. **Przenieś zaznaczone elementy.**
Szczególnie przydatna przy tworzeniu nowego folderu, ta opcja umożliwia jednoczesne przeniesienie zaznaczonych elementów z drzewa do nowego katalogu. Optymalizuje to Twój przepływ pracy i ułatwia reorganizację kluczy.
7. **Pokaż/Ukryj klucze z trwającymi zadaniami.**
Aktywuj tę funkcję, aby szybko wizualizować klucze powiązane z aktywnymi zadaniami lub oczekujące na zatwierdzenie przez członka zespołu. Stanowi to cenne narzędzie do śledzenia postępu tłumaczeń i wspólnego zarządzania projektami.
8. **Rozwiń/Zwiń foldery.**
Ten przycisk oferuje dwa praktyczne tryby nawigacji po drzewie:
- rozwiń wszystkie foldery, aby uzyskać wyczerpujący przegląd
- lub zwiń je „do aktywnego zaznaczenia”, aby skupić się na konkretnej sekcji bez rozpraszania uwagi.
