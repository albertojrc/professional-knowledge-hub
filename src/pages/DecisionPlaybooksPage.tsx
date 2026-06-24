import { useMemo, useState } from 'react'
import { decisionPlaybooks } from '../data/decisionPlaybooks'
import { BadgeList } from '../components/ui/BadgeList'
import { ReadingGuide } from '../components/ui/ReadingGuide'

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

      <article className="output-main readable-page">
        <header className="course-hero">
          <span className="eyebrow">{activePlaybook.area}</span>
          <h1>{activePlaybook.title}</h1>
          <p>{activePlaybook.triggerOutput}</p>
        </header>

        <ReadingGuide
          title="How to turn this output into action"
          steps={[
            'Start by interpreting what the output really says and what it does not say.',
            'Frame the decision question before choosing an action.',
            'Check evidence, risks and monitoring before treating the recommendation as final.'
          ]}
        />

        <div className="manual-section section-lead">
          <span className="section-number">READ</span>
          <div>
            <h2>What the output means</h2>
            <p>{activePlaybook.whatItMeans}</p>
          </div>
        </div>

        <div className="manual-section result-impact section-lead">
          <span className="section-number">ASK</span>
          <div>
            <h2>Decision question</h2>
            <p>{activePlaybook.decisionQuestion}</p>
          </div>
        </div>

        <div className="manual-section section-lead">
          <span className="section-number">ACT</span>
          <div>
            <h2>Possible professional actions</h2>
            <BadgeList items={activePlaybook.possibleActions} tone="green" />
          </div>
        </div>

        <div className="manual-section section-lead">
          <span className="section-number">RULES</span>
          <div>
            <h2>Decision rules</h2>
            <ul>
              {activePlaybook.decisionRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="two-column">
          <div className="manual-section">
            <h2>Evidence needed</h2>
            <BadgeList items={activePlaybook.evidenceNeeded} tone="blue" />
          </div>
          <div className="manual-section result-bad">
            <h2>Risks if ignored</h2>
            <BadgeList items={activePlaybook.risks} tone="red" />
          </div>
        </div>

        <div className="manual-section result-good section-lead">
          <span className="section-number">WATCH</span>
          <div>
            <h2>Follow-up monitoring</h2>
            <BadgeList items={activePlaybook.followUpMonitoring} tone="purple" />
          </div>
        </div>
      </article>

      <aside className="context-panel panel-card">
        <span className="eyebrow">Purpose</span>
        <h3>Output to Decision</h3>
        <p>
          This section teaches how to convert an analytical output into a controlled professional decision,
          with evidence, rules, risks and monitoring.
        </p>
        <div className="mini-result good">Interpretation is not the final step. Decision design is.</div>
      </aside>
    </section>
  )
}
