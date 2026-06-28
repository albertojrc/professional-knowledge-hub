export type StudyModuleStatus = 'Active' | 'Ready for source review' | 'Needs content expansion' | 'Planned'
export type StudyModulePriority = 'Core' | 'Advanced' | 'Reference' | 'Certification'

export interface StudyModuleCard {
  id: string
  title: string
  priority: StudyModulePriority
  status: StudyModuleStatus
  description: string
  studyGoal: string
  sourceMaterials: string[]
  learningObjects: string[]
  formulas: string[]
  outputs: string[]
  cases: string[]
  practice: string[]
  linkedViews: string[]
}

export interface StudyModuleHubSummary {
  total: number
  core: number
  readyForReview: number
  active: number
  planned: number
}
