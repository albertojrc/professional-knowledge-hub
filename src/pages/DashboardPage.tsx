import type { NavItem, ViewId } from '../types/knowledge'
import { navItems, knowledgeChains } from '../data/knowledge'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface DashboardPageProps {
  onNavigate: (view: ViewId) => void
}

const knowledgeLibraryItem: NavItem = { id: 'knowledge-library', label: 'Knowledge Library', eyebrow: 'Second Brain', description: 'Reusable professional concepts with theory, interpretation, outputs, business use and banking applications.', icon: 'KB' }
const businessOsItem: NavItem = { id: 'business-os', label: 'Business OS', eyebrow: 'Core Area', description: 'Strategy, finance, marketing, operations and economics connected to decisions.', icon: 'BS' }
const professionalScenariosItem: NavItem = { id: 'professional-scenarios', label: 'Professional Scenarios', eyebrow: 'Apply', description: 'End-to-end workflows from business problem to monitored decision.', icon: 'SC' }
const decisionPlaybooksItem: NavItem = { id: 'decision-playbooks', label: 'Decision Playbooks', eyebrow: 'Decide', description: 'Convert analytical outputs into professional actions, evidence and monitoring.', icon: 'DP' }

const operatingSystemCards = [
  { title: 'What is it?', description: 'Understand the concept, method, output, model or business tool in plain professional language.', example: 'What is a calibration plot? What is WACC? What is feature engineering?' },
  { title: 'When do I use it?', description: 'Identify the exact project moment where the method becomes useful.', example: 'Before modeling, after EDA, during evaluation, before a credit decision or after deployment.' },
  { title: 'How do I use it?', description: 'Learn the workflow, inputs, tools, interpretation and red flags.', example: 'SQL ABT → Data Quality → Feature Engineering → Model → Output → Decision.' },
  { title: 'What decision does it support?', description: 'Translate analysis into business action, risk control, investment choice or operational change.', example: 'Approve, reject, monitor, reprice, redesign, automate, invest or escalate.' }
]

const statusCards = [
  { label: 'Architecture', value: 'Knowledge Assets', note: 'Sprint 1 is moving the Hub to reusable concept objects.' },
  { label: 'Content Depth', value: 'Growing', note: 'Master content becomes the core, but not the limit.' },
  { label: 'UX/UI', value: 'Academy Style', note: 'Concept pages now follow a course-like structure.' },
  { label: 'QA', value: 'Configured', note: 'Build, lint and checklist are documented.' }
]

const primaryNavigation: NavItem[] = [
  knowledgeLibraryItem,
  businessOsItem,
  professionalScenariosItem,
  decisionPlaybooksItem,
  ...navItems.filter((item) => ['data-science', 'banking-finance', 'credit-risk', 'output-atlas', 'model-library', 'business-cases', 'knowledge-map'].includes(item.id))
]

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <section className="page-stack">
      <div className="hero-panel">
        <span className="eyebrow">Professional Knowledge Operating System</span>
        <h1>Know what it is, when to use it, how to use it, and what decision it supports.</h1>
        <p>This Hub is becoming a professional knowledge operating system for business, data science and banking.</p>
        <div className="badge-list">
          <button className="primary-button" onClick={() => onNavigate('knowledge-library')} type="button">Open Knowledge Library</button>
          <button className="primary-button" onClick={() => onNavigate('data-science')} type="button">Open Data Science OS</button>
          <button className="primary-button" onClick={() => onNavigate('professional-scenarios')} type="button">Open Scenarios</button>
        </div>
      </div>

      <div className="dashboard-grid">
        {statusCards.map((card) => <article className="feature-card" key={card.label}><span className="eyebrow">Project Status</span><h3>{card.label}</h3><div className="mini-result good">{card.value}</div><p>{card.note}</p></article>)}
      </div>

      <div className="dashboard-grid">
        {operatingSystemCards.map((card) => <article className="feature-card" key={card.title}><span className="eyebrow">Learning Logic</span><h3>{card.title}</h3><p>{card.description}</p><div className="mini-result good">{card.example}</div></article>)}
      </div>

      <section className="manual-panel">
        <span className="eyebrow">Main Project Flow</span>
        <h2>From business question to monitored decision</h2>
        <KnowledgeChain nodes={['Business Question', 'Data Sources', 'SQL ABT', 'Data Quality', 'EDA', 'Features', 'Model / Analysis', 'Output Interpretation', 'Business Decision', 'Monitoring']} />
        <p>Every major page in the Hub should answer where it belongs in this chain and what action it enables.</p>
      </section>

      <div className="dashboard-grid">
        {primaryNavigation.map((item) => <button className="feature-card navigation-card" key={item.id} onClick={() => onNavigate(item.id)} type="button"><span className="card-icon">{item.icon}</span><span className="eyebrow">{item.eyebrow}</span><h3>{item.label}</h3><p>{item.description}</p></button>)}
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
