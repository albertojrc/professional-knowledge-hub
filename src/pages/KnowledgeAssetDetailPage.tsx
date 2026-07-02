import { knowledgeAssetRegistry } from '../data/knowledgeAssetRegistry'
import { getSourceAwareAssetMeta } from '../data/sourceAwareAssets'
import type { AssetProgressStatus } from '../types/learningProgress'
import { BadgeList } from '../components/ui/BadgeList'
import { SmartBadgeList } from '../components/ui/SmartBadgeList'
import { ReadingGuide } from '../components/ui/ReadingGuide'
import { AssetProgressControl } from '../components/ui/AssetProgressControl'
import type { MlChartType } from '../components/charts/MlMiniChart'
import { KnowledgeAssetVisualOutput } from '../components/knowledge/KnowledgeAssetVisualOutput'

interface AssetProgressApi {
  getAssetStatus: (assetId: string) => AssetProgressStatus
  setAssetStatus: (assetId: string, status: AssetProgressStatus) => void
}

interface KnowledgeAssetDetailPageProps {
  assetId: string
  onBack: () => void
  onOpenAsset: (assetId: string) => void
  assetProgress: AssetProgressApi
}

const lessonSections = ['Overview', 'Use', 'Interpret', 'Outputs', 'Applications', 'Practice']

