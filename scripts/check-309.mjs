import{existsSync,readFileSync}from'node:fs'
const files=['src/types/managementStudy.ts','src/data/managementStudy.ts','src/pages/ManagementStrategyStudyPage.tsx','src/data/managementSearch.ts','src/styles/managementStrategyStudyOS.css','docs/SPRINT_3_9_MANAGEMENT_STRATEGY_STUDY.md']
const signals=[['src/types/knowledge.ts','management-strategy-study'],['src/app/App.tsx','ManagementStrategyStudyPage'],['src/app/App.tsx',"activeView === 'management-strategy-study'"],['src/components/layout/Sidebar.tsx','Management & Strategy Study'],['src/components/layout/Sidebar.tsx','PKOS v3.9'],['src/data/searchIndex.ts','managementSearchEntries'],['src/data/searchIndex.ts','management-strategy-study'],['src/data/studyModuleHub.ts','management-strategy-study'],['src/styles/studyModuleHubOS.css','managementStrategyStudyOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.9 check passed.')
