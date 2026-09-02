---
title: "Bonnes pratiques"
description: "Ex : pour une balise <h2/> avec un ancre"
section: resources
outline: [2, 3]
---

# Bonnes pratiques

## Pour le WEB {#for-web}
- Utiliser des patterns Markdown améliore la lisibilité et facilite la maintenance, tant pour le traducteur que pour vos scripts de site web qui en extrairont le contenu.
- Pour les ancres nommées dans un site multilingue, une approche intéressante consiste à "hard-coder" les liens avec un design Markdown.
Ex : pour une balise `<h2/>` avec un ancre

## label-dans-la-langue-courante {#static-anchor-id}
Les LLM sont plus efficaces que les humains pour protéger les liens, et LSDE vous permet de détecter les problèmes entre les différentes versions de langues.
Ainsi, vous pouvez partager un lien qui fonctionnera dans toutes les langues et utiliser LSDE pour gérer le remplacement d'une ancre dépréciée.

---

## Ambiguïté du code {#code-anti-pattern}
Évitez l'ambiguïté lorsque vous travaillez avec des modèles orientés données.
Exemple :
**Mauvaise pratique :** Le terme 'key' n'est pas explicite et rend sa recherche difficile.

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

**Bonne pratique :** Adoptez une convention unique et cohérente.
Le terme 'i18nKey' est très explicite et permet une recherche précise de cette valeur via des expressions régulières ('Regex').
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

## La paresse {#lazyness}
::: tip Note
Les mauvaises idées naissent de la paresse.
:::

N'essayez pas d'économiser des clés en effectuant des opérations pour récupérer du contenu.
Exemple :
```text
const [title, subtitle] = t( 'game:game.title' ).split( /[:：]/ );
```
C'est une fausse bonne idée, car dans certaines langues, les caractères peuvent varier et l'ordre des mots peut changer.

---

## Format des balises {#balise-format}
Minimisez le code lié au design directement dans le texte, afin de pouvoir le contrôler depuis le codebase.
Par exemple, vous pouvez indiquer l'emplacement d'une image, mais pas son style ni la façon dont elle doit être rendue.
Si vous devez effectuer des modifications de design, vous ne voulez pas être obligé de retraduire le texte en 10 langues juste pour changer le style d'une balise !

Les balises peuvent inclure un identifiant, mais ajouter des informations supplémentaires est généralement fortement déconseillé et constitue une mauvaise pratique.
Exemple : Ne faites pas
`<img src='url' left />`
mais plutôt
`<img id=1 />`
Vous récupérerez ensuite l'identifiant de la balise image pour lui appliquer les styles nécessaires dans le codebase.
Les identifiants doivent être utilisés littéralement et non via leur index.
En effet, dans différentes langues, les balises pourraient être déplacées et ne plus correspondre à l'index initial.
Utiliser des index naturels ajoute également de la complexité pour le développeur ; essayer de deviner à quel index l'image ou la balise correspond est un vrai casse-tête.
Utilisez donc des balises avec un identifiant lorsque vous souhaitez pouvoir les personnaliser après interpolation.

---

## CSS {#css}
Pour la traduction de sites web, lorsque vous avez des paragraphes, optez pour une hauteur minimale (`min-height`) après traduction pour éviter les décalages visuels lors des changements de langue.
Ex : `mih={'3lh'}`
Cela vous permet de définir une hauteur minimale basée sur la langue qui occupe le plus de lignes, assurant ainsi une expérience utilisateur (UX) cohérente et soignée.

## Namespace {#namespace}
- Incluez toujours des 'namespaces' dans vos clés de traduction, même si vous n'en avez qu'un seul.
Cela facilite grandement la mise en place d'un pattern Regex pour trouver vos clés.
Ex : `game:a.b.c`, `common:a.b.c`

---

## Contrôle de version GIT {#git}
Les projets `.lsde` sont des fichiers au format `JSON`, ce qui rend leur versionnage facile avec des outils comme Git.
Il est fortement recommandé de sauvegarder votre projet dans un dépôt Git pour bénéficier d'un historique complet et d'une sécurité accrue.
Bien que LSDE inclue son propre système de sauvegarde, utiliser Git reste la solution optimale pour gérer vos fichiers de données.

---

## Contexte et rédaction {#content-writing}
- **Fournissez un contexte clair pour chaque clé**
Un contexte explicite peut résider dans le nom de la clé, son chemin d'accès (hiérarchie), son voisinage (clés parent/enfant) ou ses métadonnées.
Évitez les clés ambigües qui laissent place à la spéculation. Si la lecture d'une clé nécessite de vérifier son utilisation dans le code, alors votre architecture de données doit être améliorée.

