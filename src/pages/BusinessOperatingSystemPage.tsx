import { useMemo, useState } from 'react'
import { businessOperatingSystem } from '../data/businessOperatingSystem'
import { BadgeList } from '../components/ui/BadgeList'

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

      <article className="output-main">
        <header className="course-hero">
          <span className="eyebrow">{activeStage.businessFunction}</span>
          <h1>{activeStage.title}</h1>
          <p>{activeStage.moment}</p>
        </header>

        <div className="manual-section result-impact">
          <h2>Exact moment in a business project</h2>
          <p>{activeStage.moment}</p>
        </div>

        <div className="manual-section">
          <h2>1. What it is</h2>
          <p>{activeStage.whatItIs}</p>
        </div>

        <div className="manual-section">
          <h2>2. When to use it</h2>
          <p>{activeStage.whenToUse}</p>
        </div>

        <div className="manual-section">
          <h2>3. How to use it</h2>
          <ul>
            {activeStage.howToUse.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="two-column">
          <div className="manual-section">
            <h2>4. Data needed</h2>
            <BadgeList items={activeStage.dataNeeded} tone="blue" />
          </div>
          <div className="manual-section">
            <h2>5. Analysis methods</h2>
            <BadgeList items={activeStage.analysisMethods} tone="purple" />
          </div>
        </div>

        <div className="manual-section">
          <h2>6. Outputs produced</h2>
          <BadgeList items={activeStage.outputs} tone="green" />
        </div>

        <div className="manual-section result-good">
          <h2>7. Decision supported</h2>
          <p>{activeStage.decision}</p>
        </div>

        <details className="details-card" open>
          <summary>8. Red flags</summary>
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
      </aside>
    </section>
  )
}
