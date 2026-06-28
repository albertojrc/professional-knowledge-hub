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
import { SourceReviewPrepPage } from '../pages/SourceReviewPrepPage'
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

const extraNav: NavItem[] = [
  { id: 'global-search', label: 'Global Search', eyebrow: 'Command Center', description: 'Search the Hub.', icon: 'SE' },
  { id: 'material-inventory', label: 'Material Inventory', eyebrow: 'Source', description: 'Source inventory.', icon: 'MI' },
  { id: 'course-area-map', label: 'Course Area Map', eyebrow: 'Source', description: 'Area mapping.', icon: 'CM' },
  { id: 'evidence-expansion', label: 'Evidence Expansion', eyebrow: 'Source', description: 'Candidate queue.', icon: 'EV' },
  { id: 'source-coverage-qa', label: 'Source Coverage QA', eyebrow: 'Source', description: 'Coverage audit.', icon: 'QA' },
  { id: 'source-review-prep', label: 'Source Review Prep', eyebrow: 'Source', description: 'Review queue.', icon: 'SR' },
  { id: 'knowledge-library', label: 'Knowledge Library', eyebrow: 'Study', description: 'Asset library.', icon: 'KB' },
  { id: 'study-paths', label: 'Study Paths', eyebrow: 'Study', description: 'Learning paths.', icon: 'SP' },
  { id: 'learning-session', label: 'Learning Session', eyebrow: 'Study', description: 'Focus mode.', icon: 'LS' },
  { id: 'knowledge-factory', label: 'Knowledge Factory', eyebrow: 'Source', description: 'Expansion system.', icon: 'KF' },
  { id: 'business-os', label: 'Business OS', eyebrow: 'Core', description: 'Business operating system.', icon: 'BS' },
  { id: 'professional-scenarios', label: 'Professional Scenarios', eyebrow: 'Apply', description: 'Scenarios.', icon: 'SC' },
  { id: 'decision-playbooks', label: 'Decision Playbooks', eyebrow: 'Apply', description: 'Decision playbooks.', icon: 'DP' },
  { id: 'ml-models', label: 'ML Models', eyebrow: 'ML', description: 'Model library.', icon: 'ML' },
  { id: 'ml-graph-atlas', label: 'ML Graph Atlas', eyebrow: 'ML', description: 'Graph atlas.', icon: 'GA' }
]

const navCatalog: NavItem[] = [...navItems, ...extraNav]

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
          {activeView === 'source-review-prep' && <SourceReviewPrepPage focusId={focusId} />}
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
