---
title: "LLMs"
description: "LSDEでLLM（Large Language Models）を使用するには、アクセス設定を行う必要があります。Cloud経由で使用するために事前に作成したAPIキーを入力するか、ローカルモデルの使用を希望する場合は「localhost」アドレスを設定してください。"
section: features
outline: [2, 3]
---

# LLMs

<DocImage src="/doc/lsde/doc-lsde-features-llms-2.webp" />

## LLMの使用 {#usage}
LSDEでLLM（Large Language Models）を使用するには、アクセス設定を行う必要があります。Cloud経由で使用するために事前に作成したAPIキーを入力するか、ローカルモデルの使用を希望する場合は「localhost」アドレスを設定してください。

### マルチキーシステム {#multi-keys}
LSDEでは、複数のAPIキーを同時に管理できます。
このシステムにより、クォータ（利用制限）がある複数のキーを、クレジットが残っているものへ自動的に切り替えながら活用することができます。

この機能は、毎日更新される無料キーの利用を最大化するのに最適です。
自動ローテーションを有効にすることで、手動での操作を介さず、安全にクレジットを使い切ることができます。

::: tip メモ
エラーが検出されると、LSDEはAPIキーが使い果たされたと判断し、自動的に次のキーに切り替えます。すべてのキーで無料クレジットを確実に回収できるよう、複数のローテーションサイクル（通常は2回）を設定できます。
:::

### LLMの有効化 {#activate-llm}
利用可能なLLMの有効化または無効化は、アプリケーションのフッターで行うことができます。
LLMが選択されていない場合、LSDEは事前に設定されたfallback LLMの使用を試みます。

---

<DocImage src="/doc/lsde/doc-lsde-features-llms-1.webp" />

## ローカルLLM {#local-llm}
モデルをローカルで使用したい場合は、サーバーのlocalhostアドレスを入力するだけです。LSDEがそこに接続してタスクを実行します。

### ローカルLLMのインストール方法は？ {#local-llm-install}
- お使いのOSに合わせて[Ollamaをダウンロード](https://ollama.com/download)してください。
- サーバーを起動し、モデルをインストールします。
- アプリケーションを閉じます（バックグラウンドで実行し続ける必要があります）。
- LSDEのOllama設定にlocalhostアドレスと対応するポートを入力します。
- 「Connecter」をクリックし、モデルを一つ選択します。
- ソフトウェア下部にあるステータスバーでLLMを有効にしてください。
