import { useMemo, useState } from 'react'
import { professionalScenarios } from '../data/professionalScenarios'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

export function ProfessionalScenariosPage() {
  const [activeScenarioId, setActiveScenarioId] = useState(professionalScenarios[0].id)
  const activeScenario = useMemo(
    () => professionalScenarios.find((scenario) => scenario.id === activeScenarioId) ?? professionalScenarios[0],
    [activeScenarioId]
  )

  return (
    <section className="output-layout">
      <aside className="lesson-nav panel-card">
        <span className="eyebrow">Scenario Engine</span>
        {professionalScenarios.map((scenario, index) => (
          <button
            className={`lesson-nav-item ${activeScenario.id === scenario.id ? 'active' : ''}`}
            key={scenario.id}
            onClick={() => setActiveScenarioId(scenario.id)}
            type="button"
          >
            <span>{index + 1}</span>
            <strong>{scenario.title}</strong>
          </button>
        ))}
      </aside>

      <article className="output-main">
        <header className="course-hero">
          <span className="eyebrow">{activeScenario.area}</span>
          <h1>{activeScenario.title}</h1>
          <p>{activeScenario.businessProblem}</p>
        </header>

        <div className="manual-section result-impact">
          <h2>Final decision this scenario supports</h2>
          <p>{activeScenario.finalDecision}</p>
        </div>

        <div className="manual-section">
          <h2>End-to-end workflow</h2>
          <KnowledgeChain nodes={activeScenario.phases.map((phase) => phase.title)} />
        </div>

        {activeScenario.phases.map((phase, index) => (
          <section className="case-playbook" key={phase.id}>
            <header className="course-hero">
              <span className="eyebrow">Phase {index + 1}</span>
              <h1>{phase.title}</h1>
              <p>{phase.moment}</p>
            </header>

            <div className="manual-section">
              <h2>What happens here</h2>
              <p>{phase.whatHappens}</p>
            </div>

            <div className="two-column">
              <div className="manual-section">
                <h3>Tools / methods</h3>
                <BadgeList items={phase.tools} tone="blue" />
              </div>
              <div className="manual-section">
                <h3>Outputs produced</h3>
                <BadgeList items={phase.outputs} tone="purple" />
              </div>
            </div>

            <div className="manual-section result-good">
              <h3>Decisions made at this phase</h3>
              <BadgeList items={phase.decisions} tone="green" />
            </div>

            <details className="details-card" open>
              <summary>Red flags</summary>
              <ul>
                {phase.redFlags.map((flag) => (
                  <li key={flag}>{flag}</li>
                ))}
              </ul>
            </details>
          </section>
        ))}
      </article>

      <aside className="context-panel panel-card">
        <span className="eyebrow">Purpose</span>
        <h3>Why this exists</h3>
        <p>
          Scenarios show the exact moment where a concept, model, formula, output or business framework
          enters a real professional workflow.
        </p>
        <h3>Scenario area</h3>
        <BadgeList items={[activeScenario.area]} tone="amber" />
      </aside>
    </section>
  )
}
