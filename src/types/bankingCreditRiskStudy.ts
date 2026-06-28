export type BankingRiskEvidenceStatus = 'Source candidate' | 'Source-backed pending review' | 'Professional complement'
export type BankingRiskLessonLevel = 'Foundation' | 'Applied' | 'Advanced'

export interface BankingRiskStudyLesson {
  id: string
  title: string
  level: BankingRiskLessonLevel
  evidenceStatus: BankingRiskEvidenceStatus
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

export interface BankingRiskStudySummary {
  totalLessons: number
  sourceCandidates: number
  formulas: number
  outputs: number
  practicePrompts: number
}
