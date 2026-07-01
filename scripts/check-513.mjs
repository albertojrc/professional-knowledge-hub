import{existsSync,readFileSync}from'node:fs'
const files=['src/types/alertRemediationWorkflow.ts','src/data/alertRemediationWorkflow.ts','src/pages/AlertRemediationWorkflowPage.tsx','src/styles/alertRemediationWorkflowOS.css','docs/SPRINT_5_13_ALERT_REMEDIATION_WORKFLOW.md']
const signals=[['src/app/App.tsx','AlertRemediationWorkflowPage'],['src/app/App.tsx',"activeView === 'alert-remediation-workflow'"],['src/components/layout/Sidebar.tsx','Alert Playbook & Remediation Workflow'],['src/components/layout/Sidebar.tsx','PKOS v5.13'],['src/styles/studyModuleHubOS.css','alertRemediationWorkflowOS.css'],['src/data/alertRemediationWorkflow.ts','PSI and feature drift breach'],['src/data/alertRemediationWorkflow.ts','Alert ownership or SLA breach'],['src/pages/AlertRemediationWorkflowPage.tsx','Sprint 5.13'],['src/pages/AlertRemediationWorkflowPage.tsx','Remediation Flow'],['src/data/professionalGraph.ts','path-alert-remediation-workflow'],['src/data/searchIndex.ts','alert-remediation-workflow']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.13 check passed.')
