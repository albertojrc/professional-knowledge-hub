import{existsSync,readFileSync}from'node:fs'
const files=['src/types/roleReadiness.ts','src/data/roleReadiness.ts','src/data/roleReadinessSearch.ts','src/pages/RoleReadinessPage.tsx','src/styles/roleReadinessOS.css','docs/SPRINT_4_8_ROLE_READINESS.md']
const signals=[['src/types/knowledge.ts','role-readiness'],['src/app/App.tsx','RoleReadinessPage'],['src/app/App.tsx',"activeView === 'role-readiness'"],['src/components/layout/Sidebar.tsx','Role Readiness'],['src/components/layout/Sidebar.tsx','PKOS v4.8'],['src/data/searchIndex.ts','roleReadinessSearchEntries'],['src/data/searchIndex.ts','Career Role'],['src/styles/studyModuleHubOS.css','roleReadinessOS.css'],['src/data/roleReadiness.ts','Finance Analyst'],['src/data/roleReadiness.ts','Data Analyst']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 4.8 check passed.')
