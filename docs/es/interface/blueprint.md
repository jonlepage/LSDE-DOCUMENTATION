---
title: "Blueprint"
description: "El editor Blueprint es la interfaz visual de composición de diálogos en LSDE."
section: interface
outline: [2, 3]
---

# Blueprint

<DocImage src="/doc/lsde/doc-lsde-blueprint-1.webp" left />

El editor Blueprint es la interfaz visual de composición de diálogos en LSDE.
Permite construir grafos narrativos conectando bloques entre sí, ofreciendo una visión general clara del flujo conversacional.
Así, puedes recuperar estos flujos como datos puros y utilizarlos en tu Runtime o en [LSDEDE](https://jonlepage.github.io/LS-Dialog-Editor-Engine), el Runtime genérico diseñado para satisfacer esta necesidad.

## Visión general {#overview}
El Blueprint funciona como un lienzo infinito sobre el que colocas y conectas bloques.
Cada escena tiene su propio grafo, con un bloque de inicio y un flujo que se ramifica según tus elecciones de diseño.
Las escenas se guardan automáticamente cuando pasas de una a otra.

---

## Tipos de bloques {#block-types}
El sistema Blueprint se basa en **4 tipos de bloques de contenido** y un tipo de nota:
- **Dialog** — Una línea de diálogo asignada a un personaje. El bloque más común.
- **Choice** — Un punto de ramificación donde el jugador elige una respuesta entre varias opciones.
- **Condition** — Un desvío invisible que evalúa el estado del juego y redirige el flujo silenciosamente.
- **Action** — Desencadena efectos en el juego (dar un objeto, reproducir un sonido, activar una bandera).
- **Note** — Un bloque de comentarios para el diseñador narrativo, ignorado durante la ejecución.

## Interacciones en el lienzo {#canvas-interactions}
El editor ofrece una experiencia de composición fluida, diseñada para no tener que soltar el teclado:
- **Arrastrar y soltar** (Drag-and-drop) para mover y reorganizar bloques.
- **Selección múltiple** para mover o eliminar varios bloques simultáneamente.
- **Copiar/Pegar** bloques y conexiones entre escenas.
- **Deshacer/Rehacer** (Undo/Redo) completo en todas las operaciones.
- **Guías de alineación** para un grafo limpio y legible.
- **Bloqueo de bloques** para proteger las partes finalizadas.
- **Atajo de teclado** No sueltes el teclado durante tu flujo, no necesitas alternar entre ratón y teclado.

## Carrusel rápido {#fast-carousel}
El carrusel rápido permite configurar los actores, emociones y elecciones bloque por bloque, directamente desde el lienzo.
Ya no es necesario abrir cada bloque individualmente; navega con el teclado y asigna las propiedades de forma continua.

## Navegación {#navigation}
- **Minimapa** — Vista reducida del grafo completo para navegar rápidamente en escenas grandes.
- **Árbol de escenas** — Panel lateral que lista todas las escenas del proyecto.
- **Modo carpeta** — Visualiza las escenas como tarjetas conectadas para una visión general del proyecto.

## Exportar {#export}
Los blueprints se exportan a formatos de motores de juego con selección de destino por escena, metadatos e identificadores de personajes.
El sistema genera automáticamente **clases de interfaz tipadas** para:
- **TypeScript** / JavaScript
- **C#** (.NET, Unity, Godot Mono)
- **C++** (Unreal Engine, motores personalizados)
- **GDScript** (Godot 4)

Las convenciones de nomenclatura son configurables según tu proyecto.
