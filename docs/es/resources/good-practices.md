---
title: "Buena Práctica"
description: "Ej: para una etiqueta <h2/> con un ancla"
section: resources
outline: [2, 3]
---

# Buena Práctica

## Para la WEB {#for-web}
- El uso de patrones Markdown mejora la legibilidad y facilita el mantenimiento, tanto para el traductor como para los scripts de tu sitio web que extraerán el contenido.
- Para las anclas nombradas en un sitio multilingüe, un enfoque interesante es "hardcodear" los enlaces con un diseño Markdown.
Ej: para una etiqueta `<h2/>` con un ancla

## label-in-current-language {#static-anchor-id}
Los LLM son más eficientes que los humanos para proteger los enlaces, y LSDE te permite detectar problemas entre las diferentes versiones lingüísticas.
Así, puedes compartir un enlace que funcionará en todos los idiomas y usar LSDE para gestionar el reemplazo de un ancla obsoleta.

---

## Ambigüedad del código {#code-anti-pattern}
Evita las ambigüedades cuando trabajes con modelos orientados a datos.
Ejemplo:
**Mala práctica:** El término 'key' no es explícito y dificulta su búsqueda.

```ts
const PRODUCTS: Product[] = [
	{
		id: 'fcf7o',
		logo: '/icons/fcf7o-icon-40.webp',
		label: 'FCF7O',
		key: 'game:fcf7o.words.game_title',
	},
	{
		id: 'lsde',
		logo: '/icons/lsde-icon-40.webp',
		label: 'LSDE',
		key: 'software:lsde.name',
	},
	{
		id: 'lsge',
		logo: '/icons/lsge.webp',
		label: 'LSGE',
		key: 'software:lsge.name',
	},
];
```

**Buena práctica:** Adopta una convención única y coherente.
El término *i18nKey* es muy explícito y permite una búsqueda precisa de este valor a través de expresiones regulares (*Regex*).
```ts
const PRODUCTS: Product[] = [
	{
		id: 'fcf7o',
		logo: '/icons/fcf7o-icon-40.webp',
		label: 'FCF7O',
		i18nKey: 'game:fcf7o.words.game_title',
	},
	{
		id: 'lsde',
		logo: '/icons/lsde-icon-40.webp',
		label: 'LSDE',
		i18nKey: 'software:lsde.name',
	},
	{
		id: 'lsge',
		logo: '/icons/lsge.webp',
		label: 'LSGE',
		i18nKey: 'software:lsge.name',
	},
];
```

---

## Pereza {#lazyness}
::: tip Nota
Las malas ideas nacen de la pereza.
:::

No intentes ahorrar claves realizando operaciones para recuperar contenido.
Ejemplo:
```text
const [title, subtitle] = t( 'game:game.title' ).split( /[:：]/ );
```
Es una falsa buena idea, porque en algunos idiomas, los caracteres pueden variar y el orden de las palabras puede cambiar.

---

## Formato de las etiquetas {#balise-format}
Reduce al máximo el código de diseño directamente en el texto, para controlarlo desde el codebase.
Por ejemplo, puedes indicar la ubicación de una imagen, pero no su estilo o cómo debe ser renderizada.
Si necesitas hacer cambios de diseño, ¡no querrás verte obligado a retraducir un texto en 10 idiomas solo para cambiar el estilo de una etiqueta!

Las etiquetas pueden incluir un identificador, pero añadir información adicional es generalmente muy desaconsejable y constituye una mala práctica.
Ejemplo: No hagas
`<img src='url' left />`
sino
`<img id=1 />`
Luego recuperarás el ID de la etiqueta de imagen para aplicarle los estilos necesarios en el codebase.
Los ID deben usarse literalmente y no a través de su índice.
De hecho, en diferentes idiomas, las etiquetas podrían moverse y dejar de corresponder al índice inicial.
El uso de índices naturales también introduce complejidad para el desarrollador; intentar adivinar a qué índice corresponde la imagen o la etiqueta es un verdadero rompecabezas.
Por lo tanto, utiliza etiquetas con un identificador cuando quieras poder personalizarlas después de la interpolación.

---

## CSS {#css}
Para la traducción de un sitio, cuando tengas párrafos, opta por una altura mínima (`min-height`) después de la traducción para evitar desajustes visuales al cambiar de idioma.
Ej: `mih={'3lh'}`
Esto te permite definir una altura mínima basada en el idioma que ocupe más líneas, garantizando así una experiencia de usuario (UX) consistente y sobria.

## Namespace {#namespace}
- Incluye siempre los 'namespace' en tus claves de traducción, incluso si solo tienes uno.
Esto facilita enormemente la configuración de un patrón Regex para encontrar tus claves.
Ej: `game:a.b.c`, `common:a.b.c`

---

## Gestión de versiones GIT {#git}
Los proyectos `.lsde` son archivos en formato `JSON`, lo que facilita su control de versiones con herramientas como Git. 
Se recomienda encarecidamente registrar su proyecto en un repositorio Git para beneficiarse de un historial completo y una mayor seguridad. 
Aunque LSDE integra su propio sistema de copia de seguridad, el uso de Git sigue siendo la solución óptima para la gestión de sus archivos de datos.

---

