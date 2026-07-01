import { useMemo, useState } from 'react'
import { modelReadyFeatureGroups, modelReadyFeatureSummary } from '../data/modelReadyFeatureSet'
import type { FeatureReadinessStatus, FeatureRiskLevel, ModelReadyFeatureGroup } from '../types/modelReadyFeatureSet'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface Props { focusId?: string | null }
const allValue = 'All'
const statusOptions = [allValue, ...Array.from(new Set(modelReadyFeatureGroups.map((x) => x.status))).sort()]
const riskOptions = [allValue, ...Array.from(new Set(modelReadyFeatureGroups.map((x) => x.risk))).sort()]

export function ModelReadyFeatureSetPage({ focusId }: Props) {
  const [status, setStatus] = useState<string>(allValue)
  const [risk, setRisk] = useState<string>(allValue)
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return modelReadyFeatureGroups
      .filter((item) => status === allValue || item.status === status)
      .filter((item) => risk === allValue || item.risk === risk)
      .filter((item) => !q || [
        item.group,
        item.status,
        item.risk,
        item.purpose,
        item.allowedUse,
        item.blockedUse,
        item.downstreamOutput,
        item.nextAction,
        ...item.candidateFields,
        ...item.requiredEvidence,
        ...item.transformations,
        ...item.linkedReviewItems
      ].join(' ').toLowerCase().includes(q))
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.status.localeCompare(b.status) || a.group.localeCompare(b.group)))
  }, [focusId, query, risk, status])

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Search · focused model-ready feature group</div>}
      <div className="hero-panel model-feature-hero">
        <div>
          <span className="eyebrow">Sprint 5.9 · Model-Ready Feature Set</span>
          <h1>Turn the ABT review matrix into a leakage-safe modeling feature set.</h1>
          <p>Feature groups are classified as model-ready candidates, holds, blocks or governance controls before any credit scoring experiment is allowed.</p>
        </div>
        <div className="model-feature-score-card">
          <span className="eyebrow">Feature Groups</span>
          <strong>{modelReadyFeatureSummary.totalGroups}</strong>
          <p>{modelReadyFeatureSummary.modelReadyCandidates} candidates · {modelReadyFeatureSummary.blockedGroups} blocked</p>
          <div className="inventory-mini-stats">
            <span>{modelReadyFeatureSummary.heldForEvidence} hold</span>
            <span>{modelReadyFeatureSummary.highRiskGroups} high risk</span>
            <span>{modelReadyFeatureSummary.governanceControls} controls</span>
          </div>
        </div>
      </div>

      <section className="manual-panel warning">
        <span className="eyebrow">Model gate</span>
        <h2>No credit scoring model starts from raw fields.</h2>
        <p>The model matrix must be built only from reviewed features, blocked-field rules, owner decisions and source references.</p>
      </section>

      <section className="manual-panel result-impact">
        <span className="eyebrow">Feature Promotion Flow</span>
        <h2>Field review → feature group → transformation → allowed use → model matrix</h2>
        <KnowledgeChain nodes={['ABT Field Review', 'Feature Group', 'Evidence Check', 'Transformation Rule', 'Blocked Use Review', 'Model Matrix']} />
      </section>

      <section className="manual-panel inventory-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Feature Filters</span><h2>{visible.length} of {modelReadyFeatureGroups.length} groups visible</h2></div>
          <button className="text-button" onClick={() => { setStatus(allValue); setRisk(allValue); setQuery('') }} type="button">Clear filters</button>
        </div>
        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search fields, leakage, target, transformations, borrower, credit history..." />
        <div className="library-filter-grid">
          <Select label="Status" value={status} values={statusOptions} onChange={setStatus} />
          <Select label="Risk" value={risk} values={riskOptions} onChange={setRisk} />
        </div>
      </section>

      <section className="model-feature-grid">
        {visible.map((item) => <FeatureCard key={item.id} item={item} focused={item.id === focusId} />)}
      </section>
    </section>
  )
}

function FeatureCard({ item, focused }: { item: ModelReadyFeatureGroup; focused: boolean }) {
  const statusCls = item.status.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')
  const riskCls = item.risk.toLowerCase()
  return (
    <article className={`model-feature-card ${focused ? 'focused-result-card' : ''}`}>
      <div className="model-feature-card-top">
        <span className="eyebrow">{item.risk} risk</span>
        <span className={`model-feature-pill ${statusCls}`}>{item.status as FeatureReadinessStatus}</span>
      </div>
      <h3>{item.group}</h3>
      <span className={`model-risk-pill ${riskCls}`}>{item.risk as FeatureRiskLevel}</span>
      <p>{item.purpose}</p>
      <h4>Candidate fields</h4>
      <BadgeList items={item.candidateFields} tone="purple" />
      <h4>Evidence required</h4>
      <BadgeList items={item.requiredEvidence} tone="amber" />
      <h4>Transformations</h4>
      <BadgeList items={item.transformations} tone="green" />
      <div className="mini-result good"><strong>Allowed use:</strong> {item.allowedUse}</div>
      <div className="mini-result warning"><strong>Blocked use:</strong> {item.blockedUse}</div>
      <h4>Linked review items</h4>
      <BadgeList items={item.linkedReviewItems} tone="blue" />
      <h4>Downstream output</h4>
      <p>{item.downstreamOutput}</p>
      <h4>Next action</h4>
      <KnowledgeChain nodes={[item.nextAction]} />
    </article>
  )
}

function Select({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
