---
title: "Dobra praktyka"
description: "LLM-y są bardziej efektywne niż ludzie w ochronie linków, a LSDE pozwala wykrywać problemy między różnymi wersjami językowymi."
section: resources
outline: [2, 3]
---

# Dobra praktyka

## DLA STRONY INTERNETOWEJ {#for-web}
- Użycie wzorców Markdown poprawia czytelność i ułatwia konserwację, zarówno dla tłumacza, jak i dla skryptów Twojej witryny, które będą z nich pobierać treść.
- W przypadku nazwanych kotwic na wielojęzycznej stronie internetowej, interesującym podejściem jest „na stałe zakodowanie” (hardcoding) linków z wykorzystaniem formatowania Markdown.
Np. dla znacznika `<h2/>` z kotwicą

## etykieta-w-bieżącym-języku {#static-anchor-id}
LLM-y są bardziej efektywne niż ludzie w ochronie linków, a LSDE pozwala wykrywać problemy między różnymi wersjami językowymi.
W ten sposób możesz udostępnić link, który będzie działał we wszystkich językach i używać LSDE do zarządzania zastępowaniem przestarzałej kotwicy.

---

## Niejasność kodu {#code-anti-pattern}
Unikaj niejasności podczas pracy z modelami zorientowanymi na dane.
Przykład:
**Zła praktyka:** Termin 'key' nie jest wystarczająco wyraźny i utrudnia jego wyszukiwanie.

```ts
const PRODUCTS: Product[] = [
	{
		id: 'fcf7o',
		logo: '/icons/fcf7o-icon-40.webp',
		label: 'FCF7O',
		key: 'game:fcf7o.words.game_title',
	},
	{
		id: 'lsde',
		logo: '/icons/lsde-icon-40.webp',
		label: 'LSDE',
		key: 'software:lsde.name',
	},
	{
		id: 'lsge',
		logo: '/icons/lsge.webp',
		label: 'LSGE',
		key: 'software:lsge.name',
	},
];
```

**Dobra praktyka:** Przyjmij jednolitą i spójną konwencję.
Termin *i18nKey* jest bardzo wyraźny i umożliwia precyzyjne wyszukiwanie tej wartości za pomocą wyrażeń regularnych (*Regex*).
```ts
const PRODUCTS: Product[] = [
	{
		id: 'fcf7o',
		logo: '/icons/fcf7o-icon-40.webp',
		label: 'FCF7O',
		i18nKey: 'game:fcf7o.words.game_title',
	},
	{
		id: 'lsde',
		logo: '/icons/lsde-icon-40.webp',
		label: 'LSDE',
		i18nKey: 'software:lsde.name',
	},
	{
		id: 'lsge',
		logo: '/icons/lsge.webp',
		label: 'LSGE',
		i18nKey: 'software:lsge.name',
	},
];
```

---

## Leniwość {#lazyness}
::: tip Uwaga
Złe pomysły rodzą się z lenistwa.
:::

Nie próbuj oszczędzać kluczy, wykonując operacje w celu pobrania treści.
Przykład:
```text
const [title, subtitle] = t( 'game:game.title' ).split( /[:：]/ );
```
To jest złudnie dobry pomysł, ponieważ w niektórych językach znaki mogą się różnić, a kolejność słów może ulec zmianie.

---

## Format tagów {#balise-format}
Zminimalizuj kod przeznaczony do projektowania bezpośrednio w tekście, aby móc nim sterować z poziomu bazy kodu.
Na przykład, możesz wskazać lokalizację obrazu, ale nie jego styl ani sposób renderowania.
Jeśli musisz wprowadzić zmiany w projekcie, nie chcesz być zmuszony do ponownego tłumaczenia tekstu na 10 języków tylko po to, aby zmienić styl tagu!

