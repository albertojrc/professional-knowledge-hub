import { useMemo, useState } from 'react'
import { academicSourceFiles, academicSourceSummary } from '../data/academicSourceRegistry'
import type { AcademicSourceFile } from '../types/academicSource'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface AcademicSourceRegistryPageProps { focusId?: string | null }
const allValue = 'All'
const areaOptions = [allValue, ...Array.from(new Set(academicSourceFiles.map((file) => file.area))).sort()]
const statusOptions = [allValue, ...Array.from(new Set(academicSourceFiles.map((file) => file.status))).sort()]

export function AcademicSourceRegistryPage({ focusId }: AcademicSourceRegistryPageProps) {
  const [area, setArea] = useState(allValue)
  const [status, setStatus] = useState(allValue)
  const [query, setQuery] = useState('')
  const files = useMemo(() => {
    const q = query.trim().toLowerCase()
    return academicSourceFiles.filter((file) => area === allValue || file.area === area).filter((file) => status === allValue || file.status === status).filter((file) => !q || [file.title, file.driveId, file.format, file.area, file.status, file.evidencePotential, file.targetReviewBatch, ...file.targetHubObjects, ...file.likelyEvidence, ...file.classificationNotes, file.nextAction].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : potentialRank(b.evidencePotential) - potentialRank(a.evidencePotential) || a.title.localeCompare(b.title)))
  }, [area, focusId, query, status])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused academic source</div>}<div className="hero-panel academic-source-hero"><div><span className="eyebrow">Sprint 3.2 · Academic Source Discovery & File Registry</span><h1>Academic files discovered in the project Drive.</h1><p>This registry turns discovered Drive files into review-ready source records before source-backed content expansion.</p></div><div className="academic-source-score-card"><span className="eyebrow">Discovered Sources</span><strong>{academicSourceSummary.total}</strong><p>{academicSourceSummary.readyForReview} ready · {academicSourceSummary.needsClassification} need classification</p><div className="inventory-mini-stats"><span>{academicSourceSummary.pdfs} PDFs</span><span>{academicSourceSummary.spreadsheets} sheets</span><span>{academicSourceSummary.highPotential} high potential</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">Discovery Flow</span><h2>Discovered file to academic review</h2><KnowledgeChain nodes={['Drive Discovery', 'File Registry', 'Area Classification', 'Review Batch', 'Review Form', 'Decision Board']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Registry Filters</span><h2>{files.length} of {academicSourceFiles.length} sources visible</h2></div><button className="text-button" onClick={() => { setArea(allValue); setStatus(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search file title, area, evidence, batch or Hub object..." /><div className="library-filter-grid"><SourceSelect label="Area" value={area} values={areaOptions} onChange={setArea} /><SourceSelect label="Status" value={status} values={statusOptions} onChange={setStatus} /></div></section><section className="manual-panel"><span className="eyebrow">Academic Source Files</span><h2>Discovered project materials</h2><div className="academic-source-grid">{files.map((file) => <SourceCard key={file.id} file={file} focused={file.id === focusId} />)}</div></section></section>
}

function SourceCard({ file, focused }: { file: AcademicSourceFile; focused: boolean }) {
  return <article className={`academic-source-card ${focused ? 'focused-result-card' : ''}`}><div className="academic-source-card-top"><span className="eyebrow">{file.format} · {file.area}</span><span className={`academic-source-pill status-${file.status.toLowerCase().replaceAll(' ', '-')}`}>{file.status}</span></div><h3>{file.title}</h3><p>Drive ID: {file.driveId}</p><div className={`mini-result ${file.evidencePotential === 'High' ? 'good' : 'warning'}`}>Evidence potential: {file.evidencePotential}</div><h4>Target review batch</h4><BadgeList items={[file.targetReviewBatch]} tone="blue" /><h4>Target Hub objects</h4><BadgeList items={file.targetHubObjects} tone="purple" /><h4>Likely evidence</h4><BadgeList items={file.likelyEvidence} tone="green" /><h4>Classification notes</h4><ul>{file.classificationNotes.map((note) => <li key={note}>{note}</li>)}</ul><div className="mini-result good">Next action: {file.nextAction}</div></article>
}

function SourceSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}

function potentialRank(potential: AcademicSourceFile['evidencePotential']) {
  if (potential === 'High') return 3
  if (potential === 'Medium') return 2
  if (potential === 'Low') return 1
  return 0
}
