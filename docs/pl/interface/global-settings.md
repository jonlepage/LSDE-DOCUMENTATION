---
title: "Ustawienia globalne"
description: "Oto miejsce, w którym możesz skonfigurować globalne ustawienia oprogramowania LSDE."
section: interface
outline: [2, 3]
---

# Ustawienia globalne

Oto miejsce, w którym możesz skonfigurować globalne ustawienia oprogramowania LSDE.
Te ustawienia będą współdzielone ze wszystkimi Twoimi projektami.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-typo.webp" />

## Typografia {#typography}
Typografia wpływa głównie na pola tekstowe edytora i niektóre elementy w opcjach notatek.
Interfejs LSDE posiada częściowo konfigurowalny projekt UI/UX, ale niektóre aspekty pozostają stałe ze względów projektowych.
Tylko okna dialogowe mogą być dostosowane do Twojego ulubionego motywu.

::: tip Uwaga
Ta funkcja może ewoluować w czasie, jeśli będzie silnie pożądana.
:::
1. **font size** : rozmiar tekstu w edytorze i innych obszarach wprowadzania.
2. **font spacing** : odstępy między literami w edytorze.
3. **czcionka** : krój pisma (font-family) używany w edytorze tekstu.
4. **wysokość linii** : modyfikuje wysokość linii w edytorze.
5. **kolor** : kolor tekstu w edytorze.
6. **grubość** : pozwala uczynić tekst grubszym (pogrubionym), jeśli krój pisma na to pozwala.
7. **kolor tła** : definiuje kolor tła edytora tekstu, niezależnie od tego, czy jest aktywny (focus), czy nieaktywny.
8. **kierunek tekstu** : definiuje języki, których wyświetlanie powinno odbywać się od prawej do lewej (RTL).

---

## Wrappers {#wrappers}
<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-wrappers.webp" />

Wrappery to zachowania otaczania, które można dodać do systemu zaznaczania.
Gdy zaznaczysz tekst w edytorze i użyjesz skrótu klawiaturowego, możesz otoczyć go symbolami.
To zachowanie, bardzo popularne w środowiskach deweloperskich (IDE), jest również obsługiwane przez LSDE.
1. Klawisze, które wyzwolą owijanie, gdy tekst jest zaznaczony.
2. Znaki do wstawienia przed i po zaznaczonym tekście.
3. Liczba możliwych iteracji przed usunięciem owijania tekstu.
4. Jeśli włączone, usuwa spacje na początku i na końcu zaznaczonego tekstu, aby umieścić je poza owinięciem.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-flags.webp" />

## Edytor {#editor}
Ta sekcja grupuje różne funkcjonalności (flags) pozwalające wzbogacić Twoje doświadczenie z $t(main.words.lsde-title).
Aby dowiedzieć się więcej, wystarczy najechać myszką na każdą opcję, aby wyświetlić szczegółową dymek z informacją o jej funkcji.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-tasks.webp" />

## Tasks {#tasks}
Sekcja Zadania umożliwia zarządzanie natywnymi zadaniami LSDE.
Znajdziesz tam reguły (rules) i dyrektywy wysyłane do LLM.

- **Reguły (rules)** to ogólne i ważne instrukcje, które mają zastosowanie do wszystkich zadań.
- **Zadania (tasks)** to bardziej szczegółowe pod-reguły, wysyłane do LLM dla precyzyjnych operacji.

Odkryjmy interfejs natywnych zadań.

<!-- TODO image introuvable : configGlobTaks -->

1. Możesz dezaktywować niepotrzebne zadania dla swoich projektów (na przykład dezaktywować zadanie menu).
2. Przycisk do przywracania natywnej dyrektywy.
3. Przycisk do kopiowania natywnej dyrektywy.

::: tip Uwaga
Niedostępne w wersji próbnej LSDE.
:::
4. Liczba słów i szacowany koszt w tokenach.
5. W każdej chwili możesz wyeksportować plik JSON, aby przeanalizować przykładowe zapytanie wysłane do LLM i udoskonalić swoje prompt engineering.

