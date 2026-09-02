---
title: "Tłumaczenie"
description: "LSDE oferuje potężne narzędzia, które pozwalają nam tłumaczyć na wszystkie języki świata."
section: features
outline: [2, 3]
---

# Tłumaczenie

## Jak tłumaczyć {#how-to-translate}
::: tip Uwaga
LSDE oferuje potężne narzędzia, które pozwalają nam tłumaczyć na wszystkie języki świata.
:::
LLM (*Large Language Models*) to architektury matematyczne zaprojektowane przez człowieka, które doskonale radzą sobie z tłumaczeniem, pod warunkiem dostarczenia im odpowiedniego kontekstu.
 domyślnie dostarcza kontekst do każdego zapytania kierowanego do LLM, co gwarantuje bardziej trafne wyniki.

::: tip Uwaga
Chociaż wyniki są satysfakcjonujące i mogą znacznie obniżyć koszty produkcji, niezbędne jest skorzystanie z usług profesjonalnego studia w celu końcowej weryfikacji.
:::

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-1.webp" />

Aby przetłumaczyć dialog w LSDE, zacznijmy od dodania obsługiwanych języków do naszego projektu za pomocą menedżera języków.

1. Otwórz okno [konfiguracji lokalizacji i18n](/pl/interface/localization-manager#patterns).
2. Dodaj języki do swojego projektu za pomocą wskazanego przycisku.
3. Wybierz żądane języki oraz główny język projektu.
Dostępne opcje są w formacie `ISO 639-1` i `ISO 3166-1`.

Po dodaniu języków upewnij się, że poprawnie zdefiniowano główny język projektu. Ten krok jest niezbędny do odblokowania większości akcji w oprogramowaniu.

::: tip Uwaga
Chociaż najlepiej, aby język główny był ostateczny, można go zmienić w dowolnym momencie.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-2.webp" left />

1. Następnie wybierz klucz w strukturze drzewa. Ten wybór wyświetli wszystkie powiązane dialogi w głównym oknie edytora.
2. Możesz następnie przefiltrować języki, nad którymi chcesz pracować.

::: tip Uwaga
Kliknięcie prawym przyciskiem myszy pozwala szybko przełączać się między wyświetlaniem wszystkich języków a wyświetlaniem tylko języka głównego.
:::

---

## Tłumaczenie za pomocą LLM {#translate-with-llm}
<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-3.webp" />

1. Najpierw kliknij dialog w edytorze, aby aktywować jego edycję.
Pojawi się ikona pozwalająca zarządzać żądanym zadaniem za pomocą menu.

Domyślnie  oferuje już skonfigurowane zadania.
W tym konkretnym przypadku użyjemy zadania *Tłumacz*.

::: tip Uwaga
Dostępne zadania można w razie potrzeby zmienić w ustawieniach globalnych.
:::
2. Wybierzmy zadanie tłumaczenia.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-4.webp" />

Otwiera się okno konfiguracji, aby dostosować szczegóły zadania:
1. Możliwość włączenia lub wyłączenia niektórych filtrów przed uruchomieniem.
2. Regulacja głębokości iteracji (jeśli przetwarzanie dotyczy folderu).
3. Wyświetlanie/ukrywanie ignorowanych kluczy zgodnie z aktualnymi parametrami.
4. Ręczne włączanie/wyłączenie instancji do uwzględnienia, jeśli parametry automatyczne nie są wystarczające.
5. Dodanie dodatkowych instrukcji, aby pokierować LLM.

::: tip Uwaga
Używaj strzałek góra/dół na klawiaturze, aby poruszać się po swojej globalnej historii.
:::

Po dokonaniu ustawień kliknij *Potwierdź* (w prawym dolnym rogu).

::: tip Uwaga
Gdy tylko zadanie zostanie utworzone, jest ono przekazywane do systemu automatycznego przetwarzania. System ten aktywuje się przy otwarciu projektu, aby wznowić bieżące zadania.
:::

---

Wszystkie instancje przypisane do zadania przełączają się w tryb porównywania, co pozwala na wizualizację tekstu oryginalnego po lewej stronie i odpowiedzi po prawej.

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-5.webp" left />

1. Ten przycisk wyświetla liczbę liter dodanych względem oryginalnego tekstu.

::: tip Uwaga
Pozwala on również wyświetlać lub ukrywać dodane tokeny.
:::
2. Ten przycisk wyświetla liczbę usuniętych liter.

::: tip Uwaga
Pozwala on również wyświetlać lub ukrywać usunięte tokeny.
:::
3. Ten przycisk wyświetla ostateczny stan ogólny (dodatni lub ujemny bilans znaków).

::: tip Uwaga
Pozwala on również przełączyć się na renderowanie końcowe, jeśli anulujesz zmiany, klikając odpowiednie fragmenty tekstu.
:::
4. Renderowanie zmian: możesz kliknąć każdy znacznik, aby anulować niepożądaną zmianę.
5. Możesz iterować tyle razy, ile to konieczne, wysyłając dodatkowe instrukcje do LLM.

::: tip Uwaga
w zależności od używanego modelu buforowanie (caching) nie jest systematyczne, co może wykładniczo zwiększyć koszty, ponieważ cała historia jest przesyłana przy każdej iteracji.
:::
6. Telemetria: wyświetla koszty w tokenach zwrócone przez dostawcę LLM.
7. Przyciski do akceptowania lub odrzucania zmian po zakończeniu dopracowywania.
8. *Experimental*: pozwala dodać automatyczne poprawki w zależności od pewnych scenariuszy (np. jeśli LLM nie zwraca oryginalnego tekstu podczas kontynuacji dyskusji).
9. Nawigacja w historii zmian, aby wrócić do poprzedniej wersji.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-6.webp" />

Gdy wynik będzie satysfakcjonujący, zatwierdź go i w razie potrzeby ręcznie dostosuj ostatnie szczegóły.

---
