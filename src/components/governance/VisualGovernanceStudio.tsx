import { useMemo, useState } from 'react'
import { BadgeList } from '../ui/BadgeList'
import { KnowledgeChain } from '../knowledge/KnowledgeChain'

export interface VisualGovernanceItem {
  id: string
  title: string
  eyebrow: string
  status: string
  severity?: string
  summary: string
  decision: string
  nextAction: string
  workflow?: string[]
  tags: string[]
  sections: { title: string; items: string[]; tone?: 'blue' | 'purple' | 'green' | 'amber' | 'red' }[]
}

interface VisualGovernanceStudioProps {
  title: string
  sprint: string
  icon: string
  description: string
  rule: string
  flowTitle: string
  flow: string[]
  items: VisualGovernanceItem[]
  focusId?: string | null
}

export function VisualGovernanceStudio({ title, sprint, icon, description, rule, flowTitle, flow, items, focusId }: VisualGovernanceStudioProps) {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(focusId ?? null)
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => !q || `${item.title} ${item.eyebrow} ${item.status} ${item.severity ?? ''} ${item.summary} ${item.decision} ${item.nextAction} ${item.tags.join(' ')} ${item.sections.flatMap((x) => x.items).join(' ')}`.toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.status.localeCompare(b.status) || a.title.localeCompare(b.title)))
  }, [focusId, items, query])
  const selected = visible.find((item) => item.id === selectedId) ?? visible.find((item) => item.id === focusId) ?? visible[0]
  return <section className="concept-learning-page visual-reference-page governance-studio-page">{focusId && <div className="deep-link-banner">Opened from Search · focused governance item</div>}<div className="lesson-toolbar visual-reference-toolbar"><span className="text-button">{sprint}</span><div className="lesson-breadcrumb"><span>Professional Knowledge Hub</span><b>›</b><span>Governance Studio</span><b>›</b><strong>{title}</strong></div><div className="lesson-progress"><span>Visible</span><div><i style={{ width: `${Math.min(100, visible.length)}%` }} /></div><strong>{visible.length}</strong></div></div><div className="concept-two-pane visual-reference-grid"><article className="concept-main lesson-paper visual-reference-main"><header className="concept-hero lesson-hero visual-reference-hero"><span className="asset-icon large">{icon}</span><div><span className="eyebrow">{sprint}</span><h1>{title}</h1><p>{description}</p><input className="library-search-input visual-reference-input" value={query} onChange={(event) => { setQuery(event.target.value); setSelectedId(null) }} placeholder="Search this governance studio..." /></div></header><section className="lesson-block warning-block"><div className="lesson-block-title"><span>!</span><h2>Governance rule</h2></div><p>{rule}</p></section><section className="lesson-block output-learning-block"><div className="lesson-block-title"><span>1</span><h2>{flowTitle}</h2></div><KnowledgeChain nodes={flow} /></section><section className="visual-reference-results"><div className="library-filter-header"><div><span className="eyebrow">Governance Capsules</span><h2>{visible.length} items available</h2></div><button className="text-button" onClick={() => { setQuery(''); setSelectedId(null) }} type="button">Reset</button></div><div className="visual-reference-card-grid">{visible.map((item) => <button className={`visual-reference-card ${selected?.id === item.id ? 'selected' : ''}`} key={item.id} onClick={() => setSelectedId(item.id)} type="button"><span className="eyebrow">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.summary}</p><div className="search-result-meta"><span>{item.status}</span><span>{item.severity ?? 'Governance'}</span><span>Preview</span></div></button>)}</div></section></article><aside className="concept-output-panel visual-reference-side">{selected && <GovernanceDetail item={selected} />}</aside></div></section>
}

function GovernanceDetail({ item }: { item: VisualGovernanceItem }) {
  return <><div className="output-panel-card progress-panel"><span className="eyebrow">Selected Governance Item</span><h2>{item.title}</h2><p>{item.summary}</p><BadgeList items={[item.status, item.severity ?? 'Governance', ...item.tags.slice(0, 8)]} tone="blue" /></div><div className="output-panel-card success-panel"><h3>Decision impact</h3><p>{item.decision}</p></div>{item.workflow?.length ? <div className="output-panel-card"><span className="eyebrow">Workflow</span><KnowledgeChain nodes={item.workflow} /></div> : null}<div className="output-panel-card"><h3>Next action</h3><KnowledgeChain nodes={[item.nextAction]} /></div><div className="output-panel-card"><h3>Interpretation checklist</h3><ul><li>Is the owner clear?</li><li>Is the evidence sufficient?</li><li>Does this create a decision or just a note?</li><li>What must be monitored after action?</li></ul></div>{item.sections.map((section) => <div className="output-panel-card" key={section.title}><h3>{section.title}</h3><BadgeList items={section.items} tone={section.tone ?? 'purple'} /></div>)}</>
}
