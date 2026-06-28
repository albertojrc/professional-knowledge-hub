import { useMemo, useState } from 'react'
import { academicReviewBatches, academicReviewSummary } from '../data/academicReviewWorkspace'
import type { AcademicReviewBatch } from '../types/academicReview'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface AcademicReviewWorkspacePageProps { focusId?: string | null }
const allValue = 'All'
const priorityOptions = [allValue, ...Array.from(new Set(academicReviewBatches.map((batch) => batch.priority))).sort()]
const areaOptions = [allValue, ...Array.from(new Set(academicReviewBatches.map((batch) => batch.academicArea))).sort()]

export function AcademicReviewWorkspacePage({ focusId }: AcademicReviewWorkspacePageProps) {
  const [priority, setPriority] = useState(allValue)
  const [area, setArea] = useState(allValue)
  const [query, setQuery] = useState('')
  const batches = useMemo(() => {
    const q = query.trim().toLowerCase()
    return academicReviewBatches.filter((batch) => priority === allValue || batch.priority === priority).filter((batch) => area === allValue || batch.academicArea === area).filter((batch) => !q || [batch.title, batch.priority, batch.status, batch.academicArea, batch.objective, ...batch.requiredMaterials, ...batch.reviewQuestions, ...batch.targetHubObjects, ...batch.expectedEvidence, batch.blockedReason, batch.nextAction].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : priorityRank(a.priority) - priorityRank(b.priority) || a.title.localeCompare(b.title)))
  }, [area, focusId, priority, query])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused academic review batch</div>}<div className="hero-panel academic-review-hero"><div><span className="eyebrow">Sprint 3.1 · Academic Review Workspace</span><h1>Start source-backed content review with real academic materials.</h1><p>This workspace tracks which course files are needed, what evidence must be captured and which Hub objects each academic batch could unlock.</p></div><div className="academic-review-score-card"><span className="eyebrow">Academic Batches</span><strong>{academicReviewSummary.total}</strong><p>{academicReviewSummary.p0} P0 · {academicReviewSummary.waitingForFiles} waiting for files</p><div className="inventory-mini-stats"><span>{academicReviewSummary.readyToReview} ready</span><span>{academicReviewSummary.reviewed} reviewed</span></div></div></div><section className="manual-panel result-bad"><span className="eyebrow">Phase 3 Rule</span><h2>No source-backed academic upgrade until a real file is reviewed and approved.</h2><KnowledgeChain nodes={['Course File', 'Review Form', 'Review Result', 'Promotion Queue', 'Decision Board', 'Source-backed Update']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Academic Review Filters</span><h2>{batches.length} of {academicReviewBatches.length} batches visible</h2></div><button className="text-button" onClick={() => { setPriority(allValue); setArea(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search areas, required files, targets or evidence..." /><div className="library-filter-grid"><AcademicSelect label="Priority" value={priority} values={priorityOptions} onChange={setPriority} /><AcademicSelect label="Academic area" value={area} values={areaOptions} onChange={setArea} /></div></section><section className="manual-panel"><span className="eyebrow">Review Batches</span><h2>Academic evidence review plan</h2><div className="academic-review-grid">{batches.map((batch) => <AcademicBatchCard key={batch.id} batch={batch} focused={batch.id === focusId} />)}</div></section></section>
}

function AcademicBatchCard({ batch, focused }: { batch: AcademicReviewBatch; focused: boolean }) {
  return <article className={`academic-review-card ${focused ? 'focused-result-card' : ''}`}><div className="academic-review-card-top"><span className="eyebrow">{batch.academicArea} · {batch.status}</span><span className={`academic-priority-pill priority-${batch.priority.toLowerCase()}`}>{batch.priority}</span></div><h3>{batch.title}</h3><p>{batch.objective}</p><h4>Required materials</h4><BadgeList items={batch.requiredMaterials} tone="blue" /><h4>Review questions</h4><ul>{batch.reviewQuestions.map((question) => <li key={question}>{question}</li>)}</ul><h4>Target Hub objects</h4><BadgeList items={batch.targetHubObjects} tone="purple" /><h4>Expected evidence</h4><BadgeList items={batch.expectedEvidence} tone="green" /><div className="mini-result warning">Blocked reason: {batch.blockedReason}</div><div className="mini-result good">Next action: {batch.nextAction}</div></article>
}

function AcademicSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}

function priorityRank(priority: AcademicReviewBatch['priority']) {
  if (priority === 'P0') return 1
  if (priority === 'P1') return 2
  return 3
}