export function KnowledgeAssetDetailPage({ assetId, onBack, onOpenAsset, assetProgress }: KnowledgeAssetDetailPageProps) {
  const asset = knowledgeAssetRegistry.find((item) => item.id === assetId) ?? knowledgeAssetRegistry[0]
  const related = asset.relatedAssets.map((id) => knowledgeAssetRegistry.find((item) => item.id === id)).filter(Boolean)
  const sourceMeta = getSourceAwareAssetMeta(asset.id)
  const mainGraph = asset.graphs[0]
  const chartType = mainGraph ? graphToType(mainGraph) : null
  const status = assetProgress.getAssetStatus(asset.id)

  return (
    <section className="concept-learning-page">
      <div className="lesson-toolbar">
        <button className="text-button" onClick={onBack} type="button">← Knowledge Library</button>
        <div className="lesson-breadcrumb"><span>{asset.area}</span><b>›</b><span>{asset.category}</span><b>›</b><strong>{asset.title}</strong></div>
        <div className="lesson-progress"><span>Learning status</span><div><i className={`status-${status.toLowerCase().replaceAll(' ', '-')}`} /></div><strong>{status}</strong></div>
      </div>

      <div className="concept-two-pane">
        <article className="concept-main lesson-paper">
          <header className="concept-hero lesson-hero">
            <span className="asset-icon large">{asset.icon}</span>
            <div><span className="eyebrow">{asset.type} · {asset.difficulty}</span><h1>{asset.title}</h1><p>{asset.summary}</p><BadgeList items={[asset.area, asset.category, sourceMeta?.evidenceLabel ?? 'Professional synthesis']} tone="blue" /></div>
          </header>

          {sourceMeta && (
            <section className="lesson-block source-evidence-block">
              <div className="lesson-block-title"><span>EV</span><h2>Evidence status</h2></div>
              <p><strong>{sourceMeta.evidenceLabel}.</strong> {sourceMeta.evidenceExplanation}</p>
              <BadgeList items={[...sourceMeta.linkedModuleIds, ...sourceMeta.linkedMaterialIds]} tone="purple" />
            </section>
          )}

          <nav className="lesson-section-tabs" aria-label="Concept sections">{lessonSections.map((section, index) => <span key={section}>{index + 1}. {section}</span>)}</nav>

          <ReadingGuide title="How to study this concept" steps={['Start with the business intuition before the formula or code.', 'Connect the concept to outputs, graphs, metrics and assumptions.', 'Finish by translating the concept into business and banking decisions.']} />

          <section className="lesson-block"><div className="lesson-block-title"><span>1</span><h2>What is it?</h2></div><p>{asset.whatItIs}</p></section>
          <section className="lesson-block insight-block"><div className="lesson-block-title"><span>2</span><h2>Why does it matter?</h2></div><p>{asset.whyItMatters}</p></section>

          {asset.formula && (
            <section className="formula-card"><div><span className="eyebrow">Core Logic</span><h2>Formula / Model expression</h2><pre>{asset.formula}</pre></div>{asset.example && <aside><strong>Example</strong><p>{asset.example}</p></aside>}</section>
          )}

          <section className="lesson-block"><div className="lesson-block-title"><span>3</span><h2>When is it used?</h2></div><BadgeList items={asset.whenToUse} tone="green" /></section>
          <section className="lesson-block"><div className="lesson-block-title"><span>4</span><h2>How is it used?</h2></div><ol className="step-list">{asset.howToUse.map((item) => <li key={item}>{item}</li>)}</ol></section>
          <section className="lesson-block insight-block"><div className="lesson-block-title"><span>5</span><h2>How is it interpreted?</h2></div><ul className="clean-list">{asset.interpretation.map((item) => <li key={item}>{item}</li>)}</ul></section>

          <section className="lesson-block output-learning-block">
            <div className="lesson-block-title"><span>6</span><h2>Outputs, metrics and assumptions</h2></div>
            <p>Hover or focus each capsule to understand what it means, what good looks like and how to improve it.</p>
            <div className="three-column-soft">
              <div><h3>Metrics</h3><SmartBadgeList items={asset.metrics} tone="green" /></div>
              <div><h3>Assumptions</h3><SmartBadgeList items={asset.assumptions} tone="amber" /></div>
              <div><h3>Outputs</h3><SmartBadgeList items={asset.outputs} tone="blue" /></div>
            </div>
          </section>

          <section className="two-column"><div className="lesson-block"><h2>Business applications</h2><BadgeList items={asset.businessApplications} tone="blue" /></div><div className="lesson-block"><h2>Banking applications</h2><BadgeList items={asset.bankingApplications} tone="amber" /></div></section>
          <section className="lesson-block warning-block"><div className="lesson-block-title"><span>!</span><h2>Common mistakes</h2></div><ul className="clean-list">{asset.commonMistakes.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="lesson-block tip-block"><div className="lesson-block-title"><span>✓</span><h2>Professional tip</h2></div><p>{asset.professionalTip}</p></section>

          {(asset.pythonSnippet || asset.sqlSnippet) && (
            <section className="two-column">{asset.pythonSnippet && <div className="lesson-block"><h2>Python</h2><pre className="code-block compact">{asset.pythonSnippet}</pre></div>}{asset.sqlSnippet && <div className="lesson-block"><h2>SQL / Data preparation</h2><p>{asset.sqlSnippet}</p></div>}</section>
          )}
        </article>

        <aside className="concept-output-panel">
          <div className="output-panel-card progress-panel"><span className="eyebrow">Study Tracker</span><h2>{asset.title}</h2><AssetProgressControl status={status} onChange={(nextStatus) => assetProgress.setAssetStatus(asset.id, nextStatus)} /></div>
          {sourceMeta && <div className="output-panel-card source-evidence-card"><span className="eyebrow">Evidence Status</span><h3>{sourceMeta.evidenceLabel}</h3><p>{sourceMeta.evidenceExplanation}</p></div>}
          <div className="output-panel-card"><span className="eyebrow">Output View</span><h2>{mainGraph ?? asset.visualOutputType ?? 'Professional Output'}</h2><KnowledgeAssetVisualOutput asset={asset} chartType={chartType} graphTitle={mainGraph} /></div>
          <div className="output-panel-card success-panel"><h3>Interpretation checklist</h3><ul><li>What does the output show?</li><li>Is the metric aligned with the business problem?</li><li>What decision becomes possible?</li></ul></div>
          <div className="output-panel-card"><h3>Metrics</h3><SmartBadgeList items={asset.metrics} tone="green" /><h3>Assumptions</h3><SmartBadgeList items={asset.assumptions} tone="amber" /><h3>Outputs</h3><SmartBadgeList items={asset.outputs} tone="blue" /></div>
          <div className="output-panel-card"><h3>Learning goals</h3><ul>{asset.learningGoals.map((goal) => <li key={goal}>{goal}</li>)}</ul></div>
          <div className="output-panel-card"><h3>Related assets</h3>{related.length > 0 ? <div className="related-stack">{related.map((item) => item && <button className="related-card" key={item.id} onClick={() => onOpenAsset(item.id)} type="button"><strong>{item.title}</strong><span>{item.type} · {item.area}</span></button>)}</div> : <p>Related assets will appear as the library expands.</p>}</div>
          <div className="output-panel-card source-panel"><h3>Source strategy</h3><p>{asset.sourceStrategy}</p></div>
        </aside>
      </div>
    </section>
  )
}

function graphToType(graph: string): MlChartType | null {
  const name = graph.toLowerCase()
  if (name.includes('precision')) return 'pr'
  if (name.includes('calibration')) return 'calibration'
  if (name.includes('confusion')) return 'confusion'
  if (name.includes('feature')) return 'feature-importance'
  if (name.includes('shap')) return 'shap'
  if (name.includes('residual')) return 'residual'
  if (name.includes('actual')) return 'actual-predicted'
  if (name.includes('elbow')) return 'elbow'
  if (name.includes('cluster')) return 'cluster'
  if (name.includes('forecast')) return 'forecast'
  if (name.includes('learning')) return 'learning-curve'
  if (name.includes('lift')) return 'lift'
  if (name.includes('gain')) return 'gain'
  if (name.includes('ks')) return 'ks'
  if (name.includes('partial') || name.includes('dependence')) return 'pdp'
  if (name.includes('roc')) return 'roc'
  return null
}
