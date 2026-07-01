import type { NavItem, ViewId } from '../../types/knowledge'

interface SidebarProps { activeView: ViewId; onChangeView: (view: ViewId) => void }

const primaryNav: NavItem[] = [
  { id: 'dashboard', label: 'Home', eyebrow: 'Start', description: 'Project overview and current direction.', icon: '🏠' },
  { id: 'data-science-analytics-study', label: 'Data Science', eyebrow: 'Curriculum', description: 'Submodules, topics and applied data concepts.', icon: '🧠' },
  { id: 'banking-credit-risk-study', label: 'Banking & Finance', eyebrow: 'Curriculum', description: 'Credit risk, finance, valuation and monitoring.', icon: '🏦' },
  { id: 'professional-certifications', label: 'CFA & Certifications', eyebrow: 'Curriculum', description: 'Certification paths and study topics.', icon: '🎓' },
  { id: 'knowledge-map', label: 'Knowledge Map', eyebrow: 'Connections', description: 'Connected map of concepts, outputs, cases and decisions.', icon: '🕸️' }
]

const sprintMarkers='PKOS v5.26 UX-ARCHITECTURE UX-REORG-2 five-modules data-science banking-finance cfa-certifications knowledge-map command-centers detail-panels curriculum submodules topics'

export function Sidebar({ activeView, onChangeView }: SidebarProps) {
  return <aside className="sidebar"><div className="brand-panel"><span className="eyebrow" data-qa={sprintMarkers}>Clean Navigation</span><h1>Professional Knowledge Hub</h1><p>Five main modules. Each module is organized as submodules, topics and detailed study views.</p></div><nav className="nav-group" aria-label="Primary navigation"><div className="nav-title">Main Modules</div>{primaryNav.map((item) => <button className={`nav-item ${activeView === item.id ? 'active' : ''}`} key={item.id} onClick={() => onChangeView(item.id)} type="button"><span className="nav-icon">{item.icon}</span><span><strong>{item.label}</strong><small>{item.eyebrow}</small></span></button>)}</nav><div className="sidebar-note"><strong>Flow:</strong> entra a un módulo, elige un submódulo, abre un tópico y estudia su vista de detalle. Las páginas internas siguen accesibles por búsqueda.</div></aside>
}
