import { existsSync, readFileSync } from 'node:fs'

const requiredFiles = [
  'src/app/App.tsx',
  'src/types/knowledge.ts',
  'src/data/knowledgeAssetRegistry.ts',
  'src/data/knowledgeAssetsSprint14.ts',
  'src/data/knowledgeTooltipsSprint14.ts',
  'src/pages/DashboardPage.tsx',
  'src/pages/GlobalSearchPage.tsx',
  'src/pages/KnowledgeLibraryPage.tsx',
  'src/pages/KnowledgeAssetDetailPage.tsx',
  'src/pages/StudyPathsPage.tsx',
  'src/pages/LearningSessionPage.tsx',
  'src/pages/KnowledgeFactoryPage.tsx',
  'src/hooks/useAssetProgress.ts',
  'src/hooks/usePathPrefs.ts',
  'src/styles/progressOS.css',
  'src/styles/studyDashboardOS.css',
  'src/styles/studyPathsOS.css',
  'src/styles/learningSessionOS.css'
]

const requiredViewIds = [
  'dashboard',
  'global-search',
  'knowledge-library',
  'study-paths',
  'learning-session',
  'knowledge-factory',
  'data-science',
  'business-os',
  'banking-finance',
  'credit-risk',
  'professional-scenarios',
  'decision-playbooks',
  'ml-models',
  'ml-graph-atlas',
  'output-atlas',
  'formula-library',
  'model-library',
  'business-cases',
  'knowledge-map',
  'quality-review'
]

const requiredSprint14AssetIds = [
  'train-test-split',
  'cross-validation',
  'data-leakage',
  'precision-recall-curve',
  'lift-curve',
  'ks-statistic',
  'pd',
  'lgd',
  'ead',
  'business-model-canvas',
  'ab-testing',
  'mlops-monitoring'
]

const requiredAppRoutes = [
  "activeView === 'dashboard'",
  "activeView === 'global-search'",
  "activeView === 'knowledge-library'",
  "activeView === 'study-paths'",
  "activeView === 'learning-session'",
  "activeView === 'knowledge-factory'"
]

const requiredMainStyleImports = [
  "./styles/knowledgeOS.css",
  "./styles/searchOS.css",
  "./styles/deepLinkOS.css",
  "./styles/libraryFilterOS.css",
  "./styles/progressOS.css",
  "./styles/studyDashboardOS.css",
  "./styles/studyPathsOS.css",
  "./styles/pathActionsOS.css",
  "./styles/learningSessionOS.css"
]

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
for (const assetId of requiredSprint14AssetIds) assertContains('src/data/knowledgeAssetsSprint14.ts', `id: '${assetId}'`)
for (const route of requiredAppRoutes) assertContains('src/app/App.tsx', route)
for (const styleImport of requiredMainStyleImports) assertContains('src/main.tsx', styleImport)

assertContains('src/data/knowledgeAssetRegistry.ts', 'sprint14KnowledgeAssets')
assertContains('src/data/knowledgeTooltipRegistry.ts', 'sprint14KnowledgeTooltips')
assertContains('src/data/studyPaths.ts', 'mlops-monitoring')
assertContains('src/data/searchIndex.ts', 'knowledgeAssetRegistry')
assertContains('src/data/searchIndex.ts', 'studyPaths')
assertContains('src/pages/KnowledgeLibraryPage.tsx', 'assetProgress')
assertContains('src/pages/DashboardPage.tsx', 'CurrentPathPanel')
assertContains('src/pages/LearningSessionPage.tsx', 'sessionChecklist')

if (!process.exitCode) {
  console.log('QA PASS: Sprint 1 architecture and Sprint 1.14 content audit completed successfully.')
}
