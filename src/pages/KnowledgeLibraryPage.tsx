import { useMemo, useState } from 'react'
import type { KnowledgeAsset } from '../types/knowledgeAsset'
import type { AssetProgressStatus } from '../types/learningProgress'
import { assetProgressStatuses } from '../types/learningProgress'
import { knowledgeAssetRegistry } from '../data/knowledgeAssetRegistry'
import { BadgeList } from '../components/ui/BadgeList'
import { AssetProgressControl } from '../components/ui/AssetProgressControl'

interface AssetProgressApi {
  summary: { mastered: number; reviewed: number; studying: number; averageProgress: number }
  getAssetStatus: (assetId: string) => AssetProgressStatus
  setAssetStatus: (assetId: string, status: AssetProgressStatus) => void
}

interface KnowledgeLibraryPageProps {
  onOpenAsset: (assetId: string) => void
  assetProgress: AssetProgressApi
}

const allValue = 'All'
const areas = ['Data Science', 'Banking', 'Finance', 'Management']
const areaOptions = [allValue, ...areas]
const typeOptions = [allValue, ...Array.from(new Set(knowledgeAssetRegistry.map((asset) => asset.type))).sort()]
const difficultyOptions = [allValue, ...Array.from(new Set(knowledgeAssetRegistry.map((asset) => asset.difficulty))).sort()]
const categoryOptions = [allValue, ...Array.from(new Set(knowledgeAssetRegistry.map((asset) => asset.category))).sort()]
const statusOptions = [allValue, ...assetProgressStatuses]

