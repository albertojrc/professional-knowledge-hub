import { useMemo, useState } from 'react'
import { evidenceExpansionCandidates, evidenceExpansionSummary } from '../data/evidenceExpansion'
import type { EvidenceExpansionCandidate, EvidenceStatus } from '../types/evidenceExpansion'
import { BadgeList } from '../components/ui/BadgeList'

interface EvidenceExpansionPageProps {
  focusId?: string | null
}

const allValue = 'All'
const statusOptions = [allValue, ...Array.from(new Set(evidenceExpansionCandidates.map((item) => item.status))).sort()]
const areaOptions = [allValue, ...Array.from(new Set(evidenceExpansionCandidates.map((item) => item.area))).sort()]
const programOptions = [allValue, ...Array.from(new Set(evidenceExpansionCandidates.map((item) => item.program))).sort()]

export function EvidenceExpansionPage({ focusId }: EvidenceExpansionPageProps) {
  const [status, setStatus] = useState(allValue)
  const [area, setArea] = useState(allValue)
  const [program, setProgram] = useState(allValue)
  const [query, setQuery] = useState('')

  const filteredCandidates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return evidenceExpansionCandidates
      .filter((item) => status === allValue || item.status === status)
      .filter((item) => area === allValue || item.area === area)
      .filter((item) => program === allValue || item.program === program)
      .filter((item) => {
        if (!normalizedQuery) return true
        return [item.title, item.assetId, item.area, item.program, item.status, item.whyItMatters, ...item.expectedEvidence, ...item.validationQuestions, item.nextAction].join(' ').toLowerCase().includes(normalizedQuery)
      })
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.area.localeCompare(b.area) || a.title.localeCompare(b.title)))
  }, [area, focusId, program, query, status])

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Global Search · focused evidence candidate</div>}

      <div className="hero-panel evidence-expansion-hero">
        <div>
          <span className="eyebrow">Sprint 2.3 · Evidence-Based Asset Expansion</span>
          <h1>Prioritize new assets without pretending class evidence is already validated.</h1>
          <p>This layer separates class-evidence candidates from recommended complements and review items before content becomes official.</p>
        </div>
        <div className="evidence-score-card">
          <span className="eyebrow">Expansion Queue</span>
          <strong>{evidenceExpansionSummary.totalCandidates}</strong>
          <p>candidate assets</p>
          <div className="inventory-mini-stats">
            <span>{evidenceExpansionSummary.classCandidates} class candidates</span>
            <span>{evidenceExpansionSummary.recommendedComplements} complements</span>
            <span>{evidenceExpansionSummary.needsReview} review</span>
          </div>
        </div>
      </div>

      <section className="manual-panel inventory-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Expansion Filters</span><h2>{filteredCandidates.length} of {evidenceExpansionCandidates.length} candidates visible</h2></div>
          <button className="text-button" onClick={() => { setStatus(allValue); setArea(allValue); setProgram(allValue); setQuery('') }} type="button">Clear filters</button>
        </div>
        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search candidate assets, evidence, validation questions or next actions..." />
        <div className="library-filter-grid">
          <EvidenceSelect label="Status" value={status} values={statusOptions} onChange={setStatus} />
          <EvidenceSelect label="Area" value={area} values={areaOptions} onChange={setArea} />
          <EvidenceSelect label="Program" value={program} values={programOptions} onChange={setProgram} />
        </div>
      </section>

      <section className="manual-panel result-good">
        <span className="eyebrow">Rule of Sprint 2</span>
        <h2>Evidence first, confidence second</h2>
        <p>These candidates are not automatically class-backed. Each one must be validated against actual materials before being marked as evidence-supported content.</p>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Candidate Queue</span>
        <h2>Assets to validate, create or classify as complements</h2>
        <div className="evidence-candidate-grid">
          {filteredCandidates.map((candidate) => <EvidenceCandidateCard key={candidate.id} candidate={candidate} focused={candidate.id === focusId} />)}
        </div>
      </section>
    </section>
  )
}

function EvidenceCandidateCard({ candidate, focused }: { candidate: EvidenceExpansionCandidate; focused: boolean }) {
  return (
    <article className={`evidence-candidate-card ${focused ? 'focused-result-card' : ''}`}>
      <div className="evidence-card-top">
        <span className="eyebrow">{candidate.area} · {candidate.program}</span>
        <span className={`evidence-status-pill evidence-${candidate.status.toLowerCase().replaceAll(' ', '-')}`}>{candidate.status as EvidenceStatus}</span>
      </div>
      <h3>{candidate.title}</h3>
      <p>{candidate.whyItMatters}</p>
      <div className="material-meta-row"><span>asset: {candidate.assetId}</span><span>{candidate.linkedModuleIds.join(' · ')}</span></div>
      <h4>Expected evidence</h4><BadgeList items={candidate.expectedEvidence} tone="blue" />
      <h4>Validation questions</h4><ul>{candidate.validationQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
      <div className="mini-result good">Next action: {candidate.nextAction}</div>
    </article>
  )
}

function EvidenceSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return (
    <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
  )
}
