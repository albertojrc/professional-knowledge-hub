import{existsSync,readFileSync}from'node:fs'
const files=['src/data/outputAtlasPhase4.ts','docs/SPRINT_4_2_OUTPUT_ATLAS_EXPANSION.md']
const signals=[['src/pages/OutputAtlasPage.tsx','phase4OutputAtlas'],['src/pages/OutputAtlasPage.tsx','Sprint 4.2 · Atlas Index'],['src/data/searchIndex.ts','phase4OutputAtlas'],['src/data/outputAtlasPhase4.ts','Financial Ratio Table'],['src/data/outputAtlasPhase4.ts','Portfolio Risk-Return Chart'],['src/data/outputAtlasPhase4.ts','Model Validation Report'],['src/components/layout/Sidebar.tsx','PKOS v4.2']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 4.2 check passed.')
