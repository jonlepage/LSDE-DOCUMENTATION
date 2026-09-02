---
title: "Good Practice"
description: "LLMs are more efficient than humans at protecting links, and LSDE allows you to detect issues between different language versions."
section: resources
outline: [2, 3]
---

# Good Practice

## For the WEB {#for-web}
- Using Markdown patterns improves readability and facilitates maintenance, both for the translator and for your website scripts that will extract content from it.
- For named anchors in a multilingual site, an interesting approach is to "hard-code" links with a Markdown design.
Ex: for an `<h2/>` tag with an anchor

## label-in-current-language {#static-anchor-id}
LLMs are more efficient than humans at protecting links, and LSDE allows you to detect issues between different language versions.
Thus, you can share a link that will work in all languages and use LSDE to manage the replacement of a deprecated anchor.

---

## Code Ambiguity {#code-anti-pattern}
Avoid ambiguity when working with data-oriented models.
Example:
**Bad practice:** The term 'key' is not explicit and makes searching for it difficult.

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

**Good practice:** Adopt a unique and consistent convention.
The term 'i18nKey' is very explicit and allows for precise searching of this value via regular expressions ('Regex').
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

## Laziness {#lazyness}
::: tip Note
Bad ideas are born out of laziness.
:::

Do not try to save keys by performing operations to retrieve content.
Example:
```text
const [title, subtitle] = t( 'game:game.title' ).split( /[:：]/ );
```
This is a false good idea, because in some languages, characters can vary, and word order can change.

---

## Tag Format {#balise-format}
Minimize design-related code directly within the text, so you can control it from the codebase.
For example, you can indicate an image's location, but not its style or how it should be rendered.
If you need to make design changes, you don't want to be forced to retranslate text into 10 languages just to change a tag's style!

Tags can include an identifier, but adding extra information is generally strongly discouraged and constitutes a bad practice.
Example: Do not do
`<img src='url' left />`
but rather
`<img id=1 />`
You will then retrieve the image tag's ID to apply the necessary styles to it in the codebase.
IDs should be used literally and not via their index.
Indeed, in different languages, tags could be moved and no longer correspond to the initial index.
Using natural indexes also introduces complexity for the developer; trying to guess which index the image or tag corresponds to is a real headache.
Therefore, use tags with an identifier when you want to be able to customize them after interpolation.

---

## CSS {#css}
For website translation, when you have paragraphs, opt for a minimum height (`min-height`) after translation to avoid visual shifts during language changes.
Ex: `mih={'3lh'}`
This allows you to define a minimum height based on the language that occupies the most lines, thus ensuring a consistent and clean user experience (UX).

## Namespace {#namespace}
- Always include 'namespaces' in your translation keys, even if you only have one.
This greatly facilitates setting up a Regex pattern to find your keys.
Ex: `game:a.b.c`, `common:a.b.c`

---

## GIT Version Control {#git}
`.lsde` projects are `JSON` format files, which makes versioning them easy with tools like Git. 
It is highly recommended to save your project within a Git repository to benefit from a full history and increased security. 
Although LSDE includes its own backup system, using Git remains the optimal solution for managing your data files.

---

## Context & Writing {#content-writing}
- **Provide clear context for each key**
Explicit context can reside in the key name, its access path (hierarchy), its neighborhood (parent/child keys), or its metadata. 
Avoid ambiguous keys that leave room for speculation. If reading a key requires checking its use in the code, then your data architecture needs improvement.

**Examples of explicit keys:**
`game:.scenes.001.events.001.1`
`game:.scenes.001.events.001.2`
`game:.scenes.the-ice-land.events.the-lost-house.1`
`game:.scenes.the-ice-land.events.the-lost-house.2`
`game:.ui.menus.new-game.label`
`game:.ui.menus.new-game.description`

These keys make it immediately clear that they point to dialogues or interface elements.
- The first two use numeric identifiers (IDs): an effective approach for action games where art direction (AD) is flexible and can evolve without impacting the technical structure.
- The next two use semantic IDs: essential for narrative games where content is closely linked to the code. This avoids distorting the coupling between narration and game logic.
- The last two clearly describe menu elements (label and description).

**Examples of bad practices:**
`game:events.001.1` (Too vague: where is this event used?)
`game:.scenes-events-the-lost-house.1` (Redundancy in the path)
`game:.ui-menus.new-game-label` (Unnecessary concatenation)

Avoid redundancy in paths. If you need to make searching easier, export a types file containing the concatenated keys instead of degrading your JSON data structure.

- **Avoid any dependence on implicit context**
A string should never depend on an external element to be understood (screen position, color, icon).  
Ex.: avoid
`"Click here to continue"` 
Prefer  
`"Continue to payment"`  
The text must remain understandable even when extracted from its user interface (UI).
Some languages may not have a possible translation or may have different formulations depending on the action and location of the text.

::: tip Note
Action texts should describe the action and the object: "Go to payment", "Download PDF report" and not "Click here" or "Learn more" without clarification.
:::

- **Avoid segmented sentences and excessive modularity**
Do not transpose programming principles (like S.O.L.I.D.) to i18n content writing. Writing and coding are different disciplines. 
Prioritize complete sentences rather than fragments, as each language has its own syntax. 
Although frameworks like `i18next` support nesting, it often generates unnecessary complexity. If a variation is necessary, rewrite the sentence in its entirety. Limit interpolation to simple variables like names or numbers.

- **Indicate display constraints (UI)**
If the interface imposes a character limit or length constraint, specify it in the metadata and provide a visual (screenshot or mockup). 
It is easier for a translator to adapt their text to a restrictive interface than for a programmer to make the UI dynamic for every language in the world. Delegating this management to the writer ensures a better user experience (UX).

- **Prohibition of uncontrolled emojis**
Do not insert special characters or emojis directly into your texts. 
Use variables (ex.: `{{emoji_heart}}`) to control their rendering via code. Emoji rendering varies considerably depending on the user's operating system and environment.

- **Avoid cultural metaphors**
Idiomatic expressions, puns, and local metaphors should be avoided in generic strings.  
What is clear in one language can become absurd or untranslatable in another.

- **Assume the translator cannot see the application**
Write as if the translator has access to neither the code nor the UI.  
Everything necessary for understanding must be present in the key, its hierarchy, or its metadata.

---

## I18n Technique {#i18n-technical}
- **Named and Explicit Placeholders**
Prefer named placeholders (`{username}`, `{count}`) over positional indices (`{0}`, `{1}`). LSDE offers a dedicated section for variables to define their context and ensure their traceability within your project.

- **One Placeholder per Concept**
Each placeholder must be atomic and represent a single piece of data (name, date, number). Avoid generic or polymorphic variables that complicate translation and interpretation.

- **RTL (Right-to-Left) Compatibility**
Anticipate display for languages written from right to left. The rendering must remain fluid and structurally correct without requiring manual modifications to the character string.

- **Ban on Concatenation**
Never compose a sentence by combining multiple translation keys. To respect the syntax and grammatical agreements specific to each language, every complete sentence must correspond to a unique key.
