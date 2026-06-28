export type ControlledUpdateOutcome = 'Applied' | 'Rejected' | 'Deferred' | 'Waiting for evidence' | 'Sent back to decision board'
export type ControlledUpdateImpact = 'Governance only' | 'Metadata only' | 'Academic content' | 'Graph update' | 'Coverage update'
export type ControlledUpdateRisk = 'Low' | 'Medium' | 'High'

export interface ControlledUpdateLogItem {
  id: string
  title: string
  promotionId: string
  outcome: ControlledUpdateOutcome
  impact: ControlledUpdateImpact
  risk: ControlledUpdateRisk
  decisionDate: string
  decisionOwner: string
  decisionRationale: string
  updatesApplied: string[]
  updatesRejected: string[]
  followUpActions: string[]
  affectedObjects: string[]
  auditNotes: string[]
}

export interface ControlledUpdateLogSummary {
  total: number
  applied: number
  rejected: number
  deferred: number
  waitingForEvidence: number
  sentBack: number
  highRisk: number
}
