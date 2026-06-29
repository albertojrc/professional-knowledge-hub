import{existsSync,readFileSync}from'node:fs'
const files=['src/types/creditReview.ts','src/data/creditReview.ts','src/pages/CreditScoringReviewPage.tsx','src/styles/creditScoringReviewOS.css','docs/SPRINT_5_2_CREDIT_SCORING_REVIEW.md']
const signals=[['src/types/knowledge.ts','credit-scoring-review'],['src/app/App.tsx','CreditScoringReviewPage'],['src/app/App.tsx',"activeView === 'credit-scoring-review'"],['src/components/layout/Sidebar.tsx','Credit Scoring Review'],['src/components/layout/Sidebar.tsx','PKOS v5.2'],['src/styles/studyModuleHubOS.css','creditScoringReviewOS.css'],['src/data/creditReview.ts','RetailCreditScoring.pdf'],['src/data/creditReview.ts','Target definition and observation window'],['src/pages/AcademicNotesPage.tsx','firstPassCount'],['src/types/academicNote.ts','AcademicNoteStatus = string']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.2 check passed.')
