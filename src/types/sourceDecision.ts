export type SourceDecisionStatus = 'Ready for review' | 'Needs evidence' | 'Approved source-backed' | 'Keep candidate' | 'Keep complement' | 'Rejected claim'
export type SourceDecisionRisk = 'Low' | 'Medium' | 'High'

export interface SourceDecisionItem {
  id: string
  title: string
  targetObject: string
  objectType: string
  currentStatus: string
  proposedDecision: SourceDecisionStatus
  risk: SourceDecisionRisk
  requiredEvidence: string[]
  availableEvidence: string[]
  blockers: string[]
  approvalCriteria: string[]
  rejectionCriteria: string[]
  affectedRecords: string[]
  nextAction: string
}

export interface SourceDecisionSummary {
  total: number
  readyForReview: number
  needsEvidence: number
  approved: number
  highRisk: number
}
