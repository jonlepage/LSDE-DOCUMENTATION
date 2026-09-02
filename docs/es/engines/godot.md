---
title: "Godot"
description: "LSDE se integra con Godot 4 para la gestión y traducción de tus diálogos, con soporte nativo de GDScript y C# (Mono)."
section: engines
outline: [2, 3]
---

# Godot

LSDE se integra con **Godot 4** para la gestión y traducción de tus diálogos, con soporte nativo de GDScript y C# (Mono).

## Integración {#integration}
Godot utiliza archivos CSV o JSON para la localización a través de su sistema de `TranslationServer`.
LSDE puede importar y exportar estos formatos para un flujo de trabajo fluido entre ambas herramientas.

El flujo de trabajo:
- **Import** — Importa tus archivos de traducción de Godot (CSV o JSON) en LSDE a través de Smart Import.
- **Edición** — Traduce y edita con la asistencia de LLM, los metadatos y el corrector ortográfico.
- **Export** — Reexporta los archivos localizados directamente en tu carpeta de proyecto de Godot.

## Generación de código {#code-generation}
LSDE genera automáticamente clases de acceso tipadas en dos lenguajes:
- **GDScript** — Clases nativas de Godot con autocompletado en el editor de Godot.
- **C# (Mono)** — Para proyectos de Godot que utilizan el runtime .NET.

Estas clases dan acceso a tus claves de diálogo con verificación de tipos, evitando errores de cadenas en duro.

## Consejos {#tips}
- Godot carga las traducciones a través de `TranslationServer.set_locale()` — tus archivos exportados por LSDE son directamente compatibles.
- Coloca el archivo `.lsde` en la raíz de tu proyecto Godot para el control de versiones con Git.
- Configura la exportación automática al guardar en LSDE para sincronizar tus modificaciones de forma continua con Godot.
- Usa `tr()` en tus scripts GDScript para acceder a las claves de traducción exportadas.
