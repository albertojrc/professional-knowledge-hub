export type AcademicSourceArea = 'Data Science' | 'SQL & Data Engineering' | 'Banking & Credit Risk' | 'Finance & Economics' | 'Management & Strategy' | 'Unknown'
export type AcademicSourceStatus = 'Discovered' | 'Ready for review' | 'Needs classification' | 'Reviewed'
export type AcademicSourceFormat = 'Folder' | 'PDF' | 'Spreadsheet' | 'Document' | 'Other'
export type AcademicEvidencePotential = 'High' | 'Medium' | 'Low' | 'Unknown'

export interface AcademicSourceFile {
  id: string
  title: string
  driveId: string
  url: string
  format: AcademicSourceFormat
  area: AcademicSourceArea
  status: AcademicSourceStatus
  evidencePotential: AcademicEvidencePotential
  targetReviewBatch: string
  targetHubObjects: string[]
  likelyEvidence: string[]
  classificationNotes: string[]
  nextAction: string
}

export interface AcademicSourceSummary {
  total: number
  folders: number
  pdfs: number
  spreadsheets: number
  highPotential: number
  readyForReview: number
  needsClassification: number
}
