import{existsSync,readFileSync}from'node:fs'
const checks=[['src/components/learning/VisualModuleStudio.tsx','VisualModuleStudio'],['src/components/search/VisualSearchStudio.tsx','VisualSearchStudio'],['src/components/knowledge/VisualKnowledgeMapStudio.tsx','VisualKnowledgeMapStudio'],['src/components/reference/VisualReferenceStudio.tsx','VisualReferenceStudio'],['src/components/governance/VisualGovernanceStudio.tsx','VisualGovernanceStudio'],['src/data/visualSystemRegistry.ts','visualSystemRegistry'],['src/data/visualGovernanceCompletion.ts','complete'],['docs/DEPLOY_READINESS_CHECKLIST.md','Deploy Readiness Checklist']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.23 deploy readiness check passed.')
