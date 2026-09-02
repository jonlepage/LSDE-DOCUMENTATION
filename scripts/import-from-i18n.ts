/**
 * Importe la doc LSDE depuis les fichiers i18n de LEPASOFT-WEB (V1)
 * et la convertit en Markdown VitePress (V2).
 *
 *   npm run import
 *
 * Le dialecte Markdown maison du V1 (Trans2.tsx) est normalisé ici :
 *   ## [Label](anchor)      ->  ## Label {#anchor}
 *   ''texte''               ->  *texte*
 *   ***texte***             ->  **texte**
 *   ``code``                ->  `code`
 *   <img src=x h=80 icon /> ->  <DocImage src="/doc/lsde/x.webp" h="80" icon />
 *   <yt src=ID />           ->  <YouTube id="ID" />
 *   > note                  ->  ::: tip Note ... :::
 *   $t(ns:key)              ->  valeur résolue
 *   liens /software/…/doc/X ->  /<lang>/<section>/<slug>
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
/**
 * Emplacement du site V1, source de la migration. Par défaut le projet frère, à côté de
 * celui-ci ; surchargeable pour une autre machine :
 *   LSDE_WEB=/chemin/vers/LEPASOFT-WEB npm run sync
 */
const WEB = process.env.LSDE_WEB ?? path.resolve(ROOT, '../../LEPASOFT-WEB');
const LOCALES = path.join(WEB, 'src/locales');
const DOCS = path.join(ROOT, 'docs');

type Page = { slug: string; legacyId: string; i18n: string; label?: string; extraContentKeys?: string[] };
type Section = { id: string; icon: string; i18nLabel: string; label?: string; pages: Page[] };

/** Chaîne non vide, sinon `undefined` (les locales sources contiennent des `""`). */
const str = (v: unknown): string | undefined =>
  typeof v === 'string' && v.trim() ? v.trim() : undefined;

/** `voice-manager` -> `Voice Manager` : dernier repli quand aucun libellé n'existe. */
const humanize = (slug: string) =>
  slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
type Structure = {
  product: Record<string, unknown>;
  defaultLang: string;
  langs: { code: string; label: string; dir: string }[];
  sections: Section[];
};

const structure: Structure = JSON.parse(
  fs.readFileSync(path.join(DOCS, '.vitepress/data/structure.json'), 'utf8'),
);

/** legacyId -> "section/slug" */
const ROUTE_MAP = new Map<string, string>();
for (const s of structure.sections) {
  for (const p of s.pages) ROUTE_MAP.set(p.legacyId, `${s.id}/${p.slug}`);
}

const SITE = 'https://lepasoft.com';

/** Libellé des conteneurs, par langue. */
const NOTE_LABEL: Record<string, string> = {
  fr: 'Note', en: 'Note', es: 'Nota', pl: 'Uwaga', zh: '备注',
  ja: 'メモ', ko: '참고', hi: 'नोट', ru: 'Примечание', ar: 'ملاحظة',
};
const WARN_LABEL: Record<string, string> = {
  fr: 'Attention', en: 'Warning', es: 'Atención', pl: 'Ostrzeżenie', zh: '注意',
  ja: '注意', ko: '주의', hi: 'चेतावनी', ru: 'Внимание', ar: 'تحذير',
};

/**
 * « Warning : », « Attention : », « 注意：»… en tête d'un bloc : l'étiquette du
 * conteneur le dit déjà, le mot ferait doublon à l'écran.
 */
const REDUNDANT_PREFIX = new RegExp(
  `^\\s*(?:${[...new Set([...Object.values(NOTE_LABEL), ...Object.values(WARN_LABEL), 'Warning', 'Note', 'Important'])]
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})\\s*[:：]\\s*`,
  'i',
);

// ─────────────────────────────────────────────────────────── helpers i18n

function loadNamespaces(lang: string): Record<string, unknown> {
  const dir = path.join(LOCALES, lang);
  if (!fs.existsSync(dir)) return {};
  const out: Record<string, unknown> = {};
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.json'))) {
    out[path.basename(f, '.json')] = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  }
  return out;
}

function deepGet(obj: unknown, dotted: string): unknown {
  return dotted.split('.').reduce<unknown>(
    (a, k) => (a == null ? undefined : (a as Record<string, unknown>)[k]),
    obj,
  );
}

