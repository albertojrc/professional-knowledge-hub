import{existsSync,readFileSync}from'node:fs'
const checks=[['docs/SPRINT_5_24_LOCAL_BUILD_FIX_TRIAGE.md','Local Build Fix Triage'],['src/data/studyDashboard.ts','areaBreakdown'],['src/components/study/CurrentPathPanel.tsx','CurrentPathPanel'],['src/pages/ReferencePage.tsx','VisualReferenceStudio'],['src/pages/ABTBlueprintPage.tsx','ABTGovernanceVisual'],['src/pages/CreditScoringExperimentBlueprintPage.tsx','ControlledExperimentVisual'],['src/pages/ModelCardMonitoringHandoffPage.tsx','ModelHandoffVisual'],['src/pages/AlertRemediationWorkflowPage.tsx','ActionWorkflowVisual'],['tsconfig.app.json','noUnusedLocals']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.24 build triage check passed.')
