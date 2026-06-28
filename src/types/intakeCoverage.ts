export type MappingReadiness = 'Ready when received' | 'Needs review' | 'Blocked by missing file'

export interface IntakeCoverageMapItem {
  id: string
  intakeId: string
  title: string
  readiness: MappingReadiness
  coverageRecordIds: string[]
  evidenceRecordIds: string[]
  graphNodeIds: string[]
  graphLinkIds: string[]
  upgradeCandidates: string[]
  validationQuestions: string[]
  updateSequence: string[]
  nextAction: string
}

export interface IntakeCoverageSummary {
  total: number
  readyWhenReceived: number
  blocked: number
  upgradeCandidates: number
}
