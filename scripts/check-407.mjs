import{existsSync,readFileSync}from'node:fs'
const files=['src/types/interviewPrep.ts','src/data/interviewPrep.ts','src/data/interviewSearch.ts','src/pages/InterviewPrepPage.tsx','src/styles/interviewPrepOS.css','docs/SPRINT_4_7_INTERVIEW_PREP_ENGINE.md']
const signals=[['src/types/knowledge.ts','interview-prep'],['src/app/App.tsx','InterviewPrepPage'],['src/app/App.tsx',"activeView === 'interview-prep'"],['src/components/layout/Sidebar.tsx','Interview Prep'],['src/components/layout/Sidebar.tsx','PKOS v4.7'],['src/data/searchIndex.ts','interviewSearchEntries'],['src/data/searchIndex.ts','Interview Prompt'],['src/styles/studyModuleHubOS.css','interviewPrepOS.css'],['src/data/interviewPrep.ts','STAR Answer'],['src/data/interviewPrep.ts','Project Defense']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 4.7 check passed.')
