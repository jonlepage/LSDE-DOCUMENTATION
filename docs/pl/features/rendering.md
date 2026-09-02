---
title: "Renderowanie"
description: "LSDE oferuje bardzo zaawansowany silnik renderowania tekstu, który umożliwia personalizację renderowania segmentów tekstu w czasie rzeczywistym."
section: features
outline: [2, 3]
---

# Renderowanie

<DocImage src="/doc/lsde/doc-lsde-features-howtorendering-0-animate.webm" />

## Czym jest renderowanie tekstu? {#what-is-text-rendering}
LSDE oferuje bardzo zaawansowany silnik renderowania tekstu, który umożliwia personalizację renderowania segmentów tekstu w czasie rzeczywistym.

### Dla kogo jest to przydatne? {#who-is-it-for}
Zazwyczaj funkcja ta jest głównie wymagana przez twórców gier, ponieważ strony internetowe i oprogramowanie zwykle wymagają mniejszej złożoności narracyjnej.
Weźmy na przykład grę JRPG, w której silnik dialogowy musi przechwycić wszystkie grupy parametrów, takie jak `{{number:number:number}}`.
Te indeksy są następnie używane do odnalezienia ID postaci, która ma mówić, animowanej ekspresji, którą postać ma wykonać dla tej linii, i ewentualnie intensywności jej emocji.

Dla dewelopera nie stanowi to problemu z czytelnością. Jednakże, dla tłumacza lub kompozytora, wymaganie ciągłego zaglądania do dokumentacji w celu sprawdzenia zgodności z kodami silnika i osobowością każdej postaci mogłoby stworzyć znaczne niezadowolenie, a nawet uczynić z niego wroga na całe życie.

W profesjonalnym studio taki dział wymaga dedykowanego zespołu i kosztuje miliony, co jest nierealistyczne dla niezależnego studia, zarówno jednoosobowego, jak i z małym zespołem.

### Rozwiązanie {#solution}
Renderowanie tekstu oferuje zatem bardzo potężne rozwiązanie, które pozwala w każdej chwili sprawdzić, czy chronione terminy przeznaczone dla silnika są obecne. Umożliwia również tłumaczom, kompozytorom, a także narzędziom LLM korzystanie z tych informacji w celu zagwarantowania jakości narracji i tłumaczeń.

To już nie postać `{{3:4:2}}` mówi, ale `{{LIA:HAPPY:2}}`, z odniesieniem do jej karty w razie potrzeby i wizualizacją wszystkich tych interakcji, co znacznie ułatwia kompozycję i tłumaczenia.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-1.webp" />

## Tworzenie wzorca {#create-pattern}
Przejdź do [konfiguracji wzorców](/pl/interface/project-settings#patterns).
Utwórz tam nowy, pusty wzorzec.
1. W tej sekcji możesz wypełnić swój wzorzec.
`(xxxxxxx)(xx)(xxxxxxx)`
W tym przykładzie nasz wzorzec będzie składał się z 3 grup.
LSDE automatycznie wykryje grupy przechwytywania, aby umożliwić ich wypełnienie.

Grupa 0 reprezentuje samo pełne przechwycenie i zawsze będzie obecna. Możesz ograniczyć się do skonfigurowania tylko głównego przechwytywania, co zazwyczaj wystarcza w większości przypadków.

Jednakże, jeśli chcesz wykorzystać 3 inne grupy, które dodałeś do swojego wyrażenia Regex, możesz utworzyć dodatkowe dekoratory.
### Czym jest dekorator? {#what-is-decorator}
Dekorator to, jak sama nazwa wskazuje, „dekoracja”, która po przypisaniu do grupy upiększy przechwycony tekst i poprawi jego wizualne renderowanie.
Jest to system eksperymentalny, a obecnie istnieje kilka zasad do przestrzegania:
- Nie można przypisać wielu dekoracji do tej samej grupy w ramach tego samego wzorca.
- Dekoratory mogą szkodzić zamiast poprawiać czytelność, jeśli są źle używane.
- Dekoratory typu „Widget” są wyświetlane tylko w aktywnych oknach.
- Unikaj zbyt złożonych wzorców Regex z warunkowymi i „lookbehind”, które mogą negatywnie wpływać na wydajność przewijania w edytorze.

Podczas tworzenia dekoratora, możesz go skonfigurować z różnymi zachowaniami.
2. To tutaj przypisujesz grupę przechwytywania do dekoratora. Tutaj przypiszemy grupy przechwytywania 1, 2 i 3.
3. Możesz wybrać typ dekoratora, na przykład „Widget”.
4. I możemy wskazać, że każde przechwycenie będzie powiązane z kategorią zmiennych.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-2.webp" />

## Testowanie wzorca {#test-pattern}
Odwiedź stronę [regexr](https://regexr.com), aby przetestować i lepiej zrozumieć swoje wyrażenie Regex.
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```

1. Jeśli wybierzemy pierwsze przechwycenie,
2. i wyświetlimy pełne szczegóły,
3. możemy zaobserwować następujące szczegóły przechwytywania:
Grupa 0 to samo pełne przechwycenie.
Dla grup 1, 2 i 3 mamy poprawnie przechwycone „a2”, „e1” i „1”.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-3.webp" />

## Łączenie zmiennej {#link-variable}
Możemy zrobić więcej z tymi przechwyceniami, dopasowując je do czegoś, a raczej do kogoś, w naszym przykładzie.
W naszym fikcyjnym silniku, „a1”, „a2”, „a3”... będą odpowiadać postaciom w naszej grze.

1. Aktywuj opcję „variable” (zmienna) w swoim wzorcu.
2. Skonfigurujemy grupę przechwytywania przeznaczoną do identyfikacji naszych zmiennych za pomocą tagów. Tutaj chcemy, aby LSDE szukał zmiennych z grupy „ACTORS”.

::: tip Uwaga
Dlaczego nie szukać we wszystkich zmiennych, a tylko w jednej grupie? Ze względu na utrzymywalność projektu i wydajność.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-4.webp" />

## Dostosowywanie zmiennej {#customize-variable}
Zanim przypiszesz dekorację do zmiennej, musi ona już istnieć.
Przejdź do [sekcji zmiennych](/pl/interface/project-settings#les-variables).
Musisz tam utworzyć nową kategorię oraz zmienną.
1. Utwórz kategorię o nazwie „ACTORS” i dodaj do niej nową zmienną.
2. Następnie w polu „Tags” (Tagi) będziemy mogli dodać słowa kluczowe, które będą wyszukiwane przez przechwytywania wzorców i inne systemy.
Dodaj na przykład „a1”, co odpowiadałoby fikcyjnemu ID naszej postaci w naszym fikcyjnym silniku gry.
3. Następnie możesz przypisać mu wygląd renderowania w edytorze tekstu, a także specyficzny wygląd dla dymków informacyjnych.

Następnie będziesz mógł korzystać z renderowania „Widget” tej zmiennej bezpośrednio w edytorze tekstu.
I za pomocą prostego kliknięcia, będziesz mógł również wyświetlić dymek informacyjny, który przedstawi skonfigurowane informacje dla zmiennej.

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-5.webp" />

::: tip Uwaga
Jedno kliknięcie wyświetli dekorację bez widżetu.
:::

---
