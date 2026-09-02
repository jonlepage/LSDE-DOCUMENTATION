---
title: "Renderizado"
description: "LSDE ofrece un motor de renderizado de texto muy avanzado que permite personalizar en tiempo real el renderizado de segmentos de texto."
section: features
outline: [2, 3]
---

# Renderizado

<DocImage src="/doc/lsde/doc-lsde-features-howtorendering-0-animate.webm" />

## ¿Qué es el renderizado de texto? {#what-is-text-rendering}
LSDE ofrece un motor de renderizado de texto muy avanzado que permite personalizar en tiempo real el renderizado de segmentos de texto.

### ¿Para quién es útil? {#who-is-it-for}
Generalmente, esta funcionalidad es principalmente requerida por los desarrolladores de juegos, ya que la web y el software suelen exigir menos complejidad narrativa.
Tomemos, por ejemplo, un juego JRPG donde un motor de diálogo debe capturar todos los grupos de parámetros como `{{number:number:number}}`.
Estos índices se utilizan luego para encontrar el ID del personaje que debe hablar, la expresión animada que el personaje debe ejecutar para esa línea y, eventualmente, la intensidad de sus emociones.

Para un desarrollador, esto no plantea ningún problema de legibilidad. Sin embargo, para un traductor o un compositor, exigir una consulta constante de la documentación para verificar el cumplimiento de los códigos del motor y la personalidad de cada personaje podría crear un resentimiento significativo, incluso convertirlo en un enemigo de por vida.

En un estudio profesional, un departamento así requiere un equipo dedicado y cuesta varios millones, lo cual no es realista para un estudio independiente, ya sea en solitario o con un equipo pequeño.

### Solución {#solution}
El renderizado de texto ofrece, por lo tanto, una solución muy potente que permite verificar en todo momento que los términos protegidos destinados al motor están presentes. También permite al traductor, al compositor, así como a las herramientas LLM, beneficiarse de esta información para garantizar la calidad de la narración y las traducciones.

Ya no es el personaje `{{3:4:2}}` quien habla, sino `{{LIA:HAPPY:2}}`, con una referencia a su ficha en caso de necesidad y la visualización de todas estas interacciones, lo que facilita enormemente la composición y las traducciones.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-1.webp" />

## Crear un patrón {#create-pattern}
Diríjase a [la configuración de patrones](/es/interface/project-settings#patterns).
Cree un nuevo patrón en blanco allí.
1. Podrá introducir su patrón en esta sección.
`(xxxxxxx)(xx)(xxxxxxx)`
En este ejemplo, nuestro patrón se compondrá de 3 grupos.
LSDE se encargará de detectar automáticamente los grupos de captura para que pueda rellenarlos.

El grupo 0 representa la captura completa en sí misma y siempre estará presente. Puede limitarse a configurar simplemente la captura principal, lo cual suele ser suficiente en la mayoría de los casos.

Sin embargo, si desea explotar los otros 3 grupos que ha añadido a su Regex, puede crear decoradores adicionales.
### ¿Qué es un decorador? {#what-is-decorator}
Un decorador es, como su nombre indica, una 'decoración' que, una vez asignada a un grupo, embellecerá el texto capturado y mejorará su renderizado visual.
Es un sistema experimental, y actualmente existen algunas reglas a seguir:
- No se pueden asignar varias decoraciones al mismo grupo dentro del mismo patrón.
- Los decoradores pueden perjudicar en lugar de mejorar la lectura si se usan incorrectamente.
- Los decoradores de tipo 'Widget' solo se muestran en las ventanas activas.
- Evite los patrones Regex demasiado complejos con condicionales y 'lookbehind' que pueden afectar el rendimiento del desplazamiento en el editor.

Cuando crea un decorador, puede configurarlo con diferentes comportamientos.
2. Es aquí donde se asigna el grupo de captura al decorador. Aquí le asignaremos los grupos de captura 1, 2 y 3.
3. Puede elegir el tipo de decorador, por ejemplo 'Widget'.
4. Y podemos indicar que cada captura estará asociada a una categoría de variables.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-2.webp" />

## Probar su patrón {#test-pattern}
Diríjase a [regexr](https://regexr.com) para probar y comprender mejor su Regex.
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```

1. Si seleccionamos la primera captura,
2. y mostramos los detalles completos,
3. podemos observar los siguientes detalles de captura:
El grupo 0 es la captura completa en sí misma.
Para los grupos 1, 2 y 3, tenemos 'a2', 'e1' y '1' capturados correctamente.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-3.webp" />

## Vincular una variable {#link-variable}
Podemos hacer más con estas capturas al hacer que coincidan con algo, o más bien con alguien, en nuestro ejemplo.
En nuestro motor ficticio, 'a1', 'a2', 'a3'... corresponderán a personajes en nuestro juego.

1. Active la opción 'variable' en su patrón.
2. Vamos a configurar el grupo de captura destinado a identificar nuestras variables a través de etiquetas (tags). Aquí, queremos que LSDE busque las variables del grupo "ACTORS".

::: tip Nota
¿Por qué no buscar en todas las variables en lugar de en un solo grupo? Por razones de mantenibilidad de su proyecto y de rendimiento.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-4.webp" />

## Personalizar la variable {#customize-variable}
Antes de asignar una decoración a una variable, esta ya debe existir.
Diríjase a [la sección de variables](/es/interface/project-settings#les-variables).
Deberá crear una nueva categoría y una variable.
1. Cree una categoría llamada 'ACTORS' y añada una nueva variable.
2. Es en el campo 'Tags' donde podremos añadir palabras clave que serán buscadas por las capturas de los patrones y otros sistemas.
Añada, por ejemplo, "a1", que correspondería al ID ficticio de nuestro personaje en nuestro motor de juego ficticio.
3. Luego puede asignarle una apariencia de renderizado en el editor de texto, así como una apariencia específica para las info-burbujas (tooltips).

Después, podrá disfrutar del renderizado "Widget" de esta variable directamente en su editor de texto.
Y con un simple clic, también podrá mostrar una info-burbuja que presentará la información configurada para la variable.

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-5.webp" />

::: tip Nota
Un clic mostrará la decoración sin el widget.
:::

---
