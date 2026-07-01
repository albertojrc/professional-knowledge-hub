import type { NavItem, ViewId } from '../../types/knowledge'

interface SidebarProps { activeView: ViewId; onChangeView: (view: ViewId) => void }

const primaryNav: NavItem[] = [
  { id: 'dashboard', label: 'Home', eyebrow: 'Start', description: 'Project overview and current direction.', icon: '🏠' },
  { id: 'global-search', label: 'Global Search', eyebrow: 'Find anything', description: 'Search concepts, outputs, formulas, models, cases and governance pages.', icon: '🔎' },
  { id: 'banking-credit-risk-study', label: 'Banking & Finance', eyebrow: 'Command Center', description: 'Credit risk, finance, valuation, monitoring and banking analytics.', icon: '🏦' },
  { id: 'professional-certifications', label: 'CFA & Certifications', eyebrow: 'Command Center', description: 'CFA-first certification study hub with Bloomberg as support.', icon: '🎓' },
  { id: 'knowledge-map', label: 'Knowledge Map', eyebrow: 'Connections', description: 'Connected map of concepts, outputs, cases and decisions.', icon: '🕸️' }
]

const sprintMarkers='PKOS v5.13 UX-REORG-1 clean-sidebar command-centers global-search-first banking-finance cfa-certifications'

export function Sidebar({ activeView, onChangeView }: SidebarProps) {
  return <aside className="sidebar"><div className="brand-panel"><span className="eyebrow" data-qa={sprintMarkers}>Clean Navigation</span><h1>Professional Knowledge Hub</h1><p>Use a few command centers. Global Search remains the main way to open detailed concepts, outputs and governance pages.</p></div><nav className="nav-group" aria-label="Primary navigation"><div className="nav-title">Main Modules</div>{primaryNav.map((item) => <button className={`nav-item ${activeView === item.id ? 'active' : ''}`} key={item.id} onClick={() => onChangeView(item.id)} type="button"><span className="nav-icon">{item.icon}</span><span><strong>{item.label}</strong><small>{item.eyebrow}</small></span></button>)}</nav><div className="sidebar-note"><strong>Tip:</strong> busca cualquier tema específico en Global Search; el menú ya no muestra todas las páginas internas.</div></aside>
}
