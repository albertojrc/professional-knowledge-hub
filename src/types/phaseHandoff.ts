export type PhaseHandoffStatus = 'Complete' | 'Ready for next phase' | 'Blocked by missing evidence' | 'Needs build verification'
export type PhaseHandoffPriority = 'P0' | 'P1' | 'P2'

export interface PhaseHandoffSection {
  id: string
  title: string
  status: PhaseHandoffStatus
  summary: string
  completed: string[]
  openRisks: string[]
  nextActions: string[]
}

export interface PhaseHandoffNextStep {
  id: string
  title: string
  priority: PhaseHandoffPriority
  objective: string
  unlocks: string[]
  requiredInputs: string[]
}

export interface PhaseHandoffSummary {
  phase: string
  status: PhaseHandoffStatus
  executiveSummary: string
  sections: PhaseHandoffSection[]
  nextSteps: PhaseHandoffNextStep[]
}
