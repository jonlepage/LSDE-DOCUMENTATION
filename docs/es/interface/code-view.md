---
title: "Escáner de código"
description: "El módulo escáner de código permite escanear un proyecto externo vinculado a LSDE."
section: interface
outline: [2, 3]
---

# Escáner de código

El módulo **escáner de código** permite escanear un proyecto externo vinculado a LSDE.
Al adjuntar un proyecto, visualiza todas las claves (existentes o potenciales) de su código fuente.
Esto facilita su identificación, creación o adición al árbol de claves.
El módulo también muestra todas las ocurrencias de las claves ya existentes en su base de código.

## ¿Cómo funciona? {#how-it-works}
El escáner se basa en los **patrones Regex** [configurados en la configuración](/es/interface/project-settings#codeview)
Identifica las claves a través de grupos de captura y las muestra como instancias, clasificadas por archivo, en función de las claves encontradas en su código.
Para iniciar la búsqueda en su base de código, seleccione una clave (carpeta o archivo); esta selección sirve como filtro inicial.

Por ejemplo, seleccionar la clave `namespace.a.b.c` solo mostrará las coincidencias que tengan este prefijo (ej: `namespace.a.b.c.d.e`, pero no `namespace.a.b.x.d.e`).
Para visualizar todas las claves del proyecto, deseleccione todas las claves activas o, si el proyecto solo tiene un espacio de nombres, seleccione el espacio de nombres raíz.

## ¿Idiomas compatibles? {#supported-languages}
No existe ninguna limitación intrínseca con respecto a los lenguajes de programación compatibles.
Simplemente cree las `Regex` adecuadas para capturar sus claves, sea cual sea el lenguaje.
La [configuración de los parámetros](/es/interface/project-settings#codeview) le permite definir cómo LSDE buscará las claves de traducción.
Una [sección de tutorial completa](/es/features/scanning) le guiará para configurar su proyecto LSDE, que requiere una `Regex` con **al menos 1 grupo de captura** asignado al interpolador *clave*.

## La interfaz {#interface}
Hay varias herramientas y configuraciones disponibles para manipular los resultados del escáner.

<DocImage src="/doc/lsde/doc-lsde-ui-codeview.webp" />

1. **Abrir/Cerrar todos los archivos**:
Abre o cierra todas las secciones de referencias encontradas.

::: tip Nota
Puede afectar el rendimiento si todas las instancias están abiertas en un proyecto muy grande.
:::
2. **Copiar en formato JSON**:
Copia los resultados en formato JSON al portapapeles, ideal para un LLM externo (ej: IDE) para crear o verificar claves.
**Ejemplo:**
```json
[
{
\"file\": \"\\\\scr\\\\folder\\\\file1. tsx\",
\"lines\": [
213
]
}
]
```

::: tip Nota
Pegue [CTRL]+[V] este resultado en una consulta para, por ejemplo, encontrar otras claves similares que LSDE podría detectar.
:::
3. **Delimitador de código**:
Ajusta la cantidad de código que se muestra alrededor de la clave para un contexto ampliado, sin abrir el IDE.
4. **Tema**:
Permite elegir un tema similar al de su código fuente para una mejor familiaridad visual.
5. **Modo RAW**:
Activa las Regex dedicadas a la búsqueda de código **RAW**.
Estas capturan texto sin formato potencialmente a convertir o encapsular en su sistema de claves.
Haga doble clic en los resultados para acceder a ellos y encapsular estos textos para traducción, exponiéndolos al escáner en modo 'Clave faltante'.
6. **Modo Clave faltante**:
Muestra únicamente las claves faltantes.
Permite crearlas en lote (marcándolas) o individualmente (clic derecho).
7. **Filtrar claves con contexto**:
Permite filtrar las claves contextuales, que a menudo requieren atención especial o un procesamiento posterior.

::: tip Nota
Funcional si el campo \\context\\ está especificado en la [configuración de su Regex](/es/interface/project-settings#codeview).
:::
8. **Filtrar claves dinámicas**:
Excluye las claves dinámicas, a menudo complejas y a veces inevitables, para un procesamiento separado. LSDE gestiona su creación a través de un cuadro de diálogo específico.

::: tip Nota
Funcional si la Regex \\clave dinámica\\ está especificada en la [configuración del escáner](/es/interface/project-settings#codeview).
:::
9. **Mostrar ignoradas**:
Muestra las claves ignoradas en modo creación (ej: falsos positivos difíciles de excluir con sus Regex) si es necesario.

## Integración con su IDE {#coupling-to-your-ide}
Una vez configurada, un doble clic en una clave en la sección de código abre su IDE directamente en la ubicación correspondiente.
Esto le permite examinar con más detalle el contexto o realizar modificaciones en su base de código según sea necesario.