Tagi mogą zawierać identyfikator, ale dodawanie dodatkowych informacji jest zazwyczaj silnie odradzane i stanowi złą praktykę.
Przykład: Nie rób tak:
`<img src='url' left />`
ale raczej:
`<img id=1 />`
Następnie pobierzesz ID tagu obrazu, aby zastosować do niego niezbędne style w bazie kodu.
ID-y powinny być używane dosłownie, a nie za pośrednictwem ich indeksu.
W rzeczywistości, w różnych językach tagi mogą zostać przesunięte i nie odpowiadać już początkowemu indeksowi.
Użycie naturalnych indeksów wprowadza również złożoność dla programisty; próba odgadnięcia, któremu indeksowi odpowiada obraz lub tag, to prawdziwa łamigłówka.
Dlatego używaj tagów z identyfikatorem, jeśli chcesz je personalizować po interpolacji.

---

## CSS {#css}
W przypadku tłumaczenia strony internetowej, gdy masz paragrafy, zdecyduj się na minimalną wysokość (`min-height`) po przetłumaczeniu, aby uniknąć wizualnych przesunięć podczas zmian językowych.
Np. `mih={'3lh'}`
Pozwala to na ustawienie minimalnej wysokości opartej na języku, który zajmuje najwięcej linii, zapewniając spójne i stonowane doświadczenie użytkownika (UX).

## Przestrzeń nazw {#namespace}
- Zawsze dołączaj 'przestrzeń nazw' do swoich kluczy tłumaczeniowych, nawet jeśli masz tylko jedną.
To znacznie ułatwia ustawienie wzorca Regex do odnajdywania Twoich kluczy.
Np. `game:a.b.c`, `common:a.b.c`

---

## Zarządzanie wersjami GIT {#git}
Projekty `.lsde` to pliki w formacie `JSON`, co ułatwia ich wersjonowanie za pomocą narzędzi takich jak Git. 
Zdecydowanie zaleca się zapisywanie projektu w repozytorium Git, aby korzystać z pełnej historii zmian i zwiększonego bezpieczeństwa. 
Mimo że LSDE posiada własny system kopii zapasowych, użycie Git pozostaje optymalnym rozwiązaniem do zarządzania plikami danych.

---

## Kontekst i redagowanie treści {#content-writing}
- **Zapewnienie jasnego kontekstu dla każdego klucza**
Jednoznaczny kontekst może wynikać z nazwy klucza, jego ścieżki dostępu (hierarchii), jego sąsiedztwa (klucze nadrzędne/podrzędne) lub metadanych. 
Unikaj niejednoznacznych kluczy, które pozostawiają pole do domysłów. Jeśli zrozumienie klucza wymaga sprawdzenia jego zastosowania w kodzie, oznacza to, że architektura danych wymaga poprawy.

**Przykłady jasnych kluczy:**
`game:.scenes.001.events.001.1`
`game:.scenes.001.events.001.2`
`game:.scenes.the-ice-land.events.the-lost-house.1`
`game:.scenes.the-ice-land.events.the-lost-house.2`
`game:.ui.menus.new-game.label`
`game:.ui.menus.new-game.description`

Klucze te pozwalają natychmiast zrozumieć, że odnoszą się do dialogów lub elementów interfejsu.
- Pierwsze dwa wykorzystują numeryczne identyfikatory (IDs): to skuteczne podejście w grach akcji, gdzie kierunek artystyczny (DA) jest elastyczny i może ewoluować bez wpływu na strukturę techniczną.
- Kolejne dwa wykorzystują identyfikatory semantyczne: niezbędne w grach narracyjnych, gdzie treść jest ściśle powiązana z kodem. Zapobiega to naruszeniu spójności między narracją a logiką gry.
- Ostatnie dwa wyraźnie opisują elementy menu (label i description).

**Przykłady złych praktyk:**
`game:events.001.1` (Zbyt ogólne: gdzie to zdarzenie jest używane?)
`game:.scenes-events-the-lost-house.1` (Redundancja w ścieżce)
`game:.ui-menus.new-game-label` (Niepotrzebna konkatenacja)

Unikaj redundancji w ścieżkach. Jeśli chcesz ułatwić wyszukiwanie, wyeksportuj plik typów zawierający połączone klucze, zamiast psuć strukturę danych JSON.

