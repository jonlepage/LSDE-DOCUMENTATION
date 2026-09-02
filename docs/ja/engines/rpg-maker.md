---
title: "RPG Maker"
description: "LSDEは、RPG Maker MV および RPG Maker MZ とネイティブに統合されており、ダイアログの管理と翻訳を可能にします。"
section: engines
outline: [2, 3]
---

# RPG Maker

LSDEは、**RPG Maker MV** および **RPG Maker MZ** とネイティブに統合されており、ダイアログの管理と翻訳を可能にします。

## 仕組み {#how-it-works}
RPG Makerは、ダイアログをJSONファイル（Map、CommonEvents、Systemなど）に保存します。
LSDEはこれらのファイルをインポートし、快適に編集・翻訳できるようにし、その後、RPG Makerが期待する形式で再エクスポートできます。

RMMZ i18n の完全なサポートが必要な場合は、[こちらのプラグイン](https://raw.githubusercontent.com/jonlepage/LSDE-RMMZ-I18N/refs/heads/main/dist/LSDE_i18n.js)をダウンロードする必要があります。

典型的なワークフローは次のとおりです。
- **インポート** — LSDEをRPG Makerプロジェクトの`data/`フォルダに向けます。Smart Importはダイアログキーを自動的に検出し、抽出します。
- **編集** — LLMアシスタンス、メタデータ、スペルチェッカーを使用して、手動または自動でテキストを作成、修正、翻訳します。
- **エクスポート** — 変更されたJSONファイルをRPG Makerプロジェクトに直接再エクスポートします。

## サポートされているバージョン {#supported-versions}
- **RPG Maker MV** — 完全なJSONインポート/エクスポート
- **RPG Maker MZ** — 完全なJSONインポート/エクスポート
- より古いバージョン（VX Ace、XP）はネイティブにはサポートされていませんが、カスタムパーサーを介して動作する可能性があります。

## ビデオチュートリアル {#video-tutorial}
<YouTube id="0cJjxtI088Q" />

## ヒント {#tips}
- コードスキャナーを使用して、すべてのキーがRPG Makerファイルに存在することを確認します。
- プロジェクト設定でRegexパターンを設定し、RPG Makerのダイアログキーを自動的に検出します。
- イベントに複数のキャラクターとのダイアログが含まれている場合は、MAD（Multi Actor Dialog）モードを活用してください。
