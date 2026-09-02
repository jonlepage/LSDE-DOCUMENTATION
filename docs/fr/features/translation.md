---
title: "Traduction"
description: "LSDE propose des outils puissants pour nous permettre de traduire dans toutes les langues du monde."
section: features
outline: [2, 3]
---

# Traduction

## Comment traduire {#how-to-translate}
::: tip Note
LSDE propose des outils puissants pour nous permettre de traduire dans toutes les langues du monde.
:::
Les LLM (*Large Language Models*) sont des architectures mathématiques conçues par l'homme qui excellent dans la traduction, à condition de leur fournir le contexte approprié.
LS Dialog Editor fournit par défaut un contexte à chaque requête adressée à un LLM, ce qui garantit des résultats plus pertinents.

::: warning Attention
Bien que les résultats soient satisfaisants et puissent considérablement réduire les coûts de production, il reste indispensable de faire appel à un studio professionnel pour la vérification finale.
:::

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-1.webp" />

Pour traduire un dialogue avec LSDE, commençons par ajouter les langues prises en charge dans notre projet via le gestionnaire de langues.

1. Ouvrez la fenêtre de [configuration des localisations i18n](/fr/interface/localization-manager#patterns).
2. Ajoutez des langues à votre projet via le bouton indiqué.
3. Sélectionnez les langues souhaitées ainsi que la langue principale du projet.
Les choix proposés sont au format `ISO 639-1` et `ISO 3166-1`.

Une fois les langues ajoutées, assurez-vous de définir correctement la langue principale du projet. Cette étape est essentielle pour débloquer la majorité des actions du logiciel.

::: tip Note
Bien que la langue principale soit idéalement définitive, il est possible de la modifier à tout moment.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-2.webp" left />

1. Sélectionnez ensuite une clé dans l'arborescence. Cette sélection affichera tous les dialogues associés dans la fenêtre principale de l'éditeur.
2. Vous pouvez ensuite filtrer les langues sur lesquelles vous souhaitez travailler.

::: tip Note
Un clic droit permet de basculer rapidement entre l'affichage de toutes les langues ou uniquement de la langue principale.
:::

---

## Traduire grâce aux LLM {#translate-with-llm}
<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-3.webp" />

1. Cliquez d'abord sur un dialogue dans l'éditeur pour activer son édition.
Une icône apparaîtra, permettant de gérer la tâche souhaitée via un menu.

Par défaut, LS Dialog Editor propose des tâches déjà configurées.
Dans ce cas précis, nous utiliserons la tâche *Traduire*.

::: tip Note
Les tâches disponibles peuvent être reconfigurées dans les paramètres globaux si nécessaire.
:::
2. Sélectionnons la tâche de traduction.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-4.webp" />

Une fenêtre de configuration s'ouvre pour ajuster les détails de la tâche :
1. Possibilité d'activer ou de désactiver certains filtres avant le lancement.
2. Ajustement de la profondeur d'itération (si le traitement porte sur un dossier).
3. Affichage/masquage des clés ignorées selon les paramètres actuels.
4. Activation/désactivation manuelle des instances à inclure si les paramètres automatiques ne suffisent pas.
5. Ajout de directives supplémentaires pour guider le LLM.

::: tip Note
Utilisez les flèches haut/bas du clavier pour naviguer dans votre historique global.
:::

Une fois les réglages effectués, cliquez sur *Confirmer* (en bas à droite).

::: tip Note
Dès qu'une tâche est créée, elle est transmise au système de traitement automatique. Ce dernier s'active dès l'ouverture d'un projet pour reprendre les tâches en cours.
:::

---

Toutes les instances assignées à la tâche basculent en mode comparaison, permettant de visualiser le texte d'origine à gauche et la réponse à droite.

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-5.webp" left />

1. Ce bouton affiche le nombre de lettres ajoutées par rapport au texte original.

::: tip Note
Il permet aussi d'afficher ou masquer les tokens ajoutés.
:::
2. Ce bouton affiche le nombre de lettres retirées.

::: tip Note
Il permet aussi d'afficher ou masquer les tokens supprimés.
:::
3. Ce bouton affiche l'état global final (solde de caractères positif ou négatif).

::: tip Note
Il permet aussi de basculer vers le rendu final si vous annulez des changements en cliquant sur les portions de texte concernées.
:::
4. Rendu des modifications : vous pouvez cliquer sur chaque balise pour annuler un changement indésirable.
5. Vous pouvez itérer autant de fois que nécessaire en envoyant des directives supplémentaires au LLM.

::: warning Attention
selon le modèle utilisé, la mise en cache n'est pas systématique, ce qui peut augmenter les coûts de façon exponentielle, car l'intégralité de l'historique est renvoyée à chaque itération.
:::
6. Télémétrie : affiche les coûts en tokens retournés par le prestataire LLM.
7. Boutons pour accepter ou refuser les changements une fois l'affinement terminé.
8. *Experimental* : permet d'ajouter des corrections automatiques selon certains scénarios (ex: si le LLM ne renvoie pas le texte original lors d'une suite de discussion).
9. Navigation dans l'historique des changements pour revenir à une version précédente.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtotranslate-6.webp" />

Une fois le résultat satisfaisant, validez-le et ajustez manuellement les derniers détails si nécessaire.

---
