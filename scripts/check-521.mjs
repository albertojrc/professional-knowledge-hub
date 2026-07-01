import{existsSync,readFileSync}from'node:fs'
const checks=[['src/components/governance/ABTGovernanceVisual.tsx','ABTGovernanceVisual'],['src/pages/ABTBlueprintPage.tsx','ABTGovernanceVisual'],['src/components/governance/ModelHandoffVisual.tsx','ModelHandoffVisual'],['src/pages/ModelCardMonitoringHandoffPage.tsx','ModelHandoffVisual'],['src/components/governance/ActionWorkflowVisual.tsx','ActionWorkflowVisual'],['src/pages/AlertRemediationWorkflowPage.tsx','ActionWorkflowVisual'],['src/data/visualSystemRegistry.ts','ActionWorkflowVisual'],['src/data/visualSystemRegistry.ts','status: \'blocked\''],['docs/SPRINT_5_21_REMAINING_GOVERNANCE_CONVERSION_RETRY.md','Remaining Governance Conversion Retry']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.21 check passed.')
