---
title: "Fine-Tuning"
description: "Cette fonctionnalité vous permet de contrôler les LLM en temps réel, en fonction du profil actif."
section: interface
outline: [2, 3]
---

# Fine-Tuning

Cette fonctionnalité vous permet de contrôler les LLM en temps réel, en fonction du profil actif.
Il vous permet de créer des profils dotés de règles personnalisées, définissant ainsi la manière dont LSDE transmet les informations.
Extrêmement polyvalent, ce système vous offre la possibilité d'expérimenter divers scénarios et d'adapter les directives à vos besoins spécifiques.
Le système est conçu pour une activation et une désactivation rapides. De plus, vous pouvez modifier les directives en temps réel sans affecter vos profils sauvegardés.

## À qui s'adresse ce système ? {#target-audience}
Ce système est conçu pour tous les utilisateurs. Certains privilégieront les directives de base, tandis que d'autres opteront pour un flux de travail plus dynamique, utile par exemple pour l'écriture de quêtes ou de scénarios.

---

## L'interface {#interface}
### Outils {#tools}
Découvrez les principaux outils pour travailler avec le Fine-Tuning.

<DocImage src="/doc/lsde/doc-lsde-ui-finetuning.webp" />

1. **Activer/Désactiver le Fine-Tuning**
Activez ou désactivez rapidement l'impact du Fine-Tuning sur les tâches en cours et futures, le tout en temps réel.

::: tip Note
L'icône et le nom du profil actif sont également visibles dans la barre d'actions rapides, au niveau de l'icône du Fine-Tuning.
:::
2. **Mode Vertical/Horizontal**
Permet d'ancrer la fenêtre en mode vertical ou horizontal, affichant ainsi les profils sous une forme plus compacte.
3. **Afficher/Masquer la liste des profils**
Masquez la liste des profils pour libérer de l'espace ou utilisez les raccourcis clavier pour y accéder.
### Profils {#profiles}
4. **Créer un profil**
Permet de créer un nouveau profil.
5. **La liste des profils**
C'est ici que vous pouvez sélectionner, supprimer et modifier les profils.
### Configuration {#Configuration}
Configuration du profil actif
6. **Note personnelle du profil**
Ces notes ne sont jamais transmises au LLM ; elles servent uniquement d'information pour l'utilisateur.
7. **Règles associées au profil**
Ces règles complètent celles de base de LSDE. Vous avez la possibilité de désactiver la règle par défaut dans les options de tâches.
8. **Directive de tâche**
Permet d'enrichir le contenu d'une tâche par défaut.
9. **Descriptions personnalisées**
Ces descriptions sont ajoutées aux métadonnées (metas).
LSDE transmet systématiquement les métadonnées et leurs descriptions au LLM. Cet espace vous permet d'ajouter des informations complémentaires à ces descriptions.
10. **Options supplémentaires**
Activez ou désactivez le comportement spécifique de LSDE lors de l'envoi d'informations au LLM avec ce profil actif.
Passez votre souris sur chaque paramètre pour afficher une description de son impact.
