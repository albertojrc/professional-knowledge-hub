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
        <p>Models are organized by objective, inputs, outputs, good/bad results and applications.</p>
      </div>
      <div className="card-grid">
        {visibleModels.map((model) => (
          <article className="reference-card" key={model.id}>
            <span className="eyebrow">{model.family}</span>
            <h3>{model.title}</h3>
            <p><strong>Objective:</strong> {model.objective}</p>
            <p><strong>Inputs:</strong> {model.inputs}</p>
            <p><strong>Outputs:</strong> {model.outputs}</p>
            <p><strong>Interpretation:</strong> {model.interpretation}</p>
            <div className="mini-result good"><strong>Good:</strong> {model.goodResult}</div>
            <div className="mini-result bad"><strong>Bad:</strong> {model.badResult}</div>
            <BadgeList items={model.applications} tone="green" />
          </article>
        ))}
      </div>
    </section>
  )
}
