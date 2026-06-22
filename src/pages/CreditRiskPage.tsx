import { creditRiskLesson } from '../data/knowledge'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'
import { BadgeList } from '../components/ui/BadgeList'

const lessonNav = [
  'Banking Credit Logic',
  'Credit Scoring',
  'PD / LGD / EAD',
  'Model Evaluation',
  'Calibration',
  'SHAP Explainability',
  'Monitoring / PSI',
  'Governance',
  'Case Lab'
]

export function CreditRiskPage() {
  const lesson = creditRiskLesson

  return (
    <section className="course-layout">
      <aside className="lesson-nav panel-card">
        <span className="eyebrow">Course Navigation</span>
        {lessonNav.map((item, index) => (
          <div className={`lesson-nav-item ${item === 'Credit Scoring' ? 'active' : ''}`} key={item}>
            <span>{index + 1}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </aside>

      <article className="course-main">
        <header className="course-hero">
          <span className="eyebrow">Banking + Machine Learning + Finance + Governance</span>
          <h1>{lesson.title}</h1>
          <p>{lesson.purpose}</p>
        </header>

        <div className="manual-section">
          <h2>1. What it is</h2>
          <p>{lesson.explanation}</p>
        </div>

        <div className="manual-section">
          <h2>2. Professional workflow</h2>
          <KnowledgeChain nodes={lesson.professionalWorkflow} />
        </div>

        <div className="manual-section">
          <h2>3. Outputs to interpret</h2>
          <BadgeList items={lesson.outputs} tone="purple" />
          <p>
            ROC-AUC, Gini and KS evaluate ranking. Calibration checks probability reliability.
            SHAP explains drivers. PSI monitors population drift after deployment.
          </p>
        </div>

        <div className="manual-section">
          <h2>4. Banking decisions</h2>
          <BadgeList items={lesson.decisions} tone="green" />
        </div>

        <details className="details-card" open>
          <summary>Red flags and common mistakes</summary>
          <ul>
            {lesson.redFlags.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      </article>

      <aside className="context-panel panel-card">
        <span className="eyebrow">Context Panel</span>
        <h3>Related knowledge</h3>
        <h4>Formulas</h4>
        <BadgeList items={lesson.relatedFormulas} tone="amber" />
        <h4>Models</h4>
        <BadgeList items={lesson.relatedModels} tone="blue" />
        <h4>Cases</h4>
        <BadgeList items={lesson.relatedCases} tone="green" />
        <h4>Source coverage</h4>
        <ul className="source-list">
          {lesson.sourceCoverage.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      </aside>
    </section>
  )
}
