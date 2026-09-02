---
title: "Unreal Engine"
description: "LSDEは、UnrealのネイティブローカライゼーションシステムとC++クラスの生成を介して、Unreal Engineをサポートしています。"
section: engines
outline: [2, 3]
---

# Unreal Engine

LSDEは、UnrealのネイティブローカライゼーションシステムとC++クラスの生成を介して、**Unreal Engine**をサポートしています。

ワークフロー:
- **インポート** — Localization Dashboard経由でUnrealからテキストをエクスポートし、その後LSDEにインポートします。
- **編集** — LLMアシスタンスを活用して、LSDEでテキストを翻訳・編集します。
- **エクスポート** — ローカライズされたファイルを再エクスポートし、Unrealに再インポートします。

## C++クラス生成 {#cpp-generation}
LSDEは、ブループリントの定義から、**C++** の型付きアクセスクラスを自動的に生成します。
これらのクラスはUnrealプロジェクトに統合され、コンパイル時の型チェックによりダイアログへのアクセスを可能にします。

## ヒント {#tips}
- 言語とローカライゼーションターゲットの初期設定には、Unrealの**Localization Dashboard**を使用します。
- Gitのバージョン管理のために、`.lsde` ファイルをUnrealプロジェクトのルートに配置します。
- LSDEが翻訳と構成を処理し、Unrealは`FText`を介してパッケージングと実行時ロードを管理します。
