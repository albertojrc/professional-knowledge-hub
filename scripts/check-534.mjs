import{existsSync,readFileSync}from'node:fs'
const checks=[['src/data/uxConsistencyAudit.ts','uxConsistencyRules'],['src/data/uxConsistencyAudit.ts','uxConsistencySummary'],['src/data/uxConsistencyAudit.ts','accessibility'],['src/styles/uxConsistencyOS.css',':focus-visible'],['src/styles/uxConsistencyOS.css','module-capsule-empty'],['src/styles/uxConsistencyOS.css','concept-two-pane'],['src/styles/uxConsistencyOS.css','@media(max-width:980px)'],['src/main.tsx','uxConsistencyOS.css']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.34 UX consistency audit check passed.')
