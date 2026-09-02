---
title: "Escaneo"
description: "En su proyecto 'LSDE', la configuración del escáner de codebase se realiza a través de la sección de Patrones."
section: features
outline: [2, 3]
---

# Escaneo

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-1.webp" left />

En su proyecto 'LSDE', la configuración del escáner de codebase se realiza a través de [la sección de Patrones](/es/interface/project-settings#patterns).

## Crear un patrón {#create-pattern}
Después de crear una nueva instancia de patrón (inicialmente vacía, por ejemplo):
1. Rellene la expresión regular (*Regex*) que se utilizará para capturar los grupos en su codebase.
2. Es obligatorio rellenar esta sección indicando el grupo que captura su clave 'i18n'.

::: tip Nota
Debe tener al menos 1 grupo de captura. [Más información sobre los grupos regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-2.webp" />

### Mostrar las claves i18n {#see-i18n-keys}
Una vez creado el *Regex*, la sincronización de los resultados es en tiempo real.
1. Abra la ventana del escáner de código para observar sus resultados en tiempo real.

Si no se selecciona ninguna clave en el árbol, no se aplicará ningún filtro y el escáner mostrará todos los resultados.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-3.webp" />

En cambio, si selecciona una clave:
El sistema filtrará las claves padre y las claves vecinas no relacionadas.
Gracias a una propagación jerárquica, la selección de una carpeta implica la visualización de todas sus claves hijas.
Ejemplo:
Selección de la carpeta:
`A.B.C`
Todas las claves que contengan al menos este grupo también se mostrarán:
`A.B.C.d`
`A.B.C.d.e.f`

1. Para mostrar las claves capturadas que 'LSDE' no puede asociar (las claves que faltan), marque esta opción. También permite filtrar las claves existentes.

::: tip Nota
Si esta opción está desactivada, 'LSDE' muestra las claves que faltan encontradas en su código fuente, mezcladas con las claves existentes.
:::

---

## Probar su patrón {#test-pattern}
<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-5.webp" />

Para verificar que su patrón se comporta como se espera, abra la pestaña *Test*. Pegue allí código fuente de su proyecto para observar las capturas realizadas.

### Entender su Regex {#understand-regex}
Para entender su *Regex* y sus grupos, utilice una herramienta como [regexr](https://regexr.com).
1. Copie y pegue su *Regex* en el lugar dedicado.
```text
[^\\\\\\\\w_\\\\\\\\-\\\\\\\\$]t\\\\\\\\(\\\\\\\\s*(?:['\\\\\\])?(?:([^\\\\\\\\s:'\\\\\\)]+):)?([^\\\\\\\\s'\\\\\\),]+)(?:['\\\\\\])?\\\\\\\\s*(?:,\\\\\\\\s*(\\\\\\\\{[\\\\\\\\s\\\\\\\\S]*?(?:defaultValue\\\\\\\\s*:\\\\\\\\s*(['\\\\\\`])((?:\\\\\\\\\\\\\\\\.|(?!\\\\\\\\4)[\\\\\\\\s\\\\\\\\S])*?)\\\\\\\\4)[\\\\\\\\s\\\\\\\\S]*?\\\\\\\\}|\\\\\\\\{[\\\\\\\\s\\\\\\\\S]*?\\\\\\\\})\\\\\\\\s*)?\\\\\\\\)
```
2. Pegue código fuente de su proyecto que contenga las claves a capturar (procedentes de su framework o de su motor de texto).
3. Haga clic en una captura para activarla.
4. Seleccione luego 'Detalle'.
5. Identifique el índice del grupo en el que su *Regex* coloca la captura deseada.

Con esta *Regex*, comprobará que captura su clave en el grupo 2. Deberá entonces indicar a 'LSDE' que la clave se encuentra en este grupo, como se ilustra en la imagen anterior.
El sistema podrá luego ejecutar esta *Regex* y utilizar esta captura para diversos servicios de telemetría.
