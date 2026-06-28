export type ReviewBatchPriority = 'P0' | 'P1' | 'P2'
export type ReviewBatchStatus = 'Planned' | 'Waiting for materials' | 'Ready for review' | 'In review' | 'Completed'

export interface SourceReviewBatch {
  id: string
  title: string
  sourcePackId: string
  priority: ReviewBatchPriority
  status: ReviewBatchStatus
  objective: string
  inputRequirements: string[]
  evidenceTargets: string[]
  coverageTargets: string[]
  decisionTargets: string[]
  reviewSteps: string[]
  expectedUpgradeDecisions: string[]
  nextAction: string
}

export interface SourceReviewBatchSummary {
  total: number
  p0: number
  p1: number
  planned: number
  waiting: number
  decisionTargets: number
}
