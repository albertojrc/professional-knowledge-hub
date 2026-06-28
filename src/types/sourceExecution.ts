export type ExecutionStatus = 'Reviewed' | 'Partially reviewed' | 'Blocked' | 'No course evidence'
export type EvidenceDecision = 'Upgrade allowed' | 'Keep candidate' | 'Keep pending' | 'Keep complement' | 'No upgrade'

export interface SourceExecutionRecord {
  id: string
  title: string
  reviewedSource: string
  status: ExecutionStatus
  decision: EvidenceDecision
  evidenceFound: string[]
  evidenceLimits: string[]
  affectedHubObjects: string[]
  coverageUpdate: string
  nextAction: string
}

export interface SourceExecutionSummary {
  total: number
  reviewed: number
  blocked: number
  noCourseEvidence: number
  upgradesAllowed: number
}
