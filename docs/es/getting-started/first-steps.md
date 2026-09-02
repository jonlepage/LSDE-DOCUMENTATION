---
title: "Primer paso"
description: "Al iniciar el software por primera vez, se le pedirá que inicie su período de prueba o que introduzca su clave de licencia."
section: getting-started
outline: [2, 3]
---

# Primer paso

## Inicio {#getting-started}
Al iniciar el software por primera vez, **se le pedirá que inicie su período de prueba** o que introduzca su clave de licencia.
- **Período de prueba:**
El período de prueba le permite probar el software con todas sus funcionalidades durante un tiempo determinado.

::: tip Nota
Durante la fase beta, el período de prueba es ilimitado y se restablecerá después de este período.
:::

- **Licencia:**
Si dispone de una licencia, introdúzcala para desbloquear el software.

::: tip Nota
Su clave le habrá sido enviada por correo electrónico durante la transacción.
No puede adquirir una clave durante el período beta del software.
:::

---

<DocImage src="/doc/lsde/doc-lsde-startscreen.webp" />

## Elección de los idiomas de la interfaz {#interface-language-choice}
LSDE ofrece 3 opciones principales al iniciar:

## Cargar un proyecto {#load-project}
<DocImage src="/doc/lsde/lsde-banner.webp" h="30" left icon />

Puede seleccionar un archivo con la extensión `.lsde`.

::: tip Nota
Si las asociaciones de archivos están instaladas, un doble clic en un archivo .lsde en su explorador permite abrir el proyecto directamente.
:::

## Nuevo proyecto {#new-project}
Esta opción le permite crear un nuevo proyecto preconfigurando los ajustes para ciertos tipos de proyectos.
También puede preinstalar los idiomas más populares en Steam.
Tenga en cuenta que estas preconfiguraciones no son definitivas; pueden modificarse en cualquier momento dentro del proyecto.

::: tip Nota
Guarde sus proyectos en una carpeta compatible con Git u otro sistema. Los archivos .lsde no contienen datos sensibles.
:::
En la parte inferior de la pantalla, también encontrará una lista de los proyectos abiertos recientemente, lo que le permitirá reanudar rápidamente una sesión de trabajo.

## Proyectos de demostración {#demo-project}
Algunos proyectos de demostración están incluidos con el software. Le permiten observar ciertas funcionalidades en acción o inspirarse para su flujo de trabajo.

---

<DocImage src="/doc/lsde/doc-lsde-start-flashicon.webp" />

# Configuración obligatoria {#mandatory-configuration}
Para aprovechar al máximo LSDE y comenzar su trabajo, deberá realizar obligatoriamente el primer paso de configuración inicial.
Este paso es rápido y esencial para desbloquear todas las funcionalidades del software específicas de su proyecto.

El icono de la ventana de gestión de localizaciones, situado en la parte superior derecha en el menú de ventanas rápidas, parpadeará para indicarle que se requiere información importante.

Una vez en la ventana de gestión de localizaciones, deberá:
- Importar una carpeta existente de su proyecto que ya contenga archivos y directorios de idiomas.
- O bien, añadir manualmente idiomas y un espacio de nombres (`namespace`).

Luego, seleccione el idioma principal del proyecto, y estará listo para usar LSDE.
Para más información sobre el gestor de localizaciones, [consulte esta sección](/es/interface/localization-manager)
