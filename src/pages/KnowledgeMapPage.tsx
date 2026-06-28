import { useMemo, useState } from 'react'
import { knowledgeChains } from '../data/knowledge'
import { getGraphNode, professionalGraphLinks, professionalGraphNodes, professionalGraphPathways } from '../data/professionalGraph'
import type { ProfessionalGraphLink, ProfessionalGraphNode, ProfessionalNodeType } from '../types/professionalGraph'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'
import { BadgeList } from '../components/ui/BadgeList'

const allValue = 'All'
const nodeTypeOptions = [allValue, ...Array.from(new Set(professionalGraphNodes.map((node) => node.type))).sort()]
const areaOptions = [allValue, ...Array.from(new Set(professionalGraphNodes.map((node) => node.area))).sort()]

export function KnowledgeMapPage() {
  const [nodeType, setNodeType] = useState(allValue)
  const [area, setArea] = useState(allValue)
  const [query, setQuery] = useState('')

  const filteredNodes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return professionalGraphNodes
      .filter((node) => nodeType === allValue || node.type === nodeType)
      .filter((node) => area === allValue || node.area === area)
      .filter((node) => !normalizedQuery || `${node.label} ${node.type} ${node.area} ${node.summary}`.toLowerCase().includes(normalizedQuery))
      .sort((a, b) => a.type.localeCompare(b.type) || a.label.localeCompare(b.label))
  }, [area, nodeType, query])

  const visibleNodeIds = new Set(filteredNodes.map((node) => node.id))
  const visibleLinks = professionalGraphLinks.filter((link) => visibleNodeIds.has(link.from) || visibleNodeIds.has(link.to))

  return (
    <section className="page-stack">
      <div className="hero-panel graph-hero">
        <div>
          <span className="eyebrow">Sprint 2.7 · Knowledge Graph Upgrade</span>
          <h1>Connected professional knowledge graph</h1>
          <p>Trace how materials become modules, areas, evidence candidates, assets, outputs, formulas and business cases.</p>
        </div>
        <div className="graph-score-card">
          <span className="eyebrow">Graph Coverage</span>
          <strong>{professionalGraphNodes.length}</strong>
          <p>nodes connected by {professionalGraphLinks.length} relationships</p>
          <div className="inventory-mini-stats"><span>{professionalGraphPathways.length} pathways</span><span>{professionalGraphNodes.filter((node) => node.type === 'Asset').length} assets</span><span>{professionalGraphNodes.filter((node) => node.type === 'Case').length} cases</span></div>
        </div>
      </div>

      <section className="manual-panel inventory-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Graph Filters</span><h2>{filteredNodes.length} of {professionalGraphNodes.length} nodes visible</h2></div>
          <button className="text-button" onClick={() => { setNodeType(allValue); setArea(allValue); setQuery('') }} type="button">Clear filters</button>
        </div>
        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search graph nodes, areas, assets, outputs, formulas or cases..." />
        <div className="library-filter-grid">
          <GraphSelect label="Node type" value={nodeType} values={nodeTypeOptions} onChange={setNodeType} />
          <GraphSelect label="Area" value={area} values={areaOptions} onChange={setArea} />
        </div>
      </section>

      <section className="manual-panel result-good">
        <span className="eyebrow">Graph Logic</span>
        <h2>From source material to decision</h2>
        <KnowledgeChain nodes={['Material', 'Module', 'Course Area', 'Evidence Candidate', 'Knowledge Asset', 'Output', 'Formula', 'Business Case']} />
        <p>This is the core traceability chain for Sprint 2. A concept should eventually show where it came from, what it explains and what decision it supports.</p>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Professional Pathways</span>
        <h2>End-to-end knowledge paths</h2>
        <div className="graph-pathway-grid">
          {professionalGraphPathways.map((pathway) => {
            const nodes = pathway.nodeIds.map((id) => getGraphNode(id)).filter(Boolean) as ProfessionalGraphNode[]
            return (
              <article className="graph-pathway-card" key={pathway.id}>
                <span className="eyebrow">Pathway</span>
                <h3>{pathway.title}</h3>
                <p>{pathway.purpose}</p>
                <KnowledgeChain nodes={nodes.map((node) => node.label)} />
                <div className="mini-result good"><strong>Decision:</strong> {pathway.decision}</div>
                <div className="mini-result warning"><strong>Evidence:</strong> {pathway.evidenceStatus}</div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Graph Nodes</span>
        <h2>Connected knowledge objects</h2>
        <div className="graph-node-grid">
          {filteredNodes.map((node) => <GraphNodeCard key={node.id} node={node} links={professionalGraphLinks.filter((link) => link.from === node.id || link.to === node.id)} />)}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Relationships</span>
        <h2>Visible graph links</h2>
        <div className="graph-link-list">
          {visibleLinks.map((link) => <GraphLinkCard key={link.id} link={link} />)}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Original Knowledge Chains</span>
        <h2>Existing workflow chains</h2>
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
    </section>
  )
}

function GraphNodeCard({ node, links }: { node: ProfessionalGraphNode; links: ProfessionalGraphLink[] }) {
  const connectedLabels = links.map((link) => getGraphNode(link.from === node.id ? link.to : link.from)?.label).filter(Boolean) as string[]

  return (
    <article className="graph-node-card">
      <div className="graph-node-top"><span className={`node-type-pill node-${node.type.toLowerCase().replaceAll(' ', '-')}`}>{node.type as ProfessionalNodeType}</span><span>{node.area}</span></div>
      <h3>{node.label}</h3>
      <p>{node.summary}</p>
      <h4>Connected to</h4>
      <BadgeList items={connectedLabels.length ? connectedLabels : ['No visible links']} tone="purple" />
    </article>
  )
}

function GraphLinkCard({ link }: { link: ProfessionalGraphLink }) {
  const from = getGraphNode(link.from)
  const to = getGraphNode(link.to)
  return (
    <article className="graph-link-card">
      <div><strong>{from?.label ?? link.from}</strong><span>{link.type}</span><strong>{to?.label ?? link.to}</strong></div>
      <p>{link.explanation}</p>
      <span className={`link-strength strength-${link.strength.toLowerCase().replaceAll(' ', '-')}`}>{link.strength}</span>
    </article>
  )
}

function GraphSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return (
    <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
  )
}
