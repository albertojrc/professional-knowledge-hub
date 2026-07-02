import type { KnowledgeAsset, VisualOutputType } from '../types/knowledgeAsset'

export function resolveVisualOutputType(asset: KnowledgeAsset, hasChart: boolean): VisualOutputType {
  if (asset.visualOutputType) return asset.visualOutputType
  if (hasChart && asset.graphs.length > 0) return 'chart'
  if (asset.formula) return 'formula-card'
  if (asset.type === 'Framework') return 'process-flow'
  if (asset.type === 'Case' || asset.type === 'Project') return 'case-card'
  if (asset.area.includes('CFA') || asset.category.includes('CFA')) return 'checklist'
  if (asset.category.toLowerCase().includes('risk') || asset.category.toLowerCase().includes('governance')) return 'decision-table'
  if (asset.outputs.length >= 3 && asset.metrics.length >= 3) return 'matrix'
  return 'fallback'
}
