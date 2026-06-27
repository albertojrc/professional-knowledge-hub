import { useMemo, useState } from 'react'
import type { NavItem, ViewId } from '../types/knowledge'
import { navItems } from '../data/knowledge'
import { useAssetProgress } from '../hooks/useAssetProgress'
import { Sidebar } from '../components/layout/Sidebar'
import { TopBar } from '../components/layout/TopBar'
import { DashboardPage } from '../pages/DashboardPage'
import { GlobalSearchPage } from '../pages/GlobalSearchPage'
import { KnowledgeLibraryPage } from '../pages/KnowledgeLibraryPage'
import { KnowledgeAssetDetailPage } from '../pages/KnowledgeAssetDetailPage'
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
const knowledgeLibraryItem: NavItem = { id: 'knowledge-library', label: 'Knowledge Library', eyebrow: 'Second Brain', description: 'Reusable concepts across business, data science and banking.', icon: 'KB' }
const knowledgeFactoryItem: NavItem = { id: 'knowledge-factory', label: 'Knowledge Factory', eyebrow: 'Expansion System', description: 'Backlog, quality gates and source strategy for scaling the Hub.', icon: 'KF' }
const businessOsItem: NavItem = { id: 'business-os', label: 'Business OS', eyebrow: 'Core Area', description: 'Strategy, finance, marketing, operations and economics connected to decisions.', icon: 'BS' }
const professionalScenariosItem: NavItem = { id: 'professional-scenarios', label: 'Professional Scenarios', eyebrow: 'Apply', description: 'End-to-end workflows from business problem to monitored decision.', icon: 'SC' }
const decisionPlaybooksItem: NavItem = { id: 'decision-playbooks', label: 'Decision Playbooks', eyebrow: 'Decide', description: 'Convert analytical outputs into professional actions, evidence and monitoring.', icon: 'DP' }
const mlModelsItem: NavItem = { id: 'ml-models', label: 'ML Models', eyebrow: 'Machine Learning', description: 'Detailed ML models with outputs, interpretation and graph examples.', icon: 'ML' }
const mlGraphAtlasItem: NavItem = { id: 'ml-graph-atlas', label: 'ML Graph Atlas', eyebrow: 'Interpret', description: 'Machine learning charts: how to build, use and interpret them.', icon: 'GA' }

const navCatalog: NavItem[] = [...navItems, globalSearchItem, knowledgeLibraryItem, knowledgeFactoryItem, businessOsItem, professionalScenariosItem, decisionPlaybooksItem, mlModelsItem, mlGraphAtlasItem]

export function App() {
  const [activeView, setActiveView] = useState<ViewId>('dashboard')
  const [query, setQuery] = useState('')
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const [focusId, setFocusId] = useState<string | null>(null)
  const assetProgress = useAssetProgress()

  const activeItem = useMemo(() => navCatalog.find((item) => item.id === activeView) ?? navCatalog[0], [activeView])

  const openAsset = (assetId: string) => {
    setFocusId(null)
    setActiveAssetId(assetId)
    setActiveView('knowledge-library')
  }

  const changeView = (view: ViewId, nextFocusId: string | null = null) => {
    setActiveAssetId(null)
    setFocusId(nextFocusId)
    setActiveView(view)
  }

  return (
    <div className="app-shell">
      <Sidebar activeView={activeView} onChangeView={changeView} />
      <div className="app-main">
        <TopBar activeItem={activeItem} query={query} onQueryChange={setQuery} />
        <main className="content-shell">
          {activeView === 'dashboard' && <DashboardPage onNavigate={changeView} />}
          {activeView === 'global-search' && <GlobalSearchPage query={query} onQueryChange={setQuery} onNavigate={changeView} onOpenAsset={openAsset} />}
          {activeView === 'knowledge-library' && !activeAssetId && <KnowledgeLibraryPage onOpenAsset={openAsset} assetProgress={assetProgress} />}
          {activeView === 'knowledge-library' && activeAssetId && <KnowledgeAssetDetailPage assetId={activeAssetId} onBack={() => setActiveAssetId(null)} onOpenAsset={openAsset} assetProgress={assetProgress} />}
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
