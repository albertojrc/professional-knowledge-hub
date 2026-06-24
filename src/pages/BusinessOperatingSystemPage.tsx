import { useMemo, useState } from 'react'
import { businessOperatingSystem } from '../data/businessOperatingSystem'
import { BadgeList } from '../components/ui/BadgeList'
import { ReadingGuide } from '../components/ui/ReadingGuide'

export function BusinessOperatingSystemPage() {
  const [activeStageId, setActiveStageId] = useState(businessOperatingSystem[0].id)
  const activeStage = useMemo(
    () => businessOperatingSystem.find((stage) => stage.id === activeStageId) ?? businessOperatingSystem[0],
    [activeStageId]
  )

  return (
    <section className="output-layout">
      <aside className="lesson-nav panel-card">
        <span className="eyebrow">Business Functions</span>
        {businessOperatingSystem.map((stage, index) => (
          <button
            className={`lesson-nav-item ${activeStage.id === stage.id ? 'active' : ''}`}
            key={stage.id}
            onClick={() => setActiveStageId(stage.id)}
            type="button"
          >
            <span>{index + 1}</span>
            <strong>{stage.title}</strong>
          </button>
        ))}
      </aside>

      <article className="output-main readable-page">
        <header className="course-hero">
          <span className="eyebrow">{activeStage.businessFunction}</span>
          <h1>{activeStage.title}</h1>
          <p>{activeStage.moment}</p>
        </header>

        <ReadingGuide
          title="How to use this business function"
          steps={[
            'Start with the business decision, not the metric.',
            'Identify the data and methods needed to support that decision.',
            'Translate the output into an action, risk, recommendation or next analysis.'
          ]}
        />

        <div className="manual-section result-impact section-lead">
          <span className="section-number">00</span>
          <div>
            <h2>Exact moment in a business project</h2>
            <p>{activeStage.moment}</p>
          </div>
        </div>

        <div className="manual-section section-lead">
          <span className="section-number">01</span>
          <div>
            <h2>What it is</h2>
            <p>{activeStage.whatItIs}</p>
          </div>
        </div>

        <div className="manual-section section-lead">
          <span className="section-number">02</span>
          <div>
            <h2>When to use it</h2>
            <p>{activeStage.whenToUse}</p>
          </div>
        </div>

        <div className="manual-section section-lead">
          <span className="section-number">03</span>
          <div>
            <h2>How to use it</h2>
            <ul>
              {activeStage.howToUse.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="two-column">
          <div className="manual-section">
            <h2>Data needed</h2>
            <BadgeList items={activeStage.dataNeeded} tone="blue" />
          </div>
          <div className="manual-section">
            <h2>Analysis methods</h2>
            <BadgeList items={activeStage.analysisMethods} tone="purple" />
          </div>
        </div>

        <div className="manual-section">
          <h2>Outputs produced</h2>
          <BadgeList items={activeStage.outputs} tone="green" />
        </div>

        <div className="manual-section result-good section-lead">
          <span className="section-number">DECIDE</span>
          <div>
            <h2>Decision supported</h2>
            <p>{activeStage.decision}</p>
          </div>
        </div>

        <details className="details-card" open>
          <summary>Red flags</summary>
          <ul>
            {activeStage.redFlags.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      </article>

      <aside className="context-panel panel-card">
        <span className="eyebrow">Operating Logic</span>
        <h3>Business to Data Bridge</h3>
        <p>
          This page explains where business theory enters a real analytics project: before metrics,
          during interpretation, and when transforming outputs into decisions.
        </p>
        <h3>Function</h3>
        <BadgeList items={[activeStage.businessFunction]} tone="amber" />
        <div className="mini-result good">Decision first. Metrics second.</div>
      </aside>
    </section>
  )
}
