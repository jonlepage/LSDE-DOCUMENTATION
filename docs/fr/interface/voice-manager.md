---
title: "Gestion Voix"
description: "Ce module permet de gérer l'intégration de narrations vocales dans vos jeux et projets narratifs."
section: interface
outline: [2, 3]
---

# Gestion Voix

Ce module permet de gérer l'intégration de narrations vocales dans vos jeux et projets narratifs.
Pour chaque clé de votre projet, vous pouvez générer et associer une version vocale correspondante.
Vous trouverez [un guide complet ici](/fr/features/voice) en complément de cette page.

---

## Comment ça marche ? {#how-it-works}
LSDE supporte deux approches, abrégées `SAD` et `MAD`.
1. **SAD : "Single Actor Dialog"**
Dans ce paradigme, vous pouvez associer manuellement un interlocuteur spécifique à chaque clé de dialogue via ses métadonnées.

::: tip Note
Bien que le mode SAD soit principalement conçu pour un acteur par clé, il est possible d'associer plusieurs profils vocaux à une même clé via les métadonnées, par exemple pour des messages génériques nécessitant différentes intonations ou voix.
:::
Exemple d'un dialogue géré en mode **SAD** avec deux clés distinctes :
```text
salut ca va ?
```
```text
oui ca va super
```
2. **MAD : "Multi Actor Dialog"**
Dans ce paradigme, plusieurs interlocuteurs peuvent intervenir au sein d'une même clé de dialogue.
Leurs répliques sont identifiées par des balises (tags) spécifiques qui segmentent le texte.
L'ordre d'intervention est séquentiel.
Pour extraire les identifiants des personnages et leurs textes associés, vous devez définir une expression régulière (regex).

::: tip Note
Dans certains projets complexes, il peut être judicieux de regrouper plusieurs dialogues dans une seule clé et d'en gérer la séparation en post-production, directement dans le moteur de jeu.
:::
Exemple pour un dialogue **MAD** :

<DocImage src="/doc/lsde/doc-lsde-features-howtorendering-0-animate.webm" />

```text
{lia} salut ca va ?
{boo} oui ca va super
{lia} Ho !
{boo} quoi !? pourquoi cette tete ?
{lia} ...
{sam} ... hey vous 2 !
```

::: tip Note
Cette méthode réduit considérablement le nombre de clés à gérer.
:::
Pour l'exemple ci-dessus, où chaque réplique aurait sa propre clé, et avec une traduction en 10 langues, cela représenterait plus de 60 clés.
Gérer chaque intervention individuellement deviendrait rapidement ingérable pour un RPG contenant des centaines d'interactions de ce type.

## Prérequis {#prerequisites}
Pour générer les voix, vous devez disposer d'un compte et d'une clé API [ElevenLabs](https://elevenlabs.io).

::: tip Note
ElevenLabs propose une clé API gratuite avec un quota de crédits mensuels, vous permettant de tester leur technologie.
:::

<DocImage src="/doc/lsde/doc-lsde-ui-voicemanager.webp" />

## Interface {#interface}
L'interface affiche une liste de langues, les profils de personnages, les outils de génération vocale et l'historique des voix créées.
0. **Historique**
Liste de toutes les instances audio créées pour la clé sélectionnée.
1. **Conteneur de langue**
Ces onglets regroupent les personnages par langue.
2. **Conteneur des interlocuteurs**
Liste des entités (personnages) auxquelles une narration vocale peut être attribuée. En mode \MAD\, leur ordre correspond à celui de leur apparition dans le texte source.
3. **Texte**
Le texte capturé servant de base pour la narration vocale générée. Il est recommandé d'y modifier la ponctuation ou d'y ajouter des indications d'émotions pour influencer la voix, sans altérer le texte source original. Une alerte vous sera affichée si le texte source est modifié.
4. **Amélioration**
Ce bouton permet d'améliorer le texte destiné à la narration vocale en se basant sur la personnalité du personnage et le contexte définis dans les métadonnées de la clé.

::: tip Note
Cette fonction est uniquement disponible pour les modèles V3 d'ElevenLabs.
:::
5. **Générateur**
Ce bouton génère une voix et l'ajoute à l'historique.
6. **Réinitialiser**
Ce bouton annule les modifications apportées au texte et restaure la version originale capturée.
7. **Valider une voix**
Permet de valider une voix.
Les voix validées sont conservées indépendamment de l'historique et seront exportées conformément aux critères définis lors de la sauvegarde du projet.

::: tip Note
Il est possible de valider plusieurs voix pour un même texte et un même personnage.
:::
Les noms de fichiers seront alors automatiquement incrémentés.
Cela peut être utile, par exemple, pour nuancer les voix dans un moteur de jeu utilisant des graines aléatoires (random seeds).
8. **Signature de génération**
Ces informations, utilisées lors de la génération, servent de signature pour tracer et comprendre l'origine de chaque voix.

::: tip Note
Par exemple, si vous ajoutez un nouveau personnage ou le déplacez dans le texte source, vous pourrez réaffecter les voix existantes à l'entité, même si son emplacement a changé.
:::
9. **Lecteur audio**
Permet de lancer la lecture de la voix et de visualiser son pitch afin de le comparer à l'ambiance générale souhaitée.

## Créer des voix {#create-voices}
### Avec SAD {#with-sad}
Vous devez avoir configuré au moins un profil vocal et activé le gestionnaire de voix dans les paramètres du projet.
La configuration des acteurs (ou entités) associés à la clé et de leurs profils vocaux s'effectue dans la fenêtre des métadonnées.
### Avec MAD {#with-mad}
Vous devez avoir configuré au moins un profil vocal et activé le gestionnaire de voix dans les paramètres du projet.
Activez ensuite le mode *MAD* et rédigez l'expression régulière *(regex)*.
Celle-ci doit capturer deux groupes obligatoires : l'identifiant de l'acteur et son texte correspondant.
Définissez l'index de ces groupes de capture dans les paramètres d'association vocale.

<DocImage src="/doc/lsde/doc-lsde-ui-voicereorder.webp" left />

## Corriger les problèmes {#fix-issues}
Générer les voix avant la finalisation du texte est une pratique à éviter.
Cependant, si cela se produit, LSDE vous offre des outils pour corriger et réorganiser les voix, évitant ainsi de tout refaire.
Lorsque vous modifiez le texte d'un dialogue après que des voix ont été générées, leur signature devient incompatible, et il vous sera demandé de les revalider.
En mode **MAD**, si vous déplacez, ajoutez ou supprimez des personnages, vous devrez également réaffecter les instances vocales déjà générées.

::: tip Note
La réaffectation s'effectue dans la langue native du projet ; les autres langues seront automatiquement réorganisées grâce à leur signature d'origine.
:::

Retrouvez le [guide complet ici](/fr/features/voice).

---
