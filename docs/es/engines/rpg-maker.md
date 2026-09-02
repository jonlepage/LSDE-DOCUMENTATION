---
title: "RPG Maker"
description: "LSDE se integra nativamente con RPG Maker MV y RPG Maker MZ para la gestión y traducción de tus diálogos."
section: engines
outline: [2, 3]
---

# RPG Maker

LSDE se integra nativamente con **RPG Maker MV** y **RPG Maker MZ** para la gestión y traducción de tus diálogos.

## Funcionamiento {#how-it-works}
RPG Maker almacena sus diálogos en archivos JSON (Map, CommonEvents, System, etc.).
LSDE puede importar estos archivos, permitiéndote editarlos y traducirlos cómodamente, y luego reexportarlos al formato esperado por RPG Maker.

Si deseas soporte total para RMMZ i18n, debes descargar el [plugin aquí](https://raw.githubusercontent.com/jonlepage/LSDE-RMMZ-I18N/refs/heads/main/dist/LSDE_i18n.js)

El flujo de trabajo típico:
- **Importar** — Dirige LSDE a la carpeta `data/` de tu proyecto de RPG Maker. El Smart Import detecta y extrae automáticamente las claves de diálogo.
- **Edición** — Redacta, corrige y traduce tus textos manualmente o con la asistencia de LLM, los metadatos y el corrector ortográfico.
- **Exportar** — Reexporta los archivos JSON modificados directamente a tu proyecto de RPG Maker.

## Versiones compatibles {#supported-versions}
- **RPG Maker MV** — Importación/Exportación JSON completa
- **RPG Maker MZ** — Importación/Exportación JSON completa
- Las versiones más antiguas (VX Ace, XP) no son compatibles de forma nativa, pero pueden funcionar a través de un analizador personalizado.

## Tutorial en vídeo {#video-tutorial}
<YouTube id="0cJjxtI088Q" />

## Consejos {#tips}
- Usa el escáner de código para verificar que todas tus claves estén presentes en los archivos de RPG Maker.
- Configura los patrones Regex en la configuración del proyecto para detectar automáticamente las claves de diálogo de RPG Maker.
- Aprovecha el modo MAD (Multi Actor Dialog) si tus eventos contienen diálogos con varios personajes.