/** Résout `ns:a.b.c` ou `a.b.c` (cherche alors dans tous les namespaces). */
function resolveKey(ns: Record<string, unknown>, key: string): string | undefined {
  if (key.includes(':')) {
    const [n, rest] = key.split(':');
    const v = deepGet(ns[n], rest);
    return typeof v === 'string' ? v : undefined;
  }
  for (const bag of Object.values(ns)) {
    const v = deepGet(bag, key);
    if (typeof v === 'string') return v;
  }
  return undefined;
}

// ─────────────────────────────────────────────────────── résolution images

const IMG_DIRS = [
  { fs: path.join(WEB, 'public/doc/lsde'), url: '/doc/lsde' },
  { fs: path.join(WEB, 'public/lsde'), url: '/lsde' },
  { fs: path.join(WEB, 'public/icons'), url: '/icons' },
];
const imgIndex = new Map<string, string>();
for (const d of IMG_DIRS) {
  if (!fs.existsSync(d.fs)) continue;
  for (const f of fs.readdirSync(d.fs)) {
    const base = f.replace(/\.[^.]+$/, '');
    if (!imgIndex.has(base)) imgIndex.set(base, `${d.url}/${f}`);
  }
}

const missingImages = new Set<string>();
/** Chemin public de l'image, ou `undefined` si elle n'existe dans aucun dossier connu. */
function resolveImage(name: string): string | undefined {
  const hit = imgIndex.get(name);
  if (!hit) missingImages.add(name);
  return hit;
}

// ────────────────────────────────────────────────────────── transformation

const unresolvedLinks = new Set<string>();

