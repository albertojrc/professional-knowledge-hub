import{existsSync,readFileSync}from'node:fs'
const checks=[['src/components/knowledge/KnowledgeAssetDecisionBrief.tsx','Decision brief'],['src/components/knowledge/KnowledgeAssetStudyGuide.tsx','Concrete study path'],['src/pages/KnowledgeAssetDetailPage.tsx','KnowledgeAssetDecisionBrief'],['src/pages/KnowledgeAssetDetailPage.tsx','KnowledgeAssetStudyGuide'],['src/pages/KnowledgeAssetDetailPage.tsx','Define'],['src/pages/KnowledgeAssetDetailPage.tsx','Decision'],['src/styles/deepDetailCleanupOS.css','decision-brief-grid'],['src/main.tsx','deepDetailCleanupOS.css']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.30 deep detail cleanup check passed.')
