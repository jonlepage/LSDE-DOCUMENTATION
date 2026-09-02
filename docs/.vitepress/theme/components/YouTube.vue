<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ id: string; title?: string }>();
const playing = ref(false);
const thumb = `https://i.ytimg.com/vi/${props.id}/maxresdefault.jpg`;
</script>

<template>
  <!-- Façade légère : la miniature d'abord, l'iframe seulement au clic. -->
  <div class="yt">
    <button v-if="!playing" class="yt__facade" type="button" @click="playing = true">
      <img :src="thumb" :alt="title ?? 'Tutoriel vidéo'" loading="lazy" decoding="async" />
      <span class="yt__play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26"><path fill="currentColor" d="M8 5v14l11-7z" /></svg>
      </span>
    </button>
    <iframe
      v-else
      :src="`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`"
      :title="title ?? 'YouTube'"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<style scoped>
.yt {
  position: relative;
  aspect-ratio: 16 / 9;
  margin: 1.8rem 0;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: #000;
}

.yt__facade {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}

.yt__facade img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity 0.25s ease, transform 0.4s ease;
}

.yt__facade:hover img {
  opacity: 1;
  transform: scale(1.02);
}

.yt__play {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  color: #fff;
  background: var(--vp-c-brand-2);
  border: 1px solid var(--vp-c-brand-1);
  transition: transform 0.25s ease;
}

.yt__facade:hover .yt__play {
  transform: scale(1.08);
}

.yt iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
