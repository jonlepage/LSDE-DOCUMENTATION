---
title: "音声"
description: "LSDEには、ダイアログと同期してプロジェクトのサウンドトラックを管理する機能が統合されています。"
section: features
outline: [2, 3]
---

# 音声

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-1.webp" />

LSDEには、ダイアログと同期してプロジェクトのサウンドトラックを管理する機能が統合されています。

## 前提条件 {#prerequisites}
まず、[Elevenlabs](/ja/interface/global-settings#llm-pour-les-voix) APIキーを取得する必要があります。
Elevenlabsは現在、無料の月額プランを提供しており、APIをテストし、その専門知識を発見するのに最適です。

## 設定 {#configuration}
プロジェクトの音声システムを設定するには、[音声設定セクション](/ja/interface/project-settings#voices)にアクセスしてください。

1.  音声のエクスポートフォルダを定義します。これはプロジェクトの保存ごとに保存されます。
2.  システムは出力ファイルに名前を付けることができます。
このオプションは、ゲームエンジンやプロジェクトのニーズに合わせて名前を調整します。
ドラッグアンドドロップでラベルの順序を調整します。

---

## 変数の関連付け (自動) {#associate-variables-auto}
<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-2.webp" />

この例は、複数のキャラクターがダイアログに参加し、ゲームエンジンがそれらを抽出する必要があるJRPGの音声システムを設定する方法を示しています。

1.  話し相手の変数グループを選択します。
2.  「ダイアログごとに複数の話し相手」オプションをチェックします。
3.  正規表現（`regex`）を設定するためのセクションが開き、必ず1つのグループを含める必要があります。
    -   `id`グループ：選択したグループの変数内で検索する`tag`の値をキャプチャします。
    -   `value`グループ：`id`グループに対してキャプチャされたテキスト。
    > オプションです。テキストを作成できるためです。このグループは自動化を最大化し、作業負荷を軽減します。

4.  設定されたグループのすべての変数が、それぞれのアイコン（設定されている場合）とともに表示されます。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-3.webp" />

## `regex`をテストする {#test-regex}
[regexr](https://regexr.com)で`regex`をテストして、よりよく理解することができます。
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```
1.  たとえば、2番目のキャプチャを選択します。
2.  「詳細」にアクセスします。
3.  次のことがわかります。
    -   グループ1は、キャラクター「a1」の`tag id`をキャプチャします。
    -   グループ2は、「a1」の`id`の残りのテキストをキャプチャします。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-4.webp" />

## 変数 {#variables}
[変数セクション](/ja/interface/project-settings#les-variables)で：

1.  事前に作成された`ACTORS`グループ内で。
2.  このリストは、[以前に見たリスト](/ja/features/voice#associer-des-variables)に対応します。
3.  外観を設定すると、ダイアログとキャラクターの個性の整理と検証が大幅に容易になります。

::: tip メモ
これらの情報はいつでも変更したり、後で補完したりできることに注意してください。
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-5.webp" />

## キャラクターの設定 {#configure-character}
[音声設定](/ja/features/voice#associer-des-variables)に戻りましょう。

1.  音声IDを変数に関連付けます。

::: tip メモ
音声IDはElevenlabsプラットフォームで作成されます。Elevenlabsアカウントには、すでにデフォルトモデルが含まれています。
:::
2.  音声ジェネレーターをテストして調整することもできます。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-6.webp" />

## 音声IDを作成する {#create-voice-id}
[elevenlabs](https://elevenlabs.io/app/voice-lab)のプロフィールで：

1.  新しいカスタム音声を作成します。
LSDEはAPIのすべてのモデルをサポートしています。現在、感情タグの管理に優れ、より良い物語制御を提供する`V3`モデルを強くお勧めします。
2.  作成後、音声セクションに移動します。
3.  IDが存在することを確認します（例：[FCT7O](https://lepasoft.com/ja/games/fanatic-cardboard-f7o)の主人公「Lia Sun-berry」）。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-7.webp" />

## 音声テキストを生成する {#generate-voice-text}
IDが入力されたら、音声テキストを視覚化または生成するには、[音声マネージャー](/ja/interface/voice-manager)ウィンドウを開きます。

1.  ツリービューでキーを選択します。
フォルダは選択しないでください。音声テキストは読み取り専用で表示されます。
2.  `regex`がダイアログのキャラクターをキャプチャし、音声生成インターフェースを提供します。
3.  生成時、テキストはその時点での「署名」を受け取ります。キャラクターの順序を変更せずにテキストが変更された場合、音声の再生成が必要かどうかを確認するアラートが表示されます。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-8.webp" />

## 変数の関連付け (手動) {#associate-variables-manual}
ダイアログごとに1人のキャラクターのみ（インタラクションなし）のシナリオの場合、シンプルなプロジェクトに典型的です。
1.  「キーごとに複数の話し相手」のチェックボックスをオフにできます。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-9.webp" />

## メタデータを設定する {#configure-metas}
各ダイアログに、音声を生成したいキャラクターを関連付けます。

1.  ターゲットダイアログのキーを選択します。
2.  このダイアログで管理する各アクターをチェックします。

### なぜ複数のキャラクターなのですか？ {#why-multiple-characters}
これは、異なる個性や性別を持つ複数のランダムなNPCによって再利用される歓迎のフレーズのような、汎用的なダイアログに役立つ場合があります。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-10.webp" />

## 再編成 {#reorganization}
1.  常にキー上で、フォルダ上ではありません。
2.  音声マネージャーは、再編成の問題を報告する場合があります。
この例では、複数のキャラクターの自動割り当てから手動システムに移行しました。

::: tip メモ
システムがキャラクターの順序や数に大きな変更を検出した場合、すでに生成された各音声インスタンスを手動で再編成する必要があります。
:::

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-11.webp" />

各ダイアログの音声ファイルを、メタデータで宣言されている、または自動割り当てシステムを介して関連付けられているキャラクターにドラッグアンドドロップするだけです。
