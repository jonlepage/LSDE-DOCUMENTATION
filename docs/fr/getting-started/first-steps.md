---
title: "Premier pas"
description: "Lors du premier lancement du logiciel, vous serez invité à démarrer votre période d'essai ou à saisir votre clé de licence."
section: getting-started
outline: [2, 3]
---

# Premier pas

## Démarrage {#getting-started}
Lors du premier lancement du logiciel, **vous serez invité à démarrer votre période d'essai** ou à saisir votre clé de licence.
- **Période d'essai :**
La période d'essai vous permet de tester le logiciel avec toutes ses fonctionnalités pendant une durée déterminée.

::: tip Note
Durant la phase bêta, la période d'essai est illimitée et sera réinitialisée après cette période.
:::

- **Licence :**
Si vous disposez d'une licence, saisissez-la pour débloquer le logiciel.

::: tip Note
Votre clé vous aura été envoyée par courriel lors de la transaction.
Vous ne pouvez pas achetez de cle durant la duree de la beta du logiciel.
:::

---

<DocImage src="/doc/lsde/doc-lsde-startscreen.webp" />

## Choix des langues d'interface {#interface-language-choice}
LSDE propose 3 options principales au démarrage :

## Charger un projet {#load-project}
<DocImage src="/doc/lsde/lsde-banner.webp" h="30" left icon />

Vous pouvez sélectionner un fichier portant l'extension `.lsde`.

::: tip Note
Si les associations de fichiers sont installées, un double-clic sur un fichier .lsde dans votre explorateur permet d'ouvrir le projet directement.
:::

## Nouveau projet {#new-project}
Cette option vous permet de créer un nouveau projet en préconfigurant les paramètres pour certains types de projets.
Vous pouvez également y préinstaller les langues les plus populaires sur Steam.
Notez que ces préconfigurations ne sont pas définitives ; elles peuvent être modifiées à tout moment au sein du projet.

::: tip Note
Sauvegardez vos projets dans un dossier supporté par Git ou un autre système. Les fichiers .lsde ne contiennent aucune donnée sensible.
:::
En bas de l'écran, vous trouverez également une liste des projets récemment ouverts, vous permettant de reprendre rapidement une session de travail.

## Projets de démonstration {#demo-project}
Quelques projets de démonstration sont inclus avec le logiciel. Ils vous permettent d'observer certaines fonctionnalités en action ou de vous inspirer pour votre workflow.

---

<DocImage src="/doc/lsde/doc-lsde-start-flashicon.webp" />

# Configuration obligatoire {#mandatory-configuration}
Afin de profiter pleinement de LSDE et de démarrer votre travail, vous devrez obligatoirement effectuer la première étape de configuration initiale.
Cette étape est rapide et essentielle pour débloquer toutes les fonctionnalités du logiciel spécifiques à votre projet.

L'icône de la fenêtre de gestion des localisations, située en haut à droite dans le menu des fenêtres rapides, clignotera pour vous signaler que des informations importantes sont requises.

Une fois dans la fenêtre de gestion des localisations, vous devrez soit :
- Importer un dossier existant de votre projet qui contient déjà des fichiers et répertoires de langues.
- Ou bien ajouter manuellement des langues et un espace de noms (`namespace`).

Ensuite, sélectionnez la langue principale du projet, et vous serez prêt à utiliser LSDE.
Pour plus d'informations sur le gestionnaire de localisations, [consultez cette section](/fr/interface/localization-manager)