::: tip Uwaga
Zwróć uwagę, że nie zaleca się modyfikowania natywnych reguł i zadań LSDE.
Należy preferować inne rozwiązania, takie jak [fine-tuning](/pl/interface/fine-tuning) lub [dyrektywy projektu](/pl/interface/project-settings#llm-directive).
:::

---

## Autentykacja {#authentication}
Ta sekcja jest przeznaczona do konfiguracji LLM, zarówno darmowych, jak i dostępnych za pośrednictwem własnych kluczy API.
Możesz tu wprowadzić klucze API swoich ulubionych usług LLM i je zabezpieczyć.

::: tip Uwaga
Zwróć uwagę, że niektórzy dostawcy, tacy jak Gemini czy ElevenLabs, oferują obecnie darmowe klucze API z miesięcznymi lub tygodniowymi limitami użycia.
:::

Dla LLM do przetwarzania tekstu dostępnych jest 6 dostawców.
### Dla LLM do przetwarzania tekstu {#text-processing-llm}
- Anthropic
- OpenAI
- Mistral
- Gemini
- Deepseek

### LLM dla głosów {#voice-llm}
ElevenLabs jest dostępne (oferuje również darmowe klucze z miesięcznymi limitami).

::: tip Uwaga
musisz utworzyć swoje profile głosowe w ich narzędziach
:::

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-auth.webp" />

Wystarczy kliknąć na `temp-mail` lub `10minmail`, aby uzyskać tymczasowy adres, a następnie kliknąć `open`, aby zapisać ten e-mail.
Sesja zostanie zapisana na kolejne dni, co pozwoli Ci korzystać z GPT i zadań wsadowych.
Będziesz również podlegać limitowi (obecnie, na dzień 25 listopada 2025, około 70 zadań na godzinę), po którym trzeba będzie poczekać.

Gdy konto zostanie usunięte przez OpenAI, proces będzie musiał zostać powtórzony.

::: tip Uwaga
Zwróć uwagę, że ta usługa powinna być używana tylko do podstawowych testów, a nie do produkcji. Darmowy model GPT jest niższej jakości i nie obsługuje dobrze funkcji udoskonalania po odpowiedzi, oferowanych przez LSDE.
:::

### Interfejs {#interface}
0. Zapamiętaj swoje klucze API, aby uniknąć ich wpisywania przy każdym uruchomieniu oprogramowania.

::: tip Uwaga
klucze są zakodowane, ale pozostają dostępne dla złośliwych użytkowników
:::
1. Możesz bezpiecznie zaszyfrować swoje klucze za pomocą systemu kodowania oprogramowania.

::: tip Uwaga
Twoje klucze zostaną zaszyfrowane unikalnym identyfikatorem Twojej maszyny i instalacji. Nie będzie można ich uruchomić nigdzie indziej niż na tej instancji LSDE.
:::
2. Możesz pobrać swój zaszyfrowany klucz tutaj i użyć go w odpowiednich polach zamiast standardowych kluczy API.
3. Tutaj musisz wstawić klucze API swoich dostawców.
4. Przycisk szybkiego dostępu do strony dostawcy, aby sprawdzić swoje zużycie.
5. Wybór dostępnych modeli dla wybranego dostawcy.
6. Możesz dodać swoje ulubione modele do ulubionych.

::: tip Uwaga
Ulubione modele są dostępne w zakładkach LLM w stopce oprogramowania. Kliknięcie prawym przyciskiem myszy pozwala szybko przełączyć się na jeden z nich.
:::

### Darmowy LLM {#free-LLM}
LSDE oferuje również bezpłatną metodę korzystania z GPT poprzez specjalny proces.
Zazwyczaj będziesz chciał używać tego LLM do przeprowadzania testów lub mini-zadań bez ponoszenia kosztów.
7. Możesz utworzyć darmowe konto ChatGPT, aby przetestować funkcje oprogramowania.
Sugerowane są dwaj dostawcy tymczasowych adresów e-mail.

::: tip Uwaga
Nie używaj swojego oficjalnego konta, ryzykujesz jego zamknięcie w przypadku intensywnego użytkowania.
:::
8. Kliknij tutaj, aby utworzyć konto GPT za pomocą swojego tymczasowego adresu e-mail.

::: tip Uwaga
Zazwyczaj możesz przeprowadzić przetwarzanie wsadowe około 70 instancji na godzinę.
:::

::: tip Uwaga
Niektóre usługi, takie jak Google AI, oferują teraz darmowe klucze API z ograniczoną liczbą zapytań na godzinę.
:::
Możesz również skorzystać z ich usług.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-accessibility.webp" />

## Dostępność {#accessibility}
Ta sekcja pozwala skonfigurować języki interfejsu oraz filtry wyświetlania, przydatne, jeśli masz problemy z kalibracją ekranów lub jeśli cierpisz na pewną formę daltonizmu.

1. Wybór języków interfejsu: podobnie jak na ekranie startowym, możesz ponownie przypisać swoje 2 preferowane języki.
Następnie wystarczy nacisnąć klawisz [F1], aby natychmiast przełączyć się między dwoma interfejsami.
Ta funkcja pozwala na przykład pracować w języku ojczystym i w każdej chwili przełączyć się na inny język, aby komunikować się z kolegą lub zapoznać się z dokumentacją.
2. Możesz zmienić kontrast oprogramowania tutaj.
3. A także barwę (odcień), która pozwala zarządzać motywem kolorystycznym, jeśli masz wadę wzroku.

---
