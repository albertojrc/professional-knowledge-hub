import{existsSync,readFileSync}from'node:fs'
const positiveChecks=[['scripts/qa-sprint-2-10.mjs','No course evidence'],['scripts/check-525.mjs','KnowledgeAssetVisualOutput'],['scripts/check-516.mjs','getCurriculumOpenLabel'],['scripts/check-529.mjs','visualOutputTypeResolver'],['scripts/check-532.mjs','Curriculum-aware search'],['scripts/check-ux-reorg.mjs','getCurriculumOpenLabel'],['src/data/visualOutputTypeResolver.ts','resolveVisualOutputType'],['src/components/knowledge/KnowledgeAssetVisualOutput.tsx','resolveVisualOutputType'],['src/routes/routeRegistry.ts','navCatalog']]
const negativeChecks=[['scripts/qa-sprint-2-10.mjs','src/components/layout/Sidebar.tsx'],['scripts/check-525.mjs','GraphFallback'],['scripts/check-516.mjs','Open exact view'],['scripts/check-ux-reorg.mjs','Open exact view'],['src/components/knowledge/KnowledgeAssetVisualOutput.tsx','export function resolveVisualOutputType'],['src/routes/routeRegistry.ts','_group']]
let bad=0
for(const [f,s]of positiveChecks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
for(const [f,s]of negativeChecks){if(existsSync(f)&&readFileSync(f,'utf8').includes(s)){console.error(f+' still contains stale '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.36 validation fix pass check passed.')
