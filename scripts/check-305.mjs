import{existsSync,readFileSync}from'node:fs'
const files=['src/types/bankingCreditRiskStudy.ts','src/data/bankingCreditRiskStudy.ts','src/pages/BankingCreditRiskStudyPage.tsx','src/data/bankingCreditRiskSearch.ts','src/styles/bankingCreditRiskStudyOS.css','docs/SPRINT_3_5_BANKING_CREDIT_RISK_STUDY.md']
const signals=[['src/types/knowledge.ts','banking-credit-risk-study'],['src/app/App.tsx','BankingCreditRiskStudyPage'],['src/app/App.tsx',"activeView === 'banking-credit-risk-study'"],['src/components/layout/Sidebar.tsx','Banking & Credit Risk Study'],['src/components/layout/Sidebar.tsx','PKOS v3.5'],['src/data/searchIndex.ts','Study Lesson'],['src/data/searchIndex.ts','banking-credit-risk-study'],['src/data/studyModuleHub.ts','banking-credit-risk-study'],['src/main.tsx','bankingCreditRiskStudyOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.5 check passed.')
