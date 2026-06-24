import { formulas, models } from '../data/knowledge'
import { BadgeList } from '../components/ui/BadgeList'

interface ReferencePageProps {
  type: 'formulas' | 'models'
  query: string
}

export function ReferencePage({ type, query }: ReferencePageProps) {
  const normalizedQuery = query.trim().toLowerCase()

  if (type === 'formulas') {
    const visibleFormulas = formulas.filter((formula) =>
      `${formula.title} ${formula.area} ${formula.formula} ${formula.interpretation}`.toLowerCase().includes(normalizedQuery)
    )

    return (
      <section className="page-stack">
        <div className="page-header-panel">
          <span className="eyebrow">Formula Library</span>
          <h1>Finance, risk and analytics formulas</h1>
          <p>Formulas are shown with variables, interpretation, professional use and related knowledge.</p>
        </div>
        <div className="card-grid">
          {visibleFormulas.map((formula) => (
            <article className="reference-card" key={formula.id}>
              <span className="eyebrow">{formula.area}</span>
              <h3>{formula.title}</h3>
              <pre className="code-block compact">{formula.formula}</pre>
              <p><strong>Variables:</strong> {formula.variables}</p>
              <p><strong>Interpretation:</strong> {formula.interpretation}</p>
              <p><strong>Professional use:</strong> {formula.professionalUse}</p>
              <BadgeList items={formula.relatedItems} tone="purple" />
            </article>
          ))}
        </div>
      </section>
    )
  }

  const visibleModels = models.filter((model) =>
    `${model.title} ${model.family} ${model.objective} ${model.interpretation}`.toLowerCase().includes(normalizedQuery)
  )

  return (
    <section className="page-stack">
      <div className="page-header-panel">
        <span className="eyebrow">Model Library</span>
        <h1>Models with interpretation and business meaning</h1>
        <p>Each model is treated as a professional method: objective, preparation, outputs, interpretation, good/bad result and applications.</p>
      </div>
      {visibleModels.map((model) => (
        <article className="case-playbook" key={model.id}>
          <header className="course-hero">
            <span className="eyebrow">{model.family}</span>
            <h1>{model.title}</h1>
            <p>{model.objective}</p>
          </header>

          <div className="two-column">
            <div className="manual-section">
              <h2>Inputs / preparation</h2>
              <p>{model.inputs}</p>
            </div>
            <div className="manual-section">
              <h2>Outputs generated</h2>
              <p>{model.outputs}</p>
            </div>
          </div>

          <div className="manual-section result-impact">
            <h2>How to interpret it</h2>
            <p>{model.interpretation}</p>
          </div>

          <div className="two-column">
            <div className="manual-section result-good">
              <h2>Good result</h2>
              <p>{model.goodResult}</p>
            </div>
            <div className="manual-section result-bad">
              <h2>Bad result</h2>
              <p>{model.badResult}</p>
            </div>
          </div>

          <div className="manual-section">
            <h2>Professional applications</h2>
            <BadgeList items={model.applications} tone="green" />
          </div>
        </article>
      ))}
    </section>
  )
}
