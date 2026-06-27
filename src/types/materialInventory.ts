export type ProgramName = 'Master in Management' | 'Master in Big Data / Data Science' | 'Cross-Program' | 'Project Reference'
export type MaterialArea = 'Data Science' | 'Machine Learning' | 'Statistics' | 'SQL / Databases' | 'Big Data' | 'Banking' | 'Finance' | 'Economics' | 'Management' | 'Marketing' | 'Operations' | 'Analytics / BI' | 'Strategy' | 'Unknown'
export type MaterialType = 'Folder' | 'HTML' | 'Markdown' | 'PDF' | 'Slides' | 'Spreadsheet' | 'Notebook' | 'Document' | 'Unknown'
export type MappingStatus = 'Not inventoried' | 'Inventory pending' | 'Mapped to areas' | 'Mapped to topics' | 'Converted to assets' | 'Needs review'
export type MaterialPriority = 'P0' | 'P1' | 'P2'

export interface MaterialRecord {
  id: string
  title: string
  program: ProgramName
  area: MaterialArea
  materialType: MaterialType
  locationLabel: string
  link?: string
  status: MappingStatus
  priority: MaterialPriority
  description: string
  knownTopics: string[]
  targetAssets: string[]
  gapsToCheck: string[]
}

export interface CourseModuleRecord {
  id: string
  title: string
  program: ProgramName
  area: MaterialArea
  purpose: string
  expectedMaterials: string[]
  expectedAssets: string[]
  mappingStatus: MappingStatus
}

export interface MappingTemplateStep {
  id: string
  title: string
  description: string
  output: string
}
