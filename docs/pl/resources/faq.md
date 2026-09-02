---
title: "FAQ"
description: "R: Przejdź do drzewa kluczy, kliknij przycisk „Utwórz plik lub folder” lub użyj menu kontekstowego (prawy przycisk myszy)."
section: resources
outline: [2, 3]
---

# FAQ

### Q: Jak utworzyć nowy klucz tłumaczenia? {#create-new-key}
R: Przejdź do drzewa kluczy, kliknij przycisk „Utwórz plik lub folder” lub użyj menu kontekstowego (prawy przycisk myszy). Podaj pełną ścieżkę klucza i potwierdź. Klucz zostanie utworzony w wybranej przestrzeni nazw (namespace).

### Q: Jaka jest różnica między folderem a plikiem w drzewie? {#difference-folder-file}
R: Foldery to kontenery logiczne służące do organizowania kluczy. Pliki to poszczególne klucze zawierające tekst do przetłumaczenia. Foldery mogą zawierać inne foldery lub klucze.

### Q: Jak usunąć nieużywany klucz? {#delete-unused-key}
R: Aktywuj opcję „Pokaż/Ukryj osierocone klucze” w nagłówku drzewa, aby zidentyfikować klucze obecne w LSDE, ale nieobecne w Twoim kodzie źródłowym. Możesz je następnie usunąć za pomocą menu kontekstowego.

