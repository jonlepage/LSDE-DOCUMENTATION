---
title: "CLI"
description: "LSDE's CLI: control LSDE from Unity, Godot, Unreal, or a terminal with lsde:// links — no port or token required."
section: resources
outline: [2, 3]
---

# CLI

LSDE is driven from the command line through path-shaped links such as `lsde://scene/sc_7f3a9k2m/DIALOG-002`: another program, a script, or a terminal opens the link, and LSDE comes to the front on whatever it points to. There are no `lsde --goto --scene` style options — the path stands in for them. It's the same mechanism as `vscode://file/…` for VS Code or `steam://` for Steam — no extension to install, no port, no token.

## What it's for {#what-is-it}
- A **"View in LSDE"** button placed in the game engine editor (Unity, Godot, Unreal), on a character or the component that triggers a dialogue.
- A **"Replay in LSDE"** button that launches the player on the block the playthrough has reached.
- A link in a **ticket**, a design document, or a team message.
- A **terminal** command or a tooling script.

## The shape of a link {#link-shape}
```
lsde://<action>/<scene id>
lsde://<action>/<scene id>/<block name>
```

| Link | What LSDE does |
|---|---|
| `lsde://scene/sc_7f3a9k2m` | Opens the scene in the blueprint canvas |
| `lsde://scene/sc_7f3a9k2m/DIALOG-002` | Opens the scene, selects the block, and frames it |
| `lsde://play/sc_7f3a9k2m` | Opens the scene and starts the player from its starting block |
| `lsde://play/sc_7f3a9k2m/DIALOG-002` | Opens the scene, selects the block, and starts the player from it |

A few parsing rules:
- Scheme and action are case-insensitive; any action other than `scene` or `play` rejects the link.
- The scene id always follows the shape `sc_` + 8 characters (`0-9`, `a-z`).
- The block name is optional and matched **exactly**; a space or non-ASCII character is encoded as in any URL (`DIALOGUE%20A` for `DIALOGUE A`).
- A malformed link is **rejected and logged**, never guessed at.

::: tip Note
Available today on **Windows**, with two actions (`scene` and `play`). More platforms and actions are planned.
:::

## Finding a scene's id and a block's name {#find-ids}
- **In LSDE** — right-click the scene in the scene tree, then **Scene ID**: it goes straight to the clipboard.
- **In the game's code** — exporting the graph generates typed constants (C#, C++, GDScript, TypeScript); each scene constant's value is its id, e.g. `Scenes.act1` → `"sc_7f3a9k2m"`.
- **Through an assistant connected over MCP** — `lsde_list_scenes` and `lsde_read_scene` return `sceneId` for every scene ([MCP Bridge](/en/resources/mcp-bridge)).

A block's name is the one shown on its card in the canvas and on its row in the tree (`DIALOG-002`): stable, scoped to its scene, and never reused after a deletion.

## Enabling links on Windows {#enable-windows}
Registration **never happens on its own**: menu **Help → Windows Integration → Register Links**. That click registers `lsde://` under this copy of LSDE, with no elevation required.

Click it again if a button or link stops doing anything, if LSDE was moved, or if several copies are installed on the machine — the last one registered receives the links.

## Triggering LSDE from an engine or tool {#trigger-from-engine}
Any program that can open a URL can send a link — no LSDE library is needed.

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

**Web page, ticket, document**
```html
<a href="lsde://scene/sc_7f3a9k2m/DIALOG-002">View in LSDE</a>
```

**Terminal**
```
PowerShell   Start-Process "lsde://play/sc_7f3a9k2m/DIALOG-002"
cmd          start "" "lsde://play/sc_7f3a9k2m/DIALOG-002"
```

## Security: a link can only reveal {#security}
A link comes from the outside, and any web page can open one — so security is built in by design:
- **No writes.** Both actions open a scene, select a block, and start the player, which never writes. Anything that modifies a project goes through the [MCP facade](/en/resources/mcp-bridge), protected by a token.
- **No project opened, closed, or reloaded.** A link never carries a file path.
- **A closed grammar.** Anything that doesn't match the expected shape is rejected, never guessed at.
- **Nothing listens.** No network port is opened; the worst a link can do is display a scene.
