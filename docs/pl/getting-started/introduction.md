---
title: "Wprowadzenie"
description: "Więcej niż proste narzędzie do tłumaczenia, LSDE jest zoptymalizowane, aby umożliwić Ci stworzenie idealnego i spersonalizowanego przepływu pracy dla…"
section: getting-started
outline: [2, 3]
---

# Wprowadzenie

<DocImage src="/doc/lsde/lsde-banner.webp" h="80" icon />

## Czym jest LS-Dialog Editor? {#what-is-ls-dialog-editor}
**LSDE**: akronim od *LepaSoft Dialog Editor*, to narzędzie zaprojektowane, aby **wspierać deweloperów w tworzeniu i tłumaczeniu ich projektów**.
Więcej niż proste narzędzie do tłumaczenia, LSDE jest zoptymalizowane, aby umożliwić Ci stworzenie idealnego i spersonalizowanego przepływu pracy dla każdego projektu.
- Tłumaczenie tekstu ręczne lub wspomagane przez LLM.
- Kompozycja tekstu ręczna lub wspomagana przez LLM.
- Scentralizowane zarządzanie dialogami i ciągami tekstowymi.
- Śledzenie zmian i historia wersji.
- Automatyczne wykrywanie niespójności lub problemów.
- Obsługa wielu formatów eksportu i importu.
- Możliwa integracja z narzędziami zewnętrznymi (silniki gier, potoki CI/CD).
- Organizacja struktury i renderowania interfejsu Twojego projektu.
- Narzędzia do walidacji językowej (długość, ograniczenia, tagi, zmienne).
- Współpraca w czasie rzeczywistym lub poprzez udostępnione pliki.
- Generowanie i synchronizacja narracji głosowej audio.
- Zaawansowane dostosowania oprogramowania do Twoich potrzeb.

## Jak działa LS-Dialog Editor? {#how-it-works}
LSDE opiera się na **dobrych praktykach i18n**, aby organizować klucze tłumaczeniowe.
Nie narzucając unikalnej struktury, integruje sprawdzone przez frameworki podejścia do zarządzania złożonościami językowymi, takimi jak konteksty i liczby mnogie.

**Przepływ pracy jest bardzo prosty:**
- Tworzysz nowy projekt.
- Definiujesz folder swojego projektu.
- Klucze tworzysz ręcznie lub automatycznie, skanując swój projekt.
- Stosujesz zadania na kluczach (tłumaczenia, korekty, reorganizacje...).

## Klucze {#the-keys}
LSDE wykorzystuje system kluczy hierarchicznych do precyzyjnej lokalizacji każdego dialogu.
Przykład: Klucz `game:scenes.events.The-quest-of-sun.d1`
- `game:` wskazuje na przestrzeń nazw (namespace). Nazwa ta jest definiowana przez nazwę pliku tłumaczeniowego, na przykład: `locales/en/game.json`, `locales/en/scenes.json`...
- `scenes.events.The-quest-of-sun.d1` reprezentuje ścieżkę dostępu, aby odnaleźć dialog w strukturze JSON pliku.

```json
	// file game.json
	{
		'scenes': {
			'title': '',
			'description': '',
			'events': {
				'The-quest-of-sun': {
					'd1': '',
				},

			},
		},
	},
```

::: tip Uwaga
 buforuje dialogi w plikach `.lsde`. Ułatwia to udostępnianie i odzyskiwanie projektów, unikając wysyłania skomplikowanego zestawu plików do klientów.
:::

## Konwencje kluczy i18n {#i18n-key-convention}
[W3C Internationalization](https://www.w3.org/International/) jest punktem odniesienia, który definiuje i18n jako standard, niezależnie od jakiejkolwiek biblioteki oprogramowania.
Zalecenia W3C określają podstawowe zasady:
- unikać konkatenacji
- zarządzać liczbami mnogimi zgodnie z regułami językowymi CLDR
- zarządzać datami, liczbami i walutami
- zapewniać kontekst tłumaczom
- oddzielać tekst od kodu
- przewidywać lokalizacje awaryjne (fallback)
- nigdy nie zakładać długości ani kolejności słów
- obsługiwać pisma RTL (arabskie, hebrajskie)
Jeśli chodzi o standardy i dobre praktyki architektoniczne JSON, [ICU (International Components for Unicode)](https://cldr.unicode.org/index/json-format-data) służy jako punkt odniesienia.

## i18next & i18n ? {#i18next-i18n}
LSDE opiera się zarówno na i18n, jak i na niektórych dobrych praktykach zaczerpniętych z [i18next](https://www.i18next.com/misc/the-history-of-i18next).
W szczególności dla:
- struktury folderów
- kontekstualizacji liczb mnogich
- obsługi zagnieżdżeń (nesting) i zmiennych...

### Dla gier {#for-game-dev}
LSDE obsługuje dwa typy dialogów w grach.
Nie ma jednej uniwersalnej dobrej metody, lecz raczej narzędzia dostosowane do każdego zadania.
- SAD : "Single Actor Dialog"
Jeden aktor na dialog, zazwyczaj idealny dla gier akcji lub gier bez złożonej narracji.
Oznacza to, że każdy klucz odpowiada dialogowi lub fragmentowi tekstu i musi być połączony i złożony w silniku gry.

::: tip Uwaga
To podejście może wprowadzić wiele złożoności w grze narracyjnej z dużą liczbą interakcji między wieloma postaciami, np. w grach JRPG.
:::
- MAD: "Multiple Actors Dialog"
Wielu aktorów w tym samym dialogu, identyfikowanych za pomocą znaczników (tagów), idealne dla gier RPG lub gier ze złożoną narracją, w której uczestniczy wielu aktorów.
Oznacza to, że zintegrujesz sekwencję dialogów, oddzielonych znacznikami (tagami), które następnie zostaną zinterpretowane przez silnik gry.

::: tip Uwaga
Ułatwia to znacznie analizowanie złożonych dialogów z udziałem wielu rozmówców, ale jest nieco zbyt złożone na przykład dla prostych gier akcji.
:::

### Dla WEB {#for-web-dev}
Nie ma już tak naprawdę powodu, aby nie tłumaczyć swojej strony internetowej, aby móc zaprezentować swoje narzędzie na całym świecie.
LSDE oferuje komfort pracy przy tworzeniu Twojej witryny internetowej z podglądem w czasie rzeczywistym dzięki HMR i bibliotekom i18n, takim jak i18next, w wersjach dla React czy Next.js, na przykład.

- P: Czy nie powinniśmy pozwolić rozszerzeniom zarządzać wielojęzycznością stron internetowych?
- O: Tak i nie. Te narzędzia mogą pomóc doraźnie, ale pogorszą UX i UI Twojej witryny. Nie zapewniają również dobrego pozycjonowania SEO, w przeciwieństwie do przetłumaczonej strony internetowej, która może być indeksowana i proponowana osobom szukającym treści w ich języku ojczystym.

### Dla oprogramowania {#for-app-dev}
Tłumaczenie Twojego oprogramowania i aplikacji jest niezwykle ważne.
Architektury, języki i techniki rozwoju oprogramowania są zazwyczaj znacznie bardziej swobodne niż te w sieci.
Dlatego LSDE oferuje w 100% konfigurowalne narzędzia, aby dostosować je do Twoich potrzeb i architektury.
To właśnie wyrażenia regularne (regex) umożliwiają stworzenie powiązania między Twoją architekturą a LSDE.
