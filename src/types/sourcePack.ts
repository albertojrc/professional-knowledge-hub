export type SourcePackPriority = 'P0' | 'P1' | 'P2'
export type SourcePackStatus = 'Not uploaded' | 'Partial' | 'Ready for review' | 'Reviewed'

export interface SourcePackItem {
  id: string
  title: string
  priority: SourcePackPriority
  status: SourcePackStatus
  recommendedFiles: string[]
  acceptedFormats: string[]
  evidenceChecklist: string[]
  unlocks: string[]
  uploadOrder: string[]
  reviewOutcome: string
}

export interface SourcePackSummary {
  total: number
  p0: number
  p1: number
  notUploaded: number
  unlockCount: number
}
