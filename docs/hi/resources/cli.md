---
title: "CLI"
description: "LSDE का CLI: lsde:// लिंक के ज़रिए Unity, Godot, Unreal या टर्मिनल से LSDE नियंत्रित करें — बिना पोर्ट या टोकन के।"
section: resources
outline: [2, 3]
---

# CLI

LSDE को `lsde://scene/sc_7f3a9k2m/DIALOG-002` जैसे पथ (path) के रूप वाले लिंक के ज़रिए कमांड लाइन से नियंत्रित किया जाता है: कोई दूसरा प्रोग्राम, स्क्रिप्ट या टर्मिनल लिंक खोलता है, और LSDE उस चीज़ को सामने लाकर दिखाता है जिसे वह लिंक इंगित करता है। `lsde --goto --scene` जैसा कोई विकल्प मौजूद नहीं है — उसकी जगह पथ काम करता है। यह ठीक वैसा ही तंत्र है जैसे VS Code के लिए `vscode://file/…` या Steam के लिए `steam://` — न कोई एक्सटेंशन इंस्टॉल करना, न कोई पोर्ट, न कोई टोकन।

## यह किस काम आता है {#what-is-it}
- गेम इंजन एडिटर (Unity, Godot, Unreal) में किसी पात्र या संवाद ट्रिगर करने वाले कॉम्पोनेन्ट पर रखा गया **"LSDE में देखें"** बटन।
- एक **"LSDE में फिर से चलाएँ"** बटन, जो गेमप्ले जहाँ तक पहुँचा है उस ब्लॉक से प्लेयर शुरू कर देता है।
- किसी **टिकट**, डिज़ाइन दस्तावेज़ या टीम मैसेज में दिया गया लिंक।
- कोई **टर्मिनल** कमांड या टूलिंग स्क्रिप्ट।

## लिंक का स्वरूप {#link-shape}
```
lsde://<action>/<scene id>
lsde://<action>/<scene id>/<block name>
```

| लिंक | LSDE क्या करता है |
|---|---|
| `lsde://scene/sc_7f3a9k2m` | ब्लूप्रिंट कैनवस में सीन खोलता है |
| `lsde://scene/sc_7f3a9k2m/DIALOG-002` | सीन खोलता है, ब्लॉक चुनता है और उस पर फ़्रेम करता है |
| `lsde://play/sc_7f3a9k2m` | सीन खोलता है और उसके शुरुआती ब्लॉक से प्लेयर चला देता है |
| `lsde://play/sc_7f3a9k2m/DIALOG-002` | सीन खोलता है, ब्लॉक चुनता है और उसी से प्लेयर चला देता है |

कुछ पार्सिंग नियम:
- स्कीम और एक्शन में अपर/लोअर केस का फ़र्क नहीं पड़ता; `scene` या `play` के अलावा कोई भी एक्शन लिंक को अस्वीकार कर देता है।
- सीन आईडी हमेशा `sc_` + 8 कैरेक्टर (`0-9`, `a-z`) के रूप में होती है।
- ब्लॉक का नाम वैकल्पिक है और **बिल्कुल सटीक** मिलान से जाँचा जाता है; स्पेस या ASCII से बाहर के कैरेक्टर को किसी भी सामान्य URL की तरह एन्कोड किया जाता है (`DIALOGUE A` के लिए `DIALOGUE%20A`)।
- गलत रूप वाला लिंक **अस्वीकार होकर लॉग में दर्ज कर दिया जाता है**, कभी अंदाज़ा नहीं लगाया जाता।

::: tip नोट
फ़िलहाल **Windows** पर उपलब्ध है, दो एक्शन के साथ (`scene` और `play`)। आगे और प्लेटफ़ॉर्म तथा एक्शन जोड़े जाएँगे।
:::

