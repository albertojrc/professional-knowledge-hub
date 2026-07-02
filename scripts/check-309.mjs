import{existsSync,readFileSync}from'node:fs'
const route='management-'+'strategy-'+'study'
const files=['src/types/managementStudy.ts','src/data/managementStudy.ts','src/pages/ManagementStrategyStudyPage.tsx','src/data/managementSearch.ts','src/styles/managementStrategyStudyOS.css','docs/SPRINT_3_9_MANAGEMENT_STRATEGY_STUDY.md']
const signals=[['src/app/App.tsx','ManagementStrategyStudyPage'],['src/app/App.tsx',route],['src/routes/routeRegistry.ts',route],['src/data/searchIndex.ts','managementSearchEntries'],['src/data/searchIndex.ts',route],['src/data/studyModuleHub.ts',route],['src/styles/studyModuleHubOS.css','managementStrategyStudyOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.9 check passed.')
