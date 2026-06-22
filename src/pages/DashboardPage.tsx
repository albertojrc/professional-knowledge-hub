import type { ViewId } from '../types/knowledge'
import { navItems, knowledgeChains } from '../data/knowledge'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface DashboardPageProps {
  onNavigate: (view: ViewId) => void
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <section className="page-stack">
      <div className="hero-panel">
        <span className="eyebrow">Professional Knowledge Operating System</span>
        <h1>Learn. Interpret. Apply. Connect.</h1>
        <p>
          A professional knowledge platform for Data Science, Banking, Finance, Economics,
          Management and Analytics — designed around decisions, not isolated notes.
        </p>
      </div>

      <div className="dashboard-grid">
        <article className="feature-card feature-card-wide">
          <span className="eyebrow">Continue Learning</span>
          <h3>Credit Risk & Fraud Analyst</h3>
          <p>
            Continue with the workflow from banking data to credit scoring, calibration, SHAP,
            expected loss and model monitoring.
          </p>
          <button className="primary-button" onClick={() => onNavigate('credit-risk')} type="button">
            Open Credit Risk Module
          </button>
        </article>

        {navItems
          .filter((item) => item.id !== 'dashboard')
          .map((item) => (
            <button className="feature-card navigation-card" key={item.id} onClick={() => onNavigate(item.id)} type="button">
              <span className="card-icon">{item.icon}</span>
              <span className="eyebrow">{item.eyebrow}</span>
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </button>
          ))}
      </div>

      <section className="manual-panel">
        <span className="eyebrow">Knowledge Map Preview</span>
        <h2>{knowledgeChains[0].title}</h2>
        <KnowledgeChain nodes={knowledgeChains[0].nodes} />
        <p>{knowledgeChains[0].professionalUse}</p>
      </section>
    </section>
  )
}
