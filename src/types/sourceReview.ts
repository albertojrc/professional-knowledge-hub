export type ReviewStatus = 'Not reviewed' | 'Metadata captured' | 'Evidence noted' | 'Mapped to assets' | 'On hold'
export type ReviewPriority = 'Critical' | 'High' | 'Medium' | 'Low'
export type ReviewSourceType = 'Folder' | 'HTML' | 'Markdown' | 'PDF' | 'Notebook' | 'Spreadsheet' | 'Slide Deck' | 'Unknown'

export interface SourceReviewItem {
  id: string
  title: string
  sourceType: ReviewSourceType
  sourceLocation: string
  configuredLocation: string
  priority: ReviewPriority
  status: ReviewStatus
  expectedPrograms: string[]
  expectedModules: string[]
  targetAreas: string[]
  targetAssets: string[]
  targetOutputs: string[]
  targetCases: string[]
  reviewQuestions: string[]
  metadataToCapture: string[]
  evidenceToNote: string[]
  nextAction: string
}

export interface SourceReviewTemplateStep {
  id: string
  title: string
  purpose: string
  checklist: string[]
  output: string
}

export interface SourceReviewSummary {
  totalItems: number
  criticalItems: number
  highPriorityItems: number
  notReviewed: number
  mappedTargets: number
}
