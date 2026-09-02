<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import EcosystemCards from './components/EcosystemCards.vue';
</script>

<template>
  <DefaultTheme.Layout>
    <!--
      Graphe de blueprint en filigrane derrière le hero (même motif que LSDEDE).
      L'ancre de hauteur nulle sert de bloc conteneur : le graphe agrandi (scale 1.2)
      y est rogné horizontalement sans créer de défilement, et reste visible en hauteur.
    -->
    <template #home-hero-before>
      <div class="hero-nodes-anchor" aria-hidden="true">
        <div class="hero-nodes">
          <svg viewBox="0 0 400 560" fill="none" preserveAspectRatio="xMidYMid meet">
            <path d="M 95 50 C 95 70, 245 10, 245 30" stroke="#e0517e" stroke-width="1" />
            <path d="M 245 50 C 245 110, 140 110, 140 170" stroke="#e2a336" stroke-width="1" />
            <path d="M 245 50 C 245 110, 310 110, 310 170" stroke="#e2a336" stroke-width="1" />
            <path d="M 140 190 C 140 265, 75 265, 75 340" stroke="#46a758" stroke-width="1" />
            <path d="M 310 190 C 310 265, 245 265, 245 340" stroke="#e5484d" stroke-width="1" />
            <path d="M 75 360 C 75 420, 140 420, 140 480" stroke="#e0517e" stroke-width="1" />
            <path d="M 245 360 C 245 420, 280 420, 280 480" stroke="#e0517e" stroke-width="1" />
            <path d="M 310 190 L 310 270 L 75 300 L 75 340" stroke="#e5484d" stroke-width="1.5" stroke-linejoin="miter" />
            <path d="M 245 360 L 245 410 L 140 440 L 140 480" stroke="#e5484d" stroke-width="1.5" stroke-linejoin="miter" />
          </svg>
          <span class="gn gn1">Dialog</span>
          <span class="gn gn2">Choice</span>
          <span class="gn gn3">Condition</span>
          <span class="gn gn4">Action</span>
          <span class="gn gn5">Dialog</span>
          <span class="gn gn6">Action</span>
          <span class="gn gn7">Dialog</span>
          <span class="gn gn8">End</span>
        </div>
      </div>
    </template>

    <template #home-hero-actions-after>
      <EcosystemCards />
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.hero-nodes-anchor {
  position: relative;
  height: 0;
  overflow-x: clip;
  overflow-y: visible;
  z-index: 0;
}

.hero-nodes {
  position: absolute;
  top: 150px;
  right: 10px;
  width: 400px;
  height: 560px;
  pointer-events: none;
  opacity: 0.2;
  transform: scale(1.2);
}

/* En RTL l'image passe à gauche : le graphe la suit. */
html[dir='rtl'] .hero-nodes {
  right: auto;
  left: 10px;
}

.hero-nodes svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.gn {
  position: absolute;
  border: 1.5px solid;
  padding: 4px 11px;
  font-family: var(--vp-font-family-mono);
  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.gn1 { border-color: #e0517e; color: #e0517e; top: 30px; left: 35px; }
.gn2 { border-color: #e2a336; color: #e2a336; top: 30px; left: 210px; }
.gn3 { border-color: #46a758; color: #46a758; top: 170px; left: 100px; }
.gn4 { border-color: #e5484d; color: #e5484d; top: 170px; left: 275px; }
.gn5 { border-color: #e0517e; color: #e0517e; top: 340px; left: 40px; }
.gn6 { border-color: #e5484d; color: #e5484d; top: 340px; left: 210px; }
.gn7 { border-color: #e0517e; color: #e0517e; top: 480px; left: 105px; }
.gn8 { border-color: #e0517e; color: #e0517e; top: 480px; left: 250px; }

@media (max-width: 959px) {
  .hero-nodes-anchor {
    display: none;
  }
}
</style>
