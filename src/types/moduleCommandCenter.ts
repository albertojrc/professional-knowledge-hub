export type CommandCenterStatus = 'Primary path' | 'Build next' | 'Reference layer' | 'Governance layer' | 'Practice layer'
export type CommandCenterLevel = 'Foundation' | 'Intermediate' | 'Advanced' | 'Professional'

export interface CommandCenterTrack {
  id: string
  title: string
  eyebrow: string
  level: CommandCenterLevel
  status: CommandCenterStatus
  summary: string
  whyItMatters: string
  primaryOutputs: string[]
  workflow: string[]
  coreConcepts: string[]
  formulasAndTools: string[]
  practiceMoves: string[]
  connectedViews: string[]
  searchTerms: string[]
  nextAction: string
  aliases?: string[]
}

export interface CommandCenterSummary {
  title: string
  shortName: string
  totalTracks: number
  primaryTracks: number
  professionalTracks: number
  outputs: number
}
