---
title: "Configuración Global"
description: "Aquí puede configurar los parámetros globales del software LSDE."
section: interface
outline: [2, 3]
---

# Configuración Global

Aquí puede configurar los parámetros globales del software LSDE.
Estos parámetros se compartirán con todos sus proyectos.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-typo.webp" />

## Typographie {#typography}
La tipografía afecta principalmente a las áreas de texto del editor y a ciertos elementos en las opciones de las notas.
La interfaz de LSDE tiene un diseño UI/UX parcialmente personalizable, pero algunos aspectos permanecen fijos por razones de diseño.
Solo los cuadros de diálogo pueden adaptarse a su tema preferido.

::: tip Nota
Esta funcionalidad podría evolucionar con el tiempo si es muy solicitada.
:::
1. **font size**: tamaño del texto en el editor y otras áreas de entrada.
2. **font spacing**: espaciado entre las letras en el editor.
3. **police de charactere**: tipo de letra (font-family) utilizada en el editor de texto.
4. **haute des ligne**: modifica la altura de las líneas en el editor.
5. **couleur**: color del texto en el editor.
6. **epaisseur**: permite hacer el texto más grueso (negrita), si el tipo de letra lo permite.
7. **couleur arriereplan**: define el color de fondo de un editor de texto, ya sea activo (focus) o inactivo.
8. **direction du texte**: define los idiomas cuya visualización debe ser de derecha a izquierda (RTL).

---

## Wrappers {#wrappers}
<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-wrappers.webp" />

Los wrappers son comportamientos de envoltura que se pueden añadir al sistema de selección.
Cuando selecciona texto en el editor y utiliza un atajo de teclado, tiene la opción de envolverlo con símbolos.
Este comportamiento, muy popular en entornos de desarrollo (IDE), también es compatible con LSDE.
1. Teclas que activarán la envoltura cuando se selecciona texto.
2. Caracteres a insertar antes y después del texto seleccionado.
3. Número de iteraciones posibles antes de eliminar la envoltura del texto.
4. Si está activado, elimina los espacios al principio y al final del texto seleccionado para reubicarlos fuera de la envoltura.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-flags.webp" />

## Editeur {#editor}
Esta sección agrupa diversas funcionalidades (flags) que permiten enriquecer su experiencia con $t(main.words.lsde-title).
Para obtener más información, simplemente pase el ratón por encima de cada opción para mostrar una infoburbuja detallada sobre su función.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-tasks.webp" />

## Tasks {#tasks}
La sección Tareas le permite gestionar las tareas nativas de LSDE.
Aquí encontrará las reglas (rules) y las directivas enviadas a los LLM.

- Las **règles (rules)** son las instrucciones generales e importantes que se aplican a todas las tareas.
- Las **tâches (tasks)** son subreglas más específicas, enviadas al LLM para operaciones precisas.

Descubramos la interfaz de las tareas nativas.

<!-- TODO image introuvable : configGlobTaks -->

1. Puede desactivar las tareas innecesarias para sus proyectos (por ejemplo, desactivar la tarea de los menús).
2. Un botón para restaurar la directiva nativa.
3. Un botón para copiar la directiva nativa.

::: tip Nota
No disponible en la versión de prueba de LSDE.
:::
4. El número de palabras y una estimación del costo en tokens.
5. Puede exportar en cualquier momento un archivo JSON para analizar un ejemplo de solicitud enviada al LLM y refinar su prompt engineering.

