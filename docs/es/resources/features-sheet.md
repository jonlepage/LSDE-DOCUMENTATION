---
title: "Hoja de características"
description: "La versión Beta pública aporta mejoras importantes a la experiencia de usuario (UX) y a las funcionalidades para soportar cualquier tipo de proyecto."
section: resources
outline: [2, 3]
---

# Hoja de características

La versión Beta pública aporta mejoras importantes a la experiencia de usuario (UX) y a las funcionalidades para soportar cualquier tipo de proyecto. 
Aquí tienes un resumen de las funcionalidades (Cheat Sheet):

## General {#general}
- Interfaz muy compacta, moderna y ergonómica.
- Interfaz íntegramente traducida a 10 idiomas: fr, en, es, de, it, pl, ja, ko, zh, ru.
- Cambio rápido de la interfaz entre dos idiomas preferidos mediante `[F1]`.
- Sistema de diseño modular con ventanas acoplables (ideal para multimonitor).
- Modo pantalla completa para todas las ventanas.
- Tooltips de ayuda en todos los botones al pasar el ratón.
- Accesibilidad: opciones dedicadas al daltonismo y a los trastornos de la visión.
- Atajos de teclado para acciones rápidas según el contexto.
- Varios modos Zen para favorecer la concentración durante la redacción.
- Estadísticas del proyecto en tiempo real: claves, palabras, caracteres, tokens, pulsaciones de teclas, selecciones.
- Creación rápida de proyectos guiada y preconfigurada en un clic.
- Archivos de proyecto `.lsde` en JSON compatibles con el versionado (Git) y fáciles de compartir.
- Soporte del sistema (OS) para iconos y para la apertura de proyectos con la extensión `.lsde`.
- Opción de reapertura automática del último proyecto utilizado.
- Historial de los últimos proyectos abiertos.
- Detección de cierres inesperados con restauración de sesión.
- Importación/Exportación individual del perfil de configuración global de LSDE.
- Activación/desactivación y cambio de modelo LLM en un clic.
- Soporte de un LLM nativo de reserva (fallback) gratuito y anónimo, sin cuenta ni clave API.
- Soporte de copilotos LLM: Claude, DeepSeek, Gemini, GPT, Mistral, Ollama, ElevenLabs...
- Soporte de LLM locales mediante `localhost`.
- Asistente LLM integrado entrenado con la documentación para guiarle.
- Menú de asistencia LLM en los campos de configuración: ayuda, completado, mejora, traducción.
- Diagnóstico y gestores de errores y advertencias internas.
- Documentación completa de LSDE e i18n disponible en línea.
- Soporte para abrir enlaces externos (navegador) o internos (LSDE).
- Preconfiguraciones para: Unity, Godot, RPG Maker, Unreal Engine, GameMaker, Construct3, Cocos2d, Phaser, Babylon.js, SugarCube, NovelStudio...
- Gestor de contextos i18n personalizables: plurales, géneros, booleanos, etc.

## Desarrollador {#dev}
- Sistema de análisis de la base de código para el referenciado automático de claves.
- Escáner RAW para identificar textos brutos que potencialmente requieran claves i18n.
- RegEx preconfigurados y personalizables para motores de juegos propietarios.
- Soporte de claves dinámicas (ej: `game:.scenes.${index}.events.1`).
- Creación automática de claves con detección de contexto y texto por defecto.
- Filtro de visualización para las claves detectadas pero aún no creadas.
- Doble clic para abrir el IDE en la ubicación exacta de la clave en el código fuente.
- Control del número de líneas de código fuente mostradas.
- Temas de visualización para el código fuente.
- Detección y visualización de desincronizaciones externas de los archivos i18n en tiempo real.
- Opción de sincronización manual en un clic.

## Árbol {#tree}
- Múltiples modos de visualización: árbol, lista plana (con o sin ruta completa), traducciones faltantes, claves sin referencia, con audio o con tarea en curso.
- Búsqueda por clave o por contenido asociado.
- Diseño de carpetas de namespaces (root) optimizado para una identificación rápida.
- Visualización del número de subcarpetas al seleccionar.
- Creación inteligente de claves i18n con autoincremento según las selecciones.
- Menú contextual completo mediante clic derecho.
- Selección múltiple con `Ctrl+clic`.
- Soporte de arrastrar y soltar (Drag & Drop).
- Etiquetas contextuales en cada ítem: plural, género, voz, incompleto, desconocido en el código, etc.
- Tareas por lotes (batch) a través del menú contextual para iterar en las subcarpetas.

## LLM {#LLM}
- Gestor de modelos favoritos.
- Gestión segura de claves API.
- Posibilidad de registrar varias claves API con rotación automática (auto-roll) en caso de errores.
- Gestión y personalización de tareas nativas: instrucciones y reglas enviadas al LLM.

## Edición / Composición {#editing}
- Personalización del tema y la tipografía: fuentes, espaciado, altura de línea, colores y soporte RTL.
- Motor de renderizado de texto 100% personalizable: variables, colores, enlaces, tooltips.
- Filtrado de idiomas y contextos a mostrar.
- Búsqueda, reemplazo y navegación textual con soporte RegEx.
- Menú de tareas para procesar cada diálogo: traducción, corrección, reformulación, ajuste de longitud, continuación de texto.
- Corrector ortográfico LLM configurable en tiempo real.
- Barra de acción rápida: navegación, gestión del renderizado, creación de contextos o de claves.
- Opción de modo párrafo mediante doble salto de línea.
- Eliminación rápida de línea (comportamiento de IDE).
- Menú contextual al seleccionar texto.
- Gestor de wrappers personalizables para enmarcar el texto seleccionado.
- Wrappers incrementales y reversibles según el número de interacciones.
- Sistema de validación: detección de cambios, traducciones a revalidar o ignorar.
- Comparación de modificaciones y refinamiento de resultados durante una tarea.
- Memorización de configuraciones rápidas para cada tipo de tarea.
- Soporte de los paradigmas SAD/MAD (Single/Multi Actor Per Dialog).
- Gestor de voz (audio) por personaje para cada cadena.
- Visualización de metadatos: imágenes, notas, contextos LLM, personajes, voces, iconos.
- Visualización de variables dependientes y referencias textuales.
