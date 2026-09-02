---
title: "语音"
description: "您首先需要获取一个 Elevenlabs API 密钥。"
section: features
outline: [2, 3]
---

# 语音

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-1.webp" />

LSDE 整合了一项功能，用于管理您项目的音轨，并与您的对话同步。

## 先决条件 {#prerequisites}
您首先需要获取一个 [Elevenlabs](/zh/interface/global-settings#llm-pour-les-voix) API 密钥。
Elevenlabs 目前提供免费月度计划，非常适合测试他们的 API 并了解他们的专业能力。

## 配置 {#configuration}
要配置您项目的语音系统，请前往[语音配置部分](/zh/interface/project-settings#voices)。

1. 定义语音导出文件夹，每次项目保存时，语音都会保存在其中。
2. 系统允许命名输出文件。
此选项可根据您的游戏引擎或项目需求调整文件名。
拖放操作可调整标签的顺序。

---

## 关联变量（自动） {#associate-variables-auto}
<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-2.webp" />

本例展示了如何为每个对话有多个角色的 JRPG 配置语音系统，您的游戏引擎需要从中提取这些角色。

1. 为您的对话者选择一个变量组。
2. 勾选“每个对话多个对话者”选项。
3. 将会打开一个部分，用于配置一个正则表达式 (`regex`)，其中必须包含 1 个组：
- `id` 组：捕获在所选组变量中查找的 `tag` 的值。
- `value` 组：为 `id` 组捕获的文本。

::: tip 备注
可选，因为您可以自己编写文本。此组最大限度地实现自动化并减少工作量。
:::

4. 此时，您将看到配置组中的所有变量，如果已设置，还会显示其各自的图标。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-3.webp" />

## 测试您的 `regex` {#test-regex}
您可以在 [regexr](https://regexr.com) 上测试您的 `regex`，以便更好地理解它。
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```
1. 例如，选择第二个捕获。
2. 访问“详细信息”。
3. 您会发现：
- 组 1 捕获角色“a1”的 `tag id`。
- 组 2 捕获 `id` “a1”的其余文本。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-4.webp" />

## 变量 {#variables}
在[变量部分](/zh/interface/project-settings#les-variables)中：

1. 在预先创建的 `ACTORS` 组中。
2. 此列表将与[之前看到](/zh/features/voice#associer-des-variables)的列表相对应。
3. 填写外观信息极大地有助于对话和角色个性的组织和验证。

::: tip 备注
请注意，您可以随时修改或稍后补充这些信息。
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-5.webp" />

## 配置角色 {#configure-character}
回到[语音配置](/zh/features/voice#associer-des-variables)。

1. 为您的变量关联一个语音 ID。

::: tip 备注
语音 ID 在 Elevenlabs 平台上创建。您的 Elevenlabs 账户已包含默认模型。
:::
2. 您还可以测试和调整语音生成器。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-6.webp" />

## 创建语音 ID {#create-voice-id}
在您的 [elevenlabs](https://elevenlabs.io/app/voice-lab) 个人资料中：

1. 创建一个新的自定义语音。
LSDE 支持所有 API 模型。目前，我强烈推荐使用 `V3` 模型，因为它能处理情感标签，提供更好的叙事控制。
2. 创建后，进入您的语音部分。
3. 检查 ID 是否存在（例如：“Lia Sun-berry”，[FCT7O](https://lepasoft.com/zh/games/fanatic-cardboard-f7o) 的主要角色）。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-7.webp" />

## 生成语音文本 {#generate-voice-text}
填写 ID 后，要查看或生成语音文本，请打开[语音管理器](/zh/interface/voice-manager)窗口。

1. 在树状结构中选择一个键。
不要选择文件夹，因为语音文本在其中以只读形式显示。
2. `regex` 将捕获对话中的角色并提供一个语音生成界面。
3. 生成时，文本会在当前时间点获得一个“签名”。如果文本在不改变角色顺序的情况下发生变化，系统将发出警报，提示您检查是否需要重新生成语音。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-8.webp" />

## 关联变量（手动） {#associate-variables-manual}
对于每个对话只有一个角色（没有交互）的场景，这通常用于简单项目。
1. 您可以取消勾选“每个键多个对话者”复选框。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-9.webp" />

## 配置元数据 {#configure-metas}
为每个对话关联您希望生成语音的一个或多个角色。

1. 选择目标对话的键。
2. 勾选为此对话管理的每个角色。

### 为什么是多个角色？ {#why-multiple-characters}
这对于通用对话很有用，例如一句欢迎语可以被多个具有不同个性和性别的随机 PNJ 重复使用。

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-10.webp" />

## 重新组织 {#reorganization}
1. 始终在键上操作，而不是文件夹。
2. 语音管理器可能会提示重新组织问题。
在此示例中，我们从自动分配多个角色切换到手动系统。

::: tip 备注
如果系统检测到角色顺序或数量发生重大变化，您将需要手动重新组织每个已生成的语音实例。
:::

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-11.webp" />

您只需将每个对话语音文件拖放到关联的角色上，无论该角色是在元数据中声明的还是通过自动分配系统声明的。
