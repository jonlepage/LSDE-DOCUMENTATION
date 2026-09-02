---
title: "Głos"
description: "LSDE integruje funkcję zarządzania ścieżką dźwiękową Twojego projektu, zsynchronizowaną z Twoimi dialogami."
section: features
outline: [2, 3]
---

# Głos

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-1.webp" />

LSDE integruje funkcję zarządzania ścieżką dźwiękową Twojego projektu, zsynchronizowaną z Twoimi dialogami.

## Wymagania wstępne {#prerequisites}
Najpierw musisz uzyskać klucz API [Elevenlabs](/pl/interface/global-settings#llm-pour-les-voix).
Elevenlabs oferuje obecnie darmowy plan miesięczny, idealny do testowania ich API i poznania ich możliwości.

## Konfiguracja {#configuration}
Aby skonfigurować system głosowy dla swojego projektu, przejdź do [sekcji konfiguracji głosów](/pl/interface/project-settings#voices).

1. Zdefiniuj folder eksportu głosów, które będą zapisywane przy każdym zapisie projektu.
2. System umożliwia nazywanie plików wyjściowych.
Ta opcja dostosowuje nazwy do potrzeb Twojego silnika gry lub projektu.
Przeciąganie i upuszczanie dostosowuje kolejność etykiet.

---

## Łączenie zmiennych (automatyczne) {#associate-variables-auto}
<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-2.webp" />

Ten przykład pokazuje, jak skonfigurować system głosowy dla JRPG z wieloma postaciami na dialog, gdzie Twój silnik gry musi je wyodrębnić.

1. Wybierz grupę zmiennych dla swoich rozmówców.
2. Zaznacz opcję *Wielu rozmówców na dialog*.
3. Otworzy się sekcja konfiguracji wyrażenia regularnego (`regex`) z obowiązkową 1 grupą:
- Grupa `id`: Przechwytuje wartość `tagu` do wyszukania w zmiennych wybranej grupy.
- Grupa `value`: Tekst przechwycony dla grupy `id`.

::: tip Uwaga
Opcjonalne, ponieważ możesz redagować tekst. Ta grupa maksymalizuje automatyzację i zmniejsza obciążenie pracą.
:::

4. Zobaczysz wtedy wszystkie zmienne skonfigurowanej grupy, z ich odpowiednią ikoną, jeśli została wprowadzona.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-3.webp" />

## Testowanie Twojego `regex` {#test-regex}
Możesz przetestować swój `regex`, aby lepiej go zrozumieć na [regexr](https://regexr.com).
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```
1. Na przykład, wybierając drugie przechwycenie.
2. Przejdź do 'Szczegółów'.
3. Zauważysz, że:
- Grupa 1 przechwytuje `tag id` Twojej postaci *a1*.
- Grupa 2 przechwytuje resztę tekstu dla `id` *a1*.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-4.webp" />

## Zmienne {#variables}
W [sekcji zmiennych](/pl/interface/project-settings#les-variables):

1. W grupie `ACTORS`, wcześniej utworzonej.
2. Ta lista będzie odpowiadać tej [widzianej wcześniej](/pl/features/voice#associer-des-variables).
3. Wprowadzenie wyglądu znacznie ułatwia organizację i walidację dialogów oraz osobowości postaci.

::: tip Uwaga
Zauważ, że możesz edytować te informacje w dowolnym momencie lub uzupełnić je później.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-5.webp" />

## Konfigurowanie postaci {#configure-character}
Wróćmy do [konfiguracji głosów](/pl/features/voice#associer-des-variables).

1. Przypisz ID głosu do swojej zmiennej.

::: tip Uwaga
ID głosów są tworzone na platformie Elevenlabs. Twoje konto Elevenlabs zawiera już domyślne modele.
:::
2. Będziesz mógł również testować i dostosowywać generator głosu.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-6.webp" />

## Tworzenie ID głosu {#create-voice-id}
Na swoim profilu [elevenlabs](https://elevenlabs.io/app/voice-lab):

1. Utwórz nowy, spersonalizowany głos.
LSDE obsługuje wszystkie modele API. Obecnie zdecydowanie polecam model `V3` ze względu na jego zarządzanie tagami emocjonalnymi, co zapewnia lepszą kontrolę narracyjną.
2. Po utworzeniu, przejdź do sekcji swoich głosów.
3. Sprawdź obecność ID (np. *Lia Sun-berry*, główna postać [FCT7O](https://lepasoft.com/pl/games/fanatic-cardboard-f7o)).

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-7.webp" />

## Generowanie tekstu głosowego {#generate-voice-text}
Po wprowadzeniu ID, aby wyświetlić lub wygenerować teksty głosowe, otwórz okno [menedżera głosów](/pl/interface/voice-manager).

1. Wybierz klucz w drzewie.
Nie wybieraj folderu, ponieważ teksty głosowe są tam wyświetlane tylko do odczytu.
2. `regex` przechwyci postacie z dialogu i zaproponuje interfejs do generowania głosu.
3. Podczas generowania tekst otrzymuje „podpis” w momencie T. Jeśli tekst zmieni się bez zmiany kolejności postaci, pojawi się alert z prośbą o sprawdzenie, czy głos wymaga ponownego wygenerowania.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-8.webp" />

## Łączenie zmiennych (ręcznie) {#associate-variables-manual}
Dla scenariuszy z jedną postacią na dialog (bez interakcji), typowych dla prostych projektów.
1. Możesz odznaczyć pole *Wielu rozmówców na klucz*.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-9.webp" />

## Konfigurowanie metadanych {#configure-metas}
Przypisz do każdego dialogu postać lub postacie, dla których chcesz wygenerować głosy.

1. Wybierz klucz docelowego dialogu.
2. Zaznacz każdego aktora do zarządzania dla tego dialogu.

### Dlaczego wiele postaci? {#why-multiple-characters}
Może to być przydatne dla ogólnych dialogów, takich jak powitalne zdanie używane przez wielu losowych PNJ o różnych osobowościach lub płciach.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-10.webp" />

## Reorganizacja {#reorganization}
1. Zawsze na kluczu, a nie na folderze.
2. Menedżer głosów może sygnalizować problem z reorganizacją.
W tym przykładzie przeszliśmy z automatycznego przypisywania wielu postaci na system ręczny.

::: tip Uwaga
Jeśli system wykryje znaczące zmiany w kolejności lub liczbie postaci, będziesz musiał ręcznie zreorganizować każdą już wygenerowaną instancję głosu.
:::

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-11.webp" />

Wystarczy przeciągnąć i upuścić każdy plik głosowy dialogu do powiązanej postaci, zadeklarowanej w metadanych lub za pośrednictwem systemu automatycznego przypisywania.
