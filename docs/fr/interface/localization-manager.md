---
title: "Localisation"
description: "Ce module obligatoire vous permet de configurer les langues et les espaces de noms de votre projet."
section: interface
outline: [2, 3]
---

# Localisation

Ce module obligatoire vous permet de configurer les langues et les espaces de noms de votre projet.
Vous avez la possibilité d'utiliser l'importation intelligente ou de configurer manuellement le service de langues.

::: tip Note
LSDE prend en charge les codes ISO 639-1 ou les combinaisons ISO 639-1 - ISO 3166-1. [Pour plus de détails sur les spécifications, cliquez ici](/fr/getting-started/introduction#i18n-key-convention)
:::

## Interface {#interface}
<DocImage src="/doc/lsde/doc-lsde-ui-localisations.webp" />

L'interface propose les sections suivantes :
0. **Importation intelligente** (optionnel)
Importez une structure de dossiers déjà existante, organisée de la manière suivante :
`../folder/lang/namespace.json` => `../locales/en/main.json`

### Configuration des langues {#setup-languages}
- **Configuration des codes `ISO 639-1` et `ISO 3166-1`**
Les codes de langue peuvent être concaténés selon deux spécifications, par exemple : `en` ou `en-US`, `en-GB`.
Ces codes `ISO 639-1 - ISO 3166-1` correspondent à la langue suivie de sa localisation.

**Cette section permet de :**
1. Ajouter/Supprimer des langues
Ouvre une nouvelle boîte de dialogue dans laquelle vous pouvez utiliser un gestionnaire pour trouver et/ou supprimer les langues du projet.
2. Définir la langue primaire
Cette langue est utilisée comme source dans certaines tâches et est obligatoire pour travailler avec le logiciel.
4. Visualiser, supprimer ou réorganiser les langues dans l'ordre souhaité.

::: tip Note
(C'est l'ordre de rendu dans l'éditeur.) C'est la langue primaire du projet.
:::

### Les espaces de noms {#namespace}
3. C'est l'endroit pour créer des espaces de noms.
Un espace de noms représente simplement **le nom d'un fichier contenant les clés**. C'est aussi simple que cela.
Exemple : `locales/en-GB/main.json`. Ici, l'espace de noms sera `main` et les clés du fichier auront des chemins relatifs.

::: tip Note
Vous pouvez redéfinir les dossiers des espaces de noms ou les supprimer.
:::
