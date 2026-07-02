import{existsSync,readFileSync}from'node:fs'
const files=['src/types/cfaFoundations.ts','src/data/cfaFoundations.ts','src/data/cfaFoundationsSearch.ts','src/data/moduleCurriculum.ts','src/pages/ProfessionalCertificationsPage.tsx','docs/SPRINT_3_11_CFA_FOUNDATIONS.md']
const signals=[['src/pages/ProfessionalCertificationsPage.tsx','ModuleCurriculumStudio'],['src/pages/ProfessionalCertificationsPage.tsx','cfaCurriculum'],['src/data/moduleCurriculum.ts','cfaCurriculum'],['src/data/moduleCurriculum.ts','CFA Level I Foundations'],['src/data/searchIndex.ts','cfaFoundationsSearchEntries'],['src/data/searchIndex.ts','Certification Lesson'],['src/data/cfaFoundations.ts','Ethical and Professional Standards'],['src/data/cfaFoundations.ts','Financial Statement Analysis Foundations']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.11 check passed.')
