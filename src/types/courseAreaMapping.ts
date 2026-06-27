import type { MaterialArea, MappingStatus, ProgramName } from './materialInventory'

export type AreaRelevance = 'Core' | 'Important' | 'Supporting' | 'Gap'
export type CoverageLevel = 'None' | 'Low' | 'Medium' | 'High'

export interface CourseAreaMapRecord {
  id: string
  area: MaterialArea
  title: string
  professionalPurpose: string
  bankingRelevance: AreaRelevance
  dataRelevance: AreaRelevance
  currentCoverage: CoverageLevel
  targetCoverage: CoverageLevel
  programs: ProgramName[]
  sourceModuleIds: string[]
  keyTopics: string[]
  existingAssets: string[]
  recommendedAssets: string[]
  sourceGaps: string[]
}

export interface TopicClusterRecord {
  id: string
  title: string
  area: MaterialArea
  description: string
  topics: string[]
  connectedAssets: string[]
  professionalOutputs: string[]
  businessDecisions: string[]
}

export interface CoverageMatrixRow {
  id: string
  moduleId: string
  moduleTitle: string
  area: MaterialArea
  program: ProgramName
  mappingStatus: MappingStatus
  sourceEvidence: string[]
  nextAction: string
}
