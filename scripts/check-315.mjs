import{existsSync,readFileSync}from'node:fs'
const files=['src/types/studyDrill.ts','src/data/studyDrills.ts','src/data/studyDrillSearch.ts','src/pages/PracticeEnginePage.tsx','src/styles/practiceEngineOS.css','docs/SPRINT_3_15_PRACTICE_ENGINE.md']
const signals=[['src/types/knowledge.ts','practice-engine'],['src/app/App.tsx','PracticeEnginePage'],['src/app/App.tsx',"activeView === 'practice-engine'"],['src/components/layout/Sidebar.tsx','Practice Engine'],['src/components/layout/Sidebar.tsx','PKOS v3.15'],['src/data/searchIndex.ts','studyDrillSearchEntries'],['src/data/searchIndex.ts','Practice Drill'],['src/styles/studyModuleHubOS.css','practiceEngineOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.15 check passed.')
