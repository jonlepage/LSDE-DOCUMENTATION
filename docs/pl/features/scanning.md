---
title: "Skanowanie"
description: "W Twoim projekcie „LSDE” konfiguracja skanera bazy kodu odbywa się poprzez sekcję Wzorców."
section: features
outline: [2, 3]
---

# Skanowanie

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-1.webp" left />

W Twoim projekcie „LSDE” konfiguracja skanera bazy kodu odbywa się poprzez [sekcję Wzorców](/pl/interface/project-settings#patterns).

## Utwórz wzorzec {#create-pattern}
Po utworzeniu nowej instancji wzorca (początkowo pustej, na przykład):
1. Wprowadź wyrażenie regularne (*Regex*), które posłuży do przechwytywania grup w Twojej bazie kodu.
2. Koniecznie musisz uzupełnić tę sekcję, wskazując grupę, która przechwytuje Twój klucz 'i18n'.

::: tip Uwaga
Musisz mieć co najmniej 1 grupę przechwytującą. [Dowiedz się więcej o grupach regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-2.webp" />

### Wyświetl klucze i18n {#see-i18n-keys}
Po utworzeniu „Regex” synchronizacja wyników odbywa się w czasie rzeczywistym.
1. Otwórz okno skanera kodu, aby obserwować jego wyniki w czasie rzeczywistym.

Jeśli żaden klucz nie jest wybrany w drzewie, żaden filtr nie zostanie zastosowany, a skaner wyświetli wszystkie wyniki.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-3.webp" />

Natomiast jeśli wybierzesz klucz:
System odfiltruje niepowiązane klucze nadrzędne i sąsiednie.
Dzięki hierarchicznemu propagowaniu, zaznaczenie folderu skutkuje wyświetleniem wszystkich jego kluczy podrzędnych.
Przykład:
Wybór folderu:
`A.B.C`
Wszystkie klucze zawierające co najmniej tę grupę zostaną również wyświetlone:
`A.B.C.d`
`A.B.C.d.e.f`

1. Aby wyświetlić przechwycone klucze, których „LSDE” nie jest w stanie powiązać (brakujące klucze), zaznacz tę opcję. Umożliwia ona również filtrowanie istniejących kluczy.

::: tip Uwaga
Jeśli ta opcja jest wyłączona, „LSDE” wyświetla brakujące klucze znalezione w Twoim kodzie źródłowym, zmieszane z istniejącymi kluczami.
:::

---

## Testuj swój wzorzec {#test-pattern}
<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-5.webp" />

Aby sprawdzić, czy Twój wzorzec działa zgodnie z oczekiwaniami, otwórz zakładkę „Test”. Wklej tam kod źródłowy swojego projektu, aby obserwować wykonane przechwytywania.

### Zrozum swój Regex {#understand-regex}
Aby zrozumieć swój „Regex” i jego grupy, użyj narzędzia takiego jak [regexr](https://regexr.com).
1. Skopiuj i wklej swój „Regex” w odpowiednie miejsce.
```text
[^\\\\\\\\w_\\\\\\\\-\\\\\\\\$]t\\\\\\\\(\\\\\\\\s*(?:['\\\\\\])?(?:([^\\\\\\\\s:'\\\\\\)]+):)?([^\\\\\\\\s'\\\\\\),]+)(?:['\\\\\\])?\\\\\\\\s*(?:,\\\\\\\\s*(\\\\\\\\{[\\\\\\\\s\\\\\\\\S]*?(?:defaultValue\\\\\\\\s*:\\\\\\\\s*(['\\\\\\`])((?:\\\\\\\\\\\\\\\\.|(?!\\\\\\\\4)[\\\\\\\\s\\\\\\\\S])*?)\\\\\\\\4)[\\\\\\\\s\\\\\\\\S]*?\\\\\\\\}|\\\\\\\\{[\\\\\\\\s\\\\\\\\S]*?\\\\\\\\})\\\\\\\\s*)?\\\\\\\\)
```
2. Wklej kod źródłowy swojego projektu zawierający klucze do przechwycenia (pochodzące z Twojego frameworka lub silnika tekstowego).
3. Kliknij na przechwycenie, aby je aktywować.
4. Następnie wybierz „Détail” (Szczegóły).
5. Zidentyfikuj indeks grupy, w której Twój „Regex” umieszcza pożądane przechwycenie.

Z tym „Regexem” zauważysz, że przechwytuje on Twój klucz w grupie 2. Będziesz musiał wtedy wskazać „LSDE”, że klucz znajduje się w tej grupie, jak pokazano na poprzednim obrazku.
System będzie mógł następnie wykonać ten „Regex” i użyć tego przechwycenia do różnych usług telemetrycznych.
