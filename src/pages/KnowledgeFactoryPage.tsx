import { assetQualityGates, assetTemplateSections, expansionBacklog, expansionLanes, sourceTiers } from '../data/assetExpansionSystem'
import { BadgeList } from '../components/ui/BadgeList'

interface KnowledgeFactoryPageProps {
  focusId?: string | null
}

export function KnowledgeFactoryPage({ focusId }: KnowledgeFactoryPageProps) {
  const p0Items = expansionBacklog.filter((item) => item.priority === 'P0')
  const totalTarget = expansionLanes.reduce((sum, lane) => sum + lane.targetAssets, 0)
  const totalCurrent = expansionLanes.reduce((sum, lane) => sum + lane.currentAssets, 0)
  const sortedBacklog = [...expansionBacklog].sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.title.localeCompare(b.title)))

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Global Search · focused backlog item</div>}
      <div className="hero-panel academy-hero">
        <span className="eyebrow">Sprint 1.3 · Knowledge Factory</span>
        <h1>Expansion system for turning concepts into reusable professional assets.</h1>
        <p>This is the operating layer that controls how new knowledge enters the Hub: source strategy, quality gates, backlog priority and reusable asset structure.</p>
        <div className="badge-list">
          <span className="badge badge-blue">Current assets: {totalCurrent}</span>
          <span className="badge badge-green">Target assets: {totalTarget}</span>
          <span className="badge badge-purple">P0 backlog: {p0Items.length}</span>
        </div>
      </div>

      <section className="manual-panel">
        <span className="eyebrow">Expansion Lanes</span>
        <h2>Professional areas to scale</h2>
        <div className="factory-lane-grid">
          {expansionLanes.map((lane) => (
            <article className="factory-card" key={lane.id}>
              <h3>{lane.area}</h3><p>{lane.purpose}</p>
              <div className="factory-progress"><i style={{ width: `${Math.min(100, (lane.currentAssets / lane.targetAssets) * 100)}%` }} /></div>
              <strong>{lane.currentAssets} / {lane.targetAssets} assets</strong>
              <span>{lane.nextMilestone}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Source Strategy</span>
        <h2>How new knowledge is allowed to enter the Hub</h2>
        <div className="source-tier-grid">
          {sourceTiers.map((tier) => (
            <article className="factory-card" key={tier.tier}>
              <span className="eyebrow">{tier.tier}</span><h3>{tier.label}</h3><p>{tier.useFor}</p><BadgeList items={tier.examples} tone="blue" />
            </article>
          ))}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Quality Gates</span>
        <h2>Every asset must pass these checks</h2>
        <div className="quality-grid">
          {assetQualityGates.map((gate) => <article className="quality-card" key={gate.id}><strong>{gate.title}</strong><p>{gate.description}</p><span>{gate.required ? 'Required' : 'Optional'}</span></article>)}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Asset Template</span>
        <h2>The standard structure for every concept page</h2>
        <div className="template-steps">
          {assetTemplateSections.map((section, index) => <div className="template-step" key={section}><span>{index + 1}</span><p>{section}</p></div>)}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Expansion Backlog</span>
        <h2>Next assets to create</h2>
        <div className="backlog-table">
          {sortedBacklog.map((item) => (
            <article className={`backlog-row ${item.id === focusId ? 'focused-result-card' : ''}`} key={item.id}>
              <div><strong>{item.title}</strong><span>{item.area} · {item.category} · {item.type}</span></div>
              <BadgeList items={[item.priority, item.status]} tone={item.priority === 'P0' ? 'red' : item.priority === 'P1' ? 'amber' : 'blue'} />
              <p>{item.whyItMatters}</p>
              <details open={item.id === focusId}>
                <summary>Source plan and connections</summary>
                <h4>Source plan</h4><BadgeList items={item.sourcePlan} tone="blue" />
                <h4>Related assets</h4><BadgeList items={item.relatedAssets} tone="purple" />
              </details>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
