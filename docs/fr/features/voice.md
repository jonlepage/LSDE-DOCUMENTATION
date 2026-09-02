---
title: "Voix"
description: "LSDE intègre une fonctionnalité permettant de gérer la bande-son de votre projet, synchronisée avec vos dialogues."
section: features
outline: [2, 3]
---

# Voix

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-1.webp" />

LSDE intègre une fonctionnalité permettant de gérer la bande-son de votre projet, synchronisée avec vos dialogues.

## Prérequis {#prerequisites}
Vous devrez d'abord obtenir une clé API [Elevenlabs](/fr/interface/global-settings#llm-pour-les-voix).
Elevenlabs propose actuellement un plan mensuel gratuit, idéal pour tester leur API et découvrir leur expertise.

## Configuration {#configuration}
Pour configurer le système vocal de votre projet, rendez-vous dans [la section de configuration des voix](/fr/interface/project-settings#voices).

1. Définissez le dossier d'exportation des voix, qui seront sauvegardées à chaque enregistrement du projet.
2. Le système permet de nommer les fichiers de sortie.
Cette option adapte les noms aux besoins de votre moteur de jeu ou de votre projet.
Un glisser-déposer ajuste l'ordre des étiquettes.

---

## Associer des variables (automatique) {#associate-variables-auto}
<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-2.webp" />

Cet exemple montre comment configurer le système vocal pour un JRPG avec plusieurs personnages par dialogue, où votre moteur de jeu doit les extraire.

1. Sélectionnez un groupe de variables pour vos interlocuteurs.
2. Cochez l'option *Plusieurs interlocuteurs par dialogue*.
3. Une section s'ouvrira pour configurer une expression régulière (`regex`) avec obligatoirement 1 groupe :
- Groupe `id`: Capture la valeur du `tag` à rechercher dans les variables du groupe sélectionné.
- Groupe `value`: Texte capturé pour le groupe `id`.

::: tip Note
Optionnel, car vous pouvez rédiger le texte. Ce groupe maximise l'automatisation et réduit la charge de travail.
:::

4. Vous verrez alors toutes les variables du groupe configuré, avec leur icône respective si renseignée.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-3.webp" />

## Tester votre `regex` {#test-regex}
Vous pouvez tester votre `regex` pour mieux la comprendre sur [regexr](https://regexr.com).
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```
1. En sélectionnant par exemple la deuxième capture.
2. Accédez aux 'Détails'.
3. Vous constaterez que :
- Le groupe 1 capture le `tag id` de votre personnage *a1*.
- Le groupe 2 capture le reste du texte pour l'`id` *a1*.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-4.webp" />

## Les variables {#variables}
Dans [la section des variables](/fr/interface/project-settings#les-variables) :

1. Dans le groupe `ACTORS` préalablement créé.
2. Cette liste correspondra à celle [vue précédemment](/fr/features/voice#associer-des-variables).
3. Renseigner l'apparence facilite grandement l'organisation et la validation des dialogues et de la personnalité des personnages.

::: tip Note
Notez que vous pouvez modifier ces informations à tout moment ou les compléter ultérieurement.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-5.webp" />

## Configurer le personnage {#configure-character}
Revenons à la [configuration des voix](/fr/features/voice#associer-des-variables).

1. Associez un ID de voix à votre variable.

::: tip Note
Les ID de voix sont créés sur la plateforme Elevenlabs. Votre compte Elevenlabs inclut déjà des modèles par défaut.
:::
2. Vous pourrez aussi tester et ajuster le générateur de voix.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-6.webp" />

## Créer un ID de voix {#create-voice-id}
Sur votre profil [elevenlabs](https://elevenlabs.io/app/voice-lab) :

1. Créez une nouvelle voix personnalisée.
LSDE supporte tous les modèles de l'API. Je recommande fortement, à l'heure actuelle, le modèle `V3` pour sa gestion des tags émotionnels, offrant un meilleur contrôle narratif.
2. Après création, allez dans la section de vos voix.
3. Vérifiez la présence de l'ID (ex: *Lia Sun-berry*, personnage principal de [FCT7O](https://lepasoft.com/fr/games/fanatic-cardboard-f7o)).

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-7.webp" />

## Générer un texte vocal {#generate-voice-text}
Une fois l'ID renseigné, pour visualiser ou générer des textes vocaux, ouvrez la fenêtre du [gestionnaire de voix](/fr/interface/voice-manager).

1. Sélectionnez une clé dans l'arborescence.
Ne choisissez pas un dossier, car les textes vocaux y sont affichés en lecture seule.
2. La `regex` capturera les personnages du dialogue et proposera une interface de génération vocale.
3. Lors de la génération, le texte reçoit une *signature* à l'instant T. Si le texte change sans modifier l'ordre des personnages, une alerte vous invitera à vérifier la nécessité de régénérer la voix.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-8.webp" />

## Associer des variables (manuellement) {#associate-variables-manual}
Pour les scénarios avec un seul personnage par dialogue (sans interactions), typiques des projets simples.
1. Vous pouvez décocher la case *Plusieurs interlocuteurs par clé*.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-9.webp" />

## Configurer les métadonnées {#configure-metas}
Associez à chaque dialogue le ou les personnages dont vous souhaitez générer les voix.

1. Sélectionnez la clé du dialogue ciblé.
2. Cochez chaque acteur à gérer pour ce dialogue.

### Pourquoi plusieurs personnages ? {#why-multiple-characters}
Cela peut être utile pour des dialogues génériques, comme une phrase de bienvenue réutilisée par plusieurs PNJ aléatoires avec des personnalités ou sexes différents.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-10.webp" />

## Réorganisation {#reorganization}
1. Toujours sur une clé, et non un dossier.
2. Le gestionnaire de voix peut signaler un problème de réorganisation.
Dans cet exemple, nous sommes passés d'une assignation automatique de plusieurs personnages à un système manuel.

::: tip Note
Si le système détecte des changements majeurs dans l'ordre ou le nombre de personnages, vous devrez réorganiser manuellement chaque instance de voix déjà générée.
:::

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-11.webp" />

Il vous suffit de glisser-déposer chaque fichier vocal de dialogue vers le personnage associé, déclaré dans les métadonnées ou via le système d'assignation automatique.
