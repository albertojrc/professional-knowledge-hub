import{existsSync,readFileSync}from'node:fs'
const files=['src/types/lcFieldMap.ts','src/data/lcFieldMap.ts','src/pages/LCFieldMappingPage.tsx','src/styles/lcFieldMappingOS.css','docs/SPRINT_5_5_LC_FIELD_MAPPING.md']
const signals=[['src/app/App.tsx','LCFieldMappingPage'],['src/app/App.tsx',"activeView === 'lc-field-mapping'"],['src/components/layout/Sidebar.tsx','LC Field Mapping'],['src/components/layout/Sidebar.tsx','PKOS v5.5'],['src/styles/studyModuleHubOS.css','lcFieldMappingOS.css'],['src/data/lcFieldMap.ts','Borrower profile fields'],['src/data/lcFieldMap.ts','ABT control and split fields'],['src/pages/LCFieldMappingPage.tsx','Field candidates'],['src/pages/LCFieldMappingPage.tsx','Sprint 5.5']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.5 check passed.')
