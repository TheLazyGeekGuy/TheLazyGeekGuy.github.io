# TheLazyGeekGuy : site vitrine

Site CV / vitrine bilingue (FR/EN) construit avec [VitePress](https://vitepress.dev). Contenu en Markdown.

```sh
npm ci
npm run dev       # http://localhost:5173
npm run build
```

- Pages : `docs/*.md` (français) et `docs/en/*.md` (anglais)
- Projets mis en avant : `docs/.vitepress/data/projects.ts`
- Autres dépôts : récupérés depuis l'API GitHub à la construction (`docs/.vitepress/data/repos.data.ts`, liste `EXCLUDE` pour masquer)
- Illustration d'en-tête aléatoire : `node scripts/generate-hero.mjs`

Déployé par GitHub Actions sur GitHub Pages (`.github/workflows/deploy.yml`).
