import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import type { Plugin } from 'vite';
import type { DocStructure } from './config';

export const LLM_ZIP = 'lsde-documentation.zip';

// Un seul dossier à l'extraction, à déposer tel quel dans le projet de l'utilisateur.
const ROOT = 'lsde-documentation';

const AGENT_HINT: Record<string, string> = {
  fr: "Point d'entrée pour les agents : lisez ce fichier, puis n'ouvrez que les pages utiles à la tâche. Les liens sont relatifs à ce dossier.",
  en: 'Entry point for agents: read this file first, then open only the pages the task needs. Links are relative to this folder.',
  es: 'Punto de entrada para agentes: lea primero este archivo y abra solo las páginas que necesite la tarea. Los enlaces son relativos a esta carpeta.',
  pl: 'Punkt wejścia dla agentów: najpierw przeczytaj ten plik, a potem otwieraj tylko strony potrzebne do zadania. Linki są względne wobec tego folderu.',
  zh: '智能体入口：请先阅读本文件，再只打开任务需要的页面。链接均相对于本文件夹。',
  ja: 'エージェント向けの入口です。まずこのファイルを読み、タスクに必要なページだけを開いてください。リンクはこのフォルダーからの相対パスです。',
  ko: '에이전트용 진입점입니다. 먼저 이 파일을 읽고, 작업에 필요한 페이지만 여세요. 링크는 이 폴더를 기준으로 한 상대 경로입니다.',
  hi: 'एजेंटों के लिए प्रवेश बिंदु: पहले यह फ़ाइल पढ़ें, फिर केवल वही पेज खोलें जिनकी काम के लिए ज़रूरत है। लिंक इसी फ़ोल्डर के सापेक्ष हैं।',
  ru: 'Точка входа для агентов: сначала прочитайте этот файл, затем открывайте только страницы, нужные для задачи. Ссылки указаны относительно этой папки.',
  ar: 'نقطة البداية للوكلاء: اقرأ هذا الملف أولًا، ثم افتح الصفحات التي تحتاجها المهمة فقط. الروابط نسبية إلى هذا المجلد.',
};

// Conteneurs VitePress → alertes GitHub, lisibles hors du site.
const CALLOUT: Record<string, string> = {
  tip: 'NOTE',
  info: 'NOTE',
  details: 'NOTE',
  warning: 'WARNING',
  danger: 'CAUTION',
};

export interface LlmSource {
  structure: DocStructure;
  labels: Record<string, Record<string, string>>;
  docsDir: string;
}

export function buildLlmZip({ structure, labels, docsDir }: LlmSource, lang: string): Buffer {
  const { product } = structure;
  const dict = labels[lang] ?? {};
  const tagline = readPage(path.join(docsDir, lang, 'index.md')).meta.tagline;

  const index = [`# ${product.name} — Documentation`, ''];
  if (tagline) index.push(`> ${tagline}`, '');
  index.push(
    AGENT_HINT[lang] ?? AGENT_HINT.en,
    '',
    `${product.shortName} ${product.version} · ${lang} · ${new Date().toISOString().slice(0, 10)} · ${product.siteUrl}/${lang}/`,
  );

  const pages: { name: string; text: string }[] = [];
  for (const section of structure.sections) {
    const links: string[] = [];
    for (const { slug } of section.pages) {
      const file = path.join(docsDir, lang, section.id, `${slug}.md`);
      if (!fs.existsSync(file)) continue;

      const { front, meta, body } = readPage(file);
      const portable = toPortable(body, lang, product.siteUrl);
      const name = `${section.id}/${slug}.md`;
      pages.push({
        name,
        text: [
          '---',
          ...front.filter((line) => /^(title|description):/.test(line)),
          `source: ${product.siteUrl}/${lang}/${section.id}/${slug}`,
          '---',
          '',
          portable.text.trim(),
          '',
        ].join('\n'),
      });
      links.push(`- [${meta.title ?? slug}](${name})${meta.description ? `: ${meta.description}` : ''}`);
      // Les sous-titres suffisent souvent à choisir la bonne page sans l'ouvrir.
      if (portable.headings.length) links.push(`  - ${portable.headings.join(' · ')}`);
    }
    if (links.length) index.push('', `## ${dict[section.id] ?? section.label ?? section.id}`, '', ...links);
  }

  return zip(
    [{ name: 'index.md', text: `${index.join('\n')}\n` }, ...pages].map(({ name, text }) => ({
      name: `${ROOT}/${name}`,
      data: Buffer.from(text),
    })),
  );
}

// `buildEnd` ne tourne qu'au build : en dev, l'archive est construite quand on la demande.
export function llmZipDevServer(source: LlmSource): Plugin {
  const codes = source.structure.langs.map((l) => l.code).join('|');
  const route = new RegExp(`/(${codes})/${LLM_ZIP.replace('.', '\\.')}$`);
  return {
    name: 'lsde-llm-zip',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const lang = req.url?.split('?')[0].match(route)?.[1];
        if (!lang) return next();
        res.setHeader('Content-Type', 'application/zip');
        res.end(buildLlmZip(source, lang));
      });
    },
  };
}

