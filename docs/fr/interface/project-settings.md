---
title: "Config Projet"
description: "La fenêtre de configuration du projet dans LSDE vous permet d'ajuster les paramètres spécifiques au projet actuellement ouvert."
section: interface
outline: [2, 3]
---

# Config Projet

La fenêtre de configuration du projet dans LSDE vous permet d'ajuster les paramètres spécifiques au projet actuellement ouvert.
Ces réglages sont organisés en plusieurs sections.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-prompt.webp" />

## Directive LLM {#llm-directive}
Cette section vous permet de créer des tâches personnalisées pour les LLM, adaptées à votre projet.
Bien que LSDE propose des tâches par défaut, vous pouvez définir les vôtres pour répondre précisément à vos besoins.
Vous aurez accès aux champs suivants :
1. **Nouveau prompt**
Ajoutez de nouveaux prompts au projet.
2. **Libellé et descriptions** :
- Renseignez le nom de la tâche (ce libellé peut influencer le LLM).
- Ajoutez une note explicative, visible uniquement par vous et non envoyée au LLM.
3. **Contenu du prompt** :
Rédigez ici la directive qui sera envoyée au LLM pour accomplir la tâche.
4. **Télémétrie** :
Affiche des informations sur le nombre de mots et une estimation du coût en tokens du prompt.
5. **Activation**
Activez ou désactivez la tâche à tout moment sans la supprimer.

::: tip Note
Notez que les LLM reçoivent toujours les directives de tâche avec un contexte et des règles prédéfinies. Les options pour affiner ces éléments sont présentées plus loin.
:::

---

## Les variables {#variables}
Le gestionnaire de variables est un système puissant conçu pour interagir avec les LLM, tout en optimisant votre productivité et en facilitant la traduction et la rédaction des dialogues.

### Pourquoi les utiliser ? {#why-use-variable}
- Elles sont particulièrement adaptées aux projets de jeux vidéo avec des exigences narratives complexes, comme les JRPG.
- Elles peuvent contenir de nombreuses informations pour afficher des infobulles personnalisées, mettre en évidence des mots-clés, et bien plus encore.
- Elles constituent une base essentielle pour optimiser votre flux de travail dans LSDE.

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-variable.webp" />

Pour créer une variable, commencez par sélectionner sa catégorie.

::: tip Note
Si aucune catégorie n'existe, vous devrez d'abord en créer une (par exemple : Acteurs, Objets, HTML, etc.).
:::

Une fois créée, la variable apparaît dans une liste sous forme de bloc dépliable. Dépliez-le pour accéder à son interface de configuration complète.

### L'interface {#interface}
1. **Groupe ou catégorie de variables**
Créez et sélectionnez un groupe de variables.

::: tip Note
Un clic droit sur un groupe permet de le supprimer, ainsi que toutes les variables qu'il contient.
:::
2. **Créer une variable**
Une fois un groupe sélectionné, utilisez ce bouton pour y créer une nouvelle variable.
3. **Éditer une variable**
Les variables sont affichées dans des conteneurs, avec des actions rapides en en-tête pour :
- Activer/désactiver la variable.
- La réorganiser par glisser-déposer.
- Lui donner un libellé (utilisé dans les infobulles et les options).
- Changer son groupe.
- La supprimer.
4. **Tags/Expressions régulières**
Entrez les mots-clés (tags) ou l'expression régulière (regex) qui permettront au système d'identifier cette variable.

::: tip Note
Par exemple, un motif de capture de texte s'appuiera sur ces tags ou cette regex pour trouver une correspondance.
:::
5. **Basculer en expression régulière**
Le mode par défaut utilise des mots-clés (tags). Activez ce mode pour utiliser une expression régulière, offrant plus de flexibilité et de dynamisme.

::: tip Note
Exemple : `/actor\d+/` évite d'avoir à définir manuellement les tags « actor1 », « actor2 », « actor11 », etc.
:::

### Descriptions {#descriptions}
6. **Note**
Rédigez une note pour l'utilisateur, qui sera affichée dans les infobulles mais non envoyée aux LLM.

::: tip Note
Évitez de décrire du contenu sensible si vous versionnez le projet, car ces notes sont sauvegardées dans les fichiers `.lsde`.
:::
7. **Descriptions**
Cette description fournit des directives au LLM lorsque la variable est incluse dans le contexte d'une requête.

::: tip Note
On peut y décrire la personnalité d'un personnage, des éléments du monde, ou encore des règles de mise en forme (Markdown, JSX, HTML...).
:::

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-variable-emoji.webp" />

### Apparence {#appearance}
Cette section permet d'associer des éléments visuels à la variable, facilitant sa reconnaissance dans l'interface pour les artistes, traducteurs et scénaristes.
8. **Icône de rendu**
Associez une icône (image ou emoji) qui représentera la variable dans les éditeurs et les menus.
9. **Image d'infobulle**
Ajoutez une image plus grande, affichée dans les infobulles pour fournir un meilleur contexte visuel à l'utilisateur.

