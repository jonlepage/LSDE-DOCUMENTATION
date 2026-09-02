---
title: "Konfiguracja projektu"
description: "Okno konfiguracji projektu w LSDE pozwala dostosować parametry specyficzne dla aktualnie otwartego projektu."
section: interface
outline: [2, 3]
---

# Konfiguracja projektu

Okno konfiguracji projektu w LSDE pozwala dostosować parametry specyficzne dla aktualnie otwartego projektu.
Ustawienia te są uporządkowane w kilku sekcjach.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-prompt.webp" />

## Dyrektywa LLM {#llm-directive}
Ta sekcja pozwala tworzyć niestandardowe zadania dla LLM, dopasowane do Twojego projektu.
Chociaż LSDE oferuje domyślne zadania, możesz zdefiniować własne, aby precyzyjnie odpowiadać na Twoje potrzeby.
Będziesz miał dostęp do następujących pól:
1.  **Nowy prompt**
    Dodaj nowe prompty do projektu.
2.  **Etykieta i opisy**:
    -   Wprowadź nazwę zadania (ta etykieta może wpływać na LLM).
    -   Dodaj notatkę objaśniającą, widoczną tylko dla Ciebie i niewysyłaną do LLM.
3.  **Treść promptu**:
    W tym miejscu wpisz dyrektywę, która zostanie wysłana do LLM w celu wykonania zadania.
4.  **Telemetria**:
    Wyświetla informacje o liczbie słów i szacunkowy koszt tokenów promptu.
5.  **Aktywacja**
    Aktywuj lub dezaktywuj zadanie w dowolnym momencie, bez jego usuwania.

::: tip Uwaga
Pamiętaj, że LLM zawsze otrzymują dyrektywy zadaniowe z predefiniowanym kontekstem i zasadami. Opcje doprecyzowania tych elementów zostaną przedstawione w dalszej części.
:::

---

## Zmienne {#variables}
Menedżer zmiennych to potężny system zaprojektowany do interakcji z LLM, jednocześnie optymalizując Twoją produktywność i ułatwiając tłumaczenie oraz pisanie dialogów.

### Dlaczego ich używać? {#why-use-variable}
-   Są szczególnie przydatne w projektach gier wideo o złożonych wymaganiach narracyjnych, takich jak JRPG.
-   Mogą zawierać wiele informacji do wyświetlania spersonalizowanych podpowiedzi, wyróżniania słów kluczowych i wielu innych.
-   Stanowią niezbędną podstawę do optymalizacji Twojego przepływu pracy w LSDE.

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-variable.webp" />

Aby utworzyć zmienną, zacznij od wybrania jej kategorii.

::: tip Uwaga
Jeśli kategoria nie istnieje, musisz ją najpierw utworzyć (np.: Aktorzy, Obiekty, HTML itp.).
:::

Po utworzeniu zmienna pojawia się na liście w formie rozwijanego bloku. Rozwiń go, aby uzyskać dostęp do pełnego interfejsu konfiguracji.

### Interfejs {#interface}
1.  **Grupa lub kategoria zmiennych**
    Twórz i wybieraj grupę zmiennych.
    > Kliknięcie prawym przyciskiem myszy na grupę umożliwia jej usunięcie, wraz ze wszystkimi zawartymi w niej zmiennymi.
2.  **Utwórz zmienną**
    Po wybraniu grupy, użyj tego przycisku, aby utworzyć w niej nową zmienną.
3.  **Edytuj zmienną**
    Zmienne są wyświetlane w kontenerach, z szybkimi akcjami w nagłówku do:
    -   Aktywacji/dezaktywacji zmiennej.
    -   Zmiany kolejności poprzez przeciąganie i upuszczanie.
    -   Nadania jej etykiety (używanej w podpowiedziach i opcjach).
    -   Zmiany jej grupy.
    -   Usunięcia jej.
4.  **Tagi/Wyrażenia regularne**
    Wprowadź słowa kluczowe (tagi) lub wyrażenie regularne (regex), które pozwolą systemowi zidentyfikować tę zmienną.
    > Na przykład, wzorzec przechwytywania tekstu będzie opierał się na tych tagach lub regexie, aby znaleźć dopasowanie.
