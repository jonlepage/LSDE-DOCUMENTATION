import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type DefaultTheme } from 'vitepress';
import structureJson from './data/structure.json';
import labels from './data/labels.json';

type Labels = Record<string, Record<string, string>>;
const L = labels as Labels;

/**
 * Contrat du manifeste. Il est déclaré ici plutôt que déduit du JSON : l'inférence
 * fige le type au chargement, si bien qu'une clé ajoutée au fichier passe pour
 * inexistante tant que le serveur TypeScript de l'éditeur n'a pas redémarré.
 */
export interface DocPage {
  slug: string;
  legacyId: string;
  i18n: string;
  /** Libellé anglais de repli, quand aucune locale ne renseigne le titre. */
  label?: string;
  extraContentKeys?: string[];
}

export interface DocSection {
  id: string;
  icon: string;
  i18nLabel: string;
  label?: string;
  pages: DocPage[];
}

export interface DocStructure {
  product: {
    id: string;
    name: string;
    shortName: string;
    version: string;
    logo: string;
    siteUrl: string;
    /** `{lang}` est remplacé par la locale courante — voir siteLink(). */
    links: Record<'website' | 'download' | 'product' | 'discord' | 'github' | 'engine' | 'demo', string>;
  };
  defaultLang: string;
  langs: { code: string; label: string; dir: 'ltr' | 'rtl' }[];
  sections: DocSection[];
}

// Via `unknown` : le JSON est une donnée externe dont le contrat est DocStructure,
// et non le type que TypeScript a déduit du fichier au moment où il l'a lu.
const structure = structureJson as unknown as DocStructure;
const { product, langs, sections } = structure;
const DOCS_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Une page n'apparaît dans la sidebar que si son .md existe pour cette langue. */
const pageExists = (lang: string, section: string, slug: string) =>
  fs.existsSync(path.join(DOCS_DIR, lang, section, `${slug}.md`));

/** Sur GitHub Pages le site vit sous /<repo>/ ; en dev il vit à la racine */
const base = process.env.DOCS_BASE ?? '/';

// ─────────────────────────────────────────────────────── UI strings par langue

const UI = {
  fr: { search: 'Rechercher', menu: 'Menu', outline: 'Sur cette page', prev: 'Précédent', next: 'Suivant', lastUpdated: 'Dernière mise à jour', darkMode: 'Apparence', returnToTop: 'Retour en haut', lang: 'Langue', download: 'Télécharger', website: 'Site officiel' },
  en: { search: 'Search', menu: 'Menu', outline: 'On this page', prev: 'Previous', next: 'Next', lastUpdated: 'Last updated', darkMode: 'Appearance', returnToTop: 'Back to top', lang: 'Language', download: 'Download', website: 'Website' },
  es: { search: 'Buscar', menu: 'Menú', outline: 'En esta página', prev: 'Anterior', next: 'Siguiente', lastUpdated: 'Última actualización', darkMode: 'Apariencia', returnToTop: 'Volver arriba', lang: 'Idioma', download: 'Descargar', website: 'Sitio oficial' },
  pl: { search: 'Szukaj', menu: 'Menu', outline: 'Na tej stronie', prev: 'Poprzednia', next: 'Następna', lastUpdated: 'Ostatnia aktualizacja', darkMode: 'Wygląd', returnToTop: 'Do góry', lang: 'Język', download: 'Pobierz', website: 'Strona' },
  zh: { search: '搜索', menu: '菜单', outline: '本页目录', prev: '上一页', next: '下一页', lastUpdated: '最后更新', darkMode: '外观', returnToTop: '返回顶部', lang: '语言', download: '下载', website: '官网' },
  ja: { search: '検索', menu: 'メニュー', outline: 'このページの内容', prev: '前へ', next: '次へ', lastUpdated: '最終更新', darkMode: '外観', returnToTop: 'トップへ戻る', lang: '言語', download: 'ダウンロード', website: '公式サイト' },
  ko: { search: '검색', menu: '메뉴', outline: '이 페이지에서', prev: '이전', next: '다음', lastUpdated: '마지막 업데이트', darkMode: '테마', returnToTop: '맨 위로', lang: '언어', download: '다운로드', website: '공식 사이트' },
  hi: { search: 'खोजें', menu: 'मेन्यू', outline: 'इस पृष्ठ पर', prev: 'पिछला', next: 'अगला', lastUpdated: 'अंतिम अद्यतन', darkMode: 'दिखावट', returnToTop: 'ऊपर जाएँ', lang: 'भाषा', download: 'डाउनलोड', website: 'वेबसाइट' },
  ru: { search: 'Поиск', menu: 'Меню', outline: 'На этой странице', prev: 'Назад', next: 'Вперёд', lastUpdated: 'Обновлено', darkMode: 'Оформление', returnToTop: 'Наверх', lang: 'Язык', download: 'Скачать', website: 'Сайт' },
  ar: { search: 'بحث', menu: 'القائمة', outline: 'في هذه الصفحة', prev: 'السابق', next: 'التالي', lastUpdated: 'آخر تحديث', darkMode: 'المظهر', returnToTop: 'العودة للأعلى', lang: 'اللغة', download: 'تحميل', website: 'الموقع' },
} as const;

