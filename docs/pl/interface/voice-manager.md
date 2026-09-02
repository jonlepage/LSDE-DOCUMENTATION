---
title: "Zarządzanie głosem"
description: "Ten moduł umożliwia zarządzanie integracją narracji głosowych w Twoich grach i projektach narracyjnych."
section: interface
outline: [2, 3]
---

# Zarządzanie głosem

Ten moduł umożliwia zarządzanie integracją narracji głosowych w Twoich grach i projektach narracyjnych.
Dla każdego klucza w Twoim projekcie możesz wygenerować i przypisać odpowiadającą mu wersję głosową.
[Pełny przewodnik znajdziesz tutaj](/pl/features/voice) jako uzupełnienie tej strony.

---

## Jak to działa? {#how-it-works}
LSDE obsługuje dwa podejścia, w skrócie `SAD` i `MAD`.
1. **SAD: „Single Actor Dialog”**
W tym paradygmacie możesz ręcznie przypisać konkretnego rozmówcę do każdego klucza dialogu za pośrednictwem jego metadanych.

::: tip Uwaga
Chociaż tryb SAD jest głównie przeznaczony dla jednego aktora na klucz, możliwe jest przypisanie wielu profili głosowych do tego samego klucza za pośrednictwem metadanych, na przykład dla ogólnych wiadomości wymagających różnych intonacji lub głosów.
:::
Przykład dialogu zarządzanego w trybie **SAD** z dwoma osobnymi kluczami:
```text
salut ca va ?
```
```text
oui ca va super
```
2. **MAD: „Multi Actor Dialog”**
W tym paradygmacie kilku rozmówców może interweniować w ramach tego samego klucza dialogowego.
Ich kwestie są identyfikowane przez specyficzne znaczniki (tags), które segmentują tekst.
Kolejność interwencji jest sekwencyjna.
Aby wyodrębnić identyfikatory postaci i ich powiązane teksty, należy zdefiniować wyrażenie regularne (regex).

::: tip Uwaga
W niektórych złożonych projektach, grupowanie kilku dialogów w jednym kluczu i zarządzanie ich rozdzieleniem w postprodukcji, bezpośrednio w silniku gry, może być rozsądne.
:::
Przykład dla dialogu **MAD**:

<DocImage src="/doc/lsde/doc-lsde-features-howtorendering-0-animate.webm" />

```text
{lia} salut ca va ?
{boo} oui ca va super
{lia} Ho !
{boo} quoi !? pourquoi cette tete ?
{lia} ...
{sam} ... hey vous 2 !
```

::: tip Uwaga
Ta metoda znacznie redukuje liczbę kluczy do zarządzania.
:::
Dla powyższego przykładu, gdzie każda kwestia miałaby swój własny klucz, a z tłumaczeniem na 10 języków, oznaczałoby to ponad 60 kluczy.
Zarządzanie każdą interwencją indywidualnie szybko stałoby się niemożliwe do opanowania w przypadku RPG zawierającego setki tego typu interakcji.

