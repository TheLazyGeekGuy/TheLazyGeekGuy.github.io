import { defineConfig } from 'vitepress'

const social = [{ icon: 'github', link: 'https://github.com/TheLazyGeekGuy' }]

export default defineConfig({
  title: 'TheLazyGeekGuy',
  cleanUrls: true,
  appearance: 'dark',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  locales: {
    root: {
      label: 'Français',
      lang: 'fr-FR',
      description: 'Ingénieur IT depuis 30 ans, bidouilleur audio. Éditeurs MIDI Studio, outils d’automatisation et logiciels de gestion.',
      themeConfig: {
        nav: [{ text: 'Projets', link: '/projects/' }, { text: 'Parcours', link: '/cv' }],
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
        nav: [{ text: 'Projects', link: '/en/projects/' }, { text: 'Background', link: '/en/cv' }],
        footer: { message: 'Written in Markdown, built with VitePress.', copyright: '© TheLazyGeekGuy' },
      },
    },
  },
  themeConfig: { logo: '/favicon.svg', socialLinks: social, outline: false },
})
