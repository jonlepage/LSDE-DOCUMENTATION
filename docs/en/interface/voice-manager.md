---
title: "Voice Management"
description: "This module allows you to manage the integration of voice narrations into your games and narrative projects."
section: interface
outline: [2, 3]
---

# Voice Management

This module allows you to manage the integration of voice narrations into your games and narrative projects.
For each key in your project, you can generate and associate a corresponding voice version.
You will find [a complete guide here](/en/features/voice) to supplement this page.

---

## How it works? {#how-it-works}
LSDE supports two approaches, abbreviated as `SAD` and `MAD`.
1. **SAD: "Single Actor Dialog"**
In this paradigm, you can manually associate a specific speaker with each dialogue key via its metadata.

::: tip Note
Although SAD mode is primarily designed for one actor per key, it is possible to associate multiple voice profiles with the same key via metadata, for example, for generic messages requiring different intonations or voices.
:::
Example of a dialogue managed in **SAD** mode with two distinct keys:
```text
hi, how are you?
```
```text
yes, I'm great!
```
2. **MAD: "Multi Actor Dialog"**
In this paradigm, multiple speakers can intervene within the same dialogue key.
Their lines are identified by specific tags that segment the text.
The order of intervention is sequential.
To extract character IDs and their associated texts, you must define a regular expression (regex).

::: tip Note
In some complex projects, it may be judicious to group several dialogues into a single key and manage their separation in post-production, directly within the game engine.
:::
Example for a **MAD** dialogue:

<DocImage src="/doc/lsde/doc-lsde-features-howtorendering-0-animate.webm" />

```text
{lia} hi how are you?
{boo} yes I'm great
{lia} Oh!
{boo} what!? why that face?
{lia} ...
{sam} ... hey you two!
```

::: tip Note
This method significantly reduces the number of keys to manage.
:::
For the example above, where each line would have its own key, and with a translation into 10 languages, this would represent more than 60 keys.
Managing each intervention individually would quickly become unmanageable for an RPG containing hundreds of such interactions.

## Prerequisites {#prerequisites}
To generate voices, you must have an account and an API key from [ElevenLabs](https://elevenlabs.io).

::: tip Note
ElevenLabs offers a free API key with a monthly credit quota, allowing you to test their technology.
:::

<DocImage src="/doc/lsde/doc-lsde-ui-voicemanager.webp" />

## Interface {#interface}
The interface displays a list of languages, character profiles, voice generation tools, and the history of created voices.
0. **History**
List of all audio instances created for the selected key.
1. **Language Container**
These tabs group characters by language.
2. **Speaker Container**
List of entities (characters) to which a voice narration can be assigned. In "MAD" mode, their order corresponds to their appearance in the source text.
3. **Text**
The captured text serves as the basis for the generated voice narration. It is recommended to modify punctuation or add emotional cues to influence the voice, without altering the original source text. An alert will be displayed if the source text is modified.
4. **Enhancement**
This button allows you to enhance the text intended for voice narration based on the character's personality and the context defined in the key's metadata.

::: tip Note
This feature is only available for ElevenLabs V3 models.
:::
5. **Generator**
This button generates a voice and adds it to the history.
6. **Reset**
This button undoes changes made to the text and restores the original captured version.
7. **Validate a Voice**
Allows you to validate a voice.
Validated voices are kept independently of the history and will be exported according to the criteria defined when saving the project.

::: tip Note
It is possible to validate multiple voices for the same text and character.
:::
File names will then be automatically incremented.
This can be useful, for example, to nuance voices in a game engine using random seeds.
8. **Generation Signature**
This information, used during generation, serves as a signature to track and understand the origin of each voice.

::: tip Note
For example, if you add a new character or move them within the source text, you will be able to reassign existing voices to the entity, even if its location has changed.
:::
9. **Audio Player**
Allows you to play the voice and visualize its pitch to compare it with the desired overall mood.

## Create Voices {#create-voices}
### With SAD {#with-sad}
You must have configured at least one voice profile and enabled the voice manager in the project settings.
The configuration of actors (or entities) associated with the key and their voice profiles is done in the metadata window.
### With MAD {#with-mad}
You must have configured at least one voice profile and enabled the voice manager in the project settings.
Then activate MAD mode and write the regular expression (regex).
It must capture two mandatory groups: the actor's ID and their corresponding text.
Define the index of these capture groups in the voice association settings.

<DocImage src="/doc/lsde/doc-lsde-ui-voicereorder.webp" left />

## Fix Issues {#fix-issues}
Generating voices before finalizing the text is a practice to avoid.
However, if this occurs, LSDE provides tools to correct and reorganize voices, thus avoiding having to redo everything.
When you modify the text of a dialogue after voices have been generated, their signature becomes incompatible, and you will be asked to revalidate them.
In **MAD** mode, if you move, add, or delete characters, you will also need to reassign the already generated voice instances.

::: tip Note
Reassignment is performed in the project's native language; other languages will be automatically reorganized thanks to their original signature.
:::

Find the [complete guide here](/en/features/voice).

---
