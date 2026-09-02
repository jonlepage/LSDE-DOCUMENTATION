---
title: "El árbol de elementos clave"
description: "La interfaz LSDE proporciona una vista general clara y estructurada de todas las claves de traducción de su proyecto."
section: interface
outline: [2, 3]
---

# El árbol de elementos clave

La interfaz LSDE proporciona una vista general clara y estructurada de todas las claves de traducción de su proyecto. Diseñada para simplificar su gestión, adapta automáticamente las claves –ya sean importadas o recién creadas– a su formato interno optimizado, y luego las restituye en el formato específico de su proyecto, asegurando así una compatibilidad e integración perfectas.

::: tip Nota
Así, un archivo de proyecto `.lsde` puede ser compartido y recuperado en su totalidad.
:::

Tomemos el ejemplo de `name_space.folderA.folderB.folderC.fileABC`:
- Las rutas de las claves están estructuradas de manera jerárquica, con puntos como separadores. Esta convención, similar a la de i18next, facilita la navegación y la identificación de la ubicación y la carpeta de cada clave. Cabe destacar que i18next utiliza por defecto `name_space:folderA.folderB.folderC.fileABC`.
- El primer segmento de cada ruta (antes del primer punto) define el espacio de nombres (namespace). Es crucial subrayar que este espacio de nombres es **inmutable** dentro del árbol.

::: tip Nota
Para cualquier modificación del espacio de nombres, deberá utilizar la interfaz dedicada a la gestión de idiomas. Este enfoque centralizado garantiza la integridad de sus traducciones.
:::

Exploremos ahora en detalle las diferentes secciones y funcionalidades de la interfaz del árbol de claves.

<DocImage src="/doc/lsde/doc-lsde-ui-tree.webp" />

## Acciones del encabezado {#header-actions}
1. **Mostrar/Ocultar claves huérfanas.**
Esta opción es esencial para mantener la limpieza y la relevancia de sus traducciones. Permite identificar rápidamente las claves presentes en el árbol pero ausentes del código fuente de su proyecto externo, facilitando así la detección de claves obsoletas o no utilizadas para una potencial limpieza o reubicación.
2. **Mostrar/Ocultar claves incompletas.**
Esta función resalta todas las claves cuyas traducciones están faltantes en uno o varios idiomas.

::: warning Atención
**Nota importante:** El escáner de claves de LSDE analiza únicamente los idiomas activados en la ventana del editor. Los idiomas desactivados están excluidos del proceso de análisis, permitiendo así concentrar la verificación en los idiomas activos.
:::

3. **Crear un archivo o una carpeta.**
Además del menú contextual (clic derecho), esta función permite crear manualmente nuevas claves u organizar proactivamente su árbol. LSDE soporta la creación de carpetas "internas", ofreciéndole la posibilidad de estructurar lógicamente sus claves, incluyendo la creación de carpetas vacías para futuras traducciones. Estas operaciones se realizan a través de una ventana interactiva intuitiva que le guía paso a paso.

<DocImage src="/doc/lsde/doc-lsde-ui-createfolder.webp" left />

4. **Campo del espacio de nombres.**
Este campo muestra el espacio de nombres (namespace) donde se creará la nueva clave o la nueva carpeta, garantizando su correcta inserción en la jerarquía existente.
5. **Ruta de la clave.**
Este lugar está reservado para introducir la ruta completa de la clave. El sistema ofrece asistencia en vivo y alerta instantáneamente si la ruta no cumple las reglas de formato o unicidad, ayudándole así a evitar errores.
6. **Mover las selecciones.**
Particularmente útil al crear una nueva carpeta, esta opción permite transferir simultáneamente los elementos seleccionados del árbol a este nuevo directorio. De esta manera, optimiza su flujo de trabajo y facilita la reorganización de las claves.
7. **Mostrar/Ocultar claves con tareas en curso.**
Active esta funcionalidad para visualizar rápidamente las claves asociadas a tareas activas o pendientes de validación por un miembro del equipo. Constituye un activo valioso para el seguimiento del progreso de las traducciones y la gestión colaborativa de los proyectos.
8. **Expandir/Colapsar carpetas.**
Este botón ofrece dos modos de navegación prácticos en el árbol:
- expandir todas las carpetas para una vista general exhaustiva
- o colapsarlas "hasta la selección activa" para concentrarse en una sección específica sin distracciones.
