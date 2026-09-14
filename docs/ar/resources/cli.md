---
title: "CLI"
description: "واجهة سطر الأوامر في LSDE: تحكّم بـ LSDE من Unity أو Godot أو Unreal أو الطرفية عبر روابط lsde://، دون منفذ أو رمز وصول."
section: resources
outline: [2, 3]
---

# CLI

يُتحكَّم بـ LSDE من سطر الأوامر عبر روابط على شكل مسار، مثل `lsde://scene/sc_7f3a9k2m/DIALOG-002`: يفتح برنامج آخر أو نص برمجي أو الطرفية الرابط، فينتقل LSDE إلى المقدمة على ما يشير إليه. لا توجد خيارات من نوع `lsde --goto --scene`، والمسار يقوم مقامها. إنها الآلية نفسها المستخدمة في `vscode://file/…` الخاص بـ VS Code أو `steam://` الخاص بـ Steam — دون تثبيت أي إضافة، ودون منفذ، ودون رمز وصول.

## ما فائدتها {#what-is-it}
- زر **"عرض في LSDE"** يوضع في محرر محرك اللعبة (Unity وGodot وUnreal)، على شخصية أو على المكوّن الذي يُطلق حوارًا.
- زر **"إعادة التشغيل في LSDE"** يُشغّل المشغّل من الكتلة التي وصلت إليها الجلسة.
- رابط داخل **تذكرة (ticket)**، أو مستند تصميم، أو رسالة فريق.
- أمر في **الطرفية (terminal)** أو نص برمجي للأدوات.

## شكل الرابط {#link-shape}
```
lsde://<الإجراء>/<معرّف المشهد>
lsde://<الإجراء>/<معرّف المشهد>/<اسم الكتلة>
```

| الرابط | ما الذي يفعله LSDE |
|---|---|
| `lsde://scene/sc_7f3a9k2m` | يفتح المشهد في لوحة الـ blueprint |
| `lsde://scene/sc_7f3a9k2m/DIALOG-002` | يفتح المشهد، ويحدد الكتلة، ويوسّط العرض عليها |
| `lsde://play/sc_7f3a9k2m` | يفتح المشهد ويُشغّل المشغّل من كتلة البداية |
| `lsde://play/sc_7f3a9k2m/DIALOG-002` | يفتح المشهد، يحدد الكتلة، ويُشغّل المشغّل انطلاقًا منها |

بعض قواعد التحليل:
- المخطط والإجراء لا يفرّقان بين الأحرف الكبيرة والصغيرة؛ أي إجراء غير `scene` أو `play` يؤدي إلى رفض الرابط.
- يتخذ معرّف المشهد دائمًا الشكل `sc_` متبوعًا بـ 8 أحرف (`0-9`، `a-z`).
- اسم الكتلة اختياري ويُقارَن **مطابقةً تامة**؛ تُرمَّز المسافة أو أي حرف خارج ASCII كما في أي عنوان URL عادي (`DIALOGUE%20A` بدلًا من `DIALOGUE A`).
- الرابط ذو الصيغة الخاطئة **يُرفض ويُسجَّل**، ولا يُفسَّر تخمينًا أبدًا.

::: tip ملاحظة
متاح اليوم على **Windows** فقط، بإجراءين اثنين (`scene` و`play`). ستُضاف منصات وإجراءات أخرى لاحقًا.
:::

## إيجاد معرّف المشهد واسم الكتلة {#find-ids}
- **داخل LSDE** — انقر بزر الفأرة الأيمن على المشهد في شجرة المشاهد، ثم اختر **معرّف المشهد**: يُنسخ مباشرة إلى الحافظة.
- **داخل كود اللعبة** — يولّد تصدير الرسم البياني ثوابت مُصنَّفة الأنواع (C#, C++, GDScript, TypeScript)؛ وقيمة كل ثابت مشهد هي معرّفه، مثل `Scenes.act1` → `"sc_7f3a9k2m"`.
- **عبر مساعد متصل بواسطة MCP** — تُعيد الدالتان `lsde_list_scenes` و`lsde_read_scene` قيمة `sceneId` لكل مشهد ([جسر MCP](/ar/resources/mcp-bridge)).

اسم الكتلة هو الاسم الظاهر على بطاقتها في اللوحة وعلى سطرها في الشجرة (`DIALOG-002`): ثابت، وخاص بمشهده، ولا يُعاد استخدامه أبدًا بعد الحذف.

## تفعيل الروابط على Windows {#enable-windows}
التسجيل **لا يحدث تلقائيًا أبدًا**: القائمة **مساعدة → التكامل مع Windows → تسجيل الروابط**. هذه النقرة تُسجِّل `lsde://` باسم هذه النسخة من LSDE، دون الحاجة لرفع الصلاحيات.

أعد النقر إذا توقف زر أو رابط عن العمل، أو إذا نُقل LSDE إلى مجلد آخر، أو إذا كانت هناك عدة نسخ مثبَّتة على الجهاز — فآخر نسخة مسجَّلة هي التي تستقبل الروابط.

## التحكم بـ LSDE من محرك أو أداة {#trigger-from-engine}
أي برنامج قادر على فتح عنوان URL يمكنه إرسال رابط — دون الحاجة إلى أي مكتبة من LSDE.

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

**صفحة ويب، تذكرة، مستند**
```html
<a href="lsde://scene/sc_7f3a9k2m/DIALOG-002">عرض في LSDE</a>
```

**الطرفية**
```
PowerShell   Start-Process "lsde://play/sc_7f3a9k2m/DIALOG-002"
cmd          start "" "lsde://play/sc_7f3a9k2m/DIALOG-002"
```

## الأمان: الرابط لا يمكنه سوى العرض {#security}
الرابط يأتي من الخارج، وأي صفحة ويب يمكنها فتح رابط — لذا فإن الأمان مضمون من صميم التصميم:
- **لا كتابة إطلاقًا.** كلا الإجراءين يكتفيان بفتح مشهد، وتحديد كتلة، وتشغيل المشغّل، وهو لا يكتب أي شيء أبدًا. كل ما يُعدِّل مشروعًا يمر عبر [جسر MCP](/ar/resources/mcp-bridge) المحمي برمز وصول.
- **لا يُفتح أي مشروع ولا يُغلق ولا يُعاد تحميله.** لا يحمل الرابط أبدًا مسار ملف.
- **قواعد صارمة مغلقة.** كل ما لا يطابق الشكل المتوقَّع يُرفض، ولا يُفسَّر تخمينًا أبدًا.
- **لا شيء يستمع.** لا يُفتح أي منفذ شبكة؛ أسوأ ما يمكن أن يفعله الرابط هو عرض مشهد.
