import{existsSync,readFileSync}from'node:fs'
const files=['src/types/modelReadyFeatureSet.ts','src/data/modelReadyFeatureSet.ts','src/pages/ModelReadyFeatureSetPage.tsx','src/styles/modelReadyFeatureSetOS.css','docs/SPRINT_5_9_MODEL_READY_FEATURE_SET.md']
const signals=[['src/app/App.tsx','ModelReadyFeatureSetPage'],['src/app/App.tsx',"activeView === 'model-ready-feature-set'"],['src/components/layout/Sidebar.tsx','Model-Ready Feature Set'],['src/components/layout/Sidebar.tsx','PKOS v5.9'],['src/styles/studyModuleHubOS.css','modelReadyFeatureSetOS.css'],['src/data/modelReadyFeatureSet.ts','Borrower affordability features'],['src/data/modelReadyFeatureSet.ts','Blocked from modeling'],['src/pages/ModelReadyFeatureSetPage.tsx','Sprint 5.9'],['src/pages/ModelReadyFeatureSetPage.tsx','Feature Promotion Flow'],['src/data/professionalGraph.ts','path-credit-feature-readiness']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.9 check passed.')
