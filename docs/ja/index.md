---
layout: home

title: "LSDE — 公式ドキュメント LS-Dialog Editor"
# Le titre porte déjà le nom du produit : le suffixe du site ferait doublon dans l'onglet
# et dans les résultats de recherche.
titleTemplate: false
description: "AI翻訳支援ツールと高度なナレーション機能で、ソフトウェアやゲームのローカライズを強化しましょう。すべてをコントロールしながら。"

hero:
  name: "LSDE"
  text: "AIをコパイロットに、執筆と翻訳を。"
  tagline: "AI翻訳支援ツールと高度なナレーション機能で、ソフトウェアやゲームのローカライズを強化しましょう。すべてをコントロールしながら。"
  image:
    src: /brand/lsde-hero.webp
    alt: "LS-Dialog Editor"
  actions:
    - theme: brand
      text: "はじめる"
      link: /ja/getting-started/introduction
    - theme: alt
      text: "LSDE をダウンロード"
      link: https://lepasoft.com/ja/software/ls-dialog-editor#download

features:
  - icon:
      src: /icons/translation.svg
    title: "翻訳"
    details: "LLM（Large Language Models：大規模言語モデル）は、適切なコンテキスト（文脈）が提供されれば、翻訳において優れた性能を発揮する、人間によって設計された数学的アーキテクチャです。"
    link: /ja/features/translation
  - icon:
      src: /icons/blueprint.svg
    title: "Blueprint"
    details: "Blueprintエディターは、LSDEにおける対話を作成するためのビジュアルインターフェースです。"
    link: /ja/interface/blueprint
  - icon:
      src: /icons/agents.svg
    title: "MCP Bridge"
    details: "MCP Bridge サーバーは、外部の AI ツールおよびエージェントが、標準の MCP (Model Context Protocol) プロトコルを介してエディターと連携することを可能にします。"
    link: /ja/resources/mcp-bridge
  - icon:
      src: /icons/codebase.svg
    title: "スキャン"
    details: "「LSDE」プロジェクトでは、コードベーススキャナーの設定はパターンセクションを通じて行われます。"
    link: /ja/features/scanning
  - icon:
      src: /icons/voice.svg
    title: "音声"
    details: "LSDEには、ダイアログと同期してプロジェクトのサウンドトラックを管理する機能が統合されています。"
    link: /ja/features/voice
  - icon:
      src: /icons/diagnostic.svg
    title: "ローカライゼーション"
    details: "この必須モジュールを使用すると、プロジェクトの言語とネームスペースを構成できます。"
    link: /ja/interface/localization-manager
  - icon:
      src: /icons/rendering.svg
    title: "レンダリング"
    details: "LSDEは、テキストセグメントのレンダリングをリアルタイムでカスタマイズできる、非常に高度なテキストレンダリングエンジンを提供します。"
    link: /ja/features/rendering
  - icon:
      src: /icons/importexport.svg
    title: "インポート/エクスポート"
    details: "i18next 以外のカスタムエンジンを使用している場合、LSDE では独自の middleware を設定できます。これにより、データを LSDE フォーマットにインポートしたり、逆に LSDE…"
    link: /ja/features/import-export
  - icon:
      src: /icons/runtime.svg
    title: "Runtime (LSDEDE)"
    details: "マルチランタイム実行エンジンは、エディターからエクスポートされたブループリントを読み込み、実行します。"
    link: /ja/engines/runtime
---
