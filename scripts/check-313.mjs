import{existsSync,readFileSync}from'node:fs'
const files=['src/types/bloombergLearning.ts','src/data/bloombergLearning.ts','src/data/bloombergSearch.ts','docs/SPRINT_3_13_BLOOMBERG_WORKFLOWS.md']
const signals=[['src/pages/ProfessionalCertificationsPage.tsx','bloombergLessons'],['src/pages/ProfessionalCertificationsPage.tsx','BMC / BFF / Bloomberg Workflows Content Pack'],['src/data/searchIndex.ts','bloombergSearchEntries'],['src/data/bloombergLearning.ts','BMC Economic Indicators and Market Drivers'],['src/data/bloombergLearning.ts','Bloomberg-style Market Brief Workflow']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.13 check passed.')
