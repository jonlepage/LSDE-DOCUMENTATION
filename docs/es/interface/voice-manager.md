---
title: "Gestión de Voz"
description: "Este módulo permite gestionar la integración de narraciones de voz en tus juegos y proyectos narrativos."
section: interface
outline: [2, 3]
---

# Gestión de Voz

Este módulo permite gestionar la integración de narraciones de voz en tus juegos y proyectos narrativos.
Para cada clave de tu proyecto, puedes generar y asociar una versión de voz correspondiente.
Encontrarás [una guía completa aquí](/es/features/voice) como complemento a esta página.

---

## ¿Cómo funciona? {#how-it-works}
LSDE soporta dos enfoques, abreviados `SAD` y `MAD`.
1. **SAD: "Diálogo de un solo actor"**
En este paradigma, puedes asociar manualmente un interlocutor específico a cada clave de diálogo a través de sus metadatos.

::: tip Nota
Aunque el modo SAD está diseñado principalmente para un actor por clave, es posible asociar múltiples perfiles de voz a la misma clave a través de los metadatos, por ejemplo, para mensajes genéricos que requieren diferentes entonaciones o voces.
:::
Ejemplo de un diálogo gestionado en modo **SAD** con dos claves distintas:
```text
salut ca va ?
```
```text
oui ca va super
```
2. **MAD: "Diálogo multiactor"**
En este paradigma, varios interlocutores pueden intervenir dentro de una misma clave de diálogo.
Sus réplicas se identifican mediante etiquetas (tags) específicas que segmentan el texto.
El orden de intervención es secuencial.
Para extraer los identificadores de los personajes y sus textos asociados, debes definir una expresión regular (regex).

::: tip Nota
En algunos proyectos complejos, puede ser conveniente agrupar varios diálogos en una sola clave y gestionar su separación en postproducción, directamente en el motor del juego.
:::
Ejemplo para un diálogo **MAD**:

<DocImage src="/doc/lsde/doc-lsde-features-howtorendering-0-animate.webm" />

```text
{lia} salut ca va ?
{boo} oui ca va super
{lia} Ho !
{boo} quoi !? pourquoi cette tete ?
{lia} ...
{sam} ... hey vous 2 !
```

::: tip Nota
Este método reduce considerablemente el número de claves a gestionar.
:::
Para el ejemplo anterior, donde cada réplica tendría su propia clave, y con una traducción a 10 idiomas, esto representaría más de 60 claves.
Gestionar cada intervención individualmente se volvería rápidamente inmanejable para un RPG que contenga cientos de interacciones de este tipo.

## Requisitos previos {#prerequisites}
Para generar las voces, debes disponer de una cuenta y una clave API [ElevenLabs](https://elevenlabs.io).

::: tip Nota
ElevenLabs ofrece una clave API gratuita con un cupo de créditos mensuales, lo que te permite probar su tecnología.
:::

<DocImage src="/doc/lsde/doc-lsde-ui-voicemanager.webp" />

## Interfaz {#interface}
La interfaz muestra una lista de idiomas, los perfiles de personajes, las herramientas de generación de voz y el historial de las voces creadas.
0. **Historial**
Lista de todas las instancias de audio creadas para la clave seleccionada.
1. **Contenedor de idioma**
Estas pestañas agrupan a los personajes por idioma.
2. **Contenedor de interlocutores**
Lista de las entidades (personajes) a las que se puede atribuir una narración de voz. En modo \\MAD\\, su orden corresponde al de su aparición en el texto fuente.
3. **Texto**
El texto capturado que sirve de base para la narración de voz generada. Se recomienda modificar la puntuación o añadir indicaciones de emociones para influir en la voz, sin alterar el texto fuente original. Se mostrará una alerta si el texto fuente es modificado.
4. **Mejora**
Este botón permite mejorar el texto destinado a la narración de voz basándose en la personalidad del personaje y el contexto definidos en los metadatos de la clave.

::: tip Nota
Esta función solo está disponible para los modelos V3 de ElevenLabs.
:::
5. **Generador**
Este botón genera una voz y la añade al historial.
6. **Restablecer**
Este botón anula las modificaciones realizadas en el texto y restaura la versión original capturada.
7. **Validar una voz**
Permite validar una voz.
Las voces validadas se conservan independientemente del historial y se exportarán de acuerdo con los criterios definidos al guardar el proyecto.

::: tip Nota
Es posible validar varias voces para un mismo texto y un mismo personaje.
:::
Los nombres de archivo se incrementarán automáticamente.
Esto puede ser útil, por ejemplo, para matizar las voces en un motor de juego que utilice semillas aleatorias (random seeds).
8. **Firma de generación**
Esta información, utilizada durante la generación, sirve como firma para rastrear y comprender el origen de cada voz.

::: tip Nota
Por ejemplo, si añades un nuevo personaje o lo mueves en el texto fuente, podrás reasignar las voces existentes a la entidad, incluso si su ubicación ha cambiado.
:::
9. **Reproductor de audio**
Permite iniciar la reproducción de la voz y visualizar su pitch para compararlo con el ambiente general deseado.

## Crear voces {#create-voices}
### Con SAD {#with-sad}
Debes haber configurado al menos un perfil de voz y activado el gestor de voces en la configuración del proyecto.
La configuración de los actores (o entidades) asociados a la clave y de sus perfiles de voz se realiza en la ventana de los metadatos.
### Con MAD {#with-mad}
Debes haber configurado al menos un perfil de voz y activado el gestor de voces en la configuración del proyecto.
Activa luego el modo *MAD* y redacta la expresión regular *(regex)*."
Esta debe capturar dos grupos obligatorios: el identificador del actor y su texto correspondiente.
Define el índice de estos grupos de captura en la configuración de asociación vocal.

<DocImage src="/doc/lsde/doc-lsde-ui-voicereorder.webp" left />

## Corregir problemas {#fix-issues}
Generar las voces antes de la finalización del texto es una práctica a evitar.
Sin embargo, si esto ocurre, LSDE te ofrece herramientas para corregir y reorganizar las voces, evitando así tener que rehacer todo.
Cuando modificas el texto de un diálogo después de que se han generado voces, su firma se vuelve incompatible, y se te pedirá que las revalides.
En modo **MAD**, si mueves, añades o eliminas personajes, también deberás reasignar las instancias de voz ya generadas.

::: tip Nota
La reasignación se realiza en el idioma nativo del proyecto; los demás idiomas se reorganizarán automáticamente gracias a su firma de origen.
:::

Encuentra la [guía completa aquí](/es/features/voice).

---
