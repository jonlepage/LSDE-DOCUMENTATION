---
title: "Unity"
description: "LSDE se integra con Unity para gestionar, traducir y sincronizar tus diálogos directamente en tus proyectos de Unity."
section: engines
outline: [2, 3]
---

# Unity

LSDE se integra con **Unity** para gestionar, traducir y sincronizar tus diálogos directamente en tus proyectos de Unity.

<YouTube id="NNlNnLo18Mo" />

## Plugin LSDE Bridge {#lsde-bridge}
LSDE ofrece un plugin gratuito de Unity: **LSDE Bridge — Unity Localization Sync**.
Este paquete elimina la necesidad de importar/exportar manualmente cada String Table Collection una por una.

**Características principales:**
- **Importación/Exportación por lotes** — Sincroniza todas tus tablas de localización en una sola operación.
- **Formatos soportados** — XLIFF 2.0 y CSV, compatibles con el paquete Unity Localization.
- **Renombrado automático** — Detecta las claves con el mismo ID pero un nombre diferente y las renombra en Unity.
- **Limpieza de huérfanos** — Elimina las claves presentes en Unity pero ausentes en los archivos importados.
- **Dry Run** — Previsualiza los cambios antes de aplicarlos.
- **Informe de desarrollador** — Genera un informe Markdown con las acciones realizadas y comandos grep para encontrar referencias obsoletas en tus scripts C#.

**Requisitos previos:**
- Unity **2021.3 LTS** o más reciente
- Paquete [Unity Localization](https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/index.html) **1.4.2+**

**Instalación:**
Abre **Window > Package Manager**, haz clic en **+** > **Add package from git URL** e introduce la URL del repositorio.
El enlace estará disponible próximamente.

## Flujo de trabajo CSV {#workflow-csv}
El flujo de trabajo CSV es el más sencillo para empezar:
- **Exportar** — En LSDE Bridge, haz clic en "Export All" para exportar todas tus tablas a archivos CSV.
- **Edición** — Importa estos CSV a LSDE, edita y traduce tus textos.
- **Importar** — LSDE exporta los CSV modificados, y luego en LSDE Bridge haz clic en "Import All CSV" para sincronizar Unity.

## Flujo de trabajo XLIFF {#workflow-xliff}
Para proyectos que requieren un control más preciso:
- **Exportar** — Utiliza la exportación XLIFF integrada de Unity para generar los archivos .xlf.
- **Edición** — Importa a LSDE, edita con la asistencia LLM y los metadatos.
- **Importar** — LSDE exporta los .xlf, y luego LSDE Bridge realiza la importación con el análisis XML y la actualización directa de las StringTables.

## Acceso al plugin {#access}
Abre el plugin en Unity a través de **Window > Asset Management > LSDE Bridge**.
Configura el formato (XLIFF o CSV), las carpetas de importación/exportación y las opciones de sincronización.

## Consejos {#tips}
- Coloca el archivo `.lsde` en la raíz de tu proyecto de Unity para aprovechar el control de versiones de Git.
- Utiliza el **Dry Run** sistemáticamente antes de una importación para verificar los cambios.
- Activa el **informe de desarrollador** para identificar las claves renombradas o eliminadas y actualizar tus referencias C#.
