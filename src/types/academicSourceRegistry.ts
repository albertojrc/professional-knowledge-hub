export type AcademicSourceStatus = 'Discovered' | 'Ready for review' | 'In review' | 'Reviewed' | 'Blocked'
export type AcademicSourcePriority = 'P0' | 'P1' | 'P2'
export type AcademicSourceFormat = 'PDF' | 'Spreadsheet' | 'Slides' | 'Folder' | 'Text' | 'Unknown'

export interface AcademicSourceRecord {
  id: string
  title: string
  driveId: string
  sourceUrl: string
  format: AcademicSourceFormat
  priority: AcademicSourcePriority
  status: AcademicSourceStatus
  academicArea: string
  likelyBatch: string
  discoveredFrom: string
  evidenceReason: string
  targetHubObjects: string[]
  reviewQuestions: string[]
  nextAction: string
}

export interface AcademicSourceRegistrySummary {
  total: number
  p0: number
  pdf: number
  spreadsheets: number
  readyForReview: number
  discovered: number
}
