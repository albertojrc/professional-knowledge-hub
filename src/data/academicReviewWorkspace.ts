import type { AcademicReviewBatch, AcademicReviewSummary } from '../types/academicReview'

export const academicReviewBatches: AcademicReviewBatch[] = [
  {
    id: 'academic-data-science-core',
    title: 'Data Science Core Academic Review',
    priority: 'P0',
    status: 'Waiting for files',
    academicArea: 'Data Science & Analytics',
    objective: 'Review real course material to validate core analytics assets before any source-backed upgrade.',
    requiredMaterials: ['lecture slides', 'notebooks', 'assignments', 'EDA outputs', 'model validation examples'],
    reviewQuestions: ['Which topics are explicitly taught?', 'Which outputs are shown?', 'Which models or workflows are demonstrated?', 'Which assets can remain candidate and which can move to decision review?'],
    targetHubObjects: ['data-quality-report', 'eda', 'feature-engineering', 'train-test-split', 'cross-validation', 'classification-report'],
    expectedEvidence: ['visible topic titles', 'worked examples', 'charts or tables', 'notebook outputs', 'assignment prompts'],
    blockedReason: 'No Data Science course file has been reviewed yet.',
    nextAction: 'Upload or expose the P0 Data Science files, then complete the Review Form Template.'
  },
  {
    id: 'academic-sql-abt',
    title: 'SQL and Analytical Base Table Academic Review',
    priority: 'P0',
    status: 'Waiting for files',
    academicArea: 'SQL / Data Engineering / Analytics',
    objective: 'Validate joins, table grain, reconciliation and ABT logic from course exercises or notebooks.',
    requiredMaterials: ['SQL exercises', 'query notebooks', 'table relationship diagrams', 'query results', 'data dictionaries'],
    reviewQuestions: ['Are joins explicitly taught?', 'Is table grain explained?', 'Are reconciliation checks shown?', 'Is ABT construction demonstrated?'],
    targetHubObjects: ['sql-joins', 'analytical-base-table', 'sql-join-reconciliation-output', 'join-match-rate'],
    expectedEvidence: ['SQL code', 'join diagrams', 'row counts', 'match-rate checks', 'query outputs'],
    blockedReason: 'No SQL or ABT academic evidence has been reviewed yet.',
    nextAction: 'Review SQL/ABT files after Data Science Core or in parallel if materials are available.'
  },
  {
    id: 'academic-finance-valuation',
    title: 'Finance and Valuation Academic Review',
    priority: 'P0',
    status: 'Waiting for files',
    academicArea: 'Finance / Valuation / Economics',
    objective: 'Validate finance formulas, valuation workflows and financial statement outputs.',
    requiredMaterials: ['finance slides', 'Excel models', 'valuation cases', 'formula notes', 'worked examples'],
    reviewQuestions: ['Which formulas are explicitly used?', 'Are variables defined?', 'Are examples worked through?', 'Which outputs support business decisions?'],
    targetHubObjects: ['financial-ratios', 'cash-flow-analysis', 'free-cash-flow', 'wacc', 'capm', 'npv'],
    expectedEvidence: ['formula text', 'financial statements', 'Excel outputs', 'valuation cases', 'decision notes'],
    blockedReason: 'No Finance/Valuation academic material has been reviewed yet.',
    nextAction: 'Upload or expose finance files and capture formulas with the standard review form.'
  },
  {
    id: 'academic-banking-risk',
    title: 'Banking Risk Academic Review',
    priority: 'P1',
    status: 'Waiting for files',
    academicArea: 'Banking / Credit Risk / Risk Analytics',
    objective: 'Validate credit risk, PD/LGD/EAD, expected loss and model monitoring content.',
    requiredMaterials: ['banking cases', 'risk slides', 'model output examples', 'credit risk assignments'],
    reviewQuestions: ['Is credit risk scoring taught?', 'Are PD/LGD/EAD defined?', 'Are expected loss formulas used?', 'Are business decisions explained?'],
    targetHubObjects: ['credit-risk-scoring', 'pd', 'lgd', 'ead', 'expected-loss', 'calibration-plot'],
    expectedEvidence: ['risk definitions', 'scorecard workflow', 'portfolio examples', 'formula examples', 'approval decision context'],
    blockedReason: 'No Banking Risk academic files have been reviewed yet.',
    nextAction: 'Review after P0 batches or when banking materials are available.'
  },
  {
    id: 'academic-management-strategy',
    title: 'Management and Strategy Academic Review',
    priority: 'P2',
    status: 'Waiting for files',
    academicArea: 'Management / Strategy / Business',
    objective: 'Validate MIM frameworks and business strategy cases for the management layer of the Hub.',
    requiredMaterials: ['strategy slides', 'case briefs', 'framework notes', 'management assignments'],
    reviewQuestions: ['Which frameworks are explicitly taught?', 'Which cases are used?', 'Which business decisions are supported?', 'Which frameworks are complements only?'],
    targetHubObjects: ['swot', 'pestel', 'business-model-canvas', 'porter-five-forces'],
    expectedEvidence: ['framework slides', 'case prompts', 'business context', 'decision criteria'],
    blockedReason: 'No Management/Strategy academic files have been reviewed yet.',
    nextAction: 'Review after P0/P1 technical and finance batches unless these files are already available.'
  }
]

export const academicReviewSummary: AcademicReviewSummary = {
  total: academicReviewBatches.length,
  p0: academicReviewBatches.filter((batch) => batch.priority === 'P0').length,
  waitingForFiles: academicReviewBatches.filter((batch) => batch.status === 'Waiting for files').length,
  readyToReview: academicReviewBatches.filter((batch) => batch.status === 'Ready to review').length,
  reviewed: academicReviewBatches.filter((batch) => batch.status === 'Reviewed').length
}
