import{existsSync,readFileSync}from'node:fs'
const checks=[['src/types/knowledgeAsset.ts','VisualOutputType'],['src/types/knowledgeAsset.ts','visualOutputType?'],['src/components/knowledge/KnowledgeAssetVisualOutput.tsx','resolveVisualOutputType'],['src/components/knowledge/KnowledgeAssetVisualOutput.tsx','formula-card'],['src/components/knowledge/KnowledgeAssetVisualOutput.tsx','decision-table'],['src/components/knowledge/KnowledgeAssetVisualOutput.tsx','case-card'],['src/pages/KnowledgeAssetDetailPage.tsx','KnowledgeAssetVisualOutput'],['src/styles/assetVisualOutputOS.css','asset-visual'],['src/main.tsx','assetVisualOutputOS.css']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.29 visual output type check passed.')