### Q: Jakie modele LLM są dostępne w LSDE? {#available-llms}
R: LSDE wspiera 7 głównych dostawców: Anthropic, OpenAI, Mistral, Gemini, Deepseek, ElevenLabs oraz darmową usługę poprzez tymczasowe e-maile. Możesz skonfigurować swoje klucze API w ustawieniach globalnych, w [sekcji Uwierzytelnianie](/pl/interface/global-settings#authentication).

### Q: Jak korzystać z LLM za darmo? {#use-llms-free}
R: LSDE oferuje darmową metodę dla OpenAI poprzez tworzenie kont z tymczasowymi e-mailami (temp-mail lub 10minmail). Będziesz mieć do dyspozycji około 70 zadań na godzinę z ograniczonym limitem.
Możesz także korzystać z usług Google z Gemini, który oferuje darmowe klucze API.

### Q: Czy tłumaczenia LLM są wiarygodne? {#llm-reliability}
R: Wyniki są trafne i satysfakcjonujące, ale niezbędne jest zaangażowanie profesjonalnego tłumacza do końcowej weryfikacji. Modele LLM świetnie radzą sobie z tłumaczeniem, gdy zapewniony jest odpowiedni kontekst.

### Q: Jak poprawić jakość tłumaczeń LLM? {#improve-llm-quality}
R: Uzupełnij metadane swoich kluczy opisami, zmiennymi i notatkami kontekstowymi. Informacje te są dołączane do zapytań LLM, aby zagwarantować bardziej trafne wyniki.

### Q: Do czego służą metadane? {#metadata-purpose}
R: Metadane dostarczają dodatkowego kontekstu tłumaczom, redaktorom i modelom LLM. Obejmują one opisy, dozwolone zmienne, notatki użytkownika i obrazy w celu wizualnej kontekstualizacji treści.

### Q: Jak dodać obrazy do kluczy? {#add-images-to-keys}
R: Otwórz okno metadanych dla wybranego klucza i użyj sekcji „Images”. Obrazy są kompresowane i dołączane do pliku .lsde, co ułatwia udostępnianie.

### Q: Czy modele LLM mają dostęp do notatek użytkownika? {#llm-user-notes-access}
R: Nie, notatki użytkownika są przeznaczone wyłącznie dla kompozytorów i tłumaczy. Nie są one przesyłane do LLM.

### Q: Jak skonfigurować skaner kodu? {#configure-code-scanner}
R: Przejdź do sekcji Patterns (ustawienia projektu). Utwórz pattern z wyrażeniem regularnym (Regex) zawierającym co najmniej 1 grupę przechwytywania, aby zidentyfikować klucze i18n w swojej bazie kodu (codebase).

### Q: Jakie języki programowania są wspierane? {#supported-languages}
R: Brak wewnętrznych ograniczeń. Musisz po prostu utworzyć odpowiednie Regex, aby przechwycić klucze, niezależnie od języka. Użyj narzędzia takiego jak regexr.com, aby przetestować swoje wzorce.

### Q: Jak zidentyfikować brakujące klucze w moim kodzie? {#identify-missing-keys}
R: Aktywuj tryb „Brakujący klucz” w skanerze kodu. LSDE wyświetli tylko te klucze, które są obecne w kodzie źródłowym, ale nie ma ich w drzewie LSDE. Możesz je utworzyć masowo.

### Q: Co to jest renderowanie tekstu po obróbce? {#post-processing-rendering}
R: To system pozwalający na personalizację wyświetlania tekstu w czasie rzeczywistym. Możesz skonfigurować wzorce Regex, aby przechwytywać grupy tekstu i przypisywać im dekoratory (kolory, ikony, widgety) w celu poprawy czytelności.

### Q: Jak dodać „widgety” do tekstu? {#add-widgets-to-text}
R: Utwórz pattern z Regex w ustawieniach projektu. Przypisz grupę przechwytywania do dekoratora typu „Widget”. Widget będzie wyświetlany tylko w aktywnych oknach w celu optymalizacji wydajności.

### Q: Jak powiązać zmienne z renderowaniem? {#link-variables-to-rendering}
R: W ustawieniach projektu, w sekcji Variables, utwórz kategorię i zmienne z „tagami”. Skonfiguruj wzorce Regex, aby przechwytywały te tagi, a LSDE automatycznie przypisze dekoratory do znalezionych wystąpień.

### Q: Jak generować głosy dla moich dialogów? {#generate-voices}
R: Najpierw musisz uzyskać klucz API ElevenLabs (dostępny plan darmowy). Skonfiguruj profile głosowe w ustawieniach projektu, a następnie użyj menedżera głosu, aby wygenerować narracje.

### Q: Jaka jest różnica między SAD a MAD? {#sad-vs-mad}
R: *SAD* (Single Actor Dialog) = jeden rozmówca na klucz. *MAD* (Multi Actor Dialog) = wielu rozmówców w obrębie jednego klucza, zidentyfikowanych za pomocą tagów Regex. MAD znacząco redukuje liczbę kluczy do zarządzania.

### Q: Jak zarządzać wieloma postaciami w dialogu? {#handle-multiple-characters}
R: W trybie MAD używaj tagów takich jak `{postać} tekst` w swoim kluczu. Skonfiguruj Regex, aby przechwycić ID postaci oraz jej tekst, a następnie przypisz profile głosowe do każdej postaci w zmiennych.

### Q: Co zrobić, jeśli zmodyfikowałem tekst po wygenerowaniu głosów? {#voice-modification-after-gen}
R: LSDE wykrywa zmiany i proponuje ponowną walidację głosów. W trybie MAD możesz ponownie przypisać istniejące instancje głosowe metodą przeciągnij i upuść, jeśli przesunąłeś lub dodałeś postacie.

### Q: Jak zmienić czcionkę lub rozmiar tekstu w edytorze? {#change-font-size}
R: Przejdź do Ustawienia Globalne > Interfejs użytkownika > Typografia. Możesz dostosować rozmiar, odstępy, czcionkę i wysokość linii.

### Q: Jak zmienić język interfejsu LSDE? {#change-interface-language}
R: Przejdź do Ustawienia Globalne > Dostępność > Wybór języków. Możesz skonfigurować 2 języki interfejsu i przełączać się między nimi za pomocą [F1].

### Q: Jak zaimportować istniejący projekt? {#import-existing-project}
R: Przejdź do Menedżera Lokalizacji i użyj opcji „Inteligentny import”. Uporządkuj foldery zgodnie z formatem `../folder/lang/namespace.json`, a LSDE zaimportuje je automatycznie.

### Q: Jak chronić moje klucze przed zmianami? {#protect-keys}
R: W głównym edytorze zaznacz pole „Chroń”, aby oznaczyć tekst jako finalny. Zadania LLM będą go automatycznie ignorować.

### Q: Jak udostępnić mój projekt LSDE zespołowi? {#share-project-team}
R: Plik `.lsde` zawiera całość projektu. Udostępnij go przez Git, e-mail lub usługę chmurową. LSDE automatycznie zsynchronizuje zmiany przy otwarciu.

### Q: Jak śledzić bieżące zadania współpracownika? {#track-collaborator-tasks}
R: Aktywuj opcję „Pokaż/Ukryj klucze z trwającymi zadaniami” w drzewie. Szybko podejrzysz klucze przypisane do aktywnych zadań lub oczekujące na zatwierdzenie.

### Q: Dlaczego edytor zwalnia przy wyświetlaniu wielu języków? {#performance-multiple-languages}
R: Domyślnie LSDE wyłącza złożone renderowanie (widgety) w nieaktywnych oknach, aby zoptymalizować wydajność. Jeśli nie stanowi to problemu, możesz wyłączyć tę optymalizację w konfiguracji globalnej.

### Q: Jak przyspieszyć działanie skanera kodu? {#improve-scanner-speed}
R: Wybierz konkretny klucz w drzewie zamiast wyświetlać wszystkie wyniki. Filtruje to wyniki i przyspiesza skaner. Unikaj również zbyt złożonych wyrażeń Regex z instrukcjami warunkowymi.

### Q: Czym jest plik .lsde? {#what-is-lsde-file}
R: To centralny plik Twojego projektu. Oparty na formacie JSON, centralizuje on wszystkie Twoje klucze, tłumaczenia, metadane oraz głosy audio.

Możesz go nawet zintegrować bezpośrednio ze swoją codebase, aby wyodrębnić wpisy i zmapować je według własnych potrzeb:
```ts
type MetasEntries = [key: StructureKeyWithNamespace, value: IStructureMetaData][];
type ValuesEntries = [StructureKeyWithNamespace, [Locales, string][]][];
type VoicesEntriesMap = [StructureKeyWithNamespace, [Locales, ISpeakerVoiceConfig[]][]][];
```
Zaleca się przechowywanie go w katalogu głównym (root) projektu, aby móc korzystać z wersjonowania w systemie Git. Ponieważ nie zawiera on żadnych wrażliwych danych, może być łatwo udostępniany tłumaczowi lub redaktorowi.

Jego obecność w katalogu głównym ułatwia również wyszukiwanie pełnych ścieżek kluczy, takich jak: `game:.scenes.the-ice-land.events.the-lost-house.1`. Twoje IDE rozpozna go jako standardowy plik JSON, co pozwoli Ci z łatwością czytać zapisane notatki i metadane.

Wreszcie, pliki `.lsde` są wstecznie kompatybilne: Twoje stare projekty otworzą się bez problemu w nowszych wersjach oprogramowania.

### Q: Czy LSDE jest darmowy? {#lsde-is-free}
Dostęp jest bezpłatny w fazie beta, ale stanie się płatny po oficjalnej premierze. Dostępna będzie wersja próbna, aby ocenić pełną funkcjonalność zgodnie z Twoimi potrzebami.

LSDE zaoferuje następnie 4 plany dostosowane do Twojego budżetu:
- **Essentiel**: dla podstawowych potrzeb w zakresie redagowania i kompozycji (licencja wieczysta).
- **Professionnel**: dla zaawansowanych potrzeb programistów (licencja wieczysta).
- **Entreprise**: dla potrzeb studiów z wieloma stanowiskami (licencja roczna).
- **Éducatif**: dla szkół językowych lub szkół tworzenia gier wideo (licencja roczna).

### Q: Dlaczego potrzebuję LSDE? {#why-i-need-lsde}
LSDE drastycznie redukuje złożoność Twoich projektów, oferując intuicyjny i uporządkowany interfejs. Pozwala on na wygodne komponowanie i tłumaczenie, bez ograniczeń związanych z IDE czy renderowaniem Twojego języka programowania. 

Obsługuje on różne paradygmaty projektowania, co czyni go kompatybilnym z większością "autorskich" silników gier chcących zoptymalizować swój przepływ pracy.

### Q: Jak zainstalować LSDE? {#how-install-lsde}
LSDE nie jest dostępny do bezpośredniego pobrania. Musisz skorzystać z instalatora `LS-Installer`, który zajmie się pobraniem i konfiguracją oprogramowania za Ciebie.

### Q: Jak aktywować LSDE? {#how-activate-lsde}
Twoja licencja zostanie wysłana automatycznie e-mailem po dokonaniu płatności. Aby ją aktywować, wystarczy podać w programie użyty adres e-mail oraz otrzymany klucz. 
Pamiętaj, że jedna aktywacja przypada na jednego użytkownika na jednej maszynie.
