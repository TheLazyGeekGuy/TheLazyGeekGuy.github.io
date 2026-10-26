export type Status = 'alpha' | 'testing' | 'preparing'
export type Bi = { fr: string; en: string }

export interface Project {
  slug: string
  name: string
  accent: string
  unit: string
  family: 'MIDI Studio' | 'Écriture' | 'Productivité'
  status: Status
  tagline: Bi
  pitch?: Bi
  image?: string
  wide?: boolean
  shots?: string[]
  link?: string
  repo?: string
  demo?: string
  detail?: Bi
  domain?: Bi
}

export const statusLabels: Record<Status, Bi> = {
  alpha: { fr: 'Alpha publique', en: 'Public alpha' },
  testing: { fr: 'En test', en: 'In testing' },
  preparing: { fr: 'En préparation', en: 'In preparation' },
}

export const projects: Project[] = [
  {
    slug: 'bcr32-studio', name: 'BCR32 Studio', accent: '#f43f5e', unit: 'BCR32',
    family: 'MIDI Studio', status: 'alpha', image: '/shots/bcr32.webp',
    tagline: {
      fr: 'Éditeur navigateur du contrôleur Behringer BCR32 : face avant live, assignations, MIDI Learn, export Cubase MIDI Remote.',
      en: 'Browser editor for the Behringer BCR32 controller: live front panel, assignments, MIDI Learn, Cubase MIDI Remote export.',
    },
    link: 'https://thelazygeekguy.github.io/bcr32-studio/', repo: 'https://github.com/TheLazyGeekGuy/bcr32-studio',
  },
  {
    slug: 'fireworx-studio', name: 'FireworX Studio', accent: '#fb923c', unit: 'FWX',
    family: 'MIDI Studio', status: 'alpha', image: '/shots/fireworx-hardware.png', wide: true,
    tagline: {
      fr: 'Éditeur et librarian du multi-effets TC Electronic FireworX : routage, modulation, banques, variations aléatoires.',
      en: 'Editor and librarian for the TC Electronic FireworX multi-effects: routing, modulation, banks, random variations.',
    },
    link: 'https://thelazygeekguy.github.io/fireworx-studio/', repo: 'https://github.com/TheLazyGeekGuy/fireworx-studio',
  },
  {
    slug: 'mx000-studio', name: 'Mx000 Studio', accent: '#a3e635', unit: 'M3K',
    family: 'MIDI Studio', status: 'alpha', image: '/shots/m3000.png',
    tagline: {
      fr: 'Éditeur des réverbérateurs TC Electronic M3000 (live SysEx) et M2000 (hors-ligne).',
      en: 'Editor for the TC Electronic M3000 (live over SysEx) and M2000 (offline) reverb processors.',
    },
    link: 'https://thelazygeekguy.github.io/Mx000-studio/', repo: 'https://github.com/TheLazyGeekGuy/Mx000-studio',
  },
  {
    slug: 'ai2-studio', name: 'AI² Studio', accent: '#22d3ee', unit: 'AI²',
    family: 'MIDI Studio', status: 'alpha', image: '/shots/ai2-studio.jpg', shots: ['/shots/ai2-studio-multi.jpg'],
    tagline: {
      fr: 'Éditeur de la synthèse Korg AI² : X5DR en direct par MIDI (Program, Combi, Multi, Drums, Global) et 20 autres modèles en fichiers, conversions entre modèles, librairie.',
      en: 'Editor for Korg AI² synthesis: the X5DR live over MIDI (Program, Combi, Multi, Drums, Global) and 20 more models as files, conversions between models, library.',
    },
    link: 'https://thelazygeekguy.github.io/ai2-studio/', repo: 'https://github.com/TheLazyGeekGuy/ai2-studio',
  },
  {
    slug: 'cs12', name: 'CS12 Editor', accent: '#818cf8', unit: 'CS12',
    family: 'MIDI Studio', status: 'testing', image: '/shots/cs12.png',
    tagline: {
      fr: 'Éditeur graphique de la surface CS12 : façade reconstruite, écran TFT, potards, fader, slots et pages, profils exportables, liaison Cubase.',
      en: 'Graphical editor for the CS12 surface: rebuilt front panel, TFT screen, knobs, fader, slots and pages, exportable profiles, Cubase link.',
    },
  },
  {
    slug: 'plume', name: 'Plume', accent: '#38bdf8', unit: 'PLM',
    family: 'Écriture', status: 'testing', image: '/shots/plume.png',
    tagline: {
      fr: 'Un traitement de texte WYSIWYG qui s’utilise comme Word et enregistre en Markdown. Rust, natif et WebAssembly.',
      en: 'A WYSIWYG word processor that feels like Word and saves Markdown. Rust, native and WebAssembly.',
    },
    pitch: {
      fr: 'C’est l’air du temps : se libérer de Word et des formats lourds pour revenir à des choses simples. Un fichier Markdown n’a ni macro, ni plugin, ni base de données à patcher. Surface d’attaque minimale, lisible dans vingt ans par n’importe quel éditeur, versionnable avec Git. Tout ce que n’est pas un WordPress : sécurité, portabilité et maintenabilité d’un fichier texte.',
      en: 'It fits the spirit of the times: ditch Word and heavyweight formats and go back to simple things. A Markdown file has no macros, no plugins and no database to patch. Minimal attack surface, readable in twenty years by any editor, versioned with Git. Everything WordPress is not: the security, portability and maintainability of a plain text file.',
    },
    link: 'https://thelazygeekguy.github.io/plume/', repo: 'https://github.com/TheLazyGeekGuy/plume',
  },
  {
    slug: 'prolyma', name: 'Prolyma', accent: '#f59e0b', unit: 'PROLYMA',
    family: 'Productivité', status: 'preparing',
    domain: { fr: 'Vie professionnelle', en: 'Working life' },
    detail: { fr: '/plm#prolyma', en: '/en/plm#prolyma' },
    tagline: {
      fr: 'Soyez acteur de votre carrière plutôt que de la subir : gestion active de carrière pour celles et ceux qui travaillent.',
      en: 'Take charge of your career instead of enduring it: active career management for people who work.',
    },
  },
  {
    slug: 'domolyma', name: 'Domolyma', accent: '#34d399', unit: 'DOMOLYMA',
    family: 'Productivité', status: 'alpha',
    domain: { fr: 'Logement & copropriété', en: 'Home & condominium' },
    detail: { fr: '/plm#domolyma', en: '/en/plm#domolyma' },
    tagline: {
      fr: 'Le dossier de vie de vos biens : copropriété, documents, interventions et décisions. Une démonstration publique sur données fictives.',
      en: 'Your properties’ life records: condominium management, documents, maintenance and decisions. A public demo with fictional data.',
    },
    link: 'https://thelazygeekguy.github.io/domolyma/',
    demo: 'https://thelazygeekguy.github.io/domolyma/demo/',
    repo: 'https://github.com/TheLazyGeekGuy/domolyma',
  },
  {
    slug: 'sanolyma', name: 'Sanolyma', accent: '#a78bfa', unit: 'SANOLYMA',
    family: 'Productivité', status: 'preparing',
    domain: { fr: 'Santé personnelle', en: 'Personal health' },
    detail: { fr: '/plm#sanolyma', en: '/en/plm#sanolyma' },
    tagline: {
      fr: 'Un projet de carnet de santé personnel pour retrouver ses documents, sa chronologie et préparer ses rendez-vous. Présentation publique à venir.',
      en: 'A personal health-record project to find documents, follow a timeline and prepare appointments. Public presentation to come.',
    },
  },
]
