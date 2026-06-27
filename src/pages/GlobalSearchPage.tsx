import { useState } from 'react'
import { searchAreas, searchCategories, searchKinds, searchKnowledge, type SearchResultItem } from '../data/searchIndex'
import type { ViewId } from '../types/knowledge'

interface GlobalSearchPageProps {
  query: string
  onQueryChange: (query: string) => void
  onNavigate: (view: ViewId, focusId?: string | null) => void
  onOpenAsset: (assetId: string) => void
}

export function GlobalSearchPage({ query, onQueryChange, onNavigate, onOpenAsset }: GlobalSearchPageProps) {
  const [kind, setKind] = useState('All')
  const [area, setArea] = useState('All')
  const [category, setCategory] = useState('All')
  const results = searchKnowledge(query, { kind, area, category })

  const openResult = (item: SearchResultItem) => {
    if (item.assetId) {
      onOpenAsset(item.assetId)
      return
    }
    onNavigate(item.targetView, item.id)
  }

  return (
    <section className="page-stack">
      <div className="hero-panel search-hero">
        <span className="eyebrow">Sprint 1.5 · Deep Search</span>
        <h1>Search across concepts, outputs, formulas, models, cases and backlog items.</h1>
        <p>Results now open the exact asset, output, formula, model or backlog item whenever the destination supports deep linking.</p>
        <input className="global-search-input" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Try: calibration, WACC, residuals, credit risk, Porter, RMSE..." />
      </div>

      <section className="manual-panel search-filter-panel">
        <span className="eyebrow">Filters</span>
        <div className="search-filters">
          <FilterSelect label="Kind" value={kind} values={searchKinds} onChange={setKind} />
          <FilterSelect label="Area" value={area} values={searchAreas} onChange={setArea} />
          <FilterSelect label="Category" value={category} values={searchCategories} onChange={setCategory} />
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
                <span>Opens focused view</span>
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
