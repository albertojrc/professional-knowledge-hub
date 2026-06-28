import type { SourceReviewBatch, SourceReviewBatchSummary } from '../types/sourceBatch'

export const sourceReviewBatches: SourceReviewBatch[] = [
  {
    id: 'batch-data-science-core',
    title: 'Batch 1 · Data Science Core Review',
    sourcePackId: 'pack-data-science-core',
    priority: 'P0',
    status: 'Waiting for materials',
    objective: 'Validate core data science assets and output interpretation examples from course material.',
    inputRequirements: ['lecture slides', 'notebooks', 'EDA examples', 'model validation examples'],
    evidenceTargets: ['evidence-data-science-files'],
    coverageTargets: ['coverage-data-quality-report', 'coverage-analytical-base-table'],
    decisionTargets: ['decision-data-quality-report'],
    reviewSteps: ['capture metadata', 'extract topic list', 'capture outputs', 'map to assets', 'send to decision board'],
    expectedUpgradeDecisions: ['data-quality-report', 'eda', 'feature-engineering', 'train-test-split', 'cross-validation'],
    nextAction: 'Review this batch first when Data Science materials are available.'
  },
  {
    id: 'batch-sql-abt',
    title: 'Batch 2 · SQL and ABT Review',
    sourcePackId: 'pack-sql-abt',
    priority: 'P0',
    status: 'Waiting for materials',
    objective: 'Validate SQL joins, table grain, reconciliation and analytical base table logic.',
    inputRequirements: ['SQL exercises', 'query notebooks', 'table diagrams', 'query outputs'],
    evidenceTargets: ['evidence-data-science-files'],
    coverageTargets: ['coverage-sql-joins', 'coverage-analytical-base-table'],
    decisionTargets: ['decision-sql-joins', 'decision-analytical-base-table'],
    reviewSteps: ['review query examples', 'capture table relationships', 'document row checks', 'map to ABT asset', 'update graph links'],
    expectedUpgradeDecisions: ['sql-joins', 'analytical-base-table', 'sql-join-reconciliation-output'],
    nextAction: 'Use this batch to decide whether SQL and ABT assets can become source-backed.'
  },
  {
    id: 'batch-finance-valuation',
    title: 'Batch 3 · Finance and Valuation Review',
    sourcePackId: 'pack-finance-core',
    priority: 'P0',
    status: 'Waiting for materials',
    objective: 'Validate finance formulas, financial outputs and valuation decision logic.',
    inputRequirements: ['finance slides', 'Excel models', 'valuation cases', 'formula examples'],
    evidenceTargets: ['evidence-finance-files'],
    coverageTargets: ['coverage-financial-ratios', 'coverage-cash-flow-analysis'],
    decisionTargets: ['decision-financial-ratios', 'decision-cash-flow-analysis'],
    reviewSteps: ['extract formulas', 'capture examples', 'map to formula library', 'map to outputs', 'submit decisions'],
    expectedUpgradeDecisions: ['financial-ratios', 'cash-flow-analysis', 'wacc', 'capm', 'npv'],
    nextAction: 'Review finance materials after Data Science and SQL P0 batches, or earlier if available.'
  },
  {
    id: 'batch-banking-risk',
    title: 'Batch 4 · Banking Risk Review',
    sourcePackId: 'pack-banking-risk',
    priority: 'P1',
    status: 'Waiting for materials',
    objective: 'Validate credit risk scoring, PD/LGD/EAD, expected loss and risk cases.',
    inputRequirements: ['banking cases', 'risk slides', 'model outputs', 'assignments'],
    evidenceTargets: ['evidence-banking-files'],
    coverageTargets: ['coverage-professional-graph-pending-links'],
    decisionTargets: ['decision-data-quality-report'],
    reviewSteps: ['extract risk definitions', 'capture scoring workflow', 'map formulas', 'map business case', 'update graph'],
    expectedUpgradeDecisions: ['credit-risk-scoring', 'pd', 'lgd', 'ead', 'expected-loss'],
    nextAction: 'Review after core data and finance batches or when banking material is available.'
  },
  {
    id: 'batch-management-strategy',
    title: 'Batch 5 · Management Strategy Review',
    sourcePackId: 'pack-management-strategy',
    priority: 'P2',
    status: 'Planned',
    objective: 'Validate management frameworks and strategy cases from MIM materials.',
    inputRequirements: ['strategy slides', 'case briefs', 'framework notes'],
    evidenceTargets: [],
    coverageTargets: [],
    decisionTargets: [],
    reviewSteps: ['extract frameworks', 'capture case context', 'map to management assets', 'separate complements'],
    expectedUpgradeDecisions: ['swot', 'pestel', 'business-model-canvas', 'porter-five-forces'],
    nextAction: 'Plan review after P0 and P1 evidence gaps are reduced.'
  },
  {
    id: 'batch-assignments-datasets',
    title: 'Batch 6 · Assignments and Datasets Review',
    sourcePackId: 'pack-assignments-datasets',
    priority: 'P1',
    status: 'Waiting for materials',
    objective: 'Connect assignments and datasets to output atlas, business cases and project workflows.',
    inputRequirements: ['assignment prompts', 'datasets', 'rubrics', 'solution notebooks'],
    evidenceTargets: ['evidence-data-science-files', 'evidence-finance-files', 'evidence-banking-files'],
    coverageTargets: ['coverage-professional-pathways'],
    decisionTargets: [],
    reviewSteps: ['capture objective', 'capture schema', 'extract required outputs', 'map to case library', 'map to study path'],
    expectedUpgradeDecisions: ['business-case-library', 'output-atlas', 'knowledge-map'],
    nextAction: 'Use after at least one academic source pack has been reviewed.'
  }
]

export const sourceReviewBatchSummary: SourceReviewBatchSummary = {
  total: sourceReviewBatches.length,
  p0: sourceReviewBatches.filter((batch) => batch.priority === 'P0').length,
  p1: sourceReviewBatches.filter((batch) => batch.priority === 'P1').length,
  planned: sourceReviewBatches.filter((batch) => batch.status === 'Planned').length,
  waiting: sourceReviewBatches.filter((batch) => batch.status === 'Waiting for materials').length,
  decisionTargets: sourceReviewBatches.reduce((sum, batch) => sum + batch.decisionTargets.length, 0)
}
