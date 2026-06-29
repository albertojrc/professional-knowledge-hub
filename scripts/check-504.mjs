import{existsSync,readFileSync}from'node:fs'
const files=['src/types/bankingSafeUpdate.ts','src/data/bankingSafeUpdates.ts','docs/SPRINT_5_4_SAFE_BANKING_STUDY_UPDATES.md']
const signals=[['src/pages/BankingCreditRiskStudyPage.tsx','bankingSafeUpdates'],['src/pages/BankingCreditRiskStudyPage.tsx','Safe Updates Applied'],['src/pages/BankingCreditRiskStudyPage.tsx','No source-backed label yet'],['src/styles/bankingCreditRiskStudyOS.css','safe-update-card'],['src/styles/bankingCreditRiskStudyOS.css','status-pending-refs'],['src/components/layout/Sidebar.tsx','PKOS v5.4'],['src/data/bankingSafeUpdates.ts','Credit workflow block'],['src/data/bankingSafeUpdates.ts','Validation placeholder']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.4 check passed.')
