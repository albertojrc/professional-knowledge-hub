import { existsSync } from 'node:fs'
const files=['src/types/sourceBatch.ts','src/data/sourceReviewBatches.ts','src/pages/SourceBatchPlannerPage.tsx','src/styles/sourceBatchOS.css','docs/SPRINT_2_17_SOURCE_BATCH_PLANNER.md']
const missing=files.filter((file)=>!existsSync(file))
if(missing.length){console.error(missing.join('\n'));process.exit(1)}
console.log('Sprint 2.17 check passed.')
