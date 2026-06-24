import { useMemo, useState } from 'react'
import { dataScienceOperatingSystem } from '../data/operatingSystem'
import { BadgeList } from '../components/ui/BadgeList'
import { ReadingGuide } from '../components/ui/ReadingGuide'
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

      <article className="output-main readable-page">
        <header className="course-hero">
          <span className="eyebrow">Data Science Operating System</span>
          <h1>{activeStage.title}</h1>
          <p>{activeStage.moment}</p>
        </header>

        <ReadingGuide
          title="How to read this stage"
          steps={[
            'Start with the exact project moment so you know why this stage exists.',
            'Understand what the stage is before thinking about tools.',
            'Use the workflow and outputs to connect the stage to the next decision.'
          ]}
        />

        <div className="manual-section result-impact section-lead">
          <span className="section-number">00</span>
          <div>
            <h2>Exact moment in the project</h2>
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
            <h2>What to analyze</h2>
            <BadgeList items={activeStage.whatToAnalyze} tone="blue" />
          </div>

          <div className="manual-section">
            <h2>Outputs produced</h2>
            <BadgeList items={activeStage.outputs} tone="purple" />
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

        <div className="manual-section result-good section-lead">
          <span className="section-number">NEXT</span>
          <div>
            <h2>What comes next</h2>
            <p>{activeStage.nextStage}</p>
          </div>
        </div>
      </article>

      <aside className="context-panel panel-card">
        <span className="eyebrow">Full workflow</span>
        <KnowledgeChain nodes={dataScienceOperatingSystem.map((stage) => stage.title)} />
        <div className="mini-result good">Current stage: {activeStage.title}</div>
      </aside>
    </section>
  )
}
