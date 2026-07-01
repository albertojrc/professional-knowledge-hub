import{existsSync,readFileSync}from'node:fs'
const checks=[['src/pages/KnowledgeMapPage.tsx','VisualKnowledgeMapStudio'],['src/components/knowledge/VisualKnowledgeMapStudio.tsx','visual-map-page'],['src/components/knowledge/VisualKnowledgeMapStudio.tsx','professionalGraphNodes'],['src/components/knowledge/VisualKnowledgeMapStudio.tsx','Selected Node'],['src/components/knowledge/VisualKnowledgeMapStudio.tsx','Professional Pathway'],['src/styles/professionalGraphOS.css','visual-map-canvas'],['src/styles/professionalGraphOS.css','visual-graph-link-card']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.17 check passed.')
