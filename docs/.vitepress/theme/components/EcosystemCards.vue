<script setup lang="ts">
import { computed } from 'vue';
import { useData, withBase } from 'vitepress';

const { lang } = useData();

/** Titre de la rangée, par langue (clé = `lang` de la locale). */
const TITLES: Record<string, string> = {
  fr: 'Écosystème — moteur runtime & démo',
  en: 'Ecosystem — runtime engine & demo',
  es: 'Ecosistema — motor runtime y demo',
  pl: 'Ekosystem — silnik runtime i demo',
  zh: '生态 — 运行时引擎与演示',
  ja: 'エコシステム — ランタイムエンジンとデモ',
  ko: '생태계 — 런타임 엔진 & 데모',
  hi: 'इकोसिस्टम — रनटाइम इंजन और डेमो',
  ru: 'Экосистема — движок и демо',
  ar: 'المنظومة — محرّك التشغيل والعرض التجريبي',
};

const title = computed(() => TITLES[lang.value] ?? TITLES.en);

const cards = [
  {
    name: 'LSDEDE',
    sub: 'Engine',
    url: 'https://jonlepage.github.io/LS-Dialog-Editor-Engine/',
    logo: withBase('/brand/lsde-64x64.webp'),
  },
  {
    name: 'PixiJS',
    sub: 'WebGL',
    url: 'https://jonlepage.github.io/LSDEDE-DEMO-TS/',
    logo: withBase('/brand/pixijslogo.svg'),
  },
  {
    name: 'Unity',
    sub: 'WebGL',
    url: 'https://jonlepage.github.io/LSDEDE-runtime/',
    logo: withBase('/brand/unitylogo.svg'),
  },
];
</script>

<template>
  <div class="eco">
    <p class="eco__title">{{ title }}</p>
    <div class="eco__cards">
      <a
        v-for="c in cards"
        :key="c.name"
        :href="c.url"
        target="_blank"
        rel="noopener"
        class="eco__card"
      >
        <img :src="c.logo" :alt="c.name" class="eco__logo" />
        <span class="eco__name">{{ c.name }}</span>
        <span class="eco__sub">{{ c.sub }}</span>
        <span class="eco__arrow" aria-hidden="true">&#8599;</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.eco {
  padding: 20px 0 0;
  margin-inline-start: 6px;
}

.eco__title {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

/* Trois cartes compactes : elles doivent tenir dans la colonne du hero (592 px). */
.eco__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.eco__card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
}

.eco__card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(224, 81, 126, 0.18);
  transform: translateY(-1px);
}

.eco__logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
}

.eco__name {
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  color: var(--vp-c-text-1);
}

.eco__sub {
  font-size: 11px;
  white-space: nowrap;
  color: var(--vp-c-text-3);
}

.eco__arrow {
  font-size: 13px;
  color: var(--vp-c-text-3);
  transition: color 0.2s;
}

.eco__card:hover .eco__arrow {
  color: var(--vp-c-brand-1);
}

@media (max-width: 480px) {
  .eco__cards {
    flex-direction: column;
  }
}
</style>