::: tip Nota
Tenga en cuenta que no se recomienda modificar las reglas y tareas nativas de LSDE.
Se deben priorizar otras soluciones, como el [fine-tuning](/es/interface/fine-tuning) o [las directivas de proyecto](/es/interface/project-settings#llm-directive).
:::

---

## Authentification {#authentication}
Esta sección está reservada para la configuración de los LLM, ya sean gratuitos o accesibles a través de sus propias claves API.
Aquí puede introducir las claves API de sus servicios LLM preferidos y protegerlas.

::: tip Nota
Tenga en cuenta que algunos proveedores, como Gemini o ElevenLabs, ofrecen ahora claves API gratuitas con cuotas de uso mensuales o semanales.
:::

Para los LLM de procesamiento de texto, hay 6 proveedores disponibles.
### Para los LLM de procesamiento de texto {#text-processing-llm}
- Anthropic
- OpenAI
- Mistral
- Gemini
- Deepseek

### LLM para voces {#voice-llm}
Se le ofrece ElevenLabs (también ofrece claves gratuitas con cuotas mensuales).

::: tip Nota
debe crear sus perfiles de voz en sus herramientas
:::

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-auth.webp" />

Simplemente haga clic en `temp-mail` o `10minmail` para obtener una dirección temporal, y luego haga clic en `open` para registrar este correo electrónico.
La sesión se guardará para los días siguientes, permitiéndole disfrutar de GPT y las tareas por lotes.
También estará sujeto a una cuota (actualmente, a fecha del 25 de noviembre de 2025, aproximadamente 70 tareas por hora), después de lo cual deberá esperar.

Cuando la cuenta sea eliminada por OpenAI, deberá repetir el proceso.

::: tip Nota
Tenga en cuenta que este servicio solo debe utilizarse para pruebas básicas y no para producción. El modelo gratuito de GPT es de menor calidad y no soporta bien las funcionalidades de ajuste post-respuesta que ofrece LSDE.
:::

### La interfaz {#interface}
0. Memorizar sus claves API para evitar introducirlas cada vez que inicie el software.

::: tip Nota
las claves están codificadas pero siguen expuestas a usuarios malintencionados
:::
1. Puede cifrar sus claves de forma segura a través del sistema de codificación del software.

::: tip Nota
Sus claves serán cifradas con un identificador único de su máquina y de su instalación. No podrán ejecutarse en otro lugar que no sea esta instancia de LSDE.
:::
2. Puede recuperar su clave cifrada aquí y utilizarla en los campos designados en lugar de las claves API estándar.
3. Aquí es donde debe insertar las claves API de sus proveedores.
4. Un botón de acceso rápido al sitio del proveedor para consultar su consumo.
5. Selección de los modelos disponibles para el proveedor elegido.
6. Puede añadir sus modelos preferidos a favoritos.

::: tip Nota
Los modelos favoritos son accesibles en las pestañas LLM del pie de página del software. Un clic derecho permite alternar rápidamente entre ellos.
:::

### LLM gratuito {#free-LLM}
LSDE también le ofrece un método gratuito para utilizar GPT a través de un proceso especial.
Generalmente querrá utilizar este LLM para realizar pruebas o minitareas sin costo.
7. Puede crear una cuenta ChatGPT gratuita para probar las funcionalidades del software.
Se le sugieren dos proveedores de correos electrónicos temporales.

::: tip Nota
No utilice su cuenta oficial bajo el riesgo de que sea cerrada en caso de uso intensivo.
:::
8. Haga clic aquí para crear una cuenta GPT con su correo electrónico temporal.

::: tip Nota
Generalmente puede realizar un procesamiento por lotes de aproximadamente 70 instancias por hora.
:::

::: tip Nota
Algunos servicios como Google AI ahora ofrecen claves API gratuitas con un número limitado de solicitudes por hora.
:::
También puede aprovechar sus servicios.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-accessibility.webp" />

## Accessibility {#accessibility}
Esta sección le permite configurar los idiomas de la interfaz, así como filtros de visualización, útiles si tiene problemas con la calibración de sus pantallas o si padece alguna forma de daltonismo.

1. Selección de los idiomas de la interfaz: como en la pantalla de inicio, puede reasignar sus 2 idiomas preferidos.
Luego, le bastará con presionar la tecla [F1] para alternar instantáneamente entre las dos interfaces.
Esta funcionalidad permite, por ejemplo, trabajar en su idioma nativo y cambiar en cualquier momento a otro idioma para comunicarse con un colega o consultar documentación.
2. Puede cambiar el contraste del software aquí.
3. Así como el tono (hue), que permite gestionar el tema de color si tiene una discapacidad visual.

---
