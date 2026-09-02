---
title: "Editeur Dialogue"
description: "Cette section présente le contenu rendu des clés. L'éditeur organise la clé sélectionnée verticalement et récursivement, affichant son contenu dans toutes…"
section: interface
outline: [2, 3]
---

# Editeur Dialogue

Cette section présente le contenu rendu des clés. L'éditeur organise la clé sélectionnée verticalement et récursivement, affichant son contenu dans toutes les langues, ses contextes et ses clés enfants.
Il propose des options de navigation et de rendu pour filtrer langues et contextes, ainsi que des outils d'action et de télémétrie.

## Système de Rendu {#rendering-system}
LSDE dispose d'un système de rendu "post-traitement" pour personnaliser l'affichage du texte, facilitant ainsi lecture et rédaction.
Configurez des motifs Regex pour capturer des groupes de texte et leur assigner des décorations.
Ces captures peuvent être associées à des variables pour fournir des informations supplémentaires au traducteur, rédacteur ou LLM.
[Accédez à la section avancée sur le rendu et la création de motifs](/fr/features/rendering)

<DocImage src="/doc/lsde/doc-lsde-ui-editor.webp" />

## Les outils de l'en-tête {#header-tools}
1. **Activer/Désactiver le post-rendu**
Désactive rapidement le rendu des motifs.
2. **Navigation**
Boutons pour naviguer rapidement entre les clés suivante et précédente.
3. **Créer une clé**
Crée rapidement une nouvelle clé.
4. **Afficher/Masquer les contextes**
Affiche ou masque les contextes liés à une clé pour simplifier la vue.
Chaque icône correspond au libellé des contextes configurés.
5. **Afficher/Masquer les langues**
Filtre les langues pour travailler simultanément.

::: tip Note
Ces filtres sont également utilisés par LSDE pour d'autres opérations système, impactant ainsi d'autres outils de diagnostic.
:::

## Les Zones d'édition {#editing-zones}
Cette zone affiche le texte des langues actives et les tâches en cours pour la clé.
6. **Sélectionner la clé dans l'arborescence**
Localise et sélectionne la clé dans l'arborescence.

::: tip Note
Utile pour éditer les métadonnées, possible uniquement sur la clé active.
:::
7. **Tâches**
Un menu propose des tâches applicables à cette clé, ses relations et ses clés enfants.
8. **Protéger**
Cochez cette case pour marquer le texte comme final et protégé, ignorant ainsi certaines tâches et opérations.
Désactiver cette option propose de désactiver toutes les validations des autres langues liées à cette clé.
0. **La clé**
Affiche le chemin complet de la clé, **dans le format LSDE**

## Rechercher/Remplacer {#search-replace}
8. **Rechercher/remplacer**
[CTRL+F] ouvre l'outil de recherche interne.
Il propose un mode Regex pour les cas complexes.
Une recherche peut aussi être lancée via le menu contextuel.

## Performance {#performance}
Par défaut, LSDE désactive les rendus complexes (widgets) dans les fenêtres inactives.
Cela assure un bon compromis entre expérience visuelle et faible latence.
Si les performances ne sont pas un problème, désactivez cette optimisation dans les configurations globales.

::: tip Note
Peut consommer des ressources si plusieurs langues sont affichées simultanément, le système de rendu étant segmenté par clé.
:::
