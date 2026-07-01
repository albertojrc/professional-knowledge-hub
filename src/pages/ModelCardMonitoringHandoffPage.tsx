import { useMemo, useState } from 'react'
import { modelCardMonitoringSections, modelCardMonitoringSummary } from '../data/modelCardMonitoring'
import type { ModelCardMonitoringSection, ModelCardSectionStatus, MonitoringSeverity } from '../types/modelCardMonitoring'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface Props { focusId?: string | null }
const allValue = 'All'
const statusOptions = [allValue, ...Array.from(new Set(modelCardMonitoringSections.map((x) => x.status))).sort()]
const severityOptions = [allValue, ...Array.from(new Set(modelCardMonitoringSections.map((x) => x.severity))).sort()]

export function ModelCardMonitoringHandoffPage({ focusId }: Props) {
  const [status, setStatus] = useState<string>(allValue)
  const [severity, setSeverity] = useState<string>(allValue)
  const [query, setQuery] = useState('')
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return modelCardMonitoringSections
      .filter((item) => status === allValue || item.status === status)
      .filter((item) => severity === allValue || item.severity === severity)
      .filter((item) => !q || [item.section, item.status, item.severity, item.cadence, item.purpose, item.decisionUse, item.handoffOutput, item.nextAction, ...item.requiredEvidence, ...item.ownerQuestions, ...item.modelCardContent, ...item.monitoringControls, ...item.alertRules].join(' ').toLowerCase().includes(q))
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.status.localeCompare(b.status) || a.section.localeCompare(b.section)))
  }, [focusId, query, severity, status])

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Search · focused model card monitoring section</div>}
      <div className="hero-panel model-card-hero">
        <div>
          <span className="eyebrow">Sprint 5.11 · Model Card & Monitoring Handoff</span>
          <h1>Turn the credit scoring experiment into a controlled model asset.</h1>
          <p>This handoff layer documents purpose, data lineage, target logic, validation, explainability, drift controls, ownership and limitations before the model is treated as a professional banking artifact.</p>
        </div>
        <div className="model-card-score-card">
          <span className="eyebrow">Model Card Sections</span>
          <strong>{modelCardMonitoringSummary.totalSections}</strong>
          <p>{modelCardMonitoringSummary.readySections} ready · {modelCardMonitoringSummary.governanceGates} governance gates</p>
          <div className="inventory-mini-stats"><span>{modelCardMonitoringSummary.evidenceSections} evidence</span><span>{modelCardMonitoringSummary.waitingSections} waiting</span><span>{modelCardMonitoringSummary.highSeveritySections} high severity</span></div>
        </div>
      </div>

      <section className="manual-panel warning">
        <span className="eyebrow">Handoff rule</span>
        <h2>No model is complete until its use, evidence, limitations, monitoring and ownership are documented.</h2>
        <p>The model card is the bridge between notebook performance and professional governance. It makes the credit scoring model explainable, reviewable and monitorable.</p>
      </section>

      <section className="manual-panel result-impact">
        <span className="eyebrow">Model Governance Flow</span>
        <h2>Experiment output → model card → monitoring controls → ownership → improvement backlog</h2>
        <KnowledgeChain nodes={['Experiment Validation Output', 'Model Purpose', 'Data Lineage', 'Target Logic', 'Performance & Thresholds', 'Explainability', 'Drift Monitoring', 'Operational Ownership', 'Limitations Backlog']} />
      </section>

      <section className="manual-panel inventory-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Monitoring Filters</span><h2>{visible.length} of {modelCardMonitoringSections.length} sections visible</h2></div>
          <button className="text-button" onClick={() => { setStatus(allValue); setSeverity(allValue); setQuery('') }} type="button">Clear filters</button>
        </div>
        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search PSI, AUC, Gini, KS, calibration, reason codes, owners, drift, limitations..." />
        <div className="library-filter-grid">
          <Select label="Status" value={status} values={statusOptions} onChange={setStatus} />
          <Select label="Severity" value={severity} values={severityOptions} onChange={setSeverity} />
        </div>
      </section>

      <section className="model-card-grid">
        {visible.map((item) => <ModelCardSection key={item.id} item={item} focused={item.id === focusId} />)}
      </section>
    </section>
  )
}

function ModelCardSection({ item, focused }: { item: ModelCardMonitoringSection; focused: boolean }) {
  const statusCls = item.status.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')
  const severityCls = item.severity.toLowerCase()
  return (
    <article className={`model-card-section ${focused ? 'focused-result-card' : ''}`}>
      <div className="model-card-section-top"><span className="eyebrow">{item.cadence}</span><span className={`model-card-status ${statusCls}`}>{item.status as ModelCardSectionStatus}</span></div>
      <h3>{item.section}</h3>
      <span className={`model-card-severity ${severityCls}`}>{item.severity as MonitoringSeverity} severity</span>
      <p>{item.purpose}</p>
      <h4>Required evidence</h4><BadgeList items={item.requiredEvidence} tone="purple" />
      <h4>Owner questions</h4><BadgeList items={item.ownerQuestions} tone="blue" />
      <h4>Model card content</h4><BadgeList items={item.modelCardContent} tone="green" />
      <h4>Monitoring controls</h4><BadgeList items={item.monitoringControls} tone="amber" />
      <h4>Alert rules</h4><BadgeList items={item.alertRules} tone="red" />
      <div className="mini-result warning"><strong>Decision use:</strong> {item.decisionUse}</div>
      <div className="mini-result"><strong>Handoff output:</strong> {item.handoffOutput}</div>
      <h4>Next action</h4><KnowledgeChain nodes={[item.nextAction]} />
    </article>
  )
}

function Select({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
