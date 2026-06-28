export type AcademicReviewStatus = 'Waiting for files' | 'Ready to review' | 'In review' | 'Reviewed' | 'Blocked'
export type AcademicReviewPriority = 'P0' | 'P1' | 'P2'

export interface AcademicReviewBatch {
  id: string
  title: string
  priority: AcademicReviewPriority
  status: AcademicReviewStatus
  academicArea: string
  objective: string
  requiredMaterials: string[]
  reviewQuestions: string[]
  targetHubObjects: string[]
  expectedEvidence: string[]
  blockedReason: string
  nextAction: string
}

export interface AcademicReviewSummary {
  total: number
  p0: number
  waitingForFiles: number
  readyToReview: number
  reviewed: number
}
