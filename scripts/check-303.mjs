import{existsSync,readFileSync}from'node:fs'
const files=['src/types/studyModule.ts','src/data/studyModuleHub.ts','src/pages/StudyModuleHubPage.tsx','src/data/studyModuleSearch.ts','src/styles/studyModuleHubOS.css','docs/SPRINT_3_3_STUDY_FIRST_REFACTOR.md']
const signals=[['src/types/knowledge.ts','study-modules'],['src/app/App.tsx','StudyModuleHubPage'],['src/app/App.tsx',"activeView === 'study-modules'"],['src/components/layout/Sidebar.tsx','Study Modules'],['src/components/layout/Sidebar.tsx','Evidence & QA'],['src/components/layout/Sidebar.tsx','PKOS v3.3'],['src/data/searchIndex.ts','Study Module'],['src/main.tsx','studyModuleHubOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.3 check passed.')
