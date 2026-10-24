import { defineLoader } from 'vitepress'

export interface Repo {
  name: string
  description: string
  language: string | null
  stars: number
  url: string
  pushedAt: string
}

const USER = 'TheLazyGeekGuy'
// Dépôts déjà présentés à la main, profil, ou à ne pas afficher.
const EXCLUDE = new Set([
  'bcr32-studio', 'fireworx-studio', 'Mx000-studio', 'plume',
  'TheLazyGeekGuy', 'TheLazyGeekGuy.github.io',
  // Masqués volontairement.
  'AIAudioForensics', 'DIY-Waves-Soundgrid-Server',
])
const EXCLUDE_PATTERN = /opencore|hackintosh|optiplex|elitedesk/i

declare const data: Repo[]
export { data }

export default defineLoader({
  async load(): Promise<Repo[]> {
    try {
      const headers: Record<string, string> = { Accept: 'application/vnd.github+json' }
      if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
      const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed&type=owner`, { headers })
      if (!res.ok) throw new Error(`GitHub API ${res.status}`)
      const repos: any[] = await res.json()
      return repos
        .filter((r) => !r.fork && !r.private && !r.archived && !EXCLUDE.has(r.name) && !EXCLUDE_PATTERN.test(r.name))
        .map((r) => ({
          name: r.name,
          description: r.description ?? '',
          language: r.language,
          stars: r.stargazers_count,
          url: r.html_url,
          pushedAt: r.pushed_at,
        }))
    } catch (e) {
      console.warn('[repos] GitHub indisponible, liste vide :', (e as Error).message)
      return []
    }
  },
})
