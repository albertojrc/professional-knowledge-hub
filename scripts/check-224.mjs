import { existsSync, readFileSync } from 'node:fs'

const requiredFiles = [
  'src/types/routeQA.ts',
  'src/data/routeQA.ts',
  'src/pages/RouteQAPage.tsx',
  'src/styles/routeQAOS.css',
  'docs/SPRINT_2_24_BUILD_ROUTE_QA.md'
]

const requiredSignals = [
  ['src/types/knowledge.ts', 'route-qa'],
  ['src/app/App.tsx', 'RouteQAPage'],
  ['src/app/App.tsx', "activeView === 'route-qa'"],
  ['src/components/layout/Sidebar.tsx', 'route-qa'],
  ['src/components/layout/Sidebar.tsx', 'PKOS v2.24'],
  ['src/data/sourceGovernanceSearch.ts', 'search-route-qa'],
  ['src/data/searchIndex.ts', "'route-qa'"],
  ['src/main.tsx', 'routeQAOS.css']
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
console.log('QA PASS: Sprint 2.24 route and build hardening checks passed.')
