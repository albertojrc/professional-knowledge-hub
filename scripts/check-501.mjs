import{existsSync,readFileSync}from'node:fs'
const files=['src/types/academicNote.ts','src/data/academicNotes.ts','src/pages/AcademicNotesPage.tsx','src/styles/academicNotesOS.css','docs/SPRINT_5_1_EVIDENCE_EXTRACTION_NOTES.md']
const signals=[['src/types/knowledge.ts','academic-notes'],['src/app/App.tsx','AcademicNotesPage'],['src/app/App.tsx',"activeView === 'academic-notes'"],['src/components/layout/Sidebar.tsx','Academic Notes'],['src/components/layout/Sidebar.tsx','PKOS v5.1'],['src/styles/studyModuleHubOS.css','academicNotesOS.css'],['src/data/academicNotes.ts','RetailCreditScoring extraction note'],['src/data/academicNotes.ts','LCDataDictionary extraction note'],['src/data/sourceGovernanceSearch.ts','academicNoteEntries'],['src/data/sourceGovernanceSearch.ts','Academic Notes']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.1 check passed.')
