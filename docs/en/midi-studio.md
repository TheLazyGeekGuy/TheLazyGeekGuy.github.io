---
title: MIDI Studio
aside: false
---

# 🎛️ MIDI Studio

**Hardware MIDI editors that run entirely in the browser.** Nothing to install, no account, no server: Web MIDI + SysEx in Chrome / Edge, and your data stays in your browser until you export it.

MIDI Studio is both **a workspace** that opens several editors in tabs and **a shared foundation** from which each editor can ship as a standalone app, published separately on GitHub Pages.

![The MIDI Studio workspace: instrument catalog on the left, open editors in the centre](/shots/midi-studio-workspace.jpg)

::: tip Status
Everything is **alpha**. Each module states exactly what was checked on real hardware and what was not. No permanent memory write (STORE) is ever sent without an explicit action.
:::

## What the shared foundation does

- **MIDI connection** from the icon next to the Offline / Connected state: ports, channel, device identification. Ambiguous port pairs are never guessed, and a port reserved by one editor is never taken by another.
- **MIDI monitor**: in / out, CC, grouped NRPN / RPN, notes, Program Change, SysEx, pause and export.
- **Instrument library**: SysEx banks, MIDI files (SMF) and SoundDiver libraries (LIB), instrument detection, search, favourites, tags, personal banks, and timestamped ZIP backups that keep the original files byte for byte.
- **Local history**: undo / redo, auto-saved draft, open editors and connections restored after a page refresh.
- **Themes and languages**: seven global themes, several interface languages, per-editor looks (faithful front panel or modern view).
- **Works offline** after a first visit.
- **MIDI Patchbay**: build your MIDI circuit from blocks (inputs, outputs, bus, monitor, filters, test keyboard), wire them with cables, analyse the flow; nothing is routed until you arm it.
- **MIDI Translator** (experimental): raw MIDI / SysEx templates, logical values, fan-out, simulation.

![The workspace MIDI Patchbay](/shots/midi-studio-patchbay.jpg)

## Modules

| Module | Hardware | Status | Links |
| --- | --- | --- | --- |
| **BCR32 Studio** | Behringer BCR32 | Public alpha | [Open](https://thelazygeekguy.github.io/bcr32-studio/) · [Code](https://github.com/TheLazyGeekGuy/bcr32-studio) |
| **FireworX Studio** | TC Electronic FireworX | Public alpha | [Open](https://thelazygeekguy.github.io/fireworx-studio/) · [Code](https://github.com/TheLazyGeekGuy/fireworx-studio) |
| **Mx000 Studio** | TC Electronic M3000 / M2000 | Public alpha | [Open](https://thelazygeekguy.github.io/Mx000-studio/) · [Code](https://github.com/TheLazyGeekGuy/Mx000-studio) |
| **AI² Studio** — *new* | Korg X5DR + 20 AI² family models | Public alpha | [Open](https://thelazygeekguy.github.io/ai2-studio/) · [Code](https://github.com/TheLazyGeekGuy/ai2-studio) |
| X-TOUCH ONE | Behringer X-TOUCH ONE | In the workspace | — |
| CS12 Editor | CS12 control surface | In testing | — |

More editors are in development inside the workspace (BCR2000, BCF2000, X-TOUCH family, Access Virus, Novation Nova, Roland JP-8000) and only show in beta mode.

## 🆕 AI² Studio — Korg X5DR and the whole AI² family

![AI² Studio: faithful X5DR front panel, toolbar and aligned oscillator columns](/shots/ai2-studio.jpg)

- **One workstation for 21 models**, picked from a slider in release order (1991–1999), each with its keys / module, family, ROM and what is available.
- **Faithful X5DR front panel** whose LCD shows what the unit shows (Combination name over the Programs of timbres 1–4, COMBI for 5–8) and whose keys drive the editor; a modern view is also available.
- **Aligned oscillator columns** (Source / VDF / VDA, then their envelopes) and **draggable envelopes** inside their cards, for all 21 models.
- **With the X5DR connected**: automatic identification, name and buffer read on every Program / Combi change, auto edit with read-back, 100-Program / 100-Combination bank reads, Multi, Drums (120 records), Global and full backup, 47 effect algorithms with the X5DR pairing rule, MIDI keyboard / controller input with Panic. Never a STORE.
- **Combi**: stacked-keyboard layout of the 8 timbres with draggable zones, Mute / Solo, and a click on a timbre to browse Programs (bank A, General MIDI bank G with its real names, library banks).
- **Multi**: all **16 parts and their parameters at once**, plus the same keyboard map, foldable.
- **Files and conversions**: automatic family / format detection on import, originals kept; offline conversion between the 21 models (420 directions) with a report listing source bytes, SHA-256, rules, adaptations, losses and dependencies; SysEx and JSON export, ZIP library backups.

![Multi: the 16 parts and their parameters](/shots/ai2-studio-multi.jpg)

::: warning Limits
Only the **X5DR** is edited over MIDI; the other 20 models are edited as files, with provisional front panels. A conversion between models is never a full sound equivalence: the report says exactly what was carried over.
:::

Compatibility: Chromium browser (Chrome, Edge, Brave) with Web MIDI and SysEx permission.
