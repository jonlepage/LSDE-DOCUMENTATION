---
title: "FAQ"
description: "R: Allez dans l'arbre des clés, cliquez sur le bouton \"Créer un fichier ou dossier\", ou utilisez le menu contextuel (clic droit)."
section: resources
outline: [2, 3]
---

# FAQ

### Q: Comment créer une nouvelle clé de traduction ? {#create-new-key}
R: Allez dans l'arbre des clés, cliquez sur le bouton "Créer un fichier ou dossier", ou utilisez le menu contextuel (clic droit). Entrez le chemin complet de la clé et confirmez. La clé sera créée dans le namespace sélectionné.

### Q: Quelle est la différence entre un dossier et un fichier dans l'arbre ? {#difference-folder-file}
R: Les dossiers sont des conteneurs logiques pour organiser vos clés. Les fichiers sont des clés individuelles contenant le texte à traduire. Les dossiers peuvent contenir d'autres dossiers ou des clés.

### Q: Comment supprimer une clé inutilisée ? {#delete-unused-key}
R: Activez l'option "Afficher/Masquer les clés orphelines" dans l'en-tête de l'arbre pour identifier les clés présentes dans LSDE mais absentes de votre code source. Vous pouvez ensuite les supprimer via le menu contextuel.

### Q: Quels LLM sont disponibles dans LSDE ? {#available-llms}
R: LSDE supporte 7 fournisseurs principaux : Anthropic, OpenAI, Mistral, Gemini, Deepseek, ElevenLabs, et un service gratuit via des emails temporaires. Vous pouvez configurer vos clés API dans les paramètres globaux, [section Authentification](/fr/interface/global-settings#authentication).

### Q: Comment utiliser les LLM gratuitement ? {#use-llms-free}
R: LSDE offre une méthode gratuite pour OpenAI via la création de comptes avec des emails temporaires (temp-mail ou 10minmail). Vous aurez environ 70 tâches par heure avec un quota limité.
Vous pouvez aussi utiliser les services Google avec Gemini, qui offre des clés API gratuites.

### Q: Les traductions LLM sont-elles fiables ? {#llm-reliability}
R: Les résultats sont pertinents et satisfaisants, mais il reste essentiel de faire appel à un professionnel de la langue pour la vérification finale. Les LLM excellent en traduction lorsqu'on leur fournit le contexte approprié.

### Q: Comment améliorer la qualité des traductions LLM ? {#improve-llm-quality}
R: Remplissez les métadonnées de vos clés avec des descriptions, des variables et des notes contextuelles. Ces informations sont intégrées dans les requêtes LLM pour garantir des résultats plus pertinents.

### Q: À quoi servent les métadonnées ? {#metadata-purpose}
R: Les métadonnées fournissent un contexte additionnel aux traducteurs, rédacteurs et LLM. Elles incluent des descriptions, les variables autorisées, des notes utilisateur et des images pour contextualiser visuellement le contenu.

### Q: Comment ajouter des images aux clés ? {#add-images-to-keys}
R: Ouvrez la fenêtre de métadonnées de la clé sélectionnée et utilisez la section "Images". Les images sont compressées et intégrées dans le fichier .lsde pour un partage facilité.

### Q: Les LLM ont-ils accès aux notes utilisateur ? {#llm-user-notes-access}
R: Non, les notes utilisateur sont destinées uniquement aux compositeurs et traducteurs. Elles ne sont pas transmises aux LLM.

### Q: Comment configurer le scanner de code ? {#configure-code-scanner}
R: Allez dans la section Patterns (paramètres du projet). Créez un pattern avec une expression régulière (Regex) contenant au moins 1 groupe de capture pour identifier vos clés i18n dans votre codebase.

### Q: Quels langages de programmation sont supportés ? {#supported-languages}
R: Il n'y a pas de limitation intrinsèque. Il suffit de créer la Regex appropriée pour capturer vos clés, quel que soit le langage. Utilisez un outil comme regexr.com pour tester vos patterns.

### Q: Comment identifier les clés manquantes dans mon code ? {#identify-missing-keys}
R: Activez le mode "Missing Key" dans le scanner de code. LSDE n'affichera que les clés présentes dans votre code source mais absentes de l'arbre LSDE. Vous pouvez les créer en lot.

### Q: Qu'est-ce que le rendu texte post-traitement ? {#post-processing-rendering}
R: C'est un système de personnalisation de l'affichage du texte en temps réel. Vous pouvez configurer des patterns Regex pour capturer des groupes de texte et leur assigner des décorateurs (couleurs, icônes, widgets) pour améliorer la lisibilité.

### Q: Comment ajouter des "widgets" au texte ? {#add-widgets-to-text}
R: Créez un pattern avec une Regex dans les paramètres du projet. Assignez un groupe de capture à un décorateur de type "Widget". Le widget ne s'affichera que dans les fenêtres actives pour optimiser les performances.

### Q: Comment lier des variables au rendu ? {#link-variables-to-rendering}
R: Dans les paramètres du projet, section Variables, créez une catégorie et des variables avec des "tags". Configurez vos patterns Regex pour capturer ces tags, et LSDE associera automatiquement les décorateurs aux instances trouvées.

### Q: Comment générer des voix pour mes dialogues ? {#generate-voices}
R: Vous devez d'abord obtenir une clé API ElevenLabs (plan gratuit disponible). Configurez vos profils vocaux dans les paramètres du projet, puis utilisez le gestionnaire de voix pour générer les narrations.

### Q: Quelle est la différence entre SAD et MAD ? {#sad-vs-mad}
R: *SAD* (Single Actor Dialog) = un locuteur par clé. *MAD* (Multi Actor Dialog) = plusieurs locuteurs au sein d'une même clé, identifiés par des tags Regex. MAD réduit considérablement le nombre de clés à gérer.

### Q: Comment gérer plusieurs personnages dans un dialogue ? {#handle-multiple-characters}
R: En mode MAD, utilisez des tags comme `{personnage} texte` dans votre clé. Configurez une Regex pour capturer l'identifiant du personnage et son texte, puis associez des profils vocaux à chaque personnage dans les variables.

### Q: Que se passe-t-il si je modifie le texte après la génération vocale ? {#voice-modification-after-gen}
R: LSDE détecte les modifications et propose de revalider les voix. En mode MAD, vous pouvez réassigner les instances vocales existantes par glisser-déposer si vous avez déplacé ou ajouté des personnages.

### Q: Comment changer la police ou la taille du texte dans l'éditeur ? {#change-font-size}
R: Allez dans Paramètres globaux > Interface utilisateur > Typographie. Vous pouvez ajuster la taille, l'espacement, la police et la hauteur de ligne.

### Q: Comment changer la langue de l'interface LSDE ? {#change-interface-language}
R: Allez dans Paramètres globaux > Accessibilité > Sélection de la langue. Vous pouvez configurer 2 langues d'interface et basculer entre elles avec [F1].

### Q: Comment importer un projet existant ? {#import-existing-project}
R: Allez dans le Gestionnaire de localisation et utilisez l'option "Smart Import". Structurez vos dossiers en suivant le format `../folder/lang/namespace.json` et LSDE les importera automatiquement.

### Q: Comment protéger mes clés contre les modifications ? {#protect-keys}
R: Dans l'éditeur principal, cochez la case "Protéger" pour marquer un texte comme final. Les tâches LLM l'ignoreront automatiquement.

### Q: Comment partager mon projet LSDE avec une équipe ? {#share-project-team}
R: Le fichier `.lsde` contient l'intégralité du projet. Partagez-le via Git, email ou un service cloud. LSDE synchronisera automatiquement les modifications à l'ouverture.

### Q: Comment suivre les tâches en cours d'un collaborateur ? {#track-collaborator-tasks}
R: Activez l'option "Afficher/Masquer les clés avec tâches en cours" dans l'arbre. Vous verrez rapidement les clés assignées à des tâches actives ou en attente de validation.

### Q: Pourquoi l'éditeur ralentit avec plusieurs langues affichées ? {#performance-multiple-languages}
R: Par défaut, LSDE désactive les rendus complexes (widgets) dans les fenêtres inactives pour optimiser les performances. Si ce n'est pas un problème, vous pouvez désactiver cette optimisation dans les configurations globales.

### Q: Comment améliorer la vitesse du scanner de code ? {#improve-scanner-speed}
R: Sélectionnez une clé spécifique dans l'arbre plutôt que d'afficher tous les résultats. Cela filtre les résultats et accélère le scanner. Évitez aussi les Regex trop complexes avec des conditionnelles.

### Q: Qu'est-ce qu'un fichier .lsde ? {#what-is-lsde-file}
R: C'est le fichier central de votre projet. Basé sur le format JSON, il centralise toutes vos clés, traductions, métadonnées et voix audio.

Vous pouvez même l'intégrer directement dans votre codebase pour extraire les entrées et les mapper selon vos besoins :
```ts
type MetasEntries = [key: StructureKeyWithNamespace, value: IStructureMetaData][];
type ValuesEntries = [StructureKeyWithNamespace, [Locales, string][]][];
type VoicesEntriesMap = [StructureKeyWithNamespace, [Locales, ISpeakerVoiceConfig[]][]][];
```
Il est recommandé de le sauvegarder à la racine de votre projet pour profiter du versionnage avec Git. Ne contenant aucune donnée sensible, il peut être facilement partagé avec un traducteur ou un éditeur.

Sa présence à la racine facilite aussi la recherche de chemins complets de clés, tels que : `game:.scenes.the-ice-land.events.the-lost-house.1`. Votre IDE le reconnaîtra comme un fichier JSON standard, vous permettant de lire facilement les notes et métadonnées fournies.

Enfin, les fichiers `.lsde` sont rétrocompatibles : vos anciens projets s'ouvriront sans problème dans les nouvelles versions du logiciel.

### Q: LSDE est-il gratuit ? {#lsde-is-free}
L'accès est gratuit pendant la phase bêta, mais deviendra payant lors de la sortie publique. Une version d'essai sera disponible pour évaluer toutes les fonctionnalités selon vos besoins.

LSDE proposera ensuite 4 plans adaptés à votre budget :
- **Essential** : pour les besoins basiques de rédaction et de composition (licence à vie).
- **Professional** : pour les besoins avancés des développeurs (licence à vie).
- **Enterprise** : pour les besoins des studios avec plusieurs postes de travail (licence annuelle).
- **Éducation** : pour les écoles de langues ou de jeux vidéo (licence annuelle).

### Q: Pourquoi ai-je besoin de LSDE ? {#why-i-need-lsde}
LSDE réduit drastiquement la complexité de vos projets en offrant une interface intuitive et organisée. Il vous permet de composer et traduire confortablement, sans les contraintes liées à votre IDE ou au rendu de votre langage de programmation.

Il supporte différents paradigmes de conception, le rendant compatible avec la majorité des moteurs de jeu "maison" souhaitant optimiser leur workflow.

### Q: Comment installer LSDE ? {#how-install-lsde}
LSDE n'est pas disponible en téléchargement direct. Vous devez utiliser le programme d'installation `LS-Installer`, qui se chargera de télécharger et configurer le logiciel pour vous.

### Q: Comment activer LSDE ? {#how-activate-lsde}
Votre licence vous sera envoyée automatiquement par email après le paiement. Il suffit d'entrer l'adresse email utilisée et la clé reçue dans le logiciel pour l'activer.
Notez qu'une activation correspond à un utilisateur par machine.

### Q: Qu'est-ce que le MCP Bridge ? {#what-is-mcp}
R: Le MCP Bridge est un serveur qui implémente le Model Context Protocol. Il permet à des agents LLM externes (Claude, Copilot, etc.) d'interagir directement avec votre éditeur : lire, créer et modifier des scènes via un protocole standardisé.

### Q: Qu'est-ce que le Blueprint Editor ? {#what-is-blueprint}
R: Le Blueprint Editor est un éditeur visuel de graphes permettant de composer des dialogues en connectant des blocs (Dialog, Choice, Condition, Action) dans un flow visuel. Il supporte le drag-and-drop, la minimap, le copier-coller et les raccourcis clavier.

### Q: Qu'est-ce que le runtime ? {#what-is-runtime}
R: Le runtime est une bibliothèque open-source qui permet d'exécuter vos dialogues et blueprints LSDE directement dans vos projets. Il est disponible pour TypeScript et peut être intégré dans n'importe quel moteur.

### Q: Comment fonctionne le correcteur orthographique ? {#how-spellcheck-works}
R: LSDE intègre LanguageTool pour la vérification orthographique inline. Les erreurs sont surlignées directement dans l'éditeur avec des suggestions de correction rapide. Vous pouvez utiliser le service en ligne ou héberger votre propre instance.
