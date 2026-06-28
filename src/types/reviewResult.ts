export type ReviewResultStatus = 'Planned' | 'Reviewed' | 'Needs more evidence' | 'Ready for decision'
export type ReviewRecommendation = 'No upgrade' | 'Keep candidate' | 'Keep complement' | 'Ready for source-backed review'

export interface ReviewResultRecord {
  id: string
  title: string
  batchId: string
  materialReviewed: string
  status: ReviewResultStatus
  recommendation: ReviewRecommendation
  metadata: string[]
  topicsFound: string[]
  formulasFound: string[]
  outputsFound: string[]
  casesFound: string[]
  decisionNotes: string[]
  linkedObjects: string[]
  coverageUpdates: string[]
  decisionBoardUpdates: string[]
  risks: string[]
  nextAction: string
}

export interface ReviewResultSummary {
  total: number
  reviewed: number
  readyForDecision: number
  needsMoreEvidence: number
  sourceBackedReady: number
}
