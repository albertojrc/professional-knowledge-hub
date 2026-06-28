import { useMemo, useState } from 'react'
import { sourceReviewItems, sourceReviewSummary, sourceReviewTemplateSteps } from '../data/sourceReviewPrep'
import type { ReviewPriority, SourceReviewItem } from '../types/sourceReview'
import { BadgeList } from '../components/ui/BadgeList'

interface SourceReviewPrepPageProps { focusId?: string | null }

const allValue = 'All'
const priorityOptions = [allValue, ...Array.from(new Set(sourceReviewItems.map((item) => item.priority))).sort()]
const statusOptions = [allValue, ...Array.from(new Set(sourceReviewItems.map((item) => item.status))).sort()]
const typeOptions = [allValue, ...Array.from(new Set(sourceReviewItems.map((item) => item.sourceType))).sort()]

export function SourceReviewPrepPage({ focusId }: SourceReviewPrepPageProps) {
  const [priority, setPriority] = useState(allValue)
  const [status, setStatus] = useState(allValue)
  const [sourceType, setSourceType] = useState(allValue)
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sourceReviewItems
      .filter((item) => priority === allValue || item.priority === priority)
      .filter((item) => status === allValue || item.status === status)
      .filter((item) => sourceType === allValue || item.sourceType === sourceType)
      .filter((item) => !q || [item.title, item.sourceType, item.sourceLocation, item.priority, item.status, ...item.expectedPrograms, ...item.expectedModules, ...item.targetAreas, ...item.targetAssets, ...item.targetOutputs, ...item.targetCases, ...item.reviewQuestions, item.nextAction].join(' ').toLowerCase().includes(q))
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : priorityRank(b.priority) - priorityRank(a.priority) || a.title.localeCompare(b.title)))
  }, [focusId, priority, query, sourceType, status])

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Global Search · focused source review item</div>}
      <div className="hero-panel source-review-hero">
        <div><span className="eyebrow">Sprint 2.9 · Source Review Prep</span><h1>Prepare real materials for evidence extraction.</h1><p>This queue defines what to review first, what metadata to capture and which Hub objects can be upgraded after review.</p></div>
        <div className="source-review-score-card"><span className="eyebrow">Review Queue</span><strong>{sourceReviewSummary.totalItems}</strong><p>sources prepared</p><div className="inventory-mini-stats"><span>{sourceReviewSummary.criticalItems} critical</span><span>{sourceReviewSummary.highPriorityItems} high</span><span>{sourceReviewSummary.mappedTargets} targets</span></div></div>
      </div>

      <section className="source-review-stats"><article><span>Critical</span><strong>{sourceReviewSummary.criticalItems}</strong></article><article><span>High priority</span><strong>{sourceReviewSummary.highPriorityItems}</strong></article><article><span>Not reviewed</span><strong>{sourceReviewSummary.notReviewed}</strong></article><article><span>Mapped targets</span><strong>{sourceReviewSummary.mappedTargets}</strong></article></section>

      <section className="manual-panel result-impact"><span className="eyebrow">Purpose</span><h2>Prepare before claiming evidence</h2><p>This page does not say material has been reviewed. It creates the checklist for turning real files into source-backed knowledge.</p></section>

      <section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Review Filters</span><h2>{filteredItems.length} of {sourceReviewItems.length} items visible</h2></div><button className="text-button" onClick={() => { setPriority(allValue); setStatus(allValue); setSourceType(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search source items, targets, questions or modules..." /><div className="library-filter-grid"><ReviewSelect label="Priority" value={priority} values={priorityOptions} onChange={setPriority} /><ReviewSelect label="Status" value={status} values={statusOptions} onChange={setStatus} /><ReviewSelect label="Source type" value={sourceType} values={typeOptions} onChange={setSourceType} /></div></section>

      <section className="manual-panel"><span className="eyebrow">Source Review Queue</span><h2>What to review and why</h2><div className="source-review-grid">{filteredItems.map((item) => <SourceReviewCard key={item.id} item={item} focused={item.id === focusId} />)}</div></section>

      <section className="manual-panel"><span className="eyebrow">Review Template</span><h2>How each material should be reviewed</h2><div className="review-template-grid">{sourceReviewTemplateSteps.map((step, index) => <article className="review-template-card" key={step.id}><span className="section-number">{index + 1}</span><h3>{step.title}</h3><p>{step.purpose}</p><BadgeList items={step.checklist} tone="blue" /><div className="mini-result good">Output: {step.output}</div></article>)}</div></section>
    </section>
  )
}

function SourceReviewCard({ item, focused }: { item: SourceReviewItem; focused: boolean }) {
  return (
    <article className={`source-review-card ${focused ? 'focused-result-card' : ''}`}>
      <div className="source-review-card-top"><span className="eyebrow">{item.sourceType} · {item.sourceLocation}</span><span className={`review-priority-pill priority-${item.priority.toLowerCase()}`}>{item.priority}</span></div>
      <h3>{item.title}</h3>
      <div className="material-meta-row"><span>{item.status}</span><span>{item.expectedPrograms.join(' · ')}</span></div>
      <h4>Expected modules</h4><BadgeList items={item.expectedModules} tone="purple" />
      <h4>Target assets</h4><BadgeList items={item.targetAssets} tone="blue" />
      <h4>Target outputs / cases</h4><BadgeList items={[...item.targetOutputs, ...item.targetCases]} tone="green" />
      <details open><summary>Review questions</summary><ul>{item.reviewQuestions.map((question) => <li key={question}>{question}</li>)}</ul></details>
      <div className="mini-result good">Next action: {item.nextAction}</div>
    </article>
  )
}

function ReviewSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}

function priorityRank(priority: ReviewPriority) {
  if (priority === 'Critical') return 4
  if (priority === 'High') return 3
  if (priority === 'Medium') return 2
  return 1
}
