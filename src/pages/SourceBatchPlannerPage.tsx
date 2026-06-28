import { useMemo, useState } from 'react'
import { sourceReviewBatches, sourceReviewBatchSummary } from '../data/sourceReviewBatches'
import type { SourceReviewBatch } from '../types/sourceBatch'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface SourceBatchPlannerPageProps { focusId?: string | null }
const allValue = 'All'
const priorityOptions = [allValue, ...Array.from(new Set(sourceReviewBatches.map((batch) => batch.priority))).sort()]
const statusOptions = [allValue, ...Array.from(new Set(sourceReviewBatches.map((batch) => batch.status))).sort()]

export function SourceBatchPlannerPage({ focusId }: SourceBatchPlannerPageProps) {
  const [priority, setPriority] = useState(allValue)
  const [status, setStatus] = useState(allValue)
  const [query, setQuery] = useState('')
  const batches = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sourceReviewBatches.filter((batch) => priority === allValue || batch.priority === priority).filter((batch) => status === allValue || batch.status === status).filter((batch) => !q || [batch.title, batch.sourcePackId, batch.priority, batch.status, batch.objective, ...batch.inputRequirements, ...batch.evidenceTargets, ...batch.coverageTargets, ...batch.decisionTargets, ...batch.reviewSteps, ...batch.expectedUpgradeDecisions, batch.nextAction].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : priorityRank(a.priority) - priorityRank(b.priority) || a.title.localeCompare(b.title)))
  }, [focusId, priority, query, status])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused review batch</div>}<div className="hero-panel source-batch-hero"><div><span className="eyebrow">Sprint 2.17 · Source Review Batch Planner</span><h1>Turn source packs into concrete review batches.</h1><p>This planner defines batch order, evidence targets, coverage records and upgrade decisions for each review cycle.</p></div><div className="source-batch-score-card"><span className="eyebrow">Review Batches</span><strong>{sourceReviewBatchSummary.total}</strong><p>{sourceReviewBatchSummary.decisionTargets} decision targets</p><div className="inventory-mini-stats"><span>{sourceReviewBatchSummary.p0} P0</span><span>{sourceReviewBatchSummary.p1} P1</span><span>{sourceReviewBatchSummary.waiting} waiting</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">Batch Logic</span><h2>Review in priority order</h2><KnowledgeChain nodes={['Source Pack', 'Review Batch', 'Evidence Targets', 'Coverage Targets', 'Decision Targets', 'Upgrade Queue']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Batch Filters</span><h2>{batches.length} of {sourceReviewBatches.length} batches visible</h2></div><button className="text-button" onClick={() => { setPriority(allValue); setStatus(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search batches, targets, steps or upgrade decisions..." /><div className="library-filter-grid"><BatchSelect label="Priority" value={priority} values={priorityOptions} onChange={setPriority} /><BatchSelect label="Status" value={status} values={statusOptions} onChange={setStatus} /></div></section><section className="manual-panel"><span className="eyebrow">Batch Plan</span><h2>Evidence review batches</h2><div className="source-batch-grid">{batches.map((batch) => <BatchCard key={batch.id} batch={batch} focused={batch.id === focusId} />)}</div></section></section>
}

function BatchCard({ batch, focused }: { batch: SourceReviewBatch; focused: boolean }) {
  return <article className={`source-batch-card ${focused ? 'focused-result-card' : ''}`}><div className="source-batch-card-top"><span className="eyebrow">{batch.sourcePackId} · {batch.status}</span><span className={`source-batch-priority priority-${batch.priority.toLowerCase()}`}>{batch.priority}</span></div><h3>{batch.title}</h3><p>{batch.objective}</p><h4>Input requirements</h4><BadgeList items={batch.inputRequirements} tone="blue" /><h4>Evidence targets</h4><BadgeList items={batch.evidenceTargets.length ? batch.evidenceTargets : ['No direct evidence record yet']} tone="green" /><h4>Coverage targets</h4><BadgeList items={batch.coverageTargets.length ? batch.coverageTargets : ['No coverage target yet']} tone="purple" /><h4>Decision targets</h4><BadgeList items={batch.decisionTargets.length ? batch.decisionTargets : ['No decision target yet']} tone="amber" /><h4>Review steps</h4><KnowledgeChain nodes={batch.reviewSteps} /><h4>Expected upgrade decisions</h4><BadgeList items={batch.expectedUpgradeDecisions} tone="blue" /><div className="mini-result good">Next action: {batch.nextAction}</div></article>
}

function BatchSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}

function priorityRank(priority: SourceReviewBatch['priority']) {
  if (priority === 'P0') return 1
  if (priority === 'P1') return 2
  return 3
}
