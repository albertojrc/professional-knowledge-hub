import{existsSync,readFileSync}from'node:fs'
const files=['src/types/creditScoringExperiment.ts','src/data/creditScoringExperiment.ts','src/pages/CreditScoringExperimentBlueprintPage.tsx','src/styles/creditScoringExperimentOS.css','docs/SPRINT_5_10_CREDIT_SCORING_EXPERIMENT_BLUEPRINT.md']
const signals=[['src/app/App.tsx','CreditScoringExperimentBlueprintPage'],['src/app/App.tsx',"activeView === 'credit-scoring-experiment-blueprint'"],['src/components/layout/Sidebar.tsx','Credit Scoring Experiment Blueprint'],['src/components/layout/Sidebar.tsx','PKOS v5.10'],['src/styles/studyModuleHubOS.css','creditScoringExperimentOS.css'],['src/data/creditScoringExperiment.ts','Validation metrics and interpretation'],['src/data/creditScoringExperiment.ts','Monitoring and portfolio handoff'],['src/pages/CreditScoringExperimentBlueprintPage.tsx','Sprint 5.10'],['src/pages/CreditScoringExperimentBlueprintPage.tsx','Experiment Flow'],['src/data/professionalGraph.ts','path-credit-scoring-experiment']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.10 check passed.')
