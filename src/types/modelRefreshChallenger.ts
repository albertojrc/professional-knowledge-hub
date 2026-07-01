export interface RefreshStage {
  id: string
  title: string
  purpose: string
  owner: string
  inputs: string[]
  checks: string[]
  outputs: string[]
  decisionGate: string
}

export interface ChallengerCriterion {
  id: string
  title: string
  currentModelSignal: string
  challengerSignal: string
  evidenceRequired: string[]
  promoteWhen: string
  holdWhen: string
}

export interface RefreshOutput {
  id: string
  title: string
  whatItShows: string
  goodResult: string
  redFlag: string
  action: string
}

export interface RefreshScenario {
  id: string
  title: string
  trigger: string
  diagnosis: string[]
  recommendedAction: string
  governanceNote: string
}
