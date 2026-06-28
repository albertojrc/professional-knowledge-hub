import { useMemo, useState } from 'react'
import { sourcePackItems, sourcePackSummary } from '../data/sourcePackGuide'
import type { SourcePackItem } from '../types/sourcePack'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface SourcePackGuidePageProps { focusId?: string | null }
const allValue = 'All'
const priorityOptions = [allValue, ...Array.from(new Set(sourcePackItems.map((item) => item.priority))).sort()]

export function SourcePackGuidePage({ focusId }: SourcePackGuidePageProps) {
  const [priority, setPriority] = useState(allValue)
  const [query, setQuery] = useState('')
  const packs = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sourcePackItems.filter((item) => priority === allValue || item.priority === priority).filter((item) => !q || [item.title, item.priority, item.status, ...item.recommendedFiles, ...item.acceptedFormats, ...item.evidenceChecklist, ...item.unlocks, ...item.uploadOrder, item.reviewOutcome].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : priorityRank(a.priority) - priorityRank(b.priority) || a.title.localeCompare(b.title)))
  }, [focusId, priority, query])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused source pack</div>}<div className="hero-panel source-pack-hero"><div><span className="eyebrow">Sprint 2.16 · Source Pack Upload Guide</span><h1>Upload course files in the order that unlocks the most Hub value.</h1><p>This guide tells you which files to upload first, what formats work and what evidence each pack must contain.</p></div><div className="source-pack-score-card"><span className="eyebrow">Upload Packs</span><strong>{sourcePackSummary.total}</strong><p>{sourcePackSummary.unlockCount} Hub objects can be unlocked</p><div className="inventory-mini-stats"><span>{sourcePackSummary.p0} P0</span><span>{sourcePackSummary.p1} P1</span><span>{sourcePackSummary.notUploaded} missing</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">Upload Strategy</span><h2>Prioritize P0 packs first</h2><KnowledgeChain nodes={['Upload Pack', 'Capture Metadata', 'Extract Evidence', 'Update Coverage', 'Decision Board', 'Source-backed Upgrade']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Pack Filters</span><h2>{packs.length} of {sourcePackItems.length} packs visible</h2></div><button className="text-button" onClick={() => { setPriority(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search files, formats, evidence or unlocked assets..." /><div className="library-filter-grid"><PackSelect label="Priority" value={priority} values={priorityOptions} onChange={setPriority} /></div></section><section className="manual-panel"><span className="eyebrow">Upload Packs</span><h2>What to upload and what each pack unlocks</h2><div className="source-pack-grid">{packs.map((pack) => <PackCard key={pack.id} pack={pack} focused={pack.id === focusId} />)}</div></section></section>
}

function PackCard({ pack, focused }: { pack: SourcePackItem; focused: boolean }) {
  return <article className={`source-pack-card ${focused ? 'focused-result-card' : ''}`}><div className="source-pack-card-top"><span className="eyebrow">{pack.status}</span><span className={`source-pack-priority priority-${pack.priority.toLowerCase()}`}>{pack.priority}</span></div><h3>{pack.title}</h3><h4>Recommended files</h4><BadgeList items={pack.recommendedFiles} tone="blue" /><h4>Accepted formats</h4><BadgeList items={pack.acceptedFormats} tone="green" /><h4>Evidence checklist</h4><ul>{pack.evidenceChecklist.map((item) => <li key={item}>{item}</li>)}</ul><h4>Unlocks</h4><BadgeList items={pack.unlocks} tone="purple" /><h4>Upload order</h4><KnowledgeChain nodes={pack.uploadOrder} /><div className="mini-result good">Review outcome: {pack.reviewOutcome}</div></article>
}

function PackSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}

function priorityRank(priority: SourcePackItem['priority']) {
  if (priority === 'P0') return 1
  if (priority === 'P1') return 2
  return 3
}
