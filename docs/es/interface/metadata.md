---
title: "Metadatos"
description: "La ventana de Metadatos permite añadir información adicional a una clave, distribuible a esa clave y a sus hijos."
section: interface
outline: [2, 3]
---

# Metadatos

La ventana de Metadatos permite añadir información adicional a una clave, distribuible a esa clave y a sus hijos.

## ¿Por qué usar metadatos? {#why-use-metas}
Al ejecutar tareas, esta información se integra en las solicitudes de los LLM.
La información proporcionada también puede consultarse en cualquier momento en el visualizador de metadatos.
La vista es recursiva, de arriba a abajo, desde la clave activa hasta la raíz del espacio de nombres del proyecto.

::: tip Nota
Tu proyecto fuente no debería depender de los metadatos. Estos tienen una función puramente informativa y solo deberían influir en la redacción y la reflexión.
:::

**Esta información puede ofrecer ciertas ventajas:**
- Ayudar a los traductores/redactores a comprender el contexto.
- Visualizar la información de forma recursiva, desde el parentesco de la clave.
- Añadir información relevante a los LLM para el procesamiento de la clave o de claves adyacentes.

::: tip Nota
Para una clave del mismo directorio, los LLM también leen las claves adyacentes para comprender el flujo narrativo.
:::
- Personalizar icono y color en el árbol de claves para una mejor identificación.
- Añadir imágenes para contextualizar visualmente el diálogo.
- Activar/desactivar las variables utilizables por los LLM.

---

## La interfaz de metadatos {#metas-interface}
<DocImage src="/doc/lsde/doc-lsde-ui-metadata.webp" />

0. **Recursiones**
Limita el rango de información recuperada, desde la clave activa hacia sus padres jerárquicos.
1. **Descripciones (LLM)**
Información que se tiene en cuenta cuando la clave se envía al LLM. Contextualiza la pertenencia de la clave, su entorno y el papel de sus hijos.
2. **Variables autorizadas**
Permite añadir las variables que deben ser procesadas por los LLM para optimizar sus tareas. Por ejemplo, autorice variables de personajes y pida al LLM que solo estos aparezcan en la carpeta de la misión. Los personajes adicionales podrán ser reasignados/eliminados por el LLM o utilizados para componer interacciones adicionales.
3. **Variables de voz**
Asigne aquí interlocutores si el grupo de variables de voz está configurado.

::: tip Nota
Los LLM también pueden usarlas con prioridad para verificar los diálogos.
:::
4. **Notas de usuario**
Redacte aquí notas y recordatorios para compositores, traductores o para usted mismo.

::: tip Nota
Los LLM no tienen acceso a ellas. Dado que las notas están integradas en el archivo .lsde, evite incluir información sensible en ellas si se comparte o se versiona a través de Git.
:::
5. **Imágenes**
Muestre imágenes para contextualizar la carpeta o clave. Muy útil para un traductor sin acceso al código fuente o a una vista previa.

::: tip Nota
Las imágenes se comprimen y degradan en el archivo .lsde para facilitar el uso compartido.
:::
6. **Parentesco**
Estas secciones muestran de forma recursiva la información de los padres, de arriba a abajo.
7. **Editar**
Este botón activa el modo de edición de metadatos.

::: tip Nota
Por defecto, los metadatos están en modo de solo lectura.
:::
8. **Acciones de edición**
En modo edición, cancele o aplique los cambios. Cualquier cambio de clave en modo edición guarda automáticamente la clave anterior.
9. **Filtro de variables**
Este cuadro filtra los grupos de variables a activar, subrayando la importancia **de una buena organización inicial de las variables**.

---
