import{existsSync,readFileSync}from'node:fs'
const f=['src/types/academicReview.ts','src/data/academicReviewWorkspace.ts','src/pages/AcademicReviewWorkspacePage.tsx','src/styles/academicReviewOS.css','docs/SPRINT_3_1_ACADEMIC_REVIEW.md']
const s=[['src/types/knowledge.ts','academic-review-workspace'],['src/app/App.tsx','AcademicReviewWorkspacePage'],['src/components/layout/Sidebar.tsx','PKOS v3.1'],['src/data/sourceGovernanceSearch.ts','search-academic-review-workspace'],['src/data/searchIndex.ts','academic-review-workspace'],['src/main.tsx','academicReviewOS.css']]
let bad=0
for(const x of f){if(!existsSync(x)){console.error('missing '+x);bad=1}}
for(const [x,y]of s){if(!existsSync(x)||!readFileSync(x,'utf8').includes(y)){console.error(x+' missing '+y);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.1 check passed.')
