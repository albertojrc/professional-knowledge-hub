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
  'src/data/referenceExpansionSprint25.ts',
  'src/data/businessCasesSprint26.ts',
  'src/data/knowledgeAssetRegistry.ts',
  'src/pages/BusinessCasesPage.tsx',
  'src/pages/OutputAtlasPage.tsx',
  'src/pages/ReferencePage.tsx',
  'src/pages/KnowledgeAssetDetailPage.tsx',
  'src/pages/KnowledgeLibraryPage.tsx',
  'src/pages/StudyPathsPage.tsx',
  'src/pages/LearningSessionPage.tsx',
  'src/styles/sourceAwareOS.css',
  'docs/SPRINT_2_4_SOURCE_AWARE_ASSETS.md',
  'docs/SPRINT_2_5_REFERENCE_EXPANSION.md',
  'docs/SPRINT_2_6_BUSINESS_CASE_CONSOLIDATION.md'
]

const requiredViewIds = ['dashboard', 'global-search', 'material-inventory', 'course-area-map', 'evidence-expansion', 'knowledge-library', 'study-paths', 'learning-session', 'knowledge-factory', 'quality-review']
const requiredRoutes = ["activeView === 'material-inventory'", "activeView === 'course-area-map'", "activeView === 'evidence-expansion'", "activeView === 'knowledge-library'", "activeView === 'study-paths'", "activeView === 'learning-session'", "activeView === 'business-cases'"]
const sprint24Assets = ['data-quality-report', 'analytical-base-table', 'sql-joins', 'financial-ratios', 'cash-flow-analysis']
const sprint25Outputs = ['data-quality-report-output', 'sql-join-reconciliation-output', 'financial-ratio-table-output', 'cash-flow-bridge-output']
const sprint25Formulas = ['missing-rate', 'join-match-rate', 'current-ratio', 'free-cash-flow']
const sprint26Cases = ['credit-risk-data-quality-review', 'credit-scoring-abt', 'sql-customer-360-case', 'sme-financial-ratio-review', 'cash-flow-credit-approval']

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
for (const assetId of sprint24Assets) assertContains('src/data/knowledgeAssetsSprint24.ts', `id: '${assetId}'`)
for (const outputId of sprint25Outputs) assertContains('src/data/referenceExpansionSprint25.ts', `id: '${outputId}'`)
for (const formulaId of sprint25Formulas) assertContains('src/data/referenceExpansionSprint25.ts', `id: '${formulaId}'`)
for (const caseId of sprint26Cases) assertContains('src/data/businessCasesSprint26.ts', `id: '${caseId}'`)

assertContains('src/pages/BusinessCasesPage.tsx', 'sprint26BusinessCases')
assertContains('src/data/searchIndex.ts', 'sprint26BusinessCases')
assertContains('src/data/searchIndex.ts', 'allBusinessCases')
assertContains('src/pages/KnowledgeAssetDetailPage.tsx', 'getSourceAwareAssetMeta')
assertContains('src/pages/OutputAtlasPage.tsx', 'sprint25Outputs')
assertContains('src/pages/ReferencePage.tsx', 'sprint25Formulas')
assertContains('docs/SPRINT_2_6_BUSINESS_CASE_CONSOLIDATION.md', 'Source-Aware Business Case Consolidation')

if (!process.exitCode) {
  console.log('QA PASS: Sprint 2.6 business case consolidation audit completed successfully.')
}
