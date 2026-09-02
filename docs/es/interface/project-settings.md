---
title: "Configuración del Proyecto"
description: "La ventana de configuración del proyecto en LSDE le permite ajustar los parámetros específicos del proyecto actualmente abierto."
section: interface
outline: [2, 3]
---

# Configuración del Proyecto

La ventana de configuración del proyecto en LSDE le permite ajustar los parámetros específicos del proyecto actualmente abierto.
Estos ajustes están organizados en varias secciones.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-prompt.webp" />

## Directiva LLM {#llm-directive}
Esta sección le permite crear tareas personalizadas para los LLM, adaptadas a su proyecto.
Aunque LSDE ofrece tareas predeterminadas, puede definir las suyas propias para satisfacer precisamente sus necesidades.
Tendrá acceso a los siguientes campos:
1.  **Nuevo prompt**
    Agregue nuevos prompts al proyecto.
2.  **Etiqueta y descripciones**:
    *   Introduzca el nombre de la tarea (esta etiqueta puede influir en el LLM).
    *   Agregue una nota explicativa, visible solo para usted y no enviada al LLM.
3.  **Contenido del prompt**:
    Escriba aquí la directiva que se enviará al LLM para completar la tarea.
4.  **Telemetría**:
    Muestra información sobre el número de palabras y una estimación del costo en tokens del prompt.
5.  **Activación**
    Active o desactive la tarea en cualquier momento sin eliminarla.

::: tip Nota
Tenga en cuenta que los LLM siempre reciben las directivas de tarea con un contexto y reglas predefinidas. Las opciones para refinar estos elementos se presentan más adelante.
:::

---

## Las variables {#variables}
El gestor de variables es un sistema potente diseñado para interactuar con los LLM, al mismo tiempo que optimiza su productividad y facilita la traducción y redacción de diálogos.

### ¿Por qué usarlas? {#why-use-variable}
*   Son especialmente adecuadas para proyectos de videojuegos con requisitos narrativos complejos, como los JRPG.
*   Pueden contener mucha información para mostrar tooltips personalizados, resaltar palabras clave y mucho más.
*   Constituyen una base esencial para optimizar su flujo de trabajo en LSDE.

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-variable.webp" />

Para crear una variable, comience seleccionando su categoría.

::: tip Nota
Si no existe ninguna categoría, primero deberá crear una (por ejemplo: Actores, Objetos, HTML, etc.).
:::

Una vez creada, la variable aparece en una lista como un bloque desplegable. Despliegue el bloque para acceder a su interfaz de configuración completa.

### La interfaz {#interface}
1.  **Grupo o categoría de variables**
    Cree y seleccione un grupo de variables.
    > Un clic derecho en un grupo permite eliminarlo, así como todas las variables que contiene.
2.  **Crear una variable**
    Una vez seleccionado un grupo, utilice este botón para crear una nueva variable.
3.  **Editar una variable**
    Las variables se muestran en contenedores, con acciones rápidas en la cabecera para:
    *   Activar/desactivar la variable.
    *   Reorganizarla arrastrando y soltando.
    *   Asignarle una etiqueta (utilizada en tooltips y opciones).
    *   Cambiar su grupo.
    *   Eliminarla.
4.  **Tags/Expresiones regulares**
    Introduzca las palabras clave (tags) o la expresión regular (regex) que permitirán al sistema identificar esta variable.
    > Por ejemplo, un patrón de captura de texto se basará en estos tags o regex para encontrar una coincidencia.
5.  **Alternar a expresión regular**
    El modo predeterminado utiliza palabras clave (tags). Active este modo para usar una expresión regular, ofreciendo más flexibilidad y dinamismo.
    > Ejemplo: `/actor\\d+/` evita tener que definir manualmente los tags «actor1», «actor2», «actor11», etc.

### Descripciones {#descriptions}
6.  **Nota**
    Redacte una nota para el usuario, que se mostrará en los tooltips pero no se enviará a los LLM.
    > Evite describir contenido sensible si versiona el proyecto, ya que estas notas se guardan en los archivos `.lsde`.
7.  **Descripciones**
    Esta descripción proporciona directivas al LLM cuando la variable se incluye en el contexto de una solicitud.
    > Se puede describir la personalidad de un personaje, elementos del mundo, o incluso reglas de formato (Markdown, JSX, HTML...).

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-variable-emoji.webp" />

### Apariencia {#appearance}
Esta sección permite asociar elementos visuales a la variable, facilitando su reconocimiento en la interfaz para artistas, traductores y guionistas.
8.  **Icono de renderizado**
    Asocie un icono (imagen o emoji) que representará la variable en los editores y menús.
