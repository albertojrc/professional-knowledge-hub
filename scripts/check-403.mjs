import{existsSync,readFileSync}from'node:fs'
const files=['src/data/businessCasesPhase4.ts','docs/SPRINT_4_3_BUSINESS_CASE_EXPANSION.md']
const signals=[['src/pages/BusinessCasesPage.tsx','phase4BusinessCases'],['src/pages/BusinessCasesPage.tsx','Sprint 4.3 · Business Case Library'],['src/data/searchIndex.ts','phase4BusinessCases'],['src/data/businessCasesPhase4.ts','DCF Valuation Case'],['src/data/businessCasesPhase4.ts','Strategy Execution Case'],['src/data/businessCasesPhase4.ts','Data Quality Remediation Case'],['src/components/layout/Sidebar.tsx','PKOS v4.3']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 4.3 check passed.')
