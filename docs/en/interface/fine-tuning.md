---
title: "Fine-Tuning"
description: "This feature allows you to control LLMs in real time, based on the active profile."
section: interface
outline: [2, 3]
---

# Fine-Tuning

This feature allows you to control LLMs in real time, based on the active profile.
It enables you to create profiles with custom rules, thereby defining how LSDE transmits information.
Extremely versatile, this system offers you the possibility to experiment with various scenarios and adapt directives to your specific needs.
The system is designed for quick activation and deactivation. Furthermore, you can modify directives in real time without affecting your saved profiles.

## Who is this system for? {#target-audience}
This system is designed for all users. Some will prefer basic directives, while others will opt for a more dynamic workflow, useful, for example, for writing quests or scenarios.

---

## The Interface {#interface}
### Tools {#tools}
Discover the main tools for working with Fine-Tuning.

<DocImage src="/doc/lsde/doc-lsde-ui-finetuning.webp" />

1. **Enable/Disable Fine-Tuning**
Quickly enable or disable the impact of Fine-Tuning on current and future tasks, all in real time.

::: tip Note
The icon and name of the active profile are also visible in the quick actions bar, next to the Fine-Tuning icon.
:::
2. **Vertical/Horizontal Mode**
Allows you to dock the window in vertical or horizontal mode, displaying profiles in a more compact form.
3. **Show/Hide Profile List**
Hide the profile list to free up space or use keyboard shortcuts to access it.
### Profiles {#profiles}
4. **Create Profile**
Allows you to create a new profile.
5. **The Profile List**
This is where you can select, delete, and modify profiles.
### Configuration {#Configuration}
Configuration of the active profile
6. **Personal Profile Note**
These notes are never transmitted to the LLM; they serve solely as information for the user.
7. **Profile-Associated Rules**
These rules complement LSDE's basic rules. You have the option to disable the default rule in the task options.
8. **Task Directive**
Allows you to enrich the content of a default task.
9. **Custom Descriptions**
These descriptions are added to the metadata (metas).
LSDE systematically transmits metadata and their descriptions to the LLM. This space allows you to add complementary information to these descriptions.
10. **Additional Options**
Enable or disable LSDE's specific behavior when sending information to the LLM with this profile active.
Hover your mouse over each setting to display a description of its impact.
