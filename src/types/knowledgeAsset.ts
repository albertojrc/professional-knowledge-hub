export type KnowledgeAssetType = 'Concept' | 'Model' | 'Formula' | 'Framework' | 'Tool' | 'Output' | 'Case' | 'Project'
export type KnowledgeDifficulty = 'Foundation' | 'Intermediate' | 'Advanced' | 'Professional'

export interface KnowledgeAsset {
  id: string
  title: string
  type: KnowledgeAssetType
  area: string
  category: string
  difficulty: KnowledgeDifficulty
  summary: string
  icon: string
  learningGoals: string[]
  whatItIs: string
  whyItMatters: string
  whenToUse: string[]
  howToUse: string[]
  interpretation: string[]
  outputs: string[]
  graphs: string[]
  metrics: string[]
  assumptions: string[]
  businessApplications: string[]
  bankingApplications: string[]
  commonMistakes: string[]
  professionalTip: string
  formula?: string
  example?: string
  pythonSnippet?: string
  sqlSnippet?: string
  relatedAssets: string[]
  sourceStrategy: string
}
