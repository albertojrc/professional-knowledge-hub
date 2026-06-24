import { useMemo, useState } from 'react'
import { decisionPlaybooks } from '../data/decisionPlaybooks'
import { BadgeList } from '../components/ui/BadgeList'

export function DecisionPlaybooksPage() {
  const [activePlaybookId, setActivePlaybookId] = useState(decisionPlaybooks[0].id)
  const activePlaybook = useMemo(
    () => decisionPlaybooks.find((playbook) => playbook.id === activePlaybookId) ?? decisionPlaybooks[0],
    [activePlaybookId]
  )

  return (
    <section className="output-layout">
      <aside className="lesson-nav panel-card">
        <span className="eyebrow">Decision Playbooks</span>
        {decisionPlaybooks.map((playbook, index) => (
          <button
            className={`lesson-nav-item ${activePlaybook.id === playbook.id ? 'active' : ''}`}
            key={playbook.id}
            onClick={() => setActivePlaybookId(playbook.id)}
            type="button"
          >
            <span>{index + 1}</span>
            <strong>{playbook.title}</strong>
          </button>
        ))}
      </aside>

      <article className="output-main">
        <header className="course-hero">
          <span className="eyebrow">{activePlaybook.area}</span>
          <h1>{activePlaybook.title}</h1>
          <p>{activePlaybook.triggerOutput}</p>
        </header>

        <div className="manual-section">
          <h2>1. What the output means</h2>
          <p>{activePlaybook.whatItMeans}</p>
        </div>

        <div className="manual-section result-impact">
          <h2>2. Decision question</h2>
          <p>{activePlaybook.decisionQuestion}</p>
        </div>

        <div className="manual-section">
          <h2>3. Possible professional actions</h2>
          <BadgeList items={activePlaybook.possibleActions} tone="green" />
        </div>

        <div className="manual-section">
          <h2>4. Decision rules</h2>
          <ul>
            {activePlaybook.decisionRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>

        <div className="two-column">
          <div className="manual-section">
            <h2>5. Evidence needed</h2>
            <BadgeList items={activePlaybook.evidenceNeeded} tone="blue" />
          </div>
          <div className="manual-section result-bad">
            <h2>6. Risks if ignored</h2>
            <BadgeList items={activePlaybook.risks} tone="red" />
          </div>
        </div>

        <div className="manual-section result-good">
          <h2>7. Follow-up monitoring</h2>
          <BadgeList items={activePlaybook.followUpMonitoring} tone="purple" />
        </div>
      </article>

      <aside className="context-panel panel-card">
        <span className="eyebrow">Purpose</span>
        <h3>Output to Decision</h3>
        <p>
          This section teaches how to convert an analytical output into a controlled professional decision,
          with evidence, rules, risks and monitoring.
        </p>
      </aside>
    </section>
  )
}
