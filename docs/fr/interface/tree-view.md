---
title: "L'arborescence des clés"
description: "L'interface LSDE fournit une vue d'ensemble claire et structurée de toutes les clés de traduction de votre projet."
section: interface
outline: [2, 3]
---

# L'arborescence des clés

L'interface LSDE fournit une vue d'ensemble claire et structurée de toutes les clés de traduction de votre projet. Conçue pour simplifier leur gestion, elle adapte automatiquement les clés – qu'elles soient importées ou nouvellement créées – à son format interne optimisé, puis les restitue dans le format spécifique de votre projet, assurant ainsi une compatibilité et une intégration parfaites.

::: tip Note
Ainsi, un fichier projet `.lsde` peut être partagé et récupéré dans son intégralité.
:::

Prenons l'exemple de `name_space.folderA.folderB.folderC.fileABC` :
- Les chemins des clés sont structurés de manière hiérarchique, avec des points comme séparateurs. Cette convention, similaire à celle d'i18next, facilite la navigation et l'identification de l'emplacement et du dossier de chaque clé. Il est à noter qu'i18next utilise par défaut `name_space:folderA.folderB.folderC.fileABC`.
- Le premier segment de chaque chemin (avant le premier point) définit l'espace de noms (namespace). Il est crucial de souligner que cet espace de noms est **immuable** au sein de l'arborescence.

::: tip Note
Pour toute modification de l'espace de noms, vous devrez utiliser l'interface dédiée à la gestion des langues. Cette approche centralisée assure l'intégrité de vos traductions.
:::

Explorons maintenant en détail les différentes sections et fonctionnalités de l'interface de l'arborescence des clés.

<DocImage src="/doc/lsde/doc-lsde-ui-tree.webp" />

## Actions en en-tête {#header-actions}
1. **Afficher/Masquer les clés orphelines.**
Cette option est essentielle pour maintenir la propreté et la pertinence de vos traductions. Elle permet d'identifier rapidement les clés présentes dans l'arborescence mais absentes du code source de votre projet externe, facilitant ainsi la détection des clés obsolètes ou inutilisées pour un potentiel nettoyage ou une relocalisation.
2. **Afficher/Masquer les clés incomplètes.**
Cette fonction met en évidence toutes les clés dont les traductions sont manquantes dans une ou plusieurs langues.

::: warning Attention
**Note importante :** Le scanner de clés de LSDE analyse uniquement les langues activées dans la fenêtre de l'éditeur. Les langues désactivées sont exclues du processus d'analyse, permettant ainsi de concentrer la vérification sur les langues actives.
:::

3. **Créer un fichier ou un dossier.**
Au-delà du menu contextuel (clic droit), cette fonction permet de créer manuellement de nouvelles clés ou d'organiser proactivement votre arborescence. LSDE supporte la création de dossiers "internes", vous offrant la possibilité de structurer logiquement vos clés, y compris en créant des dossiers vides pour de futures traductions. Ces opérations s'effectuent via une fenêtre interactive intuitive qui vous guide étape par étape.

<DocImage src="/doc/lsde/doc-lsde-ui-createfolder.webp" left />

4. **Champ de l'espace de noms.**
Ce champ affiche l'espace de noms (namespace) où la nouvelle clé ou le nouveau dossier sera créé, garantissant son insertion correcte dans la hiérarchie existante.
5. **Chemin de clé.**
Cet emplacement est réservé à la saisie du chemin complet de la clé. Le système offre une assistance en direct et alerte instantanément si le chemin ne respecte pas les règles de formatage ou d'unicité, vous aidant ainsi à éviter les erreurs.
6. **Déplacer les sélections.**
Particulièrement utile lors de la création d'un nouveau dossier, cette option permet de transférer simultanément les éléments sélectionnés de l'arborescence vers ce nouveau répertoire. Elle optimise ainsi votre flux de travail et facilite la réorganisation des clés.
7. **Afficher/Masquer les clés avec des tâches en cours.**
Activez cette fonctionnalité pour visualiser rapidement les clés associées à des tâches actives ou en attente de validation par un membre de l'équipe. Elle constitue un atout précieux pour le suivi de l'avancement des traductions et la gestion collaborative des projets.
8. **Développer/Réduire les dossiers.**
Ce bouton propose deux modes de navigation pratiques dans l'arborescence :
- développer l'ensemble des dossiers pour une vue d'ensemble exhaustive
- ou les réduire "jusqu'à la sélection active" pour vous concentrer sur une section spécifique sans distraction.
