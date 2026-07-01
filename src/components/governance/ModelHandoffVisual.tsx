import { modelCardMonitoringSections } from '../../data/modelCardMonitoring'
import { VisualGovernanceStudio, type VisualGovernanceItem } from './VisualGovernanceStudio'
export function ModelHandoffVisual({ focusId }: { focusId?: string | null }) {
  const items: VisualGovernanceItem[] = modelCardMonitoringSections.map((x) => ({ id: x.id, title: x.section, eyebrow: x.cadence, status: x.status, severity: x.severity, summary: x.purpose, decision: x.decisionUse, nextAction: x.nextAction, tags: x.modelCardContent, sections: [{ title: 'Evidence', items: x.requiredEvidence, tone: 'purple' }, { title: 'Content', items: x.modelCardContent, tone: 'green' }, { title: 'Controls', items: x.monitoringControls, tone: 'amber' }] }))
  return <VisualGovernanceStudio title="Model Card & Monitoring Handoff" sprint="Sprint 5.11" icon="MC" description="Visual handoff page for model documentation and monitoring ownership." rule="Document purpose, evidence and monitoring before use." flowTitle="Handoff Flow" flow={['Purpose', 'Evidence', 'Performance', 'Explainability', 'Monitoring', 'Owner']} items={items} focusId={focusId} />
}
