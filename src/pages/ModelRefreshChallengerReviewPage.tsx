import { useMemo, useState } from 'react'
import { challengerCriteria, refreshChecklist, refreshOutputs, refreshScenarios, refreshStages } from '../data/modelRefreshChallenger'
import { BadgeList } from '../components/ui/BadgeList'
import { ReadingGuide } from '../components/ui/ReadingGuide'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface ModelRefreshChallengerReviewPageProps { focusId?: string | null }
const lessonSections = ['Trigger', 'Diagnosis', 'Challenger', 'Governance', 'Deploy', 'Checklist']

export function ModelRefreshChallengerReviewPage({ focusId }: ModelRefreshChallengerReviewPageProps) {
  const [selectedStageId, setSelectedStageId] = useState(focusId ?? refreshStages[0].id)
  const selectedStage = refreshStages.find((stage) => stage.id === selectedStageId) ?? refreshStages[0]
  const workflowNodes = useMemo(() => refreshStages.map((stage) => stage.title.replace(/^\d\.\s*/, '')), [])

  return (
    <section className="concept-learning-page refresh-review-page">
      <div className="lesson-toolbar refresh-review-toolbar">
        <span className="text-button">Sprint 5.14</span>
        <div className="lesson-breadcrumb"><span>Banking & Finance</span><b>›</b><span>Model Governance</span><b>›</b><strong>Model Refresh & Challenger Review</strong></div>
        <div className="lesson-progress"><span>Review status</span><div><i /></div><strong>Governance layer</strong></div>
      </div>

      <div className="concept-two-pane refresh-review-grid">
        <article className="concept-main lesson-paper refresh-review-paper">
          <header className="concept-hero lesson-hero refresh-review-hero">
            <span className="asset-icon large">MR</span>
            <div>
              <span className="eyebrow">Governance page · Professional</span>
              <h1>Model Refresh & Challenger Review.</h1>
              <p>A controlled workflow for deciding when a credit model should be monitored, recalibrated, refreshed, challenged or promoted into production.</p>
              <BadgeList items={['Champion vs challenger', 'Model refresh', 'Credit risk analytics', 'Governance', 'Visual sprint']} tone="blue" />
            </div>
          </header>

          <nav className="lesson-section-tabs" aria-label="Refresh review sections">{lessonSections.map((section, index) => <span key={section}>{index + 1}. {section}</span>)}</nav>

          <ReadingGuide title="How to study this workflow" steps={['Start with the refresh trigger: do not rebuild a model before knowing what changed.', 'Diagnose champion performance, calibration, drift and segment impact together.', 'Promote a challenger only when the evidence is stronger than the operational and governance risk.']} />

          <section className="lesson-block output-learning-block">
            <div className="lesson-block-title"><span>1</span><h2>End-to-end refresh workflow</h2></div>
            <KnowledgeChain nodes={workflowNodes} />
          </section>

          <section className="refresh-stage-picker" aria-label="Refresh stages">
            {refreshStages.map((stage) => <button className={`refresh-stage-chip ${stage.id === selectedStage.id ? 'selected' : ''}`} key={stage.id} onClick={() => setSelectedStageId(stage.id)} type="button"><span>{stage.owner}</span><strong>{stage.title}</strong></button>)}
          </section>

          <section className="lesson-block">
            <div className="lesson-block-title"><span>2</span><h2>{selectedStage.title}</h2></div>
            <p>{selectedStage.purpose}</p>
            <div className="three-column-soft refresh-stage-columns">
              <div><h3>Inputs</h3><BadgeList items={selectedStage.inputs} tone="blue" /></div>
              <div><h3>Checks</h3><BadgeList items={selectedStage.checks} tone="purple" /></div>
              <div><h3>Outputs</h3><BadgeList items={selectedStage.outputs} tone="green" /></div>
            </div>
          </section>

          <section className="lesson-block insight-block"><div className="lesson-block-title"><span>✓</span><h2>Decision gate</h2></div><p>{selectedStage.decisionGate}</p></section>

          <section className="lesson-block">
            <div className="lesson-block-title"><span>3</span><h2>Champion vs challenger criteria</h2></div>
            <div className="refresh-criterion-grid">{challengerCriteria.map((criterion) => <article className="refresh-criterion-card" key={criterion.id}><span className="eyebrow">{criterion.title}</span><h3>{criterion.challengerSignal}</h3><p><strong>Current signal:</strong> {criterion.currentModelSignal}</p><BadgeList items={criterion.evidenceRequired} tone="blue" /><div className="refresh-decision-split"><p><strong>Promote:</strong> {criterion.promoteWhen}</p><p><strong>Hold:</strong> {criterion.holdWhen}</p></div></article>)}</div>
          </section>

          <section className="lesson-block output-learning-block">
            <div className="lesson-block-title"><span>4</span><h2>Outputs to build</h2></div>
            <div className="refresh-output-grid">{refreshOutputs.map((output) => <article className="refresh-output-card" key={output.id}><h3>{output.title}</h3><p>{output.whatItShows}</p><ul><li><strong>Good:</strong> {output.goodResult}</li><li><strong>Red flag:</strong> {output.redFlag}</li><li><strong>Action:</strong> {output.action}</li></ul></article>)}</div>
          </section>
        </article>

        <aside className="concept-output-panel refresh-review-side">
          <div className="output-panel-card progress-panel"><span className="eyebrow">Study Tracker</span><h2>Model Refresh Review</h2><p>Use this page after portfolio monitoring or alert remediation suggests that the current champion model may no longer be sufficient.</p><BadgeList items={['After monitoring', 'Before production change', 'Governance evidence']} tone="amber" /></div>
          <div className="output-panel-card"><span className="eyebrow">Output View</span><h2>Champion vs Challenger Matrix</h2><div className="refresh-matrix-preview"><span>Champion</span><span>Challenger</span><i /><b /></div><p>Compare performance, calibration, stability, explainability and operational readiness before promotion.</p></div>
          <div className="output-panel-card success-panel"><h3>Promotion checklist</h3><ul>{refreshChecklist.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="output-panel-card"><h3>Scenarios</h3><div className="refresh-scenario-stack">{refreshScenarios.map((scenario) => <details key={scenario.id}><summary>{scenario.title}</summary><p><strong>Trigger:</strong> {scenario.trigger}</p><ul>{scenario.diagnosis.map((item) => <li key={item}>{item}</li>)}</ul><p><strong>Action:</strong> {scenario.recommendedAction}</p><p><strong>Governance:</strong> {scenario.governanceNote}</p></details>)}</div></div>
          <div className="output-panel-card source-panel"><h3>Connected pages</h3><BadgeList items={['Portfolio Monitoring Dashboard Blueprint', 'Alert Remediation Workflow', 'Model Card & Monitoring Handoff', 'Credit Scoring Experiment Blueprint', 'Model-Ready Feature Set']} tone="blue" /></div>
        </aside>
      </div>
    </section>
  )
}
