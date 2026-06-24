import { useMemo, useState } from 'react'
import { dataScienceOperatingSystem } from '../data/operatingSystem'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

export function DataScienceOperatingSystemPage() {
  const [activeStageId, setActiveStageId] = useState(dataScienceOperatingSystem[0].id)
  const activeStage = useMemo(
    () => dataScienceOperatingSystem.find((stage) => stage.id === activeStageId) ?? dataScienceOperatingSystem[0],
    [activeStageId]
  )

  return (
    <section className="output-layout">
      <aside className="lesson-nav panel-card">
        <span className="eyebrow">Project Timeline</span>
        {dataScienceOperatingSystem.map((stage, index) => (
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
          <span className="eyebrow">Data Science Operating System</span>
          <h1>{activeStage.title}</h1>
          <p>{activeStage.moment}</p>
        </header>

        <div className="manual-section result-impact">
          <h2>Exact moment in the project</h2>
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

        <div className="manual-section">
          <h2>4. What to analyze at this stage</h2>
          <BadgeList items={activeStage.whatToAnalyze} tone="blue" />
        </div>

        <div className="manual-section">
          <h2>5. Outputs produced</h2>
          <BadgeList items={activeStage.outputs} tone="purple" />
        </div>

        <details className="details-card" open>
          <summary>6. Red flags</summary>
          <ul>
            {activeStage.redFlags.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>

        <div className="manual-section result-good">
          <h2>7. What comes next</h2>
          <p>{activeStage.nextStage}</p>
        </div>
      </article>

      <aside className="context-panel panel-card">
        <span className="eyebrow">Full workflow</span>
        <KnowledgeChain nodes={dataScienceOperatingSystem.map((stage) => stage.title)} />
      </aside>
    </section>
  )
}
