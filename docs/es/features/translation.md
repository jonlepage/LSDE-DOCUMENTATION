---
title: "Traducción"
description: "LSDE ofrece herramientas potentes para permitirnos traducir a todos los idiomas del mundo."
section: features
outline: [2, 3]
---

# Traducción

## Cómo traducir {#how-to-translate}
::: tip Nota
LSDE ofrece herramientas potentes para permitirnos traducir a todos los idiomas del mundo.
:::
Los LLM (*Large Language Models*) son arquitecturas matemáticas diseñadas por el hombre que sobresalen en la traducción, siempre que se les proporcione el contexto adecuado.
LS Editor de Diálogo proporciona por defecto un contexto a cada solicitud dirigida a un LLM, lo que garantiza resultados más pertinentes.

::: tip Nota
Atención: Aunque los resultados sean satisfactorios y puedan reducir considerablemente los costes de producción, sigue siendo indispensable recurrir a un estudio profesional para la verificación final.
:::

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-1.webp" />

Para traducir un diálogo con LSDE, comencemos por añadir los idiomas admitidos en nuestro proyecto a través del gestor de idiomas.

1. Abra la ventana de [configuración de las localizaciones i18n](/es/interface/localization-manager#patterns).
2. Añada idiomas a su proyecto a través del botón indicado.
3. Seleccione los idiomas deseados, así como el idioma principal del proyecto.
Las opciones propuestas están en formato `ISO 639-1` y `ISO 3166-1`.

Una vez añadidos los idiomas, asegúrese de definir correctamente el idioma principal del proyecto. Este paso es esencial para desbloquear la mayoría de las acciones del software.

::: tip Nota
Aunque el idioma principal sea idealmente definitivo, es posible modificarlo en cualquier momento.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-2.webp" left />

1. Seleccione después una clave en el árbol. Esta selección mostrará todos los diálogos asociados en la ventana principal del editor.
2. Después puede filtrar los idiomas en los que desea trabajar.

::: tip Nota
Un clic derecho permite alternar rápidamente entre la visualización de todos los idiomas o únicamente del idioma principal.
:::

---

## Traducir mediante LLM {#translate-with-llm}
<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-3.webp" />

1. Primero, haga clic en un diálogo del editor para activar su edición.
Aparecerá un icono que permite gestionar la tarea deseada a través de un menú.

Por defecto, LS Editor de Diálogo propone tareas ya configuradas.
En este caso concreto, utilizaremos la tarea *Traducir*.

::: tip Nota
Las tareas disponibles pueden reconfigurarse en los ajustes globales si es necesario.
:::
2. Seleccionemos la tarea de traducción.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-4.webp" />

Se abre una ventana de configuración para ajustar los detalles de la tarea:
1. Posibilidad de activar o desactivar ciertos filtros antes del lanzamiento.
2. Ajuste de la profundidad de iteración (si el procesamiento se realiza en una carpeta).
3. Mostrar/ocultar las claves ignoradas según los parámetros actuales.
4. Activación/desactivación manual de las instancias a incluir si los parámetros automáticos no son suficientes.
5. Adición de directrices adicionales para guiar al LLM.

::: tip Nota
Utilice las flechas arriba/abajo del teclado para navegar por su historial global.
:::

Una vez realizados los ajustes, haga clic en *Confirmar* (abajo a la derecha).

::: tip Nota
En cuanto se crea una tarea, se envía al sistema de procesamiento automático. Este último se activa al abrir un proyecto para retomar las tareas en curso.
:::

---

Todas las instancias asignadas a la tarea pasan al modo comparación, lo que permite visualizar el texto de origen a la izquierda y la respuesta a la derecha.

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-5.webp" left />

1. Este botón muestra el número de letras añadidas con respecto al texto original.

::: tip Nota
También permite mostrar u ocultar los tokens añadidos.
:::
2. Este botón muestra el número de letras eliminadas.

::: tip Nota
También permite mostrar u ocultar los tokens eliminados.
:::
3. Este botón muestra el estado global final (saldo de caracteres positivo o negativo).

::: tip Nota
También permite cambiar a la visualización final si cancela cambios haciendo clic en las porciones de texto correspondientes.
:::
4. Renderizado de modificaciones: puede hacer clic en cada etiqueta para anular un cambio no deseado.
5. Puede iterar tantas veces como sea necesario enviando directrices adicionales al LLM.

::: tip Nota
Atención: según el modelo utilizado, el almacenamiento en caché no es sistemático, lo que puede aumentar los costes de forma exponencial, ya que la totalidad del historial se vuelve a enviar en cada iteración.
:::
6. Telemetría: muestra los costes en tokens devueltos por el proveedor de LLM.
7. Botones para aceptar o rechazar los cambios una vez finalizado el ajuste.
8. *Experimental*: permite añadir correcciones automáticas según ciertos escenarios (ej: si el LLM no devuelve el texto original en un hilo de discusión).
9. Navegación en el historial de cambios para volver a una versión anterior.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-6.webp" />

Una vez que el resultado sea satisfactorio, valídelo y ajuste manualmente los últimos detalles si es necesario.

---
