---
title: "Rendering"
description: "LSDE offre un moteur de rendu de texte très avancé qui permet de personnaliser en temps réel le rendu de segments de texte."
section: features
outline: [2, 3]
---

# Rendering

<DocImage src="/doc/lsde/doc-lsde-features-howtorendering-0-animate.webm" />

## Qu'est-ce que le rendu de texte ? {#what-is-text-rendering}
LSDE offre un moteur de rendu de texte très avancé qui permet de personnaliser en temps réel le rendu de segments de texte.

### À qui est-ce utile ? {#who-is-it-for}
Généralement, cette fonctionnalité est principalement requise par les développeurs de jeux, car le web et les logiciels exigent habituellement moins de complexité narrative.
Prenons par exemple un jeu JRPG où un moteur de dialogue doit capturer tous les groupes de paramètres comme `{{number:number:number}}`.
Ces index sont ensuite utilisés pour retrouver l'ID du personnage qui doit parler, l'expression animée que le personnage doit exécuter pour cette ligne et, éventuellement, l'intensité de ses émotions.

Pour un développeur, cela ne pose aucun problème de lisibilité. Cependant, pour un traducteur ou un compositeur, exiger une consultation constante de la documentation pour vérifier le respect des codes du moteur et de la personnalité de chaque personnage risquerait de créer un ressentiment important, voire de faire de lui un ennemi à vie.

Dans un studio professionnel, un tel département nécessite une équipe dédiée et coûte plusieurs millions, ce qui n'est pas réaliste pour un studio indépendant, qu'il soit en solo ou avec une petite équipe.

### Solution {#solution}
Le rendu de texte offre donc une solution très puissante qui permet de vérifier à tout moment que les termes protégés destinés au moteur sont bien présents. Il permet également au traducteur, au compositeur, ainsi qu'aux outils LLM de bénéficier de ces informations pour garantir la qualité de la narration et des traductions.

Ce n'est plus le personnage `{{3:4:2}}` qui parle, mais bien `{{LIA:HAPPY:2}}`, avec une référence à sa fiche en cas de besoin et la visualisation de toutes ces interactions, ce qui facilite grandement la composition et les traductions.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-1.webp" />

## Créer un pattern {#create-pattern}
Rendez-vous dans [la configuration des patterns](/fr/interface/project-settings#patterns).
Créez-y un nouveau pattern vierge.
1. Vous pourrez renseigner votre pattern dans cette section.
`(xxxxxxx)(xx)(xxxxxxx)`
Dans cet exemple, notre pattern se composera de 3 groupes.
LSDE se chargera de détecter automatiquement les groupes de captures pour vous permettre de les renseigner.

Le groupe 0 représente la capture complète elle-même et sera toujours présent. Vous pouvez vous contenter de configurer simplement la capture principale, ce qui est généralement suffisant pour la majorité des cas.

Cependant, si vous souhaitez exploiter les 3 autres groupes que vous avez ajoutés à votre Regex, vous pouvez créer des décorateurs supplémentaires.
### Qu'est-ce qu'un décorateur ? {#what-is-decorator}
Un décorateur est, comme son nom l'indique, une 'décoration' qui, une fois assignée à un groupe, va embellir le texte capturé et améliorer son rendu visuel.
C'est un système expérimental, et il existe actuellement quelques règles à suivre :
- Vous ne pouvez pas assigner plusieurs décorations au même groupe au sein du même pattern.
- Les décorateurs peuvent nuire plutôt qu'améliorer la lecture s'ils sont mal utilisés.
- Les décorateurs de type 'Widget' ne s'affichent que sur les fenêtres actives.
- Évitez les patterns Regex trop complexes avec des conditionnelles et des 'lookbehind' qui peuvent nuire aux performances du défilement dans l'éditeur.

Lorsque vous créez un décorateur, vous pouvez le configurer avec différents comportements.
2. C'est à cet endroit que vous assignez le groupe de capture au décorateur. Nous lui assignerons ici les groupes de capture 1, 2 et 3.
3. Vous pouvez choisir le type de décorateur, par exemple 'Widget'.
4. Et nous pouvons indiquer que chaque capture sera associée à une catégorie de variables.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-2.webp" />

## Tester son pattern {#test-pattern}
Rendez-vous sur [regexr](https://regexr.com) pour tester et mieux comprendre votre Regex.
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```

1. Si nous sélectionnons la première capture,
2. et que nous affichons les détails complets,
3. nous pouvons observer les détails de capture suivants :
Le groupe 0 est la capture complète elle-même.
Pour les groupes 1, 2 et 3, nous avons bien 'a2', 'e1' et '1' capturés.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-3.webp" />

## Lier une variable {#link-variable}
Nous pouvons faire davantage avec ces captures en les faisant correspondre à quelque chose, ou plutôt à quelqu'un, dans notre exemple.
Dans notre moteur fictif, 'a1', 'a2', 'a3'... correspondront à des personnages dans notre jeu.

1. Activez l'option 'variable' dans votre pattern.
2. Nous allons configurer le groupe de capture destiné à identifier nos variables via des tags. Ici, nous souhaitons que LSDE recherche les variables du groupe "ACTORS".

::: tip Note
Pourquoi ne pas chercher dans toutes les variables plutôt que dans un seul groupe ? Pour des raisons de maintenabilité de votre projet et de performances.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-4.webp" />

## Personnaliser la variable {#customize-variable}
Avant d'assigner une décoration à une variable, celle-ci doit déjà exister.
Rendez-vous dans [la section des variables](/fr/interface/project-settings#les-variables).
Vous devrez y créer une nouvelle catégorie ainsi qu'une variable.
1. Créez une catégorie nommée 'ACTORS' et ajoutez-y une nouvelle variable.
2. C'est ensuite dans le champ 'Tags' que nous pourrons ajouter des mots-clés qui seront recherchés par les captures des patterns et d'autres systèmes.
Ajoutez par exemple "a1", qui correspondrait à l'ID fictif de notre personnage dans notre moteur de jeu fictif.
3. Vous pouvez ensuite lui assigner une apparence de rendu dans l'éditeur de texte, ainsi qu'une apparence spécifique pour les info-bulles.

Ensuite, vous pourrez profiter du rendu "Widget" de cette variable directement dans votre éditeur de texte.
Et par un simple clic, vous pourrez également afficher une info-bulle qui présentera les informations configurées pour la variable.

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-5.webp" />

::: tip Note
Un clic affichera la décoration sans le widget.
:::

---
