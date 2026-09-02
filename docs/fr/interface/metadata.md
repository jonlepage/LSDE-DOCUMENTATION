---
title: "Métadonnées"
description: "La fenêtre des Métadonnées permet d'ajouter des informations supplémentaires à une clé, distribuables à cette clé et à ses enfants."
section: interface
outline: [2, 3]
---

# Métadonnées

La fenêtre des Métadonnées permet d'ajouter des informations supplémentaires à une clé, distribuables à cette clé et à ses enfants.

## Pourquoi utiliser les métadonnées ? {#why-use-metas}
Lors de l'exécution des tâches, ces informations sont intégrées aux requêtes des LLM.
Les informations renseignées peuvent également consultables à tout moment dans le visualisateur de métadonnées.
La vue est récursive, du haut vers le bas, de la clé active jusqu'à la racine de l'espace de noms du projet.

::: tip Note
Votre projet source ne devrait pas dépendre des métadonnées. Celles-ci ont une vocation purement informative et ne devraient influencer que la rédaction et la réflexion.
:::

**Ces informations peuvent offrir certains avantages :**
- Aider traducteurs/rédacteurs à comprendre le contexte.
- Visualiser l'information récursivement, depuis la parenté de la clé.
- Ajouter des informations pertinentes aux LLM pour le traitement de la clé ou des clés voisines.

::: tip Note
Pour une clé du même dossier, les LLM lisent aussi les clés voisines pour comprendre le flux narratif.
:::
- Personnaliser icône et couleur dans l'arbre des clés pour une meilleure identification.
- Ajouter des images pour contextualiser visuellement le dialogue.
- Activer/désactiver les variables utilisables par les LLM.

---

## L'interface des métadonnées {#metas-interface}
<DocImage src="/doc/lsde/doc-lsde-ui-metadata.webp" />

0. **Récursions**
Limite la plage d'informations récupérées, de la clé active vers ses parents hiérarchiques.
1. **Descriptions (LLM)**
Information prise en compte lorsque la clé est envoyée au LLM. Elle contextualise l'appartenance de la clé, son entourage et le rôle de ses enfants.
2. **Variables autorisées**
Permet d'ajouter les variables à traiter par les LLM pour optimiser leurs tâches. Par exemple, autorisez des variables de personnages et demandez au LLM que seuls ceux-ci figurent dans le dossier de la quête. Les personnages additionnels pourront être réassignés/supprimés par le LLM ou utilisés pour composer des interactions supplémentaires.
3. **Variables vocales**
Assignez ici des interlocuteurs si le groupe de variables vocales est configuré.

::: tip Note
Les LLM peuvent aussi les utiliser en priorité pour vérifier les dialogues.
:::
4. **Notes utilisateur**
Rédigez ici mémos et pense-bêtes pour compositeurs, traducteurs ou vous-même.

::: tip Note
Les LLM n'y ont pas accès. Les notes étant intégrées au fichier .lsde, évitez-y les informations sensibles si partagé ou versionné via Git.
:::
5. **Images**
Affichez des images pour contextualiser dossier ou clé. Très utile pour un traducteur sans accès au code source ou aperçu.

::: tip Note
Les images sont compressées et dégradées dans le fichier .lsde pour faciliter le partage.
:::
6. **Parenté**
Ces sections affichent récursivement les informations des parents, du haut vers le bas.
7. **Éditer**
Ce bouton active le mode édition des métadonnées.

::: tip Note
Par défaut, les métadonnées sont en lecture seule.
:::
8. **Actions d'édition**
En mode édition, annulez ou appliquez les changements. Tout changement de clé en mode édition sauvegarde automatiquement la clé précédente.
9. **Filtre des variables**
Cette boîte filtre les groupes de variables à activer, soulignant l'importance **d'une bonne organisation initiale des variables**.

---
