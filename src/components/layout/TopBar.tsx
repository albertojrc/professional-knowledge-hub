import type { NavItem } from '../../types/knowledge'

interface TopBarProps {
  activeItem: NavItem
  query: string
  onQueryChange: (query: string) => void
}

export function TopBar({ activeItem, query, onQueryChange }: TopBarProps) {
  return (
    <header className="topbar">
      <div>
        <span className="eyebrow">{activeItem.eyebrow}</span>
        <h2>{activeItem.label}</h2>
      </div>
      <label className="search-box">
        <span>Search</span>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search concepts, outputs, formulas, models..."
        />
      </label>
    </header>
  )
}
