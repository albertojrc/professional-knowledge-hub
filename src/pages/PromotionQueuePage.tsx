import { useMemo, useState } from 'react'
import { promotionQueueItems, promotionQueueSummary } from '../data/promotionQueue'
import type { PromotionQueueItem } from '../types/promotionQueue'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface PromotionQueuePageProps { focusId?: string | null }
const allValue = 'All'
const statusOptions = [allValue, ...Array.from(new Set(promotionQueueItems.map((item) => item.status))).sort()]
const targetOptions = [allValue, ...Array.from(new Set(promotionQueueItems.map((item) => item.targetType))).sort()]

export function PromotionQueuePage({ focusId }: PromotionQueuePageProps) {
  const [status, setStatus] = useState(allValue)
  const [targetType, setTargetType] = useState(allValue)
  const [query, setQuery] = useState('')
  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return promotionQueueItems.filter((item) => status === allValue || item.status === status).filter((item) => targetType === allValue || item.targetType === targetType).filter((item) => !q || [item.title, item.reviewResultId, item.status, item.risk, item.targetType, ...item.targetObjects, ...item.proposedUpdates, item.requiredDecision, ...item.blockers, ...item.validationChecklist, ...item.applySequence, item.nextAction].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : riskRank(b.risk) - riskRank(a.risk) || a.title.localeCompare(b.title)))
  }, [focusId, query, status, targetType])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused promotion queue item</div>}<div className="hero-panel promotion-queue-hero"><div><span className="eyebrow">Sprint 2.20 · Evidence-to-Asset Promotion Queue</span><h1>Turn reviewed evidence into controlled Hub update proposals.</h1><p>The queue proposes updates for assets, outputs, formulas, cases, graph links and coverage records without bypassing the Decision Board.</p></div><div className="promotion-queue-score-card"><span className="eyebrow">Promotion Queue</span><strong>{promotionQueueSummary.total}</strong><p>{promotionQueueSummary.blocked} blocked · {promotionQueueSummary.waitingForDecision} waiting</p><div className="inventory-mini-stats"><span>{promotionQueueSummary.readyToApply} ready</span><span>{promotionQueueSummary.highRisk} high risk</span></div></div></div><section className="manual-panel result-bad"><span className="eyebrow">Governance Rule</span><h2>No promotion applies without decision approval</h2><KnowledgeChain nodes={['Review Result', 'Promotion Proposal', 'Validation Checklist', 'Decision Board', 'Controlled Hub Update']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Queue Filters</span><h2>{items.length} of {promotionQueueItems.length} proposals visible</h2></div><button className="text-button" onClick={() => { setStatus(allValue); setTargetType(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search targets, blockers, proposed updates or validation checklist..." /><div className="library-filter-grid"><QueueSelect label="Status" value={status} values={statusOptions} onChange={setStatus} /><QueueSelect label="Target type" value={targetType} values={targetOptions} onChange={setTargetType} /></div></section><section className="manual-panel"><span className="eyebrow">Promotion Proposals</span><h2>Controlled update queue</h2><div className="promotion-queue-grid">{items.map((item) => <PromotionCard key={item.id} item={item} focused={item.id === focusId} />)}</div></section></section>
}

function PromotionCard({ item, focused }: { item: PromotionQueueItem; focused: boolean }) {
  return <article className={`promotion-queue-card ${focused ? 'focused-result-card' : ''}`}><div className="promotion-queue-card-top"><span className="eyebrow">{item.targetType} · {item.reviewResultId}</span><span className={`promotion-status-pill status-${item.status.toLowerCase().replaceAll(' ', '-')}`}>{item.status}</span></div><h3>{item.title}</h3><div className={`mini-result ${item.risk === 'High' ? 'warning' : 'good'}`}>Risk: {item.risk}</div><h4>Target objects</h4><BadgeList items={item.targetObjects} tone="purple" /><h4>Proposed updates</h4><ul>{item.proposedUpdates.map((update) => <li key={update}>{update}</li>)}</ul><h4>Required decision</h4><p>{item.requiredDecision}</p><h4>Blockers</h4><BadgeList items={item.blockers.length ? item.blockers : ['No blocker']} tone="amber" /><h4>Validation checklist</h4><ul>{item.validationChecklist.map((point) => <li key={point}>{point}</li>)}</ul><h4>Apply sequence</h4><KnowledgeChain nodes={item.applySequence} /><div className="mini-result good">Next action: {item.nextAction}</div></article>
}

function QueueSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}

function riskRank(risk: PromotionQueueItem['risk']) {
  if (risk === 'High') return 3
  if (risk === 'Medium') return 2
  return 1
}
