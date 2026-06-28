export type CoverageStatus = 'Source-backed' | 'Evidence candidate' | 'Recommended complement' | 'Pending inspection' | 'Needs review'
export type CoverageRisk = 'Low' | 'Medium' | 'High'
export type CoverageObjectType = 'Asset' | 'Output' | 'Formula' | 'Business Case' | 'Graph Link' | 'Pathway'

export interface SourceCoverageRecord {
  id: string
  title: string
  objectType: CoverageObjectType
  area: string
  status: CoverageStatus
  risk: CoverageRisk
  linkedMaterials: string[]
  linkedModules: string[]
  linkedObjects: string[]
  evidenceAvailable: string[]
  gaps: string[]
  nextAction: string
}

export interface SourceCoverageRule {
  id: string
  title: string
  description: string
  passCondition: string
}

export interface SourceCoverageSummary {
  total: number
  sourceBacked: number
  evidenceCandidates: number
  recommendedComplements: number
  pendingInspection: number
  needsReview: number
  highRisk: number
}
