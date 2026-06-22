import { businessCases } from '../data/knowledge'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'
import { BadgeList } from '../components/ui/BadgeList'

export function BusinessCasesPage() {
  return (
    <section className="page-stack">
      <div className="page-header-panel">
        <span className="eyebrow">Business Case Library</span>
        <h1>Professional playbooks</h1>
        <p>Cases translate knowledge into business questions, data, workflow, outputs, decisions and governance.</p>
      </div>

      {businessCases.map((item) => (
        <article className="case-playbook" key={item.id}>
          <span className="eyebrow">{item.area}</span>
          <h2>{item.title}</h2>
          <p><strong>Business question:</strong> {item.businessQuestion}</p>

          <div className="manual-section">
            <h3>Data required</h3>
            <BadgeList items={item.dataRequired} tone="blue" />
          </div>

          <div className="manual-section">
            <h3>Workflow</h3>
            <KnowledgeChain nodes={item.workflow} />
          </div>

          <div className="two-column">
            <div className="manual-section">
              <h3>Tools</h3>
              <BadgeList items={item.tools} tone="purple" />
            </div>
            <div className="manual-section">
              <h3>Outputs</h3>
              <BadgeList items={item.outputs} tone="green" />
            </div>
          </div>

          <div className="manual-section result-impact">
            <h3>Decision</h3>
            <p>{item.decision}</p>
          </div>

          <div className="manual-section result-bad">
            <h3>Governance</h3>
            <p>{item.governance}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
