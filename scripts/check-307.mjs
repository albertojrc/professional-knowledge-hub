import{existsSync,readFileSync}from'node:fs'
const files=['src/types/financeValuationStudy.ts','src/data/financeValuationStudy.ts','src/pages/FinanceValuationStudyPage.tsx','src/data/financeValuationSearch.ts','src/styles/financeValuationStudyOS.css','docs/SPRINT_3_7_FINANCE_VALUATION_STUDY.md']
const signals=[['src/types/knowledge.ts','finance-valuation-study'],['src/app/App.tsx','FinanceValuationStudyPage'],['src/app/App.tsx',"activeView === 'finance-valuation-study'"],['src/components/layout/Sidebar.tsx','Finance & Valuation Study'],['src/components/layout/Sidebar.tsx','PKOS v3.7'],['src/data/searchIndex.ts','financeValuationSearchEntries'],['src/data/searchIndex.ts','finance-valuation-study'],['src/data/studyModuleHub.ts','finance-valuation-study'],['src/main.tsx','financeValuationStudyOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.7 check passed.')
