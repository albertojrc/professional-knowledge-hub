export type IntakePriority = 'Critical' | 'High' | 'Medium' | 'Low'
export type IntakeStatus = 'Needed' | 'Requested' | 'Received' | 'Reviewed' | 'Blocked'
export type IntakeFileType = 'PDF' | 'Slides' | 'Notebook' | 'Spreadsheet' | 'Dataset' | 'Assignment' | 'Case' | 'Folder' | 'Unknown'

export interface SourceIntakeItem {
  id: string
  title: string
  fileType: IntakeFileType
  priority: IntakePriority
  status: IntakeStatus
  program: string
  targetArea: string
  whyNeeded: string
  unlocks: string[]
  acceptableFormats: string[]
  minimumEvidenceNeeded: string[]
  intakeChecklist: string[]
  nextAction: string
}

export interface SourceIntakeSummary {
  total: number
  critical: number
  high: number
  needed: number
  received: number
  reviewed: number
}
