---
title: "Unity"
description: "LSDE s'intègre avec Unity pour gérer, traduire et synchroniser vos dialogues directement dans vos projets Unity."
section: engines
outline: [2, 3]
---

# Unity

LSDE s'intègre avec **Unity** pour gérer, traduire et synchroniser vos dialogues directement dans vos projets Unity.

<YouTube id="NNlNnLo18Mo" />

## Plugin LSDE Bridge {#lsde-bridge}
LSDE fournit un plugin Unity gratuit : **LSDE Bridge — Unity Localization Sync**.
Ce package élimine le besoin d'importer/exporter manuellement chaque String Table Collection une par une.

**Fonctionnalités principales :**
- **Import/Export par lot** — Synchronisez toutes vos tables de localisation en une seule opération.
- **Formats supportés** — XLIFF 2.0 et CSV, compatibles avec le package Unity Localization.
- **Renommage automatique** — Détecte les clés avec le même ID mais un nom différent et les renomme dans Unity.
- **Nettoyage des orphelins** — Supprime les clés présentes dans Unity mais absentes des fichiers importés.
- **Dry Run** — Prévisualisez les changements avant de les appliquer.
- **Rapport de développeur** — Génère un rapport Markdown avec les actions effectuées et des commandes grep pour trouver les références obsolètes dans vos scripts C#.

**Prérequis :**
- Unity **2021.3 LTS** ou plus récent
- Package [Unity Localization](https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/index.html) **1.4.2+**

**Installation :**
Ouvrez **Window > Package Manager**, cliquez **+** > **Add package from git URL** et entrez l'URL du dépôt.
Le lien sera disponible prochainement.

## Workflow CSV {#workflow-csv}
Le flux CSV est le plus simple pour débuter :
- **Export** — Dans LSDE Bridge, cliquez "Export All" pour exporter toutes vos tables en fichiers CSV.
- **Édition** — Importez ces CSV dans LSDE, éditez et traduisez vos textes.
- **Import** — LSDE exporte les CSV modifiés, puis dans LSDE Bridge cliquez "Import All CSV" pour synchroniser Unity.

## Workflow XLIFF {#workflow-xliff}
Pour les projets nécessitant un contrôle plus fin :
- **Export** — Utilisez l'export XLIFF intégré d'Unity pour générer les fichiers .xlf.
- **Édition** — Importez dans LSDE, éditez avec l'assistance LLM et les métadonnées.
- **Import** — LSDE exporte les .xlf, puis LSDE Bridge effectue l'import avec parsing XML et mise à jour directe des StringTables.

## Accès au plugin {#access}
Ouvrez le plugin dans Unity via **Window > Asset Management > LSDE Bridge**.
Configurez le format (XLIFF ou CSV), les dossiers d'import/export, et les options de synchronisation.

## Conseils {#tips}
- Placez le fichier `.lsde` à la racine de votre projet Unity pour profiter du versionnage Git.
- Utilisez le **Dry Run** systématiquement avant un import pour vérifier les changements.
- Activez le **rapport de développeur** pour identifier les clés renommées ou supprimées et mettre à jour vos références C#.
