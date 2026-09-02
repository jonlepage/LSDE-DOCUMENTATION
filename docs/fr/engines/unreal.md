---
title: "Unreal Engine"
description: "LSDE supporte Unreal Engine via le système de localisation natif d'Unreal et la génération de classes C++."
section: engines
outline: [2, 3]
---

# Unreal Engine

LSDE supporte **Unreal Engine** via le système de localisation natif d'Unreal et la génération de classes C++.

Le flux de travail :
- **Import** — Exportez vos textes depuis Unreal via le Localization Dashboard, puis importez-les dans LSDE.
- **Édition** — Traduisez et éditez vos textes dans LSDE avec l'assistance LLM.
- **Export** — Réexportez les fichiers localisés et réimportez-les dans Unreal.

## Génération de classes C++ {#cpp-generation}
LSDE génère automatiquement des classes d'accès typées en **C++** à partir de vos définitions de blueprints.
Ces classes s'intègrent dans votre projet Unreal et vous permettent d'accéder à vos dialogues avec la vérification de types à la compilation.

## Conseils {#tips}
- Utilisez le **Localization Dashboard** d'Unreal pour la configuration initiale des langues et des cibles de localisation.
- Placez le fichier `.lsde` à la racine de votre projet Unreal pour le versionnage Git.
- LSDE s'occupe de la traduction et de la composition — Unreal gère le packaging et le chargement à l'exécution via `FText`.
