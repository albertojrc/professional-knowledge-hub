import { useMemo, useState } from 'react'
import { professionalCertificationSummary, professionalCertificationTracks } from '../data/professionalCertifications'
import type { ProfessionalCertificationTrack } from '../types/professionalCertification'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface ProfessionalCertificationsPageProps { focusId?: string | null }
const allValue = 'All'
const trackOptions = [allValue, ...Array.from(new Set(professionalCertificationTracks.map((item) => item.track))).sort()]
const statusOptions = [allValue, ...Array.from(new Set(professionalCertificationTracks.map((item) => item.status))).sort()]

export function ProfessionalCertificationsPage({ focusId }: ProfessionalCertificationsPageProps) {
  const [track, setTrack] = useState(allValue)
  const [status, setStatus] = useState(allValue)
  const [query, setQuery] = useState('')
  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return professionalCertificationTracks.filter((item) => track === allValue || item.track === track).filter((item) => status === allValue || item.status === status).filter((item) => !q || [item.title, item.track, item.status, item.purpose, item.studyOutcome, ...item.topicBlocks, ...item.connectedStudyModules, ...item.formulas, ...item.outputs, ...item.terminalWorkflows, ...item.practiceItems, item.sourceStatus, item.nextAction].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.title.localeCompare(b.title)))
  }, [focusId, query, status, track])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused certification track</div>}<div className="hero-panel certification-hero"><div><span className="eyebrow">Sprint 3.4 · Professional Certifications</span><h1>CFA, Bloomberg Market Concepts and Bloomberg Finance Fundamentals.</h1><p>A dedicated certification module for finance credentials, Bloomberg learning and market workflows, connected back to Finance, Economics, Banking and Tools.</p></div><div className="certification-score-card"><span className="eyebrow">Certification Tracks</span><strong>{professionalCertificationSummary.total}</strong><p>{professionalCertificationSummary.cfaTracks} CFA · {professionalCertificationSummary.bloombergTracks} Bloomberg</p><div className="inventory-mini-stats"><span>{professionalCertificationSummary.planned} planned</span><span>{professionalCertificationSummary.readyForReview} ready</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">Certification Learning Flow</span><h2>Separate track, connected knowledge</h2><KnowledgeChain nodes={['Certification Track', 'Topic Blocks', 'Finance / Economics / Banking', 'Formulas', 'Bloomberg Workflows', 'Practice']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Track Filters</span><h2>{items.length} of {professionalCertificationTracks.length} tracks visible</h2></div><button className="text-button" onClick={() => { setTrack(allValue); setStatus(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search CFA, BMC, BFF, Bloomberg, formulas, outputs or practice..." /><div className="library-filter-grid"><CertificationSelect label="Track" value={track} values={trackOptions} onChange={setTrack} /><CertificationSelect label="Status" value={status} values={statusOptions} onChange={setStatus} /></div></section><section className="manual-panel"><span className="eyebrow">Certification Tracks</span><h2>Professional credential learning paths</h2><div className="certification-grid">{items.map((item) => <CertificationCard key={item.id} item={item} focused={item.id === focusId} />)}</div></section></section>
}

function CertificationCard({ item, focused }: { item: ProfessionalCertificationTrack; focused: boolean }) {
  return <article className={`certification-card ${focused ? 'focused-result-card' : ''}`}><div className="certification-card-top"><span className="eyebrow">{item.track} · {item.status}</span><span className="certification-track-pill">{item.track}</span></div><h3>{item.title}</h3><p>{item.purpose}</p><div className="mini-result good">Outcome: {item.studyOutcome}</div><h4>Topic blocks</h4><BadgeList items={item.topicBlocks} tone="blue" /><h4>Connected study modules</h4><BadgeList items={item.connectedStudyModules} tone="purple" /><h4>Formulas and outputs</h4><BadgeList items={[...item.formulas, ...item.outputs].length ? [...item.formulas, ...item.outputs] : ['No formula-heavy layer yet']} tone="green" /><h4>Bloomberg / terminal workflows</h4><BadgeList items={item.terminalWorkflows.length ? item.terminalWorkflows : ['No terminal workflow yet']} tone="amber" /><h4>Practice</h4><ul>{item.practiceItems.map((practice) => <li key={practice}>{practice}</li>)}</ul><div className="mini-result warning">Source status: {item.sourceStatus}</div><div className="mini-result good">Next action: {item.nextAction}</div></article>
}

function CertificationSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
