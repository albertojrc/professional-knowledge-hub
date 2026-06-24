import { useMemo, useState } from 'react'
import { detailedMlModels } from '../data/mlModelLibrary'
import { BadgeList } from '../components/ui/BadgeList'
import { ReadingGuide } from '../components/ui/ReadingGuide'
import { MlMiniChart, type MlChartType } from '../components/charts/MlMiniChart'

export function MlModelsPage() {
  const [activeModelId, setActiveModelId] = useState(detailedMlModels[0].id)
  const model = useMemo(
    () => detailedMlModels.find((item) => item.id === activeModelId) ?? detailedMlModels[0],
    [activeModelId]
  )

  return (
    <section className="output-layout">
      <aside className="lesson-nav panel-card">
        <span className="eyebrow">ML Models</span>
        {detailedMlModels.map((item, index) => (
          <button
            className={`lesson-nav-item ${item.id === model.id ? 'active' : ''}`}
            key={item.id}
            onClick={() => setActiveModelId(item.id)}
            type="button"
          >
            <span>{index + 1}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </aside>

      <article className="output-main readable-page">
        <header className="course-hero">
          <span className="eyebrow">{model.family}</span>
          <h1>{model.title}</h1>
          <p>{model.whatItIs}</p>
          <BadgeList items={[model.problemType]} tone="purple" />
        </header>

        <ReadingGuide
          title="How to study this model"
          steps={[
            'Start with the problem type: classification, regression, clustering, time series or dimensionality reduction.',
            'Understand when the model is appropriate before thinking about code.',
            'Connect outputs and graphs to interpretation, decisions and monitoring.'
          ]}
        />

        <div className="two-column">
          <div className="manual-section">
            <h2>When to use it</h2>
            <BadgeList items={model.whenToUse} tone="blue" />
          </div>
          <div className="manual-section">
            <h2>Key outputs</h2>
            <BadgeList items={model.keyOutputs} tone="purple" />
          </div>
        </div>

        <div className="manual-section section-lead">
          <span className="section-number">BUILD</span>
          <div>
            <h2>How to build it</h2>
            <ul>{model.howToBuild.map((step) => <li key={step}>{step}</li>)}</ul>
          </div>
        </div>

        <div className="manual-section section-lead result-impact">
          <span className="section-number">READ</span>
          <div>
            <h2>How to interpret it</h2>
            <ul>{model.howToInterpret.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>

        <div className="manual-section">
          <h2>Typical model graphs / outputs</h2>
          <div className="ml-chart-grid">
            {model.outputGraphs.slice(0, 3).map((graph) => (
              <MlMiniChart key={graph} title={graph} type={graphToChartType(graph)} />
            ))}
          </div>
        </div>

        <div className="two-column">
          <div className="manual-section result-good">
            <h2>Strengths</h2>
            <BadgeList items={model.strengths} tone="green" />
          </div>
          <div className="manual-section result-bad">
            <h2>Limitations</h2>
            <BadgeList items={model.limitations} tone="red" />
          </div>
        </div>

        <div className="manual-section section-lead">
          <span className="section-number">USE</span>
          <div>
            <h2>Business use cases</h2>
            <BadgeList items={model.businessUseCases} tone="amber" />
          </div>
        </div>
      </article>

      <aside className="context-panel panel-card">
        <span className="eyebrow">Model Logic</span>
        <h3>Core question</h3>
        <p>Does this model match the project problem, available data, interpretation need and business decision?</p>
        <div className="mini-result good">Model choice starts with the decision, not the algorithm.</div>
      </aside>
    </section>
  )
}

function graphToChartType(graph: string): MlChartType {
  const name = graph.toLowerCase()
  if (name.includes('precision')) return 'pr'
  if (name.includes('calibration')) return 'calibration'
  if (name.includes('confusion')) return 'confusion'
  if (name.includes('feature')) return 'feature-importance'
  if (name.includes('shap')) return 'shap'
  if (name.includes('residual')) return 'residual'
  if (name.includes('actual')) return 'actual-predicted'
  if (name.includes('elbow')) return 'elbow'
  if (name.includes('cluster')) return 'cluster'
  if (name.includes('forecast')) return 'forecast'
  return 'roc'
}
