import type { ReviewResultRecord, ReviewResultSummary } from '../types/reviewResult'

export const reviewResultRecords: ReviewResultRecord[] = [
  {
    id: 'result-project-governance-review',
    title: 'Project requirements review result',
    batchId: 'governance-review',
    materialReviewed: 'Project requirements text',
    status: 'Reviewed',
    recommendation: 'No upgrade',
    metadata: ['project brief', 'governance source', 'cross-program scope'],
    topicsFound: ['Knowledge Hub objective', 'Data Science', 'Management', 'Banking', 'Finance', 'Economics', 'Analytics', 'no invented information rule'],
    formulasFound: [],
    outputsFound: ['dashboard requirement', 'knowledge map requirement', 'formula library requirement', 'model library requirement'],
    casesFound: ['professional second brain objective'],
    decisionNotes: ['Valid governance evidence only', 'Does not prove academic course coverage'],
    linkedObjects: ['source-governance-summary', 'quality-review', 'knowledge-map'],
    coverageUpdates: ['governance structure validated', 'academic coverage remains pending'],
    decisionBoardUpdates: ['no source-backed academic upgrade approved'],
    risks: ['overclaiming if governance text is treated as class content'],
    nextAction: 'Keep as governance evidence and continue reviewing actual course files.'
  },
  {
    id: 'result-index-shell-review',
    title: 'Index shell review result',
    batchId: 'technical-shell-review',
    materialReviewed: 'degree_references / index.html',
    status: 'Reviewed',
    recommendation: 'No upgrade',
    metadata: ['HTML shell', 'React root', 'main.tsx entrypoint'],
    topicsFound: ['MIM plus MBD reference title', 'Banking edition title'],
    formulasFound: [],
    outputsFound: [],
    casesFound: [],
    decisionNotes: ['Supports app metadata only', 'No formulas, models, outputs or academic cases found'],
    linkedObjects: ['material-inventory', 'source-review-execution', 'course-evidence'],
    coverageUpdates: ['platform metadata reviewed', 'academic evidence remains missing'],
    decisionBoardUpdates: ['no academic object ready for source-backed review'],
    risks: ['technical shell should not be used as academic evidence'],
    nextAction: 'Keep reviewed status for metadata and inspect real course materials next.'
  },
  {
    id: 'result-data-science-core-pending',
    title: 'Data Science Core pending review result',
    batchId: 'batch-data-science-core',
    materialReviewed: 'Pending Data Science slides, notebooks or assignments',
    status: 'Planned',
    recommendation: 'Keep candidate',
    metadata: ['batch planned', 'materials not reviewed yet'],
    topicsFound: [],
    formulasFound: [],
    outputsFound: [],
    casesFound: [],
    decisionNotes: ['No review result can be completed until files are available'],
    linkedObjects: ['data-quality-report', 'eda', 'feature-engineering', 'course-evidence'],
    coverageUpdates: ['coverage-data-quality-report remains candidate', 'coverage-analytical-base-table remains candidate'],
    decisionBoardUpdates: ['decision-data-quality-report remains needs evidence'],
    risks: ['asset upgrades would be premature'],
    nextAction: 'Run the standard review form after Data Science material is available.'
  },
  {
    id: 'result-finance-core-pending',
    title: 'Finance and Valuation pending review result',
    batchId: 'batch-finance-valuation',
    materialReviewed: 'Pending finance slides, valuation notes or Excel models',
    status: 'Planned',
    recommendation: 'Keep candidate',
    metadata: ['batch planned', 'finance materials not reviewed yet'],
    topicsFound: [],
    formulasFound: [],
    outputsFound: [],
    casesFound: [],
    decisionNotes: ['No finance formula can be upgraded without visible course evidence'],
    linkedObjects: ['financial-ratios', 'cash-flow-analysis', 'wacc', 'npv'],
    coverageUpdates: ['coverage-financial-ratios remains candidate', 'coverage-cash-flow-analysis remains candidate'],
    decisionBoardUpdates: ['decision-financial-ratios remains needs evidence', 'decision-cash-flow-analysis remains needs evidence'],
    risks: ['formula library could overstate academic support'],
    nextAction: 'Use the review form after finance source material is available.'
  }
]

export const reviewResultSummary: ReviewResultSummary = {
  total: reviewResultRecords.length,
  reviewed: reviewResultRecords.filter((item) => item.status === 'Reviewed').length,
  readyForDecision: reviewResultRecords.filter((item) => item.status === 'Ready for decision').length,
  needsMoreEvidence: reviewResultRecords.filter((item) => item.status === 'Needs more evidence').length,
  sourceBackedReady: reviewResultRecords.filter((item) => item.recommendation === 'Ready for source-backed review').length
}
