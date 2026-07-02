import{existsSync,readFileSync}from'node:fs'
const checks=[['src/data/curriculumSearchBridge.ts','getCurriculumMatchForAsset'],['src/data/curriculumSearchBridge.ts','getCurriculumMatchForSearchItem'],['src/data/curriculumSearchBridge.ts','getCurriculumOpenLabel'],['src/data/curriculumSearchBridge.ts','moduleView'],['src/components/search/VisualSearchStudio.tsx','curriculum-aware search'],['src/components/search/VisualSearchStudio.tsx','Curriculum Context'],['src/components/search/VisualSearchStudio.tsx','getCurriculumOpenLabel'],['src/components/search/ModuleSearchCapsules.tsx','Browse curriculum-aware capsules'],['src/components/search/ModuleSearchCapsules.tsx','Curriculum context'],['src/components/search/ModuleSearchCapsules.tsx','getCurriculumOpenLabel']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.32 search-to-curriculum alignment check passed.')
