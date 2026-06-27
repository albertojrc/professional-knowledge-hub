import { formulas, models } from '../data/knowledge'
import { extraModels } from '../data/phase3Knowledge'
import { sprint25Formulas } from '../data/referenceExpansionSprint25'
import { BadgeList } from '../components/ui/BadgeList'
import { ReadingGuide } from '../components/ui/ReadingGuide'

interface ReferencePageProps {
  type: 'formulas' | 'models'
  query: string
  focusId?: string | null
}

export function ReferencePage({ type, query, focusId }: ReferencePageProps) {
  const normalizedQuery = query.trim().toLowerCase()

  if (type === 'formulas') {
    const allFormulas = [...formulas, ...sprint25Formulas]
    const visibleFormulas = allFormulas
      .filter((formula) => !normalizedQuery || `${formula.title} ${formula.area} ${formula.formula} ${formula.interpretation}`.toLowerCase().includes(normalizedQuery))
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.title.localeCompare(b.title)))

    return (
      <section className="page-stack">
        {focusId && <div className="deep-link-banner">Opened from Global Search · focused formula</div>}
        <div className="page-header-panel">
          <span className="eyebrow">Formula Library</span>
          <h1>Finance, risk and analytics formulas</h1>
          <p>Formulas are shown with variables, interpretation, professional use and related knowledge.</p>
        </div>

        <ReadingGuide title="How to use formulas professionally" steps={['Start by identifying the decision or metric the formula supports.', 'Read the variables before using the formula mechanically.', 'Translate the numerical result into interpretation and action.']} />

        <div className="card-grid">
          {visibleFormulas.map((formula) => (
            <article className={`reference-card ${formula.id === focusId ? 'focused-result-card' : ''}`} key={formula.id}>
              <span className="eyebrow">{formula.area}</span>
              <h3>{formula.title}</h3>
              <pre className="code-block compact">{formula.formula}</pre>
              <div className="mini-result good"><strong>Variables:</strong> {formula.variables}</div>
              <p><strong>Interpretation:</strong> {formula.interpretation}</p>
              <p><strong>Professional use:</strong> {formula.professionalUse}</p>
              <BadgeList items={formula.relatedItems} tone="purple" />
            </article>
          ))}
        </div>
      </section>
    )
  }

  const allModels = [...models, ...extraModels]
  const visibleModels = allModels
    .filter((model) => !normalizedQuery || `${model.title} ${model.family} ${model.objective} ${model.interpretation}`.toLowerCase().includes(normalizedQuery))
    .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.title.localeCompare(b.title)))

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Global Search · focused model</div>}
      <div className="page-header-panel">
        <span className="eyebrow">Model Library</span>
        <h1>Models with interpretation and business meaning</h1>
        <p>Each model is treated as a professional method: objective, preparation, outputs, interpretation, good/bad result and applications.</p>
      </div>

      <ReadingGuide title="How to choose and read a model" steps={['Start with the model objective and confirm it matches the business question.', 'Check the inputs and outputs before interpreting performance.', 'Use good/bad result signals to decide whether to deploy, improve or reject the model.']} />

      {visibleModels.map((model) => (
        <article className={`case-playbook readable-page ${model.id === focusId ? 'focused-result-card' : ''}`} key={model.id}>
          <header className="course-hero">
            <span className="eyebrow">{model.family}</span>
            <h1>{model.title}</h1>
            <p>{model.objective}</p>
          </header>

          <div className="two-column">
            <div className="manual-section section-lead"><span className="section-number">INPUT</span><div><h2>Inputs / preparation</h2><p>{model.inputs}</p></div></div>
            <div className="manual-section section-lead"><span className="section-number">OUTPUT</span><div><h2>Outputs generated</h2><p>{model.outputs}</p></div></div>
          </div>

          <div className="manual-section result-impact section-lead"><span className="section-number">READ</span><div><h2>How to interpret it</h2><p>{model.interpretation}</p></div></div>
          <div className="two-column"><div className="manual-section result-good"><h2>Good result</h2><p>{model.goodResult}</p></div><div className="manual-section result-bad"><h2>Bad result</h2><p>{model.badResult}</p></div></div>
          <div className="manual-section section-lead"><span className="section-number">USE</span><div><h2>Professional applications</h2><BadgeList items={model.applications} tone="green" /></div></div>
        </article>
      ))}
    </section>
  )
}
