export type ExperimentStageStatus = 'Ready to design' | 'Requires evidence' | 'Governance gate' | 'Blocked until decision'
export type ExperimentRiskLevel = 'Low' | 'Medium' | 'High'

export interface CreditScoringExperimentStage {
  id: string
  stage: string
  status: ExperimentStageStatus
  risk: ExperimentRiskLevel
  objective: string
  requiredInputs: string[]
  designChoices: string[]
  outputs: string[]
  validationChecks: string[]
  governanceNotes: string[]
  linkedFeatureGroups: string[]
  decisionGate: string
  nextAction: string
}

export interface CreditScoringExperimentSummary {
  totalStages: number
  readyStages: number
  evidenceStages: number
  governanceGates: number
  blockedStages: number
  highRiskStages: number
}
