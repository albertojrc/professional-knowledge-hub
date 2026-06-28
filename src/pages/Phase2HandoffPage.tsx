import { phase2Handoff } from '../data/phase2Handoff'
import type { PhaseHandoffNextStep, PhaseHandoffSection } from '../types/phaseHandoff'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

export function Phase2HandoffPage() {
  return <section className="page-stack"><div className="hero-panel phase-handoff-hero"><div><span className="eyebrow">Sprint 2.25 · Phase 2 Closure</span><h1>{phase2Handoff.phase}</h1><p>{phase2Handoff.executiveSummary}</p></div><div className="phase-handoff-score-card"><span className="eyebrow">Phase Status</span><strong>2.25</strong><p>{phase2Handoff.status}</p></div></div><section className="manual-panel result-bad"><span className="eyebrow">Closure Rule</span><h2>No academic source-backed upgrade is approved until real course evidence is reviewed.</h2><KnowledgeChain nodes={['Upload Course Files', 'Review Batch', 'Review Result Registry', 'Decision Board', 'Source-backed Upgrade']} /></section><section className="manual-panel"><span className="eyebrow">Handoff Sections</span><h2>What Phase 2 completed and what remains constrained</h2><div className="phase-handoff-grid">{phase2Handoff.sections.map((section) => <SectionCard key={section.id} section={section} />)}</div></section><section className="manual-panel"><span className="eyebrow">Next Phase</span><h2>First source-backed content review batches</h2><div className="phase-next-grid">{phase2Handoff.nextSteps.map((step) => <NextStepCard key={step.id} step={step} />)}</div></section></section>
}

function SectionCard({ section }: { section: PhaseHandoffSection }) {
  return <article className="phase-handoff-card"><div className="phase-handoff-card-top"><span className="eyebrow">{section.title}</span><span className={`phase-status-pill status-${section.status.toLowerCase().replaceAll(' ', '-')}`}>{section.status}</span></div><p>{section.summary}</p><h4>Completed</h4><BadgeList items={section.completed} tone="green" /><h4>Open risks</h4><BadgeList items={section.openRisks} tone="amber" /><h4>Next actions</h4><ul>{section.nextActions.map((action) => <li key={action}>{action}</li>)}</ul></article>
}

function NextStepCard({ step }: { step: PhaseHandoffNextStep }) {
  return <article className="phase-next-card"><div className="phase-handoff-card-top"><span className="eyebrow">{step.title}</span><span className={`phase-priority-pill priority-${step.priority.toLowerCase()}`}>{step.priority}</span></div><p>{step.objective}</p><h4>Unlocks</h4><BadgeList items={step.unlocks} tone="purple" /><h4>Required inputs</h4><BadgeList items={step.requiredInputs} tone="blue" /></article>
}
