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

**24 éditeurs répartis en 11 familles.** Le catalogue normal ne montre que les éditeurs qualifiés. Ajoutez `?beta=1` à l'adresse pour faire apparaître les éditeurs en bêta et en développement, avec un badge. Ce réglage n'est jamais mémorisé.

| Famille | Modèles | Disponibilité | Liens |
| --- | --- | --- | --- |
| **BCR32 Studio** | Behringer BCR32 | Catalogue · appli autonome | [Ouvrir](https://thelazygeekguy.github.io/bcr32-studio/) · [Code](https://github.com/TheLazyGeekGuy/bcr32-studio) |
| **B-Control** | Behringer BCR2000, BCF2000 | Bêta | — |
| **X-TOUCH ONE** | Behringer X-TOUCH ONE | Catalogue | — |
| **X-TOUCH** | X-TOUCH MINI, X-TOUCH COMPACT, X-TOUCH, X-TOUCH EXTENDER | Bêta | — |
| **Access Virus** | Virus A, B, C, Classic, Rack, Rack XL | Bêta | — |
| **Novation Nova** | Nova Desktop, Nova II Keyboard, Supernova, Supernova II | Bêta | — |
| **Roland JP** | JP-8000, JP-8080 | Bêta | — |
| **AI² Studio** — *nouveau* | Korg X5DR + 20 modèles de la famille AI² | Catalogue · appli autonome | [Ouvrir](https://thelazygeekguy.github.io/ai2-studio/) · [Code](https://github.com/TheLazyGeekGuy/ai2-studio) |
| **FireworX Studio** | TC Electronic FireworX | Catalogue · appli autonome | [Ouvrir](https://thelazygeekguy.github.io/fireworx-studio/) · [Code](https://github.com/TheLazyGeekGuy/fireworx-studio) |
| **Mx000 Studio** | TC Electronic M3000 / M2000 | Catalogue · appli autonome | [Ouvrir](https://thelazygeekguy.github.io/Mx000-studio/) · [Code](https://github.com/TheLazyGeekGuy/Mx000-studio) |
| **Panorama CS12** | Nektar Panorama CS12 | En développement | — |

« Catalogue » veut dire qualifié pour l'atelier, pas terminé : tout reste en alpha. Rien n'a encore été vérifié sur un vrai BCR2000, BCF2000, Virus, Nova, JP ou sur les X-TOUCH autres que le ONE.

### BCR32 Studio — Behringer BCR32

- Façade détaillée avec l'écran OLED, contrôle en direct en CC / NRPN (14 bits, modes relatifs).
- Luminosité des LED écrite dans l'appareil puis relue ; lecture du firmware et des réglages globaux (l'écriture des globaux est désactivée par sécurité).
- Import de l'export binaire du contrôleur, fiches de façade à imprimer en PDF, export d'une surface pour Cubase MIDI Remote, 8 langues, thèmes, zoom.
- Pas encore : le séquenceur, et l'envoi en direct des autres types d'assignation (gardés en local).

### B-Control — Behringer BCR2000 et BCF2000

![Éditeur BCR2000 : encodeurs, anneaux LED et inspecteur](/shots/ms-bcr2000.jpg)

- BCR2000 : 32 encodeurs à poussoir en 4 groupes, 24 encodeurs du bas, touches, 2 pédales. BCF2000 : 8 encodeurs, 8 faders motorisés, pédale d'expression. 32 presets chacun.
- Contrôle en direct : CC / NRPN (absolu 7 / 14 bits et six modes relatifs), Note, Program Change, Pitch Bend, Aftertouch, GS / XG. Le MIDI reçu met l'écran à jour.
- **Lecture SysEx** du preset courant, d'un emplacement choisi, des noms de presets, du réglage global ou d'un instantané MIDI.
- Fichiers **BCL** (.bcr / .bcf / .txt ou .syx) en import et export, projet JSON, librairie, brouillons, annuler / rétablir, avec un rapport de ce qui n'a pas pu être converti.
- Formulaires BCL complets, sélection multiple au rectangle, édition par lot, 12 styles d'anneaux LED affichés.
- Pas encore : l'écriture dans l'appareil depuis l'interface.

### X-TOUCH ONE — Behringer

![Éditeur X-TOUCH ONE : fader motorisé, molette et inspecteur](/shots/ms-xtouch-one.jpg)

- Contrôle MCU en direct : touches, encodeur, fader motorisé, molette jog. Le fader ne se recale qu'au relâchement du doigt, jamais pendant qu'on le touche.
- Noms de paramètres affichés sur l'écran du contrôleur, LED et anneaux pilotés automatiquement.
- Calques pour **14 modes matériels** (MC Std / Live / Cubase / Logic / Studio One / Reaper / Tracktion / User, HUI, MIDI / CC). Le mode auto reconnaît la famille de messages reçue (MCU ou MIDI).
- Calibration de la molette en un tour, MIDI Learn local, dernier message reçu dans l'inspecteur.
- Pas encore : le décodage HUI en entrée, la reprogrammation des assignations internes.

### Famille X-TOUCH — MINI, COMPACT, X-TOUCH, EXTENDER

![Éditeur X-TOUCH COMPACT : façade réaliste, lecture expérimentale des couches A / B](/shots/ms-xtouch-compact.jpg)

- Façades réalistes. Modes Standard A / B et MCU (MINI, COMPACT), MCU et MIDI (X-TOUCH), MCU / CTRL / CTRL REL (EXTENDER).
- Retour visuel en direct : LED, anneaux, VU-mètres, afficheur timecode. Les faders motorisés ne bougent que si on l'active.
- Texte et couleurs des écrans LCD sur le X-TOUCH et l'EXTENDER.
- **MINI et COMPACT : lecture expérimentale** de l'appareil (infos, couches A / B), sauvegarde brute et suivi de la couche active. **COMPACT : fichiers de couche .bin** en import, édition et export, hors ligne.
- Pour les quatre : MIDI Learn local, moniteur, recherche, 50 presets locaux, import / export JSON.
- Pas encore : l'écriture dans l'appareil (DUMP) ; aucun de ces quatre modèles n'a été testé sur du vrai matériel.

### Access Virus — A, B, C, Classic, Rack, Rack XL

![Éditeur Access Virus C : façade reconstruite et inspecteur de paramètre](/shots/ms-virus-c.jpg)

- Six façades distinctes, reconstruites d'après la documentation.
- Édition en direct d'une trentaine de paramètres vérifiés (oscillateurs, mixage, filtres, enveloppes, LFO, envoi d'effet), envoi armé explicitement.
- **Lecture du buffer d'édition** (Single ou partie de Multi) par SysEx, avec contrôle de longueur et de checksum ; une réponse rejetée ne remplace jamais le brouillon. Nom du patch décodé.
- MIDI Learn en réception, écran LCD qui affiche le dernier changement, presets locaux, librairie, historique de 100 étapes, verrouillage.
- Pas encore : l'envoi d'un patch complet, l'écriture en banque, la matrice de modulation.

### Novation Nova — Nova Desktop, Nova II Keyboard, Supernova, Supernova II

![Éditeur Novation Supernova II](/shots/ms-supernova-2.jpg)

- Quatre façades (desktop, clavier avec molettes, deux racks), vocodeur signalé sur la Nova.
- Édition en direct d'environ 25 paramètres vérifiés en CC : oscillateurs, mixage, filtre, enveloppes, LFO, effets.
- Mêmes outils que le Virus : Learn, moniteur, presets, librairie, historique, verrouillage.
- Pas encore : la lecture de patch (aucune requête vérifiée, donc refusée), les NRPN groupés.

### Roland JP — JP-8000 et JP-8080

![Éditeur Roland JP-8000 : façade et clavier](/shots/ms-jp-8000.jpg)

- Façade JP-8000 avec 40 commandes, calque de comparaison optionnel avec l'appareil d'origine ; façade rack séparée pour le JP-8080 avec ses paramètres de vocodeur.
- Édition en direct d'environ 37 paramètres vérifiés, d'après les tables CC d'usine de Roland.
- Choix du mode attendu sur le synthé (Mode 1 ou Mode 2) : les paramètres propres au Mode 2 ne partent pas en Mode 1.
- Pas encore : la lecture et l'envoi de patchs.

### FireworX Studio — TC Electronic FireworX

- Chaîne d'effets en grille, matrice de modulation, coût DSP estimé.
- Lecture et envoi du preset dans le buffer d'édition, banques, variations aléatoires.

### Mx000 Studio — TC Electronic M3000 / M2000

- Édition live du M3000 par SysEx : lecture, rappel, envoi du preset dans le buffer, mémoire utilisateur après confirmation.
- Édition hors ligne du M2000, import / export de fichiers SysEx, copie d'un appareil à l'autre, curseur de modèle.

### Panorama CS12 — Nektar (en développement)

![Éditeur Panorama CS12 : carte personnelle, slots et contrôle sélectionné](/shots/ms-cs12-editor.jpg)

- Éditeur de profils local : pages Surface, Bibliothèque et Connexions ; commandes, libellés, assignations, pages, cartes et modèles.
- Import / export du profil JSON avec validation complète, sauvegarde dans l'espace de travail.
- Pas encore : le dialogue avec le CS12 (entrées, moteur, LED, écran), l'intégration Cubase.

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
