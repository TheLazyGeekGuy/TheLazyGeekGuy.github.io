<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data as repos } from '../data/repos.data'

const { lang } = useData()
const fr = computed(() => lang.value.startsWith('fr'))
const fmt = (d: string) => new Date(d).toLocaleDateString(lang.value, { year: 'numeric', month: 'short' })
</script>

<template>
  <ul v-if="repos.length" class="repos">
    <li v-for="r in repos" :key="r.name">
      <a :href="r.url" target="_blank" rel="noopener">
        <b>{{ r.name }}</b>
        <span class="desc">{{ r.description || (fr ? 'Pas de description.' : 'No description.') }}</span>
        <span class="meta">
          <span v-if="r.language">● {{ r.language }}</span>
          <span v-if="r.stars">★ {{ r.stars }}</span>
          <span>{{ fmt(r.pushedAt) }}</span>
        </span>
      </a>
    </li>
  </ul>
  <p v-else class="empty">{{ fr ? 'La liste GitHub est indisponible pour le moment.' : 'The GitHub list is unavailable right now.' }}</p>
</template>

<style scoped>
.repos { list-style: none; padding: 0; margin: 20px 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 14px; }
.repos li { margin: 0; }
a { display: flex; flex-direction: column; gap: 6px; height: 100%; padding: 16px 18px; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); text-decoration: none; transition: border-color .2s, transform .2s; }
a:hover { border-color: var(--vp-c-brand-1); transform: translateY(-2px); }
b { color: var(--vp-c-text-1); font-family: var(--vp-font-family-mono); font-size: .95rem; }
.desc { color: var(--vp-c-text-2); font-size: .88rem; line-height: 1.5; flex: 1; }
.meta { display: flex; gap: 14px; color: var(--vp-c-text-3); font-size: .78rem; }
.empty { color: var(--vp-c-text-3); }
</style>
