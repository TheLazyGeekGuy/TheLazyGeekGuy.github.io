// Trajectoires des électrons de l'écran d'ouverture (même principe que l'ouverture de MIDI Studio) :
// chaque route cubique de splash-electron-routes.json devient une animation CSS précalculée.
// Usage : node scripts/generate-splash-electrons.mjs [--check]
import { readFileSync, writeFileSync } from 'node:fs'

const source = new URL('../docs/.vitepress/data/splash-electron-routes.json', import.meta.url)
const target = new URL('../docs/.vitepress/theme/splash-electrons.css', import.meta.url)
const routes = JSON.parse(readFileSync(source, 'utf8'))
if (!Array.isArray(routes) || routes.length !== 12) throw Error('Douze routes attendues')
const pct = (v, size) => ((v / size) * 100).toFixed(5) + '%'
const output = '/* Généré depuis splash-electron-routes.json : node scripts/generate-splash-electrons.mjs */\n' + routes.map((route, index) => {
  const v = route.match(/-?\d+(?:\.\d+)?/g)?.map(Number)
  if (v?.length !== 8 || v.some((n) => !Number.isFinite(n))) throw Error('Route cubique invalide : ' + route)
  const [x0, y0, x1, y1, x2, y2, x3, y3] = v
  const frames = Array.from({ length: 33 }, (_, step) => {
    const t = step / 32, u = 1 - t
    const x = u * u * u * x0 + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t * x3
    const y = u * u * u * y0 + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t * y3
    return `${(t * 94).toFixed(3)}%{transform:translate3d(${pct(x, 430)},${pct(y, 96)},0)}`
  })
  return `@keyframes lg-electron-flight-${index}{${frames.join('')}100%{transform:translate3d(${pct(x3, 430)},${pct(y3, 96)},0)}}`
}).join('\n') + '\n'
if (process.argv.includes('--check')) { if (readFileSync(target, 'utf8') !== output) throw Error('CSS périmé : relancer le générateur') }
else writeFileSync(target, output)
console.log('OK trajectoires des électrons (' + routes.length + ')')
