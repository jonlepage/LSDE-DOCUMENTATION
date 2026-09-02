---
title: "Blueprint"
description: "L'éditeur Blueprint est l'interface visuelle de composition de dialogues dans LSDE."
section: interface
outline: [2, 3]
---

# Blueprint

<DocImage src="/doc/lsde/doc-lsde-blueprint-1.webp" left />

L'éditeur Blueprint est l'interface visuelle de composition de dialogues dans LSDE.
Il permet de construire des graphes narratifs en connectant des blocs entre eux, offrant une vue d'ensemble claire du flux conversationnel.
Vous pouvez ainsi récupérer ces flux en data pure et les utiliser dans votre Runtime ou [LSDEDE](https://jonlepage.github.io/LS-Dialog-Editor-Engine) le Runtime générique conçu pour répondre a ce besoin.

## Vue d'ensemble {#overview}
Le Blueprint fonctionne comme un canevas infini sur lequel vous placez et reliez des blocs.
Chaque scène possède son propre graphe, avec un bloc de départ et un flux qui se ramifie selon vos choix de design.
Les scènes sont sauvegardées automatiquement lorsque vous passez de l'une à l'autre.

---

## Types de blocs {#block-types}
Le système Blueprint repose sur **4 types de blocs de contenu** et un type de note :
- **Dialog** — Une ligne de dialogue assignée à un personnage. Le bloc le plus courant.
- **Choice** — Un point de branchement où le joueur choisit une réponse parmi plusieurs options.
- **Condition** — Un aiguillage invisible qui évalue l'état du jeu et redirige le flux silencieusement.
- **Action** — Déclenche des effets dans le jeu (donner un objet, jouer un son, activer un drapeau).
- **Note** — Un bloc de commentaire pour le narrative designer, ignoré à l'exécution.

## Interactions sur le canevas {#canvas-interactions}
L'éditeur offre une expérience de composition fluide pensée pour ne pas quitter le clavier :
- **Drag-and-drop** pour déplacer et réorganiser les blocs.
- **Multi-sélection** pour déplacer ou supprimer plusieurs blocs simultanément.
- **Copier/Coller** de blocs et de connexions entre scènes.
- **Undo/Redo** complet sur toutes les opérations.
- **Guides d'alignement** pour un graphe propre et lisible.
- **Verrouillage de blocs** pour protéger les parties finalisées.
- **Raccourci clavier** Ne quittez pas votre clavier durant votre flow, vous n'avez pas besoin de jongler avec souris/clavier.

## Carrousel rapide {#fast-carousel}
Le carrousel rapide permet de configurer les acteurs, émotions et choix bloc par bloc, directement depuis le canevas.
Plus besoin d'ouvrir chaque bloc individuellement — naviguez au clavier et assignez les propriétés en continu.

## Navigation {#navigation}
- **Minimap** — Vue réduite du graphe complet pour naviguer rapidement dans les grandes scènes.
- **Arbre de scènes** — Panneau latéral listant toutes les scènes du projet.
- **Mode dossier** — Visualise les scènes comme des cartes connectées pour une vue d'ensemble du projet.

## Export {#export}
Les blueprints s'exportent vers les formats de moteurs de jeu avec sélection de cible par scène, métadonnées et identifiants de personnages.
Le système génère automatiquement des **classes d'interface typées** pour :
- **TypeScript** / JavaScript
- **C#** (.NET, Unity, Godot Mono)
- **C++** (Unreal Engine, moteurs custom)
- **GDScript** (Godot 4)

Les conventions de nommage sont configurables selon votre projet.
