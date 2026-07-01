import { useMemo, useState } from 'react'
import { globalSearchIndex, searchKinds, type SearchResultItem } from '../../data/searchIndex'
import type { ViewId } from '../../types/knowledge'
import { BadgeList } from '../ui/BadgeList'

interface ModuleSearchCapsulesProps {
  title: string
  eyebrow: string
  description: string
  areaHints?: string[]
  targetViews?: ViewId[]
  keywords?: string[]
  focusId?: string | null
  onNavigate?: (view: ViewId, focusId?: string | null) => void
  onOpenAsset?: (assetId: string) => void
}

const allValue = 'All'

export function ModuleSearchCapsules({ title, eyebrow, description, areaHints = [], targetViews = [], keywords = [], focusId, onNavigate, onOpenAsset }: ModuleSearchCapsulesProps) {
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState(allValue)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const moduleItems = useMemo(() => {
    const areaNeedles = areaHints.map((x) => x.toLowerCase())
    const keywordNeedles = keywords.map((x) => x.toLowerCase())
    return globalSearchIndex.filter((item) => {
      const areaMatch = areaNeedles.some((needle) => `${item.area} ${item.category}`.toLowerCase().includes(needle))
      const viewMatch = targetViews.includes(item.targetView)
      const text = `${item.title} ${item.kind} ${item.area} ${item.category} ${item.summary} ${item.tags.join(' ')}`.toLowerCase()
      const keywordMatch = keywordNeedles.some((needle) => text.includes(needle))
      return areaMatch || viewMatch || keywordMatch
    })
  }, [areaHints, keywords, targetViews])
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return moduleItems.filter((item) => kind === allValue || item.kind === kind).filter((item) => !q || `${item.title} ${item.kind} ${item.area} ${item.category} ${item.summary} ${item.tags.join(' ')}`.toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.title.localeCompare(b.title)))
  }, [focusId, kind, moduleItems, query])
  const selected = visible.find((item) => item.id === selectedId) ?? visible.find((item) => item.id === focusId) ?? visible[0]
  const kindOptions = [allValue, ...searchKinds.filter((candidate) => moduleItems.some((item) => item.kind === candidate))]
  const canOpen = false
  const openResult = (item: SearchResultItem) => { if (item.assetId && onOpenAsset) { onOpenAsset(item.assetId); return } ; if (onNavigate) onNavigate(item.targetView, item.id) }
  return <section className="manual-panel module-capsule-search"><div className="library-filter-header"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{description}</p></div><button className="text-button" onClick={() => { setQuery(''); setKind(allValue); setSelectedId(null) }} type="button">Clear</button></div><div className="module-capsule-toolbar"><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search inside this module using the real search index..." /><label className="library-select"><span>Capsule type</span><select value={kind} onChange={(event) => setKind(event.target.value)}>{kindOptions.map((item) => <option key={item} value={item}>{item}</option>)}</select></label></div><div className="module-capsule-layout"><div className="module-capsule-results"><span className="eyebrow">{visible.length} capsules from the search index</span>{visible.map((item) => <button className={`search-result-card module-search-card ${selected?.id === item.id ? 'selected' : ''}`} key={`${item.kind}-${item.id}`} onClick={() => setSelectedId(item.id)} type="button"><div><span className="eyebrow">{item.kind}</span><h3>{item.title}</h3><p>{item.summary}</p></div><div className="search-result-meta"><span>{item.area}</span><span>{item.category}</span><span>Select capsule</span></div></button>)}</div>{selected && <ModuleCapsuleDetail item={selected} canOpen={canOpen} onOpen={() => openResult(selected)} />}</div></section>
}

function ModuleCapsuleDetail({ item, canOpen, onOpen }: { item: SearchResultItem; canOpen: boolean; onOpen: () => void }) {
  return <article className="module-capsule-detail"><div className="command-detail-top"><span className="eyebrow">{item.kind}</span><span className="command-status-pill">{item.area}</span></div><h2>{item.title}</h2><p>{item.summary}</p><section className="lesson-block"><div className="lesson-block-title"><span>1</span><h3>Where this belongs</h3></div><BadgeList items={[item.area, item.category, item.kind]} tone="blue" /></section><section className="lesson-block"><div className="lesson-block-title"><span>2</span><h3>Search signals</h3></div><BadgeList items={item.tags.slice(0, 18)} tone="purple" /></section><section className="lesson-block insight-block"><div className="lesson-block-title"><span>→</span><h3>Full route</h3></div><p>This capsule comes from the same search index and shows its module, category, summary and signals inside the current module.</p>{canOpen && <button className="primary-button" onClick={onOpen} type="button">Open route</button>}</section></article>
}
