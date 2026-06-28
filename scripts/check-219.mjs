import { existsSync } from 'node:fs'
const files=['src/types/reviewResult.ts','src/data/reviewResultRegistry.ts','src/pages/ReviewResultRegistryPage.tsx','src/styles/reviewResultOS.css','docs/SPRINT_2_19_REVIEW_RESULT_REGISTRY.md']
const missing=files.filter((file)=>!existsSync(file))
if(missing.length){console.error(missing.join('\n'));process.exit(1)}
console.log('Sprint 2.19 check passed.')
