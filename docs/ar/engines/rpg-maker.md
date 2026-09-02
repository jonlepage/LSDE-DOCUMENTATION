---
title: "RPG Maker"
description: "LSDE يتكامل بشكل أصلي مع RPG Maker MV و RPG Maker MZ لإدارة وترجمة حواراتك."
section: engines
outline: [2, 3]
---

# RPG Maker

LSDE يتكامل بشكل أصلي مع **RPG Maker MV** و **RPG Maker MZ** لإدارة وترجمة حواراتك.

## كيف يعمل {#how-it-works}
يخزن RPG Maker حواراته في ملفات JSON (Map، CommonEvents، System، إلخ).
يمكن لـ LSDE استيراد هذه الملفات، مما يتيح لك تحريرها وترجمتها بسهولة، ثم إعادة تصديرها بالصيغة المتوقعة من قبل RPG Maker.

إذا كنت ترغب في دعم كامل لـ RMMZ i18n، فيجب عليك تنزيل [الإضافة من هنا](https://raw.githubusercontent.com/jonlepage/LSDE-RMMZ-I18N/refs/heads/main/dist/LSDE_i18n.js)

سير العمل النموذجي:
- **الاستيراد** — وجّه LSDE إلى مجلد `data/` الخاص بمشروع RPG Maker الخاص بك. يكتشف الاستيراد الذكي (Smart Import) مفاتيح الحوار ويستخرجها تلقائيًا.
- **التحرير** — اكتب نصوصك وصححها وترجمها يدويًا أو بمساعدة LLM، والبيانات الوصفية، ومدقق الإملاء.
- **التصدير** — أعد تصدير ملفات JSON المعدلة مباشرة إلى مشروع RPG Maker الخاص بك.

## الإصدارات المدعومة {#supported-versions}
- **RPG Maker MV** — استيراد/تصدير JSON كامل
- **RPG Maker MZ** — استيراد/تصدير JSON كامل
- الإصدارات الأقدم (VX Ace، XP) غير مدعومة بشكل أصلي ولكن يمكن أن تعمل عبر محلل مخصص (parser).

## فيديو تعليمي {#video-tutorial}
<YouTube id="0cJjxtI088Q" />

## نصائح {#tips}
- استخدم ماسح الشفرة (code scanner) للتحقق من وجود جميع مفاتيحك في ملفات RPG Maker.
- قم بتكوين أنماط Regex في إعدادات المشروع للكشف تلقائيًا عن مفاتيح حوار RPG Maker.
- استفد من وضع MAD (Multi Actor Dialog) إذا كانت أحداثك تحتوي على حوارات متعددة الشخصيات.
