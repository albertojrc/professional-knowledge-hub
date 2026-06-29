import{existsSync,readFileSync}from'node:fs'
const files=['src/types/academicUpgrade.ts','src/data/academicUpgradePass.ts','src/data/academicUpgradeSearch.ts','src/pages/AcademicUpgradePassPage.tsx','src/styles/academicUpgradePassOS.css','docs/SPRINT_5_0_ACADEMIC_SOURCE_UPGRADE_PASS.md']
const signals=[['src/types/knowledge.ts','academic-upgrade-pass'],['src/app/App.tsx','AcademicUpgradePassPage'],['src/app/App.tsx',"activeView === 'academic-upgrade-pass'"],['src/components/layout/Sidebar.tsx','Academic Upgrade Pass'],['src/components/layout/Sidebar.tsx','PKOS v5.0'],['src/styles/studyModuleHubOS.css','academicUpgradePassOS.css'],['src/data/academicUpgradePass.ts','RetailCreditScoring.pdf'],['src/data/academicUpgradePass.ts','LCDataDictionary.xlsx'],['src/data/sourceGovernanceSearch.ts','academicUpgradeEntries'],['src/data/sourceGovernanceSearch.ts','Academic Upgrade Pass']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.0 check passed.')
