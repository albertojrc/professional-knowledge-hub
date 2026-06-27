import { knowledgeAssets } from '../data/knowledgeAssets'
import { BadgeList } from '../components/ui/BadgeList'
import { ReadingGuide } from '../components/ui/ReadingGuide'
import { MlMiniChart, type MlChartType } from '../components/charts/MlMiniChart'

interface KnowledgeAssetDetailPageProps {
  assetId: string
  onBack: () => void
  onOpenAsset: (assetId: string) => void
}

export function KnowledgeAssetDetailPage({ assetId, onBack, onOpenAsset }: KnowledgeAssetDetailPageProps) {
  const asset = knowledgeAssets.find((item) => item.id === assetId) ?? knowledgeAssets[0]
  const related = asset.relatedAssets
    .map((id) => knowledgeAssets.find((item) => item.id === id))
    .filter(Boolean)

  return (
    <section className="concept-layout">
      <article className="concept-main">
        <button className="text-button" onClick={onBack} type="button">← Back to Knowledge Library</button>

        <header className="concept-hero">
          <span className="asset-icon large">{asset.icon}</span>
          <div>
            <span className="eyebrow">{asset.area} · {asset.category}</span>
            <h1>{asset.title}</h1>
            <p>{asset.summary}</p>
            <BadgeList items={[asset.type, asset.difficulty]} tone="purple" />
          </div>
        </header>

        <ReadingGuide
          title="How to study this concept"
          steps={[
            'Start with what it is and why it matters professionally.',
            'Connect the concept to outputs, metrics, assumptions and interpretation.',
            'Finish by reviewing business use, banking use, mistakes and related knowledge.'
          ]}
        />

        <section className="manual-section section-lead">
          <span className="section-number">01</span>
          <div><h2>What is it?</h2><p>{asset.whatItIs}</p></div>
        </section>

        <section className="manual-section section-lead result-impact">
          <span className="section-number">WHY</span>
          <div><h2>Why does it matter?</h2><p>{asset.whyItMatters}</p></div>
        </section>

        {asset.formula && (
          <section className="manual-section">
            <h2>Formula / Core logic</h2>
            <pre className="code-block compact">{asset.formula}</pre>
            {asset.example && <p>{asset.example}</p>}
          </section>
        )}

        <section className="manual-section section-lead">
          <span className="section-number">02</span>
          <div><h2>When is it used?</h2><BadgeList items={asset.whenToUse} tone="green" /></div>
        </section>

        <section className="manual-section section-lead">
          <span className="section-number">03</span>
          <div><h2>How is it used?</h2><ul>{asset.howToUse.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>

        <section className="manual-section section-lead result-impact">
          <span className="section-number">READ</span>
          <div><h2>How is it interpreted?</h2><ul>{asset.interpretation.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>

        <section className="manual-section">
          <h2>Outputs and graphs</h2>
          <div className="two-column">
            <div><h3>Typical outputs</h3><BadgeList items={asset.outputs} tone="blue" /></div>
            <div><h3>Typical graphs</h3><BadgeList items={asset.graphs} tone="purple" /></div>
          </div>
          <div className="ml-chart-grid">
            {asset.graphs.slice(0, 2).map((graph) => <MlMiniChart key={graph} title={graph} type={graphToType(graph)} />)}
          </div>
        </section>

        <section className="two-column">
          <div className="manual-section"><h2>Business applications</h2><BadgeList items={asset.businessApplications} tone="blue" /></div>
          <div className="manual-section"><h2>Banking applications</h2><BadgeList items={asset.bankingApplications} tone="amber" /></div>
        </section>

        <section className="manual-section result-bad section-lead">
          <span className="section-number">AVOID</span>
          <div><h2>Common mistakes</h2><ul>{asset.commonMistakes.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>

        <section className="manual-section result-good section-lead">
          <span className="section-number">TIP</span>
          <div><h2>Professional tip</h2><p>{asset.professionalTip}</p></div>
        </section>

        {(asset.pythonSnippet || asset.sqlSnippet) && (
          <section className="two-column">
            {asset.pythonSnippet && <div className="manual-section"><h2>Python</h2><pre className="code-block compact">{asset.pythonSnippet}</pre></div>}
            {asset.sqlSnippet && <div className="manual-section"><h2>SQL / Data preparation</h2><p>{asset.sqlSnippet}</p></div>}
          </section>
        )}
      </article>

      <aside className="concept-side panel-card">
        <span className="eyebrow">Learning Goals</span>
        <ul>{asset.learningGoals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
        <h3>Metrics</h3><BadgeList items={asset.metrics} tone="green" />
        <h3>Assumptions</h3><BadgeList items={asset.assumptions} tone="amber" />
        <h3>Related Assets</h3>
        {related.length > 0 ? (
          <div className="related-stack">
            {related.map((item) => item && <button className="related-card" key={item.id} onClick={() => onOpenAsset(item.id)} type="button"><strong>{item.title}</strong><span>{item.type} · {item.area}</span></button>)}
          </div>
        ) : <p>Related assets will appear as the library expands.</p>}
        <h3>Source strategy</h3><p>{asset.sourceStrategy}</p>
      </aside>
    </section>
  )
}

function graphToType(graph: string): MlChartType {
  const name = graph.toLowerCase()
  if (name.includes('precision')) return 'pr'
  if (name.includes('calibration')) return 'calibration'
  if (name.includes('confusion')) return 'confusion'
  if (name.includes('feature')) return 'feature-importance'
  if (name.includes('shap')) return 'shap'
  if (name.includes('residual')) return 'residual'
  if (name.includes('actual')) return 'actual-predicted'
  if (name.includes('elbow')) return 'elbow'
  if (name.includes('lift')) return 'lift'
  if (name.includes('gain')) return 'gain'
  if (name.includes('ks')) return 'ks'
  return 'roc'
}
