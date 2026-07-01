import{existsSync,readFileSync}from'node:fs'
const files=['src/types/modelCardMonitoring.ts','src/data/modelCardMonitoring.ts','src/pages/ModelCardMonitoringHandoffPage.tsx','src/styles/modelCardMonitoringOS.css','docs/SPRINT_5_11_MODEL_CARD_MONITORING_HANDOFF.md']
const signals=[['src/app/App.tsx','ModelCardMonitoringHandoffPage'],['src/app/App.tsx',"activeView === 'model-card-monitoring-handoff'"],['src/components/layout/Sidebar.tsx','Model Card & Monitoring Handoff'],['src/components/layout/Sidebar.tsx','PKOS v5.11'],['src/styles/studyModuleHubOS.css','modelCardMonitoringOS.css'],['src/data/modelCardMonitoring.ts','Stability, drift and portfolio monitoring'],['src/data/modelCardMonitoring.ts','Operational handoff and ownership'],['src/pages/ModelCardMonitoringHandoffPage.tsx','Sprint 5.11'],['src/pages/ModelCardMonitoringHandoffPage.tsx','Model Governance Flow'],['src/data/professionalGraph.ts','path-credit-model-governance-handoff'],['src/data/searchIndex.ts','model-card-monitoring-handoff']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.11 check passed.')
