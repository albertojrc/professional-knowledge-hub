import { existsSync } from 'node:fs'
const files=['src/types/promotionQueue.ts','src/data/promotionQueue.ts','src/pages/PromotionQueuePage.tsx','src/styles/promotionQueueOS.css','docs/SPRINT_2_20_PROMOTION_QUEUE.md']
const missing=files.filter((file)=>!existsSync(file))
if(missing.length){console.error(missing.join('\n'));process.exit(1)}
console.log('Sprint 2.20 check passed.')
