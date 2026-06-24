import { useMemo, useState } from 'react'
import type { NavItem, ViewId } from '../types/knowledge'
import { navItems } from '../data/knowledge'
import { Sidebar } from '../components/layout/Sidebar'
import { TopBar } from '../components/layout/TopBar'
import { DashboardPage } from '../pages/DashboardPage'
import { CoreAreaPage } from '../pages/CoreAreaPage'
import { DataScienceOperatingSystemPage } from '../pages/DataScienceOperatingSystemPage'
import { BusinessOperatingSystemPage } from '../pages/BusinessOperatingSystemPage'
import { CreditRiskPage } from '../pages/CreditRiskPage'
import { OutputAtlasPage } from '../pages/OutputAtlasPage'
import { ReferencePage } from '../pages/ReferencePage'
import { BusinessCasesPage } from '../pages/BusinessCasesPage'
import { KnowledgeMapPage } from '../pages/KnowledgeMapPage'
import { QualityReviewPage } from '../pages/QualityReviewPage'

const businessOsItem: NavItem = {
  id: 'business-os',
  label: 'Business OS',
  eyebrow: 'Core Area',
  description: 'Strategy, finance, marketing, operations and economics connected to decisions.',
  icon: '💼'
}

const navCatalog: NavItem[] = [...navItems, businessOsItem]

export function App() {
  const [activeView, setActiveView] = useState<ViewId>('dashboard')
  const [query, setQuery] = useState('')

  const activeItem = useMemo(
    () => navCatalog.find((item) => item.id === activeView) ?? navCatalog[0],
    [activeView]
  )

  return (
    <div className="app-shell">
      <Sidebar activeView={activeView} onChangeView={setActiveView} />
      <div className="app-main">
        <TopBar activeItem={activeItem} query={query} onQueryChange={setQuery} />
        <main className="content-shell">
          {activeView === 'dashboard' && <DashboardPage onNavigate={setActiveView} />}
          {activeView === 'data-science' && <DataScienceOperatingSystemPage />}
          {activeView === 'business-os' && <BusinessOperatingSystemPage />}
          {activeView === 'banking-finance' && <CoreAreaPage area="Banking & Finance" onNavigate={setActiveView} />}
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
