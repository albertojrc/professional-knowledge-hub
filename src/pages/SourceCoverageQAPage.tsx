import { useMemo, useState } from 'react'
import { pendingGraphLinks, sourceCoverageRecords, sourceCoverageRules, sourceCoverageSummary, strongGraphLinks } from '../data/sourceCoverageQA'
import type { CoverageRisk, CoverageStatus, SourceCoverageRecord } from '../types/sourceCoverage'
import { BadgeList } from '../components/ui/BadgeList'

interface SourceCoverageQAPageProps {
  focusId?: string | null
}

const allValue = 'All'
const statusOptions = [allValue, ...Array.from(new Set(sourceCoverageRecords.map((item) => item.status))).sort()]
const riskOptions = [allValue, ...Array.from(new Set(sourceCoverageRecords.map((item) => item.risk))).sort()]
const typeOptions = [allValue, ...Array.from(new Set(sourceCoverageRecords.map((item) => item.objectType))).sort()]

export function SourceCoverageQAPage({ focusId }: SourceCoverageQAPageProps) {
  const [status, setStatus] = useState(allValue)
  const [risk, setRisk] = useState(allValue)
  const [objectType, setObjectType] = useState(allValue)
  const [query, setQuery] = useState('')

  const filteredRecords = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return sourceCoverageRecords
      .filter((item) => status === allValue || item.status === status)
      .filter((item) => risk === allValue || item.risk === risk)
      .filter((item) => objectType === allValue || item.objectType === objectType)
      .filter((item) => {
        if (!normalizedQuery) return true
        return [item.title, item.objectType, item.area, item.status, item.risk, ...item.linkedMaterials, ...item.linkedModules, ...item.linkedObjects, ...item.evidenceAvailable, ...item.gaps, item.nextAction].join(' ').toLowerCase().includes(normalizedQuery)
      })
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : riskRank(b.risk) - riskRank(a.risk) || a.title.localeCompare(b.title)))
  }, [focusId, objectType, query, risk, status])

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Global Search · focused source coverage item</div>}

      <div className="hero-panel source-coverage-hero">
        <div>
          <span className="eyebrow">Sprint 2.8 · Source Coverage QA</span>
          <h1>Audit what is source-backed, pending or complementary.</h1>
          <p>This page protects the Hub from false certainty by tracking evidence status, pending links, gaps and next actions.</p>
        </div>
        <div className="source-coverage-score-card">
          <span className="eyebrow">Coverage Status</span>
          <strong>{sourceCoverageSummary.total}</strong>
          <p>coverage records audited</p>
          <div className="inventory-mini-stats">
            <span>{sourceCoverageSummary.evidenceCandidates} candidates</span>
            <span>{sourceCoverageSummary.pendingInspection} pending</span>
            <span>{sourceCoverageSummary.highRisk} high risk</span>
          </div>
        </div>
      </div>

      <section className="source-coverage-stats">
        <article><span>Source-backed</span><strong>{sourceCoverageSummary.sourceBacked}</strong></article>
        <article><span>Evidence candidates</span><strong>{sourceCoverageSummary.evidenceCandidates}</strong></article>
        <article><span>Recommended complements</span><strong>{sourceCoverageSummary.recommendedComplements}</strong></article>
        <article><span>Pending inspection</span><strong>{sourceCoverageSummary.pendingInspection}</strong></article>
        <article><span>Needs review</span><strong>{sourceCoverageSummary.needsReview}</strong></article>
      </section>

      <section className="manual-panel result-bad">
        <span className="eyebrow">Critical Truth</span>
        <h2>No class-source claim is final yet</h2>
        <p>At this stage, the Hub has strong professional structure, but actual Drive file inspection is still required before anything can be marked as fully source-backed.</p>
      </section>

      <section className="manual-panel inventory-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Coverage Filters</span><h2>{filteredRecords.length} of {sourceCoverageRecords.length} records visible</h2></div>
          <button className="text-button" onClick={() => { setStatus(allValue); setRisk(allValue); setObjectType(allValue); setQuery('') }} type="button">Clear filters</button>
        </div>
        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search coverage records, gaps, linked objects or next actions..." />
        <div className="library-filter-grid">
          <CoverageSelect label="Status" value={status} values={statusOptions} onChange={setStatus} />
          <CoverageSelect label="Risk" value={risk} values={riskOptions} onChange={setRisk} />
          <CoverageSelect label="Object type" value={objectType} values={typeOptions} onChange={setObjectType} />
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Coverage Records</span>
        <h2>Evidence, gaps and next actions</h2>
        <div className="source-coverage-grid">
          {filteredRecords.map((record) => <CoverageRecordCard key={record.id} record={record} focused={record.id === focusId} />)}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Graph Link Audit</span>
        <h2>Pending versus strong graph relationships</h2>
        <div className="two-column">
          <div className="manual-section result-bad"><h3>Pending links</h3><p>{pendingGraphLinks.length} graph links still require source inspection.</p><BadgeList items={pendingGraphLinks.map((link) => link.id)} tone="amber" /></div>
          <div className="manual-section result-good"><h3>Strong structural links</h3><p>{strongGraphLinks.length} graph links are structurally strong inside the Hub.</p><BadgeList items={strongGraphLinks.map((link) => link.id)} tone="green" /></div>
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">QA Rules</span>
        <h2>Rules before upgrading coverage status</h2>
        <div className="coverage-rule-grid">
          {sourceCoverageRules.map((rule) => (
            <article className="coverage-rule-card" key={rule.id}>
              <h3>{rule.title}</h3>
              <p>{rule.description}</p>
              <div className="mini-result good">Pass condition: {rule.passCondition}</div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

function CoverageRecordCard({ record, focused }: { record: SourceCoverageRecord; focused: boolean }) {
  return (
    <article className={`source-coverage-card ${focused ? 'focused-result-card' : ''}`}>
      <div className="source-coverage-card-top">
        <span className="eyebrow">{record.objectType} · {record.area}</span>
        <span className={`coverage-status-pill status-${record.status.toLowerCase().replaceAll(' ', '-')}`}>{record.status as CoverageStatus}</span>
      </div>
      <h3>{record.title}</h3>
      <div className="material-meta-row"><span>{record.risk as CoverageRisk} risk</span><span>{record.linkedMaterials.join(' · ')}</span></div>
      <h4>Evidence available</h4><ul>{record.evidenceAvailable.map((item) => <li key={item}>{item}</li>)}</ul>
      <h4>Gaps</h4><ul>{record.gaps.map((item) => <li key={item}>{item}</li>)}</ul>
      <h4>Linked objects</h4><BadgeList items={record.linkedObjects.length ? record.linkedObjects : ['No linked objects']} tone="purple" />
      <div className="mini-result good">Next action: {record.nextAction}</div>
    </article>
  )
}

function CoverageSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return (
    <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
  )
}

function riskRank(risk: CoverageRisk) {
  if (risk === 'High') return 3
  if (risk === 'Medium') return 2
  return 1
}
