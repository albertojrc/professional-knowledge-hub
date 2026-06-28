export type CertificationTrackStatus = 'Planned' | 'Ready for curriculum review' | 'In progress' | 'Active'
export type CertificationTrack = 'CFA' | 'BMC' | 'BFF' | 'Bloomberg Terminal'

export interface ProfessionalCertificationTrack {
  id: string
  title: string
  track: CertificationTrack
  status: CertificationTrackStatus
  purpose: string
  studyOutcome: string
  topicBlocks: string[]
  connectedStudyModules: string[]
  formulas: string[]
  outputs: string[]
  terminalWorkflows: string[]
  practiceItems: string[]
  sourceStatus: string
  nextAction: string
}

export interface ProfessionalCertificationSummary {
  total: number
  planned: number
  readyForReview: number
  bloombergTracks: number
  cfaTracks: number
}
