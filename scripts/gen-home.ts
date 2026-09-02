/**
 * Génère les pages d'accueil : une par langue + le sélecteur de langue racine.
 * Le texte marketing est repris tel quel des locales LEPASOFT-WEB (déjà traduit).
 *
 *   npm run home
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DOCS = path.join(ROOT, 'docs');
/** Voir import-from-i18n.ts : surchargeable via LSDE_WEB. */
const WEB = process.env.LSDE_WEB ?? path.resolve(ROOT, '../../LEPASOFT-WEB');
const LOCALES = path.join(WEB, 'src/locales');

const structure = JSON.parse(
  fs.readFileSync(path.join(DOCS, '.vitepress/data/structure.json'), 'utf8'),
);
const { product, langs } = structure;

/** Cartes de l'accueil : clé FeaturesSection -> page de doc + icône. */
const CARDS = [
  { key: 'translation', icon: 'translation', link: 'features/translation' },
  { key: 'blueprint', icon: 'blueprint', link: 'interface/blueprint' },
  { key: 'agents', icon: 'agents', link: 'resources/mcp-bridge' },
  { key: 'codebase', icon: 'codebase', link: 'features/scanning' },
  { key: 'voice', icon: 'voice', link: 'features/voice' },
  { key: 'diagnostic', icon: 'diagnostic', link: 'interface/localization-manager' },
];

const CTA = {
  fr: { start: 'Commencer', download: 'Télécharger LSDE', tagline: 'Documentation officielle' },
  en: { start: 'Get started', download: 'Download LSDE', tagline: 'Official documentation' },
  es: { start: 'Empezar', download: 'Descargar LSDE', tagline: 'Documentación oficial' },
  pl: { start: 'Zacznij', download: 'Pobierz LSDE', tagline: 'Oficjalna dokumentacja' },
  zh: { start: '开始使用', download: '下载 LSDE', tagline: '官方文档' },
  ja: { start: 'はじめる', download: 'LSDE をダウンロード', tagline: '公式ドキュメント' },
  ko: { start: '시작하기', download: 'LSDE 다운로드', tagline: '공식 문서' },
  hi: { start: 'शुरू करें', download: 'LSDE डाउनलोड करें', tagline: 'आधिकारिक दस्तावेज़' },
  ru: { start: 'Начать', download: 'Скачать LSDE', tagline: 'Официальная документация' },
  ar: { start: 'ابدأ', download: 'تحميل LSDE', tagline: 'التوثيق الرسمي' },
} as const;

const yaml = (s: string) => `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

/** Coupe proprement à la fin d'un mot. */
function clip(s: string, max: number): string {
  const flat = s.replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  return flat.slice(0, max).replace(/[\s,;:.]+\S*$/, '') + '…';
}

let count = 0;

for (const { code: lang } of langs) {
  const file = path.join(LOCALES, lang, 'software.json');
  if (!fs.existsSync(file)) continue;

  const sw = JSON.parse(fs.readFileSync(file, 'utf8'));
  const lsde = sw.lsde ?? {};
  const hero = lsde.HeroSection ?? {};
  const feats = lsde.FeaturesSection ?? {};
  const cta = CTA[lang as keyof typeof CTA] ?? CTA.en;

  // Seule la locale FR possède les textes marketing `tab` / `summary`. Ailleurs on
  // se replie sur le libellé et la description de la page de doc (déjà localisés
  // par l'import : labels.json + frontmatter du .md).
  const pageLabels: Record<string, string> =
    JSON.parse(fs.readFileSync(path.join(DOCS, '.vitepress/data/labels.json'), 'utf8'))[lang] ?? {};

  const pageDescription = (link: string): string | undefined => {
    const file = path.join(DOCS, lang, `${link}.md`);
    if (!fs.existsSync(file)) return undefined;
    const m = fs.readFileSync(file, 'utf8').match(/^description:\s*"((?:[^"\\]|\\.)*)"/m);
    return m ? m[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\') : undefined;
  };

  // Les locales non-FR contiennent des chaînes vides ("") : `??` les laisserait passer.
  const str = (v: unknown): string | undefined =>
    typeof v === 'string' && v.trim() ? v.trim() : undefined;

  const features = CARDS.map((c) => {
    const f = feats[c.key] ?? {};
    const title = str(f.tab) ?? str(pageLabels[c.link]) ?? c.key;
    let details = clip(str(f.summary) ?? str(f.title) ?? pageDescription(c.link) ?? '', 132);
    // Une description de page coupée en pleine phrase se termine par des points de suspension.
    if (details && !/[.!?…。！？]$/.test(details)) details += '…';
    return [
      '  - icon:',
      `      src: /icons/${c.icon}.svg`,
      `    title: ${yaml(title)}`,
      `    details: ${yaml(details)}`,
      `    link: /${lang}/${c.link}`,
    ].join('\n');
  }).join('\n');

  const md = `---
layout: home

title: ${yaml(`${product.shortName} — ${cta.tagline} ${product.name}`)}
# Le titre porte déjà le nom du produit : le suffixe du site ferait doublon dans l'onglet
# et dans les résultats de recherche.
titleTemplate: false
description: ${yaml(clip(hero.description ?? lsde.title ?? '', 155))}

hero:
  name: ${yaml(product.shortName)}
  text: ${yaml(clip(hero.title ?? lsde.title ?? product.name, 70))}
  tagline: ${yaml(clip(hero.description ?? '', 190))}
  image:
    src: /brand/lsde-hero.webp
    alt: ${yaml(product.name)}
  actions:
    - theme: brand
      text: ${yaml(cta.start)}
      link: /${lang}/getting-started/introduction
    - theme: alt
      text: ${yaml(cta.download)}
      link: ${product.links.download.replace('{lang}', lang)}

features:
${features}
---
`;

  fs.mkdirSync(path.join(DOCS, lang), { recursive: true });
  fs.writeFileSync(path.join(DOCS, lang, 'index.md'), md, 'utf8');
  count++;
}

// ── Racine : sélecteur de langue + redirection douce ──────────────────────
const links = langs
  .map((l: { code: string; label: string }) => `- [${l.label}](/${l.code}/getting-started/introduction)`)
  .join('\n');

fs.writeFileSync(
  path.join(DOCS, 'index.md'),
  `---
layout: page
title: ${yaml(`${product.name} — Documentation`)}
titleTemplate: false
description: "Official documentation for LS-Dialog Editor — dialogue authoring, translation and localization for games and software."
sidebar: false
aside: false
---

<LangGate />

<div class="lang-gate-fallback">

# ${product.name}

${links}

</div>
`,
  'utf8',
);

console.log(`✔ ${count} accueils + 1 sélecteur de langue`);
