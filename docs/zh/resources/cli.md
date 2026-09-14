---
title: "CLI"
description: "LSDE 的 CLI：通过 lsde:// 链接，从 Unity、Godot、Unreal 或终端控制 LSDE，无需端口或令牌。"
section: resources
outline: [2, 3]
---

# CLI

LSDE 通过路径形式的链接实现命令行控制，例如 `lsde://scene/sc_7f3a9k2m/DIALOG-002`：其他程序、脚本或终端打开该链接，LSDE 就会切换到前台，并定位到链接所指向的内容。并不存在 `lsde --goto --scene` 这类选项，路径本身就起到了这个作用。这与 VS Code 的 `vscode://file/…` 或 Steam 的 `steam://` 是同一种机制 — 无需安装扩展，无需端口，也无需令牌。

## 用途 {#what-is-it}
- 在游戏引擎编辑器（Unity、Godot、Unreal）中，为角色或触发对话的组件添加一个 **“在 LSDE 中查看”** 按钮。
- 一个 **“在 LSDE 中重播”** 按钮，从游戏当前进度所在的块启动播放器。
- 放在**工单**、设计文档或团队消息中的链接。
- **终端**命令或工具脚本。

## 链接的形式 {#link-shape}
```
lsde://<动作>/<场景 ID>
lsde://<动作>/<场景 ID>/<块名称>
```

| 链接 | LSDE 执行的操作 |
|---|---|
| `lsde://scene/sc_7f3a9k2m` | 在 blueprint 画布中打开该场景 |
| `lsde://scene/sc_7f3a9k2m/DIALOG-002` | 打开场景，选中该块并将视图对准它 |
| `lsde://play/sc_7f3a9k2m` | 打开场景，并从起始块启动播放器 |
| `lsde://play/sc_7f3a9k2m/DIALOG-002` | 打开场景，选中该块，并从该块启动播放器 |

一些解析规则：
- 协议名和动作不区分大小写；`scene` 和 `play` 以外的任何动作都会导致链接被拒绝。
- 场景 ID 始终是 `sc_` 后接 8 个字符（`0-9`、`a-z`）。
- 块名称可选，且需要**精确匹配**；空格或非 ASCII 字符按普通 URL 的方式编码（`DIALOGUE A` 写作 `DIALOGUE%20A`）。
- 格式错误的链接会被**拒绝并记录到日志中**，绝不会被猜测处理。

::: tip 备注
目前仅支持 **Windows**，提供两个动作（`scene` 和 `play`）。后续将支持更多平台和动作。
:::

## 查找场景 ID 和块名称 {#find-ids}
- **在 LSDE 中** — 在场景树中右键点击该场景，选择 **场景 ID**，即可直接复制到剪贴板。
- **在游戏代码中** — 导出图谱时会生成带类型的常量（C#、C++、GDScript、TypeScript）；每个场景常量的值就是它的 ID，例如 `Scenes.act1` → `"sc_7f3a9k2m"`。
- **通过接入 MCP 的助手** — `lsde_list_scenes` 和 `lsde_read_scene` 会返回每个场景的 `sceneId`（[MCP Bridge](/zh/resources/mcp-bridge)）。

块名称就是画布上的卡片和树中对应行所显示的名称（`DIALOG-002`）：它稳定不变，归属于所在场景，删除后也绝不会被重新使用。

## 在 Windows 上启用链接 {#enable-windows}
注册**绝不会自动进行**：请通过菜单 **帮助 → Windows 集成 → 注册链接** 完成。点击后，`lsde://` 会以当前这份 LSDE 的名义注册，无需提升权限。

如果按钮或链接不再起作用、LSDE 被移动到了其他文件夹，或电脑上安装了多份 LSDE，请重新点击注册 — 最后注册的那一份会接收链接。

## 从引擎或工具中控制 LSDE {#trigger-from-engine}
任何能够打开 URL 的程序都可以发送链接 — 不需要任何 LSDE 库。

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

**网页、工单、文档**
```html
<a href="lsde://scene/sc_7f3a9k2m/DIALOG-002">在 LSDE 中查看</a>
```

**终端**
```
PowerShell   Start-Process "lsde://play/sc_7f3a9k2m/DIALOG-002"
cmd          start "" "lsde://play/sc_7f3a9k2m/DIALOG-002"
```

## 安全性：链接只能用于展示 {#security}
链接来自外部，任何网页都可以打开它 — 因此安全性由设计本身保证：
- **不写入任何内容。** 这两个动作只会打开场景、选中块并启动播放器，而播放器从不写入数据。任何修改项目的操作都必须经过受令牌保护的 [MCP Bridge](/zh/resources/mcp-bridge)。
- **不会打开、关闭或重新加载任何项目。** 链接中绝不会包含文件路径。
- **封闭的语法。** 任何不符合预期格式的内容都会被拒绝，绝不会被猜测处理。
- **没有任何监听。** 不会打开任何网络端口；链接最多只能让一个场景显示出来。
