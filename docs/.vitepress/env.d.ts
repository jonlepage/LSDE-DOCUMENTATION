/// <reference types="vite/client" />

// Permet à tsc de typer les imports de composants .vue (VitePress les compile lui-même).
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}
