---
title: "Localización"
description: "Este módulo obligatorio le permite configurar los idiomas y los espacios de nombres de su proyecto."
section: interface
outline: [2, 3]
---

# Localización

Este módulo obligatorio le permite configurar los idiomas y los espacios de nombres de su proyecto.
Tiene la opción de usar la importación inteligente o de configurar manualmente el servicio de idiomas.

::: tip Nota
LSDE admite los códigos ISO 639-1 o las combinaciones ISO 639-1 - ISO 3166-1. [Para más detalles sobre las especificaciones, haga clic aquí](/es/getting-started/introduction#i18n-key-convention)
:::

## Interfaz {#interface}
<DocImage src="/doc/lsde/doc-lsde-ui-localisations.webp" />

La interfaz ofrece las siguientes secciones:
0. **Importación inteligente** (opcional)
Importe una estructura de carpetas ya existente, organizada de la siguiente manera:
`../folder/lang/namespace.json` => `../locales/en/main.json`

### Configuración de idiomas {#setup-languages}
- **Configuración de los códigos `ISO 639-1` y `ISO 3166-1`**
Los códigos de idioma pueden concatenarse según dos especificaciones, por ejemplo: `en` o `en-US`, `en-GB`.
Estos códigos `ISO 639-1 - ISO 3166-1` corresponden al idioma seguido de su localización.

**Esta sección permite:**
1. Añadir/Eliminar idiomas
Abre un nuevo cuadro de diálogo en el que puede usar un gestor para buscar y/o eliminar los idiomas del proyecto.
2. Definir el idioma principal
Este idioma se usa como fuente en algunas tareas y es obligatorio para trabajar con el software.
4. Visualizar, eliminar o reorganizar los idiomas en el orden deseado.

::: tip Nota
(Es el orden de renderizado en el editor.) Es el idioma principal del proyecto.
:::

### Los espacios de nombres {#namespace}
3. Este es el lugar para crear espacios de nombres.
Un espacio de nombres representa simplemente **el nombre de un archivo que contiene las claves**. Así de simple.
Ejemplo: `locales/en-GB/main.json`. Aquí, el espacio de nombres será `main` y las claves del archivo tendrán rutas relativas.

::: tip Nota
Puede redefinir las carpetas de los espacios de nombres o eliminarlas.
:::
