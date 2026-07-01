import{existsSync,readFileSync}from'node:fs'
const files=['src/types/abtFieldReview.ts','src/data/abtFieldReview.ts','src/pages/ABTFieldReviewMatrixPage.tsx','src/styles/abtFieldReviewMatrixOS.css','docs/SPRINT_5_8_ABT_FIELD_REVIEW_MATRIX.md']
const signals=[['src/app/App.tsx','ABTFieldReviewMatrixPage'],['src/app/App.tsx',"activeView === 'abt-field-review-matrix'"],['src/components/layout/Sidebar.tsx','ABT Field Review Matrix'],['src/components/layout/Sidebar.tsx','PKOS v5.8'],['src/styles/studyModuleHubOS.css','abtFieldReviewMatrixOS.css'],['src/data/abtFieldReview.ts','target_bad_flag'],['src/data/abtFieldReview.ts','field_source_ref'],['src/pages/ABTFieldReviewMatrixPage.tsx','Sprint 5.8'],['src/pages/ABTFieldReviewMatrixPage.tsx','Field Review Flow']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.8 check passed.')
