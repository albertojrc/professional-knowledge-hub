import{existsSync}from'node:fs'
const files=['src/types/sourceCommandCenter.ts','src/data/sourceCommandCenter.ts','src/pages/SourceCommandCenterPage.tsx','src/styles/sourceCommandCenterOS.css','docs/SPRINT_2_22_SOURCE_COMMAND_CENTER.md']
const missing=files.filter(f=>!existsSync(f))
if(missing.length){console.error(missing.join('\n'));process.exit(1)}
console.log('Sprint 2.22 check passed.')
