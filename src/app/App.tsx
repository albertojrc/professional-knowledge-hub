import { useMemo, useState } from 'react'
import type { ViewId } from '../types/knowledge'
import { navItems } from '../data/knowledge'
import { Sidebar } from '../components/layout/Sidebar'
import { TopBar } from '../components/layout/TopBar'
import { DashboardPage } from '../pages/DashboardPage'
import { CreditRiskPage } from '../pages/CreditRiskPage'
import { OutputAtlasPage } from '../pages/OutputAtlasPage'
import { ReferencePage } from '../pages/ReferencePage'
import { BusinessCasesPage } from '../pages/BusinessCasesPage'
import { KnowledgeMapPage } from '../pages/KnowledgeMapPage'
import { QualityReviewPage } from '../pages/QualityReviewPage'

export function App() {
  const [activeView, setActiveView] = useState<ViewId>('dashboard')
  const [query, setQuery] = useState('')

  const activeItem = useMemo(
    () => navItems.find((item) => item.id === activeView) ?? navItems[0],
    [activeView]
  )

  return (
    <div className="app-shell">
      <Sidebar activeView={activeView} onChangeView={setActiveView} />
      <div className="app-main">
        <TopBar activeItem={activeItem} query={query} onQueryChange={setQuery} />
        <main className="content-shell">
          {activeView === 'dashboard' && <DashboardPage onNavigate={setActiveView} />}
          {activeView === 'credit-risk' && <CreditRiskPage />}
          {activeView === 'output-atlas' && <OutputAtlasPage />}
          {activeView === 'formula-library' && <ReferencePage type="formulas" query={query} />}
          {activeView === 'model-library' && <ReferencePage type="models" query={query} />}
          {activeView === 'business-cases' && <BusinessCasesPage />}
          {activeView === 'knowledge-map' && <KnowledgeMapPage />}
          {activeView === 'quality-review' && <QualityReviewPage />}
        </main>
      </div>
    </div>
  )
}
