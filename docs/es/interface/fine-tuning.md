---
title: "Ajuste fino"
description: "Esta función le permite controlar los LLM en tiempo real, según el perfil activo."
section: interface
outline: [2, 3]
---

# Ajuste fino

Esta función le permite controlar los LLM en tiempo real, según el perfil activo.
Le permite crear perfiles con reglas personalizadas, definiendo así cómo LSDE transmite la información.
Extremadamente versátil, este sistema le ofrece la posibilidad de experimentar diversos escenarios y adaptar las directrices a sus necesidades específicas.
El sistema está diseñado para una activación y desactivación rápidas. Además, puede modificar las directrices en tiempo real sin afectar sus perfiles guardados.

## ¿A quién va dirigido este sistema? {#target-audience}
Este sistema está diseñado para todos los usuarios. Algunos preferirán las directrices básicas, mientras que otros optarán por un flujo de trabajo más dinámico, útil por ejemplo para la escritura de misiones o escenarios.

---

## La interfaz {#interface}
### Herramientas {#tools}
Descubra las principales herramientas para trabajar con el Fine-Tuning.

<DocImage src="/doc/lsde/doc-lsde-ui-finetuning.webp" />

1. **Activar/Desactivar el Fine-Tuning**
Active o desactive rápidamente el impacto del Fine-Tuning en las tareas actuales y futuras, todo en tiempo real.

::: tip Nota
El icono y el nombre del perfil activo también son visibles en la barra de acciones rápidas, a la altura del icono del Fine-Tuning.
:::
2. **Modo Vertical/Horizontal**
Permite anclar la ventana en modo vertical u horizontal, mostrando así los perfiles de forma más compacta.
3. **Mostrar/Ocultar la lista de perfiles**
Oculte la lista de perfiles para liberar espacio o use los atajos de teclado para acceder a ella.
### Perfiles {#profiles}
4. **Crear un perfil**
Permite crear un nuevo perfil.
5. **La lista de perfiles**
Es aquí donde puede seleccionar, eliminar y modificar los perfiles.
### Configuración {#Configuration}
Configuración del perfil activo
6. **Nota personal del perfil**
Estas notas nunca se transmiten al LLM; sirven únicamente como información para el usuario.
7. **Reglas asociadas al perfil**
Estas reglas complementan las básicas de LSDE. Tiene la posibilidad de desactivar la regla predeterminada en las opciones de tareas.
8. **Directriz de tarea**
Permite enriquecer el contenido de una tarea predeterminada.
9. **Descripciones personalizadas**
Estas descripciones se añaden a los metadatos (metas).
LSDE transmite sistemáticamente los metadatos y sus descripciones al LLM. Este espacio le permite añadir información complementaria a estas descripciones.
10. **Opciones adicionales**
Active o desactive el comportamiento específico de LSDE al enviar información al LLM con este perfil activo.
Pase el ratón sobre cada parámetro para ver una descripción de su impacto.
