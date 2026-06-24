import { useMemo, useState } from 'react'
import { mlGraphAtlas } from '../data/mlGraphAtlas'
import { BadgeList } from '../components/ui/BadgeList'
import { ReadingGuide } from '../components/ui/ReadingGuide'
import { MlMiniChart } from '../components/charts/MlMiniChart'

export function MlGraphAtlasPage() {
  const [activeGraphId, setActiveGraphId] = useState(mlGraphAtlas[0].id)
  const graph = useMemo(
    () => mlGraphAtlas.find((item) => item.id === activeGraphId) ?? mlGraphAtlas[0],
    [activeGraphId]
  )

  return (
    <section className="output-layout">
      <aside className="lesson-nav panel-card">
        <span className="eyebrow">ML Graph Atlas</span>
        {mlGraphAtlas.map((item, index) => (
          <button
            className={`lesson-nav-item ${item.id === graph.id ? 'active' : ''}`}
            key={item.id}
            onClick={() => setActiveGraphId(item.id)}
            type="button"
          >
            <span>{index + 1}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </aside>

      <article className="output-main readable-page">
        <header className="course-hero">
          <span className="eyebrow">{graph.category}</span>
          <h1>{graph.title}</h1>
          <p>{graph.whatItIs}</p>
        </header>

        <ReadingGuide
          title="How to read this ML graph"
          steps={[
            'Start by identifying what model problem this graph belongs to.',
            'Build the graph from model outputs, not manually invented numbers.',
            'Interpret the graph by connecting signals to model quality and business decisions.'
          ]}
        />

        <MlMiniChart title={graph.title} type={graph.chartType} />

        <div className="two-column">
          <div className="manual-section">
            <h2>When to use it</h2>
            <BadgeList items={graph.whenToUse} tone="blue" />
          </div>
          <div className="manual-section">
            <h2>Related models</h2>
            <BadgeList items={graph.relatedModels} tone="purple" />
          </div>
        </div>

        <div className="manual-section section-lead">
          <span className="section-number">BUILD</span>
          <div>
            <h2>How to construct it</h2>
            <ul>
              {graph.howToBuild.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="manual-section section-lead">
          <span className="section-number">USE</span>
          <div>
            <h2>How to use it</h2>
            <ul>
              {graph.howToUse.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="manual-section result-impact section-lead">
          <span className="section-number">READ</span>
          <div>
            <h2>How to interpret it</h2>
            <ul>
              {graph.howToInterpret.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="two-column">
          <div className="manual-section result-good">
            <h2>Good signal</h2>
            <p>{graph.goodSignal}</p>
          </div>
          <div className="manual-section result-bad">
            <h2>Bad signal</h2>
            <p>{graph.badSignal}</p>
          </div>
        </div>
      </article>

      <aside className="context-panel panel-card">
        <span className="eyebrow">Graph Logic</span>
        <h3>Rule</h3>
        <p>A machine learning graph is useful only when it helps you decide whether the model is reliable, interpretable or ready for action.</p>
        <div className="mini-result good">Graph → interpretation → model decision.</div>
      </aside>
    </section>
  )
}
