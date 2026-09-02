---
title: "FAQ"
description: "R: Vaya al árbol de claves, haga clic en el botón \"Crear un archivo o una carpeta\" o utilice el menú contextual (clic derecho)."
section: resources
outline: [2, 3]
---

# FAQ

### Q: ¿Cómo crear una nueva clave de traducción? {#create-new-key}
R: Vaya al árbol de claves, haga clic en el botón "Crear un archivo o una carpeta" o utilice el menú contextual (clic derecho). Complete la ruta completa de la clave y confirme. La clave se creará en el espacio de nombres seleccionado.

### Q: ¿Cuál es la diferencia entre una carpeta y un archivo en el árbol? {#difference-folder-file}
R: Las carpetas son contenedores lógicos para organizar sus claves. Los archivos son claves individuales que contienen el texto a traducir. Las carpetas pueden contener otras carpetas o claves.

### Q: ¿Cómo eliminar una clave no utilizada? {#delete-unused-key}
R: Active la opción "Mostrar/Ocultar claves huérfanas" en el encabezado del árbol para identificar las claves presentes en LSDE pero ausentes de su código fuente. Luego puede eliminarlas a través del menú contextual.

### Q: ¿Qué LLM están disponibles en LSDE? {#available-llms}
R: LSDE soporta 7 proveedores principales: Anthropic, OpenAI, Mistral, Gemini, Deepseek, ElevenLabs y un servicio gratuito a través de correos electrónicos temporales. Puede configurar sus claves API en los ajustes globales, [sección Autenticación](/es/interface/global-settings#authentication).

### Q: ¿Cómo usar los LLM de forma gratuita? {#use-llms-free}
R: LSDE propone un método gratuito para OpenAI mediante la creación de cuentas con correos electrónicos temporales (temp-mail o 10minmail). Dispondrá de aproximadamente 70 tareas por hora con una cuota limitada.
También puede utilizar los servicios de Google con Gemini, que ofrece claves API gratuitas.

### Q: ¿Son fiables las traducciones de los LLM? {#llm-reliability}
R: Los resultados son pertinentes y satisfactorios, pero sigue siendo indispensable recurrir a un profesional de las lenguas para la verificación final. Los LLM sobresalen en la traducción cuando se proporciona el contexto apropiado.

### Q: ¿Cómo mejorar la calidad de las traducciones de los LLM? {#improve-llm-quality}
R: Complete los metadatos de sus claves con descripciones, variables y notas contextuales. Esta información se integra en las solicitudes a los LLM para garantizar resultados más pertinentes.

### Q: ¿Para qué sirven los metadatos? {#metadata-purpose}
R: Los metadatos proporcionan contexto adicional a los traductores, redactores y LLM. Incluyen descripciones, variables autorizadas, notas de usuario e imágenes para contextualizar visualmente el contenido.

### Q: ¿Cómo añadir imágenes a las claves? {#add-images-to-keys}
R: Abra la ventana de metadatos para la clave seleccionada y utilice la sección "Imágenes". Las imágenes se comprimen e integran en el archivo .lsde para facilitar su intercambio.

### Q: ¿Tienen los LLM acceso a las notas de usuario? {#llm-user-notes-access}
R: No, las notas de usuario están destinadas únicamente a los compositores y traductores. No se transmiten a los LLM.

### Q: ¿Cómo configurar el escáner de código? {#configure-code-scanner}
R: Vaya a la sección de Patterns (ajustes del proyecto). Cree un patrón con una expresión regular (Regex) que contenga al menos 1 grupo de captura para identificar sus claves i18n en su base de código.

### Q: ¿Qué lenguajes de programación son compatibles? {#supported-languages}
R: No hay ninguna limitación intrínseca. Simplemente debe crear las Regex apropiadas para capturar sus claves, independientemente del lenguaje. Utilice una herramienta como regexr.com para probar sus patrones.

### Q: ¿Cómo identificar las claves faltantes en mi código? {#identify-missing-keys}
R: Active el modo "Clave faltante" en el escáner de código. LSDE mostrará únicamente las claves presentes en su código fuente pero ausentes en el árbol de LSDE. Puede crearlas por lotes.

### Q: ¿Qué es el renderizado de texto post-procesamiento? {#post-processing-rendering}
R: Es un sistema que permite personalizar la visualización del texto en tiempo real. Puede configurar patrones Regex para capturar grupos de texto y asignarles decoradores (colores, iconos, widgets) para mejorar la legibilidad.

### Q: ¿Cómo añadir "widgets" al texto? {#add-widgets-to-text}
R: Cree un patrón con una Regex en los ajustes del proyecto. Asigne un grupo de captura a un decorador de tipo "Widget". El widget se mostrará únicamente en las ventanas activas para optimizar el rendimiento.

### Q: ¿Cómo vincular variables al renderizado? {#link-variables-to-rendering}
R: En los ajustes del proyecto, sección Variables, cree una categoría y variables con "tags". Configure sus patrones Regex para capturar estos tags y LSDE asociará automáticamente los decoradores a las instancias encontradas.

### Q: ¿Cómo generar voces para mis diálogos? {#generate-voices}
R: Primero debe obtener una clave API de ElevenLabs (plan gratuito disponible). Configure sus perfiles de voz en los ajustes del proyecto y luego utilice el gestor de voces para generar narraciones.

### Q: ¿Cuál es la diferencia entre SAD y MAD? {#sad-vs-mad}
R: *SAD* (Single Actor Dialog) = un interlocutor por clave. *MAD* (Multi Actor Dialog) = varios interlocutores en una misma clave, identificados por tags Regex. MAD reduce significativamente el número de claves a gestionar.

### Q: ¿Cómo gestionar varios personajes en un diálogo? {#handle-multiple-characters}
R: En modo MAD, utilice etiquetas como `{personaje} texto` en su clave. Configure una Regex para capturar el ID del personaje y su texto, luego asocie perfiles de voz a cada personaje en las variables.

### Q: ¿Qué hacer si he modificado el texto después de la generación de las voces? {#voice-modification-after-gen}
R: LSDE detecta las modificaciones y le propone revalidar las voces. En modo MAD, puede reasignar las instancias de voz existentes mediante arrastrar y soltar si ha movido o añadido personajes.

### Q: ¿Cómo cambiar la fuente o el tamaño del texto en el editor? {#change-font-size}
R: Vaya a Ajustes Globales > Interfaz de usuario > Tipografía. Puede ajustar el tamaño, el espaciado, la fuente y la altura de las líneas.

### Q: ¿Cómo cambiar el idioma de la interfaz de LSDE? {#change-interface-language}
R: Vaya a Ajustes Globales > Accesibilidad > Selección de idiomas. Puede configurar 2 idiomas de interfaz y alternar entre ellos con [F1].

### Q: ¿Cómo importar un proyecto existente? {#import-existing-project}
R: Vaya al Gestor de Localizaciones y utilice la opción "Importación inteligente". Estructure sus carpetas según el formato `../folder/lang/namespace.json` y LSDE los importará automáticamente.

### Q: ¿Cómo proteger mis claves de las modificaciones? {#protect-keys}
R: En el editor principal, marque la casilla "Proteger" para marcar un texto como final. Las tareas de LLM lo ignorarán automáticamente.

### Q: ¿Cómo compartir mi proyecto LSDE con un equipo? {#share-project-team}
R: El archivo `.lsde` contiene la totalidad del proyecto. Compártalo a través de Git, correo electrónico o un servicio en la nube. LSDE sincronizará automáticamente las modificaciones al abrirse.

### Q: ¿Cómo hacer el seguimiento de las tareas en curso de un colaborador? {#track-collaborator-tasks}
R: Active la opción "Mostrar/Ocultar las claves con tareas en curso" en el árbol. Visualizará rápidamente las claves asignadas a tareas activas o en espera de validación.

### Q: ¿Por qué el editor se ralentiza con varios idiomas mostrados? {#performance-multiple-languages}
R: Por defecto, LSDE desactiva los renderizados complejos (widgets) en las ventanas inactivas para optimizar el rendimiento. Si esto no es un problema, puede desactivar esta optimización en las configuraciones globales.

### Q: ¿Cómo mejorar la velocidad del escáner de código? {#improve-scanner-speed}
R: Seleccione una clave específica en el árbol en lugar de mostrar todos los resultados. Esto filtra los resultados y acelera el escáner. Evite también las Regex demasiado complejas con condicionales.

### Q: ¿Qué es un archivo .lsde? {#what-is-lsde-file}
R: Es el archivo central de su proyecto. Basado en el formato JSON, centraliza la totalidad de sus claves, traducciones, metadatos y las voces de audio.

Incluso puede integrarlo directamente en su codebase para extraer las entradas y mapearlas según sus necesidades:
```ts
type MetasEntries = [key: StructureKeyWithNamespace, value: IStructureMetaData][];
type ValuesEntries = [StructureKeyWithNamespace, [Locales, string][]][];
type VoicesEntriesMap = [StructureKeyWithNamespace, [Locales, ISpeakerVoiceConfig[]][]][];
```
Se recomienda guardarlo en la raíz de su proyecto para aprovechar el versionado con Git. Como no contiene datos sensibles, se puede compartir fácilmente con un traductor o un redactor.

Su presencia en la raíz también facilita la búsqueda de rutas de claves completas, como: `game:.scenes.the-ice-land.events.the-lost-house.1`. Su IDE lo reconocerá como un archivo JSON estándar, permitiéndole leer fácilmente las notas y metadatos proporcionados.

Finalmente, los archivos `.lsde` son retrocompatibles: sus proyectos antiguos se abrirán sin problemas en las versiones más recientes del software.

### Q: ¿Es LSDE gratuito? {#lsde-is-free}
El acceso es gratuito durante la fase beta, pero pasará a ser de pago tras el lanzamiento público. Una versión de prueba estará disponible para evaluar la totalidad de las funcionalidades según sus necesidades.

LSDE ofrecerá después 4 planes adaptados a su presupuesto:
- **Essentiel**: para las necesidades básicas de redacción y composición (licencia de por vida).
- **Professionnel**: para las necesidades avanzadas de los desarrolladores (licencia de por vida).
- **Entreprise**: para las necesidades de los estudios con múltiples puestos (licencia anual).
- **Éducatif**: para escuelas de idiomas o de videojuegos (licencia anual).

### Q: ¿Por qué necesito LSDE? {#why-i-need-lsde}
LSDE reduce drásticamente la complejidad de sus proyectos ofreciendo una interfaz intuitiva y organizada. Le permite componer y traducir cómodamente, sin las limitaciones ligadas a su IDE o al renderizado de su lenguaje de programación. 

Soporta diferentes paradigmas de diseño, lo que lo hace compatible con la mayoría de los motores de juegos propios que deseen optimizar su flujo de trabajo.

### Q: ¿Cómo instalar LSDE? {#how-install-lsde}
LSDE no está disponible para descarga directa. Debe utilizar el programa de instalación `LS-Installer`, que se encargará de descargar y configurar el software por usted.

### Q: ¿Cómo activar LSDE? {#how-activate-lsde}
Su licencia se enviará automáticamente por correo electrónico después del pago. Solo tendrá que introducir la dirección de correo electrónico utilizada y la clave recibida en el software para activarlo. 
Tenga en cuenta que una activación corresponde a un usuario por máquina.