5.  **Przełącz na wyrażenie regularne**
    Domyślny tryb używa słów kluczowych (tagów). Aktywuj ten tryb, aby użyć wyrażenia regularnego, oferując większą elastyczność i dynamikę.
    > Przykład: `/actor\\d+/` pozwala uniknąć ręcznego definiowania tagów „actor1”, „actor2”, „actor11” itd.

### Opisy {#descriptions}
6.  **Notatka**
    Napisz notatkę dla użytkownika, która będzie wyświetlana w podpowiedziach, ale nie będzie wysyłana do LLM.
    > Unikaj opisywania wrażliwych treści, jeśli wersjonujesz projekt, ponieważ te notatki są zapisywane w plikach `.lsde`.
7.  **Opisy**
    Ten opis dostarcza dyrektyw dla LLM, gdy zmienna jest uwzględniona w kontekście zapytania.
    > Można tu opisać osobowość postaci, elementy świata, a także zasady formatowania (Markdown, JSX, HTML...).

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-variable-emoji.webp" />

### Wygląd {#appearance}
Ta sekcja pozwala powiązać elementy wizualne ze zmienną, ułatwiając jej rozpoznawanie w interfejsie dla artystów, tłumaczy i scenarzystów.
8.  **Ikona renderowania**
    Powiąż ikonę (obraz lub emoji), która będzie reprezentować zmienną w edytorach i menu.
9.  **Obraz podpowiedzi**
    Dodaj większy obraz, wyświetlany w podpowiedziach, aby zapewnić użytkownikowi lepszy kontekst wizualny.
    > Obrazy są automatycznie kompresowane i zapisywane z projektem, aby ułatwić udostępnianie.
10. **Kolorystyka**
    Zdefiniuj kolor tekstu i tła. Te kolory będą miały priorytet, jeśli zmienna jest powiązana ze wzorcem lub innym elementem wizualnym.

### Dodatkowe informacje {#additional-info}
Ta sekcja grupuje dodatkowe opcje projektowania podpowiedzi, a także parametry parowania z wyzwalaczami sugestii.
11. **Dekoracje**
    Dodaj opcjonalne informacje, które zostaną wyświetlone w sekcji dekoracji podpowiedzi.
12. **Link zewnętrzny**
    Wstaw link zewnętrzny do podpowiedzi, który otworzy się w Twojej domyślnej przeglądarce.
13. **Etykieta głosowa**
    Zmień nazwę zmiennej, gdy jest powiązana z głosem. Domyślnie używana jest jej etykieta, w przeciwnym razie jej UUID.
14. **Powiąż z sugestiami**
    Pozwala uwzględnić zmienną w wyzwalaczach sugestii podczas wpisywania.
    > Jako sugestie będą używane tagi zmiennej.
15. **Telemetria**
    Wyświetla statystyki dotyczące użycia zmiennej w projekcie.

---

## Wzorce {#patterns}
<DocImage src="/doc/lsde/doc-lsde-ui-psetting-pattern.webp" />

Wzorce pozwalają LSDE przechwytywać specyficzne fragmenty tekstu w dialogach. Opierając się na wyrażeniach regularnych, ten system oferuje dużą elastyczność w formatowaniu i przetwarzaniu Twoich dialogów.
[Dowiedz się więcej o wzorcach i renderowaniu tutaj](/pl/features/rendering)

### Interfejs {#interface-2}
1.  **Utwórz wzorzec/szablon**
    Utwórz nowy wzorzec, albo z predefiniowanego szablonu, albo od zera.
