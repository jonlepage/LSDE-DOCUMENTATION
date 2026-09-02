---
title: "Unreal Engine"
description: "LSDE يدعم Unreal Engine عبر نظام التوطين الأصلي لـUnreal وإنشاء فئات C++."
section: engines
outline: [2, 3]
---

# Unreal Engine

LSDE يدعم **Unreal Engine** عبر نظام التوطين الأصلي لـUnreal وإنشاء فئات C++.

سير العمل:
- **استيراد** — قم بتصدير نصوصك من Unreal عبر Localization Dashboard، ثم استوردها إلى LSDE.
- **تحرير** — ترجم وحرر نصوصك في LSDE بمساعدة LLM.
- **تصدير** — أعد تصدير الملفات المترجمة وأعد استيرادها إلى Unreal.

## إنشاء فئات C++ {#cpp-generation}
يقوم LSDE تلقائيًا بإنشاء فئات وصول مُحددة النوع في **C++** من تعريفات الـblueprints الخاصة بك.
تتكامل هذه الفئات في مشروعك في Unreal وتتيح لك الوصول إلى حواراتك مع التحقق من النوع (type checking) في وقت الترجمة.

## نصائح {#tips}
- استخدم **Localization Dashboard** في Unreal للإعداد الأولي للغات وأهداف التوطين.
- ضع ملف `.lsde` في الجذر الرئيسي لمشروعك في Unreal من أجل إدارة الإصدارات (Git versioning).
- يتولى LSDE مهمة الترجمة والتأليف — بينما يدير Unreal التعبئة (packaging) والتحميل في وقت التشغيل عبر `FText`.
