import { existsSync } from 'node:fs'
const files=['src/types/sourcePack.ts','src/data/sourcePackGuide.ts','src/pages/SourcePackGuidePage.tsx','src/styles/sourcePackOS.css','docs/SPRINT_2_16_SOURCE_PACK_GUIDE.md']
const missing=files.filter((file)=>!existsSync(file))
if(missing.length){console.error(missing.join('\n'));process.exit(1)}
console.log('Sprint 2.16 check passed.')
