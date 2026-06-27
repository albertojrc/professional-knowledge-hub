export type StudyPathLevel = 'Foundation' | 'Intermediate' | 'Advanced' | 'Professional'

export interface StudyPathMilestone {
  id: string
  title: string
  description: string
  assetIds: string[]
}

export interface StudyPath {
  id: string
  title: string
  subtitle: string
  level: StudyPathLevel
  duration: string
  professionalOutcome: string
  targetRole: string
  icon: string
  assetIds: string[]
  milestones: StudyPathMilestone[]
}
