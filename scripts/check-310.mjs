import{existsSync,readFileSync}from'node:fs'
const route='tools-'+'platforms-'+'study'
const files=['src/types/toolsStudy.ts','src/data/toolsStudy.ts','src/pages/ToolsPlatformsStudyPage.tsx','src/data/toolsSearch.ts','src/styles/toolsPlatformsStudyOS.css','docs/SPRINT_3_10_TOOLS_PLATFORMS_STUDY.md']
const signals=[['src/app/App.tsx','ToolsPlatformsStudyPage'],['src/app/App.tsx',route],['src/routes/routeRegistry.ts',route],['src/data/searchIndex.ts','toolsSearchEntries'],['src/data/searchIndex.ts',route],['src/data/studyModuleHub.ts',route],['src/styles/studyModuleHubOS.css','toolsPlatformsStudyOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.10 check passed.')
