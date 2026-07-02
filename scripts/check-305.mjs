import{existsSync,readFileSync}from'node:fs'
const route='banking-'+'credit-'+'risk-'+'study'
const files=['src/types/bankingCreditRiskStudy.ts','src/data/bankingCreditRiskStudy.ts','src/pages/BankingCreditRiskStudyPage.tsx','src/data/bankingCreditRiskSearch.ts','src/styles/bankingCreditRiskStudyOS.css','docs/SPRINT_3_5_BANKING_CREDIT_RISK_STUDY.md']
const signals=[['src/app/App.tsx','BankingCreditRiskStudyPage'],['src/app/App.tsx',route],['src/routes/routeRegistry.ts',route],['src/components/layout/Sidebar.tsx','Banking & Finance'],['src/data/searchIndex.ts','Study Lesson'],['src/data/searchIndex.ts',route],['src/data/studyModuleHub.ts',route],['src/main.tsx','bankingCreditRiskStudyOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.5 check passed.')
