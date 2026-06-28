import{existsSync,readFileSync}from'node:fs'
const files=['src/types/economicsStudy.ts','src/data/economicsStudy.ts','src/pages/EconomicsMarketsStudyPage.tsx','src/data/economicsSearch.ts','src/styles/economicsMarketsStudyOS.css','docs/SPRINT_3_8_ECON_STUDY.md']
const signals=[['src/types/knowledge.ts','economics-markets-study'],['src/app/App.tsx','EconomicsMarketsStudyPage'],['src/app/App.tsx',"activeView === 'economics-markets-study'"],['src/components/layout/Sidebar.tsx','Economics & Markets Study'],['src/components/layout/Sidebar.tsx','PKOS v3.8'],['src/data/searchIndex.ts','economicsSearchEntries'],['src/data/searchIndex.ts','economics-markets-study'],['src/data/studyModuleHub.ts','economics-markets-study'],['src/styles/studyModuleHubOS.css','economicsMarketsStudyOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.8 check passed.')