::: tip Note
Les images sont automatiquement compressées et sauvegardées avec le projet pour en faciliter le partage.
:::
10. **Colorimétrie**
Définissez une couleur de texte et d'arrière-plan. Ces couleurs auront la priorité si la variable est associée à un motif ou à un autre élément visuel.

### Informations additionnelles {#additional-info}
Cette section regroupe des options de design supplémentaires pour les infobulles, ainsi que des paramètres de couplage avec les déclencheurs de suggestions.
11. **Décorations**
Ajoutez des informations optionnelles qui seront affichées dans la section de décoration de l'infobulle.
12. **Lien externe**
Insérez un lien externe dans l'infobulle, qui s'ouvrira dans votre navigateur par défaut.
13. **Libellé vocal**
Redéfinissez le nom de la variable lorsqu'elle est associée à une voix. Par défaut, son libellé est utilisé, sinon son UUID.
14. **Associer aux suggestions**
Permet d'inclure la variable dans les déclencheurs de suggestions lors de la saisie.

::: tip Note
Ce sont les tags de la variable qui seront utilisés comme suggestions.
:::
15. **Télémétrie**
Affiche des statistiques sur l'utilisation de la variable dans le projet.

---

## Motifs {#patterns}
<DocImage src="/doc/lsde/doc-lsde-ui-psetting-pattern.webp" />

Les motifs permettent à LSDE de capturer des portions de texte spécifiques dans les dialogues. En s'appuyant sur des expressions régulières, ce système offre une grande flexibilité pour la mise en forme et le traitement de vos dialogues.
[Apprenez-en plus sur les motifs et le rendu ici](/fr/features/rendering)

