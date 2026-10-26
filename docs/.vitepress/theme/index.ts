import { h, nextTick, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useRouter, type Theme } from 'vitepress'
import ProjectGrid from '../components/ProjectGrid.vue'
import RepoList from '../components/RepoList.vue'
import IntroSplash from '../components/IntroSplash.vue'
import './custom.css'
import './splash.css'
import './splash-electrons.css'

export default {
  extends: DefaultTheme,
  // Écran d'ouverture de l'accueil, au-dessus de la mise en page par défaut.
  Layout: {
    setup() {
      const router = useRouter()
      // Redirect only after hydration: changing the route earlier mixed FR/EN static content.
      onMounted(async () => {
        await nextTick()
        try {
          if (!localStorage.getItem('lang-detected')) {
            localStorage.setItem('lang-detected', '1')
            const pref = (navigator.languages?.[0] || navigator.language || 'fr').toLowerCase()
            const { pathname, search, hash } = window.location
            if (!pref.startsWith('fr') && !/^\/en(?:\/|$)/.test(pathname)) {
              router.go('/en' + (pathname === '/' ? '/' : pathname) + search + hash)
            }
          }
        } catch {}
      })
      return () => h(DefaultTheme.Layout, null, { 'layout-top': () => h(IntroSplash) })
    },
  },
  enhanceApp({ app }) {
    app.component('ProjectGrid', ProjectGrid)
    app.component('RepoList', RepoList)
  },
} satisfies Theme
