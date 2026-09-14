---
title: "CLI"
description: "LSDE의 CLI: lsde:// 링크로 Unity, Godot, Unreal 또는 터미널에서 LSDE를 제어하세요. 포트나 토큰이 필요 없습니다."
section: resources
outline: [2, 3]
---

# CLI

LSDE는 `lsde://scene/sc_7f3a9k2m/DIALOG-002`처럼 경로 형태의 링크를 통해 명령줄에서 제어할 수 있습니다. 다른 프로그램이나 스크립트, 터미널이 링크를 열면 LSDE가 그 대상을 전면에 표시합니다. `lsde --goto --scene` 같은 옵션은 존재하지 않으며, 경로가 그 역할을 대신합니다. 이는 VS Code의 `vscode://file/…`나 Steam의 `steam://`와 같은 방식입니다 — 설치할 확장 프로그램도, 포트도, 토큰도 필요 없습니다.

## 용도 {#what-is-it}
- 게임 엔진 에디터(Unity, Godot, Unreal)에서 대화를 트리거하는 캐릭터나 컴포넌트에 배치하는 **"LSDE에서 보기"** 버튼.
- 현재 플레이가 진행된 블록에서 플레이어를 실행하는 **"LSDE에서 다시 재생"** 버튼.
- **티켓**, 설계 문서, 팀 메시지에 넣는 링크.
- **터미널** 명령이나 툴링 스크립트.

## 링크의 형태 {#link-shape}
```
lsde://<액션>/<씬 ID>
lsde://<액션>/<씬 ID>/<블록 이름>
```

| 링크 | LSDE의 동작 |
|---|---|
| `lsde://scene/sc_7f3a9k2m` | 블루프린트 캔버스에서 씬을 엽니다 |
| `lsde://scene/sc_7f3a9k2m/DIALOG-002` | 씬을 열고 블록을 선택한 뒤 화면을 그 블록에 맞춥니다 |
| `lsde://play/sc_7f3a9k2m` | 씬을 열고 시작 블록부터 플레이어를 실행합니다 |
| `lsde://play/sc_7f3a9k2m/DIALOG-002` | 씬을 열고 블록을 선택한 뒤 그 블록부터 플레이어를 실행합니다 |

몇 가지 파싱 규칙:
- 스킴과 액션은 대소문자를 구분하지 않습니다. `scene`이나 `play`가 아닌 액션은 링크를 거부합니다.
- 씬 ID는 항상 `sc_` + 8자(`0-9`, `a-z`) 형태를 따릅니다.
- 블록 이름은 선택 사항이며 **정확히** 일치해야 비교됩니다. 공백이나 ASCII가 아닌 문자는 일반 URL과 동일하게 인코딩됩니다(`DIALOGUE A`는 `DIALOGUE%20A`).
- 형식이 잘못된 링크는 **거부되고 로그에 기록**되며, 추측해서 처리되지 않습니다.

::: tip 참고
현재 **Windows**에서 사용 가능하며, 두 가지 액션(`scene`, `play`)을 지원합니다. 앞으로 더 많은 플랫폼과 액션이 추가될 예정입니다.
:::

## 씬 ID와 블록 이름 찾기 {#find-ids}
- **LSDE 내에서** — 씬 트리에서 씬을 마우스 오른쪽 버튼으로 클릭한 뒤 **씬 ID**를 선택하면 클립보드에 바로 복사됩니다.
- **게임 코드에서** — 그래프를 내보내면 타입이 지정된 상수(C#, C++, GDScript, TypeScript)가 생성되며, 각 씬 상수의 값이 곧 해당 ID입니다. 예: `Scenes.act1` → `"sc_7f3a9k2m"`.
- **MCP로 연결된 어시스턴트를 통해** — `lsde_list_scenes`와 `lsde_read_scene`이 각 씬의 `sceneId`를 반환합니다([MCP Bridge](/ko/resources/mcp-bridge)).

블록 이름은 캔버스의 카드와 트리의 행에 표시되는 이름(`DIALOG-002`)입니다. 안정적이고 해당 씬에 속하며, 삭제 후에는 절대 재사용되지 않습니다.

## Windows에서 링크 활성화하기 {#enable-windows}
등록은 **절대 자동으로 이루어지지 않습니다**: **도움말 → Windows 통합 → 링크 등록** 메뉴에서 진행합니다. 이 클릭으로 이 LSDE 사본의 이름으로 `lsde://`가 등록되며, 권한 상승은 필요하지 않습니다.

버튼이나 링크가 더 이상 작동하지 않거나, LSDE를 다른 폴더로 옮겼거나, 한 컴퓨터에 여러 사본이 설치되어 있다면 다시 클릭하세요 — 가장 최근에 등록된 사본이 링크를 받습니다.

## 엔진이나 툴에서 LSDE 실행하기 {#trigger-from-engine}
URL을 열 수 있는 프로그램이라면 무엇이든 링크를 보낼 수 있습니다 — LSDE 라이브러리는 전혀 필요하지 않습니다.

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

**웹페이지, 티켓, 문서**
```html
<a href="lsde://scene/sc_7f3a9k2m/DIALOG-002">LSDE에서 보기</a>
```

**터미널**
```
PowerShell   Start-Process "lsde://play/sc_7f3a9k2m/DIALOG-002"
cmd          start "" "lsde://play/sc_7f3a9k2m/DIALOG-002"
```

## 보안: 링크는 오직 보여줄 수만 있습니다 {#security}
링크는 외부에서 오며, 어떤 웹페이지든 링크를 열 수 있습니다 — 그래서 보안은 설계 자체로 보장됩니다:
- **쓰기 작업이 전혀 없습니다.** 두 액션 모두 씬을 열고, 블록을 선택하고, 플레이어를 실행할 뿐이며 플레이어는 절대 쓰기 작업을 하지 않습니다. 프로젝트를 수정하는 모든 작업은 토큰으로 보호되는 [MCP 파사드](/ko/resources/mcp-bridge)를 거칩니다.
- **프로젝트를 열거나, 닫거나, 다시 불러오지 않습니다.** 링크는 파일 경로를 절대 포함하지 않습니다.
- **닫힌 문법.** 예상된 형식과 일치하지 않는 것은 거부되며, 추측으로 처리되지 않습니다.
- **아무것도 대기(listen)하지 않습니다.** 네트워크 포트가 전혀 열리지 않습니다. 링크가 할 수 있는 최악의 일은 씬을 표시하는 것뿐입니다.
