export type AlertWorkflowStatus = 'Ready to document' | 'Needs owner sign-off' | 'Governance review' | 'Waiting for alert history'
export type AlertWorkflowSeverity = 'Low' | 'Medium' | 'High' | 'Critical'
export type AlertWorkflowCadence = 'Immediate' | 'Weekly' | 'Monthly' | 'Quarterly' | 'Event driven'

export interface AlertRemediationPlaybook {
  id: string
  alertType: string
  status: AlertWorkflowStatus
  severity: AlertWorkflowSeverity
  cadence: AlertWorkflowCadence
  ownerLayer: string
  triggerSource: string
  purpose: string
  triggerSignals: string[]
  diagnosticQuestions: string[]
  remediationActions: string[]
  escalationPath: string[]
  evidenceToAttach: string[]
  closureCriteria: string[]
  businessDecision: string
  nextAction: string
}

export interface AlertRemediationSummary {
  totalPlaybooks: number
  readyPlaybooks: number
  ownerSignoffPlaybooks: number
  governanceReviewPlaybooks: number
  waitingPlaybooks: number
  highOrCriticalPlaybooks: number
}
