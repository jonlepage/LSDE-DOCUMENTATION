---
title: "CLI"
description: "La CLI de LSDE: controla LSDE desde Unity, Godot, Unreal o una terminal con enlaces lsde://, sin puertos ni tokens."
section: resources
outline: [2, 3]
---

# CLI

LSDE se controla desde la línea de comandos mediante enlaces con forma de ruta, como `lsde://scene/sc_7f3a9k2m/DIALOG-002`: otro programa, un script o una terminal abre el enlace, y LSDE pasa a primer plano sobre aquello que señala. No existen opciones tipo `lsde --goto --scene`: la ruta cumple esa función. Es el mismo mecanismo que `vscode://file/…` en VS Code o `steam://` en Steam — sin extensiones que instalar, sin puertos, sin tokens.

## Para qué sirve {#what-is-it}
- Un botón **"Ver en LSDE"** colocado en el editor del motor de juego (Unity, Godot, Unreal), sobre un personaje o el componente que dispara un diálogo.
- Un botón **"Reproducir en LSDE"** que lanza el reproductor en el bloque donde va la partida.
- Un enlace en un **ticket**, un documento de diseño o un mensaje de equipo.
- Un comando de **terminal** o un script de herramientas.

## La forma de un enlace {#link-shape}
```
lsde://<acción>/<id de escena>
lsde://<acción>/<id de escena>/<nombre de bloque>
```

| Enlace | Qué hace LSDE |
|---|---|
| `lsde://scene/sc_7f3a9k2m` | Abre la escena en el lienzo de blueprints |
| `lsde://scene/sc_7f3a9k2m/DIALOG-002` | Abre la escena, selecciona el bloque y encuadra sobre él |
| `lsde://play/sc_7f3a9k2m` | Abre la escena y lanza el reproductor desde su bloque inicial |
| `lsde://play/sc_7f3a9k2m/DIALOG-002` | Abre la escena, selecciona el bloque y lanza el reproductor desde él |

Algunas reglas de lectura:
- El esquema y la acción no distinguen mayúsculas; cualquier acción distinta de `scene` o `play` rechaza el enlace.
- El id de escena siempre sigue la forma `sc_` + 8 caracteres (`0-9`, `a-z`).
- El nombre del bloque es opcional y se compara **exactamente**; un espacio o un carácter fuera de ASCII se codifica como en cualquier URL (`DIALOGUE%20A` para `DIALOGUE A`).
- Un enlace mal formado se **rechaza y se registra**, nunca se interpreta a medias.

::: tip Nota
Disponible hoy en **Windows**, con dos acciones (`scene` y `play`). Llegarán más plataformas y acciones.
:::

## Encontrar el id de una escena y el nombre de un bloque {#find-ids}
- **En LSDE** — clic derecho sobre la escena en el árbol de escenas y luego **Id de escena**: se copia directamente al portapapeles.
- **En el código del juego** — exportar el grafo genera constantes tipadas (C#, C++, GDScript, TypeScript); cada constante de escena vale su id, por ejemplo `Scenes.acto1` → `"sc_7f3a9k2m"`.
- **Mediante un asistente conectado por MCP** — `lsde_list_scenes` y `lsde_read_scene` devuelven `sceneId` para cada escena ([MCP Bridge](/es/resources/mcp-bridge)).

El nombre de un bloque es el que se muestra en su tarjeta del lienzo y en su fila del árbol (`DIALOG-002`): estable, propio de su escena y nunca reutilizado tras un borrado.

## Activar los enlaces en Windows {#enable-windows}
El registro **nunca ocurre solo**: menú **Ayuda → Integración con Windows → Registrar enlaces**. Ese clic registra `lsde://` a nombre de esta copia de LSDE, sin necesidad de elevar permisos.

Vuelve a hacer clic si un botón o un enlace deja de funcionar, si LSDE se movió de carpeta, o si hay varias copias instaladas en el equipo — la última registrada es la que recibe los enlaces.

## Controlar LSDE desde un motor o una herramienta {#trigger-from-engine}
Cualquier programa capaz de abrir una URL puede enviar un enlace — no se necesita ninguna librería de LSDE.

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

**Página web, ticket, documento**
```html
<a href="lsde://scene/sc_7f3a9k2m/DIALOG-002">Ver en LSDE</a>
```

**Terminal**
```
PowerShell   Start-Process "lsde://play/sc_7f3a9k2m/DIALOG-002"
cmd          start "" "lsde://play/sc_7f3a9k2m/DIALOG-002"
```

## Seguridad: un enlace solo puede mostrar {#security}
Un enlace viene de fuera, y cualquier página web puede abrir uno — así que la seguridad está garantizada por diseño:
- **Sin escritura.** Ambas acciones abren una escena, seleccionan un bloque y lanzan el reproductor, que nunca escribe. Todo lo que modifica un proyecto pasa por la [fachada MCP](/es/resources/mcp-bridge), protegida por un token.
- **Ningún proyecto se abre, cierra o recarga.** Un enlace nunca lleva una ruta de archivo.
- **Una gramática cerrada.** Lo que no coincide con la forma esperada se rechaza, nunca se adivina.
- **Nada escucha.** No se abre ningún puerto de red; lo peor que puede hacer un enlace es mostrar una escena.
