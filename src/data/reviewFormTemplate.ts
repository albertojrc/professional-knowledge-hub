import type { ReviewFormSummary, ReviewFormTemplate } from '../types/reviewForm'

export const reviewFormTemplate: ReviewFormTemplate = {
  id: 'standard-review-form',
  title: 'Standard Review Form',
  appliesTo: ['batch-data-science-core', 'batch-sql-abt', 'batch-finance-valuation', 'batch-banking-risk', 'batch-management-strategy', 'batch-assignments-datasets'],
  reviewFlow: ['identify material', 'capture metadata', 'extract topics', 'record examples', 'map Hub objects', 'write decision note'],
  sections: [
    {
      id: 'section-metadata',
      title: '1. Material Metadata',
      purpose: 'Identify exactly what was reviewed and where it belongs.',
      fields: [
        { id: 'field-title', label: 'Material title', fieldType: 'Text', requirement: 'Required', purpose: 'Name the reviewed item.', examples: ['Finance valuation slides', 'SQL joins notebook'] },
        { id: 'field-program', label: 'Program / course', fieldType: 'Reference', requirement: 'Required', purpose: 'Connect the item to MIM, MBD or cross-program work.', examples: ['Master in Management', 'Master in Big Data'] },
        { id: 'field-module', label: 'Module / week / class', fieldType: 'Reference', requirement: 'Recommended', purpose: 'Locate the topic inside the learning sequence.', examples: ['Week 3', 'Credit Risk module'] }
      ]
    },
    {
      id: 'section-topics',
      title: '2. Topic Evidence',
      purpose: 'Record which concepts are explicitly present.',
      fields: [
        { id: 'field-topic-list', label: 'Explicit topics', fieldType: 'List', requirement: 'Required', purpose: 'List covered concepts only when visible in the material.', examples: ['EDA', 'SQL joins', 'cash flow analysis'] },
        { id: 'field-topic-context', label: 'Topic context', fieldType: 'Text', requirement: 'Recommended', purpose: 'Explain how the topic is introduced or used.', examples: ['Used before model training', 'Used for valuation decision'] }
      ]
    },
    {
      id: 'section-formulas',
      title: '3. Formula and Metric Evidence',
      purpose: 'Capture formulas, variables and metrics that can update the Formula Library.',
      fields: [
        { id: 'field-formulas', label: 'Formulas found', fieldType: 'List', requirement: 'Recommended', purpose: 'Record formulas exactly enough to validate related assets.', examples: ['FCF = EBIT(1-tax)+D&A-CapEx-ΔNWC', 'Expected Loss = PD × LGD × EAD'] },
        { id: 'field-metrics', label: 'Metrics found', fieldType: 'List', requirement: 'Recommended', purpose: 'Record performance, finance or risk metrics.', examples: ['AUC', 'KS statistic', 'current ratio'] }
      ]
    },
    {
      id: 'section-outputs',
      title: '4. Output Evidence',
      purpose: 'Capture charts, tables, screenshots or outputs that can update the Output Atlas.',
      fields: [
        { id: 'field-output-list', label: 'Outputs found', fieldType: 'List', requirement: 'Recommended', purpose: 'List outputs visible in the material.', examples: ['confusion matrix', 'ratio table', 'cash flow bridge'] },
        { id: 'field-interpretation', label: 'Interpretation notes', fieldType: 'Text', requirement: 'Recommended', purpose: 'Record how the output is interpreted.', examples: ['Higher bad rate in top decile signals stronger rank ordering'] }
      ]
    },
    {
      id: 'section-cases',
      title: '5. Case and Decision Evidence',
      purpose: 'Connect material to business, banking or management decisions.',
      fields: [
        { id: 'field-case', label: 'Case or scenario', fieldType: 'Text', requirement: 'Optional', purpose: 'Describe the business context if present.', examples: ['credit approval case', 'valuation decision', 'customer segmentation project'] },
        { id: 'field-decision', label: 'Decision supported', fieldType: 'Decision', requirement: 'Recommended', purpose: 'Record what action the analysis supports.', examples: ['approve / reject', 'invest / do not invest', 'monitor / escalate'] }
      ]
    },
    {
      id: 'section-upgrade',
      title: '6. Upgrade Recommendation',
      purpose: 'Recommend whether Hub objects can move status after review.',
      fields: [
        { id: 'field-upgrade', label: 'Recommended status', fieldType: 'Decision', requirement: 'Required', purpose: 'State the recommended status after review.', examples: ['source-backed', 'keep candidate', 'recommended complement', 'needs more evidence'] },
        { id: 'field-risk', label: 'Risk level', fieldType: 'Risk', requirement: 'Required', purpose: 'Flag risk of overclaiming source support.', examples: ['low', 'medium', 'high'] }
      ]
    }
  ],
  completionRules: ['metadata must be complete', 'at least one explicit topic or output must be found for upgrade review', 'formulas require visible formula text or worked example', 'decision upgrades require a business context', 'uncertain items stay as candidates']
}

export const reviewFormSummary: ReviewFormSummary = {
  sections: reviewFormTemplate.sections.length,
  fields: reviewFormTemplate.sections.reduce((sum, section) => sum + section.fields.length, 0),
  requiredFields: reviewFormTemplate.sections.flatMap((section) => section.fields).filter((field) => field.requirement === 'Required').length,
  completionRules: reviewFormTemplate.completionRules.length
}
