---
title: "CLI"
description: "CLI w LSDE: steruj LSDE z Unity, Godota, Unreala lub terminala za pomocą linków lsde://, bez portu i tokenu."
section: resources
outline: [2, 3]
---

# CLI

LSDE można sterować z linii poleceń za pomocą linków w postaci ścieżki, takich jak `lsde://scene/sc_7f3a9k2m/DIALOG-002`: inny program, skrypt lub terminal otwiera link, a LSDE przechodzi na pierwszy plan na to, co on wskazuje. Nie ma opcji w stylu `lsde --goto --scene` — zastępuje je ścieżka. To ten sam mechanizm co `vscode://file/…` w VS Code czy `steam://` w Steam — bez instalowania rozszerzeń, bez portu, bez tokenu.

## Do czego to służy {#what-is-it}
- Przycisk **„Pokaż w LSDE”** umieszczony w edytorze silnika gry (Unity, Godot, Unreal), na postaci lub komponencie wyzwalającym dialog.
- Przycisk **„Odtwórz w LSDE”**, który uruchamia odtwarzacz na bloku, w którym aktualnie jest rozgrywka.
- Link w **zgłoszeniu (ticket)**, dokumencie projektowym lub wiadomości zespołu.
- Polecenie **terminala** lub skrypt narzędziowy.

## Postać linku {#link-shape}
```
lsde://<akcja>/<identyfikator sceny>
lsde://<akcja>/<identyfikator sceny>/<nazwa bloku>
```

| Link | Co robi LSDE |
|---|---|
| `lsde://scene/sc_7f3a9k2m` | Otwiera scenę na płótnie blueprintów |
| `lsde://scene/sc_7f3a9k2m/DIALOG-002` | Otwiera scenę, zaznacza blok i kadruje na nim |
| `lsde://play/sc_7f3a9k2m` | Otwiera scenę i uruchamia odtwarzacz od bloku startowego |
| `lsde://play/sc_7f3a9k2m/DIALOG-002` | Otwiera scenę, zaznacza blok i uruchamia odtwarzacz od niego |

Kilka reguł odczytu:
- Schemat i akcja nie rozróżniają wielkości liter; każda akcja inna niż `scene` lub `play` odrzuca link.
- Identyfikator sceny zawsze ma postać `sc_` + 8 znaków (`0-9`, `a-z`).
- Nazwa bloku jest opcjonalna i porównywana **dokładnie**; spacja lub znak spoza ASCII jest kodowana jak w każdym adresie URL (`DIALOGUE%20A` dla `DIALOGUE A`).
- Źle sformułowany link jest **odrzucany i odnotowywany w dzienniku**, nigdy nie jest zgadywany.

::: tip Uwaga
Dziś dostępne na **Windows**, z dwiema akcjami (`scene` i `play`). Kolejne platformy i akcje są planowane.
:::

## Znajdowanie identyfikatora sceny i nazwy bloku {#find-ids}
- **W LSDE** — kliknij prawym przyciskiem scenę w drzewie scen, a następnie **Identyfikator sceny**: trafia od razu do schowka.
- **W kodzie gry** — eksport grafu generuje typowane stałe (C#, C++, GDScript, TypeScript); wartością każdej stałej sceny jest jej identyfikator, np. `Scenes.akt1` → `"sc_7f3a9k2m"`.
- **Przez asystenta podłączonego przez MCP** — `lsde_list_scenes` i `lsde_read_scene` zwracają `sceneId` dla każdej sceny ([MCP Bridge](/pl/resources/mcp-bridge)).

Nazwa bloku to ta wyświetlana na jego karcie na płótnie i w jego wierszu w drzewie (`DIALOG-002`): stabilna, przypisana do swojej sceny i nigdy nieużywana ponownie po usunięciu.

## Włączanie linków w Windows {#enable-windows}
Rejestracja **nigdy nie odbywa się sama**: menu **Pomoc → Integracja z Windows → Zarejestruj linki**. To kliknięcie rejestruje `lsde://` na rzecz tej kopii LSDE, bez podnoszenia uprawnień.

Kliknij ponownie, jeśli przycisk lub link przestał działać, jeśli LSDE zostało przeniesione do innego folderu, albo jeśli na komputerze zainstalowanych jest kilka kopii — linki odbiera ta zarejestrowana jako ostatnia.

## Sterowanie LSDE z silnika lub narzędzia {#trigger-from-engine}
Każdy program potrafiący otworzyć adres URL może wysłać link — żadna biblioteka LSDE nie jest potrzebna.

**Unity (C#)**
```csharp
#if UNITY_EDITOR
using System;
using UnityEngine;

public static class LsdeLinks
{
    public static void Reveal(string sceneId, string blockName = null) =>
        Application.OpenURL(Build("scene", sceneId, blockName));

    public static void Play(string sceneId, string blockName = null) =>
        Application.OpenURL(Build("play", sceneId, blockName));

    static string Build(string action, string sceneId, string blockName) =>
        string.IsNullOrEmpty(blockName)
            ? $"lsde://{action}/{sceneId}"
            : $"lsde://{action}/{sceneId}/{Uri.EscapeDataString(blockName)}";
}
#endif
```

**Godot (GDScript)**
```gdscript
func reveal_in_lsde(scene_id: String, block_name := "") -> void:
    var url := "lsde://scene/" + scene_id
    if block_name != "":
        url += "/" + block_name.uri_encode()
    OS.shell_open(url)
```

**Unreal Engine (C++)**
```cpp
void RevealInLsde(const FString& SceneId, const FString& BlockName)
{
    FString Url = TEXT("lsde://scene/") + SceneId;
    if (!BlockName.IsEmpty())
    {
        Url += TEXT("/") + FGenericPlatformHttp::UrlEncode(BlockName);
    }
    FPlatformProcess::LaunchURL(*Url, nullptr, nullptr);
}
```

**Strona internetowa, zgłoszenie, dokument**
```html
<a href="lsde://scene/sc_7f3a9k2m/DIALOG-002">Pokaż w LSDE</a>
```

**Terminal**
```
PowerShell   Start-Process "lsde://play/sc_7f3a9k2m/DIALOG-002"
cmd          start "" "lsde://play/sc_7f3a9k2m/DIALOG-002"
```

## Bezpieczeństwo: link może jedynie pokazać {#security}
Link pochodzi z zewnątrz i każda strona internetowa może go otworzyć — dlatego bezpieczeństwo wynika z samej konstrukcji:
- **Żadnego zapisu.** Obie akcje otwierają scenę, zaznaczają blok i uruchamiają odtwarzacz, który nigdy nie zapisuje. Wszystko, co modyfikuje projekt, przechodzi przez [fasadę MCP](/pl/resources/mcp-bridge), chronioną tokenem.
- **Żaden projekt nie jest otwierany, zamykany ani przeładowywany.** Link nigdy nie niesie ścieżki do pliku.
- **Zamknięta gramatyka.** To, co nie pasuje do oczekiwanej postaci, jest odrzucane, nigdy zgadywane.
- **Nic nie nasłuchuje.** Żaden port sieciowy nie jest otwierany; najgorsze, co może zrobić link, to wyświetlić scenę.
