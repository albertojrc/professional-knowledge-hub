import type { AssetProgressStatus } from '../types/learningProgress'
import type { ViewId } from '../types/knowledge'
import type { KnowledgeAsset } from '../types/knowledgeAsset'
import { getStudyDashboardData } from '../data/studyDashboard'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'
import { CurrentPathPanel } from '../components/study/CurrentPathPanel'

interface AssetProgressApi { summary: { mastered: number; reviewed: number; studying: number; averageProgress: number }; getAssetStatus: (assetId: string) => AssetProgressStatus }
interface PathPrefsApi { prefs: { activePathId: string | null; pinnedPathIds: string[] } }
interface DashboardPageProps { onNavigate: (view: ViewId) => void; onOpenAsset: (assetId: string) => void; assetProgress: AssetProgressApi; pathPrefs: PathPrefsApi }

const moduleGateways = [
  { id: 'data-science-analytics-study', title: 'Data Science', eyebrow: 'Visual Studio', icon: 'DS', description: 'Data workflow, SQL, EDA, machine learning, dashboards and responsible AI.', outputs: ['ABT', 'EDA memo', 'Model validation', 'Dashboard'], accent: 'blue' },
  { id: 'banking-credit-risk-study', title: 'Banking & Finance', eyebrow: 'Visual Studio', icon: 'BF', description: 'Credit risk, scoring, valuation, portfolio monitoring, remediation and model refresh.', outputs: ['Credit memo', 'PD view', 'Monitoring dashboard', 'Challenger review'], accent: 'navy' },
  { id: 'professional-certifications', title: 'CFA & Certifications', eyebrow: 'Visual Studio', icon: 'CFA', description: 'CFA-first learning path with finance foundations, investments and Bloomberg support.', outputs: ['Formula checklist', 'Revision plan', 'Market brief', 'Practice queue'], accent: 'amber' },
  { id: 'knowledge-map', title: 'Knowledge Map', eyebrow: 'Connections', icon: 'KM', description: 'A connected map of concepts, tools, formulas, models, outputs, cases and decisions.', outputs: ['Concept graph', 'Dependencies', 'Related outputs', 'Study order'], accent: 'violet' }
]

const actionCards = [
  { id: 'global-search', title: 'Search the whole hub', eyebrow: 'Hidden command layer', description: 'Find concepts, outputs, formulas, models, cases and governance pages without crowding the sidebar.', action: 'Open Global Search' },
  { id: 'learning-session', title: 'Start focus mode', eyebrow: 'Study session', description: 'Study one concept at a time using your current learning path and progress status.', action: 'Start Session' },
  { id: 'study-paths', title: 'Review study paths', eyebrow: 'Learning tracks', description: 'Choose a role-based path like Credit Risk Analyst, ML for Banking or Finance & Strategy.', action: 'Open Paths' }
]

const backstageTools = [
  { id: 'material-inventory', title: 'Material Inventory', description: 'Track class materials and map them to topics.' },
  { id: 'course-area-map', title: 'Course Area Map', description: 'Connect courses to professional domains.' },
  { id: 'source-coverage-qa', title: 'Source Coverage QA', description: 'Audit evidence and gaps before claiming source coverage.' },
  { id: 'knowledge-factory', title: 'Knowledge Factory', description: 'Promote backlog items into structured assets.' }
]

