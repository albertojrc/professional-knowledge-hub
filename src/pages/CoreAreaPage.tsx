import type { ViewId } from '../types/knowledge'
import { learningModules } from '../data/knowledge'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'
import { BadgeList } from '../components/ui/BadgeList'

interface CoreAreaPageProps {
  area: 'Data Science & Analytics' | 'Banking & Finance'
  onNavigate: (view: ViewId) => void
}

const areaCopy = {
  'Data Science & Analytics': {
    eyebrow: 'Core Area',
    title: 'Data Science & Analytics',
    description:
      'A structured learning area for moving from data foundations to machine learning, interpretation, dashboards, MLOps and AI systems.',
    nextView: 'output-atlas' as ViewId
  },
  'Banking & Finance': {
    eyebrow: 'Core Area',
    title: 'Banking & Finance',
    description:
      'A professional area connecting credit risk, fraud, AML/KYC, AI in Banking, corporate finance, cash flow, rating and valuation.',
    nextView: 'credit-risk' as ViewId
  }
}

export function CoreAreaPage({ area, onNavigate }: CoreAreaPageProps) {
  const copy = areaCopy[area]
  const modules = learningModules.filter((module) => module.area === area)

  return (
    <section className="page-stack">
      <div className="page-header-panel">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
        <button className="primary-button" onClick={() => onNavigate(copy.nextView)} type="button">
          Open recommended next section
        </button>
      </div>

      {modules.map((module) => (
        <article className="case-playbook" key={module.id}>
          <header className="course-hero">
            <span className="eyebrow">{module.level}</span>
            <h1>{module.title}</h1>
            <p>{module.subtitle}</p>
          </header>

          <div className="manual-section">
            <h2>Purpose</h2>
            <p>{module.purpose}</p>
          </div>

          <div className="manual-section">
            <h2>Lesson sequence</h2>
            <BadgeList items={module.lessons} tone="blue" />
          </div>

          <div className="manual-section">
            <h2>Professional workflow</h2>
            <KnowledgeChain nodes={module.workflow} />
          </div>

          <div className="two-column">
            <div className="manual-section">
              <h3>Outputs to interpret</h3>
              <BadgeList items={module.outputs} tone="purple" />
            </div>
            <div className="manual-section">
              <h3>Related cases</h3>
              <BadgeList items={module.relatedCases} tone="green" />
            </div>
          </div>

          <details className="details-card">
            <summary>Source coverage</summary>
            <ul>
              {module.sourceCoverage.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </details>
        </article>
      ))}
    </section>
  )
}
