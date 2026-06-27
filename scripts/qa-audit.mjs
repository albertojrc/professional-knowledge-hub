import { existsSync, readFileSync } from 'node:fs'

const requiredFiles = [
  'src/app/App.tsx',
  'src/types/knowledge.ts',
  'src/types/materialInventory.ts',
  'src/types/courseAreaMapping.ts',
  'src/types/evidenceExpansion.ts',
  'src/data/materialInventory.ts',
  'src/data/courseAreaMapping.ts',
  'src/data/evidenceExpansion.ts',
  'src/data/knowledgeAssetRegistry.ts',
  'src/pages/DashboardPage.tsx',
  'src/pages/GlobalSearchPage.tsx',
  'src/pages/MaterialInventoryPage.tsx',
  'src/pages/CourseAreaMapPage.tsx',
  'src/pages/EvidenceExpansionPage.tsx',
  'src/pages/KnowledgeLibraryPage.tsx',
  'src/pages/StudyPathsPage.tsx',
  'src/pages/LearningSessionPage.tsx',
  'src/styles/materialInventoryOS.css',
  'src/styles/courseAreaMapOS.css',
  'src/styles/evidenceExpansionOS.css',
  'docs/SPRINT_1_FINAL_REVIEW.md',
  'docs/SPRINT_2_ROADMAP.md',
  'docs/SPRINT_2_1_SOURCE_INVENTORY.md',
  'docs/SPRINT_2_2_COURSE_AREA_MAPPING.md',
  'docs/SPRINT_2_3_EVIDENCE_EXPANSION.md'
]

const requiredViewIds = ['dashboard', 'global-search', 'material-inventory', 'course-area-map', 'evidence-expansion', 'knowledge-library', 'study-paths', 'learning-session', 'knowledge-factory', 'quality-review']
const requiredRoutes = ["activeView === 'material-inventory'", "activeView === 'course-area-map'", "activeView === 'evidence-expansion'", "activeView === 'knowledge-library'", "activeView === 'study-paths'", "activeView === 'learning-session'"]
const requiredStyleImports = ["./styles/materialInventoryOS.css", "./styles/courseAreaMapOS.css", "./styles/evidenceExpansionOS.css"]

function fail(message) {
  console.error(`QA FAIL: ${message}`)
  process.exitCode = 1
}

function assertFileExists(path) {
  if (!existsSync(path)) fail(`Missing required file: ${path}`)
}

function assertContains(path, text) {
  if (!existsSync(path)) return fail(`Cannot inspect missing file: ${path}`)
  const content = readFileSync(path, 'utf8')
  if (!content.includes(text)) fail(`${path} does not contain required text: ${text}`)
}

for (const file of requiredFiles) assertFileExists(file)
for (const viewId of requiredViewIds) assertContains('src/types/knowledge.ts', `'${viewId}'`)
for (const route of requiredRoutes) assertContains('src/app/App.tsx', route)
for (const styleImport of requiredStyleImports) assertContains('src/main.tsx', styleImport)

assertContains('src/data/searchIndex.ts', 'materialRecords')
assertContains('src/data/searchIndex.ts', 'courseAreaMapRecords')
assertContains('src/data/searchIndex.ts', 'topicClusters')
assertContains('src/data/searchIndex.ts', 'evidenceExpansionCandidates')
assertContains('src/pages/MaterialInventoryPage.tsx', 'mappingTemplateSteps')
assertContains('src/pages/CourseAreaMapPage.tsx', 'coverageMatrixRows')
assertContains('src/pages/EvidenceExpansionPage.tsx', 'evidenceExpansionSummary')
assertContains('src/pages/DashboardPage.tsx', 'evidence-expansion')
assertContains('docs/SPRINT_2_3_EVIDENCE_EXPANSION.md', 'Evidence-Based Asset Expansion')

if (!process.exitCode) {
  console.log('QA PASS: Sprint 2.3 evidence expansion audit completed successfully.')
}
