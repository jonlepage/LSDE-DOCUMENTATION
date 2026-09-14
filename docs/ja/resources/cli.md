---
title: "CLI"
description: "LSDEのCLI：lsde://リンクを使って、Unity、Godot、Unreal、またはターミナルからLSDEを操作できます。ポートもトークンも不要です。"
section: resources
outline: [2, 3]
---

# CLI

LSDEは、`lsde://scene/sc_7f3a9k2m/DIALOG-002`のようなパス形式のリンクを使って、コマンドラインから操作できます。ほかのプログラム、スクリプト、ターミナルがリンクを開くと、LSDEが前面に表示され、リンクが指す場所を開きます。`lsde --goto --scene`のようなオプションは存在せず、パスがその役割を果たします。VS Codeの`vscode://file/…`やSteamの`steam://`と同じ仕組みで、拡張機能のインストールも、ポートも、トークンも必要ありません。

## 用途 {#what-is-it}
- ゲームエンジンのエディター（Unity、Godot、Unreal）で、キャラクターやダイアログを発生させるコンポーネントに置く **「LSDEで表示」** ボタン。
- プレイの現在位置にあるブロックからプレーヤーを起動する **「LSDEで再生」** ボタン。
- **チケット**、設計ドキュメント、チームのメッセージに貼るリンク。
- **ターミナル**のコマンドや、ツール用のスクリプト。

## リンクの形式 {#link-shape}
```
lsde://<アクション>/<シーンID>
lsde://<アクション>/<シーンID>/<ブロック名>
```

| リンク | LSDEの動作 |
|---|---|
| `lsde://scene/sc_7f3a9k2m` | ブループリントのキャンバスでシーンを開く |
| `lsde://scene/sc_7f3a9k2m/DIALOG-002` | シーンを開き、ブロックを選択して表示範囲に収める |
| `lsde://play/sc_7f3a9k2m` | シーンを開き、開始ブロックからプレーヤーを起動する |
| `lsde://play/sc_7f3a9k2m/DIALOG-002` | シーンを開き、ブロックを選択して、そこからプレーヤーを起動する |

解析のルール：
- スキームとアクションは、大文字と小文字を区別しません。`scene`と`play`以外のアクションは、リンクを拒否します。
- シーンIDは常に、`sc_`に続く8文字（`0-9`、`a-z`）です。
- ブロック名は省略でき、**完全一致**で比較されます。スペースやASCII以外の文字は、通常のURLと同じようにエンコードします（`DIALOGUE A`は`DIALOGUE%20A`）。
- 不正な形式のリンクは**拒否され、ログに記録されます**。推測で解釈されることはありません。

::: tip メモ
現在は**Windows**で利用でき、アクションは`scene`と`play`の2つです。今後、ほかのプラットフォームやアクションも追加される予定です。
:::

## シーンIDとブロック名の調べ方 {#find-ids}
- **LSDE内で** — シーンツリーでシーンを右クリックし、**シーンID**を選ぶと、クリップボードにコピーされます。
- **ゲームのコード内で** — グラフをエクスポートすると型付き定数（C#、C++、GDScript、TypeScript）が生成され、各シーン定数の値がそのIDになります。例：`Scenes.act1` → `"sc_7f3a9k2m"`。
- **MCPで接続したアシスタントから** — `lsde_list_scenes`と`lsde_read_scene`が、各シーンの`sceneId`を返します（[MCP Bridge](/ja/resources/mcp-bridge)）。

ブロック名は、キャンバス上のカードと、ツリーの行に表示される名前（`DIALOG-002`）です。変わることがなく、そのシーンに固有で、削除後に再利用されることもありません。

## Windowsでリンクを有効にする {#enable-windows}
登録が**自動で行われることはありません**。メニューの **ヘルプ → Windows統合 → リンクを登録** から行います。このクリックで、`lsde://`がこのLSDEのコピーに登録されます。管理者権限は必要ありません。

ボタンやリンクが反応しなくなったとき、LSDEを別のフォルダーに移動したとき、または同じPCに複数のコピーがあるときは、もう一度クリックしてください。最後に登録したコピーがリンクを受け取ります。

## エンジンやツールからLSDEを操作する {#trigger-from-engine}
URLを開けるプログラムなら、どれでもリンクを送れます。LSDEのライブラリは必要ありません。

**Unity (C#)**
```csharp
#if UNITY_EDITOR
using System;
using UnityEngine;

public static class LsdeLinks
{
    public static void Reveal(string sceneId, string blockName = null) =>
        Application.OpenURL(Build("scene", sceneId, blockName));

    public static void Play(string sceneId, string blockName = null) =>
        Application.OpenURL(Build("play", sceneId, blockName));

    static string Build(string action, string sceneId, string blockName) =>
        string.IsNullOrEmpty(blockName)
            ? $"lsde://{action}/{sceneId}"
            : $"lsde://{action}/{sceneId}/{Uri.EscapeDataString(blockName)}";
}
#endif
```

**Godot (GDScript)**
```gdscript
func reveal_in_lsde(scene_id: String, block_name := "") -> void:
    var url := "lsde://scene/" + scene_id
    if block_name != "":
        url += "/" + block_name.uri_encode()
    OS.shell_open(url)
```

**Unreal Engine (C++)**
```cpp
void RevealInLsde(const FString& SceneId, const FString& BlockName)
{
    FString Url = TEXT("lsde://scene/") + SceneId;
    if (!BlockName.IsEmpty())
    {
        Url += TEXT("/") + FGenericPlatformHttp::UrlEncode(BlockName);
    }
    FPlatformProcess::LaunchURL(*Url, nullptr, nullptr);
}
```

**Webページ、チケット、ドキュメント**
```html
<a href="lsde://scene/sc_7f3a9k2m/DIALOG-002">LSDEで表示</a>
```

**ターミナル**
```
PowerShell   Start-Process "lsde://play/sc_7f3a9k2m/DIALOG-002"
cmd          start "" "lsde://play/sc_7f3a9k2m/DIALOG-002"
```

## セキュリティ：リンクにできるのは表示だけ {#security}
リンクは外部から届き、どのWebページからでも開けます。そのため安全性は、仕組みそのものによって確保されています。
- **書き込みは一切ありません。** 2つのアクションは、シーンを開き、ブロックを選択し、プレーヤーを起動するだけです。プレーヤーは何も書き込みません。プロジェクトを変更する操作はすべて、トークンで保護された[MCP Bridge](/ja/resources/mcp-bridge)を経由します。
- **プロジェクトを開いたり、閉じたり、再読み込みしたりしません。** リンクにファイルパスが含まれることはありません。
- **閉じた文法。** 想定された形式に合わないものは拒否され、推測で解釈されることはありません。
- **待ち受けは一切ありません。** ネットワークポートは開かれません。リンクにできる最悪のことは、シーンを表示することだけです。
