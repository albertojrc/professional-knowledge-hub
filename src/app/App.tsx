import { useMemo, useState } from 'react'
import type { NavItem, ViewId } from '../types/knowledge'
import { navItems } from '../data/knowledge'
import { useAssetProgress } from '../hooks/useAssetProgress'
import { usePathPrefs } from '../hooks/usePathPrefs'
import { Sidebar } from '../components/layout/Sidebar'
import { TopBar } from '../components/layout/TopBar'
import { DashboardPage } from '../pages/DashboardPage'
import { GlobalSearchPage } from '../pages/GlobalSearchPage'
import { MaterialInventoryPage } from '../pages/MaterialInventoryPage'
import { CourseAreaMapPage } from '../pages/CourseAreaMapPage'
import { EvidenceExpansionPage } from '../pages/EvidenceExpansionPage'
import { SourceCoverageQAPage } from '../pages/SourceCoverageQAPage'
import { KnowledgeLibraryPage } from '../pages/KnowledgeLibraryPage'
import { KnowledgeAssetDetailPage } from '../pages/KnowledgeAssetDetailPage'
import { StudyPathsPage } from '../pages/StudyPathsPage'
import { LearningSessionPage } from '../pages/LearningSessionPage'
import { KnowledgeFactoryPage } from '../pages/KnowledgeFactoryPage'
import { CoreAreaPage } from '../pages/CoreAreaPage'
import { DataScienceOperatingSystemPage } from '../pages/DataScienceOperatingSystemPage'
import { BusinessOperatingSystemPage } from '../pages/BusinessOperatingSystemPage'
import { ProfessionalScenariosPage } from '../pages/ProfessionalScenariosPage'
import { DecisionPlaybooksPage } from '../pages/DecisionPlaybooksPage'
import { MlModelsPage } from '../pages/MlModelsPage'
import { MlGraphAtlasPage } from '../pages/MlGraphAtlasPage'
import { CreditRiskPage } from '../pages/CreditRiskPage'
import { OutputAtlasPage } from '../pages/OutputAtlasPage'
import { ReferencePage } from '../pages/ReferencePage'
import { BusinessCasesPage } from '../pages/BusinessCasesPage'
import { KnowledgeMapPage } from '../pages/KnowledgeMapPage'
import { QualityReviewPage } from '../pages/QualityReviewPage'

const globalSearchItem: NavItem = { id: 'global-search', label: 'Global Search', eyebrow: 'Command Center', description: 'Search across assets, outputs, formulas, models, cases and backlog.', icon: 'SE' }
const materialInventoryItem: NavItem = { id: 'material-inventory', label: 'Material Inventory', eyebrow: 'Source System', description: 'Inventory class materials and map them to topics, assets and gaps.', icon: 'MI' }
const courseAreaMapItem: NavItem = { id: 'course-area-map', label: 'Course Area Map', eyebrow: 'Source Mapping', description: 'Map courses and materials into professional knowledge areas.', icon: 'CM' }
const evidenceExpansionItem: NavItem = { id: 'evidence-expansion', label: 'Evidence Expansion', eyebrow: 'Asset Queue', description: 'Validate candidate assets before source labels change.', icon: 'EV' }
const sourceCoverageItem: NavItem = { id: 'source-coverage-qa', label: 'Source Coverage QA', eyebrow: 'Evidence Audit', description: 'Audit pending, candidate and complementary knowledge records.', icon: 'QA' }
const knowledgeLibraryItem: NavItem = { id: 'knowledge-library', label: 'Knowledge Library', eyebrow: 'Second Brain', description: 'Reusable concepts across business, data science and banking.', icon: 'KB' }
const studyPathsItem: NavItem = { id: 'study-paths', label: 'Study Paths', eyebrow: 'Learning Tracks', description: 'Role-based professional learning paths built from assets.', icon: 'SP' }
const learningSessionItem: NavItem = { id: 'learning-session', label: 'Learning Session', eyebrow: 'Focus Mode', description: 'Guided one-asset-at-a-time study mode for your current path.', icon: 'LS' }
const knowledgeFactoryItem: NavItem = { id: 'knowledge-factory', label: 'Knowledge Factory', eyebrow: 'Expansion System', description: 'Backlog, quality gates and source strategy for scaling the Hub.', icon: 'KF' }
const businessOsItem: NavItem = { id: 'business-os', label: 'Business OS', eyebrow: 'Core Area', description: 'Strategy, finance, marketing, operations and economics connected to decisions.', icon: 'BS' }
const professionalScenariosItem: NavItem = { id: 'professional-scenarios', label: 'Professional Scenarios', eyebrow: 'Apply', description: 'End-to-end workflows from business problem to monitored decision.', icon: 'SC' }
const decisionPlaybooksItem: NavItem = { id: 'decision-playbooks', label: 'Decision Playbooks', eyebrow: 'Decide', description: 'Convert analytical outputs into professional actions, evidence and monitoring.', icon: 'DP' }
const mlModelsItem: NavItem = { id: 'ml-models', label: 'ML Models', eyebrow: 'Machine Learning', description: 'Detailed ML models with outputs, interpretation and graph examples.', icon: 'ML' }
const mlGraphAtlasItem: NavItem = { id: 'ml-graph-atlas', label: 'ML Graph Atlas', eyebrow: 'Interpret', description: 'Machine learning charts: how to build, use and interpret them.', icon: 'GA' }

