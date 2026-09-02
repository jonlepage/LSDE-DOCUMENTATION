# LSDE Documentation (V2)

Documentation officielle de **LS-Dialog Editor**, générée avec [VitePress](https://vitepress.dev)
et déployée sur GitHub Pages. 10 langues, contenu 100 % Markdown.

## Démarrage

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # docs/.vitepress/dist
npm run preview    # prévisualise le build
```

## Où vit quoi

| Quoi | Où | Rôle |
|---|---|---|
| **Structure** (sections, pages, ordre, langues, liens produit) | `docs/.vitepress/data/structure.json` | Source de vérité. Génère la sidebar, la nav, les accueils. |
| **Libellés** de la sidebar par langue | `docs/.vitepress/data/labels.json` | Généré par `npm run import` — ne pas éditer à la main. |
| **Contenu** | `docs/<lang>/<section>/<page>.md` | Un fichier Markdown par page et par langue. |
| Accueils | `docs/<lang>/index.md` | Générés par `npm run home`. |
| Sélecteur de langue racine | `docs/index.md` | Redirige vers la langue du navigateur. |
| Thème | `docs/.vitepress/theme/` | `vars.css` = palette, `custom.css` = habillage, `components/` = Vue. |
| Images | `docs/public/doc/lsde/` | Référencées en `/doc/lsde/<nom>.webp`. |

## Ajouter une page

1. Ajouter l'entrée dans `structure.json` (section → `pages`) avec un `slug` kebab-case.
2. Créer `docs/<lang>/<section>/<slug>.md` pour chaque langue :

```md
---
title: "Mon titre"
description: "Une phrase pour le SEO (≤ 155 caractères)."
---

# Mon titre

## Sous-titre {#ancre-stable}
Texte…
```

3. Ajouter le libellé dans `labels.json` (ou relancer `npm run import` si la page vient du V1).

Les ancres `{#…}` sont **identiques dans toutes les langues** : c'est ce qui permet de
changer de langue en restant sur la même section.

## Syntaxe utile dans le Markdown

```md
::: tip Note
Une note.
:::

::: warning Attention
Un avertissement.
:::

<DocImage src="/doc/lsde/doc-lsde-ui-tree.webp" alt="Légende optionnelle" />
<DocImage src="/doc/lsde/lsde-banner.webp" h="40" icon left />

<YouTube id="0cJjxtI088Q" />
```

`DocImage` : `icon` = image décorative en ligne (sans cadre ni zoom), `small` = largeur réduite,
`left` / `end` = alignement. Sans `icon`, l'image est encadrée et s'agrandit au clic.

## Migration depuis le site V1 (LEPASOFT-WEB)

```bash
npm run sync   # = import (JSON i18n → Markdown) + home (accueils)
```

`scripts/import-from-i18n.ts` lit `LEPASOFT-WEB/src/locales/<lang>/software.json`, convertit
le dialecte maison (`''italique''`, ` ``code`` `, `## [Titre](ancre)`, `<img src=x />`, `$t(...)`)
en Markdown standard et rewrite les liens internes. **À n'utiliser que tant que le V1 reste la
source** : dès que le contenu est édité ici, ne plus relancer l'import (il écraserait les .md).

## Déploiement

Push sur `main` → `.github/workflows/deploy.yml` build et publie sur GitHub Pages.
Activer une fois : *Settings → Pages → Source : GitHub Actions*.

Le site est servi sous `/<nom-du-repo>/` ; la variable `DOCS_BASE` est injectée par le workflow.
Mettre à jour `product.siteUrl` dans `structure.json` (utilisé pour `canonical` et `hreflang`).
