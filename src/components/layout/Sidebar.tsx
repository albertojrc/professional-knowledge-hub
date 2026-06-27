import type { NavItem, ViewId } from '../../types/knowledge'
import { navItems } from '../../data/knowledge'

interface SidebarProps {
  activeView: ViewId
  onChangeView: (view: ViewId) => void
}

const globalSearchItem: NavItem = { id: 'global-search', label: 'Global Search', eyebrow: 'Command Center', description: 'Search across assets, outputs, formulas, models, cases and backlog.', icon: 'SE' }
const knowledgeLibraryItem: NavItem = { id: 'knowledge-library', label: 'Knowledge Library', eyebrow: 'Second Brain', description: 'Reusable professional concepts across business, data science and banking.', icon: 'KB' }
const studyPathsItem: NavItem = { id: 'study-paths', label: 'Study Paths', eyebrow: 'Learning Tracks', description: 'Role-based professional learning paths built from assets.', icon: 'SP' }
const learningSessionItem: NavItem = { id: 'learning-session', label: 'Learning Session', eyebrow: 'Focus Mode', description: 'Guided one-asset-at-a-time study mode for your current path.', icon: 'LS' }
const knowledgeFactoryItem: NavItem = { id: 'knowledge-factory', label: 'Knowledge Factory', eyebrow: 'Expansion System', description: 'Backlog, quality gates and source strategy for scaling the Hub.', icon: 'KF' }
const businessOsItem: NavItem = { id: 'business-os', label: 'Business OS', eyebrow: 'Core Area', description: 'Strategy, finance, marketing, operations and economics connected to decisions.', icon: 'BS' }
const professionalScenariosItem: NavItem = { id: 'professional-scenarios', label: 'Professional Scenarios', eyebrow: 'Apply', description: 'End-to-end workflows from business problem to monitored decision.', icon: 'SC' }
const decisionPlaybooksItem: NavItem = { id: 'decision-playbooks', label: 'Decision Playbooks', eyebrow: 'Decide', description: 'Convert analytical outputs into professional actions, evidence and monitoring.', icon: 'DP' }
const mlModelsItem: NavItem = { id: 'ml-models', label: 'ML Models', eyebrow: 'Machine Learning', description: 'Detailed ML models with outputs, interpretation and graph examples.', icon: 'ML' }
const mlGraphAtlasItem: NavItem = { id: 'ml-graph-atlas', label: 'ML Graph Atlas', eyebrow: 'Interpret', description: 'Machine learning charts: how to build, use and interpret them.', icon: 'CH' }

const navCatalog: NavItem[] = [...navItems, globalSearchItem, knowledgeLibraryItem, studyPathsItem, learningSessionItem, knowledgeFactoryItem, businessOsItem, professionalScenariosItem, decisionPlaybooksItem, mlModelsItem, mlGraphAtlasItem]

const groups = [
  { title: 'Study', ids: ['dashboard', 'global-search', 'knowledge-library', 'study-paths', 'learning-session', 'data-science', 'business-os', 'banking-finance', 'credit-risk'] as ViewId[] },
  { title: 'Machine Learning', ids: ['ml-models', 'ml-graph-atlas'] as ViewId[] },
  { title: 'Reference', ids: ['output-atlas', 'formula-library', 'model-library'] as ViewId[] },
  { title: 'Application', ids: ['professional-scenarios', 'decision-playbooks', 'business-cases', 'knowledge-map', 'knowledge-factory', 'quality-review'] as ViewId[] }
]

export function Sidebar({ activeView, onChangeView }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand-panel">
        <span className="eyebrow">PKOS v1.1</span>
        <h1>Professional Knowledge Hub</h1>
        <p>Data Science + Banking + Finance + Business as a professional second brain.</p>
      </div>
      {groups.map((group) => (
        <nav className="nav-group" key={group.title} aria-label={group.title}>
          <div className="nav-title">{group.title}</div>
          {group.ids.map((id) => {
            const item = navCatalog.find((navItem) => navItem.id === id)
            if (!item) return null
            return (
              <button className={`nav-item ${activeView === id ? 'active' : ''}`} key={item.id} onClick={() => onChangeView(item.id)} type="button">
                <span className="nav-icon">{item.icon}</span>
                <span><strong>{item.label}</strong><small>{item.eyebrow}</small></span>
              </button>
            )
          })}
        </nav>
      ))}
    </aside>
  )
}
