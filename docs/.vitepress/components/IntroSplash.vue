<script setup lang="ts">
// Écran d'ouverture de la page d'accueil, repris de l'ouverture de MIDI Studio : des électrons convergent
// vers le point rouge du logo, puis l'écran s'efface. Le script en tête de page (config.ts) décide s'il
// s'affiche et pose html[data-intro] avant le premier rendu, pour que l'accueil n'apparaisse pas avant lui.
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import routes from '../data/splash-electron-routes.json'

const KEY = 'lazygeek.opening.v1'
const { lang } = useData()
const visible = ref(false), leaving = ref(false), enabled = ref(true), reduced = ref(false), paused = ref(false)
const skip = ref<HTMLButtonElement>()
const fr = computed(() => lang.value.startsWith('fr'))
const t = computed(() => fr.value
  ? { status: 'Ingénieur IT depuis 30 ans · bidouilleur audio', small: 'MIDI Studio · automatisation · logiciels', show: 'Afficher l’animation d’ouverture', skip: 'Passer' }
  : { status: '30 years in IT · audio hacker', small: 'MIDI Studio · automation · software', show: 'Show opening animation', skip: 'Skip' })
const timers: ReturnType<typeof setTimeout>[] = []

function close() {
  visible.value = false
  leaving.value = false
  delete document.documentElement.dataset.intro
}
function dismiss() {
  if (!visible.value || leaving.value) return
  if (reduced.value) return close()
  leaving.value = true
  timers.push(setTimeout(close, 700))
}
function setPreference(event: Event) {
  enabled.value = (event.target as HTMLInputElement).checked
  try { localStorage.setItem(KEY, enabled.value ? '1' : '0') } catch {}
  if (!enabled.value) dismiss()
}
const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { e.preventDefault(); dismiss() } }
const visibility = () => { paused.value = document.hidden }

onMounted(() => {
  if (document.documentElement.dataset.intro !== '1') return
  try { enabled.value = localStorage.getItem(KEY) !== '0' } catch {}
  reduced.value = matchMedia('(prefers-reduced-motion: reduce)').matches
  visible.value = true
  visibility()
  window.addEventListener('keydown', key)
  document.addEventListener('visibilitychange', visibility)
  timers.push(setTimeout(dismiss, 5000))
  nextTick(() => skip.value?.focus({ preventScroll: true }))
})
onBeforeUnmount(() => {
  timers.forEach(clearTimeout)
  window.removeEventListener('keydown', key)
  document.removeEventListener('visibilitychange', visibility)
})
</script>

<template>
  <section v-if="visible" class="lg-opening" :class="{ 'lg-leaving': leaving }" :data-paused="paused || undefined"
    role="dialog" aria-modal="true" aria-label="TheLazyGeekGuy">
    <div class="lg-brand">
      <div class="lg-logo-field">
        <div v-if="!reduced" class="lg-electron-scene" aria-hidden="true">
          <svg class="lg-energy" viewBox="0 0 430 96" focusable="false"><path v-for="d in routes" :key="d" class="lg-orbit" :d="d" /></svg>
          <div class="lg-core" />
          <span v-for="(_, i) in routes" :key="i" class="lg-electron"
            :style="{ animationName: `lg-electron-flight-${i},lg-electron-fade`, animationDuration: `${3.2 + (i % 5) * 0.53}s`, animationDelay: `${-i * 0.71}s` }" />
        </div>
        <img :src="withBase('/branding/lazygeek-logo.svg')" width="430" height="96" alt="TheLazyGeekGuy" />
      </div>
      <div class="lg-rule" aria-hidden="true" />
      <p role="status">{{ t.status }}</p>
      <small>{{ t.small }}</small>
    </div>
    <footer>
      <label class="lg-preference"><input type="checkbox" :checked="enabled" @change="setPreference" />{{ t.show }}</label>
      <button ref="skip" type="button" class="lg-skip" @click="dismiss">{{ t.skip }} <span aria-hidden="true">→</span></button>
    </footer>
  </section>
</template>
