import type { MaterialArea, ProgramName } from './materialInventory'

export type EvidenceStatus = 'Class evidence pending' | 'Class evidence candidate' | 'Recommended complement' | 'Needs review'

export interface EvidenceExpansionCandidate {
  id: string
  assetId: string
  title: string
  area: MaterialArea
  program: ProgramName
  status: EvidenceStatus
  linkedModuleIds: string[]
  linkedMaterialIds: string[]
  whyItMatters: string
  expectedEvidence: string[]
  validationQuestions: string[]
  nextAction: string
}

export interface EvidenceBadge {
  assetId: string
  status: EvidenceStatus
  label: string
  explanation: string
}

export interface EvidenceExpansionSummary {
  totalCandidates: number
  classCandidates: number
  recommendedComplements: number
  needsReview: number
}
