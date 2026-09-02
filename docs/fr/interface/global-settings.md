---
title: "Config Global"
description: "C'est ici que vous pouvez configurer les paramètres globaux du logiciel LSDE."
section: interface
outline: [2, 3]
---

# Config Global

C'est ici que vous pouvez configurer les paramètres globaux du logiciel LSDE.
Ces paramètres seront partagés avec tous vos projets.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-typo.webp" />

## Typographie {#typography}
La typographie affecte principalement les zones de texte de l'éditeur et certains éléments dans les options des notes.
L'interface de LSDE possède un design UI/UX partiellement personnalisable, mais certains aspects restent fixes pour des raisons de conception.
Seules les boîtes de dialogue peuvent être adaptées à votre thème préféré.

::: tip Note
Cette fonctionnalité pourrait évoluer avec le temps si elle est fortement demandée.
:::
1. **font size** : taille du texte dans l'éditeur et autres zones de saisie.
2. **font spacing** : espacement entre les lettres dans l'éditeur.
3. **police de charactere** : police de caractères (font-family) utilisée dans l'éditeur de texte.
4. **haute des ligne** : modifie la hauteur des lignes dans l'éditeur.
5. **couleur** : couleur du texte dans l'éditeur.
6. **epaisseur** : permet de rendre le texte plus épais (gras), si la police de caractères le permet.
7. **couleur arriereplan** : définit la couleur de fond d'un éditeur de texte, qu'il soit actif (focus) ou inactif.
8. **direction du texte** : définit les langues dont l'affichage doit se faire de droite à gauche (RTL).

---

## Wrappers {#wrappers}
<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-wrappers.webp" />

Les wrappers sont des comportements d'enrobage que l'on peut ajouter au système de sélection.
Lorsque vous sélectionnez du texte dans l'éditeur et utilisez un raccourci clavier, vous avez la possibilité de l'enrober avec des symboles.
Ce comportement, très populaire dans les environnements de développement (IDE), est également pris en charge par LSDE.
1. Touches qui déclencheront l'enrobage lorsque du texte est sélectionné.
2. Caractères à insérer avant et après le texte sélectionné.
3. Nombre d'itérations possibles avant la suppression de l'enrobage du texte.
4. Si activé, supprime les espaces au début et à la fin du texte sélectionné pour les replacer à l'extérieur de l'enrobage.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-flags.webp" />

## Editeur {#editor}
Cette section regroupe diverses fonctionnalités (flags) permettant d'enrichir votre expérience avec $t(main.words.lsde-title).
Pour en savoir plus, il vous suffit de survoler chaque option avec votre souris pour afficher une infobulle détaillée sur sa fonction.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-tasks.webp" />

## Tasks {#tasks}
La section Tâches vous permet de gérer les tâches natives de LSDE.
Vous y trouverez les règles (rules) et les directives envoyées aux LLM.

- Les **règles (rules)** sont les instructions générales et importantes qui s'appliquent à toutes les tâches.
- Les **tâches (tasks)** sont des sous-règles plus spécifiques, envoyées au LLM pour des opérations précises.

Découvrons l'interface des tâches natives.

<!-- TODO image introuvable : configGlobTaks -->

1. Vous pouvez désactiver les tâches inutiles pour vos projets (par exemple, désactiver la tâche des menus).
2. Un bouton pour restaurer la directive native.
3. Un bouton pour copier la directive native.

::: tip Note
Non disponible dans la version d'essai de LSDE.
:::
4. Le nombre de mots et une estimation du coût en tokens.
5. Vous pouvez à tout moment exporter un fichier JSON pour analyser un exemple de requête envoyée au LLM et affiner votre prompt engineering.

::: tip Note
Notez qu'il n'est pas recommandé de modifier les règles et les tâches natives de LSDE.
D'autres solutions sont à privilégier, comme le [fine-tuning](/fr/interface/fine-tuning) ou [les directives de projet](/fr/interface/project-settings#llm-directive).
:::

---

## Authentification {#authentication}
Cette section est réservée à la configuration des LLM, qu'ils soient gratuits ou accessibles via vos propres clés API.
Vous pouvez y saisir les clés API de vos services LLM préférés et les sécuriser.

