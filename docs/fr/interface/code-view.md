---
title: "Scanner de code"
description: "Le module scanneur de code permet de scanner un projet externe lié à LSDE."
section: interface
outline: [2, 3]
---

# Scanner de code

Le module **scanneur de code** permet de scanner un projet externe lié à LSDE.
En attachant un projet, vous visualisez toutes les clés (existantes ou potentielles) de votre code source.
Cela facilite leur identification, leur création ou leur ajout à l'arborescence des clés.
Le module affiche également toutes les occurrences des clés déjà existantes dans votre codebase.

## Comment ça fonctionne ? {#how-it-works}
Le scanneur s'appuie sur les **patterns Regex** [configurés dans les paramètres](/fr/interface/project-settings#codeview)
Il identifie les clés via des groupes de capture et les affiche sous forme d'instances, classées par fichier, en fonction des clés trouvées dans votre code.
Pour lancer la recherche dans votre codebase, sélectionnez une clé (dossier ou fichier) ; cette sélection sert de filtre initial.

Par exemple, sélectionner la clé `namespace.a.b.c` n'affichera que les correspondances ayant ce préfixe (ex: `namespace.a.b.c.d.e`, mais pas `namespace.a.b.x.d.e`).
Pour visualiser toutes les clés du projet, désélectionnez toutes les clés actives ou, si le projet n'a qu'un seul espace de nom, sélectionnez l'espace de nom racine.

## Langages supportés ? {#supported-languages}
Aucune limitation intrinsèque ne concerne les langages de programmation supportés.
Créez simplement les `Regex` adéquates pour capturer vos clés, quel que soit le langage.
La [configuration des paramètres](/fr/interface/project-settings#codeview) vous permet de définir comment LSDE recherchera les clés de traduction.
Une [section tutoriel complète](/fr/features/scanning) vous guidera pour configurer votre projet LSDE, nécessitant une `Regex` avec **au moins 1 groupe de capture** assigné à l'interpolateur *clé*.

## L'interface {#interface}
Plusieurs outils et configurations sont disponibles pour manipuler les résultats du scanneur.

<DocImage src="/doc/lsde/doc-lsde-ui-codeview.webp" />

1. **Ouvrir/Fermer tous les fichiers** : 
Ouvre ou ferme toutes les sections de références trouvées.

::: tip Note
Peut nuire aux performances si toutes les instances sont ouvertes dans un très grand projet.
:::
2. **Copier au format JSON** : 
Copie les résultats au format JSON dans le presse-papiers, idéal pour un LLM externe (ex: IDE) afin de créer ou vérifier des clés.
**Exemple :**
```json
[
{
"file": "\\scr\\folder\\file1. tsx",
"lines": [
213
]
}
]
```

::: tip Note
Collez [CTRL]+[V] ce résultat dans une requête pour, par exemple, trouver d'autres clés similaires que LSDE pourrait détecter.
:::
3. **Délimiteur de code** : 
Ajuste la quantité de code affichée autour de la clé pour un contexte accru, sans ouvrir l'IDE.
4. **Thème** : 
Permet de choisir un thème proche de celui de votre code source pour une meilleure familiarité visuelle.
5. **Mode RAW** : 
Active les Regex dédiées à la recherche de code **RAW**.
Celles-ci capturent du texte brut potentiellement à convertir ou encapsuler dans votre système de clés.
Double-cliquez sur les résultats pour y accéder et encapsuler ces textes pour traduction, les exposant au scanneur en mode 'Clé manquante'.
6. **Mode Clé manquante** : 
Affiche uniquement les clés manquantes.
Permet de les créer en lot (en les cochant) ou individuellement (clic droit).
7. **Filtrer les clés avec contexte** : 
Permet de filtrer les clés contextuelles, nécessitant souvent une attention particulière ou un traitement ultérieur.

::: tip Note
Fonctionnel si le champ \context\ est renseigné dans la [configuration de votre Regex](/fr/interface/project-settings#codeview).
:::
8. **Filtrer les clés dynamiques** : 
Exclut les clés dynamiques, souvent complexes et parfois inévitables, pour un traitement séparé. LSDE gère leur création via une boîte de dialogue spécifique.

::: tip Note
Fonctionnel si la Regex \clé dynamique\ est renseignée dans la [configuration du scanneur](/fr/interface/project-settings#codeview).
:::
9. **Afficher les ignorées** : 
Affiche les clés ignorées en mode création (ex: faux positifs difficiles à exclure avec vos Regex) si nécessaire.

## Intégration avec votre IDE {#coupling-to-your-ide}
Une fois configurée, un double-clic sur une clé dans la section de code ouvre votre IDE directement à l'emplacement correspondant.
Cela vous permet d'examiner davantage le contexte ou d'effectuer des modifications dans votre codebase selon les besoins.
