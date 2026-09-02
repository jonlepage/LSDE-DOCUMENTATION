<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, withBase } from 'vitepress';
import structure from '../../data/structure.json';

const langs = structure.langs as { code: string; label: string; dir: string }[];
const codes = langs.map((l) => l.code);
const router = useRouter();
const redirecting = ref(true);

const target = (code: string) => `/${code}/getting-started/introduction`;

onMounted(() => {
  // Langue déjà choisie > langue du navigateur > anglais.
  let pick = 'en';
  try {
    const saved = localStorage.getItem('lsde-docs-lang');
    if (saved && codes.includes(saved)) pick = saved;
    else {
      const nav = (navigator.languages ?? [navigator.language])
        .map((l) => l.split('-')[0].toLowerCase())
        .find((l) => codes.includes(l));
      if (nav) pick = nav;
    }
  } catch {
    /* stockage indisponible : on garde l'anglais */
  }
  router.go(withBase(target(pick)));
  // Si la navigation n'a pas lieu (JS partiel, crawler), on montre la liste.
  setTimeout(() => (redirecting.value = false), 1200);
});

function choose(code: string) {
  try {
    localStorage.setItem('lsde-docs-lang', code);
  } catch {
    /* ignoré */
  }
}
</script>

<template>
  <div class="gate">
    <div class="gate__glow" aria-hidden="true" />

    <img class="gate__logo" :src="withBase('/brand/lsde-64x64.webp')" alt="" width="56" height="56" />
    <h1 class="gate__title">LS-Dialog&nbsp;Editor</h1>
    <p class="gate__sub">Documentation</p>

    <p v-if="redirecting" class="gate__hint">Redirection…</p>

    <nav class="gate__grid" aria-label="Languages">
      <a
        v-for="l in langs"
        :key="l.code"
        class="gate__lang"
        :href="withBase(target(l.code))"
        :hreflang="l.code"
        :dir="l.dir"
        @click="choose(l.code)"
      >
        <span class="gate__code">{{ l.code }}</span>
        <span class="gate__label">{{ l.label }}</span>
      </a>
    </nav>
  </div>
</template>

<style scoped>
.gate {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--vp-nav-height));
  padding: 48px 24px 96px;
  text-align: center;
  overflow: hidden;
}

/* Grille blueprint, comme le hero de l'accueil. */
.gate__glow {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--lsde-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--lsde-grid-line) 1px, transparent 1px);
  background-size: var(--lsde-grid-size) var(--lsde-grid-size);
  -webkit-mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35), transparent 70%);
  mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35), transparent 70%);
  pointer-events: none;
}

.gate__logo {
  margin-bottom: 20px;
}

.gate__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: var(--vp-c-brand-1);
}

.gate__sub {
  margin-top: 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.gate__hint {
  margin-top: 22px;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.gate__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(146px, 1fr));
  gap: 10px;
  width: min(660px, 100%);
  margin-top: 34px;
}

.gate__lang {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
}

.gate__lang:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(224, 81, 126, 0.18);
  transform: translateY(-1px);
}

.gate__code {
  font-family: var(--vp-font-family-mono);
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 3px 6px;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.gate__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}
</style>
