export type ModelCardSectionStatus = 'Ready to draft' | 'Needs metric evidence' | 'Governance gate' | 'Waiting for champion model'
export type MonitoringCadence = 'Per batch' | 'Weekly' | 'Monthly' | 'Quarterly' | 'Event driven'
export type MonitoringSeverity = 'Low' | 'Medium' | 'High'

export interface ModelCardMonitoringSection {
  id: string
  section: string
  status: ModelCardSectionStatus
  severity: MonitoringSeverity
  cadence: MonitoringCadence
  purpose: string
  requiredEvidence: string[]
  ownerQuestions: string[]
  modelCardContent: string[]
  monitoringControls: string[]
  alertRules: string[]
  decisionUse: string
  handoffOutput: string
  nextAction: string
}

export interface ModelCardMonitoringSummary {
  totalSections: number
  readySections: number
  evidenceSections: number
  governanceGates: number
  waitingSections: number
  highSeveritySections: number
}
