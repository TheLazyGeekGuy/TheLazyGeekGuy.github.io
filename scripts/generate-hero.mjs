// Illustration d'en-tête aléatoire : orbites + onde, graine tirée au hasard à chaque exécution.
// Usage : node scripts/generate-hero.mjs [graine]
import { writeFileSync } from 'node:fs'

let seed = Number(process.argv[2]) || Math.floor(Math.random() * 2 ** 31)
const rnd = () => ((seed = (seed * 1664525 + 1013904223) % 2 ** 32) / 2 ** 32)
const pick = (a) => a[Math.floor(rnd() * a.length)]
const hues = [pick([20, 35, 45]), pick([330, 345, 0]), pick([190, 210, 260])]
const col = (i, l = 60, a = 1) => `hsla(${(hues[i % 3] + rnd() * 25) | 0} 90% ${l}% / ${a})`
const W = 800, H = 800, cx = W / 2, cy = H / 2

let out = ''
for (let i = 0; i < 9 + Math.floor(rnd() * 6); i++) {
  const rx = 90 + rnd() * 280, ry = rx * (0.35 + rnd() * 0.6), rot = rnd() * 180
  out += `<ellipse cx="${cx}" cy="${cy}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" transform="rotate(${rot.toFixed(1)} ${cx} ${cy})" fill="none" stroke="${col(i)}" stroke-width="${(0.8 + rnd() * 2.4).toFixed(1)}"/>`
}
let d = ''
const amp = 40 + rnd() * 70, f1 = 2 + rnd() * 5, f2 = 5 + rnd() * 11
for (let x = 60; x <= W - 60; x += 4) {
  const t = (x - 60) / (W - 120), env = Math.sin(Math.PI * t)
  const y = cy + env * amp * (Math.sin(t * f1 * Math.PI * 2) * 0.7 + Math.sin(t * f2 * Math.PI * 2) * 0.3)
  d += (x === 60 ? 'M' : 'L') + x + ' ' + y.toFixed(1)
}
out += `<path d="${d}" fill="none" stroke="${col(0, 65)}" stroke-width="3" stroke-linecap="round"/>`
for (let i = 0; i < 38; i++) {
  const a = rnd() * 6.283, r = 60 + rnd() * 340
  out += `<circle cx="${(cx + Math.cos(a) * r).toFixed(1)}" cy="${(cy + Math.sin(a) * r).toFixed(1)}" r="${(2 + rnd() * 9).toFixed(1)}" fill="${col(i, 62, 0.85)}"/>`
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Illustration générative"><!-- seed ${process.argv[2] || 'random'} -->
<defs><radialGradient id="g"><stop offset="0" stop-color="hsl(${hues[0]} 80% 22%)" stop-opacity=".55"/><stop offset="1" stop-color="#0d0f14" stop-opacity="0"/></radialGradient></defs>
<circle cx="${cx}" cy="${cy}" r="${W / 2}" fill="url(#g)"/>${out}</svg>`
writeFileSync(new URL('../docs/public/hero.svg', import.meta.url), svg)
console.log('hero.svg généré')