## किसी सीन की आईडी और ब्लॉक का नाम कैसे खोजें {#find-ids}
- **LSDE के भीतर** — सीन ट्री में सीन पर राइट-क्लिक करें, फिर **Scene ID** चुनें: यह सीधे क्लिपबोर्ड में चला जाता है।
- **गेम के कोड में** — ग्राफ़ एक्सपोर्ट करने पर टाइप्ड कॉन्स्टेंट (C#, C++, GDScript, TypeScript) जनरेट होते हैं; हर सीन कॉन्स्टेंट की वैल्यू उसकी आईडी होती है, जैसे `Scenes.act1` → `"sc_7f3a9k2m"`।
- **MCP से जुड़े किसी असिस्टेंट के ज़रिए** — `lsde_list_scenes` और `lsde_read_scene` हर सीन के लिए `sceneId` लौटाते हैं ([MCP Bridge](/hi/resources/mcp-bridge))।

किसी ब्लॉक का नाम वही होता है जो कैनवस पर उसके कार्ड पर और ट्री में उसकी लाइन पर दिखता है (`DIALOG-002`): स्थिर, अपने सीन से जुड़ा हुआ, और डिलीट होने के बाद कभी दोबारा इस्तेमाल न होने वाला।

## Windows पर लिंक सक्रिय करना {#enable-windows}
रजिस्ट्रेशन **कभी अपने-आप नहीं होता**: मेन्यू **Help → Windows Integration → Register Links**। इस क्लिक से `lsde://` इस LSDE कॉपी के नाम पर रजिस्टर हो जाता है, बिना किसी एलिवेशन की ज़रूरत के।

अगर कोई बटन या लिंक काम करना बंद कर दे, LSDE को किसी दूसरे फ़ोल्डर में ले जाया गया हो, या एक ही मशीन पर कई कॉपियाँ इंस्टॉल हों, तो दोबारा क्लिक करें — सबसे आख़िर में रजिस्टर हुई कॉपी को ही लिंक मिलते हैं।

## किसी इंजन या टूल से LSDE चलाना {#trigger-from-engine}
कोई भी प्रोग्राम जो URL खोल सकता है, लिंक भेज सकता है — इसके लिए किसी LSDE लाइब्रेरी की ज़रूरत नहीं है।

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

**वेब पेज, टिकट, दस्तावेज़**
```html
<a href="lsde://scene/sc_7f3a9k2m/DIALOG-002">LSDE में देखें</a>
```

**टर्मिनल**
```
PowerShell   Start-Process "lsde://play/sc_7f3a9k2m/DIALOG-002"
cmd          start "" "lsde://play/sc_7f3a9k2m/DIALOG-002"
```

## सुरक्षा: लिंक सिर्फ़ दिखा ही सकता है {#security}
लिंक बाहर से आता है, और कोई भी वेब पेज उसे खोल सकता है — इसलिए सुरक्षा शुरू से ही डिज़ाइन में शामिल है:
- **कोई राइट (लेखन) नहीं।** दोनों एक्शन सिर्फ़ सीन खोलते हैं, ब्लॉक चुनते हैं और प्लेयर चलाते हैं, जो कभी कुछ लिखता नहीं। प्रोजेक्ट में बदलाव करने वाला हर काम टोकन से सुरक्षित [MCP फ़साड](/hi/resources/mcp-bridge) से होकर गुज़रता है।
- **कोई प्रोजेक्ट खुलता, बंद होता या दोबारा लोड नहीं होता।** लिंक कभी भी कोई फ़ाइल पथ (path) नहीं ले जाता।
- **एक बंद व्याकरण (grammar)।** जो चीज़ अपेक्षित स्वरूप से मेल नहीं खाती, उसे अस्वीकार कर दिया जाता है, कभी अंदाज़ा नहीं लगाया जाता।
- **कुछ भी सुन नहीं रहा।** कोई नेटवर्क पोर्ट नहीं खोला जाता; लिंक ज़्यादा से ज़्यादा बस एक सीन दिखा सकता है।