export function DashboardPage({ onNavigate, onOpenAsset, assetProgress, pathPrefs }: DashboardPageProps) {
  const studyData = getStudyDashboardData(assetProgress)
  const completedCount = studyData.reviewed.length + studyData.mastered.length
  const completionRate = studyData.total ? Math.round((completedCount / studyData.total) * 100) : 0
  const studyFlow = ['Choose module', 'Select visual path', 'Study concept block', 'Build output', 'Interpret decision', 'Monitor result']

  return (
    <section className="concept-learning-page home-visual-dashboard">
      <div className="lesson-toolbar home-toolbar">
        <span className="text-button">Home</span>
        <div className="lesson-breadcrumb"><span>Professional Knowledge Hub</span><b>›</b><strong>Visual Dashboard</strong></div>
        <div className="lesson-progress"><span>Learning status</span><div><i style={{ width: `${completionRate}%` }} /></div><strong>{completionRate}%</strong></div>
      </div>

      <div className="concept-two-pane home-dashboard-grid">
        <article className="concept-main lesson-paper home-dashboard-main">
          <header className="concept-hero lesson-hero home-dashboard-hero">
            <span className="asset-icon large">PK</span>
            <div>
              <span className="eyebrow">Visual Learning Platform</span>
              <h1>Your professional second brain.</h1>
              <p>Enter through one of the main visual studios, study with outputs in mind, and use search capsules only when you need exact concepts, formulas, models or governance pages.</p>
              <div className="home-hero-actions"><button className="primary-button" onClick={() => onNavigate('data-science-analytics-study')} type="button">Start with Data Science</button><button className="text-button" onClick={() => onNavigate('global-search')} type="button">Open Search</button></div>
            </div>
          </header>

          <section className="home-module-grid" aria-label="Main modules">
            {moduleGateways.map((module) => <button className={`home-module-card ${module.accent}`} key={module.id} onClick={() => onNavigate(module.id)} type="button"><span className="asset-icon medium">{module.icon}</span><span className="eyebrow">{module.eyebrow}</span><h2>{module.title}</h2><p>{module.description}</p><div className="home-output-row">{module.outputs.map((output) => <span key={output}>{output}</span>)}</div></button>)}
          </section>

          <section className="lesson-block output-learning-block home-flow-block">
            <div className="lesson-block-title"><span>1</span><h2>How to use the Hub</h2></div>
            <KnowledgeChain nodes={studyFlow} />
            <p>Start from a module, not from a random page. Every topic should lead to an output, a decision and a monitoring habit.</p>
          </section>

          <section className="home-action-grid">
            {actionCards.map((card) => <button className="home-action-card" key={card.id} onClick={() => onNavigate(card.id)} type="button"><span className="eyebrow">{card.eyebrow}</span><h3>{card.title}</h3><p>{card.description}</p><strong>{card.action} →</strong></button>)}
          </section>

          <section className="study-dashboard-two-column home-study-columns"><div className="manual-panel"><span className="eyebrow">Continue Studying</span><h2>Pick up where you left off</h2><StudyAssetList assets={studyData.continueStudying} emptyText="No assets are marked as Studying yet." onOpenAsset={onOpenAsset} /></div><div className="manual-panel"><span className="eyebrow">Recommended Next</span><h2>Suggested next assets</h2><StudyAssetList assets={studyData.recommendedNext} emptyText="Everything has been started. Nice momentum." onOpenAsset={onOpenAsset} /></div></section>

          <section className="manual-panel home-backstage-panel"><span className="eyebrow">Backstage tools</span><h2>Keep source work available, but not in the main navigation.</h2><div className="home-backstage-grid">{backstageTools.map((tool) => <button key={tool.id} onClick={() => onNavigate(tool.id)} type="button"><strong>{tool.title}</strong><span>{tool.description}</span></button>)}</div></section>
        </article>

        <aside className="concept-output-panel home-dashboard-side">
          <div className="output-panel-card progress-panel"><span className="eyebrow">Study Tracker</span><h2>{completionRate}% complete</h2><div className="study-score-bar"><i style={{ width: `${completionRate}%` }} /></div><p>{completedCount} reviewed or mastered out of {studyData.total} assets.</p></div>
          <CurrentPathPanel activePathId={pathPrefs.prefs.activePathId} getAssetStatus={assetProgress.getAssetStatus} onOpenAsset={onOpenAsset} onOpenStudyPaths={() => onNavigate('study-paths')} onStartSession={() => onNavigate('learning-session')} />
          <div className="output-panel-card"><span className="eyebrow">Output View</span><h2>Professional Portfolio</h2><div className="home-output-preview"><span /><i /><b /></div><p>Your goal is not to collect notes. It is to build outputs you can explain in banking, finance and analytics contexts.</p></div>
          <div className="output-panel-card success-panel"><h3>Interpretation checklist</h3><ul><li>Which module am I studying?</li><li>What output should I be able to build?</li><li>What decision does this support?</li><li>What should be monitored afterward?</li></ul></div>
          <div className="output-panel-card"><h3>Progress by domain</h3><div className="home-area-stack">{studyData.areaBreakdown.slice(0, 6).map((item) => <div key={item.area}><strong>{item.area}</strong><span>{item.done}/{item.total}</span><div className="study-score-bar"><i style={{ width: `${item.progress}%` }} /></div></div>)}</div></div>
        </aside>
      </div>
    </section>
  )
}

function StudyAssetList({ assets, emptyText, onOpenAsset }: { assets: Array<KnowledgeAsset & { status: AssetProgressStatus }>; emptyText: string; onOpenAsset: (assetId: string) => void }) {
  if (!assets.length) return <div className="empty-library-state"><p>{emptyText}</p></div>
  return <div className="study-asset-list">{assets.map((asset) => <button className="study-asset-row" key={asset.id} onClick={() => onOpenAsset(asset.id)} type="button"><span className="asset-icon small">{asset.icon}</span><div><strong>{asset.title}</strong><span>{asset.area} · {asset.category} · {asset.status}</span></div></button>)}</div>
}
