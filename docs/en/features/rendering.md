---
title: "Rendering"
description: "LSDE offers a highly advanced text rendering engine that allows real-time customization of text segment rendering."
section: features
outline: [2, 3]
---

# Rendering

<DocImage src="/doc/lsde/doc-lsde-features-howtorendering-0-animate.webm" />

## What is Text Rendering? {#what-is-text-rendering}
LSDE offers a highly advanced text rendering engine that allows real-time customization of text segment rendering.

### Who is it for? {#who-is-it-for}
Generally, this feature is primarily required by game developers, as web and software typically demand less narrative complexity.
Take, for example, a JRPG game where a dialogue engine needs to capture all parameter groups like `{{number:number:number}}`.
These indexes are then used to find the ID of the character who should speak, the animated expression the character should perform for that line, and possibly the intensity of their emotions.

For a developer, this poses no readability issues. However, for a translator or composer, requiring constant consultation of documentation to verify compliance with engine codes and each character's personality would risk creating significant resentment, even making them a lifelong enemy.

In a professional studio, such a department requires a dedicated team and costs several millions, which is not realistic for an independent studio, whether solo or with a small team.

### Solution {#solution}
Text rendering therefore offers a very powerful solution that allows verifying at all times that the protected terms intended for the engine are present. It also enables translators, composers, and LLM tools to benefit from this information to guarantee the quality of narration and translations.

It's no longer character `{{3:4:2}}` speaking, but rather `{{LIA:HAPPY:2}}`, with a reference to their character sheet if needed and the visualization of all these interactions, which greatly facilitates composition and translations.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-1.webp" />

## Create a Pattern {#create-pattern}
Go to [pattern settings](/en/interface/project-settings#patterns).
Create a new blank pattern there.
1. You can enter your pattern in this section.
`(xxxxxxx)(xx)(xxxxxxx)`
In this example, our pattern will consist of 3 groups.
LSDE will automatically detect capture groups to allow you to configure them.

Group 0 represents the complete capture itself and will always be present. You can simply configure the main capture, which is usually sufficient for most cases.

However, if you want to utilize the 3 other groups you've added to your Regex, you can create additional decorators.
### What is a Decorator? {#what-is-decorator}
A decorator is, as its name suggests, a 'decoration' that, once assigned to a group, will embellish the captured text and improve its visual rendering.
It's an experimental system, and there are currently a few rules to follow:
- You cannot assign multiple decorations to the same group within the same pattern.
- Decorators can hinder rather than improve readability if misused.
- 'Widget' type decorators only appear on active windows.
- Avoid overly complex Regex patterns with conditionals and 'lookbehind' which can negatively impact scrolling performance in the editor.

When you create a decorator, you can configure it with different behaviors.
2. This is where you assign the capture group to the decorator. Here, we will assign capture groups 1, 2, and 3 to it.
3. You can choose the decorator type, for example, 'Widget'.
4. And we can indicate that each capture will be associated with a variable category.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-2.webp" />

## Test Your Pattern {#test-pattern}
Go to [regexr](https://regexr.com) to test and better understand your Regex.
regex: `xxxxxxxxx`
```text
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxx
```

1. If we select the first capture,
2. and display the full details,
3. we can observe the following capture details:
Group 0 is the complete capture itself.
For groups 1, 2, and 3, we have 'a2', 'e1', and '1' captured.

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-3.webp" />

## Link a Variable {#link-variable}
We can do more with these captures by matching them to something, or rather, someone, in our example.
In our fictitious engine, 'a1', 'a2', 'a3'... will correspond to characters in our game.

1. Activate the 'variable' option in your pattern.
2. We will configure the capture group intended to identify our variables via tags. Here, we want LSDE to search for variables in the "ACTORS" group.

::: tip Note
Why not search through all variables instead of just one group? For reasons of project maintainability and performance.
:::

---

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-4.webp" />

## Customize the Variable {#customize-variable}
Before assigning a decoration to a variable, it must already exist.
Go to [the variables section](/en/interface/project-settings#les-variables).
You will need to create a new category and a variable there.
1. Create a category named 'ACTORS' and add a new variable to it.
2. It is then in the 'Tags' field that we can add keywords that will be searched by pattern captures and other systems.
For example, add "a1", which would correspond to the fictitious ID of our character in our fictitious game engine.
3. You can then assign it a rendering appearance in the text editor, as well as a specific appearance for tooltips.

Then, you can enjoy the "Widget" rendering of this variable directly in your text editor.
And with a simple click, you can also display a tooltip that will present the configured information for the variable.

<DocImage src="/doc/lsde/doc-lsde-features-howrendering-5.webp" />

::: tip Note
A click will display the decoration without the widget.
:::

---
