import { knowledgeChains } from '../data/knowledge'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

export function KnowledgeMapPage() {
  return (
    <section className="page-stack">
      <div className="page-header-panel">
        <span className="eyebrow">Knowledge Map</span>
        <h1>Connected professional workflows</h1>
        <p>Knowledge chains connect concepts, tools, models, outputs and business decisions.</p>
      </div>

      <div className="card-grid">
        {knowledgeChains.map((chain) => (
          <article className="reference-card wide" key={chain.id}>
            <span className="eyebrow">Knowledge Chain</span>
            <h3>{chain.title}</h3>
            <KnowledgeChain nodes={chain.nodes} />
            <p>{chain.professionalUse}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
