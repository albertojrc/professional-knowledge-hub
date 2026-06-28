import { useMemo, useState } from 'react'
import { controlledUpdateLogItems, controlledUpdateLogSummary } from '../data/controlledUpdateLog'
import type { ControlledUpdateLogItem } from '../types/controlledUpdateLog'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface ControlledUpdateLogPageProps { focusId?: string | null }
const allValue = 'All'
const outcomeOptions = [allValue, ...Array.from(new Set(controlledUpdateLogItems.map((item) => item.outcome))).sort()]
const impactOptions = [allValue, ...Array.from(new Set(controlledUpdateLogItems.map((item) => item.impact))).sort()]

export function ControlledUpdateLogPage({ focusId }: ControlledUpdateLogPageProps) {
  const [outcome, setOutcome] = useState(allValue)
  const [impact, setImpact] = useState(allValue)
  const [query, setQuery] = useState('')
  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return controlledUpdateLogItems.filter((item) => outcome === allValue || item.outcome === outcome).filter((item) => impact === allValue || item.impact === impact).filter((item) => !q || [item.title, item.promotionId, item.outcome, item.impact, item.risk, item.decisionDate, item.decisionOwner, item.decisionRationale, ...item.updatesApplied, ...item.updatesRejected, ...item.followUpActions, ...item.affectedObjects, ...item.auditNotes].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : riskRank(b.risk) - riskRank(a.risk) || a.title.localeCompare(b.title)))
  }, [focusId, impact, outcome, query])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused update log item</div>}<div className="hero-panel update-log-hero"><div><span className="eyebrow">Sprint 2.21 · Controlled Update Log</span><h1>Track what happened after each promotion decision.</h1><p>This log records applied, rejected, deferred and sent-back promotion outcomes without bypassing governance rules.</p></div><div className="update-log-score-card"><span className="eyebrow">Update Log</span><strong>{controlledUpdateLogSummary.total}</strong><p>{controlledUpdateLogSummary.applied} applied · {controlledUpdateLogSummary.deferred} deferred</p><div className="inventory-mini-stats"><span>{controlledUpdateLogSummary.waitingForEvidence} waiting</span><span>{controlledUpdateLogSummary.sentBack} sent back</span><span>{controlledUpdateLogSummary.highRisk} high risk</span></div></div></div><section className="manual-panel result-bad"><span className="eyebrow">Audit Rule</span><h2>No update is marked applied without explicit decision evidence</h2><KnowledgeChain nodes={['Promotion Queue', 'Decision Outcome', 'Controlled Log', 'Applied / Deferred / Rejected', 'Audit Trail']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Log Filters</span><h2>{items.length} of {controlledUpdateLogItems.length} log items visible</h2></div><button className="text-button" onClick={() => { setOutcome(allValue); setImpact(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search outcomes, objects, rationale or follow-up actions..." /><div className="library-filter-grid"><LogSelect label="Outcome" value={outcome} values={outcomeOptions} onChange={setOutcome} /><LogSelect label="Impact" value={impact} values={impactOptions} onChange={setImpact} /></div></section><section className="manual-panel"><span className="eyebrow">Controlled Update Records</span><h2>Audit trail for promotion outcomes</h2><div className="update-log-grid">{items.map((item) => <LogCard key={item.id} item={item} focused={item.id === focusId} />)}</div></section></section>
}

function LogCard({ item, focused }: { item: ControlledUpdateLogItem; focused: boolean }) {
  return <article className={`update-log-card ${focused ? 'focused-result-card' : ''}`}><div className="update-log-card-top"><span className="eyebrow">{item.impact} · {item.promotionId}</span><span className={`update-outcome-pill outcome-${item.outcome.toLowerCase().replaceAll(' ', '-')}`}>{item.outcome}</span></div><h3>{item.title}</h3><div className={`mini-result ${item.risk === 'High' ? 'warning' : 'good'}`}>Risk: {item.risk} · Owner: {item.decisionOwner}</div><h4>Decision rationale</h4><p>{item.decisionRationale}</p><h4>Updates applied</h4><BadgeList items={item.updatesApplied.length ? item.updatesApplied : ['No update applied']} tone="green" /><h4>Updates rejected</h4><BadgeList items={item.updatesRejected.length ? item.updatesRejected : ['No update rejected']} tone="amber" /><h4>Follow-up actions</h4><ul>{item.followUpActions.map((action) => <li key={action}>{action}</li>)}</ul><h4>Affected objects</h4><BadgeList items={item.affectedObjects} tone="purple" /><h4>Audit notes</h4><ul>{item.auditNotes.map((note) => <li key={note}>{note}</li>)}</ul></article>
}

function LogSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}

function riskRank(risk: ControlledUpdateLogItem['risk']) {
  if (risk === 'High') return 3
  if (risk === 'Medium') return 2
  return 1
}