- **Unikanie zależności od kontekstu ukrytego**
Ciąg znaków nigdy nie powinien zależeć od elementu zewnętrznego, aby mógł zostać zrozumiany (pozycja na ekranie, kolor, ikona).  
Ex. : unikaj
`"Kliknij tutaj, aby kontynuować"` 
Preferuj  
`"Przejdź do płatności"`  
Tekst musi pozostać zrozumiały nawet po wyjęciu go z interfejsu użytkownika (UI).
Niektóre języki mogą nie mieć możliwości bezpośredniego tłumaczenia lub mogą wymagać innych sformułowań w zależności od akcji i umiejscowienia tekstu.

::: tip Uwaga
Teksty akcji powinny opisywać czynność i obiekt: „Przejdź do płatności”, „Pobierz raport PDF”, a nie „Kliknij tutaj” czy „Dowiedz się więcej” bez dodatkowych wyjaśnień.
:::

- **Unikanie segmentacji zdań i nadmiernej modułowości**
Nie przenoś zasad programowania (takich jak S.O.L.I.D.) do redagowania treści i18n. Redagowanie i kodowanie to różne dyscypliny. 
Stawiaj na pełne zdania zamiast fragmentów, ponieważ każdy język posiada własną składnię. 
Mimo że frameworki takie jak `i18next` obsługują zagnieżdżanie („nesting”), często generuje to niepotrzebną złożoność. Jeśli wymagany jest wariant, napisz całe zdanie od nowa. Ogranicz interpolację do prostych zmiennych, takich jak imiona lub liczby.

- **Wskazywanie ograniczeń wyświetlania (UI)**
Jeśli interfejs narzuca limit znaków lub ograniczenie długości, określ to w metadanych i dostarcz podgląd (zrzut ekranu lub makietę). 
Łatwiej jest tłumaczowi dostosować tekst do restrykcyjnego interfejsu, niż programiście tworzyć dynamiczne UI dla wszystkich języków świata. Przekazanie tej odpowiedzialności redaktorowi gwarantuje lepsze wrażenia użytkownika (UX).

- **Zakaz stosowania niekontrolowanych emoji**
Nie wstawiaj znaków specjalnych ani emoji bezpośrednio do tekstów. 
Używaj zmiennych (np.: `{{emoji_heart}}`), aby kontrolować ich wyświetlanie poprzez kod. Sposób wyświetlania emoji różni się znacznie w zależności od systemu operacyjnego i środowiska użytkownika.

- **Unikanie metafor kulturowych**
W generycznych ciągach znaków należy unikać idiomów, gier słownych i lokalnych metafor.  
To, co jest jasne w jednym języku, może stać się absurdalne lub nieprzetłumaczalne w innym.

- **Założenie, że tłumacz nie widzi aplikacji**
Redaguj treści tak, jakby tłumacz nie miał dostępu ani do kodu, ani do UI.  
Wszystko, co jest niezbędne do zrozumienia tekstu, musi znajdować się w kluczu, jego hierarchii lub metadanych.

---

## Techniczne I18n {#i18n-technical}
- **Nazwane i jawne placeholdery**
Stosuj nazwane placeholdery (`{username}`, `{count}`) zamiast indeksów pozycyjnych (`{0}`, `{1}`). LSDE oferuje sekcję dedykowaną zmiennym, aby zdefiniować ich kontekst i zapewnić ich identyfikowalność w ramach projektu.

- **Jeden placeholder na koncepcję**
Każdy placeholder powinien być atomowy i reprezentować jedną daną (imię, data, liczba). Unikaj zmiennych ogólnych lub polimorficznych, które utrudniają tłumaczenie i interpretację.

- **Kompatybilność RTL (Right-to-Left)**
Uwzględnij wyświetlanie dla języków pisanych od prawej do lewej. Renderowanie musi pozostać płynne i poprawne strukturalnie bez konieczności ręcznych modyfikacji ciągu znaków.

- **Zakaz konkatenacji**
Nigdy nie buduj zdań poprzez łączenie wielu kluczy tłumaczeniowych. Aby zachować składnię i zasady gramatyczne właściwe dla każdego języka, każde pełne zdanie musi odpowiadać unikalnemu kluczowi.
