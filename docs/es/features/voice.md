---
title: "Voz"
description: "LSDE integra una funcionalidad que permite gestionar la banda sonora de tu proyecto, sincronizada con tus diálogos."
section: features
outline: [2, 3]
---

# Voz

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-1.webp" />

LSDE integra una funcionalidad que permite gestionar la banda sonora de tu proyecto, sincronizada con tus diálogos.

## Prerrequisitos {#prerequisites}
Primero deberá obtener una clave API [Elevenlabs](/es/interface/global-settings#llm-pour-les-voix).
Elevenlabs ofrece actualmente un plan mensual gratuito, ideal para probar su API y descubrir su experiencia.

## Configuración {#configuration}
Para configurar el sistema de voz de su proyecto, vaya a [la sección de configuración de voces](/es/interface/project-settings#voices).

1. Defina la carpeta de exportación de voces, que se guardarán con cada registro del proyecto.
2. El sistema permite nombrar los archivos de salida.
Esta opción adapta los nombres a las necesidades de su motor de juego o de su proyecto.
Un arrastrar y soltar ajusta el orden de las etiquetas.

---

## Asociar variables (automático) {#associate-variables-auto}
<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-2.webp" />

Este ejemplo muestra cómo configurar el sistema de voz para un JRPG con varios personajes por diálogo, donde su motor de juego debe extraerlos.

1. Seleccione un grupo de variables para sus interlocutores.
2. Marque la opción "Múltiples interlocutores por diálogo".
3. Se abrirá una sección para configurar una expresión regular (`regex`) con obligatoriamente 1 grupo:
- Grupo `id`: Captura el valor de la `tag` a buscar en las variables del grupo seleccionado.
- Grupo `value`: Texto capturado para el grupo `id`.

::: tip Nota
Opcional, ya que puede redactar el texto. Este grupo maximiza la automatización y reduce la carga de trabajo.
:::

4. Verá entonces todas las variables del grupo configurado, con su icono respectivo si se ha especificado.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-3.webp" />

## Probar su `regex` {#test-regex}
Puede probar su `regex` para comprenderla mejor en [regexr](https://regexr.com).
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```
1. Por ejemplo, seleccionando la segunda captura.
2. Acceda a los 'Detalles'.
3. Comprobará que:
- El grupo 1 captura el `tag id` de su personaje *a1*.
- El grupo 2 captura el resto del texto para el `id` *a1*.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-4.webp" />

## Las variables {#variables}
En [la sección de variables](/es/interface/project-settings#les-variables):

1. En el grupo `ACTORS` previamente creado.
2. Esta lista corresponderá a la [vista anteriormente](/es/features/voice#associer-des-variables).
3. Proporcionar la apariencia facilita enormemente la organización y validación de los diálogos y la personalidad de los personajes.

::: tip Nota
Tenga en cuenta que puede modificar esta información en cualquier momento o completarla más adelante.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-5.webp" />

## Configurar el personaje {#configure-character}
Volvamos a la [configuración de voces](/es/features/voice#associer-des-variables).

1. Asocie un ID de voz a su variable.

::: tip Nota
Los ID de voz se crean en la plataforma Elevenlabs. Su cuenta de Elevenlabs ya incluye modelos predeterminados.
:::
2. También podrá probar y ajustar el generador de voz.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-6.webp" />

## Crear un ID de voz {#create-voice-id}
En su perfil de [elevenlabs](https://elevenlabs.io/app/voice-lab):

1. Cree una nueva voz personalizada.
LSDE soporta todos los modelos de la API. Recomiendo encarecidamente, en la actualidad, el modelo `V3` por su gestión de tags emocionales, ofreciendo un mejor control narrativo.
2. Después de la creación, vaya a la sección de sus voces.
3. Verifique la presencia del ID (ej: *Lia Sun-berry*, personaje principal de [FCT7O](https://lepasoft.com/es/games/fanatic-cardboard-f7o)).

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-7.webp" />

## Generar un texto vocal {#generate-voice-text}
Una vez que se haya proporcionado el ID, para visualizar o generar textos vocales, abra la ventana del [gestor de voces](/es/interface/voice-manager).

1. Seleccione una clave en el árbol.
No elija una carpeta, ya que los textos vocales se muestran allí solo en modo de lectura.
2. La `regex` capturará los personajes del diálogo y ofrecerá una interfaz de generación vocal.
3. Durante la generación, el texto recibe una *firma* en el instante T. Si el texto cambia sin modificar el orden de los personajes, una alerta le invitará a verificar la necesidad de regenerar la voz.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-8.webp" />

## Asociar variables (manualmente) {#associate-variables-manual}
Para escenarios con un solo personaje por diálogo (sin interacciones), típicos de proyectos simples.
1. Puede desmarcar la casilla *Múltiples interlocutores por clave*.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-9.webp" />

## Configurar los metadatos {#configure-metas}
Asocie a cada diálogo el o los personajes de los que desea generar las voces.

1. Seleccione la clave del diálogo objetivo.
2. Marque cada actor a gestionar para este diálogo.

### ¿Por qué varios personajes? {#why-multiple-characters}
Esto puede ser útil para diálogos genéricos, como una frase de bienvenida reutilizada por varios PNJ aleatorios con diferentes personalidades o sexos.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-10.webp" />

## Reorganización {#reorganization}
1. Siempre en una clave, y no en una carpeta.
2. El gestor de voces puede señalar un problema de reorganización.
En este ejemplo, pasamos de una asignación automática de varios personajes a un sistema manual.

::: warning Atención
Si el sistema detecta cambios importantes en el orden o el número de personajes, deberá reorganizar manualmente cada instancia de voz ya generada.
:::

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-11.webp" />

Solo tiene que arrastrar y soltar cada archivo de voz de diálogo hacia el personaje asociado, declarado en los metadatos o a través del sistema de asignación automática.