9.  **Imagen de tooltip**
    Agregue una imagen más grande, que se mostrará en los tooltips para proporcionar un mejor contexto visual al usuario.
    > Las imágenes se comprimen y guardan automáticamente con el proyecto para facilitar su compartición.
10. **Colorimetría**
    Defina un color de texto y de fondo. Estos colores tendrán prioridad si la variable está asociada a un patrón o a otro elemento visual.

### Información adicional {#additional-info}
Esta sección agrupa opciones de diseño adicionales para los tooltips, así como parámetros de acoplamiento con los desencadenadores de sugerencias.
11. **Decoraciones**
    Agregue información opcional que se mostrará en la sección de decoración del tooltip.
12. **Enlace externo**
    Inserte un enlace externo en el tooltip, que se abrirá en su navegador predeterminado.
13. **Etiqueta vocal**
    Redefina el nombre de la variable cuando esté asociada a una voz. Por defecto, se utiliza su etiqueta, o su UUID si no.
14. **Asociar a las sugerencias**
    Permite incluir la variable en los desencadenadores de sugerencias durante la escritura.
    > Se utilizarán los tags de la variable como sugerencias.
15. **Telemetría**
    Muestra estadísticas sobre el uso de la variable en el proyecto.

---

## Patrones {#patterns}
<DocImage src="/doc/lsde/doc-lsde-ui-psetting-pattern.webp" />

Los patrones permiten a LSDE capturar porciones de texto específicas en los diálogos. Apoyándose en expresiones regulares, este sistema ofrece una gran flexibilidad para el formato y procesamiento de sus diálogos.
[Aprenda más sobre los patrones y el renderizado aquí](/es/features/rendering)

### La interfaz {#interface-2}
1.  **Crear un patrón/modelo**
    Cree un nuevo patrón, ya sea a partir de un modelo predefinido o desde cero.
