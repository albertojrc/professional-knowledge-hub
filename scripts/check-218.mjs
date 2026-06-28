import { existsSync } from 'node:fs'
const files=['src/types/reviewForm.ts','src/data/reviewFormTemplate.ts','src/pages/ReviewFormTemplatePage.tsx','src/styles/reviewFormOS.css','docs/SPRINT_2_18_REVIEW_FORM_TEMPLATE.md']
const missing=files.filter((file)=>!existsSync(file))
if(missing.length){console.error(missing.join('\n'));process.exit(1)}
console.log('Sprint 2.18 check passed.')