2.  **Referencja wewnętrzna**
    Zdefiniuj wzorzec, aby odwoływał się do innych kluczy projektu (mechanizm „nesting”), jeśli Twój silnik gry lub framework to obsługuje.
    Na przykład, jeśli używasz [„nestingu” i18next](https://www.i18next.com/translation-function/nesting).
3.  **Wyrażenie regularne**
    Wprowadź swoje wyrażenie regularne. Nie ma potrzeby unikania nawiasów klamrowych `{}`.
4.  **Dodaj dekoratory**
    Dodaj dodatkowe dekoratory oprócz początkowego przechwytywania, a następnie powiąż je z grupami przechwytywania Twojego wyrażenia regularnego.
5.  **Dekorator początkowy**
    Dekorator początkowy definiuje renderowanie tekstu przechwyconego przez wyrażenie regularne w edytorze.
    > Początkowe dekoratory muszą być typu „inline” i nie mogą być „widgetami”.
6.  **Grupa i typ**
    Przypisz grupę przechwytywania i żądany typ renderowania dla dodatkowych dekoratorów.
    [Więcej szczegółów tutaj](/pl/features/rendering#what-is-decorator)

---

## Konteksty {#contexts}
<DocImage src="/doc/lsde/doc-lsde-ui-psetting-context.webp" />

Ta sekcja pozwala zdefiniować reguły zarządzania różnymi kontekstami, takimi jak liczby mnogie lub rodzaje.

Kontekst jest identyfikowany przez sufiks dodany na końcu klucza (np. `key_plural`). LSDE zarządza tymi wariantami w taki sposób, abyś mógł je stopniowo integrować ze swoim projektem, bez konieczności modyfikowania istniejącego kodu źródłowego.

Możesz więc obsługiwać konteksty tylko wtedy, gdy jest to konieczne, bez zmieniania projektu.

### Interfejs {#interface-3}
1.  **Etykietowanie**
    Zdefiniuj ID, etykietę i separator kontekstu.
    Na przykład, aby zarządzać liczbami mnogimi z i18next:
    `name_space.folder.key_context`
    stałoby się:
    `game.common.welcome-to-my-shop_one`
    `game.common.welcome-to-my-shop_many`
    `game.common.welcome-to-my-shop_other`
    Więcej informacji o [liczbách mnogich i18n z i18next](https://www.i18next.com/translation-function/plurals)
2.  **Tagi**
    Zdefiniuj sufiksy (tagi), które będą używane do identyfikacji każdej wariantu kontekstu.
3.  **Opis (LLM)**
    W tym miejscu napisz opis, który zostanie wysłany do LLM, gdy będzie przetwarzał klucz używający tego kontekstu.
4.  **Separator**
    Wybierz znak używany jako separator kontekstu.
    > Kropki nie są dozwolone.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-codeview.webp" />

## Podgląd kodu {#codeview}
Ta sekcja służy do konfiguracji modułu analizy Twojego kodu źródłowego (codebase). Moduł ten skanuje Twoje pliki w celu automatycznego wyodrębnienia kluczy tłumaczeniowych, ich kontekstów i wartości domyślnych.
Aby wyrażenie regularne było poprawne, musi zawierać co najmniej jedną grupę przechwytywania przypisaną do klucza.
Sprawdź [sekcję zaawansowaną tutaj](/pl/features/scanning).

### Interfejs {#interface-4}
1.  **Ścieżka do codebase Twojego projektu**
    Wskaż ścieżkę do głównego folderu Twojego projektu, zawierającego pliki źródłowe, które używają kluczy tłumaczeniowych.
2.  **Wykluczenia**
    Określ foldery i pliki do wykluczenia z analizy w celu optymalizacji wydajności.
    > Oddziel wpisy przecinkami. Używaj pełnych nazw folderów lub nazw plików (z rozszerzeniem).

### Wzorzec {#pattern}
Zarządzaj tutaj listą swoich wzorców przechwytywania, prezentowanych w rozwijanych blokach.
3.  **Notatka/Etykieta**
    Etykieta lub notatka ułatwiająca identyfikację wzorca i jego roli.
4.  **Wyrażenie regularne**
    Wstaw lub zmodyfikuj swoje wyrażenie regularne. Liczba wykrytych grup przechwytywania jest wyświetlana poniżej.
5.  **Przestrzeń nazw**
    Powiąż grupę przechwytywania, która odpowiada przestrzeni nazw (namespace) Twoich kluczy (opcjonalnie).
    > Automatycznie sugeruje właściwą przestrzeń nazw podczas tworzenia kluczy.
6.  **Klucz**
    Powiąż grupę przechwytywania, która odpowiada samemu kluczowi (bez przestrzeni nazw).
    > Klucze nie powinny zawierać przestrzeni nazw; użyj dedykowanego pola w tym celu.
7.  **Tekst domyślny**
    Powiąż grupę przechwytywania, która odpowiada tekstowi domyślnemu.
    > W projektach oprogramowania deweloperzy często wstawiają tekst domyślny dla szybkiego podglądu UI/UX.
8.  **Kontekst**
    Powiąż grupę przechwytywania, która odpowiada kontekstowi (np. liczbie mnogiej).

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-codeview-templates.webp" left />

### Szablony {#templates}
Podczas tworzenia wzorca możesz wybierać spośród predefiniowanych szablonów.
Służą one jako punkt wyjścia, aby uniknąć pisania wyrażenia regularnego od zera lub aby pomóc w jego budowie.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-generator.webp" />

## Generator {#generator}
Ta sekcja pozwala skonfigurować automatyczne generowanie pliku zawierającego Twoje klucze, w formacie dostosowanym do Twojego projektu.
Jest to przydatne, na przykład, do tworzenia `enum` TypeScript z Twoich kluczy.

1.  Nazwa klasy, która wyeksportuje klucze.
2.  Nazwa wygenerowanego pliku.
3.  Folder docelowy dla wyeksportowanego pliku.
4.  Język generowanych komentarzy JSDOC.
5.  Maksymalna długość komentarzy JSDOC.
6.  Znak zastępczy dla kropek (`.`).
    > W JS/TS kropki nie są dozwolone w nazwach kluczy; konwerter automatycznie utworzy literały stringowe jako klucze.
7.  Uwzględnij przestrzeń nazw w generowanych kluczach.
8.  Uwzględnij klucze kontekstowe (z sufiksami).
    > Zazwyczaj nie ma potrzeby uwzględniania tych kluczy, ponieważ ich zarządzanie jest zapewnione przez Twój framework do internacjonalizacji.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-voice.webp" />

## Głosy {#voices}
Sekcja Głosy pozwala skonfigurować generator głosu dla Twoich dialogów.
Opierając się na postępach technologii LLM i TTS (Text-to-Speech), ta funkcja umożliwia tworzenie syntetycznych głosów poprzez kontrolowanie tonacji, intonacji i emocji.
Głosy te mogą następnie zostać zintegrowane z Twoim silnikiem gry, oferując immersyjną narrację audio za ułamek kosztów tradycyjnego nagrania studyjnego.

::: tip Uwaga
Chociaż ta technologia wciąż się rozwija, oferuje niezależnym twórcom wspaniałą okazję do wyróżnienia się i wzmocnienia immersji narracyjnej ich dzieł.
:::

[Dedykowana sekcja dotycząca integracji głosów w Twoim projekcie jest dostępna tutaj](/pl/features/voice).

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-suggestion.webp" />

## Sugestie {#suggestion}
Ta sekcja pozwala skonfigurować wyświetlanie menu sugestii.
Po wprowadzeniu kombinacji klawiszy (wyzwalacza) w edytorze pojawia się menu kontekstowe. Może ono proponować zmienne (na podstawie ich tagów) lub klucze tłumaczeniowe (jeśli wyzwalacz jest powiązany z odwołaniami wewnętrznymi).

1.  **Sugestie kluczy**
    Zdefiniuj wyzwalacz, aby wyświetlić wszystkie klucze projektu.
    > Przydatne w projektach wykorzystujących wewnętrzne słowniki i odwołania krzyżowe.
2.  **Warunki**
    Wybierz klawisz modyfikujący (np. Ctrl, Alt) dla wyzwalacza (opcjonalnie).
3.  **Litera**
    Określ literę lub symbol, który w połączeniu z klawiszem modyfikującym aktywuje sugestie.
4.  **Etykieta**
    Nazwa ułatwiająca identyfikację tego wyzwalacza w interfejsie.
5.  **Afiksy**
    -   **Prefiks**: Treść do dodania przed wyborem użytkownika.
    -   **Sufiks**: Treść do dodania po wyborze użytkownika.
