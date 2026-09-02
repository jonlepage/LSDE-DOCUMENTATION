---
title: "Introducción"
description: "Más que una simple herramienta de traducción, LSDE está optimizado para permitirle establecer un flujo de trabajo ideal y personalizado para cada proyecto."
section: getting-started
outline: [2, 3]
---

# Introducción

<DocImage src="/doc/lsde/lsde-banner.webp" h="80" icon />

## ¿Qué es LS-Dialog Editor? {#what-is-ls-dialog-editor}
**LSDE**: acrónimo de *LepaSoft Dialog Editor*, es una herramienta diseñada para **asistir a los desarrolladores en la redacción y traducción de sus proyectos**.
Más que una simple herramienta de traducción, LSDE está optimizado para permitirle establecer un flujo de trabajo ideal y personalizado para cada proyecto.
- Traducción de texto manual o asistida por LLM.
- Composición de texto manual o asistida por LLM.
- Gestión centralizada de diálogos y cadenas de texto.
- Seguimiento de modificaciones e historial de versiones.
- Detección automática de inconsistencias o problemas.
- Soporte para múltiples formatos de exportación e importación.
- Integración posible con herramientas externas (motores de juego, pipelines CI/CD).
- Organización de la estructura y el renderizado de la interfaz de su proyecto.
- Herramientas de validación lingüística (longitud, restricciones, tags, variables).
- Colaboración en tiempo real o mediante archivos compartidos.
- Generación y sincronización de la narración de audio vocal.
- Personalizaciones avanzadas del software para sus necesidades.

## ¿Cómo funciona LS-Dialog Editor? {#how-it-works}
LSDE se basa en **las buenas prácticas de i18n** para organizar sus claves de traducción.
Sin imponer una estructura única, integra enfoques probados por los frameworks para gestionar complejidades lingüísticas como los contextos y los plurales.

**El flujo de trabajo es muy simple:**
- Crea un nuevo proyecto.
- Define la carpeta de su proyecto.
- Crea claves manualmente o automáticamente escaneando su proyecto.
- Aplica tareas a las claves (traducciones, correcciones, reorganizaciones...).

## Las claves {#the-keys}
LSDE emplea un sistema de claves jerárquicas para localizar con precisión cada diálogo.
Ejemplo: La clave `game:scenes.events.The-quest-of-sun.d1`
- `game:` indica el namespace (espacio de nombres). Este nombre se define por el nombre del archivo de traducción, por ejemplo: `locales/en/game.json`, `locales/en/scenes.json`...
- `scenes.events.The-quest-of-sun.d1` representa la ruta de acceso para encontrar el diálogo en la estructura JSON del archivo.

```json
	// file game.json
	{
		'scenes': {
			'title': '',
			'description': '',
			'events': {
				'The-quest-of-sun': {
					'd1': '',
				},

			},
		},
	},
```

::: tip Nota
LS Editor de Diálogo almacena en caché los diálogos en los archivos `.lsde`. Esto facilita el intercambio y la recuperación de sus proyectos, evitando así el envío de un conjunto de archivos complejos a sus clientes.
:::

## Convenciones de claves i18n {#i18n-key-convention}
[W3C Internationalization](https://www.w3.org/International/) es la referencia que define i18n como estándar, independientemente de cualquier biblioteca de software.
Las recomendaciones del W3C definen las reglas fundamentales:
- evitar la concatenación
- gestionar los plurales según las reglas lingüísticas CLDR
- gestionar las fechas, los números y las monedas
- proporcionar contexto a los traductores
- separar el texto del código
- prever locales de respaldo (fallback)
- nunca asumir una longitud o un orden de palabras
- soportar escrituras RTL (árabe, hebreo)
En cuanto a los estándares y las buenas prácticas arquitectónicas JSON, [ICU (International Components for Unicode)](https://cldr.unicode.org/index/json-format-data) sirve de referencia.

## ¿i18next & i18n? {#i18next-i18n}
LSDE se basa tanto en i18n como en algunas buenas prácticas derivadas de [i18next](https://www.i18next.com/misc/the-history-of-i18next).
Particularmente para:
- la estructura de carpetas
- la contextualización de los plurales
- el soporte para anidamientos (nesting) y variables...

### Para los juegos {#for-game-dev}
LSDE soporta dos tipos de diálogos para juegos.
No hay una buena aproximación universal, sino más bien herramientas adaptadas a cada tarea.
- SAD: "Single Actor Dialog"
Un solo actor por diálogo, generalmente ideal para juegos de acción o sin narración compleja.
Esto significa que cada clave corresponde a un diálogo o a un fragmento de texto y debe ser concatenada y ensamblada en el motor del juego.

::: tip Nota
Este enfoque puede introducir mucha complejidad en un juego narrativo con muchas interacciones entre varios personajes, como los JRPG, por ejemplo.
:::
- MAD: "Multiple Actors Dialog"
Varios actores en un mismo diálogo, identificados por etiquetas (tags), ideal para RPGs o juegos con una narración compleja que involucra a varios actores.
Esto significa que integrará una secuencia de diálogos, separados por etiquetas (tags), que luego serán interpretados por su motor de juego.

::: tip Nota
Esto facilita enormemente la perspectiva sobre diálogos complejos que involucran a varios interlocutores, pero es un poco demasiado complejo para simples juegos de acción, por ejemplo.
:::

### Para la WEB {#for-web-dev}
Ya no hay realmente una razón para no traducir su sitio web y así poder exponer su herramienta a nivel mundial.
LSDE ofrece una comodidad de trabajo para desarrollar su escaparate web con una vista previa en tiempo real gracias a HMR y a bibliotecas i18n como i18next en sus versiones React o Next.js, por ejemplo.

- P: ¿No deberíamos dejar que las extensiones gestionen el multilingüismo de los sitios web?
- R: Sí y no. Estas herramientas pueden solucionar problemas temporalmente, pero degradarán la UX y la UI de su escaparate. Tampoco permiten un buen posicionamiento SEO, a diferencia de un sitio web traducido que puede ser indexado y ofrecido a las personas que buscan contenido en su idioma nativo.

### Para el software {#for-app-dev}
La traducción de su software y aplicaciones es extremadamente importante.
Las arquitecturas, lenguajes y técnicas de desarrollo de software son generalmente mucho más libres que las del web.
Es por eso que LSDE ofrece herramientas 100% configurables para adaptarlas a sus necesidades y a su arquitectura.
Son las expresiones regulares (regex) las que permiten crear un acoplamiento entre su arquitectura y LSDE.
