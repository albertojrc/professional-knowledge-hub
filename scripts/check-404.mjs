import{existsSync,readFileSync}from'node:fs'
const files=['src/data/modelsPhase4.ts','docs/SPRINT_4_4_MODEL_LIBRARY_EXPANSION.md']
const signals=[['src/pages/ReferencePage.tsx','phase4Models'],['src/pages/ReferencePage.tsx','Sprint 4.4 · Model Library'],['src/data/searchIndex.ts','phase4Models'],['src/data/modelsPhase4.ts','Linear Regression'],['src/data/modelsPhase4.ts','Model Selection Guide'],['src/data/modelsPhase4.ts','Graph Analytics Models'],['src/components/layout/Sidebar.tsx','PKOS v4.4']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 4.4 check passed.')
