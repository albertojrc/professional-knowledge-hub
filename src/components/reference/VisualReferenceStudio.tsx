import { useMemo, useState } from 'react'
import { BadgeList } from '../ui/BadgeList'
import { KnowledgeChain } from '../knowledge/KnowledgeChain'

export interface VisualReferenceItem {
  id: string
  title: string
  eyebrow: string
  summary: string
  primary: string
  secondary?: string
  good?: string
  bad?: string
  decision?: string
  tags: string[]
  workflow?: string[]
  code?: string
  sections?: { title: string; items: string[] }[]
}

interface VisualReferenceStudioProps {
  title: string
  eyebrow: string
  icon: string
  description: string
  items: VisualReferenceItem[]
  focusId?: string | null
  emptyText?: string
}

export function VisualReferenceStudio({ title, eyebrow, icon, description, items, focusId, emptyText = 'No reference items found.' }: VisualReferenceStudioProps) {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(focusId ?? null)
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => !q || `${item.title} ${item.eyebrow} ${item.summary} ${item.primary} ${item.secondary ?? ''} ${item.tags.join(' ')}`.toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.eyebrow.localeCompare(b.eyebrow) || a.title.localeCompare(b.title)))
  }, [focusId, items, query])
  const selected = visible.find((item) => item.id === selectedId) ?? visible.find((item) => item.id === focusId) ?? visible[0]
  return <section className="concept-learning-page visual-reference-page">{focusId && <div className="deep-link-banner">Opened from Global Search · focused reference</div>}<div className="lesson-toolbar visual-reference-toolbar"><span className="text-button">{eyebrow}</span><div className="lesson-breadcrumb"><span>Professional Knowledge Hub</span><b>›</b><span>Reference Studio</span><b>›</b><strong>{title}</strong></div><div className="lesson-progress"><span>Visible</span><div><i style={{ width: `${Math.min(100, visible.length)}%` }} /></div><strong>{visible.length}</strong></div></div><div className="concept-two-pane visual-reference-grid"><article className="concept-main lesson-paper visual-reference-main"><header className="concept-hero lesson-hero visual-reference-hero"><span className="asset-icon large">{icon}</span><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p><input className="library-search-input visual-reference-input" value={query} onChange={(event) => { setQuery(event.target.value); setSelectedId(null) }} placeholder="Search this reference studio..." /></div></header><section className="visual-reference-results"><div className="library-filter-header"><div><span className="eyebrow">Reference Capsules</span><h2>{visible.length} items available</h2></div><button className="text-button" onClick={() => { setQuery(''); setSelectedId(null) }} type="button">Reset</button></div>{visible.length === 0 && <div className="module-capsule-empty"><strong>{emptyText}</strong><p>Try a broader term or reset the search.</p></div>}<div className="visual-reference-card-grid">{visible.map((item) => <button className={`visual-reference-card ${selected?.id === item.id ? 'selected' : ''}`} key={item.id} onClick={() => setSelectedId(item.id)} type="button"><span className="eyebrow">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.summary}</p><div className="search-result-meta"><span>{item.tags[0] ?? 'Reference'}</span><span>Preview</span></div></button>)}</div></section></article><aside className="concept-output-panel visual-reference-side">{selected ? <VisualReferenceDetail item={selected} /> : <div className="output-panel-card"><span className="eyebrow">No selection</span><h2>Select a reference capsule.</h2></div>}</aside></div></section>
}

function VisualReferenceDetail({ item }: { item: VisualReferenceItem }) {
  return <><div className="output-panel-card progress-panel"><span className="eyebrow">Selected Reference</span><h2>{item.title}</h2><p>{item.summary}</p><BadgeList items={item.tags.slice(0, 10)} tone="blue" /></div><div className="output-panel-card"><span className="eyebrow">Professional Meaning</span><h3>{item.primary}</h3>{item.secondary && <p>{item.secondary}</p>}{item.code && <pre className="code-block compact">{item.code}</pre>}</div>{item.workflow?.length ? <div className="output-panel-card"><span className="eyebrow">Workflow</span><KnowledgeChain nodes={item.workflow} /></div> : null}<div className="output-panel-card success-panel"><h3>Interpretation checklist</h3><ul><li>What question does this answer?</li><li>What output or metric does it create?</li><li>What decision does it support?</li></ul></div>{item.good || item.bad ? <div className="output-panel-card"><h3>Quality signals</h3>{item.good && <p><strong>Good:</strong> {item.good}</p>}{item.bad && <p><strong>Bad:</strong> {item.bad}</p>}</div> : null}{item.decision && <div className="output-panel-card source-panel"><h3>Decision impact</h3><p>{item.decision}</p></div>}{item.sections?.map((section) => <div className="output-panel-card" key={section.title}><h3>{section.title}</h3><BadgeList items={section.items} tone="purple" /></div>)}</>
}
