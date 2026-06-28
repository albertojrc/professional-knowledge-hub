export type PromotionStatus = 'Blocked' | 'Waiting for decision' | 'Ready to apply' | 'Applied' | 'Rejected'
export type PromotionTargetType = 'Knowledge Asset' | 'Output Atlas' | 'Formula Library' | 'Business Case' | 'Knowledge Graph' | 'Coverage QA'
export type PromotionRisk = 'Low' | 'Medium' | 'High'

export interface PromotionQueueItem {
  id: string
  title: string
  reviewResultId: string
  status: PromotionStatus
  risk: PromotionRisk
  targetType: PromotionTargetType
  targetObjects: string[]
  proposedUpdates: string[]
  requiredDecision: string
  blockers: string[]
  validationChecklist: string[]
  applySequence: string[]
  nextAction: string
}

export interface PromotionQueueSummary {
  total: number
  blocked: number
  waitingForDecision: number
  readyToApply: number
  applied: number
  highRisk: number
}
