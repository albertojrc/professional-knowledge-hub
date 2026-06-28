import type { PromotionQueueItem, PromotionQueueSummary } from '../types/promotionQueue'

export const promotionQueueItems: PromotionQueueItem[] = [
  {
    id: 'promo-governance-quality-update',
    title: 'Governance evidence to Quality Review update',
    reviewResultId: 'result-project-governance-review',
    status: 'Waiting for decision',
    risk: 'Low',
    targetType: 'Coverage QA',
    targetObjects: ['quality-review', 'source-governance-summary', 'source-coverage-qa'],
    proposedUpdates: ['mark governance requirements as reviewed', 'keep academic coverage as pending', 'show no invented information rule in QA narrative'],
    requiredDecision: 'Approve governance-only update. No source-backed academic upgrade.',
    blockers: ['none for governance update'],
    validationChecklist: ['confirm source is project requirements', 'confirm no academic content is claimed', 'confirm update stays governance-only'],
    applySequence: ['update QA language', 'link governance result', 'keep academic decisions blocked'],
    nextAction: 'Approve governance-only promotion if QA wording remains conservative.'
  },
  {
    id: 'promo-index-metadata-update',
    title: 'Index shell to metadata update',
    reviewResultId: 'result-index-shell-review',
    status: 'Waiting for decision',
    risk: 'Low',
    targetType: 'Knowledge Graph',
    targetObjects: ['material-inventory', 'source-review-execution', 'course-evidence'],
    proposedUpdates: ['tag index.html as technical shell', 'keep academic evidence empty', 'link shell to app metadata only'],
    requiredDecision: 'Approve metadata-only update. No academic promotion.',
    blockers: ['none for metadata update'],
    validationChecklist: ['confirm file is only app shell', 'confirm no formulas or models are present'],
    applySequence: ['update metadata label', 'preserve no-upgrade decision', 'keep course evidence pending'],
    nextAction: 'Approve only as platform metadata evidence.'
  },
  {
    id: 'promo-data-quality-blocked',
    title: 'Data Quality Report promotion blocked',
    reviewResultId: 'result-data-science-core-pending',
    status: 'Blocked',
    risk: 'High',
    targetType: 'Knowledge Asset',
    targetObjects: ['data-quality-report', 'eda', 'feature-engineering'],
    proposedUpdates: ['no asset content update yet', 'keep evidence candidate status', 'wait for Data Science source batch'],
    requiredDecision: 'Cannot approve until real Data Science course material is reviewed.',
    blockers: ['Data Science core batch not reviewed', 'no topic evidence found', 'no output examples found'],
    validationChecklist: ['review slides or notebooks', 'find explicit data quality topic', 'record output evidence', 'submit to decision board'],
    applySequence: ['complete batch review', 'create review result', 'decision board approval', 'then update asset'],
    nextAction: 'Keep blocked until batch-data-science-core has a reviewed result.'
  },
  {
    id: 'promo-sql-abt-blocked',
    title: 'SQL and ABT promotion blocked',
    reviewResultId: 'result-data-science-core-pending',
    status: 'Blocked',
    risk: 'High',
    targetType: 'Knowledge Asset',
    targetObjects: ['sql-joins', 'analytical-base-table', 'sql-join-reconciliation-output'],
    proposedUpdates: ['no SQL asset upgrade yet', 'keep ABT evidence candidate', 'wait for SQL review batch'],
    requiredDecision: 'Cannot approve until SQL or notebook evidence is reviewed.',
    blockers: ['SQL batch not reviewed', 'no query examples captured', 'no row reconciliation output captured'],
    validationChecklist: ['review SQL exercises', 'capture join examples', 'capture table grain', 'map output'],
    applySequence: ['complete SQL batch', 'update review registry', 'decision board review', 'update asset and output atlas'],
    nextAction: 'Keep blocked until batch-sql-abt is reviewed.'
  },
  {
    id: 'promo-finance-blocked',
    title: 'Finance formulas promotion blocked',
    reviewResultId: 'result-finance-core-pending',
    status: 'Blocked',
    risk: 'High',
    targetType: 'Formula Library',
    targetObjects: ['financial-ratios', 'cash-flow-analysis', 'wacc', 'npv', 'free-cash-flow'],
    proposedUpdates: ['no formula source-backed update yet', 'keep finance assets as candidates', 'wait for finance source batch'],
    requiredDecision: 'Cannot approve until finance course formulas or worked examples are reviewed.',
    blockers: ['finance batch not reviewed', 'no formulas found', 'no worked examples captured'],
    validationChecklist: ['review finance slides', 'record formulas', 'capture worked example', 'map to output atlas'],
    applySequence: ['complete finance review', 'create result record', 'decision board review', 'update formula and asset records'],
    nextAction: 'Keep blocked until batch-finance-valuation is reviewed.'
  },
  {
    id: 'promo-business-cases-blocked',
    title: 'Business case library promotion blocked',
    reviewResultId: 'result-data-science-core-pending',
    status: 'Blocked',
    risk: 'Medium',
    targetType: 'Business Case',
    targetObjects: ['credit-risk-data-quality-review', 'credit-scoring-abt', 'sme-financial-ratio-review'],
    proposedUpdates: ['no business case source-backed claim yet', 'keep professional synthesis label', 'wait for assignments and case files'],
    requiredDecision: 'Cannot approve source-backed business cases without case or assignment evidence.',
    blockers: ['assignment batch not reviewed', 'no case prompt captured', 'no decision context captured'],
    validationChecklist: ['review assignments', 'capture business question', 'capture dataset/output requirement', 'map to case'],
    applySequence: ['review assignments', 'record case evidence', 'decision board review', 'update case library'],
    nextAction: 'Keep blocked until batch-assignments-datasets has reviewed records.'
  }
]

export const promotionQueueSummary: PromotionQueueSummary = {
  total: promotionQueueItems.length,
  blocked: promotionQueueItems.filter((item) => item.status === 'Blocked').length,
  waitingForDecision: promotionQueueItems.filter((item) => item.status === 'Waiting for decision').length,
  readyToApply: promotionQueueItems.filter((item) => item.status === 'Ready to apply').length,
  applied: promotionQueueItems.filter((item) => item.status === 'Applied').length,
  highRisk: promotionQueueItems.filter((item) => item.risk === 'High').length
}
