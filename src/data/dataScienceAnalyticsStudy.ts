import type { DataScienceStudyLesson, DataScienceStudySummary } from '../types/dataScienceAnalyticsStudy'

export const dataScienceAnalyticsLessons: DataScienceStudyLesson[] = [
  {
    id: 'data-quality-foundations',
    title: 'Data Quality Foundations',
    level: 'Foundation',
    evidenceStatus: 'Source candidate',
    sourceMaterials: ['LCDataDictionary.xlsx', 'Data Science course materials pending review'],
    studyObjective: 'Understand how data quality problems affect analytics, models and business decisions.',
    coreConcepts: ['missing values', 'data dictionary', 'valid ranges', 'duplicate records', 'outliers', 'data lineage'],
    workflow: ['identify data source', 'profile variables', 'calculate missingness', 'check duplicates', 'validate ranges', 'document limitations'],
    formulas: ['missing-rate', 'duplicate-rate'],
    outputs: ['data quality report', 'variable profiling table', 'issue log'],
    interpretation: ['data quality is a business risk, not only a technical problem', 'high missingness can bias analysis', 'variable definitions must be understood before modeling'],
    businessDecisions: ['accept dataset for analysis', 'request data correction', 'exclude unreliable variables', 'document model limitation'],
    practicePrompts: ['Explain why missing values can create model risk.', 'Design a simple data quality report for a lending dataset.'],
    connections: ['Knowledge Library', 'Output Atlas', 'Banking & Credit Risk Study']
  },
  {
    id: 'analytical-base-table-workflow',
    title: 'Analytical Base Table Workflow',
    level: 'Applied',
    evidenceStatus: 'Source candidate',
    sourceMaterials: ['LCDataDictionary.xlsx', 'SQL and ABT materials pending review'],
    studyObjective: 'Learn how raw tables become a modeling-ready analytical base table.',
    coreConcepts: ['table grain', 'entity definition', 'observation window', 'feature window', 'target variable', 'join reconciliation'],
    workflow: ['define modeling entity', 'set observation date', 'join source tables', 'engineer features', 'validate grain', 'reconcile row counts'],
    formulas: ['join-match-rate', 'missing-rate'],
    outputs: ['ABT schema', 'join reconciliation output', 'feature list'],
    interpretation: ['the ABT must match the business decision', 'row count changes reveal join or grain issues', 'features must be available before the decision date'],
    businessDecisions: ['approve table for modeling', 'reject leaky features', 'request data engineering fix', 'document table assumptions'],
    practicePrompts: ['Explain table grain using a credit application example.', 'List three checks before using an ABT for model training.'],
    connections: ['Tools & Platforms', 'Banking & Credit Risk Study', 'Knowledge Map']
  },
  {
    id: 'feature-engineering-for-risk',
    title: 'Feature Engineering for Risk Models',
    level: 'Applied',
    evidenceStatus: 'Professional complement',
    sourceMaterials: ['LCDataDictionary.xlsx', 'RetailCreditScoring.pdf'],
    studyObjective: 'Transform business variables into meaningful predictive features while avoiding leakage.',
    coreConcepts: ['feature meaning', 'feature leakage', 'aggregation', 'binning', 'encoding', 'business interpretability'],
    workflow: ['understand variable definition', 'check availability timing', 'transform raw fields', 'test missingness', 'validate business meaning', 'document feature logic'],
    formulas: ['missing-rate', 'bad-rate by bucket'],
    outputs: ['feature dictionary', 'feature importance table', 'bucket performance table'],
    interpretation: ['good features combine predictive value with business meaning', 'leakage can create fake model performance', 'feature documentation improves model governance'],
    businessDecisions: ['keep feature', 'remove leaky feature', 'request new data source', 'simplify feature for explainability'],
    practicePrompts: ['Turn three raw lending variables into model features.', 'Explain why feature leakage is dangerous.'],
    connections: ['Model Library', 'Credit Risk Lab', 'Formula Library']
  },
  {
    id: 'model-validation-ks-variance',
    title: 'Model Validation with KS and Variance Testing',
    level: 'Applied',
    evidenceStatus: 'Source candidate',
    sourceMaterials: ['Session 10 Variance and KS Testing with Solutions'],
    studyObjective: 'Interpret validation tests that evaluate model separation, stability and statistical behavior.',
    coreConcepts: ['KS statistic', 'variance testing', 'ranking power', 'sample stability', 'validation set'],
    workflow: ['score validation sample', 'separate outcome groups', 'calculate validation metrics', 'compare distributions', 'interpret stability', 'document results'],
    formulas: ['ks-statistic', 'variance-test'],
    outputs: ['KS curve', 'validation table', 'classification report', 'lift curve'],
    interpretation: ['KS measures separation between outcome distributions', 'variance tests help compare statistical behavior', 'validation evidence should be connected to business approval'],
    businessDecisions: ['approve model for pilot', 'recalibrate model', 'change score threshold', 'request more validation'],
    practicePrompts: ['Explain KS to a business stakeholder.', 'Describe why validation metrics alone are not enough for deployment.'],
    connections: ['Banking & Credit Risk Study', 'Output Atlas', 'Model Library']
  },
  {
    id: 'graph-analytics-foundations',
    title: 'Graph Analytics Foundations',
    level: 'Advanced',
    evidenceStatus: 'Source candidate',
    sourceMaterials: ['Lecture 10.3 Graph Algorithms', 'Lecture 10.1 Spark Graph Concepts'],
    studyObjective: 'Understand how graph thinking supports network analysis, fraud analytics and relationship-based decisions.',
    coreConcepts: ['nodes', 'edges', 'centrality', 'communities', 'graph traversal', 'network risk'],
    workflow: ['define entities as nodes', 'define relationships as edges', 'build graph representation', 'calculate graph metrics', 'identify patterns', 'translate patterns into action'],
    formulas: ['degree centrality', 'density', 'path length'],
    outputs: ['network graph', 'centrality ranking', 'community detection summary'],
    interpretation: ['high centrality can indicate influence or risk concentration', 'communities reveal hidden groups', 'graph outputs need business context before action'],
    businessDecisions: ['flag suspicious network', 'identify key customer groups', 'prioritize fraud investigation', 'map operational dependencies'],
    practicePrompts: ['Explain a graph as nodes and edges using banking customers.', 'Give one fraud analytics use case for graph algorithms.'],
    connections: ['Fraud Analytics', 'Tools & Platforms', 'Business Case Library']
  }
]

const unique = (items: string[]) => Array.from(new Set(items))
export const dataScienceAnalyticsStudySummary: DataScienceStudySummary = {
  totalLessons: dataScienceAnalyticsLessons.length,
  sourceCandidates: dataScienceAnalyticsLessons.filter((lesson) => lesson.evidenceStatus === 'Source candidate').length,
  formulas: unique(dataScienceAnalyticsLessons.flatMap((lesson) => lesson.formulas)).length,
  outputs: unique(dataScienceAnalyticsLessons.flatMap((lesson) => lesson.outputs)).length,
  practicePrompts: dataScienceAnalyticsLessons.flatMap((lesson) => lesson.practicePrompts).length
}
