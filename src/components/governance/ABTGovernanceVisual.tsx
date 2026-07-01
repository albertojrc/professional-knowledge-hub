import { abtBlueprintBlocks } from '../../data/abtBlueprint'
import { VisualGovernanceStudio, type VisualGovernanceItem } from './VisualGovernanceStudio'
export function ABTGovernanceVisual({ focusId }: { focusId?: string | null }) {
  const items: VisualGovernanceItem[] = abtBlueprintBlocks.map((x) => ({ id: x.id, title: x.title, eyebrow: x.block, status: x.status, summary: x.purpose, decision: x.nextAction, nextAction: x.nextAction, tags: x.outputs, sections: [{ title: 'Outputs', items: x.outputs, tone: 'green' }, { title: 'Checks', items: x.checks, tone: 'amber' }] }))
  return <VisualGovernanceStudio title="ABT Design Blueprint" sprint="Sprint 5.6" icon="ABT" description="Visual planning page for analytical table design." rule="Define structure before using fields in modeling." flowTitle="ABT Flow" flow={['Grain', 'Windows', 'Features', 'Split', 'Schema']} items={items} focusId={focusId} />
}
