export type FeatureReadinessStatus = 'Model-ready candidate' | 'Hold for evidence' | 'Blocked from modeling' | 'Governance control'
export type FeatureRiskLevel = 'Low' | 'Medium' | 'High'

export interface ModelReadyFeatureGroup {
  id: string
  group: string
  status: FeatureReadinessStatus
  risk: FeatureRiskLevel
  purpose: string
  candidateFields: string[]
  requiredEvidence: string[]
  transformations: string[]
  allowedUse: string
  blockedUse: string
  linkedReviewItems: string[]
  downstreamOutput: string
  nextAction: string
}

export interface ModelReadyFeatureSummary {
  totalGroups: number
  modelReadyCandidates: number
  heldForEvidence: number
  blockedGroups: number
  governanceControls: number
  highRiskGroups: number
}
