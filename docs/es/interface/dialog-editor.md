---
title: "Editor de Diálogos"
description: "Esta sección presenta el contenido renderizado de las claves."
section: interface
outline: [2, 3]
---

# Editor de Diálogos

Esta sección presenta el contenido renderizado de las claves. El editor organiza la clave seleccionada vertical y recursivamente, mostrando su contenido en todos los idiomas, sus contextos y sus claves hijas.
Ofrece opciones de navegación y renderizado para filtrar idiomas y contextos, así como herramientas de acción y telemetría.

## Sistema de Renderizado {#rendering-system}
LSDE cuenta con un sistema de renderizado de "post-procesamiento" para personalizar la visualización del texto, facilitando así la lectura y la redacción.
Configure patrones Regex para capturar grupos de texto y asignarles decoraciones.
Estas capturas pueden asociarse a variables para proporcionar información adicional al traductor, redactor o LLM.
[Acceda a la sección avanzada sobre renderizado y creación de patrones](/es/features/rendering)

<DocImage src="/doc/lsde/doc-lsde-ui-editor.webp" />

## Herramientas del encabezado {#header-tools}
1. **Activar/Desactivar el post-renderizado**
Desactiva rápidamente el renderizado de los patrones.
2. **Navegación**
Botones para navegar rápidamente entre la clave siguiente y la anterior.
3. **Crear una clave**
Crea rápidamente una nueva clave.
4. **Mostrar/Ocultar contextos**
Muestra u oculta los contextos relacionados con una clave para simplificar la vista.
Cada icono corresponde a la etiqueta de los contextos configurados.
5. **Mostrar/Ocultar idiomas**
Filtra los idiomas para trabajar simultáneamente.

::: tip Nota
Estos filtros también son utilizados por LSDE para otras operaciones del sistema, impactando así en otras herramientas de diagnóstico.
:::

## Zonas de edición {#editing-zones}
Esta zona muestra el texto de los idiomas activos y las tareas en curso para la clave.
6. **Seleccionar la clave en el árbol**
Localiza y selecciona la clave en el árbol.

::: tip Nota
Útil para editar metadatos, posible únicamente en la clave activa.
:::
7. **Tareas**
Un menú ofrece tareas aplicables a esta clave, sus relaciones y sus claves hijas.
8. **Proteger**
Marque esta casilla para marcar el texto como final y protegido, ignorando así ciertas tareas y operaciones.
Desactivar esta opción propone desactivar todas las validaciones de los otros idiomas relacionados con esta clave.
0. **La clave**
Muestra la ruta completa de la clave, **en el formato LSDE**

## Buscar/Reemplazar {#search-replace}
8. **Buscar/Reemplazar**
[CTRL+F] abre la herramienta de búsqueda interna.
Ofrece un modo Regex para casos complejos.
Una búsqueda también puede iniciarse a través del menú contextual.

## Rendimiento {#performance}
Por defecto, LSDE desactiva los renderizados complejos (widgets) en las ventanas inactivas.
Esto asegura un buen equilibrio entre experiencia visual y baja latencia.
Si el rendimiento no es un problema, desactive esta optimización en las configuraciones globales.

::: tip Nota
Puede consumir recursos si se muestran varios idiomas simultáneamente, ya que el sistema de renderizado está segmentado por clave.
:::
