---
title: "Godot"
description: "LSDE s'intègre avec Godot 4 pour la gestion et la traduction de vos dialogues, avec support natif de GDScript et C# (Mono)."
section: engines
outline: [2, 3]
---

# Godot

LSDE s'intègre avec **Godot 4** pour la gestion et la traduction de vos dialogues, avec support natif de GDScript et C# (Mono).

## Intégration {#integration}
Godot utilise des fichiers CSV ou JSON pour la localisation via son système de `TranslationServer`.
LSDE peut importer et exporter ces formats pour un flux de travail fluide entre les deux outils.

Le flux de travail :
- **Import** — Importez vos fichiers de traduction Godot (CSV ou JSON) dans LSDE via le Smart Import.
- **Édition** — Traduisez et éditez avec l'assistance LLM, les métadonnées et le correcteur orthographique.
- **Export** — Réexportez les fichiers localisés directement dans votre dossier de projet Godot.

## Génération de code {#code-generation}
LSDE génère automatiquement des classes d'accès typées dans deux langages :
- **GDScript** — Classes natives Godot avec autocomplétion dans l'éditeur Godot.
- **C# (Mono)** — Pour les projets Godot utilisant le runtime .NET.

Ces classes donnent accès à vos clés de dialogue avec la vérification de types, évitant les erreurs de chaînes en dur.

## Conseils {#tips}
- Godot charge les traductions via `TranslationServer.set_locale()` — vos fichiers exportés par LSDE sont directement compatibles.
- Placez le fichier `.lsde` à la racine de votre projet Godot pour le versionnage Git.
- Configurez l'export automatique à la sauvegarde dans LSDE pour synchroniser vos modifications en continu avec Godot.
- Utilisez `tr()` dans vos scripts GDScript pour accéder aux clés de traduction exportées.
