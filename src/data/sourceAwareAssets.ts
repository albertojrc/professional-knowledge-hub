import type { EvidenceStatus } from '../types/evidenceExpansion'

export interface SourceAwareAssetMeta {
  assetId: string
  evidenceStatus: EvidenceStatus
  evidenceLabel: string
  evidenceExplanation: string
  linkedCandidateId: string
  linkedMaterialIds: string[]
  linkedModuleIds: string[]
}

export const sourceAwareAssetMeta: SourceAwareAssetMeta[] = [
  {
    assetId: 'data-quality-report',
    evidenceStatus: 'Class evidence candidate',
    evidenceLabel: 'Class evidence candidate',
    evidenceExplanation: 'This asset is professionally important and likely to be supported by data science or BI materials, but class evidence still needs inspection.',
    linkedCandidateId: 'evidence-data-quality-report',
    linkedMaterialIds: ['dual-degree-folder'],
    linkedModuleIds: ['mbd-data-science', 'mbd-data-engineering-bi']
  },
  {
    assetId: 'analytical-base-table',
    evidenceStatus: 'Class evidence candidate',
    evidenceLabel: 'Class evidence candidate',
    evidenceExplanation: 'This asset is expected to connect SQL, feature engineering and modeling assignments, but source coverage must be validated from actual files.',
    linkedCandidateId: 'evidence-analytical-base-table',
    linkedMaterialIds: ['dual-degree-folder'],
    linkedModuleIds: ['mbd-data-engineering-bi', 'mbd-data-science']
  },
  {
    assetId: 'sql-joins',
    evidenceStatus: 'Class evidence candidate',
    evidenceLabel: 'Class evidence candidate',
    evidenceExplanation: 'This asset is likely to be supported by SQL or database materials, but exact join types and examples must be verified.',
    linkedCandidateId: 'evidence-sql-joins',
    linkedMaterialIds: ['dual-degree-folder'],
    linkedModuleIds: ['mbd-data-engineering-bi']
  },
  {
    assetId: 'financial-ratios',
    evidenceStatus: 'Class evidence candidate',
    evidenceLabel: 'Class evidence candidate',
    evidenceExplanation: 'This asset is likely to be supported by finance materials, but exact ratios and interpretations must be extracted from source files.',
    linkedCandidateId: 'evidence-financial-ratios',
    linkedMaterialIds: ['dual-degree-folder'],
    linkedModuleIds: ['mim-finance-economics']
  },
  {
    assetId: 'cash-flow-analysis',
    evidenceStatus: 'Class evidence candidate',
    evidenceLabel: 'Class evidence candidate',
    evidenceExplanation: 'This asset is likely to be supported by finance or valuation material, but class evidence remains pending.',
    linkedCandidateId: 'evidence-cash-flow-analysis',
    linkedMaterialIds: ['dual-degree-folder'],
    linkedModuleIds: ['mim-finance-economics']
  }
]

export function getSourceAwareAssetMeta(assetId: string) {
  return sourceAwareAssetMeta.find((item) => item.assetId === assetId)
}
