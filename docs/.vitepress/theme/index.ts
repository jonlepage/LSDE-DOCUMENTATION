import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import Layout from './Layout.vue';
import DocImage from './components/DocImage.vue';
import YouTube from './components/YouTube.vue';
import LangGate from './components/LangGate.vue';

import './styles/vars.css';
import './styles/custom.css';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // Composants utilisés directement dans le Markdown.
    app.component('DocImage', DocImage);
    app.component('YouTube', YouTube);
    app.component('LangGate', LangGate);
  },
} satisfies Theme;
