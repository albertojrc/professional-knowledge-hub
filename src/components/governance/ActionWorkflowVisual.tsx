import { alertRemediationPlaybooks } from '../../data/alertRemediationWorkflow'
import { VisualGovernanceStudio, type VisualGovernanceItem } from './VisualGovernanceStudio'
export function ActionWorkflowVisual({ focusId }: { focusId?: string | null }) {
  const items: VisualGovernanceItem[] = alertRemediationPlaybooks.map((x) => ({ id: x.id, title: x.alertType, eyebrow: x.ownerLayer, status: x.status, severity: x.severity, summary: x.purpose, decision: x.businessDecision, nextAction: x.nextAction, tags: x.remediationActions, sections: [{ title: 'Signals', items: x.triggerSignals, tone: 'red' }, { title: 'Actions', items: x.remediationActions, tone: 'purple' }, { title: 'Close', items: x.closureCriteria, tone: 'green' }] }))
  return <VisualGovernanceStudio title="Alert Playbook & Remediation Workflow" sprint="Sprint 5.13" icon="AR" description="Visual page for moving monitoring signals into owner action and closure." rule="Every signal needs an owner, action and evidence." flowTitle="Action Flow" flow={['Signal', 'Owner', 'Diagnosis', 'Action', 'Evidence', 'Close']} items={items} focusId={focusId} />
}
