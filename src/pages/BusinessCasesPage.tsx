import { businessCases } from '../data/knowledge'
import { sprint26BusinessCases } from '../data/businessCasesSprint26'
import { phase4BusinessCases } from '../data/businessCasesPhase4'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'
import { BadgeList } from '../components/ui/BadgeList'

interface BusinessCasesPageProps { focusId?: string | null }

const allBusinessCases = [...businessCases, ...sprint26BusinessCases, ...phase4BusinessCases]

export function BusinessCasesPage({ focusId }: BusinessCasesPageProps) {
  const sortedCases = [...allBusinessCases].sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.area.localeCompare(b.area) || a.title.localeCompare(b.title)))
  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Global Search · focused business case</div>}
      <div className="page-header-panel"><span className="eyebrow">Sprint 4.3 · Business Case Library</span><h1>Professional cases for workflows, outputs and decisions.</h1><p>Cases connect formulas, models, dashboards and market interpretation to practical business workflows.</p></div>
      {sortedCases.map((item) => (
        <article className={`case-playbook ${item.id === focusId ? 'focused-result-card' : ''}`} key={item.id}>
          <span className="eyebrow">{item.area}</span><h2>{item.title}</h2><p><strong>Business question:</strong> {item.businessQuestion}</p>
          <div className="manual-section"><h3>Data required</h3><BadgeList items={item.dataRequired} tone="blue" /></div>
          <div className="manual-section"><h3>Workflow</h3><KnowledgeChain nodes={item.workflow} /></div>
          <div className="two-column"><div className="manual-section"><h3>Tools</h3><BadgeList items={item.tools} tone="purple" /></div><div className="manual-section"><h3>Outputs</h3><BadgeList items={item.outputs} tone="green" /></div></div>
          <div className="manual-section result-impact"><h3>Decision</h3><p>{item.decision}</p></div>
          <div className="manual-section result-bad"><h3>Governance</h3><p>{item.governance}</p></div>
          <div className="manual-section"><h3>Related modules</h3><BadgeList items={item.relatedModules} tone="amber" /></div>
        </article>
      ))}
    </section>
  )
}