### L'interface {#interface-2}
1. **Créer un motif/modèle**
Créez un nouveau motif, soit à partir d'un modèle prédéfini, soit en partant de zéro.
2. **Référence interne**
Définissez un motif pour faire référence à d'autres clés du projet (mécanisme de « nesting »), si votre moteur de jeu ou votre framework le prend en charge.
Par exemple, si vous utilisez [le « nesting » d'i18next](https://www.i18next.com/translation-function/nesting).
3. **Expression régulière**
Saisissez votre expression régulière. Il n'est pas nécessaire d'échapper les accolades `{}`.
4. **Ajouter des décorateurs**
Ajoutez des décorateurs supplémentaires en plus de la capture initiale, puis associez-les aux groupes de capture de votre expression régulière.
5. **Décorateur initial**
Le décorateur initial définit le rendu du texte capturé par l'expression régulière dans l'éditeur.

::: tip Note
Les décorateurs initiaux sont obligatoirement de type « inline » et ne peuvent pas être des « widgets ».
:::
6. **Groupe et type**
Assignez le groupe de capture et le type de rendu souhaité pour les décorateurs additionnels.
[Plus de détails ici](/fr/features/rendering#what-is-decorator)

---

## Contextes {#contexts}
<DocImage src="/doc/lsde/doc-lsde-ui-psetting-context.webp" />

Cette section permet de définir des règles pour gérer différents contextes, comme les pluriels ou les genres.

Un contexte est identifié par un suffixe ajouté à la fin de la clé (ex: `key_plural`). LSDE gère ces variantes de manière à ce que vous puissiez les intégrer progressivement à votre projet, sans avoir à modifier le code source existant.

Vous pouvez ainsi prendre en charge les contextes uniquement lorsque c'est nécessaire, sans altérer votre projet.

### L'interface {#interface-3}
1. **Étiquetage**
Définissez l'ID, le libellé et le séparateur du contexte.
Par exemple, pour gérer les pluriels avec i18next :
`name_space.folder.key_context`
deviendrait :
`game.common.welcome-to-my-shop_one`
`game.common.welcome-to-my-shop_many`
`game.common.welcome-to-my-shop_other`
Plus d'informations sur [les pluriels i18n avec i18next](https://www.i18next.com/translation-function/plurals)
2. **Tags**
Définissez les suffixes (tags) qui seront utilisés pour identifier chaque variante du contexte.
3. **Description (LLM)**
Rédigez ici la description qui sera envoyée au LLM lorsqu'il traitera une clé utilisant ce contexte.
4. **Délimiteur**
Choisissez le caractère utilisé comme délimiteur de contexte.

::: tip Note
Les points ne sont pas autorisés.
:::

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-codeview.webp" />

## Codeview {#codeview}
Cette section sert à configurer le module d'analyse de votre code source (codebase). Ce module scanne vos fichiers pour en extraire automatiquement les clés de traduction, leurs contextes et leurs valeurs par défaut.
Pour être valide, une expression régulière doit contenir au moins un groupe de capture assigné à la clé.
Consultez la [section avancée ici](/fr/features/scanning).

### L'interface {#interface-4}
1. **Chemin du codebase de votre projet**
Indiquez le chemin vers le dossier racine de votre projet, contenant les fichiers source qui utilisent les clés de traduction.
2. **Exclusions**
Spécifiez les dossiers et fichiers à exclure de l'analyse afin d'optimiser les performances.

::: tip Note
Séparez les entrées par des virgules. Utilisez des noms de dossiers ou des noms de fichiers complets (avec extension).
:::

### Motif {#pattern}
Gérez ici la liste de vos motifs de capture, présentés dans des blocs dépliables.
3. **Note/Libellé**
Un libellé ou une note pour identifier facilement le motif et son rôle.
4. **Expression régulière**
Insérez ou modifiez votre expression régulière. Le nombre de groupes de capture détectés est affiché en dessous.
5. **Espace de noms**
Associez le groupe de capture qui correspond à l'espace de noms (namespace) de vos clés (optionnel).

::: tip Note
Suggère automatiquement le bon espace de noms lors de la création de clés.
:::
6. **Clé**
Associez le groupe de capture qui correspond à la clé elle-même (sans l'espace de noms).

::: tip Note
Les clés ne doivent pas contenir d'espace de noms ; utilisez le champ dédié à cet effet.
:::
7. **Texte par défaut**
Associez le groupe de capture qui correspond au texte par défaut.

::: tip Note
Dans les projets logiciels, les développeurs insèrent souvent un texte par défaut pour un aperçu rapide de l'UI/UX.
:::
8. **Contexte**
Associez le groupe de capture qui correspond au contexte (ex: pluriel).

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-codeview-templates.webp" left />

### Modèles {#templates}
Lors de la création d'un motif, vous pouvez choisir parmi des modèles prédéfinis.
Ils servent de point de départ pour vous éviter de rédiger une expression régulière de zéro ou pour vous aider à la construire.

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-generator.webp" />

## Générateur {#generator}
Cette section permet de configurer la génération automatique d'un fichier contenant vos clés, dans un format adapté à votre projet.
C'est utile, par exemple, pour créer un `enum` TypeScript à partir de vos clés.

1. Nom de la classe qui exportera les clés.
2. Nom du fichier généré.
3. Dossier de destination pour le fichier exporté.
4. Langue des commentaires JSDOC générés.
5. Longueur maximale des commentaires JSDOC.
6. Caractère de remplacement pour les points (`.`).

::: tip Note
En JS/TS, les points ne sont pas autorisés dans les noms de clés ; le convertisseur créera automatiquement des littéraux de chaîne comme clés.
:::
7. Inclure l'espace de noms dans les clés générées.
8. Inclure les clés contextuelles (avec suffixes).

::: tip Note
Il n'est généralement pas nécessaire d'inclure ces clés, leur gestion étant assurée par votre framework d'internationalisation.
:::

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-voice.webp" />

## Voix {#voices}
La section Voix permet de configurer le générateur de voix pour vos dialogues.
S'appuyant sur les avancées des technologies LLM et TTS (Text-to-Speech), cette fonctionnalité permet de créer des voix synthétiques en contrôlant la tonalité, l'intonation et l'émotion.
Ces voix peuvent ensuite être intégrées à votre moteur de jeu, offrant une narration audio immersive à une fraction du coût d'un enregistrement en studio traditionnel.

::: tip Note
Bien que cette technologie soit encore en évolution, elle offre aux créateurs indépendants une formidable opportunité de se démarquer et de renforcer l'immersion narrative de leur œuvre.
:::

Une [section dédiée sur l'intégration des voix dans votre projet est disponible ici](/fr/features/voice).

---

<DocImage src="/doc/lsde/doc-lsde-ui-psetting-suggestion.webp" />

## Suggestions {#suggestion}
Cette section permet de configurer l'affichage du menu de suggestions.
Lorsqu'une combinaison de touches (un déclencheur) est saisie dans l'éditeur, un menu contextuel apparaît. Il peut proposer des variables (basées sur leurs tags) ou des clés de traduction (si le déclencheur est associé aux références internes).

1. **Suggestions des clés**
Définissez le déclencheur pour afficher toutes les clés du projet.

::: tip Note
Utile pour les projets utilisant des dictionnaires internes et des références croisées.
:::
2. **Conditions**
Choisissez une touche de modification (ex: Ctrl, Alt) pour le déclencheur (optionnel).
3. **Lettre**
Spécifiez la lettre ou le symbole qui, combiné à la touche de modification, activera les suggestions.
4. **Libellé**
Un nom pour identifier facilement ce déclencheur dans l'interface.
5. **Affixes**
- **Préfixe** : Contenu à ajouter avant la sélection de l'utilisateur.
- **Suffixe** : Contenu à ajouter après la sélection de l'utilisateur.
