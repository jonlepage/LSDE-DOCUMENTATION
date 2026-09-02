---
title: "Features Sheet"
description: "La version Beta public apporte des améliorations majeures à l'expérience utilisateur (UX) et aux fonctionnalités pour supporter tout type de projet."
section: resources
outline: [2, 3]
---

# Features Sheet

La version Beta public apporte des améliorations majeures à l'expérience utilisateur (UX) et aux fonctionnalités pour supporter tout type de projet. 
Voici un résumé des fonctionnalités (Cheat Sheet) :

## Général {#general}
- Interface tres compacte, moderne et ergonomique.
- Interface intégralement traduite en 10 langues : fr, en, es, de, it, pl, ja, ko, zh, ru.
- Basculement rapide de l'interface entre deux langues préférées via `[F1]`.
- Système de mise en page modulable avec fenêtres ancrables (idéal pour le multi-écrans).
- Mode plein écran pour toutes les fenêtres.
- Infobulles d'aide sur l'ensemble des boutons au survole.
- Accessibilité : options dédiés au daltonisme et aux troubles de la vision.
- Raccourcis clavier pour les actions rapides par context.
- Plusieurs modes Zen pour favoriser la concentration durant la rédaction.
- Statistiques du projet en temps réel : clés, mots, caractères, tokens, frappes clavier, sélections.
- Création rapide de projet guidée et préconfigurée en un clic.
- Fichiers projets `.lsde` en JSON compatibles avec le versionnage (Git) et faciles à partager.
- Support système (OS) des icons et pour l'ouverture des projets avec l'extension `.lsde`.
- Option de réouverture automatique du dernier projet utilisé.
- History des derniers project ouverte.
- Détection des fermetures inattendues avec restauration de session.
- Import/Export individuel du profile de configuration globale de LSDE.
- Activation/désactivation et changement de modèle LLM en un clic.
- Support d'un LLM natif de secours (fallback) gratuit et anonyme, sans compte ni clé API.
- Support des copilotes LLM : Claude, DeepSeek, Gemini, GPT, Mistral, Ollama, ElevenLabs...
- Support des LLM locaux via `localhost`.
- Assistant LLM intégré formé sur la documentation pour vous guider.
- Menu d'assistance LLM sur les champs de configuration : aide, remplissage, amélioration, traduction.
- Diagnostic et gestionnaires des erreurs et avertisement internes.
- Documentation complète LSDE et i18n disponible en ligne.
- Support douverture des liens en externes (navigateur) ou en internes (LSDE).
- Préconfigurations pour : Unity, Godot, RPG Maker, Unreal Engine, GameMaker, Construct3, Cocos2d, Phaser, Babylon.js, SugarCube, NovelStudio...
- Gestionnaire de contextes i18n personnalisables : pluriels, genres, booléens, etc.

## Développeur {#dev}
- Système d'analyse de la base de code pour le référencement automatique des clés.
- Scanner RAW pour identifier les textes bruts nécessitant potentiellement des clés i18n.
- RegEx préconfigurés et personnalisables pour moteurs de jeux propriétaires.
- Support des clés dynamiques (ex: `game:.scenes.${index}.events.1`).
- Création automatique de clés avec détection du contexte et du texte par défaut.
- Filtre d'affichage pour les clés détectées mais non encore créées.
- Double-clic pour ouvrir l'IDE à l'emplacement exact de la clé dans le code source.
- Contrôle du nombre de lignes de code source affichées.
- Thèmes d'affichage pour le code source.
- Detection et visualisation des desincronisation exterieur des fichier i18 en temp reel.
- Option de synchronisation manuelle en un clic.

## Arborescence {#tree}
- Modes de rendu multiples : arborescence, liste plate (avec ou sans chemin complet), traductions manquantes, clés sans référence, avec audio ou avec tâche en cours.
- Recherche par clé ou par contenu associé.
- Design des dossiers namespaces (root) optimisé pour une identification rapide.
- Affichage du nombre de sous-dossiers lors de la sélection.
- Création intelligente de clés i18n avec auto-incrémentation selon les sélections.
- Menu contextuel complet via clic droit.
- Sélection multiple avec `Ctrl+clic`.
- Support du Glisser-Déposer (Drag & Drop).
- Tags contextuels sur chaque item : pluriel, genre, voix, incomplet, inconnu dans le code, etc.
- Tâches par lots (batch) via le menu contextuel pour itérer sur les sous-dossiers.

## LLM {#LLM}
- Gestionnaire de modèles favoris.
- Gestion sécurisée des clés API.
- Possibilité d'enregistrer plusieurs clés API avec rotation automatique (auto-roll) en cas d'erreurs.
- Gestion et personnalisation des tâches natives : instructions et règles envoyées au LLM.

## Édition / Composition {#editing}
- Personnalisation du thème et de la typographie : polices, espacement, hauteur de ligne, couleurs et support RTL.
- Moteur de rendu de texte 100% personnalisable : variables, couleurs, liens, infobulles.
- Filtrage des langues et des contextes à afficher.
- Recherche, remplacement et navigation textuelle avec support RegEx.
- Menu de tâches pour traiter chaque dialogue : traduction, correction, reformulation, ajustement de longueur, suite de texte.
- Correcteur orthographique LLM configurable en temps réel.
- Barre d'action rapide : navigation, gestion du rendu, création de contextes ou de clés.
- Option mode paragraphe via double saut de ligne 
- Suppression rapide de ligne (comportement IDE).
- Menu contextuel sur sélection de texte.
- Gestionnaire de wrappers personnalisables pour encadrer le texte sélectionné.
- Wrappers incrémentaux et réversibles selon le nombre d'interactions.
- Système de validation : détection des changements, traductions à revalider ou à ignorer.
- Comparaison des modifications et affinement des résultats durant une tâche.
- Mémorisation des configurations rapides pour chaque type de tâche.
- Support des paradigmes SAD/MAD (Single/Multi Actor Per Dialog).
- Gestionnaire de voix (audio) par personnage pour chaque chaîne.
- Visualisation des métadonnées : images, notes, contextes LLM, personnages, voix, icônes.
- Affichage des variables dépendantes et des références textuelles.