::: tip Note
Notez que certains fournisseurs, comme Gemini ou ElevenLabs, proposent désormais des clés API gratuites avec des quotas d'utilisation mensuels ou hebdomadaires.
:::

Pour les LLM de traitement de texte, 6 fournisseurs sont disponibles.
### Pour les LLM de traitement de texte {#text-processing-llm}
- Anthropic
- OpenAI
- Mistral
- Gemini
- Deepseek

### LLM pour les voix {#voice-llm}
ElevenLabs vous est proposé (il offre aussi des clés gratuites avec des quotas mensuels).

::: tip Note
vous devez creer vos profiles vocal sur leur outils
:::

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-auth.webp" />

Il vous suffit de cliquer sur `temp-mail` ou `10minmail` pour obtenir une adresse temporaire, puis de cliquer sur `open` pour enregistrer cet e-mail.
La session sera ainsi sauvegardée pour les jours suivants, vous permettant de profiter de GPT et des tâches en lot.
Vous serez également soumis à un quota (actuellement, à la date du 25 novembre 2025, environ 70 tâches par heure), après quoi il faudra patienter.

Lorsque le compte sera supprimé par OpenAI, il faudra répéter le processus.

::: tip Note
Notez que ce service ne devrait être utilisé que pour des tests basiques et non pour la production. Le modèle gratuit de GPT est de qualité inférieure et ne prend pas bien en charge les fonctionnalités d'affinement post-réponse proposées par LSDE.
:::

### L'interface {#interface}
0. Mémoriser vos clés API pour éviter de les saisir à chaque démarrage du logiciel.

::: tip Note
les cle son encoder mais reste exposer au utilisateur malveilant
:::
1. Vous pouvez crypter vos clés de manière sécurisée via le système d'encodage du logiciel.

::: tip Note
Vos clés seront chiffrées avec un identifiant unique de votre machine et de votre installation. Elles ne pourront pas être exécutées ailleurs que sur cette instance de LSDE.
:::
2. Vous pouvez récupérer votre clé cryptée ici et l'utiliser dans les champs prévus à la place des clés API standards.
3. C'est ici que vous devez insérer les clés API de vos fournisseurs.
4. Un bouton d'accès rapide au site du fournisseur pour consulter votre consommation.
5. Sélection des modèles disponibles pour le fournisseur choisi.
6. Vous pouvez ajouter vos modèles préférés en favoris.

::: tip Note
Les modèles favoris sont accessibles dans les onglets LLM du pied de page du logiciel. Un clic droit permet de basculer rapidement vers l'un d'eux.
:::

### LLM gratuit {#free-LLM}
LSDE vous offre également une méthode gratuite pour utiliser GPT via un processus spécial.
Vous souhaiterez généralement utiliser ce LLM pour effectuer des tests ou des mini-tâches sans frais.
7. Vous pouvez créer un compte ChatGPT gratuit pour tester les fonctionnalités du logiciel.
Deux fournisseurs d'e-mails temporaires vous sont suggérés.

::: tip Note
N'utilisez pas votre compte officiel au risque de le voir clôturé en cas d'utilisation intensive.
:::
8. Cliquez ici pour créer un compte GPT avec votre e-mail temporaire.

::: tip Note
Vous pouvez généralement effectuer un traitement par lot d'environ 70 instances par heure.
:::

::: tip Note
Certains services comme Google AI offrent maintenant des clés API gratuites avec un nombre limité de requêtes par heure.
:::
Vous pouvez également profiter de leurs services.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-accessibility.webp" />

## Accessibility {#accessibility}
Cette section vous permet de configurer les langues de l'interface ainsi que des filtres d'affichage, utiles si vous rencontrez des problèmes avec l'étalonnage de vos écrans ou si vous êtes atteint d'une forme de daltonisme.

1. Sélection des langues de l'interface : comme sur l'écran de démarrage, vous pouvez réassigner vos 2 langues préférées.
Il vous suffira ensuite d'appuyer sur la touche [F1] pour basculer instantanément entre les deux interfaces.
Cette fonctionnalité permet, par exemple, de travailler dans votre langue natale et de basculer à tout moment vers une autre langue pour communiquer avec un collègue ou consulter une documentation.
2. Vous pouvez changer le contraste du logiciel ici.
3. Ainsi que la teinte (hue), qui permet de gérer le thème de couleur si vous avez un handicap visuel.

---
