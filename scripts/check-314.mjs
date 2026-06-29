import{existsSync,readFileSync}from'node:fs'
const files=['src/types/studyPath.ts','src/data/studyPaths.ts','src/pages/StudyPathsPage.tsx','src/styles/studyPathsOS.css','docs/SPRINT_3_14_STUDY_PATHS_2.md']
const signals=[['src/data/studyPaths.ts','Data Analyst Path'],['src/data/studyPaths.ts','Banking Risk Analyst Path'],['src/data/studyPaths.ts','Finance / Valuation Analyst Path'],['src/data/studyPaths.ts','Management & Strategy Path'],['src/data/studyPaths.ts','CFA Level I Path'],['src/data/studyPaths.ts','Bloomberg Market Workflow Path'],['src/pages/StudyPathsPage.tsx','Study Paths 2.0'],['src/pages/StudyPathsPage.tsx','Output Portfolio'],['src/pages/StudyPathsPage.tsx','Success Criteria'],['src/data/searchIndex.ts','outputPortfolio'],['src/components/layout/Sidebar.tsx','PKOS v3.14']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.14 check passed.')
