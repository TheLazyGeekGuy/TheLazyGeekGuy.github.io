<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { projects, statusLabels, type Project } from '../data/projects'

const props = defineProps<{ family?: string }>()
const { lang } = useData()
const L = computed<'fr' | 'en'>(() => (lang.value.startsWith('fr') ? 'fr' : 'en'))
const t = computed(() => (L.value === 'fr'
  ? { open: 'Ouvrir l’éditeur →', web: 'Essayer la version web →', code: 'Code', soon: 'NO SIGNAL · capture à venir', shot: 'Capture de' }
  : { open: 'Open the editor →', web: 'Try the web version →', code: 'Code', soon: 'NO SIGNAL · screenshot coming soon', shot: 'Screenshot of' }))
const by = (f: string) => projects.filter((p) => p.family === f)
const show = (f: string) => !props.family || props.family === f
const rack = computed(() => by('MIDI Studio'))
const sheet = computed(() => by('Écriture'))
const duo = computed(() => by('Productivité'))
const slots = (p: Project) => Array.from({ length: 3 }, (_, i) => p.shots?.[i] ?? null)
const style = (p: Project) => ({ '--accent': p.accent })
</script>

<template>
  <!-- MIDI Studio : unités de rack -->
  <div v-if="show('MIDI Studio')" class="rack">
    <article v-for="(p, i) in rack" :key="p.slug" class="unit" :style="style(p)">
      <aside class="ear">
        <i class="screw" /><i class="screw" />
        <span class="serial">{{ p.unit }}</span>
        <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
        <i class="screw" /><i class="screw" />
      </aside>
      <div class="panel">
        <div class="screen" :class="{ off: !p.image, wide: p.wide }">
          <img v-if="p.image" :src="p.image" :alt="`${t.shot} ${p.name}`" loading="lazy" />
          <div v-else class="nosignal"><b>{{ p.name }}</b><span>{{ t.soon }}</span></div>
        </div>
        <div class="info">
          <span class="led" /> <span class="badge" :class="p.status">{{ statusLabels[p.status][L] }}</span>
          <h3>{{ p.name }}</h3>
          <p>{{ p.tagline[L] }}</p>
          <div class="thumbs">
            <span v-for="(s, k) in slots(p)" :key="k" class="thumb"><img v-if="s" :src="s" alt="" /><em v-else>+</em></span>
          </div>
          <div class="links">
            <a v-if="p.link" :href="p.link" target="_blank" rel="noopener">{{ t.open }}</a>
            <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener">{{ t.code }}</a>
          </div>
        </div>
      </div>
      <aside class="ear right"><i class="screw" /><i class="screw" /><i class="screw" /><i class="screw" /></aside>
    </article>
  </div>

  <!-- Écriture : feuille de papier -->
  <div v-if="show('Écriture')" class="sheets">
    <article v-for="p in sheet" :key="p.slug" class="sheet" :style="style(p)">
      <div class="paper">
        <img v-if="p.image" :src="p.image" :alt="`${t.shot} ${p.name}`" loading="lazy" />
        <div v-else class="lines"><i /><i /><i /><i /></div>
      </div>
      <div class="note">
        <span class="badge" :class="p.status">{{ statusLabels[p.status][L] }}</span>
        <h3>{{ p.name }}</h3>
        <p>{{ p.tagline[L] }}</p>
        <p v-if="p.pitch" class="pitch">{{ p.pitch[L] }}</p>
        <div class="links">
          <a v-if="p.link" :href="p.link" target="_blank" rel="noopener">{{ t.web }}</a>
          <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener">{{ t.code }}</a>
        </div>
      </div>
    </article>
  </div>

  <!-- Gestion : duo -->
  <div v-if="show('Productivité')" class="duo">
    <article v-for="p in duo" :key="p.slug" class="tile" :style="style(p)">
      <div class="window">
        <div class="bar"><i /><i /><i /></div>
        <div class="dash"><b /><b /><b /><u /><u /></div>
      </div>
      <span class="badge" :class="p.status">{{ statusLabels[p.status][L] }}</span>
      <h3>{{ p.name }}</h3>
      <p>{{ p.tagline[L] }}</p>
    </article>
  </div>
</template>

