import{existsSync,readFileSync}from'node:fs'
const checks=[['src/data/visualSystemRegistry.ts','visualSystemRegistry'],['src/data/visualSystemRegistry.ts','Home Visual Dashboard'],['src/data/visualSystemRegistry.ts','Portfolio Monitoring Governance Studio'],['src/components/governance/VisualGovernanceStudio.tsx','Governance Capsules'],['src/pages/ModelReadyFeatureSetPage.tsx','VisualGovernanceStudio'],['src/pages/PortfolioMonitoringDashboardBlueprintPage.tsx','PortfolioMonitoringVisual'],['docs/SPRINT_5_20_ROUTE_QA_STABILIZATION.md','Visual System Registry']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.20 check passed.')
