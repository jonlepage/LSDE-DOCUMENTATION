---
title: "Pierwszy krok"
description: "Przy pierwszym uruchomieniu oprogramowania zostaniesz poproszony/a o rozpoczęcie okresu próbnego lub wprowadzenie klucza licencyjnego."
section: getting-started
outline: [2, 3]
---

# Pierwszy krok

## Rozpoczęcie {#getting-started}
Przy pierwszym uruchomieniu oprogramowania **zostaniesz poproszony/a o rozpoczęcie okresu próbnego** lub wprowadzenie klucza licencyjnego.
- **Okres próbny:**
Okres próbny pozwala na testowanie oprogramowania z wszystkimi jego funkcjami przez określony czas.

::: tip Uwaga
W fazie beta okres próbny jest nieograniczony i zostanie zresetowany po jej zakończeniu.
:::

- **Licencja:**
Jeśli posiadasz licencję, wprowadź ją, aby odblokować oprogramowanie.

::: tip Uwaga
Twój klucz został wysłany e-mailem podczas transakcji.
Nie możesz kupić klucza w okresie trwania bety oprogramowania.
:::

---

<DocImage src="/doc/lsde/doc-lsde-startscreen.webp" />

## Wybór języków interfejsu {#interface-language-choice}
LSDE oferuje 3 główne opcje przy uruchomieniu:

## Wczytaj projekt {#load-project}
<DocImage src="/doc/lsde/lsde-banner.webp" h="30" left icon />

Możesz wybrać plik z rozszerzeniem `.lsde`.

::: tip Uwaga
Jeśli skojarzenia plików są zainstalowane, podwójne kliknięcie pliku .lsde w eksploratorze umożliwia bezpośrednie otwarcie projektu.
:::

## Nowy projekt {#new-project}
Ta opcja pozwala na stworzenie nowego projektu poprzez wstępną konfigurację parametrów dla określonych typów projektów.
Możesz również wstępnie zainstalować najpopularniejsze języki ze Steam.
Pamiętaj, że te wstępne konfiguracje nie są ostateczne; można je zmienić w dowolnym momencie w ramach projektu.

::: tip Uwaga
Zapisuj swoje projekty w folderze obsługiwanym przez Git lub inny system. Pliki .lsde nie zawierają żadnych wrażliwych danych.
:::
Na dole ekranu znajdziesz również listę ostatnio otwartych projektów, co pozwala na szybkie wznowienie sesji roboczej.

## Projekty demonstracyjne {#demo-project}
Z oprogramowaniem dołączonych jest kilka projektów demonstracyjnych. Pozwalają one obserwować działanie niektórych funkcji lub czerpać inspirację do własnego workflow.

---

<DocImage src="/doc/lsde/doc-lsde-start-flashicon.webp" />

# Obowiązkowa konfiguracja {#mandatory-configuration}
Aby w pełni korzystać z LSDE i rozpocząć pracę, musisz obowiązkowo wykonać pierwszy krok konfiguracji początkowej.
Ten krok jest szybki i niezbędny do odblokowania wszystkich funkcji oprogramowania specyficznych dla Twojego projektu.

Ikona okna zarządzania lokalizacjami, znajdująca się w prawym górnym rogu w menu szybkich okien, będzie migać, sygnalizując, że wymagane są ważne informacje.

Po wejściu do okna zarządzania lokalizacjami musisz albo:
- Zaimportować istniejący folder swojego projektu, który zawiera już pliki i katalogi językowe.
- Albo ręcznie dodać języki i przestrzeń nazw (`namespace`).

Następnie wybierz główny język projektu, a będziesz gotowy/gotowa do używania LSDE.
Więcej informacji na temat menedżera lokalizacji znajdziesz w [tej sekcji](/pl/interface/localization-manager).