## Contexto y redacción {#content-writing}
- **Proporcionar un contexto claro para cada clave**
Un contexto explícito puede residir en el nombre de la clave, su ruta de acceso (jerarquía), su entorno (claves padre/hijo) o sus metadatos. 
Evite las claves ambiguas que dan lugar a la especulación. Si la lectura de una clave requiere verificar su utilidad en el código, es que la arquitectura de sus datos debe ser mejorada.

**Ejemplos de claves explícitas:**
`game:.scenes.001.events.001.1`
`game:.scenes.001.events.001.2`
`game:.scenes.the-ice-land.events.the-lost-house.1`
`game:.scenes.the-ice-land.events.the-lost-house.2`
`game:.ui.menus.new-game.label`
`game:.ui.menus.new-game.description`

Estas claves permiten comprender inmediatamente que apuntan a diálogos o elementos de interfaz.
- Las dos primeras utilizan identificadores (IDs) numéricos: un enfoque eficaz para los juegos de acción donde la dirección artística (DA) es flexible y puede evolucionar sin impactar la estructura técnica.
- Las dos siguientes utilizan IDs semánticos: indispensables para los juegos narrativos donde el contenido está estrechamente vinculado al código. Esto evita desvirtuar el acoplamiento entre la narración y la lógica del juego.
- Las dos últimas describen claramente elementos de menú (label y descripción).

**Ejemplos de malas prácticas:**
`game:events.001.1` (Demasiado vago: ¿dónde se utiliza este evento?)
`game:.scenes-events-the-lost-house.1` (Redundancia en la ruta)
`game:.ui-menus.new-game-label` (Concatenación innecesaria)

Evite la redundancia en las rutas. Si necesita facilitar la búsqueda, exporte más bien un archivo de tipos que contenga las claves concatenadas en lugar de degradar la estructura de sus datos JSON.

- **Evitar cualquier dependencia del contexto implícito**
Una cadena nunca debe depender de un elemento externo para ser comprendida (posición en pantalla, color, icono).  
Ej.: evite
`"Haga clic aquí para continuar"` 
Prefiera  
`"Continuar al pago"`  
El texto debe seguir siendo comprensible incluso extraído de su interfaz de usuario (UI).
Algunos idiomas pueden no tener una traducción posible o pueden tener formulaciones diferentes según la acción y la ubicación del texto.

::: tip Nota
Los textos de acción deben describir la acción y el objeto: «Ir al pago», «Descargar el informe PDF» y no «Haga clic aquí» o «Saber más» sin precisión.
:::

- **Evitar las frases segmentadas y el exceso de modularidad**
No trasponga los principios de programación (como S.O.L.I.D.) a la redacción de contenido i18n. La redacción y el código son disciplinas diferentes. 
Priorice frases completas en lugar de fragmentos, ya que cada idioma posee su propia sintaxis. 
Aunque frameworks como `i18next` soportan el anidamiento («nesting»), esto genera a menudo una complejidad innecesaria. Si es necesaria una variación, reescriba la frase íntegramente. Limite la interpolación a variables simples como nombres o números.

- **Indicar las restricciones de visualización (UI)**
Si la interfaz impone un límite de caracteres o una restricción de longitud, especifíquelo en los metadatos y proporcione un elemento visual (captura de pantalla o maqueta). 
Es más sencillo para un traductor adaptar su texto a una interfaz restrictiva que para un programador hacer que la UI sea dinámica para todos los idiomas del mundo. Delegar esta gestión al redactor garantiza una mejor experiencia de usuario (UX).

- **Prohibición de emojis no controlados**
No inserte caracteres especiales o emojis directamente en sus textos. 
Utilice variables (ej.: `{{emoji_heart}}`) para controlar su renderizado mediante el código. El renderizado de los emojis varía considerablemente según el sistema operativo y el entorno del usuario.

- **Evitar las metáforas culturales**
Las expresiones idiomáticas, juegos de palabras y metáforas locales deben proscribirse en las cadenas genéricas.  
Lo que está claro en un idioma puede resultar absurdo o intraducible en otro.

- **Asumir que el traductor no ve la aplicación**
Redacte como si el traductor no tuviera acceso ni al código ni a la UI.  
Todo lo que sea necesario para la comprensión debe estar presente en la clave, su jerarquía o sus metadatos.

---

## I18n técnica {#i18n-technical}
- **Placeholders nombrados y explícitos**
Priorice los placeholders nombrados (`{username}`, `{count}`) frente a los índices posicionales (`{0}`, `{1}`). LSDE ofrece una sección dedicada a las variables para definir su contexto y asegurar su trazabilidad dentro de su proyecto.

- **Un placeholder por concepto**
Cada placeholder debe ser atómico y representar un único dato (nombre, fecha, número). Evite las variables genéricas o polimórficas que complican la traducción y la interpretación.

- **Compatibilidad RTL (Right-to-Left)**
Anticipe la visualización para los idiomas que se escriben de derecha a izquierda. El renderizado debe seguir siendo fluido y estructuralmente correcto sin necesidad de modificaciones manuales de la cadena de caracteres.

- **Proscripción de la concatenación**
Nunca componga una frase combinando varias claves de traducción. Para respetar las sintaxes y las concordancias gramaticales propias de cada idioma, toda frase completa debe corresponder a una clave única.
