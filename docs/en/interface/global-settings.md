---
title: "Global Settings"
description: "Here is the translation of the provided text into English:"
section: interface
outline: [2, 3]
---

# Global Settings

Here is the translation of the provided text into English:

C'est ici que vous pouvez configurer les paramètres globaux du logiciel LSDE.
Ces paramètres seront partagés avec tous vos projets.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-typo.webp" />

## Typography {#typography}
Typography primarily affects the text areas of the editor and certain elements in the note options.
LSDE's interface features a partially customizable UI/UX design, but some aspects remain fixed for design reasons.
Only dialog boxes can be adapted to your preferred theme.

::: tip Note
This feature might evolve over time if there is strong demand.
:::
1.  **font size**: Text size in the editor and other input areas.
2.  **font spacing**: Spacing between letters in the editor.
3.  **font family**: Font family used in the text editor.
4.  **line height**: Modifies the height of lines in the editor.
5.  **color**: Text color in the editor.
6.  **font weight**: Allows making text thicker (bold), if the font family allows it.
7.  **background color**: Defines the background color of a text editor, whether it is active (focus) or inactive.
8.  **text direction**: Defines languages whose display should be from right to left (RTL).

---

## Wrappers {#wrappers}
<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-wrappers.webp" />

Wrappers are enveloping behaviors that can be added to the selection system.
When you select text in the editor and use a keyboard shortcut, you have the option to wrap it with symbols.
This behavior, very popular in development environments (IDEs), is also supported by LSDE.
1.  Keys that will trigger wrapping when text is selected.
2.  Characters to insert before and after the selected text.
3.  Number of possible iterations before removing the text's wrapper.
4.  If enabled, removes spaces at the beginning and end of the selected text and places them outside the wrapper.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-flags.webp" />

## Editor {#editor}
This section groups various features (flags) to enrich your experience with $t(main.words.lsde-title).
To learn more, simply hover your mouse over each option to display a detailed tooltip about its function.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-tasks.webp" />

## Tasks {#tasks}
The Tasks section allows you to manage LSDE's native tasks.
Here you will find the rules and directives sent to the LLMs.

-   **Rules** are general and important instructions that apply to all tasks.
-   **Tasks** are more specific sub-rules, sent to the LLM for precise operations.

Let's discover the native tasks interface.

<!-- TODO image introuvable : configGlobTaks -->

1.  You can disable unnecessary tasks for your projects (e.g., disable the menu task).
2.  A button to restore the native directive.
3.  A button to copy the native directive.

::: tip Note
Not available in the trial version of LSDE.
:::
4.  The word count and an estimated token cost.
5.  You can export a JSON file at any time to analyze an example of a request sent to the LLM and refine your prompt engineering.

::: tip Note
Note that it is not recommended to modify LSDE's native rules and tasks.
Other solutions are preferable, such as [fine-tuning](/en/interface/fine-tuning) or [project directives](/en/interface/project-settings#llm-directive).
:::

---

## Authentication {#authentication}
This section is reserved for configuring LLMs, whether they are free or accessible via your own API keys.
You can enter and secure the API keys of your preferred LLM services here.

::: tip Note
Note that some providers, such as Gemini or ElevenLabs, now offer free API keys with monthly or weekly usage quotas.
:::

For text processing LLMs, 6 providers are available.
### For text processing LLMs {#text-processing-llm}
-   Anthropic
-   OpenAI
-   Mistral
-   Gemini
-   Deepseek

### LLMs for voices {#voice-llm}
ElevenLabs is offered to you (it also provides free keys with monthly quotas).

::: tip Note
you must create your vocal profiles on their tools
:::

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-auth.webp" />

Simply click on `temp-mail` or `10minmail` to get a temporary address, then click `open` to save this email.
The session will then be saved for subsequent days, allowing you to enjoy GPT and batch tasks.
You will also be subject to a quota (currently, as of November 25, 2025, approximately 70 tasks per hour), after which you will have to wait.

When the account is deleted by OpenAI, you will have to repeat the process.

::: tip Note
Note that this service should only be used for basic testing and not for production. The free GPT model is of lower quality and does not fully support the post-response refinement features offered by LSDE.
:::

### The Interface {#interface}
0.  Memorize your API keys to avoid entering them every time the software starts.

::: tip Note
the keys are encoded but remain exposed to malicious users
:::
1.  You can securely encrypt your keys via the software's encoding system.

::: tip Note
Your keys will be encrypted with a unique identifier from your machine and your installation. They cannot be executed anywhere other than on this LSDE instance.
:::
2.  You can retrieve your encrypted key here and use it in the designated fields instead of standard API keys.
3.  This is where you must insert your providers' API keys.
4.  A quick access button to the provider's website to check your consumption.
5.  Selection of available models for the chosen provider.
6.  You can add your favorite models to favorites.

::: tip Note
Favorite models are accessible in the LLM tabs in the software footer. A right-click allows you to quickly switch to one of them.
:::

### Free LLM {#free-LLM}
LSDE also offers you a free method to use GPT via a special process.
You will generally want to use this LLM to perform tests or mini-tasks without cost.
7.  You can create a free ChatGPT account to test the software's features.
Two temporary email providers are suggested.

::: tip Note
Do not use your official account at the risk of having it closed in case of intensive use.
:::
8.  Click here to create a GPT account with your temporary email.

::: tip Note
You can generally perform batch processing of approximately 70 instances per hour.
:::

::: tip Note
Some services like Google AI now offer free API keys with a limited number of requests per hour.
:::
You can also take advantage of their services.

---

<DocImage src="/doc/lsde/doc-lsde-ui-glsetting-accessibility.webp" />

## Accessibility {#accessibility}
This section allows you to configure the interface languages as well as display filters, useful if you encounter problems with your screen calibration or if you have a form of color blindness.

1.  Interface language selection: As on the startup screen, you can reassign your 2 preferred languages.
You can then simply press the [F1] key to instantly switch between the two interfaces.
This feature allows, for example, to work in your native language and switch at any time to another language to communicate with a colleague or consult documentation.
2.  You can change the software's contrast here.
3.  As well as the hue, which allows you to manage the color theme if you have a visual impairment.

---
