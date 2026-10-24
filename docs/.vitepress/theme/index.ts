import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ProjectGrid from '../components/ProjectGrid.vue'
import RepoList from '../components/RepoList.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    // Première visite : bascule vers l'anglais si le navigateur n'est pas en français.
    // Ensuite on respecte l'URL, donc le choix fait avec le menu de langue.
    if (typeof window !== 'undefined') {
      try {
        if (!localStorage.getItem('lang-detected')) {
          localStorage.setItem('lang-detected', '1')
          const pref = (navigator.languages?.[0] || navigator.language || 'fr').toLowerCase()
          const path = window.location.pathname
          if (!pref.startsWith('fr') && !path.startsWith('/en')) {
            router.go('/en' + (path === '/' ? '/' : path))
          }
        }
      } catch {}
    }
    app.component('ProjectGrid', ProjectGrid)
    app.component('RepoList', RepoList)
  },
} satisfies Theme