function rewriteInternalLink(url: string, lang: string): string {
  const clean = url.startsWith('/') ? url : `/${url}`;
  const m = clean.match(/^\/software\/ls-dialog-editor\/documentation\/([\w-]+)(#.*)?$/);
  if (m) {
    const route = ROUTE_MAP.get(m[1]);
    if (route) return `/${lang}/${route}${m[2] ?? ''}`;
    unresolvedLinks.add(url);
    return url;
  }
  // Toute autre route du site vitrine -> lien absolu vers lepasoft.com
  if (/^\/(software|games|blog|support|press-kit)/.test(clean)) return `${SITE}/${lang}${clean}`;
  return url;
}

function convert(raw: string, lang: string, ns: Record<string, unknown>): string {
  let t = raw.replace(/\r\n/g, '\n');

  // 1. interpolations $t(...)
  t = t.replace(/\$t\(([^)]+)\)/g, (m, key: string) => resolveKey(ns, key.trim()) ?? m);

  // 2. on met le code de côté : il ne doit subir aucune transformation
  const vault: string[] = [];
  const stash = (s: string) => `\u0000${vault.push(s) - 1}\u0000`;

  // 2a. blocs ``` … ```
  t = t.replace(/```(\w*)\n?([\s\S]*?)```/g, (_m, langId: string, code: string) => {
    const body = code.replace(/^\n+|\n+$/g, '');
    return stash('```' + (langId || 'text') + '\n' + body + '\n```');
  });

  // 2b. code inline ``…`` -> `…`
  t = t.replace(/``([^`\n]+?)``/g, (_m, code: string) => stash('`' + code.trim() + '`'));

  // 2c. code inline déjà à backtick simple : mis à l'abri tel quel
  t = t.replace(/`([^`\n]+?)`/g, (_m, code: string) => stash('`' + code + '`'));

  // 2d. {{placeholder}} en texte nu : Vue y verrait une interpolation -> code inline
  //     (le thème ajoute v-pre à tout code inline, cf. config.ts)
  t = t.replace(/\{\{[^}\n]*\}\}/g, (m) => stash('`' + m + '`'));

  // 3. titres ancrés : ## [Label](anchor) -> ## Label {#anchor}
  t = t.replace(
    /^(#{1,4})\s*\[([^\]]+)\]\(([^)\s]+)\)\s*$/gm,
    (_m, h: string, label: string, id: string) => `${h} ${label.trim()} {#${id.trim()}}`,
  );

  // 4. emphase
  t = t.replace(/''(.+?)''/g, '*$1*');
  t = t.replace(/\*{3,}(.+?)\*{3,}/g, '**$1**');

  // 5. médias
  t = t.replace(/<img\s+([^>]*?)\/?>/g, (_m, attrs: string) => {
    // `src= nom` (avec espace) existe dans certaines traductions : on tolère.
    const src = attrs.match(/src=\s*['"]?([-\w]+)/)?.[1];
    const url = src ? resolveImage(src) : undefined;
    // Image absente : un commentaire visible dans le .md plutôt qu'une image cassée.
    if (!url) return `\n<!-- TODO image introuvable : ${src ?? attrs.trim()} -->\n`;
    const w = attrs.match(/\bw=(\d+)/)?.[1];
    const h = attrs.match(/\bh=(\d+)/)?.[1];
    const flags = ['small', 'left', 'end', 'icon'].filter((f) =>
      new RegExp(`\\s${f}\\b`).test(attrs),
    );
    const props = [
      `src="${url}"`,
      w ? `w="${w}"` : '',
      h ? `h="${h}"` : '',
      ...flags,
    ].filter(Boolean).join(' ');
    return `\n<DocImage ${props} />\n`;
  });
  t = t.replace(/<yt\s+src=([-\w]+)\s*\/?>/g, (_m, id: string) => `\n<YouTube id="${id}" />\n`);
  t = t.replace(/<h2\s*\/>/g, '');

  // 6. liens internes
  t = t.replace(
    /\[([^\]]+)\]\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,
    (m, label: string, url: string) => {
      if (url.startsWith('http') || url.startsWith('#')) return m;
      if (url.includes('/')) return `[${label}](${rewriteInternalLink(url, lang)})`;
      return m; // ancre nue : laissée telle quelle
    },
  );

  // 7. blocs « > » -> conteneurs VitePress
  t = t.replace(/(?:^>[^\n]*\n?)+/gm, (block) => {
    let body = block.replace(/^>\s?/gm, '').trimEnd();
    const isWarn = /(⚠|attention|warning|important|jamais|never)/i.test(body.slice(0, 140));
    const kind = isWarn ? 'warning' : 'tip';
    const label = isWarn ? (WARN_LABEL[lang] ?? 'Warning') : (NOTE_LABEL[lang] ?? 'Note');
    // Le bloc porte déjà son étiquette : un texte qui recommence par « Warning : »
    // la répétait à l'écran.
    body = body.replace(REDUNDANT_PREFIX, '');
    return `\n::: ${kind} ${label}\n${body}\n:::\n`;
  });

  // 8. restauration du code
  t = t.replace(/\u0000(\d+)\u0000/g, (_m, i: string) => vault[Number(i)]);

  // 9. nettoyage
  t = t
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^[ \t]*---[ \t]*$/gm, '\n---\n')
    .replace(/\n{3,}/g, '\n\n');

  return t.trim() + '\n';
}

/**
 * VitePress exige des ids uniques par page ; le V1 réutilisait parfois la même
 * ancre (ex. deux `## [Interface](interface)`). Les doublons reçoivent -2, -3…
 */
const duplicatedAnchors = new Set<string>();
function dedupeAnchors(md: string): string {
  const seen = new Map<string, number>();
  return md.replace(/^(#{1,6} .*?) \{#([^}]+)\}\s*$/gm, (_m, heading: string, id: string) => {
    const n = (seen.get(id) ?? 0) + 1;
    seen.set(id, n);
    if (n === 1) return `${heading} {#${id}}`;
    duplicatedAnchors.add(id);
    return `${heading} {#${id}-${n}}`;
  });
}

/**
 * Meta description SEO : on s'arrête à une fin de PHRASE, jamais au milieu d'un mot.
 * Une description tronquée sur « … ou à saisir votre clé de » est affichée telle quelle
 * par Google et coûte des clics.
 */
const DESC_MAX = 155;

function extractDescription(md: string): string {
  const line = md
    .split('\n')
    .find((l) => l.trim() && !/^[#>:*<\-`|!]/.test(l.trim()) && l.trim().length > 40);
  if (!line) return '';

  const text = line
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*`_]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= DESC_MAX) return text;

  // Dernière ponctuation de fin de phrase dans la fenêtre autorisée (latin + CJK).
  const window = text.slice(0, DESC_MAX + 1);
  const cut = Math.max(
    window.lastIndexOf('. '), window.lastIndexOf('! '), window.lastIndexOf('? '),
    window.lastIndexOf('。'), window.lastIndexOf('！'), window.lastIndexOf('？'),
    window.lastIndexOf('।'),
  );
  // Une phrase trop courte serait un mauvais résumé : on préfère alors couper au mot.
  if (cut >= 60) return text.slice(0, cut + 1).trim();

  return text.slice(0, DESC_MAX).replace(/\s+\S*$/, '').replace(/[,;:—-]$/, '').trim() + '…';
}

const yaml = (s: string) => `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

// ────────────────────────────────────────────────────────────────── import

/** Bandeau affiché quand une page retombe sur le contenu anglais. */
const UNTRANSLATED: Record<string, string> = {
  fr: 'Cette page n’est pas encore traduite ; le contenu anglais est affiché.',
  es: 'Esta página aún no está traducida; se muestra el contenido en inglés.',
  pl: 'Ta strona nie została jeszcze przetłumaczona; wyświetlana jest wersja angielska.',
  zh: '此页面尚未翻译，暂显示英文内容。',
  ja: 'このページはまだ翻訳されていません。英語版を表示しています。',
  ko: '이 페이지는 아직 번역되지 않았습니다. 영어 내용이 표시됩니다.',
  hi: 'यह पृष्ठ अभी अनुवादित नहीं है; अंग्रेज़ी सामग्री दिखाई जा रही है।',
  ru: 'Эта страница ещё не переведена; показан текст на английском.',
  ar: 'لم تُترجم هذه الصفحة بعد؛ يُعرض المحتوى الإنجليزي.',
};

let written = 0;
const missingPages: string[] = [];
const fallbackPages: string[] = [];
const labels: Record<string, Record<string, string>> = {};
const nsEn = loadNamespaces('en');

const contentParts = (ns: Record<string, unknown>, page: Page) =>
  ['content', ...(page.extraContentKeys ?? [])]
    .map((k) => resolveKey(ns, `software:${page.i18n}.${k}`))
    .filter((v): v is string => typeof v === 'string' && v.trim().length > 0);

for (const { code: lang } of structure.langs) {
  const ns = loadNamespaces(lang);
  if (!Object.keys(ns).length) {
    console.warn(`  ⚠ locale ${lang} introuvable`);
    continue;
  }

  labels[lang] = {};

  for (const section of structure.sections) {
    // Libellés : locale -> anglais -> libellé du manifeste. Les locales sources
    // ont des titres vides pour les pages récentes (Moteurs, Blueprint, MCP…).
    labels[lang][section.id] =
      str(resolveKey(ns, `software:${section.i18nLabel}`)) ??
      str(resolveKey(nsEn, `software:${section.i18nLabel}`)) ??
      section.label ??
      humanize(section.id);

    for (const page of section.pages) {
      const title =
        str(resolveKey(ns, `software:${page.i18n}.title`)) ??
        str(resolveKey(nsEn, `software:${page.i18n}.title`)) ??
        page.label ??
        humanize(page.slug);
      let parts = contentParts(ns, page);
      let fallback = false;

      // Page absente dans cette langue : on sert l'anglais plutôt qu'un trou.
      if (!parts.length && lang !== 'en') {
        parts = contentParts(nsEn, page);
        fallback = parts.length > 0;
      }

      labels[lang][`${section.id}/${page.slug}`] = title;

      if (!parts.length) {
        missingPages.push(`${lang}/${section.id}/${page.slug}`);
        continue;
      }
      if (fallback) fallbackPages.push(`${lang}/${section.id}/${page.slug}`);

      const body = dedupeAnchors(parts.map((p) => convert(p, lang, ns)).join('\n'));
      const description = extractDescription(body);
      const notice = fallback
        ? `::: warning\n${UNTRANSLATED[lang] ?? 'This page is not translated yet; English content is shown.'}\n:::\n`
        : null;

      const md = [
        '---',
        `title: ${yaml(title)}`,
        description ? `description: ${yaml(description)}` : null,
        `section: ${section.id}`,
        'outline: [2, 3]',
        '---',
        '',
        `# ${title}`,
        '',
        notice,
        body,
      ].filter((l): l is string => l !== null).join('\n');

      const out = path.join(DOCS, lang, section.id, `${page.slug}.md`);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, md, 'utf8');
      written++;
    }
  }
}

fs.writeFileSync(
  path.join(DOCS, '.vitepress/data/labels.json'),
  JSON.stringify(labels, null, 2),
  'utf8',
);

console.log(`\n✔ ${written} pages écrites`);
if (fallbackPages.length) console.log(`\n○ ${fallbackPages.length} pages servies en anglais (non traduites) : ${fallbackPages.join(', ')}`);
if (missingPages.length) {
  console.log(`\n○ ${missingPages.length} pages sans contenu source :`);
  console.log('  ' + missingPages.slice(0, 15).join('\n  '));
  if (missingPages.length > 15) console.log(`  … +${missingPages.length - 15}`);
}
if (duplicatedAnchors.size) console.log(`\n○ ancres dédoublonnées (-2, -3…) : ${[...duplicatedAnchors].join(', ')}`);
if (missingImages.size) console.log(`\n⚠ images introuvables : ${[...missingImages].join(', ')}`);
if (unresolvedLinks.size) console.log(`\n⚠ liens non résolus : ${[...unresolvedLinks].join(', ')}`);
