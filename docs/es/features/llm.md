---
title: "LLMs"
description: "Para usar LLMs (Large Language Models) en LSDE, debe configurar sus accesos: introduzca sus claves API creadas previamente para un uso a través del Cloud…"
section: features
outline: [2, 3]
---

# LLMs

<DocImage src="/doc/lsde/doc-lsde-features-llms-2.webp" />

## Usar un LLM {#usage}
Para usar LLMs (Large Language Models) en LSDE, debe configurar sus accesos: introduzca sus claves API creadas previamente para un uso a través del Cloud, o configure una dirección "localhost" si prefiere utilizar un modelo local.

### Sistema multiclave {#multi-keys}
LSDE permite gestionar varias claves API simultáneamente. 
Este sistema le permite aprovechar varias claves con quotas limitadas alternando automáticamente hacia aquellas que aún disponen de créditos. 

Esta funcionalidad es ideal para maximizar el uso de claves gratuitas sujetas a una renovación diaria. 
Al activar la rotación automática, puede agotar sus créditos sin intervención manual y con total seguridad.

::: tip Nota
Cuando se detecta un error, LSDE considera que la clave API se ha agotado y pasa automáticamente a la siguiente. Puede definir varios ciclos de rotación (generalmente 2) para asegurarse de haber recuperado todos los créditos gratuitos de todas sus claves.
:::

### Activar un LLM {#activate-llm}
Es en el pie de página de la aplicación donde tendrá la posibilidad de activar o desactivar uno de sus LLMs disponibles.
Cuando no se selecciona ningún LLM, LSDE intentará utilizar el LLM fallback que haya configurado previamente.

---

<DocImage src="/doc/lsde/doc-lsde-features-llms-1.webp" />

## LLMs locales {#local-llm}
Si desea utilizar sus modelos localmente, solo tiene que introducir la dirección localhost de su servidor. LSDE se conectará a él para ejecutar sus tareas.

### ¿Cómo instalar un LLM local? {#local-llm-install}
- [Descargue Ollama](https://ollama.com/download) para su sistema operativo.
- Inicie el servidor e instale sus modelos.
- Cierre la aplicación (debe permanecer activa en segundo plano).
- Introduzca su dirección localhost y el puerto correspondiente en la configuración Ollama de LSDE.
- Haga clic en « Conectar » y elija uno de sus modelos.
- Asegúrese de activar el LLM en la barra de estado situada en la parte inferior del software.
