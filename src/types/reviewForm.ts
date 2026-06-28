export type ReviewFieldType = 'Text' | 'List' | 'Decision' | 'Reference' | 'Risk'
export type ReviewRequirement = 'Required' | 'Recommended' | 'Optional'

export interface ReviewFormField {
  id: string
  label: string
  fieldType: ReviewFieldType
  requirement: ReviewRequirement
  purpose: string
  examples: string[]
}

export interface ReviewFormSection {
  id: string
  title: string
  purpose: string
  fields: ReviewFormField[]
}

export interface ReviewFormTemplate {
  id: string
  title: string
  appliesTo: string[]
  reviewFlow: string[]
  sections: ReviewFormSection[]
  completionRules: string[]
}

export interface ReviewFormSummary {
  sections: number
  fields: number
  requiredFields: number
  completionRules: number
}
