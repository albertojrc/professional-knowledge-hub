import{existsSync,readFileSync}from'node:fs'
const checks=[['src/components/governance/ControlledExperimentVisual.tsx','ControlledExperimentVisual'],['src/data/visualGovernanceCompletion.ts','complete']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s))bad=1}
if(bad)process.exit(1)
console.log('Sprint 5.22 check passed.')
