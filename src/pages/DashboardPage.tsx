import type { AssetProgressStatus } from '../types/learningProgress'
import type { NavItem, ViewId } from '../types/knowledge'
import type { KnowledgeAsset } from '../types/knowledgeAsset'
import { navItems, knowledgeChains } from '../data/knowledge'
import { getStudyDashboardData } from '../data/studyDashboard'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface AssetProgressApi {
  summary: { mastered: number; reviewed: number; studying: number; averageProgress: number }
  getAssetStatus: (assetId: string) => AssetProgressStatus
}

interface DashboardPageProps {
  onNavigate: (view: ViewId) => void
  onOpenAsset: (assetId: string) => void
  assetProgress: AssetProgressApi
}

const globalSearchItem: NavItem = { id: 'global-search', label: 'Global Search', eyebrow: 'Command Center', description: 'Search across concepts, formulas, outputs, models, cases and backlog items.', icon: 'SE' }
const knowledgeLibraryItem: NavItem = { id: 'knowledge-library', label: 'Knowledge Library', eyebrow: 'Second Brain', description: 'Reusable professional concepts with theory, interpretation, outputs, business use and banking applications.', icon: 'KB' }
const studyPathsItem: NavItem = { id: 'study-paths', label: 'Study Paths', eyebrow: 'Learning Tracks', description: 'Role-based professional paths like Credit Risk Analyst, ML for Banking, Finance & Strategy.', icon: 'SP' }
const businessOsItem: NavItem = { id: 'business-os', label: 'Business OS', eyebrow: 'Core Area', description: 'Strategy, finance, marketing, operations and economics connected to decisions.', icon: 'BS' }
const professionalScenariosItem: NavItem = { id: 'professional-scenarios', label: 'Professional Scenarios', eyebrow: 'Apply', description: 'End-to-end workflows from business problem to monitored decision.', icon: 'SC' }
const decisionPlaybooksItem: NavItem = { id: 'decision-playbooks', label: 'Decision Playbooks', eyebrow: 'Decide', description: 'Convert analytical outputs into professional actions, evidence and monitoring.', icon: 'DP' }

const operatingSystemCards = [
  { title: 'What is it?', description: 'Understand the concept, method, output, model or business tool in plain professional language.', example: 'What is a calibration plot? What is WACC? What is feature engineering?' },
  { title: 'When do I use it?', description: 'Identify the exact project moment where the method becomes useful.', example: 'Before modeling, after EDA, during evaluation, before a credit decision or after deployment.' },
  { title: 'How do I use it?', description: 'Learn the workflow, inputs, tools, interpretation and red flags.', example: 'SQL ABT → Data Quality → Feature Engineering → Model → Output → Decision.' },
  { title: 'What decision does it support?', description: 'Translate analysis into business action, risk control, investment choice or operational change.', example: 'Approve, reject, monitor, reprice, redesign, automate, invest or escalate.' }
]

const primaryNavigation: NavItem[] = [
  globalSearchItem,
  knowledgeLibraryItem,
  studyPathsItem,
  businessOsItem,
  professionalScenariosItem,
  decisionPlaybooksItem,
  ...navItems.filter((item) => ['data-science', 'banking-finance', 'credit-risk', 'output-atlas', 'model-library', 'business-cases', 'knowledge-map'].includes(item.id))
]

