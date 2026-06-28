import{existsSync,readFileSync}from'node:fs'
const files=['src/types/cfaInvestments.ts','src/data/cfaInvestments.ts','src/data/cfaInvestmentSearch.ts','docs/SPRINT_3_12_CFA_INVESTMENTS.md']
const signals=[['src/pages/ProfessionalCertificationsPage.tsx','cfaInvestmentLessons'],['src/pages/ProfessionalCertificationsPage.tsx','CFA Investments & Portfolio Content Pack'],['src/data/searchIndex.ts','cfaInvestmentSearchEntries'],['src/data/cfaInvestments.ts','Equity Investments and Company Valuation'],['src/data/cfaInvestments.ts','Portfolio Management and Diversification Foundations']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.12 check passed.')
