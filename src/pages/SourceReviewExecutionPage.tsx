import { useMemo, useState } from 'react'
import { sourceExecutionRecords, sourceExecutionSummary } from '../data/sourceReviewExecution'
import type { SourceExecutionRecord } from '../types/sourceExecution'
import { BadgeList } from '../components/ui/BadgeList'

interface SourceReviewExecutionPageProps { focusId?: string | null }

const allValue = 'All'
const statusOptions = [allValue, ...Array.from(new Set(sourceExecutionRecords.map((item) => item.status))).sort()]
const decisionOptions = [allValue, ...Array.from(new Set(sourceExecutionRecords.map((item) => item.decision))).sort()]

export function SourceReviewExecutionPage({ focusId }: SourceReviewExecutionPageProps) {
  const [status, setStatus] = useState(allValue)
  const [decision, setDecision] = useState(allValue)
  const [query, setQuery] = useState('')

  const filteredRecords = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sourceExecutionRecords
      .filter((item) => status === allValue || item.status === status)
      .filter((item) => decision === allValue || item.decision === decision)
      .filter((item) => !q || [item.title, item.reviewedSource, item.status, item.decision, ...item.evidenceFound, ...item.evidenceLimits, ...item.affectedHubObjects, item.coverageUpdate, item.nextAction].join(' ').toLowerCase().includes(q))
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.title.localeCompare(b.title)))
  }, [decision, focusId, query, status])

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Global Search · focused source execution record</div>}
      <div className="hero-panel source-execution-hero">
        <div><span className="eyebrow">Sprint 2.10 · First Source Review Execution</span><h1>First pass review results</h1><p>This page records what was actually reviewed, what evidence was found and what cannot be upgraded yet.</p></div>
        <div className="source-execution-score-card"><span className="eyebrow">Execution Summary</span><strong>{sourceExecutionSummary.total}</strong><p>review results</p><div className="inventory-mini-stats"><span>{sourceExecutionSummary.reviewed} reviewed</span><span>{sourceExecutionSummary.blocked} blocked</span><span>{sourceExecutionSummary.upgradesAllowed} upgrades</span></div></div>
      </div>

      <section className="manual-panel result-bad"><span className="eyebrow">Important QA Decision</span><h2>No academic asset is source-backed yet</h2><p>The first reviewed sources support app metadata and project governance, but they do not contain enough course content to upgrade concepts like Financial Ratios, Cash Flow Analysis, SQL Joins or ABT to source-backed.</p></section>

      <section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Execution Filters</span><h2>{filteredRecords.length} of {sourceExecutionRecords.length} results visible</h2></div><button className="text-button" onClick={() => { setStatus(allValue); setDecision(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search reviewed sources, evidence, limits or coverage updates..." /><div className="library-filter-grid"><ExecutionSelect label="Status" value={status} values={statusOptions} onChange={setStatus} /><ExecutionSelect label="Decision" value={decision} values={decisionOptions} onChange={setDecision} /></div></section>

      <section className="manual-panel"><span className="eyebrow">Review Execution Records</span><h2>Evidence found, limits and coverage updates</h2><div className="source-execution-grid">{filteredRecords.map((record) => <ExecutionRecordCard key={record.id} record={record} focused={record.id === focusId} />)}</div></section>
    </section>
  )
}

function ExecutionRecordCard({ record, focused }: { record: SourceExecutionRecord; focused: boolean }) {
  return (
    <article className={`source-execution-card ${focused ? 'focused-result-card' : ''}`}>
      <div className="source-execution-card-top"><span className="eyebrow">{record.reviewedSource}</span><span className={`execution-status-pill status-${record.status.toLowerCase().replaceAll(' ', '-')}`}>{record.status}</span></div>
      <h3>{record.title}</h3>
      <div className="mini-result warning">Decision: {record.decision}</div>
      <h4>Evidence found</h4><ul>{record.evidenceFound.map((item) => <li key={item}>{item}</li>)}</ul>
      <h4>Evidence limits</h4><ul>{record.evidenceLimits.map((item) => <li key={item}>{item}</li>)}</ul>
      <h4>Affected Hub objects</h4><BadgeList items={record.affectedHubObjects} tone="purple" />
      <div className="mini-result good">Coverage update: {record.coverageUpdate}</div>
      <div className="mini-result good">Next action: {record.nextAction}</div>
    </article>
  )
}

function ExecutionSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
