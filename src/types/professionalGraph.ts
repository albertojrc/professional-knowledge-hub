export type ProfessionalNodeType = 'Material' | 'Module' | 'Area' | 'Evidence' | 'Asset' | 'Output' | 'Formula' | 'Case'
export type ProfessionalLinkType = 'contains' | 'maps to' | 'validates' | 'explains' | 'uses' | 'produces' | 'supports' | 'depends on'
export type ProfessionalLinkStrength = 'Strong' | 'Medium' | 'Pending'

export interface ProfessionalGraphNode {
  id: string
  label: string
  type: ProfessionalNodeType
  area: string
  summary: string
}

export interface ProfessionalGraphLink {
  id: string
  from: string
  to: string
  type: ProfessionalLinkType
  strength: ProfessionalLinkStrength
  explanation: string
}

export interface ProfessionalGraphPathway {
  id: string
  title: string
  purpose: string
  nodeIds: string[]
  decision: string
  evidenceStatus: string
}
