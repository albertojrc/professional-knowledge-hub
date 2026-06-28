import { existsSync, readFileSync } from 'node:fs'

const files = [
  'src/types/courseEvidence.ts',
  'src/data/courseEvidenceExtraction.ts',
  'src/pages/CourseEvidencePage.tsx',
  'src/styles/courseEvidenceOS.css',
  'docs/SPRINT_2_11_COURSE_EVIDENCE.md'
]

const checks = [
  ['src/types/knowledge.ts', 'course-evidence'],
  ['src/app/App.tsx', 'CourseEvidencePage'],
  ['src/app/App.tsx', 'course-evidence'],
  ['src/components/layout/Sidebar.tsx', 'course-evidence'],
  ['src/main.tsx', 'courseEvidenceOS.css'],
  ['src/data/courseEvidenceExtraction.ts', 'evidence-project-governance'],
  ['src/data/courseEvidenceExtraction.ts', 'evidence-index-shell'],
  ['src/data/courseEvidenceExtraction.ts', 'Course file missing'],
  ['src/pages/CourseEvidencePage.tsx', 'courseEvidenceSummary']
]

function fail(message) { console.error(`QA FAIL: ${message}`); process.exitCode = 1 }
function assertFile(path) { if (!existsSync(path)) fail(`Missing ${path}`) }
function assertText(path, text) { if (!existsSync(path)) return fail(`Missing ${path}`); if (!readFileSync(path, 'utf8').includes(text)) fail(`${path} missing ${text}`) }

for (const file of files) assertFile(file)
for (const [path, text] of checks) assertText(path, text)

if (!process.exitCode) console.log('QA PASS: Sprint 2.11 course evidence audit completed successfully.')
