import { existsSync, readFileSync } from 'node:fs'

const files = [
  'src/types/sourceReview.ts',
  'src/data/sourceReviewPrep.ts',
  'src/pages/SourceReviewPrepPage.tsx',
  'src/styles/sourcePrepOS.css',
  'docs/SPRINT_2_9_SOURCE_REVIEW_PREP.md'
]

const checks = [
  ['src/app/App.tsx', 'SourceReviewPrepPage'],
  ['src/app/App.tsx', 'source-review-prep'],
  ['src/data/searchIndex.ts', 'sourceReviewItems'],
  ['src/main.tsx', 'sourcePrepOS.css'],
  ['src/pages/SourceReviewPrepPage.tsx', 'sourceReviewSummary']
]

function fail(message) { console.error(`QA FAIL: ${message}`); process.exitCode = 1 }
function assertFile(path) { if (!existsSync(path)) fail(`Missing ${path}`) }
function assertText(path, text) { if (!existsSync(path)) return fail(`Missing ${path}`); if (!readFileSync(path, 'utf8').includes(text)) fail(`${path} missing ${text}`) }

for (const file of files) assertFile(file)
for (const [path, text] of checks) assertText(path, text)

if (!process.exitCode) console.log('QA PASS: Sprint 2.9 source prep audit completed successfully.')
