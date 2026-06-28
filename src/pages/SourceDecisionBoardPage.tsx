import { useMemo, useState } from 'react'
import { sourceDecisionItems, sourceDecisionSummary } from '../data/sourceDecisionBoard'
import type { SourceDecisionItem } from '../types/sourceDecision'
import { BadgeList } from '../components/ui/BadgeList'

interface SourceDecisionBoardPageProps { focusId?: string | null }
const allValue = 'All'
const decisionOptions = [allValue, ...Array.from(new Set(sourceDecisionItems.map((item) => item.proposedDecision))).sort()]
const riskOptions = [allValue, ...Array.from(new Set(sourceDecisionItems.map((item) => item.risk))).sort()]

export function SourceDecisionBoardPage({ focusId }: SourceDecisionBoardPageProps) {
  const [decision, setDecision] = useState(allValue)
  const [risk, setRisk] = useState(allValue)
  const [query, setQuery] = useState('')
  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sourceDecisionItems.filter((item) => decision === allValue || item.proposedDecision === decision).filter((item) => risk === allValue || item.risk === risk).filter((item) => !q || [item.title, item.targetObject, item.objectType, item.currentStatus, item.proposedDecision, item.risk, ...item.requiredEvidence, ...item.availableEvidence, ...item.blockers, ...item.approvalCriteria, ...item.rejectionCriteria, ...item.affectedRecords, item.nextAction].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.title.localeCompare(b.title)))
  }, [decision, focusId, query, risk])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused source decision</div>}<div className="hero-panel source-decision-hero"><div><span className="eyebrow">Sprint 2.14 · Source Upgrade Decision Board</span><h1>Approve, reject or hold source-backed status changes.</h1><p>This board protects the Hub from premature source claims by making every upgrade decision explicit and evidence-based.</p></div><div className="source-decision-score-card"><span className="eyebrow">Decision Summary</span><strong>{sourceDecisionSummary.total}</strong><p>decision items</p><div className="inventory-mini-stats"><span>{sourceDecisionSummary.needsEvidence} need evidence</span><span>{sourceDecisionSummary.approved} approved</span><span>{sourceDecisionSummary.highRisk} high risk</span></div></div></div><section className="manual-panel result-bad"><span className="eyebrow">Current Decision</span><h2>No academic source-backed upgrades are approved yet</h2><p>Until real course materials show definitions, formulas, examples or assignments, the core academic assets remain evidence candidates.</p></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Decision Filters</span><h2>{items.length} of {sourceDecisionItems.length} decisions visible</h2></div><button className="text-button" onClick={() => { setDecision(allValue); setRisk(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search decisions, blockers, evidence or affected records..." /><div className="library-filter-grid"><DecisionSelect label="Decision" value={decision} values={decisionOptions} onChange={setDecision} /><DecisionSelect label="Risk" value={risk} values={riskOptions} onChange={setRisk} /></div></section><section className="manual-panel"><span className="eyebrow">Decision Records</span><h2>Approval criteria and blockers</h2><div className="source-decision-grid">{items.map((item) => <DecisionCard key={item.id} item={item} focused={item.id === focusId} />)}</div></section></section>
}

function DecisionCard({ item, focused }: { item: SourceDecisionItem; focused: boolean }) {
  return <article className={`source-decision-card ${focused ? 'focused-result-card' : ''}`}><div className="source-decision-card-top"><span className="eyebrow">{item.objectType} · {item.currentStatus}</span><span className={`decision-risk-pill risk-${item.risk.toLowerCase()}`}>{item.risk}</span></div><h3>{item.title}</h3><div className="mini-result warning">Proposed decision: {item.proposedDecision}</div><h4>Required evidence</h4><ul>{item.requiredEvidence.map((point) => <li key={point}>{point}</li>)}</ul><h4>Available evidence</h4><BadgeList items={item.availableEvidence} tone="green" /><h4>Blockers</h4><BadgeList items={item.blockers} tone="amber" /><h4>Approval criteria</h4><ul>{item.approvalCriteria.map((point) => <li key={point}>{point}</li>)}</ul><h4>Rejection criteria</h4><ul>{item.rejectionCriteria.map((point) => <li key={point}>{point}</li>)}</ul><h4>Affected records</h4><BadgeList items={item.affectedRecords} tone="purple" /><div className="mini-result good">Next action: {item.nextAction}</div></article>
}

function DecisionSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
