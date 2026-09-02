---
title: "Skaner kodu"
description: "Moduł skaner kodu umożliwia skanowanie zewnętrznego projektu powiązanego z LSDE."
section: interface
outline: [2, 3]
---

# Skaner kodu

Moduł **skaner kodu** umożliwia skanowanie zewnętrznego projektu powiązanego z LSDE.
Dołączając projekt, wizualizujesz wszystkie klucze (istniejące lub potencjalne) w swoim kodzie źródłowym.
Ułatwia to ich identyfikację, tworzenie lub dodawanie do drzewa kluczy.
Moduł wyświetla również wszystkie wystąpienia kluczy już istniejących w Twojej bazie kodu.

## Jak to działa? {#how-it-works}
Skaner opiera się na **wzorcach Regex** [skonfigurowanych w ustawieniach](/pl/interface/project-settings#codeview)
Identyfikuje klucze za pomocą grup przechwytujących i wyświetla je jako instancje, klasyfikowane według plików, w zależności od kluczy znalezionych w Twoim kodzie.
Aby uruchomić wyszukiwanie w Twojej bazie kodu, wybierz klucz (folder lub plik); to zaznaczenie służy jako filtr początkowy.

Na przykład, wybranie klucza `namespace.a.b.c` wyświetli tylko dopasowania z tym prefiksem (np. `namespace.a.b.c.d.e`, ale nie `namespace.a.b.x.d.e`).
Aby wyświetlić wszystkie klucze projektu, odznacz wszystkie aktywne klucze lub, jeśli projekt ma tylko jedną przestrzeń nazw, wybierz główną przestrzeń nazw.

## Obsługiwane języki? {#supported-languages}
Nie ma żadnych wewnętrznych ograniczeń dotyczących obsługiwanych języków programowania.
Po prostu stwórz odpowiednie `Regex` do przechwytywania kluczy, niezależnie od języka.
[Konfiguracja ustawień](/pl/interface/project-settings#codeview) pozwala zdefiniować, w jaki sposób LSDE będzie wyszukiwać klucze tłumaczeń.
[Kompletna sekcja samouczka](/pl/features/scanning) przeprowadzi Cię przez konfigurację projektu LSDE, która wymaga `Regex` z **co najmniej 1 grupą przechwytującą** przypisaną do interpolatora „klucz”.

## Interfejs {#interface}
Dostępnych jest kilka narzędzi i konfiguracji do manipulowania wynikami skanera.

<DocImage src="/doc/lsde/doc-lsde-ui-codeview.webp" />

1. **Otwórz/Zamknij wszystkie pliki**:
Otwiera lub zamyka wszystkie znalezione sekcje referencyjne.

::: tip Uwaga
Może to negatywnie wpłynąć na wydajność, jeśli wszystkie instancje są otwarte w bardzo dużym projekcie.
:::
2. **Kopiuj do formatu JSON**:
Kopiuje wyniki w formacie JSON do schowka, co jest idealne dla zewnętrznego LLM (np. IDE) do tworzenia lub weryfikowania kluczy.
**Przykład:**
```json
[
{
\"file\": \"\\\\scr\\\\folder\\\\file1. tsx\",
\"lines\": [
213
]
}
]
```

::: tip Uwaga
Wklej [CTRL]+[V] ten wynik do zapytania, aby na przykład znaleźć inne podobne klucze, które LSDE mógłby wykryć.
:::
3. **Ogranicznik kodu**:
Dostosowuje ilość kodu wyświetlanego wokół klucza dla zwiększonego kontekstu, bez otwierania IDE.
4. **Motyw**:
Pozwala wybrać motyw zbliżony do motywu Twojego kodu źródłowego, dla lepszej wizualnej znajomości.
5. **Tryb RAW**:
Aktywuje Regex dedykowane do wyszukiwania kodu **RAW**.
Przechwytują one surowy tekst, który potencjalnie może być konwertowany lub hermetyzowany w Twoim systemie kluczy.
Kliknij dwukrotnie wyniki, aby uzyskać do nich dostęp i hermetyzować te teksty do tłumaczenia, udostępniając je skanerowi w trybie „Brakujący klucz”.
6. **Tryb Brakujący klucz**:
Wyświetla tylko brakujące klucze.
Pozwala na ich tworzenie w partii (poprzez zaznaczenie) lub indywidualnie (prawy przycisk myszy).
7. **Filtruj klucze z kontekstem**:
Pozwala filtrować klucze kontekstowe, często wymagające szczególnej uwagi lub dalszego przetwarzania.

::: tip Uwaga
Działa, jeśli pole \\context\\ jest wypełnione w [konfiguracji Twojego Regex](/pl/interface/project-settings#codeview).
:::
8. **Filtruj klucze dynamiczne**:
Wyklucza klucze dynamiczne, często złożone i czasem nieuniknione, dla oddzielnego przetwarzania. LSDE zarządza ich tworzeniem za pomocą dedykowanego okna dialogowego.

::: tip Uwaga
Działa, jeśli Regex \\klucz dynamiczny\\ jest wypełniony w [konfiguracji skanera](/pl/interface/project-settings#codeview).
:::
9. **Pokaż ignorowane**:
Wyświetla ignorowane klucze w trybie tworzenia (np. fałszywe pozytywy trudne do wykluczenia za pomocą Twoich Regex), jeśli to konieczne.

## Integracja z Twoim IDE {#coupling-to-your-ide}
Po skonfigurowaniu, dwukrotne kliknięcie klucza w sekcji kodu otwiera Twoje IDE bezpośrednio w odpowiednim miejscu.
Pozwala to na dalsze badanie kontekstu lub wprowadzanie zmian w Twojej bazie kodu w razie potrzeby.
