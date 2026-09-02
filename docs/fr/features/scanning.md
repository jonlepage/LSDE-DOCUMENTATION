---
title: "Scanning"
description: "Dans votre projet 'LSDE', la configuration du scanner de codebase s'effectue via la section des Patterns."
section: features
outline: [2, 3]
---

# Scanning

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-1.webp" left />

Dans votre projet 'LSDE', la configuration du scanner de codebase s'effectue via [la section des Patterns](/fr/interface/project-settings#patterns).

## Créer un pattern {#create-pattern}
Après avoir créé une nouvelle instance de pattern (initialement vide, par exemple) :
1. Renseignez l'expression régulière (*Regex*) qui servira à capturer les groupes dans votre codebase.
2. Vous devez obligatoirement renseigner cette section en indiquant le groupe qui capture votre clé 'i18n'.

::: tip Note
Vous devez avoir au moin 1 groupe de capture. [En savoir plus sur les groupes regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-2.webp" />

### Afficher les clés i18n {#see-i18n-keys}
Une fois le *Regex* créé, la synchronisation des résultats est en temps réel.
1. Ouvrez la fenêtre du scanner de code pour observer ses résultats en temps réel.

Si aucune clé n'est sélectionnée dans l'arborescence, aucun filtre ne sera appliqué et le scanner affichera tous les résultats.

---

<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-3.webp" />

En revanche, si vous sélectionnez une clé :
Le système filtrera les clés parentes et voisines non liées.
Grâce à une propagation hiérarchique, la sélection d'un dossier entraîne l'affichage de toutes ses clés enfants.
Exemple :
Sélection du dossier :
`A.B.C`
Toutes les clés contenant au moins ce groupe seront également affichées :
`A.B.C.d`
`A.B.C.d.e.f`

1. Pour afficher les clés capturées que 'LSDE' ne parvient pas à associer (les clés manquantes), cochez cette option. Elle permet également de filtrer les clés existantes.

::: tip Note
Si cette option est désactivée, 'LSDE' affiche les clés manquantes trouvées dans votre code source, mélangées aux clés existantes.
:::

---

## Tester son pattern {#test-pattern}
<DocImage src="/doc/lsde/doc-lsde-features-howtoscan-5.webp" />

Pour vérifier que votre pattern se comporte comme attendu, ouvrez l'onglet *Test*. Collez-y du code source de votre projet pour observer les captures effectuées.

### Comprendre son Regex {#understand-regex}
Pour comprendre votre *Regex* et ses groupes, utilisez un outil comme [regexr](https://regexr.com).
1. Copiez et collez votre *Regex* dans l'emplacement dédié.
```text
[^\\\\w_\\\\-\\\\$]t\\\\(\\\\s*(?:['\\\])?(?:([^\\\\s:'\\\)]+):)?([^\\\\s'\\\),]+)(?:['\\\])?\\\\s*(?:,\\\\s*(\\\\{[\\\\s\\\\S]*?(?:defaultValue\\\\s*:\\\\s*(['\\\`])((?:\\\\\\\\.|(?!\\\\4)[\\\\s\\\\S])*?)\\\\4)[\\\\s\\\\S]*?\\\\}|\\\\{[\\\\s\\\\S]*?\\\\})\\\\s*)?\\\\)
```
2. Collez du code source de votre projet contenant les clés à capturer (issues de votre framework ou de votre moteur de texte).
3. Cliquez sur une capture pour l'activer.
4. Sélectionnez ensuite 'Détail'.
5. Identifiez l'index du groupe dans lequel votre *Regex* place la capture souhaitée.

Avec cette *Regex*, vous constaterez qu'elle capture votre clé dans le groupe 2. Il vous faudra alors indiquer à 'LSDE' que la clé se situe dans ce groupe, comme illustré sur l'image précédente.
Le système pourra ensuite exécuter cette *Regex* et utiliser cette capture pour divers services de télémétrie.
