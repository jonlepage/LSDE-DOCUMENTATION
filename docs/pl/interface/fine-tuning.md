---
title: "Dostrajanie"
description: "Ta funkcja umożliwia kontrolę LLM w czasie rzeczywistym, w zależności od aktywnego profilu."
section: interface
outline: [2, 3]
---

# Dostrajanie

Ta funkcja umożliwia kontrolę LLM w czasie rzeczywistym, w zależności od aktywnego profilu.
Pozwala tworzyć profile z niestandardowymi regułami, określając w ten sposób sposób, w jaki LSDE przesyła informacje.
Niezwykle wszechstronny, system ten oferuje możliwość eksperymentowania z różnymi scenariuszami i dostosowywania dyrektyw do Twoich konkretnych potrzeb.
System został zaprojektowany do szybkiej aktywacji i dezaktywacji. Ponadto możesz modyfikować dyrektywy w czasie rzeczywistym bez wpływu na zapisane profile.

## Do kogo jest skierowany ten system? {#target-audience}
System ten jest przeznaczony dla wszystkich użytkowników. Niektórzy preferują podstawowe dyrektywy, podczas gdy inni wybiorą bardziej dynamiczny przepływ pracy, przydatny na przykład do pisania zadań lub scenariuszy.

---

## Interfejs {#interface}
### Narzędzia {#tools}
Odkryj główne narzędzia do pracy z Fine-Tuningiem.

<DocImage src="/doc/lsde/doc-lsde-ui-finetuning.webp" />

1. **Aktywuj/Dezaktywuj Fine-Tuning**
Szybko aktywuj lub dezaktywuj wpływ Fine-Tuningu na bieżące i przyszłe zadania, wszystko w czasie rzeczywistym.

::: tip Uwaga
Ikona i nazwa aktywnego profilu są również widoczne na pasku szybkich działań, obok ikony Fine-Tuningu.
:::
2. **Tryb Pionowy/Poziomy**
Umożliwia zadokowanie okna w trybie pionowym lub poziomym, wyświetlając profile w bardziej kompaktowej formie.
3. **Pokaż/Ukryj listę profili**
Ukryj listę profili, aby zwolnić miejsce lub użyj skrótów klawiszowych, aby uzyskać do niej dostęp.
### Profile {#profiles}
4. **Utwórz profil**
Umożliwia utworzenie nowego profilu.
5. **Lista profili**
To tutaj możesz wybierać, usuwać i modyfikować profile.
### Konfiguracja {#Configuration}
Konfiguracja aktywnego profilu
6. **Osobista notatka profilu**
Te notatki nigdy nie są przekazywane do LLM; służą wyłącznie jako informacja dla użytkownika.
7. **Reguły przypisane do profilu**
Reguły te uzupełniają podstawowe reguły LSDE. Masz możliwość dezaktywowania domyślnej reguły w opcjach zadań.
8. **Dyrektywa zadania**
Umożliwia wzbogacenie zawartości domyślnego zadania.
9. **Niestandardowe opisy**
Opisy te są dodawane do metadanych (metas).
LSDE systematycznie przesyła metadane i ich opisy do LLM. Ta przestrzeń pozwala dodawać uzupełniające informacje do tych opisów.
10. **Dodatkowe opcje**
Aktywuj lub dezaktywuj specyficzne zachowanie LSDE podczas wysyłania informacji do LLM z aktywnym profilem.
Najedź myszką na każdy parametr, aby wyświetlić opis jego wpływu.
