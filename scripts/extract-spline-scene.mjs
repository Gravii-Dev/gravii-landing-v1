/**
 * One-time script: extracts Spline scene array from exported index.html
 * and writes public/spline-scene-data.json for Runtime app.start(data).
 *
 * Usage: node scripts/extract-spline-scene.mjs [path-to-index.html]
 * Default: ~/Downloads/index.html
 */
import fs from 'node:fs'
import path from 'node:path'

const htmlPath =
  process.argv[2] ||
  path.join(process.env.HOME || '', 'Downloads', 'index.html')
const outPath = path.join(process.cwd(), 'public', 'spline-scene-data.json')

const html = fs.readFileSync(htmlPath, 'utf8')
const startMarker = 'app.start(['
const startIdx = html.indexOf(startMarker)
if (startIdx === -1) {
  console.error('Could not find app.start([ in', htmlPath)
  process.exit(1)
}
const dataStart = startIdx + startMarker.length
// Find matching ] (format is app.start([...]).then(onLoad);)
let depth = 1
let i = dataStart
while (depth > 0 && i < html.length) {
  const c = html[i]
  if (c === '[') depth++
  else if (c === ']') depth--
  i++
}
const endIdx = i - 1
const arrayStr = `[${html.slice(dataStart, endIdx)}]`
const data = JSON.parse(arrayStr)
fs.writeFileSync(outPath, arrayStr, 'utf8')
console.log('Extracted', data.length, 'bytes to', outPath)
