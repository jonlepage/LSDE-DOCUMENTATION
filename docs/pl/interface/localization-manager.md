---
title: "Lokalizacja"
description: "Ten obowiązkowy moduł umożliwia konfigurację języków i przestrzeni nazw Twojego projektu."
section: interface
outline: [2, 3]
---

# Lokalizacja

Ten obowiązkowy moduł umożliwia konfigurację języków i przestrzeni nazw Twojego projektu.
Masz możliwość użycia inteligentnego importu lub ręcznej konfiguracji usługi języków.

::: tip Uwaga
LSDE obsługuje kody ISO 639-1 lub kombinacje ISO 639-1 - ISO 3166-1. [Więcej szczegółów na temat specyfikacji znajdziesz tutaj](/pl/getting-started/introduction#i18n-key-convention)
:::

## Interfejs {#interface}
<DocImage src="/doc/lsde/doc-lsde-ui-localisations.webp" />

Interfejs oferuje następujące sekcje:
0. **Inteligentny import** (opcjonalnie)
Zaimportuj istniejącą strukturę folderów, zorganizowaną w następujący sposób:
`../folder/lang/namespace.json` => `../locales/en/main.json`

### Konfiguracja języków {#setup-languages}
- **Konfiguracja kodów `ISO 639-1` i `ISO 3166-1`**
Kody języków mogą być łączone zgodnie z dwiema specyfikacjami, na przykład: `en` lub `en-US`, `en-GB`.
Te kody `ISO 639-1 - ISO 3166-1` odpowiadają językowi, po którym następuje jego lokalizacja.

**Ta sekcja umożliwia:**
1. Dodawanie/Usuwanie języków
Otwiera nowe okno dialogowe, w którym możesz użyć menedżera do znajdowania i/lub usuwania języków projektu.
2. Ustawianie języka podstawowego
Ten język jest używany jako źródło w niektórych zadaniach i jest obowiązkowy do pracy z oprogramowaniem.
4. Wizualizowanie, usuwanie lub zmienianie kolejności języków w żądanej kolejności.

::: tip Uwaga
(To jest kolejność renderowania w edytorze.) To jest język podstawowy projektu.
:::

### Przestrzenie nazw {#namespace}
3. To jest miejsce do tworzenia przestrzeni nazw.
Przestrzeń nazw reprezentuje po prostu **nazwę pliku zawierającego klucze**. To takie proste.
Przykład: `locales/en-GB/main.json`. Tutaj przestrzeń nazw będzie `main`, a klucze w pliku będą miały względne ścieżki.

::: tip Uwaga
Możesz przedefiniować foldery przestrzeni nazw lub je usunąć.
:::
