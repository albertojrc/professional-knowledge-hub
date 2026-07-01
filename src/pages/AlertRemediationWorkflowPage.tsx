import { useMemo, useState } from 'react'
import { alertRemediationPlaybooks, alertRemediationSummary } from '../data/alertRemediationWorkflow'
import type { AlertRemediationPlaybook, AlertWorkflowSeverity, AlertWorkflowStatus } from '../types/alertRemediationWorkflow'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface Props { focusId?: string | null }
const allValue = 'All'
const statusOptions = [allValue, ...Array.from(new Set(alertRemediationPlaybooks.map((x) => x.status))).sort()]
const severityOptions = [allValue, ...Array.from(new Set(alertRemediationPlaybooks.map((x) => x.severity))).sort()]

export function AlertRemediationWorkflowPage({ focusId }: Props) {
  const [status, setStatus] = useState<string>(allValue)
  const [severity, setSeverity] = useState<string>(allValue)
  const [query, setQuery] = useState('')
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return alertRemediationPlaybooks
      .filter((item) => status === allValue || item.status === status)
      .filter((item) => severity === allValue || item.severity === severity)
      .filter((item) => !q || [item.alertType, item.status, item.severity, item.cadence, item.ownerLayer, item.triggerSource, item.purpose, item.businessDecision, item.nextAction, ...item.triggerSignals, ...item.diagnosticQuestions, ...item.remediationActions, ...item.escalationPath, ...item.evidenceToAttach, ...item.closureCriteria].join(' ').toLowerCase().includes(q))
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.severity.localeCompare(b.severity) || a.alertType.localeCompare(b.alertType)))
  }, [focusId, query, severity, status])

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Search · focused alert playbook</div>}
      <div className="hero-panel alert-remediation-hero">
        <div>
          <span className="eyebrow">Sprint 5.13 · Alert Playbook & Remediation Workflow</span>
          <h1>Turn monitoring alerts into controlled risk actions.</h1>
          <p>This workflow converts portfolio monitoring alerts into owner-led diagnosis, remediation, escalation, evidence capture and closure criteria.</p>
        </div>
        <div className="alert-remediation-score-card">
          <span className="eyebrow">Alert Playbooks</span>
          <strong>{alertRemediationSummary.totalPlaybooks}</strong>
          <p>{alertRemediationSummary.readyPlaybooks} ready · {alertRemediationSummary.governanceReviewPlaybooks} governance review</p>
          <div className="inventory-mini-stats"><span>{alertRemediationSummary.ownerSignoffPlaybooks} owner sign-off</span><span>{alertRemediationSummary.waitingPlaybooks} waiting</span><span>{alertRemediationSummary.highOrCriticalPlaybooks} high/critical</span></div>
        </div>
      </div>

      <section className="manual-panel warning">
        <span className="eyebrow">Alert workflow rule</span>
        <h2>An alert is not closed when it is seen. It is closed when the root cause, owner, action and evidence are documented.</h2>
        <p>This layer prevents passive dashboards. Every alert must move toward a business decision: continue, investigate, adjust policy, review model, fix data or escalate.</p>
      </section>

      <section className="manual-panel result-impact">
        <span className="eyebrow">Remediation Flow</span>
        <h2>Trigger → triage → diagnose → remediate → escalate → document → close</h2>
        <KnowledgeChain nodes={['Monitoring Alert', 'Severity Triage', 'Owner Assignment', 'Root-Cause Diagnosis', 'Remediation Action', 'Escalation Path', 'Evidence Pack', 'Closure Criteria', 'Business Decision']} />
      </section>

      <section className="manual-panel inventory-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Playbook Filters</span><h2>{visible.length} of {alertRemediationPlaybooks.length} playbooks visible</h2></div>
          <button className="text-button" onClick={() => { setStatus(allValue); setSeverity(allValue); setQuery('') }} type="button">Clear filters</button>
        </div>
        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search PSI, bad-rate, delinquency, calibration, owner, escalation, SLA, closure..." />
        <div className="library-filter-grid">
          <Select label="Status" value={status} values={statusOptions} onChange={setStatus} />
          <Select label="Severity" value={severity} values={severityOptions} onChange={setSeverity} />
        </div>
      </section>

      <section className="alert-remediation-grid">
        {visible.map((item) => <AlertPlaybookCard key={item.id} item={item} focused={item.id === focusId} />)}
      </section>
    </section>
  )
}

function AlertPlaybookCard({ item, focused }: { item: AlertRemediationPlaybook; focused: boolean }) {
  const statusCls = item.status.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')
  const severityCls = item.severity.toLowerCase()
  return (
    <article className={`alert-remediation-card ${focused ? 'focused-result-card' : ''}`}>
      <div className="alert-remediation-card-top"><span className="eyebrow">{item.cadence} · {item.ownerLayer}</span><span className={`alert-remediation-status ${statusCls}`}>{item.status as AlertWorkflowStatus}</span></div>
      <h3>{item.alertType}</h3>
      <span className={`alert-remediation-severity ${severityCls}`}>{item.severity as AlertWorkflowSeverity} severity</span>
      <p>{item.purpose}</p>
      <div className="mini-result"><strong>Trigger source:</strong> {item.triggerSource}</div>
      <h4>Trigger signals</h4><BadgeList items={item.triggerSignals} tone="red" />
      <h4>Diagnostic questions</h4><BadgeList items={item.diagnosticQuestions} tone="blue" />
      <h4>Remediation actions</h4><BadgeList items={item.remediationActions} tone="purple" />
      <h4>Escalation path</h4><BadgeList items={item.escalationPath} tone="amber" />
      <h4>Evidence to attach</h4><BadgeList items={item.evidenceToAttach} tone="green" />
      <h4>Closure criteria</h4><BadgeList items={item.closureCriteria} tone="blue" />
      <div className="mini-result warning"><strong>Business decision:</strong> {item.businessDecision}</div>
      <h4>Next action</h4><KnowledgeChain nodes={[item.nextAction]} />
    </article>
  )
}

function Select({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
