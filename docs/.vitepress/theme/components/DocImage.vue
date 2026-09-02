<script setup lang="ts">
import { ref } from 'vue';
import { withBase } from 'vitepress';

const props = defineProps<{
  src: string;
  alt?: string;
  /** largeur forcée en px (héritée du dialecte V1) */
  w?: string;
  /** hauteur forcée en px (héritée du dialecte V1) */
  h?: string;
  /** image décorative en ligne : ni cadre, ni zoom */
  icon?: boolean;
  /** alignée à gauche / à droite, largeur réduite */
  left?: boolean;
  end?: boolean;
  small?: boolean;
}>();

const zoomed = ref(false);

const style = {
  width: props.w ? `${props.w}px` : undefined,
  height: props.h ? `${props.h}px` : undefined,
};

function toggle() {
  if (!props.icon) zoomed.value = !zoomed.value;
}
</script>

<template>
  <span
    v-if="icon"
    class="doc-image doc-image--icon"
    :class="{ 'is-left': left, 'is-end': end }"
  >
    <img :src="withBase(src)" :alt="alt ?? ''" :style="style" loading="lazy" decoding="async" />
  </span>

  <figure
    v-else
    class="doc-image doc-image--frame"
    :class="{ 'is-left': left, 'is-end': end, 'is-small': small }"
  >
    <button class="doc-image__btn" type="button" :aria-label="alt ?? 'Agrandir'" @click="toggle">
      <img :src="withBase(src)" :alt="alt ?? ''" :style="style" loading="lazy" decoding="async" />
    </button>
    <figcaption v-if="alt">{{ alt }}</figcaption>
  </figure>

  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="zoomed" class="doc-lightbox" role="dialog" @click="zoomed = false">
        <img :src="withBase(src)" :alt="alt ?? ''" />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Variante « icône » : au fil du texte, sans habillage ─────────── */
.doc-image--icon {
  display: inline-flex;
  vertical-align: middle;
  margin: 0.25rem 0.5rem 0.25rem 0;
}
.doc-image--icon img {
  max-width: 100%;
  height: auto;
}
.doc-image--icon.is-end {
  margin-inline: auto 0;
}

/* ── Variante « capture » : encadrée, cliquable ───────────────────── */
.doc-image--frame {
  margin: 1.6rem 0;
}
.doc-image--frame.is-small {
  max-width: 380px;
}
.doc-image--frame.is-left {
  margin-inline-end: auto;
}
.doc-image--frame.is-end {
  margin-inline-start: auto;
}

.doc-image__btn {
  display: block;
  width: 100%;
  padding: 0;
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  background: var(--vp-c-bg-alt);
  cursor: zoom-in;
  transition: border-color 0.2s;
}

.doc-image__btn img {
  display: block;
  width: 100%;
  height: auto;
}

.doc-image__btn:hover {
  border-color: var(--vp-c-brand-1);
}

figcaption {
  margin-top: 0.6rem;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--vp-c-text-3);
  text-align: center;
}

/* ── Visionneuse ──────────────────────────────────────────────────── */
.doc-lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  padding: 4vh 4vw;
  background: rgba(6, 7, 10, 0.86);
  backdrop-filter: blur(8px);
  cursor: zoom-out;
}

.doc-lightbox img {
  max-width: 100%;
  max-height: 92vh;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.6);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
