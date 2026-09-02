---
title: "Voice"
description: "LSDE integrates a feature to manage your project's soundtrack, synchronized with your dialogues."
section: features
outline: [2, 3]
---

# Voice

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-1.webp" />

LSDE integrates a feature to manage your project's soundtrack, synchronized with your dialogues.

## Prerequisites {#prerequisites}
You will first need to obtain an [Elevenlabs](/en/interface/global-settings#llm-pour-les-voix) API key.
Elevenlabs currently offers a free monthly plan, ideal for testing their API and discovering their expertise.

## Configuration {#configuration}
To configure your project's voice system, go to the [voice configuration section](/en/interface/project-settings#voices).

1. Define the voice export folder, where voices will be saved each time the project is saved.
2. The system allows you to name the output files.
This option adapts names to the needs of your game engine or project.
A drag-and-drop feature adjusts the order of labels.

---

## Associate Variables (Automatic) {#associate-variables-auto}
<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-2.webp" />

This example shows how to configure the voice system for a JRPG with multiple characters per dialogue, where your game engine needs to extract them.

1. Select a variable group for your speakers.
2. Check the "Multiple speakers per dialogue" option.
3. A section will open to configure a regular expression (`regex`) with a mandatory single group:
- Group `id`: Captures the value of the `tag` to be searched for in the selected group's variables.
- Group `value`: Text captured for the `id` group.

::: tip Note
Optional, as you can write the text. This group maximizes automation and reduces workload.
:::

4. You will then see all the variables from the configured group, with their respective icon if provided.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-3.webp" />

## Test your `regex` {#test-regex}
You can test your `regex` to better understand it on [regexr](https://regexr.com).
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```
1. For example, by selecting the second capture.
2. Access the 'Details'.
3. You will notice that:
- Group 1 captures your character's `tag id` *a1*.
- Group 2 captures the rest of the text for the `id` *a1*.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-4.webp" />

## Variables {#variables}
In the [variables section](/en/interface/project-settings#les-variables):

1. In the previously created `ACTORS` group.
2. This list will correspond to the one [seen previously](/en/features/voice#associer-des-variables).
3. Providing the appearance greatly facilitates the organization and validation of dialogues and character personalities.

::: tip Note
Note that you can modify this information at any time or complete it later.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-5.webp" />

## Configure the Character {#configure-character}
Let's return to [voice configuration](/en/features/voice#associer-des-variables).

1. Associate a voice ID with your variable.

::: tip Note
Voice IDs are created on the Elevenlabs platform. Your Elevenlabs account already includes default models.
:::
2. You will also be able to test and adjust the voice generator.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-6.webp" />

## Create a Voice ID {#create-voice-id}
On your [elevenlabs](https://elevenlabs.io/app/voice-lab) profile:

1. Create a new custom voice.
LSDE supports all API models. I strongly recommend, at present, the `V3` model for its emotional tag management, offering better narrative control.
2. After creation, go to your voices section.
3. Check for the presence of the ID (e.g., *Lia Sun-berry*, main character of [FCT7O](https://lepasoft.com/en/games/fanatic-cardboard-f7o)).

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-7.webp" />

## Generate Voice Text {#generate-voice-text}
Once the ID is entered, to visualize or generate voice texts, open the [voice manager](/en/interface/voice-manager) window.

1. Select a key in the tree structure.
Do not choose a folder, as voice texts are displayed there in read-only mode.
2. The `regex` will capture the dialogue characters and offer a voice generation interface.
3. During generation, the text receives a "signature" at time T. If the text changes without modifying the character order, an alert will prompt you to verify the need to regenerate the voice.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-8.webp" />

## Associate Variables (Manually) {#associate-variables-manual}
For scenarios with a single character per dialogue (without interactions), typical of simple projects.
1. You can uncheck the "Multiple speakers per key" box.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-9.webp" />

## Configure Metadata {#configure-metas}
Associate each dialogue with the character(s) for whom you want to generate voices.

1. Select the key of the targeted dialogue.
2. Check each actor to manage for this dialogue.

### Why multiple characters? {#why-multiple-characters}
This can be useful for generic dialogues, such as a welcome phrase reused by several random NPCs with different personalities or genders.

---

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-10.webp" />

## Reorganization {#reorganization}
1. Always on a key, not a folder.
2. The voice manager may signal a reorganization issue.
In this example, we have switched from an automatic assignment of multiple characters to a manual system.

::: tip Note
If the system detects major changes in the order or number of characters, you will need to manually reorganize each already generated voice instance.
:::

<DocImage src="/doc/lsde/doc-lsde-features-howto-generatevoice-11.webp" />

You just need to drag and drop each dialogue voice file to the associated character, declared in the metadata or via the automatic assignment system.
