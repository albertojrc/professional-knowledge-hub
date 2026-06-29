import{existsSync,readFileSync}from'node:fs'
const files=['src/data/formulasPhase4.ts','docs/SPRINT_4_1_FORMULA_LIBRARY_EXPANSION.md']
const signals=[['src/pages/ReferencePage.tsx','phase4Formulas'],['src/pages/ReferencePage.tsx','Sprint 4.1 · Formula Library'],['src/data/searchIndex.ts','phase4Formulas'],['src/data/formulasPhase4.ts','Sharpe Ratio'],['src/data/formulasPhase4.ts','Modified Duration'],['src/data/formulasPhase4.ts','Debt Service Coverage Ratio'],['src/components/layout/Sidebar.tsx','PKOS v4.1']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 4.1 check passed.')
