import{existsSync,readFileSync}from'node:fs'
const files=['src/types/hubQuality.ts','src/data/hubQualityPolish.ts','src/data/hubQASearch.ts','src/pages/HubQAPolishPage.tsx','src/styles/hubQAPolishOS.css','docs/SPRINT_4_9_FINAL_HUB_QA_POLISH.md']
const signals=[['src/types/knowledge.ts','hub-qa-polish'],['src/app/App.tsx','HubQAPolishPage'],['src/app/App.tsx',"activeView === 'hub-qa-polish'"],['src/components/layout/Sidebar.tsx','Hub QA Polish'],['src/components/layout/Sidebar.tsx','PKOS v4.9'],['src/data/searchIndex.ts','hubQASearchEntries'],['src/data/searchIndex.ts','QA Check'],['src/styles/studyModuleHubOS.css','hubQAPolishOS.css'],['src/data/hubQualityPolish.ts','Study-first navigation priority'],['src/data/hubQualityPolish.ts','Global Search coverage']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 4.9 check passed.')
