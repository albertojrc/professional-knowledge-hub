import{existsSync,readFileSync}from'node:fs'
const files=['src/types/creditPromotion.ts','src/data/creditPromotionQueue.ts','src/pages/CreditPromotionQueuePage.tsx','src/styles/creditPromotionQueueOS.css','docs/SPRINT_5_3_CREDIT_PROMOTION_QUEUE.md']
const signals=[['src/types/knowledge.ts','export type ViewId = string'],['src/app/App.tsx','CreditPromotionQueuePage'],['src/app/App.tsx',"activeView === 'credit-promotion-queue'"],['src/components/layout/Sidebar.tsx','Credit Promotion Queue'],['src/components/layout/Sidebar.tsx','PKOS v5.3'],['src/styles/studyModuleHubOS.css','creditPromotionQueueOS.css'],['src/data/creditPromotionQueue.ts','Promote credit scoring workflow'],['src/data/creditPromotionQueue.ts','Reject full source-backed promotion for now']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.3 check passed.')