2.  **Referencia interna**
    Defina un patrón para hacer referencia a otras claves del proyecto (mecanismo de «anidamiento»), si su motor de juego o su framework lo soporta.
    Por ejemplo, si utiliza [el «anidamiento» de i18next](https://www.i18next.com/translation-function/nesting).
3.  **Expresión regular**
    Introduzca su expresión regular. No es necesario escapar las llaves `{}`.
4.  **Añadir decoradores**
    Agregue decoradores adicionales además de la captura inicial, luego asócielos a los grupos de captura de su expresión regular.
5.  **Decorador inicial**
    El decorador inicial define el renderizado del texto capturado por la expresión regular en el editor.
    > Los decoradores iniciales son obligatoriamente de tipo «inline» y no pueden ser «widgets».
6.  **Grupo y tipo**
    Asigne el grupo de captura y el tipo de renderizado deseado para los decoradores adicionales.
    [Más detalles aquí](/es/features/rendering#what-is-decorator)

---

## Contextos {#contexts}
<DocImage src="/doc/lsde/doc-lsde-ui-psetting-context.webp" />

Esta sección permite definir reglas para gestionar diferentes contextos, como los plurales o los géneros.

Un contexto se identifica por un sufijo añadido al final de la clave (ej: `key_plural`). LSDE gestiona estas variantes de manera que pueda integrarlas progresivamente en su proyecto, sin tener que modificar el código fuente existente.

Así, puede soportar los contextos solo cuando sea necesario, sin alterar su proyecto.

### La interfaz {#interface-3}
1.  **Etiquetado**
    Defina el ID, la etiqueta y el separador del contexto.
    Por ejemplo, para gestionar los plurales con i18next:
    `name_space.folder.key_context`
    se convertiría en:
    `game.common.welcome-to-my-shop_one`
    `game.common.welcome-to-my-shop_many`
    `game.common.welcome-to-my-shop_other`
    Más información sobre [los plurales i18n con i18next](https://www.i18next.com/translation-function/plurals)
2.  **Tags**
    Defina los sufijos (tags) que se utilizarán para identificar cada variante del contexto.
3.  **Descripción (LLM)**
    Redacte aquí la descripción que se enviará al LLM cuando procese una clave que utilice este contexto.
4.  **Delimitador**
    Elija el carácter utilizado como delimitador de contexto.
    > Los puntos no están permitidos.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-codeview.webp" />

## Vista de código {#codeview}
Esta sección sirve para configurar el módulo de análisis de su código fuente (codebase). Este módulo escanea sus archivos para extraer automáticamente las claves de traducción, sus contextos y sus valores predeterminados.
Para ser válida, una expresión regular debe contener al menos un grupo de captura asignado a la clave.
Consulte la [sección avanzada aquí](/es/features/scanning).

### La interfaz {#interface-4}
1.  **Ruta del codebase de su proyecto**
    Indique la ruta a la carpeta raíz de su proyecto, que contiene los archivos fuente que utilizan las claves de traducción.
2.  **Exclusiones**
    Especifique las carpetas y archivos a excluir del análisis para optimizar el rendimiento.
    > Separe las entradas con comas. Use nombres de carpetas o nombres de archivos completos (con extensión).

### Patrón {#pattern}
Gestione aquí la lista de sus patrones de captura, presentados en bloques desplegables.
3.  **Nota/Etiqueta**
    Una etiqueta o una nota para identificar fácilmente el patrón y su función.
4.  **Expresión regular**
    Inserte o modifique su expresión regular. El número de grupos de captura detectados se muestra debajo.
5.  **Espacio de nombres**
    Asocie el grupo de captura que corresponde al espacio de nombres (namespace) de sus claves (opcional).
    > Sugiere automáticamente el espacio de nombres correcto al crear claves.
6.  **Clave**
    Asocie el grupo de captura que corresponde a la clave misma (sin el espacio de nombres).
    > Las claves no deben contener espacios de nombres; use el campo dedicado para ese propósito.
7.  **Texto predeterminado**
    Asocie el grupo de captura que corresponde al texto predeterminado.
    > En proyectos de software, los desarrolladores a menudo insertan un texto predeterminado para una vista previa rápida de la UI/UX.
8.  **Contexto**
    Asocie el grupo de captura que corresponde al contexto (ej: plural).

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-codeview-templates.webp" left />

### Plantillas {#templates}
Al crear un patrón, puede elegir entre plantillas predefinidas.
Sirven como punto de partida para evitarle redactar una expresión regular desde cero o para ayudarle a construirla.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-generator.webp" />

## Generador {#generator}
Esta sección permite configurar la generación automática de un archivo que contenga sus claves, en un formato adaptado a su proyecto.
Es útil, por ejemplo, para crear un `enum` TypeScript a partir de sus claves.

1.  Nombre de la clase que exportará las claves.
2.  Nombre del archivo generado.
3.  Carpeta de destino para el archivo exportado.
4.  Idioma de los comentarios JSDOC generados.
5.  Longitud máxima de los comentarios JSDOC.
6.  Carácter de reemplazo para los puntos (`.`).
    > En JS/TS, los puntos no están permitidos en los nombres de clave; el conversor creará automáticamente literales de cadena como claves.
7.  Incluir el espacio de nombres en las claves generadas.
8.  Incluir las claves contextuales (con sufijos).
    > Generalmente no es necesario incluir estas claves, ya que su gestión la asegura su framework de internacionalización.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-voice.webp" />

## Voces {#voices}
La sección Voces permite configurar el generador de voces para sus diálogos.
Apoyándose en los avances de las tecnologías LLM y TTS (Text-to-Speech), esta funcionalidad permite crear voces sintéticas controlando el tono, la entonación y la emoción.
Estas voces pueden luego integrarse en su motor de juego, ofreciendo una narración de audio inmersiva a una fracción del costo de una grabación en estudio tradicional.

::: tip Nota
Aunque esta tecnología aún está en evolución, ofrece a los creadores independientes una formidable oportunidad para destacarse y reforzar la inmersión narrativa de su obra.
:::

Una [sección dedicada a la integración de voces en su proyecto está disponible aquí](/es/features/voice).

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-suggestion.webp" />

## Sugerencias {#suggestion}
Esta sección permite configurar la visualización del menú de sugerencias.
Cuando se introduce una combinación de teclas (un desencadenador) en el editor, aparece un menú contextual. Puede ofrecer variables (basadas en sus tags) o claves de traducción (si el desencadenador está asociado a referencias internas).

1.  **Sugerencias de claves**
    Defina el desencadenador para mostrar todas las claves del proyecto.
    > Útil para proyectos que utilizan diccionarios internos y referencias cruzadas.
2.  **Condiciones**
    Elija una tecla modificadora (ej: Ctrl, Alt) para el desencadenador (opcional).
3.  **Letra**
    Especifique la letra o el símbolo que, combinado con la tecla modificadora, activará las sugerencias.
4.  **Etiqueta**
    Un nombre para identificar fácilmente este desencadenador en la interfaz.
5.  **Prefijos/Sufijos**
    *   **Prefijo**: Contenido a añadir antes de la selección del usuario.
    *   **Sufijo**: Contenido a añadir después de la selección del usuario.
