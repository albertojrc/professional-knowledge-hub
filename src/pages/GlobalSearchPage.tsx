import { searchAreas, searchCategories, searchKinds, searchKnowledge, type SearchResultItem } from '../data/searchIndex'
import type { ViewId } from '../types/knowledge'

interface GlobalSearchPageProps {
  query: string
  onQueryChange: (query: string) => void
  onNavigate: (view: ViewId) => void
  onOpenAsset: (assetId: string) => void
}

export function GlobalSearchPage({ query, onQueryChange, onNavigate, onOpenAsset }: GlobalSearchPageProps) {
  const [kind, area, category] = getFiltersFromQuery(query)
  const cleanQuery = query.replace(/kind:[^ ]+/g, '').replace(/area:[^ ]+/g, '').replace(/category:[^ ]+/g, '').trim()
  const results = searchKnowledge(cleanQuery, { kind, area, category })

  const updateFilter = (key: 'kind' | 'area' | 'category', value: string) => {
    const next = { kind, area, category, [key]: value }
    const filterText = [next.kind !== 'All' ? `kind:${next.kind}` : '', next.area !== 'All' ? `area:${next.area}` : '', next.category !== 'All' ? `category:${next.category}` : ''].filter(Boolean).join(' ')
    onQueryChange(`${cleanQuery} ${filterText}`.trim())
  }

  const openResult = (item: SearchResultItem) => {
    if (item.assetId) {
      onOpenAsset(item.assetId)
      return
    }
    onNavigate(item.targetView)
  }

  return (
    <section className="page-stack">
      <div className="hero-panel search-hero">
        <span className="eyebrow">Sprint 1.4 · Global Search</span>
        <h1>Search across concepts, outputs, formulas, models, cases and backlog items.</h1>
        <p>Use this as the command center for your second brain. Search by title, metric, assumption, graph, business use, banking use or related concept.</p>
        <input className="global-search-input" value={cleanQuery} onChange={(event) => onQueryChange(event.target.value)} placeholder="Try: calibration, WACC, residuals, credit risk, Porter, RMSE..." />
      </div>

      <section className="manual-panel search-filter-panel">
        <span className="eyebrow">Filters</span>
        <div className="search-filters">
          <FilterSelect label="Kind" value={kind} values={searchKinds} onChange={(value) => updateFilter('kind', value)} />
          <FilterSelect label="Area" value={area} values={searchAreas} onChange={(value) => updateFilter('area', value)} />
          <FilterSelect label="Category" value={category} values={searchCategories} onChange={(value) => updateFilter('category', value)} />
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Results</span>
        <h2>{results.length} results found</h2>
        <div className="search-result-grid">
          {results.map((item) => (
            <button className="search-result-card" key={`${item.kind}-${item.id}`} onClick={() => openResult(item)} type="button">
              <div>
                <span className="eyebrow">{item.kind}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <div className="search-result-meta">
                <span>{item.area}</span>
                <span>{item.category}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </section>
  )
}

function FilterSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return (
    <label className="filter-select">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {values.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </label>
  )
}

function getFiltersFromQuery(query: string) {
  const kind = query.match(/kind:([^ ]+)/)?.[1] ?? 'All'
  const area = query.match(/area:([^ ]+)/)?.[1] ?? 'All'
  const category = query.match(/category:([^ ]+)/)?.[1] ?? 'All'
  return [kind, area, category]
}
