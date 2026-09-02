---
title: "Edytor dialogów"
description: "Ta sekcja przedstawia renderowaną zawartość kluczy. Edytor organizuje wybrany klucz pionowo i rekurencyjnie, wyświetlając jego zawartość we wszystkich…"
section: interface
outline: [2, 3]
---

# Edytor dialogów

Ta sekcja przedstawia renderowaną zawartość kluczy. Edytor organizuje wybrany klucz pionowo i rekurencyjnie, wyświetlając jego zawartość we wszystkich językach, jego konteksty i klucze podrzędne.
Oferuje opcje nawigacji i renderowania do filtrowania języków i kontekstów, a także narzędzia do działań i telemetrii.

## System Renderowania {#rendering-system}
LSDE posiada system renderowania „post-processing”, aby dostosować wyświetlanie tekstu, ułatwiając w ten sposób czytanie i pisanie.
Skonfiguruj wzorce Regex, aby przechwytywać grupy tekstu i przypisywać im dekoracje.
Te przechwycone dane mogą być powiązane ze zmiennymi, aby dostarczyć dodatkowych informacji tłumaczowi, redaktorowi lub LLM.
[Przejdź do zaawansowanej sekcji dotyczącej renderowania i tworzenia wzorców](/pl/features/rendering)

<DocImage src="/doc/lsde/doc-lsde-ui-editor.webp" />

## Narzędzia nagłówka {#header-tools}
1. **Włącz/Wyłącz post-rendering**
Szybko wyłącza renderowanie wzorców.
2. **Nawigacja**
Przyciski do szybkiej nawigacji między następnym i poprzednim kluczem.
3. **Utwórz klucz**
Szybko tworzy nowy klucz.
4. **Pokaż/Ukryj konteksty**
Pokazuje lub ukrywa konteksty powiązane z kluczem, aby uprościć widok.
Każda ikona odpowiada etykiecie skonfigurowanych kontekstów.
5. **Pokaż/Ukryj języki**
Filtruje języki, aby pracować jednocześnie.

::: tip Uwaga
Filtry te są również używane przez LSDE do innych operacji systemowych, wpływając tym samym na inne narzędzia diagnostyczne.
:::

## Obszary edycji {#editing-zones}
Ten obszar wyświetla tekst aktywnych języków i bieżące zadania dla klucza.
6. **Wybierz klucz w drzewie**
Lokalizuje i wybiera klucz w drzewie.

::: tip Uwaga
Przydatne do edycji metadanych, możliwe tylko dla aktywnego klucza.
:::
7. **Zadania**
Menu oferuje zadania możliwe do zastosowania dla tego klucza, jego powiązań i kluczy podrzędnych.
8. **Zabezpiecz**
Zaznacz to pole, aby oznaczyć tekst jako ostateczny i chroniony, ignorując w ten sposób niektóre zadania i operacje.
Wyłączenie tej opcji proponuje wyłączenie wszystkich walidacji innych języków powiązanych z tym kluczem.
0. **Klucz**
Wyświetla pełną ścieżkę klucza, **w formacie LSDE**

## Szukaj/Zastąp {#search-replace}
8. **Szukaj/zastąp**
[CTRL+F] otwiera wewnętrzne narzędzie wyszukiwania.
Oferuje tryb Regex dla złożonych przypadków.
Wyszukiwanie można również uruchomić z menu kontekstowego.

## Wydajność {#performance}
Domyślnie LSDE wyłącza złożone renderowanie (widżety) w nieaktywnych oknach.
Zapewnia to dobry kompromis między wrażeniami wizualnymi a niskimi opóźnieniami.
Jeśli wydajność nie stanowi problemu, wyłącz tę optymalizację w konfiguracjach globalnych.

::: tip Uwaga
Może zużywać zasoby, jeśli jednocześnie wyświetlanych jest kilka języków, ponieważ system renderowania jest segmentowany według klucza.
:::