export function KnowledgeLibraryPage({ onOpenAsset, assetProgress }: KnowledgeLibraryPageProps) {
  const [query, setQuery] = useState('')
  const [area, setArea] = useState(allValue)
  const [type, setType] = useState(allValue)
  const [difficulty, setDifficulty] = useState(allValue)
  const [category, setCategory] = useState(allValue)
  const [status, setStatus] = useState(allValue)

  const filteredAssets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return knowledgeAssetRegistry
      .filter((asset) => area === allValue || asset.area === area)
      .filter((asset) => type === allValue || asset.type === type)
      .filter((asset) => difficulty === allValue || asset.difficulty === difficulty)
      .filter((asset) => category === allValue || asset.category === category)
      .filter((asset) => status === allValue || assetProgress.getAssetStatus(asset.id) === status)
      .filter((asset) => {
        if (!normalizedQuery) return true
        const haystack = [asset.title, asset.type, asset.area, asset.category, asset.difficulty, asset.summary, asset.whatItIs, asset.whyItMatters, ...asset.metrics, ...asset.outputs, ...asset.graphs, ...asset.businessApplications, ...asset.bankingApplications, ...asset.relatedAssets].join(' ').toLowerCase()
        return haystack.includes(normalizedQuery)
      })
      .sort((a, b) => a.area.localeCompare(b.area) || a.category.localeCompare(b.category) || a.title.localeCompare(b.title))
  }, [area, assetProgress, category, difficulty, query, status, type])

  const clearFilters = () => {
    setQuery('')
    setArea(allValue)
    setType(allValue)
    setDifficulty(allValue)
    setCategory(allValue)
    setStatus(allValue)
  }

  return (
    <section className="page-stack">
      <div className="hero-panel academy-hero library-hero">
        <span className="eyebrow">Professional Knowledge Library</span>
        <h1>One connected library for business, data science and banking knowledge.</h1>
        <p>Every concept is stored as a reusable knowledge asset with explanation, interpretation, outputs, business applications, banking applications and related concepts.</p>
        <div className="badge-list">
          <button className="primary-button" onClick={() => onOpenAsset('linear-regression')} type="button">Open Linear Regression</button>
          <button className="primary-button" onClick={() => onOpenAsset('xgboost')} type="button">Open XGBoost</button>
          <button className="primary-button" onClick={() => onOpenAsset('expected-loss')} type="button">Open Expected Loss</button>
        </div>
      </div>

      <section className="manual-panel learning-progress-summary">
        <span className="eyebrow">Learning Progress</span>
        <h2>Your professional study status</h2>
        <div className="progress-summary-grid">
          <div><strong>{assetProgress.summary.averageProgress}%</strong><span>average progress</span></div>
          <div><strong>{assetProgress.summary.studying}</strong><span>studying</span></div>
          <div><strong>{assetProgress.summary.reviewed}</strong><span>reviewed</span></div>
          <div><strong>{assetProgress.summary.mastered}</strong><span>mastered</span></div>
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Core Areas</span>
        <h2>Explore knowledge by professional area</h2>
        <div className="academy-area-grid">
          {areas.map((areaName) => {
            const count = knowledgeAssetRegistry.filter((asset) => asset.area === areaName).length
            return (
              <button className={`academy-area-card library-area-filter ${area === areaName ? 'active' : ''}`} key={areaName} onClick={() => setArea(areaName)} type="button">
                <strong>{areaName}</strong>
                <span>{count} assets</span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="manual-panel library-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Library Filters</span><h2>{filteredAssets.length} of {knowledgeAssetRegistry.length} assets visible</h2></div>
          <button className="text-button" onClick={clearFilters} type="button">Clear filters</button>
        </div>

        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search inside the library: XGBoost, PD, WACC, calibration, strategy..." />

        <div className="library-filter-grid five">
          <LibrarySelect label="Area" value={area} values={areaOptions} onChange={setArea} />
          <LibrarySelect label="Type" value={type} values={typeOptions} onChange={setType} />
          <LibrarySelect label="Difficulty" value={difficulty} values={difficultyOptions} onChange={setDifficulty} />
          <LibrarySelect label="Category" value={category} values={categoryOptions} onChange={setCategory} />
          <LibrarySelect label="Progress" value={status} values={statusOptions} onChange={setStatus} />
        </div>

        <div className="active-filter-row">
          {[area, type, difficulty, category, status].filter((item) => item !== allValue).map((item) => <span className="badge badge-blue" key={item}>{item}</span>)}
          {query && <span className="badge badge-purple">Search: {query}</span>}
          {!query && [area, type, difficulty, category, status].every((item) => item === allValue) && <span className="badge badge-green">Showing full library</span>}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Knowledge Assets</span>
        <h2>Reusable professional concepts</h2>
        {filteredAssets.length > 0 ? (
          <div className="asset-grid">
            {filteredAssets.map((asset) => (
              <AssetCard asset={asset} key={asset.id} onOpen={() => onOpenAsset(asset.id)} status={assetProgress.getAssetStatus(asset.id)} onStatusChange={(nextStatus) => assetProgress.setAssetStatus(asset.id, nextStatus)} />
            ))}
          </div>
        ) : (
          <div className="empty-library-state"><h3>No assets found</h3><p>Try removing a filter or searching for a broader term.</p><button className="primary-button" onClick={clearFilters} type="button">Reset library</button></div>
        )}
      </section>
    </section>
  )
}

function LibrarySelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return (
    <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
  )
}

function AssetCard({ asset, onOpen, status, onStatusChange }: { asset: KnowledgeAsset; onOpen: () => void; status: AssetProgressStatus; onStatusChange: (status: AssetProgressStatus) => void }) {
  return (
    <article className="asset-card-shell">
      <button className="asset-card" onClick={onOpen} type="button">
        <span className="asset-icon">{asset.icon}</span>
        <span className="eyebrow">{asset.type} · {asset.difficulty}</span>
        <h3>{asset.title}</h3>
        <p>{asset.summary}</p>
        <BadgeList items={[asset.area, asset.category]} tone="blue" />
      </button>
      <AssetProgressControl status={status} onChange={onStatusChange} compact />
    </article>
  )
}
