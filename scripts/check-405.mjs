import{existsSync,readFileSync}from'node:fs'
const files=['src/types/capstoneProject.ts','src/data/capstoneProjects.ts','src/data/capstoneSearch.ts','src/pages/CapstoneProjectsPage.tsx','src/styles/capstoneProjectsOS.css','docs/SPRINT_4_5_CAPSTONE_PROJECTS.md']
const signals=[['src/types/knowledge.ts','capstone-projects'],['src/app/App.tsx','CapstoneProjectsPage'],['src/app/App.tsx',"activeView === 'capstone-projects'"],['src/components/layout/Sidebar.tsx','Capstone Projects'],['src/components/layout/Sidebar.tsx','PKOS v4.5'],['src/data/searchIndex.ts','capstoneSearchEntries'],['src/data/searchIndex.ts','Capstone Project'],['src/styles/studyModuleHubOS.css','capstoneProjectsOS.css'],['src/data/capstoneProjects.ts','Finance Valuation Capstone'],['src/data/capstoneProjects.ts','CFA / Bloomberg Capstone']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 4.5 check passed.')
