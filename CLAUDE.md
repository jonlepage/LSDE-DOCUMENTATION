# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Documentation VitePress de **LS-Dialog Editor** (LSDE), 10 langues, déployée sur GitHub Pages.
Le [README](README.md) couvre l'usage courant : où vit quoi, ajouter une page, syntaxe Markdown
disponible, déploiement. Ce fichier documente les invariants d'architecture et les pièges.

## Commandes

```bash
npm run dev         # serveur de dev
npm run build       # build de prod dans docs/.vitepress/dist
npm run preview     # sert le build
npm run typecheck   # tsc --noEmit (config.ts, thème, scripts)
npm run sync        # import + home : régénère TOUT le contenu depuis LEPASOFT-WEB
```

Pas de tests. La validation avant commit est `npm run typecheck && npm run build` — le build
échoue sur les liens morts, ce qui sert de contrôle d'intégrité du contenu.

Pour reproduire le déploiement en local : `DOCS_BASE=/LSDE-DOCUMENTATION/ npm run build`.

## Le pipeline de génération

Trois entrées humaines, tout le reste est dérivé :

```
structure.json  ──┬─→ import-from-i18n.ts ─→ docs/<lang>/**/*.md  +  labels.json
(écrit à la main) │                                                      │
                  ├─→ gen-home.ts ────────→ docs/<lang>/index.md         │
                  └─→ config.ts ───────────→ sidebar, nav, locales ←─────┘
```

- **`docs/.vitepress/data/structure.json`** est la source de vérité : sections, pages, ordre,
  langues, liens produit. Chaque page y porte un `slug` (URL), un `legacyId` (identifiant V1,
  sert à réécrire les liens internes), une clé `i18n` (chemin dans le JSON source) et un `label`
  anglais de repli.
- **`docs/.vitepress/data/labels.json`** est **généré** par l'import. Ne jamais l'éditer :
  le prochain `npm run import` l'écrase.
- **`config.ts`** ne contient aucune liste de pages en dur. Il lit les deux JSON et construit
  les 10 locales par boucle.

### Le couplage avec LEPASOFT-WEB

`scripts/import-from-i18n.ts` lit le projet frère `../../LEPASOFT-WEB` pour ses locales et ses
images, surchargeable par la variable d'environnement `LSDE_WEB`. L'import est un outil de
migration ponctuel, pas une étape de build : le workflow GitHub Actions ne l'exécute pas, et il
n'a pas accès à ce projet. Dès qu'un `.md` est édité ici, relancer `npm run import` écrase la
modification. Vérifier ce point avant de proposer `npm run sync`.

## Le convertisseur (import-from-i18n.ts)

Le V1 stockait du Markdown dans des strings JSON i18next, avec un dialecte maison parsé par
`Trans2.tsx` (`''italique''`, `` ``code`` ``, `## [Titre](ancre)`, `<img src=x h=80 icon />`,
`<yt src=ID />`, `$t(ns:clé)`). Le convertisseur le normalise en Markdown VitePress.

Deux points à ne pas casser en le modifiant :

- **Le code est mis à l'abri avant toute autre passe.** Les blocs ``` et le code inline sont
  remplacés par des jetons `\0n\0` puis restaurés en fin de course, sinon les règles d'emphase et
  d'images corrompent le contenu des exemples.
- **Les ancres `{#…}` sont identiques dans toutes les langues.** C'est ce qui permet de changer de
  langue en restant sur la même section. `dedupeAnchors` suffixe les doublons en `-2`, `-3`, car
  le V1 réutilisait parfois le même identifiant dans une page.

Une page absente d'une locale retombe sur le contenu anglais, précédé d'un bandeau `::: warning`.

## Le piège des locales sources

Dans les 9 locales non-françaises, plusieurs `title` valent `""` (section Moteurs, Blueprint,
MCP Bridge), et les textes marketing `FeaturesSection.*` n'existent qu'en français.

**Ne jamais tester ces champs avec `??` seul** : la chaîne vide passe et produit des entrées de
sidebar sans nom. Les deux scripts utilisent un helper `str()` qui renvoie `undefined` sur une
chaîne vide, puis une cascade : valeur locale → valeur anglaise → `label` du manifeste →
`humanize(slug)`.

## Mesurer les performances

