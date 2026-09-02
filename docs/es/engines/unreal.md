---
title: "Unreal Engine"
description: "LSDE es compatible con Unreal Engine a través del sistema de localización nativo de Unreal y la generación de clases C++."
section: engines
outline: [2, 3]
---

# Unreal Engine

LSDE es compatible con **Unreal Engine** a través del sistema de localización nativo de Unreal y la generación de clases C++.

El flujo de trabajo:
- **Importación** — Exporte sus textos desde Unreal a través del Localization Dashboard, luego impórtelos en LSDE.
- **Edición** — Traduzca y edite sus textos en LSDE con la asistencia de LLM.
- **Exportación** — Reexporte los archivos localizados y vuelva a importarlos en Unreal.

## Generación de clases C++ {#cpp-generation}
LSDE genera automáticamente clases de acceso tipadas en **C++** a partir de sus definiciones de blueprints.
Estas clases se integran en su proyecto Unreal y le permiten acceder a sus diálogos con verificación de tipos en tiempo de compilación.

## Consejos {#tips}
- Utilice el **Localization Dashboard** de Unreal para la configuración inicial de idiomas y objetivos de localización.
- Coloque el archivo `.lsde` en la raíz de su proyecto Unreal para el control de versiones con Git.
- LSDE se encarga de la traducción y la composición — Unreal gestiona el empaquetado y la carga en tiempo de ejecución a través de `FText`.