type LangCode = keyof typeof UI;
const ui = (lang: string) => UI[lang as LangCode] ?? UI.en;

// ────────────────────────────────────────────────────────────── construction

function sidebar(lang: string): DefaultTheme.SidebarItem[] {
  const dict = L[lang] ?? {};
  return sections
    .map((section) => ({
      text: dict[section.id] ?? section.id,
      items: section.pages
        .filter((page) => pageExists(lang, section.id, page.slug))
        .map((page) => ({
          text: dict[`${section.id}/${page.slug}`] ?? page.slug,
          link: `/${lang}/${section.id}/${page.slug}`,
        })),
    }))
    .filter((section) => section.items.length > 0);
}

/** Le site vitrine est multilingue : ses URL portent le préfixe de langue. */
const siteLink = (url: string, lang: string) => url.replace('{lang}', lang);

/** Lettres exposantes Unicode, pour les 15 lettres qu'utilisent nos codes ISO. */
const SUPERSCRIPT: Record<string, string> = {
  a: 'ᵃ', e: 'ᵉ', f: 'ᶠ', h: 'ʰ', i: 'ⁱ', j: 'ʲ', k: 'ᵏ', l: 'ˡ',
  n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', r: 'ʳ', s: 'ˢ', u: 'ᵘ', z: 'ᶻ',
};

const superscript = (code: string) =>
  [...code].map((c) => SUPERSCRIPT[c] ?? c).join('');

function nav(lang: string): DefaultTheme.NavItem[] {
  const t = ui(lang);
  const dict = L[lang] ?? {};
  return [
    { text: dict['getting-started'] ?? 'Guide', link: `/${lang}/getting-started/introduction`, activeMatch: `/${lang}/getting-started/` },
    { text: dict.features ?? 'Features', link: `/${lang}/features/translation`, activeMatch: `/${lang}/features/` },
    { text: dict.engines ?? 'Engines', link: `/${lang}/engines/runtime`, activeMatch: `/${lang}/engines/` },
    { text: 'LSDEDE', link: product.links.engine },
    { text: t.website, link: siteLink(product.links.product, lang) },
    { text: t.download, link: siteLink(product.links.download, lang) },
  ];
}

/** Traductions de la recherche locale (MiniSearch). */
function searchLocale(lang: string) {
  const t = ui(lang);
  return {
    translations: {
      button: { buttonText: t.search, buttonAriaLabel: t.search },
      modal: {
        displayDetails: t.outline,
        resetButtonTitle: t.search,
        noResultsText: '—',
        footer: { selectText: '↵', navigateText: '↑↓', closeText: 'esc' },
      },
    },
  };
}

