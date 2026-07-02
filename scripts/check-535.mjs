import{existsSync,readFileSync}from'node:fs'
const checks=[['docs/DEPLOY_READINESS_CHECKLIST.md','check-535.mjs'],['docs/DEPLOY_READINESS_CHECKLIST.md','Curriculum smoke test'],['docs/DEPLOY_READINESS_CHECKLIST.md','Search smoke test'],['docs/DEPLOY_READINESS_CHECKLIST.md','Knowledge Map smoke test'],['docs/DEPLOY_READINESS_CHECKLIST.md','UX smoke test'],['src/data/finalProductReadiness.ts','finalProductReadiness'],['src/data/finalProductReadiness.ts','ready-for-local-validation'],['src/data/finalProductReadiness.ts','needs-local-review'],['src/data/finalProductReadiness.ts','Module → Submodule → Topic → Deep Detail View']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.35 final product polish and deploy prep check passed.')