## Wymagania {#prerequisites}
Aby generować głosy, musisz posiadać konto i klucz API [ElevenLabs](https://elevenlabs.io).

::: tip Uwaga
ElevenLabs oferuje darmowy klucz API z miesięcznym limitem kredytów, co pozwala na przetestowanie ich technologii.
:::

<DocImage src="/doc/lsde/doc-lsde-ui-voicemanager.webp" />

## Interfejs {#interface}
Interfejs wyświetla listę języków, profile postaci, narzędzia do generowania głosu oraz historię stworzonych głosów.
0. **Historia**
Lista wszystkich instancji audio stworzonych dla wybranego klucza.
1. **Kontener języków**
Te zakładki grupują postacie według języka.
2. **Kontener rozmówców**
Lista encji (postaci), którym można przypisać narrację głosową. W trybie \\MAD\\, ich kolejność odpowiada kolejności ich pojawienia się w tekście źródłowym.
3. **Tekst**
Przechwycony tekst służący jako podstawa do generowanej narracji głosowej. Zaleca się modyfikowanie interpunkcji lub dodawanie wskazówek emocjonalnych w celu wpłynięcia na głos, bez zmiany oryginalnego tekstu źródłowego. Wyświetlone zostanie ostrzeżenie, jeśli tekst źródłowy zostanie zmodyfikowany.
4. **Ulepszanie**
Ten przycisk umożliwia ulepszenie tekstu przeznaczonego do narracji głosowej, bazując na osobowości postaci i kontekście zdefiniowanym w metadanych klucza.

::: tip Uwaga
Ta funkcja jest dostępna wyłącznie dla modeli V3 ElevenLabs.
:::
5. **Generator**
Ten przycisk generuje głos i dodaje go do historii.
6. **Resetuj**
Ten przycisk anuluje zmiany wprowadzone w tekście i przywraca oryginalną, przechwyconą wersję.
7. **Zatwierdź głos**
Umożliwia zatwierdzenie głosu.
Zatwierdzone głosy są przechowywane niezależnie od historii i będą eksportowane zgodnie z kryteriami zdefiniowanymi podczas zapisywania projektu.

::: tip Uwaga
Możliwe jest zatwierdzenie wielu głosów dla tego samego tekstu i tej samej postaci.
:::
Nazwy plików zostaną wtedy automatycznie inkrementowane.
Może to być przydatne, na przykład, do zróżnicowania głosów w silniku gry używającym random seeds.
8. **Sygnatura generowania**
Te informacje, używane podczas generowania, służą jako sygnatura do śledzenia i zrozumienia pochodzenia każdego głosu.

::: tip Uwaga
Na przykład, jeśli dodasz nową postać lub przesuniesz ją w tekście źródłowym, będziesz mógł ponownie przypisać istniejące głosy do encji, nawet jeśli jej położenie się zmieniło.
:::
9. **Odtwarzacz audio**
Pozwala uruchomić odtwarzanie głosu i wizualizować jego wysokość (pitch), aby porównać ją z pożądanym ogólnym nastrojem.

## Tworzenie głosów {#create-voices}
### Z SAD {#with-sad}
Musisz mieć skonfigurowany co najmniej jeden profil głosowy i aktywowany menedżer głosów w ustawieniach projektu.
Konfiguracja aktorów (lub encji) powiązanych z kluczem oraz ich profili głosowych odbywa się w oknie metadanych.
### Z MAD {#with-mad}
Musisz mieć skonfigurowany co najmniej jeden profil głosowy i aktywowany menedżer głosów w ustawieniach projektu.
Następnie aktywuj tryb *MAD* i napisz wyrażenie regularne *(regex)*.
Musi ono przechwytywać dwie obowiązkowe grupy: identyfikator aktora i odpowiadający mu tekst.
Zdefiniuj indeks tych grup przechwytywania w ustawieniach skojarzeń głosowych.

<DocImage src="/doc/lsde/doc-lsde-ui-voicereorder.webp" left />

## Naprawianie problemów {#fix-issues}
Generowanie głosów przed finalizacją tekstu jest praktyką, której należy unikać.
Jednakże, jeśli to nastąpi, LSDE oferuje narzędzia do korygowania i reorganizowania głosów, unikając w ten sposób konieczności robienia wszystkiego od nowa.
Gdy zmienisz tekst dialogu po wygenerowaniu głosów, ich sygnatura stanie się niekompatybilna i zostaniesz poproszony o ich ponowne zatwierdzenie.
W trybie **MAD**, jeśli przemieścisz, dodasz lub usuniesz postacie, będziesz musiał również ponownie przypisać już wygenerowane instancje głosowe.

::: tip Uwaga
Ponowne przypisanie odbywa się w języku ojczystym projektu; pozostałe języki zostaną automatycznie przeorganizowane dzięki ich oryginalnej sygnaturze.
:::

[Pełny przewodnik znajdziesz tutaj](/pl/features/voice).

---