const navCatalog: NavItem[] = [...navItems, globalSearchItem, materialInventoryItem, courseAreaMapItem, evidenceExpansionItem, sourceCoverageItem, knowledgeLibraryItem, studyPathsItem, learningSessionItem, knowledgeFactoryItem, businessOsItem, professionalScenariosItem, decisionPlaybooksItem, mlModelsItem, mlGraphAtlasItem]

export function App() {
  const [activeView, setActiveView] = useState<ViewId>('dashboard')
  const [query, setQuery] = useState('')
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const [focusId, setFocusId] = useState<string | null>(null)
  const assetProgress = useAssetProgress()
  const pathPrefs = usePathPrefs()

  const activeItem = useMemo(() => navCatalog.find((item) => item.id === activeView) ?? navCatalog[0], [activeView])

  const openAsset = (assetId: string) => { setFocusId(null); setActiveAssetId(assetId); setActiveView('knowledge-library') }
  const changeView = (view: ViewId, nextFocusId: string | null = null) => { setActiveAssetId(null); setFocusId(nextFocusId); setActiveView(view) }

  return (
    <div className="app-shell">
      <Sidebar activeView={activeView} onChangeView={changeView} />
      <div className="app-main">
        <TopBar activeItem={activeItem} query={query} onQueryChange={setQuery} />
        <main className="content-shell">
          {activeView === 'dashboard' && <DashboardPage onNavigate={changeView} onOpenAsset={openAsset} assetProgress={assetProgress} pathPrefs={pathPrefs} />}
          {activeView === 'global-search' && <GlobalSearchPage query={query} onQueryChange={setQuery} onNavigate={changeView} onOpenAsset={openAsset} />}
          {activeView === 'material-inventory' && <MaterialInventoryPage focusId={focusId} />}
          {activeView === 'course-area-map' && <CourseAreaMapPage focusId={focusId} />}
          {activeView === 'evidence-expansion' && <EvidenceExpansionPage focusId={focusId} />}
          {activeView === 'source-coverage-qa' && <SourceCoverageQAPage focusId={focusId} />}
          {activeView === 'knowledge-library' && !activeAssetId && <KnowledgeLibraryPage onOpenAsset={openAsset} assetProgress={assetProgress} />}
          {activeView === 'knowledge-library' && activeAssetId && <KnowledgeAssetDetailPage assetId={activeAssetId} onBack={() => setActiveAssetId(null)} onOpenAsset={openAsset} assetProgress={assetProgress} />}
          {activeView === 'study-paths' && <StudyPathsPage assetProgress={assetProgress} onOpenAsset={openAsset} pathPrefs={pathPrefs} />}
          {activeView === 'learning-session' && <LearningSessionPage assetProgress={assetProgress} pathPrefs={pathPrefs} onOpenAsset={openAsset} onNavigate={changeView} />}
          {activeView === 'knowledge-factory' && <KnowledgeFactoryPage focusId={focusId} />}
          {activeView === 'data-science' && <DataScienceOperatingSystemPage />}
          {activeView === 'business-os' && <BusinessOperatingSystemPage />}
          {activeView === 'ml-models' && <MlModelsPage />}
          {activeView === 'ml-graph-atlas' && <MlGraphAtlasPage />}
          {activeView === 'professional-scenarios' && <ProfessionalScenariosPage />}
          {activeView === 'decision-playbooks' && <DecisionPlaybooksPage />}
          {activeView === 'banking-finance' && <CoreAreaPage area="Banking & Finance" onNavigate={changeView} />}
          {activeView === 'credit-risk' && <CreditRiskPage />}
          {activeView === 'output-atlas' && <OutputAtlasPage focusId={focusId} />}
          {activeView === 'formula-library' && <ReferencePage type="formulas" query={query} focusId={focusId} />}
          {activeView === 'model-library' && <ReferencePage type="models" query={query} focusId={focusId} />}
          {activeView === 'business-cases' && <BusinessCasesPage focusId={focusId} />}
          {activeView === 'knowledge-map' && <KnowledgeMapPage />}
          {activeView === 'quality-review' && <QualityReviewPage />}
        </main>
      </div>
    </div>
  )
}
