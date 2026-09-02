---
title: "RPG Maker"
description: "LSDE s'intègre nativement avec RPG Maker MV et RPG Maker MZ pour la gestion et la traduction de vos dialogues."
section: engines
outline: [2, 3]
---

# RPG Maker

LSDE s'intègre nativement avec **RPG Maker MV** et **RPG Maker MZ** pour la gestion et la traduction de vos dialogues.

## Fonctionnement {#how-it-works}
RPG Maker stocke ses dialogues dans des fichiers JSON (Map, CommonEvents, System, etc.).
LSDE peut importer ces fichiers, vous permettre de les éditer et traduire confortablement, puis les réexporter au format attendu par RPG Maker.

Si vous souhaitez une prise en charge totale pour RMMZ i18n, vous devez télécharger le [plugin ici](https://raw.githubusercontent.com/jonlepage/LSDE-RMMZ-I18N/refs/heads/main/dist/LSDE_i18n.js)

Le flux de travail typique :
- **Import** — Pointez LSDE vers le dossier `data/` de votre projet RPG Maker. Le Smart Import détecte et extrait automatiquement les clés de dialogue.
- **Édition** — Rédigez, corrigez et traduisez vos textes manuellement ou avec l'assistance LLM, les métadonnées et le correcteur orthographique.
- **Export** — Réexportez les fichiers JSON modifiés directement dans votre projet RPG Maker.

## Versions supportées {#supported-versions}
- **RPG Maker MV** — Import/Export JSON complet
- **RPG Maker MZ** — Import/Export JSON complet
- Les versions plus anciennes (VX Ace, XP) ne sont pas supportées nativement mais peuvent fonctionner via un parser personnalisé.

## Tutoriel vidéo {#video-tutorial}
<YouTube id="0cJjxtI088Q" />

## Conseils {#tips}
- Utilisez le scanner de code pour vérifier que toutes vos clés sont bien présentes dans les fichiers RPG Maker.
- Configurez les patterns Regex dans les paramètres du projet pour détecter automatiquement les clés de dialogue RPG Maker.
- Profitez du mode MAD (Multi Actor Dialog) si vos événements contiennent des dialogues avec plusieurs personnages.
