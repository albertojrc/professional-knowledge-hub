import { resolveVisualOutputType } from '../../data/visualOutputTypeResolver'
import type { KnowledgeAsset } from '../../types/knowledgeAsset'
import { BadgeList } from '../ui/BadgeList'
import { MlMiniChart, type MlChartType } from '../charts/MlMiniChart'

interface KnowledgeAssetVisualOutputProps { asset: KnowledgeAsset; chartType: MlChartType | null; graphTitle?: string }

export function KnowledgeAssetVisualOutput({ asset, chartType, graphTitle }: KnowledgeAssetVisualOutputProps) {
  const visualType = resolveVisualOutputType(asset, Boolean(chartType && graphTitle))
  if (visualType === 'chart' && chartType && graphTitle) return <MlMiniChart title={graphTitle} type={chartType} />
  if (visualType === 'formula-card') return <FormulaVisual asset={asset} />
  if (visualType === 'matrix') return <MatrixVisual asset={asset} />
  if (visualType === 'checklist') return <ChecklistVisual asset={asset} />
  if (visualType === 'process-flow') return <ProcessFlowVisual asset={asset} />
  if (visualType === 'decision-table') return <DecisionTableVisual asset={asset} />
  if (visualType === 'case-card') return <CaseCardVisual asset={asset} />
  return <FallbackVisual asset={asset} />
}

function FormulaVisual({ asset }: { asset: KnowledgeAsset }) { return <div className="asset-visual formula-visual"><span className="eyebrow">Formula card</span><pre>{asset.formula ?? asset.outputs[0] ?? asset.title}</pre>{asset.example && <p>{asset.example}</p>}</div> }
function ChecklistVisual({ asset }: { asset: KnowledgeAsset }) { return <div className="asset-visual checklist-visual"><span className="eyebrow">Study checklist</span><ul>{asset.howToUse.slice(0, 5).map((item) => <li key={item}>{item}</li>)}</ul></div> }
function ProcessFlowVisual({ asset }: { asset: KnowledgeAsset }) { return <div className="asset-visual flow-visual"><span className="eyebrow">Process flow</span>{asset.howToUse.slice(0, 5).map((item, index) => <div key={item}><strong>{index + 1}</strong><span>{item}</span></div>)}</div> }
function MatrixVisual({ asset }: { asset: KnowledgeAsset }) { return <div className="asset-visual matrix-visual"><span className="eyebrow">Output matrix</span><div><strong>Metrics</strong><BadgeList items={asset.metrics.slice(0, 4)} tone="green" /></div><div><strong>Outputs</strong><BadgeList items={asset.outputs.slice(0, 4)} tone="blue" /></div></div> }
function DecisionTableVisual({ asset }: { asset: KnowledgeAsset }) { return <div className="asset-visual decision-visual"><span className="eyebrow">Decision table</span><div><strong>Signal</strong><span>{asset.metrics[0] ?? 'metric'}</span></div><div><strong>Meaning</strong><span>{asset.interpretation[0] ?? asset.summary}</span></div><div><strong>Action</strong><span>{asset.outputs[0] ?? 'professional output'}</span></div></div> }
function CaseCardVisual({ asset }: { asset: KnowledgeAsset }) { return <div className="asset-visual case-visual"><span className="eyebrow">Case view</span><h3>{asset.title}</h3><p>{asset.businessApplications[0] ?? asset.summary}</p><BadgeList items={asset.outputs.slice(0, 5)} tone="blue" /></div> }
function FallbackVisual({ asset }: { asset: KnowledgeAsset }) { return <div className="asset-visual fallback-visual"><span className="eyebrow">Professional output</span><strong>No specific chart assigned.</strong><p>Use the outputs below instead of forcing an unrelated visual.</p><BadgeList items={asset.outputs.slice(0, 6)} tone="blue" /></div> }
