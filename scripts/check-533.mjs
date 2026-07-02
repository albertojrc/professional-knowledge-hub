import{existsSync,readFileSync}from'node:fs'
const checks=[['src/data/curriculumKnowledgeMap.ts','curriculumKnowledgeMap'],['src/data/curriculumKnowledgeMap.ts','curriculumMapSummary'],['src/components/knowledge/CurriculumKnowledgeMapPanel.tsx','Module → Submodule → Topic → Output'],['src/components/knowledge/CurriculumKnowledgeMapPanel.tsx','Example topic chain'],['src/components/knowledge/VisualKnowledgeMapStudio.tsx','CurriculumKnowledgeMapPanel'],['src/components/knowledge/VisualKnowledgeMapStudio.tsx','Module\', \'Submodule\', \'Topic\', \'Output\', \'Decision'],['src/styles/curriculumKnowledgeMapOS.css','curriculum-map-panel'],['src/main.tsx','curriculumKnowledgeMapOS.css']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.33 knowledge map curriculum sync check passed.')
