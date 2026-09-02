---
title: "Metadane"
description: "Okno Metadanych pozwala na dodawanie dodatkowych informacji do klucza, które są dostępne dla tego klucza i jego dzieci."
section: interface
outline: [2, 3]
---

# Metadane

Okno Metadanych pozwala na dodawanie dodatkowych informacji do klucza, które są dostępne dla tego klucza i jego dzieci.

## Dlaczego warto używać metadanych? {#why-use-metas}
Podczas wykonywania zadań, te informacje są integrowane z zapytaniami LLM.
Wprowadzone informacje mogą być również przeglądane w dowolnym momencie w wizualizatorze metadanych.
Widok jest rekurencyjny, od góry do dołu, od aktywnego klucza aż do korzenia przestrzeni nazw projektu.

::: tip Uwaga
Twój projekt źródłowy nie powinien być zależny od metadanych. Mają one wyłącznie charakter informacyjny i powinny wpływać jedynie na redagowanie i refleksję.
:::

**Te informacje mogą oferować pewne korzyści:**
- Pomóc tłumaczom/redaktorom w zrozumieniu kontekstu.
- Wizualizować informacje rekurencyjnie, począwszy od pokrewieństwa klucza.
- Dodawać odpowiednie informacje do LLM w celu przetwarzania klucza lub sąsiadujących kluczy.

::: tip Uwaga
Dla klucza w tym samym folderze, LLM również czytają sąsiednie klucze, aby zrozumieć przepływ narracji.
:::
- Dostosowywać ikonę i kolor w drzewie kluczy dla lepszej identyfikacji.
- Dodawać obrazy w celu wizualnego kontekstualizowania dialogu.
- Aktywować/dezaktywować zmienne używane przez LLM.

---

## Interfejs metadanych {#metas-interface}
<DocImage src="/doc/lsde/doc-lsde-ui-metadata.webp" />

0. **Rekursje**
Ogranicza zakres pobieranych informacji, od aktywnego klucza do jego rodziców hierarchicznych.
1. **Opisy (LLM)**
Informacja brana pod uwagę, gdy klucz jest wysyłany do LLM. Kontekstualizuje przynależność klucza, jego otoczenie i rolę jego dzieci.
2. **Dozwolone zmienne**
Pozwala na dodawanie zmiennych do przetwarzania przez LLM w celu optymalizacji ich zadań. Na przykład, zezwól na zmienne postaci i poproś LLM, aby tylko te postacie znajdowały się w folderze misji. Dodatkowe postacie mogą zostać ponownie przypisane/usunięte przez LLM lub użyte do stworzenia dodatkowych interakcji.
3. **Zmienne głosowe**
Przypisz tutaj rozmówców, jeśli grupa zmiennych głosowych jest skonfigurowana.

::: tip Uwaga
LLM mogą również używać ich priorytetowo do sprawdzania dialogów.
:::
4. **Notatki użytkownika**
Zapisuj tutaj notatki i przypomnienia dla kompozytorów, tłumaczy lub dla siebie.

::: tip Uwaga
LLM nie mają do nich dostępu. Ponieważ notatki są zintegrowane z plikiem .lsde, unikaj w nich wrażliwych informacji, jeśli są udostępniane lub wersjonowane za pomocą Git.
:::
5. **Obrazy**
Wyświetlaj obrazy, aby kontekstualizować folder lub klucz. Bardzo przydatne dla tłumacza bez dostępu do kodu źródłowego lub podglądu.

::: tip Uwaga
Obrazy są kompresowane i degradowane w pliku .lsde, aby ułatwić udostępnianie.
:::
6. **Pokrewieństwo**
Te sekcje wyświetlają rekurencyjnie informacje o rodzicach, od góry do dołu.
7. **Edytuj**
Ten przycisk aktywuje tryb edycji metadanych.

::: tip Uwaga
Domyślnie metadane są tylko do odczytu.
:::
8. **Akcje edycji**
W trybie edycji anuluj lub zastosuj zmiany. Każda zmiana klucza w trybie edycji automatycznie zapisuje poprzedni klucz.
9. **Filtr zmiennych**
To pole filtruje grupy zmiennych do aktywacji, podkreślając znaczenie **dobrej początkowej organizacji zmiennych**.

---
