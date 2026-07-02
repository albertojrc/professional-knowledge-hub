import{existsSync,readFileSync}from'node:fs'
const route='professional-'+'certifications'
const files=['src/types/professionalCertification.ts','src/data/professionalCertifications.ts','src/pages/ProfessionalCertificationsPage.tsx','src/data/certificationSearch.ts','src/styles/professionalCertificationsOS.css','docs/SPRINT_3_4_PROFESSIONAL_CERTIFICATIONS.md']
const signals=[['src/app/App.tsx','ProfessionalCertificationsPage'],['src/app/App.tsx',route],['src/routes/routeRegistry.ts',route],['src/components/layout/Sidebar.tsx','CFA & Certifications'],['src/data/searchIndex.ts','Certification Track'],['src/data/searchIndex.ts',route],['src/main.tsx','professionalCertificationsOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.4 check passed.')