<style scoped>
.badge { font-size: .7rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; padding: 3px 10px; border-radius: 99px; background: color-mix(in srgb, var(--accent) 16%, transparent); color: var(--accent); }
.badge.testing { background: rgba(251,191,36,.15); color: #fbbf24; }
.badge.preparing { background: rgba(148,163,184,.15); color: #94a3b8; }
h3 { margin: 6px 0 0 !important; padding: 0; border: 0; font-size: 1.35rem !important; }
p { margin: 0; color: var(--vp-c-text-2); line-height: 1.55; font-size: .95rem; }
.links { display: flex; gap: 18px; margin-top: 12px; font-weight: 600; font-size: .9rem; }
.links a { color: var(--accent); }

/* ---- Rack ---- */
.rack { display: flex; flex-direction: column; gap: 14px; margin: 24px 0; }
.unit { display: grid; grid-template-columns: 64px 1fr 28px; background: linear-gradient(#1b1f2a, #12151d); border: 1px solid #262c3a; border-radius: 6px; overflow: hidden; box-shadow: 0 10px 30px -18px var(--accent); transition: box-shadow .25s, transform .25s; }
.unit:hover { transform: translateX(4px); box-shadow: 0 14px 40px -14px var(--accent); }
.ear { background: linear-gradient(90deg, #2a3040, #1c212d); display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 12px 0; border-right: 1px solid #0b0d12; }
.ear.right { border-right: 0; border-left: 1px solid #0b0d12; }
.screw { width: 14px; height: 14px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #8a93a8, #3a4254 70%); position: relative; }
.screw::after { content: ''; position: absolute; left: 2px; right: 2px; top: 6px; height: 2px; background: #151821; transform: rotate(35deg); }
.serial { writing-mode: vertical-rl; transform: rotate(180deg); font: 700 .75rem var(--vp-font-family-mono); letter-spacing: .25em; color: var(--accent); }
.num { font: .7rem var(--vp-font-family-mono); color: #5b6479; }
.panel { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr); gap: 24px; padding: 18px 22px; }
.screen { background: #05070a; border: 2px solid #0a0c11; border-radius: 6px; box-shadow: inset 0 0 24px #000; aspect-ratio: 16 / 9; overflow: hidden; display: flex; }
.screen img { width: 100%; height: 100%; object-fit: cover; object-position: top left; }
.screen.wide img { object-fit: contain; object-position: center; }
.screen.off { background: repeating-linear-gradient(0deg, #05070a, #05070a 3px, #080b10 3px, #080b10 6px); align-items: center; justify-content: center; }
.nosignal { display: flex; flex-direction: column; align-items: center; gap: 6px; font-family: var(--vp-font-family-mono); }
.nosignal b { color: var(--accent); font-size: 1.3rem; letter-spacing: .12em; text-transform: uppercase; opacity: .85; }
.nosignal span { color: #4b5468; font-size: .72rem; letter-spacing: .1em; }
.info { display: flex; flex-direction: column; gap: 6px; }
.led { display: inline-block; width: 9px; height: 9px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 10px var(--accent); margin-right: 6px; }
.info > .badge { align-self: flex-start; display: inline-block; vertical-align: middle; }
.info p { flex: 1; }
.thumbs { display: flex; gap: 8px; margin-top: 10px; }
.thumb { width: 64px; height: 40px; border: 1px dashed #2f3749; border-radius: 4px; display: flex; align-items: center; justify-content: center; overflow: hidden; color: #3f485c; }
.thumb img { width: 100%; height: 100%; object-fit: cover; }
.thumb em { font-style: normal; font-size: 1.1rem; }
@media (max-width: 860px) { .panel { grid-template-columns: 1fr; } .unit { grid-template-columns: 40px 1fr 16px; } }

/* ---- Feuille ---- */
.sheets { margin: 24px 0; }
.sheet { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 40px; align-items: center; padding: 36px; border-radius: 18px; background: radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 60%), var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); }
.paper { background: #fafafa; border-radius: 4px; padding: 0; transform: rotate(-2.2deg); box-shadow: 0 20px 40px -12px #000a; aspect-ratio: 4 / 3; overflow: hidden; transition: transform .3s; }
.sheet:hover .paper { transform: rotate(0deg) scale(1.02); }
.paper img { width: 100%; height: 100%; object-fit: cover; object-position: top left; }
.lines { padding: 28px; display: flex; flex-direction: column; gap: 14px; } .lines i { height: 8px; background: #d9dde5; border-radius: 4px; } .lines i:nth-child(2) { width: 80%; } .lines i:nth-child(3) { width: 90%; } .lines i:nth-child(4) { width: 55%; }
.note { display: flex; flex-direction: column; gap: 6px; }
.note .badge { align-self: flex-start; }
.pitch { margin-top: 8px; padding-left: 14px; border-left: 3px solid var(--accent); color: var(--vp-c-text-1); }
@media (max-width: 760px) { .sheet { grid-template-columns: 1fr; padding: 22px; } }

/* ---- Duo ---- */
.duo { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin: 24px 0; }
.tile { padding: 26px; border-radius: 18px; border: 1px solid var(--vp-c-divider); background: linear-gradient(160deg, color-mix(in srgb, var(--accent) 14%, var(--vp-c-bg-soft)), var(--vp-c-bg-soft) 60%); display: flex; flex-direction: column; gap: 6px; }
.window { border: 1px dashed color-mix(in srgb, var(--accent) 50%, transparent); border-radius: 10px; margin-bottom: 14px; background: #0a0c11aa; overflow: hidden; }
.bar { display: flex; gap: 6px; padding: 8px 10px; border-bottom: 1px solid #1d2230; } .bar i { width: 8px; height: 8px; border-radius: 50%; background: #2a3142; }
.dash { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding: 12px; }
.dash b { height: 44px; border-radius: 6px; background: color-mix(in srgb, var(--accent) 22%, #151922); }
.dash u { grid-column: span 3; height: 14px; border-radius: 4px; background: #171c27; } .dash u:last-child { width: 60%; }
.tile .badge { align-self: flex-start; }
</style>
