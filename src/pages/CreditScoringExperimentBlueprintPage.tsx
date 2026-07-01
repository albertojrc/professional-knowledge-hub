import { useMemo, useState } from 'react'
import { creditScoringExperimentStages, creditScoringExperimentSummary } from '../data/creditScoringExperiment'
import type { CreditScoringExperimentStage, ExperimentRiskLevel, ExperimentStageStatus } from '../types/creditScoringExperiment'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface Props { focusId?: string | null }
const allValue = 'All'
const statusOptions = [allValue, ...Array.from(new Set(creditScoringExperimentStages.map((x) => x.status))).sort()]
const riskOptions = [allValue, ...Array.from(new Set(creditScoringExperimentStages.map((x) => x.risk))).sort()]

export function CreditScoringExperimentBlueprintPage({ focusId }: Props) {
  const [status, setStatus] = useState<string>(allValue)
  const [risk, setRisk] = useState<string>(allValue)
  const [query, setQuery] = useState('')
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return creditScoringExperimentStages
      .filter((item) => status === allValue || item.status === status)
      .filter((item) => risk === allValue || item.risk === risk)
      .filter((item) => !q || [item.stage, item.status, item.risk, item.objective, item.decisionGate, item.nextAction, ...item.requiredInputs, ...item.designChoices, ...item.outputs, ...item.validationChecks, ...item.governanceNotes, ...item.linkedFeatureGroups].join(' ').toLowerCase().includes(q))
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.status.localeCompare(b.status) || a.stage.localeCompare(b.stage)))
  }, [focusId, query, risk, status])

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Search · focused credit scoring experiment stage</div>}
      <div className="hero-panel credit-experiment-hero">
        <div>
          <span className="eyebrow">Sprint 5.10 · Credit Scoring Experiment Blueprint</span>
          <h1>Design the first leakage-safe credit scoring experiment.</h1>
          <p>This blueprint connects the model-ready feature set to target definition, splits, baseline modeling, challenger comparison, validation metrics and monitoring handoff.</p>
        </div>
        <div className="credit-experiment-score-card">
          <span className="eyebrow">Experiment Stages</span>
          <strong>{creditScoringExperimentSummary.totalStages}</strong>
          <p>{creditScoringExperimentSummary.readyStages} ready · {creditScoringExperimentSummary.governanceGates} governance gates</p>
          <div className="inventory-mini-stats"><span>{creditScoringExperimentSummary.evidenceStages} evidence</span><span>{creditScoringExperimentSummary.blockedStages} blocked</span><span>{creditScoringExperimentSummary.highRiskStages} high risk</span></div>
        </div>
      </div>

      <section className="manual-panel warning">
        <span className="eyebrow">Experiment rule</span>
        <h2>No model training before target, cutoff, feature matrix and leakage checks are approved.</h2>
        <p>The experiment blueprint is a design gate, not just a notebook checklist. It protects the hub from jumping into modeling before the credit risk logic is defensible.</p>
      </section>

      <section className="manual-panel result-impact">
        <span className="eyebrow">Experiment Flow</span>
        <h2>Business objective → population → target → features → model → metrics → monitoring</h2>
        <KnowledgeChain nodes={['Business Objective', 'Population & Cutoff', 'Target Definition', 'Feature Matrix', 'Baseline Model', 'Challenger Models', 'Validation Metrics', 'Monitoring Handoff']} />
      </section>

      <section className="manual-panel inventory-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Experiment Filters</span><h2>{visible.length} of {creditScoringExperimentStages.length} stages visible</h2></div>
          <button className="text-button" onClick={() => { setStatus(allValue); setRisk(allValue); setQuery('') }} type="button">Clear filters</button>
        </div>
        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search target, split, AUC, Gini, KS, leakage, monitoring, calibration..." />
        <div className="library-filter-grid">
          <Select label="Status" value={status} values={statusOptions} onChange={setStatus} />
          <Select label="Risk" value={risk} values={riskOptions} onChange={setRisk} />
        </div>
      </section>

      <section className="credit-experiment-grid">
        {visible.map((item) => <ExperimentCard key={item.id} item={item} focused={item.id === focusId} />)}
      </section>
    </section>
  )
}

function ExperimentCard({ item, focused }: { item: CreditScoringExperimentStage; focused: boolean }) {
  const statusCls = item.status.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')
  const riskCls = item.risk.toLowerCase()
  return (
    <article className={`credit-experiment-card ${focused ? 'focused-result-card' : ''}`}>
      <div className="credit-experiment-card-top"><span className="eyebrow">{item.risk} risk</span><span className={`credit-experiment-pill ${statusCls}`}>{item.status as ExperimentStageStatus}</span></div>
      <h3>{item.stage}</h3>
      <span className={`credit-risk-pill ${riskCls}`}>{item.risk as ExperimentRiskLevel}</span>
      <p>{item.objective}</p>
      <h4>Required inputs</h4><BadgeList items={item.requiredInputs} tone="purple" />
      <h4>Design choices</h4><BadgeList items={item.designChoices} tone="blue" />
      <h4>Outputs</h4><BadgeList items={item.outputs} tone="green" />
      <h4>Validation checks</h4><BadgeList items={item.validationChecks} tone="amber" />
      <h4>Governance notes</h4><BadgeList items={item.governanceNotes} tone="red" />
      <h4>Linked feature groups</h4><BadgeList items={item.linkedFeatureGroups} tone="purple" />
      <div className="mini-result warning"><strong>Decision gate:</strong> {item.decisionGate}</div>
      <h4>Next action</h4><KnowledgeChain nodes={[item.nextAction]} />
    </article>
  )
}

function Select({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
