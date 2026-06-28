export type FinanceValuationEvidenceStatus = 'Source candidate' | 'Source-backed pending review' | 'Professional complement'
export type FinanceValuationLessonLevel = 'Foundation' | 'Applied' | 'Advanced'

export interface FinanceValuationStudyLesson {
  id: string
  title: string
  level: FinanceValuationLessonLevel
  evidenceStatus: FinanceValuationEvidenceStatus
  sourceMaterials: string[]
  studyObjective: string
  coreConcepts: string[]
  workflow: string[]
  formulas: string[]
  outputs: string[]
  interpretation: string[]
  businessDecisions: string[]
  practicePrompts: string[]
  connections: string[]
}

export interface FinanceValuationStudySummary {
  totalLessons: number
  sourceCandidates: number
  formulas: number
  outputs: number
  practicePrompts: number
}
