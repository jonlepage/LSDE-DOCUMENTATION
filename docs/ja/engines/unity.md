---
title: "Unity"
description: "LSDEは、Unityと連携して、ダイアログをUnityプロジェクト内で直接管理、翻訳、同期します。"
section: engines
outline: [2, 3]
---

# Unity

LSDEは、**Unity**と連携して、ダイアログをUnityプロジェクト内で直接管理、翻訳、同期します。

<YouTube id="NNlNnLo18Mo" />

## LSDE Bridgeプラグイン {#lsde-bridge}
LSDEは無料のUnityプラグイン「**LSDE Bridge — Unity Localization Sync**」を提供しています。
このパッケージにより、各String Table Collectionを手動で1つずつインポート/エクスポートする必要がなくなります。

**主な機能：**
- **一括インポート/エクスポート** — すべてのローカライゼーションテーブルを一度の操作で同期します。
- **対応フォーマット** — XLIFF 2.0およびCSV。Unity Localizationパッケージと互換性があります。
- **自動リネーム** — 同じIDを持つが異なる名前のキーを検出し、Unity内でそれらの名前を変更します。
- **孤立キーのクリーンアップ** — Unityに存在するがインポートされたファイルにはないキーを削除します。
- **ドライラン** — 変更を適用する前にプレビューします。
- **開発者レポート** — 実行されたアクションと、C#スクリプト内の古い参照を見つけるためのgrepコマンドを含むMarkdownレポートを生成します。

**前提条件：**
- Unity **2021.3 LTS** 以降
- [Unity Localization](https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/index.html) パッケージ **1.4.2+**

**インストール：**
**Window > Package Manager**を開き、**+** > **Add package from git URL**をクリックし、リポジトリのURLを入力してください。
リンクは近日公開予定です。

## CSVワークフロー {#workflow-csv}
CSVワークフローは、始めるのに最も簡単です。
- **エクスポート** — LSDE Bridgeで「Export All」をクリックして、すべてのテーブルをCSVファイルにエクスポートします。
- **編集** — これらのCSVをLSDEにインポートし、テキストを編集および翻訳します。
- **インポート** — LSDEは変更されたCSVをエクスポートし、その後LSDE Bridgeで「Import All CSV」をクリックしてUnityと同期します。

## XLIFFワークフロー {#workflow-xliff}
より詳細な制御が必要なプロジェクトの場合：
- **エクスポート** — Unityに組み込まれているXLIFFエクスポートを使用して、.xlfファイルを生成します。
- **編集** — LSDEにインポートし、LLMアシスタンスとメタデータを使用して編集します。
- **インポート** — LSDEは.xlfをエクスポートし、その後LSDE BridgeがXML解析とStringTablesの直接更新を伴うインポートを実行します。

## プラグインへのアクセス {#access}
Unityでプラグインを開くには、**Window > Asset Management > LSDE Bridge**を選択します。
フォーマット（XLIFFまたはCSV）、インポート/エクスポートフォルダ、および同期オプションを設定します。

## ヒント {#tips}
- Gitのバージョン管理を利用するために、`.lsde`ファイルをUnityプロジェクトのルートに配置してください。
- インポート前に常に**ドライラン**を使用して変更を確認してください。
- 名前が変更された、または削除されたキーを特定し、C#の参照を更新するために、**開発者レポート**を有効にしてください。
