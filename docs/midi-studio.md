---
title: MIDI Studio
aside: false
---

# 🎛️ MIDI Studio

**Des éditeurs de matériel MIDI qui tournent entièrement dans le navigateur.** Pas d'installation, pas de compte, pas de serveur : Web MIDI + SysEx dans Chrome / Edge, vos données restent dans votre navigateur tant que vous ne les exportez pas.

MIDI Studio est à la fois **un atelier** qui réunit plusieurs éditeurs dans des onglets, et **un socle commun** dont chaque éditeur peut sortir sous la forme d'une application autonome, publiée séparément sur GitHub Pages.

![L'atelier MIDI Studio : catalogue des instruments à gauche, éditeurs ouverts au centre](/shots/midi-studio-workspace.jpg)

::: tip Statut
Tout est en **alpha**. Chaque module indique précisément ce qui a été vérifié sur du vrai matériel et ce qui ne l'a pas été. Aucune écriture en mémoire permanente (STORE) n'est envoyée sans action explicite.
:::

## Ce que fait le socle commun

Chaque éditeur hérite des mêmes outils :

- **Connexion MIDI** depuis l'icône à côté de l'état « Hors ligne / Connecté » : ports, canal, identification de l'appareil. Une paire de ports n'est jamais devinée quand elle est ambiguë, et un port réservé par un éditeur n'est pas pris par un autre.
- **Moniteur MIDI** : entrées / sorties, CC, NRPN / RPN regroupés, notes, Program Change, SysEx, pause et export.
- **Librairie d'instruments** : import de banques SysEx, de fichiers MIDI (SMF) et de librairies SoundDiver (LIB), détection de l'instrument, recherche, favoris, étiquettes, banques personnelles, et sauvegarde ZIP horodatée qui conserve les fichiers d'origine à l'octet près.
- **Historique local** : annuler / rétablir, brouillon enregistré automatiquement, reprise des éditeurs ouverts et des connexions après un rafraîchissement de la page.
- **Thèmes et langues** : sept thèmes globaux, plusieurs langues d'interface, apparences propres à chaque éditeur (façade fidèle ou vue moderne).
- **Fonctionnement hors ligne** : après une première visite, l'atelier et les éditeurs déjà ouverts se rechargent sans Internet.
- **Patchbay MIDI** : on compose son circuit en blocs (entrées, sorties, bus, moniteur, filtres, clavier de test), on relie par câbles, on analyse le flux ; rien n'est routé tant qu'on n'active pas le routage.
- **MIDI Translator** (expérimental) : modèles MIDI / SysEx bruts, valeurs logiques, répartition vers plusieurs sorties, simulation.

![La Patchbay MIDI de l'atelier](/shots/midi-studio-patchbay.jpg)

## Les modules

| Module | Matériel | Statut | Liens |
| --- | --- | --- | --- |
| **BCR32 Studio** | Behringer BCR32 | Alpha publique | [Ouvrir](https://thelazygeekguy.github.io/bcr32-studio/) · [Code](https://github.com/TheLazyGeekGuy/bcr32-studio) |
| **FireworX Studio** | TC Electronic FireworX | Alpha publique | [Ouvrir](https://thelazygeekguy.github.io/fireworx-studio/) · [Code](https://github.com/TheLazyGeekGuy/fireworx-studio) |
| **Mx000 Studio** | TC Electronic M3000 / M2000 | Alpha publique | [Ouvrir](https://thelazygeekguy.github.io/Mx000-studio/) · [Code](https://github.com/TheLazyGeekGuy/Mx000-studio) |
| **AI² Studio** — *nouveau* | Korg X5DR + 20 modèles de la famille AI² | Alpha publique | [Ouvrir](https://thelazygeekguy.github.io/ai2-studio/) · [Code](https://github.com/TheLazyGeekGuy/ai2-studio) |
| X-TOUCH ONE | Behringer X-TOUCH ONE | Dans l'atelier | — |
| CS12 Editor | Surface de contrôle CS12 | En test | — |

D'autres éditeurs sont en développement dans l'atelier (BCR2000, BCF2000, famille X-TOUCH, Access Virus, Novation Nova, Roland JP-8000) et n'apparaissent qu'en mode bêta.

- **BCR32 Studio** : façade live, assignations, MIDI Learn, impression des fiches de façade, export d'une surface Cubase MIDI Remote, vue séquenceur en aperçu.
- **FireworX Studio** : chaîne d'effets en grille, matrice de modulation, coût DSP estimé, banques et variations aléatoires.
- **Mx000 Studio** : édition live du M3000 par SysEx (lecture, rappel, envoi du preset dans le buffer, mémoire utilisateur après confirmation) et édition hors ligne du M2000, copie d'un appareil à l'autre.

## 🆕 AI² Studio — Korg X5DR et toute la famille AI²

![AI² Studio : façade fidèle du X5DR, barre d'outils et colonnes d'oscillateur alignées](/shots/ai2-studio.jpg)

AI² Studio édite la synthèse **AI² de Korg** (1991–1999) : l'éditeur natif du **X5DR**, qui parle à l'appareil, et des éditeurs de fichiers pour **20 autres modèles** de la famille.

### Un seul poste de travail pour 21 modèles

- **Curseur de modèle** : les 21 modèles rangés par année de sortie (01/W, 01/Wfd, 01/Wpro, 01/WproX, 01R/W, 03R/W, X2, X3, X3R, 05R/W, X5, X5D, X5DR, N264, N364, NS5R, N1, N1R, N5, N5EX, NX5R), avec pour chacun touches ou module, famille, ROM et ce qui est disponible : Program, Combi, MIDI matériel, clavier / contrôleur.
- **Façade fidèle** du X5DR, reproduite à l'échelle : son écran LCD affiche ce qu'afficherait l'appareil (« 00:SolarFlare » puis les Programs des timbres 1–4, COMBI pour les timbres 5–8), et ses touches pilotent l'éditeur. Une vue moderne est aussi disponible.
- **Une seule barre d'outils** qui reste en haut pendant le défilement : Program / Combi / Édition / Multi · Drums · Global, numéro et banque, nom, Lire / Envoyer / Envoi live, réglages, librairie, import, annuler / rétablir.
- **Colonnes d'oscillateur alignées** : Source, VDF et VDA sur la même ligne, puis Color + Pitch MG, VDF EG et VDA EG, puis les commutateurs clavier / vélocité. Même grille pour les 21 modèles, libellés lisibles.
- **Enveloppes déplaçables** directement dans leurs cartes (Pitch EG, VDF EG, VDA EG) : horizontal = temps, vertical = niveau.

### Avec le X5DR branché

- Détection et identification automatiques de l'appareil, lecture du nom et du buffer à chaque changement de Program ou de Combi.
- **Édition auto** : les curseurs modifient le son en direct, chaque envoi est relu ; la façade reste un sélecteur par numéro tant qu'on n'appuie pas sur EDIT.
- Lecture des **banques de 100 Programs / 100 Combinations**, des données **Multi**, **Drums** (120 enregistrements) et **Global**, **sauvegarde complète** téléchargeable.
- **47 algorithmes d'effets** avec la règle des paires d'effets du X5DR, relecture des paramètres après chaque changement d'algorithme.
- **Clavier et contrôleur MIDI en entrée** : jouez le X5DR depuis votre clavier, avec Panic.
- Jamais de STORE : les modifications vont dans le buffer d'édition volatil.

### Combi et Multi

- **Combi** : répartition à **claviers superposés** des 8 timbres (zones, transposition, vélocité, canal), bords de zone à glisser, Mute / Solo ; un clic sur un timbre ouvre le navigateur de Programs (banque A de l'appareil, banque G General MIDI avec ses vrais noms, banques de la librairie).
- **Multi** : les **16 parties et tous leurs paramètres d'un coup** (Program, canal, niveau, pan, envois, transposition, désaccord, zones, vélocités, pitch bend, filtres PC / Damper / AT / CC), et la même carte à claviers, repliable.

### Fichiers, librairie et conversions

- Import de Programs, de banques SysEx et de fichiers MIDI, **détection automatique de la famille et du format**, fichiers d'origine conservés.
- **Conversion hors ligne entre les 21 modèles** (420 sens de conversion) : récupération partielle du cœur des Programs, avec un **rapport** qui donne les octets source, leur empreinte SHA-256, la règle appliquée, chaque adaptation, perte ou dépendance. Les options d'approximation sont désactivées par défaut ; ce qui n'a pas d'équivalent garde la valeur du modèle cible.
- Export SysEx, espace de travail JSON réimportable, sauvegarde ZIP de la librairie.

![Multi : les 16 parties et leurs paramètres](/shots/ai2-studio-multi.jpg)

::: warning Limites
Seul le **X5DR** est édité par MIDI ; les 20 autres modèles sont édités en fichiers. Les façades de ces modèles sont des reconstructions provisoires. Une conversion entre modèles n'est jamais une équivalence sonore complète : le rapport dit exactement ce qui a été repris.
:::

## Sous le capot

- **React + TypeScript + Vite**, aucune dépendance serveur ; chaque éditeur se charge à la demande.
- **Une Content-Security-Policy stricte**, pas de script tiers, pas d'analytics.
- Chaque publication passe une **porte anti-fuite** (règles génériques + liste privée) sur le code et sur le build, et une suite de tests hors ligne sans port MIDI physique.
- L'atelier assemble des dépôts indépendants (BCR32, FireworX, Mx000, et bientôt AI² Studio) épinglés à une version précise.

Compatibilité : navigateur Chromium (Chrome, Edge, Brave) avec Web MIDI et permission SysEx.