const locales = Object.fromEntries(
  langs.map((l) => [
    l.code,
    {
      // Le code ISO en exposant : « Français ᶠʳ ». Il lève l'ambiguïté pour qui ne
      // lit pas l'alphabet d'une langue (中文, हिन्दी, العربية) et correspond au
      // préfixe d'URL. VitePress rend ce libellé en texte brut, sans balise : les
      // lettres exposantes Unicode sont donc le seul moyen d'obtenir un exposant.
      label: `${l.label} ${superscript(l.code)}`,
      lang: l.code,
      dir: l.dir as 'ltr' | 'rtl',
      // Pas de `link` : VitePress utilise alors `/<lang>/` (l'accueil) pour le logo,
      // et le sélecteur de langue conserve la page courante en changeant le préfixe.
      title: `${product.name} — Documentation`,
      themeConfig: {
        nav: nav(l.code),
        sidebar: { [`/${l.code}/`]: sidebar(l.code) },
        outline: { level: [2, 3] as [number, number], label: ui(l.code).outline },
        docFooter: { prev: ui(l.code).prev, next: ui(l.code).next },
        darkModeSwitchLabel: ui(l.code).darkMode,
        returnToTopLabel: ui(l.code).returnToTop,
        sidebarMenuLabel: ui(l.code).menu,
        langMenuLabel: ui(l.code).lang,
        lastUpdatedText: ui(l.code).lastUpdated,
      },
    },
  ]),
);

// ───────────────────────────────────────────────────────────────── vitepress

