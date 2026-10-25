import { defineConfig } from 'vitepress'

const social = [{ icon: 'github', link: 'https://github.com/TheLazyGeekGuy' }]

export default defineConfig({
  title: 'TheLazyGeekGuy',
  cleanUrls: true,
  appearance: 'dark',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    // Écran d'ouverture : décidé avant le premier rendu (accueil seulement, ?intro=0 pour le passer,
    // préférence mémorisée), pour que la page n'apparaisse pas avant lui.
    ['script', {}, `try{var p=location.pathname;if(/^\\/(en\\/?)?$/.test(p)&&new URLSearchParams(location.search).get('intro')!=='0'&&localStorage.getItem('lazygeek.opening.v1')!=='0')document.documentElement.dataset.intro='1'}catch(e){}`],
  ],
  locales: {
    root: {
      label: 'Français',
      lang: 'fr-FR',
      description: 'Ingénieur IT depuis 30 ans, bidouilleur audio. Éditeurs MIDI Studio, outils d’automatisation et logiciels de gestion.',
      themeConfig: {
        nav: [{ text: 'Projets', link: '/projects/' }, { text: 'MIDI Studio', link: '/midi-studio' }, { text: 'Parcours', link: '/cv' }],
        footer: { message: 'Fait en Markdown, avec VitePress.', copyright: '© TheLazyGeekGuy' },
        langMenuLabel: 'Langue', returnToTopLabel: 'Haut de page', darkModeSwitchLabel: 'Thème',
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: '30 years in IT, audio hacker. MIDI Studio editors, automation tools and management software.',
      themeConfig: {
        nav: [{ text: 'Projects', link: '/en/projects/' }, { text: 'MIDI Studio', link: '/en/midi-studio' }, { text: 'Background', link: '/en/cv' }],
        footer: { message: 'Written in Markdown, built with VitePress.', copyright: '© TheLazyGeekGuy' },
      },
    },
  },
  themeConfig: { logo: '/favicon.svg', socialLinks: social, outline: false },
})