**Exemples de clés explicites :**
`game:.scenes.001.events.001.1`
`game:.scenes.001.events.001.2`
`game:.scenes.the-ice-land.events.the-lost-house.1`
`game:.scenes.the-ice-land.events.the-lost-house.2`
`game:.ui.menus.new-game.label`
`game:.ui.menus.new-game.description`

Ces clés indiquent immédiatement qu'elles pointent vers des dialogues ou des éléments d'interface.
- Les deux premières utilisent des identifiants numériques (IDs) : une approche efficace pour les jeux d'action où la direction artistique (DA) est flexible et peut évoluer sans impacter la structure technique.
- Les deux suivantes utilisent des IDs sémantiques : essentiels pour les jeux narratifs où le contenu est étroitement lié au code. Cela évite de fausser le couplage entre la narration et la logique du jeu.
- Les deux dernières décrivent clairement des éléments de menu (label et description).

**Exemples de mauvaises pratiques :**
`game:events.001.1` (Trop vague : où cet événement est-il utilisé ?)
`game:.scenes-events-the-lost-house.1` (Redondance dans le chemin)
`game:.ui-menus.new-game-label` (Concaténation inutile)

Évitez la redondance dans les chemins. Si vous devez faciliter la recherche, exportez un fichier de types contenant les clés concaténées plutôt que de dégrader votre structure de données JSON.

- **Évitez toute dépendance au contexte implicite**
Une chaîne de caractères ne doit jamais dépendre d'un élément externe pour être comprise (position à l'écran, couleur, icône).
Ex : évitez
`"Cliquez ici pour continuer"`
Préférez
`"Continuer vers le paiement"`
Le texte doit rester compréhensible même lorsqu'il est extrait de son interface utilisateur (UI).
Certaines langues peuvent ne pas avoir de traduction possible ou avoir des formulations différentes selon l'action et l'emplacement du texte.

::: tip Note
Les textes d'action doivent décrire l'action et l'objet : "Accéder au paiement", "Télécharger le rapport PDF" et non "Cliquez ici" ou "En savoir plus" sans précision.
:::

- **Évitez les phrases segmentées et la modularité excessive**
Ne transposez pas les principes de programmation (comme S.O.L.I.D.) à la rédaction de contenu i18n. L'écriture et le code sont des disciplines différentes.
Privilégiez les phrases complètes plutôt que les fragments, car chaque langue a sa propre syntaxe.
Bien que des frameworks comme `i18next` supportent l'imbrication, cela génère souvent une complexité inutile. Si une variation est nécessaire, réécrivez la phrase dans son intégralité. Limitez l'interpolation à des variables simples comme des noms ou des nombres.

- **Indiquez les contraintes d'affichage (UI)**
Si l'interface impose une limite de caractères ou une contrainte de longueur, précisez-la dans les métadonnées et fournissez un visuel (capture d'écran ou maquette).
Il est plus facile pour un traducteur d'adapter son texte à une interface restrictive que pour un programmeur de rendre l'UI dynamique pour chaque langue au monde. Déléguer cette gestion au rédacteur assure une meilleure expérience utilisateur (UX).

- **Interdiction des emojis non contrôlés**
N'insérez pas de caractères spéciaux ou d'emojis directement dans vos textes.
Utilisez des variables (ex : `{{emoji_heart}}`) pour contrôler leur rendu via le code. Le rendu des emojis varie considérablement selon le système d'exploitation et l'environnement de l'utilisateur.

- **Évitez les métaphores culturelles**
Les expressions idiomatiques, jeux de mots et métaphores locales doivent être évités dans les chaînes génériques.
Ce qui est clair dans une langue peut devenir absurde ou intraduisible dans une autre.

- **Supposez que le traducteur ne peut pas voir l'application**
Écrivez comme si le traducteur n'avait accès ni au code ni à l'UI.
Tout ce qui est nécessaire à la compréhension doit être présent dans la clé, sa hiérarchie ou ses métadonnées.

---

## Technique I18n {#i18n-technical}
- **Espaces réservés nommés et explicites**
Préférez les espaces réservés nommés (`{username}`, `{count}`) aux indices positionnels (`{0}`, `{1}`). LSDE offre une section dédiée aux variables pour définir leur contexte et assurer leur traçabilité au sein de votre projet.

- **Un espace réservé par concept**
Chaque espace réservé doit être atomique et représenter une seule donnée (nom, date, nombre). Évitez les variables génériques ou polymorphes qui compliquent la traduction et l'interprétation.

- **Compatibilité RTL (droite-à-gauche)**
Anticipez l'affichage pour les langues écrites de droite à gauche. Le rendu doit rester fluide et structurellement correct sans nécessiter de modifications manuelles de la chaîne de caractères.

- **Interdiction de la concaténation**
Ne composez jamais une phrase en combinant plusieurs clés de traduction. Pour respecter la syntaxe et les accords grammaticaux propres à chaque langue, chaque phrase complète doit correspondre à une clé unique.
