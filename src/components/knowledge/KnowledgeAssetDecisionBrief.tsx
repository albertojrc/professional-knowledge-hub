import type { KnowledgeAsset } from '../../types/knowledgeAsset'

export function KnowledgeAssetDecisionBrief({ asset }: { asset: KnowledgeAsset }) {
  const metric = asset.metrics[0] ?? 'primary metric'
  const output = asset.outputs[0] ?? 'professional output'
  const assumption = asset.assumptions[0] ?? 'main assumption'
  const decision = asset.bankingApplications[0] ?? asset.businessApplications[0] ?? asset.professionalTip
  return <section className="lesson-block decision-brief-block"><div className="lesson-block-title"><span>DB</span><h2>Decision brief</h2></div><div className="decision-brief-grid"><article><span>Use this concept to decide</span><strong>{decision}</strong></article><article><span>Primary output</span><strong>{output}</strong></article><article><span>Metric to check</span><strong>{metric}</strong></article><article><span>Assumption to challenge</span><strong>{assumption}</strong></article></div></section>
}