Ne **jamais** auditer le serveur de dev : il sert du JavaScript non minifié et non regroupé,
ce qui fait chuter le score d'environ 60 points. Auditer le build, dans un profil sans extensions
(Lighthouse signale lui-même leur influence) :

```bash
DOCS_BASE=/LSDE-DOCUMENTATION/ npm run build
DOCS_BASE=/LSDE-DOCUMENTATION/ npx vitepress preview docs --port 5192
CHROME_PATH="C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" \
  npx lighthouse@12 "http://127.0.0.1:5192/LSDE-DOCUMENTATION/fr/" \
  --form-factor=mobile --chrome-flags="--headless=new --disable-extensions"
```

Le `DOCS_BASE` doit être identique au build et au preview, sinon les assets partent en 404 et
la mesure ne veut rien dire. Référence obtenue ainsi : 98 en performance sur mobile bridé,
100 en accessibilité et en SEO.

## Points non évidents de config.ts

- **Les locales ne définissent pas `link`.** VitePress s'en sert pour le logo et pour le sélecteur
  de langue ; le renseigner enverrait le logo sur l'introduction plutôt que sur l'accueil, et
  ferait perdre la page courante en changeant de langue. Régression déjà corrigée une fois.
- **`pageExists` filtre la sidebar** sur l'existence réelle du `.md` : une page listée dans le
  manifeste mais absente d'une langue n'y crée pas de lien mort.
- **`transformPageData`** injecte `hreflang` (10 langues + `x-default`), `canonical` et Open Graph
  sur **toutes** les pages, accueils de langue et racine compris. Ces URL sortent de
  `product.siteUrl` dans le manifeste — à mettre à jour en cas de domaine personnalisé, en même
  temps que `docs/public/robots.txt` qui y renvoie le sitemap.
- **Les liens vers le site vitrine sont localisés** : `product.links.download` et `.product`
  contiennent un gabarit `{lang}`, remplacé par `siteLink()` dans la nav et par `gen-home`.
  lepasoft.com sert ses pages sous `/<lang>/…` et renvoie une 404 sans ce préfixe.
- **`markdown.config`** ajoute `v-pre` au code inline pour que `` `{{variable}}` `` s'affiche
  littéralement au lieu d'être compilé par Vue.
- **`base`** vient de `DOCS_BASE`, injecté par le workflow GitHub Actions ; racine en dev.

## Contrainte de design

**La palette vient du logiciel**, pas d'une invention : `LSDE2/src/ui/theme/darkTheme.const.ts`
et `lightTheme.const.ts` sont la référence, recopiée dans `vars.css`. La mise en page, elle, suit
la documentation LSDEDE (`LS-Dialog-Editor-Engine/lsde-ts/docs/.vitepress/theme/`) : garder le
thème VitePress d'origine et ne changer que le strict nécessaire.

- **Accent framboise `#e0517e`** (`#c33a68` en clair). Aucun indigo ni violet : deux propositions
  successives en violet puis en indigo ont été refusées.
- **Neutres sans teinte bleue**, exigence explicite reprise du logiciel. Les niveaux de gris de
  VitePress sont conservés, seule leur teinte est neutralisée (`#1b1b1f` → `#1b1b1b`).
- **Angles vifs partout.** `border-radius: 1px !important` sur `*` reprend `metrics.radius = 1`.
- **Coloration syntaxique** : thèmes Shiki `dark-plus` / `light-plus`, parce que les six couleurs
  de code du logiciel sont celles de VS Code Dark+.

### Le piège de la barre de défilement

Ne **jamais** déclarer `scrollbar-width` ou `scrollbar-color` en dehors du bloc
`@supports not selector(::-webkit-scrollbar-thumb)` de `custom.css`. Sur Chromium, ces propriétés
standard désactivent tout le style `::-webkit-scrollbar` et réimposent un pouce arrondi, ce qui
contredit la signature carrée. Le logiciel ne les utilise pas non plus.

`vars.css` = tokens, `custom.css` = habillage, `Layout.vue` = slots du hero (grille « blueprint »
et graphe de nœuds, colorés sur les sémantiques du logiciel).

`theme/index.ts` enregistre `DocImage`, `YouTube` et `LangGate` **globalement** : ils sont
utilisables directement dans le Markdown sans import.
