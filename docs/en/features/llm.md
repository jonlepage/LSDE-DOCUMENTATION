---
title: "LLMs"
description: "To use LLMs (Large Language Models) in LSDE, you must configure your access: enter your API keys previously created for Cloud use, or configure a…"
section: features
outline: [2, 3]
---

# LLMs

<DocImage src="/doc/lsde/doc-lsde-features-llms-2.webp" />

## Using an LLM {#usage}
To use LLMs (Large Language Models) in LSDE, you must configure your access: enter your API keys previously created for Cloud use, or configure a "localhost" address if you prefer to use a local model.

### Multi-key system {#multi-keys}
LSDE allows you to manage multiple API keys simultaneously. 
This system allows you to exploit several keys with limited quotas by automatically switching to those that still have credits. 

This feature is ideal for maximizing the use of free keys subject to daily renewal. 
By activating automatic rotation, you can exhaust your credits without manual intervention and in complete safety.

::: tip Note
When an error is detected, LSDE considers the API key exhausted and automatically moves to the next one. You can define several rotation cycles (usually 2) to ensure you have recovered all free credits across all your keys.
:::

### Activate an LLM {#activate-llm}
It is in the footer of the application that you will have the possibility to activate or deactivate one of your available LLMs.
When no LLM is selected, LSDE will try to use the fallback LLM that you have previously configured.

---

<DocImage src="/doc/lsde/doc-lsde-features-llms-1.webp" />

## Local LLMs {#local-llm}
If you want to use your models locally, simply enter the localhost address of your server. LSDE will connect to it to execute your tasks.

### How to install a local LLM? {#local-llm-install}
- [Download Ollama](https://ollama.com/download) for your operating system.
- Start the server and install your models.
- Close the application (it must remain active in the background).
- Enter your localhost address and the corresponding port in the Ollama configuration of LSDE.
- Click on "Connect" and choose one of your models.
- Make sure to activate the LLM in the status bar located at the bottom of the software.