export function DashboardPage({ onNavigate, onOpenAsset, assetProgress }: DashboardPageProps) {
  const studyData = getStudyDashboardData(assetProgress)
  const completedCount = studyData.reviewed.length + studyData.mastered.length
  const completionRate = studyData.total ? Math.round((completedCount / studyData.total) * 100) : 0

  return (
    <section className="page-stack">
      <div className="hero-panel personal-dashboard-hero">
        <div>
          <span className="eyebrow">Professional Knowledge Operating System</span>
          <h1>Your personal study command center for business, data science and banking.</h1>
          <p>This dashboard now reflects your real learning progress across the Knowledge Library.</p>
          <div className="badge-list">
            <button className="primary-button" onClick={() => onNavigate('study-paths')} type="button">Open Study Paths</button>
            <button className="primary-button" onClick={() => onNavigate('global-search')} type="button">Open Global Search</button>
            <button className="primary-button" onClick={() => onNavigate('knowledge-library')} type="button">Open Knowledge Library</button>
          </div>
        </div>
        <div className="study-score-card">
          <span className="eyebrow">Completion Rate</span>
          <strong>{completionRate}%</strong>
          <div className="study-score-bar"><i style={{ width: `${completionRate}%` }} /></div>
          <p>{completedCount} reviewed or mastered out of {studyData.total} assets.</p>
        </div>
      </div>

      <section className="study-dashboard-grid">
        <article className="study-stat-card"><span className="eyebrow">Current</span><strong>{studyData.studying.length}</strong><p>assets in study mode</p></article>
        <article className="study-stat-card"><span className="eyebrow">Reviewed</span><strong>{studyData.reviewed.length}</strong><p>assets reviewed</p></article>
        <article className="study-stat-card"><span className="eyebrow">Mastered</span><strong>{studyData.mastered.length}</strong><p>assets mastered</p></article>
        <article className="study-stat-card"><span className="eyebrow">Pending</span><strong>{studyData.notStarted.length}</strong><p>assets not started</p></article>
      </section>

      <section className="study-dashboard-two-column">
        <div className="manual-panel"><span className="eyebrow">Continue Studying</span><h2>Pick up where you left off</h2><StudyAssetList assets={studyData.continueStudying} emptyText="No assets are marked as Studying yet." onOpenAsset={onOpenAsset} /></div>
        <div className="manual-panel"><span className="eyebrow">Recommended Next</span><h2>Suggested next assets</h2><StudyAssetList assets={studyData.recommendedNext} emptyText="Everything has been started. Nice momentum." onOpenAsset={onOpenAsset} /></div>
      </section>

      <section className="manual-panel"><span className="eyebrow">Area Progress</span><h2>Progress by professional domain</h2><div className="area-progress-grid">{studyData.areaBreakdown.map((item) => <article className="area-progress-card" key={item.area}><div><strong>{item.area}</strong><span>{item.done} / {item.total} reviewed or mastered</span></div><div className="study-score-bar"><i style={{ width: `${item.progress}%` }} /></div><b>{item.progress}%</b></article>)}</div></section>

      <div className="dashboard-grid">{operatingSystemCards.map((card) => <article className="feature-card" key={card.title}><span className="eyebrow">Learning Logic</span><h3>{card.title}</h3><p>{card.description}</p><div className="mini-result good">{card.example}</div></article>)}</div>

      <section className="manual-panel"><span className="eyebrow">Main Project Flow</span><h2>From business question to monitored decision</h2><KnowledgeChain nodes={['Business Question', 'Data Sources', 'SQL ABT', 'Data Quality', 'EDA', 'Features', 'Model / Analysis', 'Output Interpretation', 'Business Decision', 'Monitoring']} /><p>Every major page in the Hub should answer where it belongs in this chain and what action it enables.</p></section>

      <div className="dashboard-grid">{primaryNavigation.map((item) => <button className="feature-card navigation-card" key={item.id} onClick={() => onNavigate(item.id)} type="button"><span className="card-icon">{item.icon}</span><span className="eyebrow">{item.eyebrow}</span><h3>{item.label}</h3><p>{item.description}</p></button>)}</div>

      <section className="manual-panel"><span className="eyebrow">Knowledge Map Preview</span><h2>{knowledgeChains[0].title}</h2><KnowledgeChain nodes={knowledgeChains[0].nodes} /><p>{knowledgeChains[0].professionalUse}</p></section>
    </section>
  )
}

function StudyAssetList({ assets, emptyText, onOpenAsset }: { assets: Array<KnowledgeAsset & { status: AssetProgressStatus }>; emptyText: string; onOpenAsset: (assetId: string) => void }) {
  if (!assets.length) return <div className="empty-library-state"><p>{emptyText}</p></div>

  return (
    <div className="study-asset-list">
      {assets.map((asset) => <button className="study-asset-row" key={asset.id} onClick={() => onOpenAsset(asset.id)} type="button"><span className="asset-icon small">{asset.icon}</span><div><strong>{asset.title}</strong><span>{asset.area} · {asset.category} · {asset.status}</span></div></button>)}
    </div>
  )
}
