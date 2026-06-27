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
  'src/data/sourceAwareAssets.ts',
  'src/data/knowledgeAssetsSprint24.ts',
  'src/data/knowledgeAssetRegistry.ts',
  'src/pages/DashboardPage.tsx',
  'src/pages/GlobalSearchPage.tsx',
  'src/pages/MaterialInventoryPage.tsx',
  'src/pages/CourseAreaMapPage.tsx',
  'src/pages/EvidenceExpansionPage.tsx',
  'src/pages/KnowledgeAssetDetailPage.tsx',
  'src/pages/KnowledgeLibraryPage.tsx',
  'src/pages/StudyPathsPage.tsx',
  'src/pages/LearningSessionPage.tsx',
  'src/styles/materialInventoryOS.css',
  'src/styles/courseAreaMapOS.css',
  'src/styles/evidenceExpansionOS.css',
  'src/styles/sourceAwareOS.css',
  'docs/SPRINT_1_FINAL_REVIEW.md',
  'docs/SPRINT_2_ROADMAP.md',
  'docs/SPRINT_2_1_SOURCE_INVENTORY.md',
  'docs/SPRINT_2_2_COURSE_AREA_MAPPING.md',
  'docs/SPRINT_2_3_EVIDENCE_EXPANSION.md',
  'docs/SPRINT_2_4_SOURCE_AWARE_ASSETS.md'
]

const requiredViewIds = ['dashboard', 'global-search', 'material-inventory', 'course-area-map', 'evidence-expansion', 'knowledge-library', 'study-paths', 'learning-session', 'knowledge-factory', 'quality-review']
const requiredRoutes = ["activeView === 'material-inventory'", "activeView === 'course-area-map'", "activeView === 'evidence-expansion'", "activeView === 'knowledge-library'", "activeView === 'study-paths'", "activeView === 'learning-session'"]
const requiredStyleImports = ["./styles/materialInventoryOS.css", "./styles/courseAreaMapOS.css", "./styles/evidenceExpansionOS.css", "./styles/sourceAwareOS.css"]
const sprint24Assets = ['data-quality-report', 'analytical-base-table', 'sql-joins', 'financial-ratios', 'cash-flow-analysis']

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
for (const assetId of sprint24Assets) assertContains('src/data/knowledgeAssetsSprint24.ts', `id: '${assetId}'`)

assertContains('src/data/knowledgeAssetRegistry.ts', 'sprint24KnowledgeAssets')
assertContains('src/pages/KnowledgeAssetDetailPage.tsx', 'getSourceAwareAssetMeta')
assertContains('src/pages/KnowledgeAssetDetailPage.tsx', 'Evidence status')
assertContains('src/data/studyPaths.ts', 'data-quality-report')
assertContains('src/data/studyPaths.ts', 'financial-ratios')
assertContains('src/data/searchIndex.ts', 'evidenceExpansionCandidates')
assertContains('docs/SPRINT_2_4_SOURCE_AWARE_ASSETS.md', 'Source-Aware Knowledge Asset Creation')

if (!process.exitCode) {
  console.log('QA PASS: Sprint 2.4 source-aware asset audit completed successfully.')
}
