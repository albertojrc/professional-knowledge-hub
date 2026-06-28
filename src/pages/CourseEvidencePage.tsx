import { useMemo, useState } from 'react'
import { courseEvidenceRecords, courseEvidenceSummary } from '../data/courseEvidenceExtraction'
import type { CourseEvidenceRecord } from '../types/courseEvidence'
import { BadgeList } from '../components/ui/BadgeList'

interface CourseEvidencePageProps { focusId?: string | null }
const allValue = 'All'
const statusOptions = [allValue, ...Array.from(new Set(courseEvidenceRecords.map((item) => item.status))).sort()]
const areaOptions = [allValue, ...Array.from(new Set(courseEvidenceRecords.map((item) => item.evidenceArea))).sort()]

export function CourseEvidencePage({ focusId }: CourseEvidencePageProps) {
  const [status, setStatus] = useState(allValue)
  const [area, setArea] = useState(allValue)
  const [query, setQuery] = useState('')
  const records = useMemo(() => {
    const q = query.trim().toLowerCase()
    return courseEvidenceRecords.filter((item) => status === allValue || item.status === status).filter((item) => area === allValue || item.evidenceArea === area).filter((item) => !q || [item.sourceName, item.evidenceArea, item.status, item.decision, ...item.extractedSignals, ...item.missingSignals, ...item.relatedObjects, item.nextAction].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.sourceName.localeCompare(b.sourceName)))
  }, [area, focusId, query, status])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused course evidence</div>}<div className="hero-panel course-evidence-hero"><div><span className="eyebrow">Sprint 2.11 · Course Evidence Extraction</span><h1>Evidence extracted from available sources.</h1><p>This separates governance evidence from academic course evidence so the Hub does not claim source support too early.</p></div><div className="course-evidence-score-card"><span className="eyebrow">Evidence Summary</span><strong>{courseEvidenceSummary.total}</strong><p>evidence records</p><div className="inventory-mini-stats"><span>{courseEvidenceSummary.extracted} extracted</span><span>{courseEvidenceSummary.missingCourseFiles} missing files</span><span>{courseEvidenceSummary.readyToUpgrade} upgrades</span></div></div></div><section className="manual-panel result-bad"><span className="eyebrow">Source Integrity</span><h2>No academic upgrades yet</h2><p>Available files support governance and platform metadata. They do not yet prove class coverage for Data Quality Report, ABT, SQL Joins, Financial Ratios, Cash Flow Analysis or credit risk formulas.</p></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Evidence Filters</span><h2>{records.length} of {courseEvidenceRecords.length} records visible</h2></div><button className="text-button" onClick={() => { setStatus(allValue); setArea(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search evidence, missing signals or related objects..." /><div className="library-filter-grid"><EvidenceSelect label="Status" value={status} values={statusOptions} onChange={setStatus} /><EvidenceSelect label="Evidence area" value={area} values={areaOptions} onChange={setArea} /></div></section><section className="manual-panel"><span className="eyebrow">Evidence Records</span><h2>Signals and missing proof</h2><div className="course-evidence-grid">{records.map((record) => <EvidenceCard key={record.id} record={record} focused={record.id === focusId} />)}</div></section></section>
}

function EvidenceCard({ record, focused }: { record: CourseEvidenceRecord; focused: boolean }) {
  return <article className={`course-evidence-card ${focused ? 'focused-result-card' : ''}`}><div className="course-evidence-card-top"><span className="eyebrow">{record.evidenceArea}</span><span className={`evidence-status-pill status-${record.status.toLowerCase().replaceAll(' ', '-')}`}>{record.status}</span></div><h3>{record.sourceName}</h3><div className="mini-result warning">Decision: {record.decision}</div><h4>Extracted signals</h4><BadgeList items={record.extractedSignals.length ? record.extractedSignals : ['No extracted academic signals']} tone="green" /><h4>Missing signals</h4><ul>{record.missingSignals.map((item) => <li key={item}>{item}</li>)}</ul><h4>Related objects</h4><BadgeList items={record.relatedObjects} tone="purple" /><div className="mini-result good">Next action: {record.nextAction}</div></article>
}

function EvidenceSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