// `front` garde les lignes YAML brutes ; `meta` sert à l'index, où `\"` resterait visible.
function readPage(file: string) {
  const src = fs.readFileSync(file, 'utf8');
  const block = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  const front = block ? block[1].split(/\r?\n/) : [];
  const meta: Record<string, string | undefined> = {};
  for (const line of front) {
    const pair = line.match(/^\s*(\w+):\s*"(.*)"\s*$/);
    if (pair) meta[pair[1]] = pair[2].replaceAll('\\"', '"');
  }
  return { front, meta, body: block ? src.slice(block[0].length) : src };
}

function toPortable(body: string, lang: string, siteUrl: string) {
  const out: string[] = [];
  const headings: string[] = [];
  let fence = '';
  let quoted = false;
  const emit = (text: string) => out.push(quoted ? `>${text && ` ${text}`}` : text);

  for (const line of body.split(/\r?\n/)) {
    if (fence) {
      const trimmed = line.trim();
      if (trimmed.length >= fence.length && [...trimmed].every((c) => c === fence[0])) fence = '';
      emit(line);
      continue;
    }
    const marker = line.match(/^\s*(`{3,}|~{3,})/);
    if (marker) {
      fence = marker[1];
      emit(line);
      continue;
    }
    const container = line.match(/^:::\s*(tip|info|details|warning|danger)\b/);
    if (container) {
      out.push(`> [!${CALLOUT[container[1]]}]`);
      quoted = true;
      continue;
    }
    if (quoted && line.trim() === ':::') {
      quoted = false;
      // Sans ligne vide, le texte suivant serait absorbé par la citation.
      out.push('');
      continue;
    }
    const heading = quoted ? null : line.match(/^##\s+(.*?)(?:\s*\{#[^}]*\})?\s*$/);
    if (heading) headings.push(heading[1]);
    emit(rewriteLine(line, lang, siteUrl));
  }
  return { text: out.join('\n'), headings };
}

// Le code inline est la première alternative : il est consommé tel quel, rien n'y est réécrit.
const INLINE = /(`+)(?:(?!\1).)*?\1|<DocImage\s([^>]*?)\/>|<YouTube\s+id="([^"]+)"\s*\/>|\]\((\/[^)\s]*)\)/g;

function rewriteLine(line: string, lang: string, siteUrl: string): string {
  return line.replace(INLINE, (match, code, attrs, youtube, target) => {
    if (code) return match;
    if (attrs !== undefined) return docImage(attrs, siteUrl);
    if (youtube) return `[YouTube](https://www.youtube.com/watch?v=${youtube})`;
    return `](${linkTarget(target, lang, siteUrl)})`;
  });
}

function docImage(attrs: string, siteUrl: string): string {
  // `icon` = décoration en ligne, sans information pour un modèle.
  if (/\bicon\b/.test(attrs.replace(/"[^"]*"/g, ''))) return '';
  const src = attrs.match(/\bsrc="([^"]+)"/)![1];
  const alt = attrs.match(/\balt="([^"]*)"/)?.[1] ?? '';
  return /\.(webm|mp4)$/.test(src)
    ? `[${path.posix.basename(src)}](${siteUrl}${src})`
    : `![${alt}](${siteUrl}${src})`;
}

// `/fr/interface/blueprint#export` → `../interface/blueprint.md#export` ; une autre langue reste en ligne.
function linkTarget(target: string, lang: string, siteUrl: string): string {
  const match = target.match(/^\/([a-z]{2})\/([^#]*)(#.*)?$/);
  if (match?.[1] !== lang) return siteUrl + target;
  const page = match[2].replace(/\/$/, '');
  return `../${page ? `${page}.md` : 'index.md'}${match[3] ?? ''}`;
}

// Node fournit deflate et CRC-32, mais pas le conteneur ZIP.
function zip(entries: { name: string; data: Buffer }[]): Buffer {
  const now = new Date();
  const time = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
  const date = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
  const records: Buffer[] = [];
  const directory: Buffer[] = [];
  let offset = 0;

  for (const { name, data } of entries) {
    const fileName = Buffer.from(name);
    const packed = zlib.deflateRawSync(data);
    const crc = zlib.crc32(data);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(8, 8);
    local.writeUInt16LE(time, 10);
    local.writeUInt16LE(date, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(packed.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(fileName.length, 26);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(8, 10);
    central.writeUInt16LE(time, 12);
    central.writeUInt16LE(date, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(packed.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(fileName.length, 28);
    central.writeUInt32LE(offset, 42);

    records.push(local, fileName, packed);
    directory.push(central, fileName);
    offset += local.length + fileName.length + packed.length;
  }

  const table = Buffer.concat(directory);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(table.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...records, table, end]);
}
