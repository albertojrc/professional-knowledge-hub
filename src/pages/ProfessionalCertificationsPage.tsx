import { useMemo, useState } from 'react'
import { cfaCertificationSummary, cfaCertificationTracks } from '../data/moduleCommandCenters'
import type { CommandCenterTrack } from '../types/moduleCommandCenter'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface ProfessionalCertificationsPageProps { focusId?: string | null }
const allValue = 'All'
const statusOptions = [allValue, ...Array.from(new Set(cfaCertificationTracks.map((track) => track.status))).sort()]

export function ProfessionalCertificationsPage({ focusId }: ProfessionalCertificationsPageProps) {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState(allValue)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return cfaCertificationTracks
      .filter((track) => status === allValue || track.status === status)
      .filter((track) => !q || [track.title, track.eyebrow, track.level, track.status, track.summary, track.whyItMatters, track.nextAction, ...track.primaryOutputs, ...track.workflow, ...track.coreConcepts, ...track.formulasAndTools, ...track.practiceMoves, ...track.connectedViews, ...track.searchTerms].join(' ').toLowerCase().includes(q))
  }, [query, status])
  const focused = cfaCertificationTracks.find((track) => track.id === focusId || track.aliases?.includes(focusId ?? ''))
  const selected = focused ?? visible.find((track) => track.id === selectedId) ?? visible[0] ?? cfaCertificationTracks[0]

  return (
    <section className="page-stack command-center-page">
      {focusId && <div className="deep-link-banner">Opened from Global Search · CFA / Certifications context selected</div>}
      <div className="hero-panel command-center-hero cfa-command-hero">
        <div>
          <span className="eyebrow">Reorg UX · CFA & Certifications</span>
          <h1>CFA-first certification command center.</h1>
          <p>The certification module is now anchored around CFA Level I. Bloomberg remains as a support workflow instead of competing with the main study path.</p>
        </div>
        <div className="command-center-score-card cfa-score-card">
          <span className="eyebrow">Simplified Module</span>
          <strong>{cfaCertificationSummary.totalTracks}</strong>
          <p>{cfaCertificationSummary.primaryTracks} primary paths · {cfaCertificationSummary.outputs} outputs</p>
          <div className="inventory-mini-stats"><span>CFA first</span><span>Search-first</span></div>
        </div>
      </div>

      <section className="manual-panel command-center-rule">
        <span className="eyebrow">Certification rule</span>
        <h2>CFA is the spine. Everything else supports the spine.</h2>
        <p>This page no longer dumps every lesson at once. Pick a path, study the detail panel, then use Global Search for specific concepts, formulas or weak areas.</p>
      </section>

      <section className="manual-panel inventory-filter-panel command-center-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Module Search</span><h2>{visible.length} of {cfaCertificationTracks.length} paths visible</h2></div>
          <button className="text-button" onClick={() => { setQuery(''); setStatus(allValue); setSelectedId(null) }} type="button">Clear</button>
        </div>
        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search CFA, FSA, fixed income, portfolio, ethics, WACC, Bloomberg..." />
        <div className="library-filter-grid"><CommandSelect label="Path type" value={status} values={statusOptions} onChange={setStatus} /></div>
      </section>

      <section className="command-center-layout">
        <div className="command-center-results" aria-label="CFA and certification paths">
          {visible.map((track) => <CommandResultCard key={track.id} track={track} selected={track.id === selected.id} onSelect={() => setSelectedId(track.id)} />)}
        </div>
        <CommandDetailPanel track={selected} />
      </section>
    </section>
  )
}

function CommandResultCard({ track, selected, onSelect }: { track: CommandCenterTrack; selected: boolean; onSelect: () => void }) {
  return (
    <button className={`command-result-card ${selected ? 'selected' : ''}`} onClick={onSelect} type="button">
      <div>
        <span className="eyebrow">{track.eyebrow} · {track.level}</span>
        <h3>{track.title}</h3>
        <p>{track.summary}</p>
      </div>
      <div className="search-result-meta"><span>{track.status}</span><span>{track.primaryOutputs.length} outputs</span><span>Open detail</span></div>
    </button>
  )
}

function CommandDetailPanel({ track }: { track: CommandCenterTrack }) {
  return (
    <article className="command-detail-panel">
      <div className="command-detail-top"><span className="eyebrow">{track.eyebrow}</span><span className="command-status-pill">{track.status}</span></div>
      <h2>{track.title}</h2>
      <p>{track.whyItMatters}</p>
      <section className="lesson-block"><div className="lesson-block-title"><span>1</span><h3>Study workflow</h3></div><KnowledgeChain nodes={track.workflow} /></section>
      <section className="lesson-block"><div className="lesson-block-title"><span>2</span><h3>Outputs to build</h3></div><BadgeList items={track.primaryOutputs} tone="blue" /></section>
      <section className="lesson-block"><div className="lesson-block-title"><span>3</span><h3>Core concepts</h3></div><BadgeList items={track.coreConcepts} tone="purple" /></section>
      <section className="lesson-block"><div className="lesson-block-title"><span>4</span><h3>Formulas and tools</h3></div><BadgeList items={track.formulasAndTools} tone="green" /></section>
      <section className="lesson-block"><div className="lesson-block-title"><span>5</span><h3>Practice moves</h3></div><ul className="clean-list">{track.practiceMoves.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="lesson-block insight-block"><div className="lesson-block-title"><span>✓</span><h3>How to use this path</h3></div><p>{track.nextAction}</p><BadgeList items={track.searchTerms} tone="amber" /></section>
      <section className="lesson-block"><div className="lesson-block-title"><span>→</span><h3>Connected views</h3></div><BadgeList items={track.connectedViews} tone="blue" /></section>
    </article>
  )
}

function CommandSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
