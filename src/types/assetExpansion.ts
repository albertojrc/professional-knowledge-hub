export type ExpansionPriority = 'P0' | 'P1' | 'P2'
export type ExpansionStatus = 'Backlog' | 'Draft' | 'Review' | 'Ready'

export interface ExpansionLane {
  id: string
  area: string
  purpose: string
  targetAssets: number
  currentAssets: number
  nextMilestone: string
}

export interface ExpansionBacklogItem {
  id: string
  title: string
  area: string
  category: string
  type: 'Concept' | 'Model' | 'Formula' | 'Framework' | 'Tool' | 'Output' | 'Case' | 'Project'
  priority: ExpansionPriority
  status: ExpansionStatus
  whyItMatters: string
  sourcePlan: string[]
  relatedAssets: string[]
}

export interface QualityGate {
  id: string
  title: string
  description: string
  required: boolean
}

export interface SourceTier {
  tier: string
  label: string
  useFor: string
  examples: string[]
}
