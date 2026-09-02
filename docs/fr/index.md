---
layout: home

title: "LSDE — Documentation officielle LS-Dialog Editor"
# Le titre porte déjà le nom du produit : le suffixe du site ferait doublon dans l'onglet
# et dans les résultats de recherche.
titleTemplate: false
description: "Votre marché ne s’arrête pas à votre langue. LSDE compose vos scènes, les traduit, génère les voix et détecte les incohérences. Vous gardez la main sur…"

hero:
  name: "LSDE"
  text: "L’éditeur de dialogues qui compose et traduit sans trahir"
  tagline: "Votre marché ne s’arrête pas à votre langue. LSDE compose vos scènes, les traduit, génère les voix et détecte les incohérences. Vous gardez la main sur votre projet."
  image:
    src: /brand/lsde-hero.webp
    alt: "LS-Dialog Editor"
  actions:
    - theme: brand
      text: "Commencer"
      link: /fr/getting-started/introduction
    - theme: alt
      text: "Télécharger LSDE"
      link: https://lepasoft.com/fr/software/ls-dialog-editor#download

features:
  - icon:
      src: /icons/translation.svg
    title: "Traduction"
    details: "Traduire scène par scène prend des mois. Vos répliques partent par lot vers le LLM de votre choix, contexte et métadonnées inclus."
    link: /fr/features/translation
  - icon:
      src: /icons/blueprint.svg
    title: "Blueprints"
    details: "Un outil qui casse le rythme casse votre écriture. Dialog, Choice, Condition et Action s’enchaînent au clavier, puis s’exportent…"
    link: /fr/interface/blueprint
  - icon:
      src: /icons/agents.svg
    title: "Agents IA"
    details: "Un agent qui ne voit pas vos scènes invente. Claude, Copilot ou le vôtre les lisent et les modifient par MCP, sans quitter votre…"
    link: /fr/resources/mcp-bridge
  - icon:
      src: /icons/codebase.svg
    title: "Codebase"
    details: "Une clé manquante se découvre en production. Le scanner parcourt vos sources et montre où chacune sert, et lesquelles manquent…"
    link: /fr/features/scanning
  - icon:
      src: /icons/voice.svg
    title: "Voix"
    details: "Le doublage multilingue coûte un budget de studio. Ici un profil vocal par personnage suffit à générer votre narration dans toutes…"
    link: /fr/features/voice
  - icon:
      src: /icons/diagnostic.svg
    title: "Diagnostic"
    details: "Un jeton perdu en coréen se paie en patch day one. Les incohérences entre vos langues remontent en continu, avant que votre build…"
    link: /fr/interface/localization-manager
  - icon:
      src: /icons/rendering.svg
    title: "Rendering"
    details: "LSDE offre un moteur de rendu de texte très avancé qui permet de personnaliser en temps réel le rendu de segments de texte."
    link: /fr/features/rendering
  - icon:
      src: /icons/importexport.svg
    title: "Import/Export"
    details: "Si vous travaillez avec un moteur personnalisé autre que i18next, LSDE vous permet de configurer votre propre middleware."
    link: /fr/features/import-export
  - icon:
      src: /icons/runtime.svg
    title: "Runtime (LSDEDE)"
    details: "Le moteur d'exécution multi-runtime charge et exécute les blueprints exportés depuis l'éditeur."
    link: /fr/engines/runtime
---