export default defineConfig({
  base,
  srcDir: '.',
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  /** Sombre par défaut (identité produit), l'utilisateur peut basculer. */
  appearance: 'dark',
  /** sitemap.xml généré au build — à mettre à jour avec le vrai domaine. */
  sitemap: { hostname: product.siteUrl + '/' },

  title: `${product.name} Docs`,
  description: `Documentation officielle de ${product.name} (${product.shortName}) — édition, traduction et localisation de dialogues pour jeux et logiciels.`,

  head: [
    ['link', { rel: 'icon', href: `${base}brand/lsde-64x64.webp` }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: `${product.name} Documentation` }],
    // Aperçu au partage (Discord, X, LinkedIn). Sans image, `summary_large_image`
    // ne produit qu'une vignette vide.
    ['meta', { property: 'og:image', content: `${product.siteUrl}/brand/og-banner.png` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: `${product.name} — Documentation` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${product.siteUrl}/brand/og-banner.png` }],
  ],

  /** hreflang + canonical + OG par page : le nerf du SEO multilingue. */
  transformPageData(pageData) {
    // `fr/index.md` -> `fr` ; `fr/features/voice.md` -> `fr/features/voice` ; `index.md` -> ``.
    const rel = pageData.relativePath.replace(/(^|\/)index\.md$/, '').replace(/\.md$/, '');
    const [lang, ...restParts] = rel.split('/').filter(Boolean);
    const rest = restParts.join('/');
    const isRoot = !lang;
    const canonical = `${product.siteUrl}/${rel}`.replace(/\/$/, '');

    pageData.frontmatter.head ??= [];
    // Le 3e élément porte le contenu de la balise (utilisé par les blocs JSON-LD).
    const head = pageData.frontmatter.head as (
      | [string, Record<string, string>]
      | [string, Record<string, string>, string]
    )[];

    // Les alternates couvrent AUSSI les accueils de langue (rest vide) et la racine :
    // ce sont les pages les plus demandées, elles ne peuvent pas rester sans hreflang.
    const suffix = rest ? `/${rest}` : '';
    for (const l of langs) {
      head.push(['link', {
        rel: 'alternate',
        hreflang: l.code,
        href: `${product.siteUrl}/${l.code}${suffix}`,
      }]);
    }
    head.push(['link', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${product.siteUrl}/en${suffix}`,
    }]);
    head.push(['link', { rel: 'canonical', href: isRoot ? `${product.siteUrl}/` : canonical }]);

    const title = (pageData.frontmatter.title as string) ?? pageData.title;
    const desc = (pageData.frontmatter.description as string) ?? '';
    head.push(['meta', { property: 'og:url', content: isRoot ? `${product.siteUrl}/` : canonical }]);
    head.push(['meta', {
      property: 'og:title',
      content: rest ? `${title} · ${product.shortName}` : title,
    }]);
    if (desc) {
      head.push(['meta', { property: 'og:description', content: desc }]);
      head.push(['meta', { name: 'twitter:description', content: desc }]);
    }
    head.push(['meta', { name: 'twitter:title', content: title }]);
    head.push(['meta', { property: 'og:locale', content: lang ?? 'en' }]);

    // ── Données structurées ────────────────────────────────────────────────
    // Le fil d'Ariane fait afficher « LSDE › Interface › Blueprint » dans les
    // résultats de recherche au lieu de l'URL brute.
    const dict = L[lang] ?? {};
    const sectionId = restParts[0];
    const jsonLd: Record<string, unknown>[] = [];

    if (rest && sectionId) {
      const crumbs = [
        { name: product.shortName, item: `${product.siteUrl}/${lang}/` },
        { name: dict[sectionId] ?? sectionId, item: undefined },
        { name: title, item: canonical },
      ];
      jsonLd.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.name,
          ...(c.item ? { item: c.item } : {}),
        })),
      });
      jsonLd.push({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: title,
        ...(desc ? { description: desc } : {}),
        inLanguage: lang,
        url: canonical,
        isPartOf: { '@type': 'WebSite', name: `${product.name} Documentation`, url: `${product.siteUrl}/` },
        author: { '@type': 'Organization', name: 'LepaSoft', url: product.links.website.replace('{lang}', lang) },
        publisher: { '@type': 'Organization', name: 'LepaSoft' },
      });
    } else {
      jsonLd.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: `${product.name} Documentation`,
        alternateName: `${product.shortName} Docs`,
        url: isRoot ? `${product.siteUrl}/` : canonical,
        inLanguage: langs.map((l) => l.code),
        publisher: { '@type': 'Organization', name: 'LepaSoft' },
      });
    }

    for (const node of jsonLd) {
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(node)]);
    }

    // ── Racine : aiguillage vers la langue, AVANT le rendu ─────────────────
    // Dans un composant Vue, la redirection ne part qu'une fois la page montée :
    // le sélecteur reste affiché ~1 s, ce qui se voit. Ici le script est dans le
    // <head>, donc il s'exécute avant que le corps ne soit peint.
    // `location.replace` n'ajoute pas d'entrée d'historique : le bouton Retour
    // ne rebouclerait pas sur cette page.
    // `#choose` court-circuite l'aiguillage pour afficher la liste des langues.
    if (isRoot) {
      const codes = JSON.stringify(langs.map((l) => l.code));
      head.push(['script', {}, `(function(){try{
if(location.hash==='#choose')return;
var c=${codes},b=${JSON.stringify(base)},p=null;
try{var s=localStorage.getItem('lsde-docs-lang');if(s&&c.indexOf(s)>-1)p=s;}catch(e){}
if(!p){var n=navigator.languages||[navigator.language||'en'];
for(var i=0;i<n.length;i++){var l=String(n[i]).split('-')[0].toLowerCase();if(c.indexOf(l)>-1){p=l;break;}}}
location.replace(b+(p||'en')+'/');}catch(e){}})();`]);
    }
  },

  markdown: {
    // Les six couleurs de code du logiciel (theme.const.ts) sont celles de VS Code
    // Dark+/Light+ : on prend le thème Shiki correspondant plutôt que de les redéfinir.
    theme: { light: 'light-plus', dark: 'dark-plus' },
    lineNumbers: false,
    image: { lazyLoading: true },
    config(md) {
      // VitePress ne protège que les blocs ``` ; en code inline, `{{x}}` serait
      // compilé par Vue. On ajoute v-pre pour que `{{count}}` s'affiche tel quel.
      const codeInline = md.renderer.rules.code_inline!;
      md.renderer.rules.code_inline = (tokens, idx, options, env, self) =>
        codeInline(tokens, idx, options, env, self).replace(/^<code/, '<code v-pre');
    },
  },

  locales,

  themeConfig: {
    logo: '/brand/lsde-64x64.webp',
    siteTitle: product.shortName,
    search: {
      provider: 'local',
      options: {
        locales: Object.fromEntries(langs.map((l) => [l.code, searchLocale(l.code)])),
      },
    },
    socialLinks: [
      { icon: 'discord', link: product.links.discord },
      { icon: 'github', link: product.links.github },
    ],
    externalLinkIcon: true,
    footer: {
      message: `${product.name} ${product.version} — documentation`,
      copyright: `© ${new Date().getFullYear()} LepaSoft`,
    },
  },
});
