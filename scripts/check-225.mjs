import { existsSync, readFileSync } from 'node:fs'

const requiredFiles = [
  'src/types/phaseHandoff.ts',
  'src/data/phase2Handoff.ts',
  'src/pages/Phase2HandoffPage.tsx',
  'src/styles/phaseHandoffOS.css',
  'docs/SPRINT_2_25_PHASE_2_HANDOFF.md'
]

const requiredSignals = [
  ['src/types/knowledge.ts', 'phase-2-handoff'],
  ['src/app/App.tsx', 'Phase2HandoffPage'],
  ['src/app/App.tsx', "activeView === 'phase-2-handoff'"],
  ['src/components/layout/Sidebar.tsx', 'phase-2-handoff'],
  ['src/components/layout/Sidebar.tsx', 'PKOS v2.25'],
  ['src/data/sourceGovernanceSearch.ts', 'search-phase-2-handoff'],
  ['src/data/searchIndex.ts', "'phase-2-handoff'"],
  ['src/main.tsx', 'phaseHandoffOS.css']
]

let failed = false
for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`QA FAIL: missing ${file}`)
    failed = true
  }
}
for (const [file, signal] of requiredSignals) {
  if (!existsSync(file) || !readFileSync(file, 'utf8').includes(signal)) {
    console.error(`QA FAIL: ${file} missing ${signal}`)
    failed = true
  }
}
if (failed) process.exit(1)
console.log('QA PASS: Sprint 2.25 Phase 2 handoff checks passed.')
