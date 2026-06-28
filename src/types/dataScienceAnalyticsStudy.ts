export type DataScienceStudyEvidenceStatus = 'Source candidate' | 'Source-backed pending review' | 'Professional complement'
export type DataScienceStudyLessonLevel = 'Foundation' | 'Applied' | 'Advanced'

export interface DataScienceStudyLesson {
  id: string
  title: string
  level: DataScienceStudyLessonLevel
  evidenceStatus: DataScienceStudyEvidenceStatus
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

export interface DataScienceStudySummary {
  totalLessons: number
  sourceCandidates: number
  formulas: number
  outputs: number
  practicePrompts: number
}
