---
title: "CLI"
description: "La CLI de LSDE : pilotez LSDE depuis Unity, Godot, Unreal ou un terminal avec des liens lsde://, sans port ni jeton."
section: resources
outline: [2, 3]
---

# CLI

LSDE se pilote en ligne de commande par des liens en forme de chemin, comme `lsde://scene/sc_7f3a9k2m/DIALOG-002` : un autre logiciel, un script ou un terminal ouvre le lien, et LSDE passe au premier plan sur ce qu'il désigne. Il n'existe pas d'options du genre `lsde --goto --scene` : le chemin en tient lieu. C'est le même mécanisme que `vscode://file/…` pour VS Code ou `steam://` pour Steam — aucune extension à installer, aucun port, aucun jeton.

## À quoi ça sert {#what-is-it}
- Un bouton **« Voir dans LSDE »** posé dans l'éditeur du moteur de jeu (Unity, Godot, Unreal), sur un personnage ou un composant qui déclenche un dialogue.
- Un bouton **« Rejouer dans LSDE »** qui lance le lecteur sur le bloc où en est la partie.
- Un lien dans un **ticket**, un document de conception ou un message d'équipe.
- Une commande de **terminal** ou un script d'outillage.

## La forme d'un lien {#link-shape}
```
lsde://<action>/<identifiant de scène>
lsde://<action>/<identifiant de scène>/<nom du bloc>
```

| Lien | Ce que LSDE fait |
|---|---|
| `lsde://scene/sc_7f3a9k2m` | Ouvre la scène dans le canevas des blueprints |
| `lsde://scene/sc_7f3a9k2m/DIALOG-002` | Ouvre la scène, sélectionne le bloc et cadre dessus |
| `lsde://play/sc_7f3a9k2m` | Ouvre la scène et lance le lecteur depuis son bloc de départ |
| `lsde://play/sc_7f3a9k2m/DIALOG-002` | Ouvre la scène, sélectionne le bloc et lance le lecteur à partir de lui |

Quelques règles de lecture :
- Schéma et action sans égard à la casse ; toute action autre que `scene` ou `play` refuse le lien.
- L'identifiant de scène suit toujours la forme `sc_` + 8 caractères (`0-9`, `a-z`).
- Le nom du bloc est facultatif et comparé **exactement** ; un espace ou un caractère hors ASCII s'encode comme dans toute adresse (`DIALOGUE%20A` pour `DIALOGUE A`).
- Un lien mal formé est **refusé et journalisé**, jamais deviné.

::: tip Note
Disponible aujourd'hui sous **Windows**, avec deux actions (`scene` et `play`). D'autres plateformes et actions suivront.
:::

## Retrouver l'identifiant d'une scène et le nom d'un bloc {#find-ids}
- **Dans LSDE** — clic droit sur la scène dans l'arborescence, puis **Identifiant de scène** : il part dans le presse-papiers.
- **Dans le code du jeu** — l'export du graphe génère des constantes typées (C#, C++, GDScript, TypeScript) ; chaque constante de scène vaut son identifiant, par exemple `Scenes.acte1` → `"sc_7f3a9k2m"`.
- **Par un assistant branché en MCP** — `lsde_list_scenes` et `lsde_read_scene` rendent `sceneId` pour chaque scène ([MCP Bridge](/fr/resources/mcp-bridge)).

Le nom d'un bloc est celui affiché sur sa carte dans le canevas et sur sa ligne dans l'arborescence (`DIALOG-002`) : stable, propre à sa scène, jamais réutilisé après une suppression.

## Activer les liens sous Windows {#enable-windows}
L'inscription ne se fait **jamais toute seule** : menu **Aide → Intégration Windows → Inscrire les liens**. Ce clic inscrit `lsde://` au nom de cette copie de LSDE, sans élévation de droits.

Recliquez si un bouton ou un lien ne fait plus rien, si LSDE a été déplacé, ou si plusieurs copies sont installées sur le poste — la dernière inscrite reçoit les liens.

## Piloter LSDE depuis un moteur ou un outil {#trigger-from-engine}
Tout programme capable d'ouvrir une adresse peut envoyer un lien — aucune bibliothèque LSDE n'est nécessaire.

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

**Page web, ticket, document**
```html
<a href="lsde://scene/sc_7f3a9k2m/DIALOG-002">Voir dans LSDE</a>
```

**Terminal**
```
PowerShell   Start-Process "lsde://play/sc_7f3a9k2m/DIALOG-002"
cmd          start "" "lsde://play/sc_7f3a9k2m/DIALOG-002"
```

## Sécurité : un lien ne fait que montrer {#security}
Un lien vient de l'extérieur, et n'importe quelle page web peut en ouvrir un — la sécurité tient donc par construction :
- **Aucune écriture.** Les deux actions ouvrent une scène, sélectionnent un bloc et lancent le lecteur, qui n'écrit jamais. Tout ce qui modifie un projet passe par la [façade MCP](/fr/resources/mcp-bridge), protégée par un jeton.
- **Aucun projet ouvert, fermé ou rechargé.** Un lien ne porte jamais de chemin de fichier.
- **Une grammaire fermée.** Ce qui ne correspond pas à la forme attendue est refusé, jamais deviné.
- **Rien n'écoute.** Aucun port réseau n'est ouvert ; le pire qu'un lien puisse faire est d'afficher une scène.
