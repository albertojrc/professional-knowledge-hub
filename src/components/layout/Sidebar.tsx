import type { NavItem, ViewId } from '../../types/knowledge'
import { navItems } from '../../data/knowledge'

interface SidebarProps {
  activeView: ViewId
  onChangeView: (view: ViewId) => void
}

const businessOsItem: NavItem = {
  id: 'business-os',
  label: 'Business OS',
  eyebrow: 'Core Area',
  description: 'Strategy, finance, marketing, operations and economics connected to decisions.',
  icon: '💼'
}

const navCatalog: NavItem[] = [...navItems, businessOsItem]

const groups = [
  {
    title: 'Study',
    ids: ['dashboard', 'data-science', 'business-os', 'banking-finance', 'credit-risk'] as ViewId[]
  },
  {
    title: 'Reference',
    ids: ['output-atlas', 'formula-library', 'model-library'] as ViewId[]
  },
  {
    title: 'Application',
    ids: ['business-cases', 'knowledge-map', 'quality-review'] as ViewId[]
  }
]

export function Sidebar({ activeView, onChangeView }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand-panel">
        <span className="eyebrow">PKOS v0.3</span>
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
              <button
                className={`nav-item ${activeView === id ? 'active' : ''}`}
                key={item.id}
                onClick={() => onChangeView(item.id)}
                type="button"
              >
                <span className="nav-icon">{item.icon}</span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.eyebrow}</small>
                </span>
              </button>
            )
          })}
        </nav>
      ))}
    </aside>
  )
}
