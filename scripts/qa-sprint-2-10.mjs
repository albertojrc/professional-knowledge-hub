import { existsSync, readFileSync } from 'node:fs'

const files = [
  'src/types/sourceExecution.ts',
  'src/data/sourceReviewExecution.ts',
  'src/pages/SourceReviewExecutionPage.tsx',
  'src/styles/sourceExecutionOS.css',
  'docs/SPRINT_2_10_SOURCE_EXECUTION.md'
]

const checks = [
  ['src/app/App.tsx', 'SourceReviewExecutionPage'],
  ['src/app/App.tsx', 'source-review-execution'],
  ['src/data/searchIndex.ts', 'sourceExecutionRecords'],
  ['src/data/searchIndex.ts', 'Source Execution'],
  ['src/main.tsx', 'sourceExecutionOS.css'],
  ['src/data/sourceReviewExecution.ts', 'execution-index-html'],
  ['src/data/sourceReviewExecution.ts', 'execution-project-brief'],
  ['src/data/sourceReviewExecution.ts', 'No course evidence'],
  ['src/pages/SourceReviewExecutionPage.tsx', 'sourceExecutionSummary']
]

function fail(message) { console.error(`QA FAIL: ${message}`); process.exitCode = 1 }
function assertFile(path) { if (!existsSync(path)) fail(`Missing ${path}`) }
function assertText(path, text) { if (!existsSync(path)) return fail(`Missing ${path}`); if (!readFileSync(path, 'utf8').includes(text)) fail(`${path} missing ${text}`) }

for (const file of files) assertFile(file)
for (const [path, text] of checks) assertText(path, text)

if (!process.exitCode) console.log('QA PASS: Sprint 2.10 source execution audit completed successfully.')
