import type { BankingRiskStudyLesson, BankingRiskStudySummary } from '../types/bankingCreditRiskStudy'

export const bankingCreditRiskLessons: BankingRiskStudyLesson[] = [
  {
    id: 'credit-scoring-foundations',
    title: 'Credit Scoring Foundations',
    level: 'Foundation',
    evidenceStatus: 'Source candidate',
    sourceMaterials: ['RetailCreditScoring.pdf', 'Credit Scoring and Best Practices in Banking selection'],
    studyObjective: 'Understand what a credit score is, why banks use it and how it supports lending decisions.',
    coreConcepts: ['borrower risk', 'scorecard', 'default likelihood', 'approval policy', 'risk ranking'],
    workflow: ['define lending question', 'collect borrower data', 'build risk features', 'estimate risk score', 'apply approval rules', 'monitor outcomes'],
    formulas: ['expected-loss', 'pd'],
    outputs: ['score distribution', 'classification report', 'approval bands'],
    interpretation: ['a score ranks risk, it does not guarantee repayment', 'higher separation between good and bad borrowers improves decision quality', 'policy thresholds convert model output into business action'],
    businessDecisions: ['approve or reject application', 'assign risk tier', 'request more documentation', 'price loan by risk'],
    practicePrompts: ['Explain credit scoring to a non-technical banking manager.', 'List three risks of using a score without policy controls.'],
    connections: ['Banking & Credit Risk', 'Model Library', 'Output Atlas', 'Business Case Library']
  },
  {
    id: 'pd-lgd-ead-expected-loss',
    title: 'PD, LGD, EAD and Expected Loss',
    level: 'Applied',
    evidenceStatus: 'Professional complement',
    sourceMaterials: ['Credit Scoring and Best Practices in Banking selection', 'Risk and Fraud Analytics Syllabus'],
    studyObjective: 'Connect credit risk components to portfolio loss estimation and lending decisions.',
    coreConcepts: ['probability of default', 'loss given default', 'exposure at default', 'expected loss', 'portfolio risk'],
    workflow: ['estimate default probability', 'estimate exposure', 'estimate loss severity', 'calculate expected loss', 'compare against pricing and limits'],
    formulas: ['EL = PD × LGD × EAD', 'risk-adjusted return'],
    outputs: ['expected loss table', 'risk bucket summary', 'portfolio exposure view'],
    interpretation: ['PD measures default likelihood', 'LGD measures severity after default', 'EAD measures exposure at default', 'expected loss translates risk into money'],
    businessDecisions: ['set credit limit', 'price loan spread', 'manage portfolio exposure', 'prioritize collections'],
    practicePrompts: ['Given PD, LGD and EAD, calculate expected loss.', 'Explain why two customers with the same PD can have different expected loss.'],
    connections: ['Formula Library', 'Credit Risk Lab', 'Finance & Valuation']
  },
  {
    id: 'credit-model-validation',
    title: 'Credit Model Validation and KS Testing',
    level: 'Applied',
    evidenceStatus: 'Source candidate',
    sourceMaterials: ['Session 10 Variance and KS Testing with Solutions', 'RetailCreditScoring.pdf'],
    studyObjective: 'Interpret model validation outputs used to evaluate ranking, separation and decision readiness.',
    coreConcepts: ['KS statistic', 'variance testing', 'ranking power', 'model stability', 'validation sample'],
    workflow: ['split validation data', 'score observations', 'compare good and bad distributions', 'calculate validation metrics', 'document limitations'],
    formulas: ['ks-statistic', 'variance-test'],
    outputs: ['KS curve', 'classification report', 'lift curve', 'calibration plot'],
    interpretation: ['KS measures separation between cumulative distributions', 'validation should test ranking and stability', 'a strong metric still needs business and compliance review'],
    businessDecisions: ['approve model for pilot', 'require recalibration', 'change cut-off policy', 'monitor drift'],
    practicePrompts: ['Describe what a high KS statistic means in credit scoring.', 'Explain why model validation is not the same as business approval.'],
    connections: ['Data Science & Analytics', 'Output Atlas', 'Model Library']
  },
  {
    id: 'lending-data-abt',
    title: 'Lending Data, Variables and ABT',
    level: 'Foundation',
    evidenceStatus: 'Source candidate',
    sourceMaterials: ['LCDataDictionary.xlsx', 'RetailCreditScoring.pdf'],
    studyObjective: 'Understand how lending variables become features in an analytical base table for credit models.',
    coreConcepts: ['data dictionary', 'variable definition', 'table grain', 'feature engineering', 'analytical base table'],
    workflow: ['identify borrower entity', 'define observation window', 'map variables', 'clean missing values', 'create features', 'validate table grain'],
    formulas: ['missing-rate', 'join-match-rate'],
    outputs: ['data quality report', 'ABT schema', 'feature list', 'join reconciliation output'],
    interpretation: ['bad variable definitions create model risk', 'table grain must match the credit decision', 'missingness can signal operational or borrower risk'],
    businessDecisions: ['accept feature for modeling', 'reject unstable variable', 'request data correction', 'document data limitation'],
    practicePrompts: ['Choose five variables from a lending data dictionary and explain their risk meaning.', 'Explain why table grain matters in credit scoring.'],
    connections: ['Data Science & Analytics', 'Tools & Platforms', 'Knowledge Library']
  },
  {
    id: 'credit-decision-policy',
    title: 'Credit Decision Policy and Monitoring',
    level: 'Advanced',
    evidenceStatus: 'Professional complement',
    sourceMaterials: ['Credit Scoring and Best Practices in Banking selection', 'Risk and Fraud Analytics Syllabus'],
    studyObjective: 'Translate credit model outputs into controlled lending policy and ongoing portfolio monitoring.',
    coreConcepts: ['cut-off policy', 'manual review', 'override rules', 'portfolio monitoring', 'model governance'],
    workflow: ['define score bands', 'set approval threshold', 'define manual review zone', 'monitor portfolio outcomes', 'review policy exceptions'],
    formulas: ['approval-rate', 'bad-rate', 'expected-loss'],
    outputs: ['score band table', 'approval waterfall', 'monitoring dashboard', 'exception report'],
    interpretation: ['policy converts analytics into action', 'manual review zones reduce blind automation', 'monitoring detects drift and changing risk conditions'],
    businessDecisions: ['tighten policy', 'expand approval band', 'review overrides', 'retrain model'],
    practicePrompts: ['Design a simple score-band decision table.', 'Explain how a bank should monitor a deployed credit model.'],
    connections: ['Decision Playbooks', 'Professional Scenarios', 'Business Case Library']
  }
]

const unique = (items: string[]) => Array.from(new Set(items))
export const bankingCreditRiskStudySummary: BankingRiskStudySummary = {
  totalLessons: bankingCreditRiskLessons.length,
  sourceCandidates: bankingCreditRiskLessons.filter((lesson) => lesson.evidenceStatus === 'Source candidate').length,
  formulas: unique(bankingCreditRiskLessons.flatMap((lesson) => lesson.formulas)).length,
  outputs: unique(bankingCreditRiskLessons.flatMap((lesson) => lesson.outputs)).length,
  practicePrompts: bankingCreditRiskLessons.flatMap((lesson) => lesson.practicePrompts).length
}
