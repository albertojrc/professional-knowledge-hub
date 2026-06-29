import type { BankingSafeUpdate, BankingSafeUpdateSummary } from '../types/bankingSafeUpdate'

export const bankingSafeUpdates: BankingSafeUpdate[] = [
  { id:'safe-credit-workflow', title:'Credit workflow block', status:'Applied placeholder', lessonId:'credit-scoring-foundations', updateType:'Workflow', displayText:'Problem framing → target → lending table → score → validation → policy → monitoring.', evidenceNote:'Safe scaffold. Page refs are still pending before reviewed promotion.', linkedReviewViews:['credit-scoring-review','credit-promotion-queue'], nextAction:'Add page refs for the workflow sequence.' },
  { id:'safe-target-placeholder', title:'Target definition placeholder', status:'Pending refs', lessonId:'credit-scoring-foundations', updateType:'Placeholder', displayText:'Target definition and observation window must be verified before official study use.', evidenceNote:'Target setup remains pending exact references.', linkedReviewViews:['credit-scoring-review','academic-notes'], nextAction:'Extract target refs.' },
  { id:'safe-abt-placeholder', title:'Lending data placeholder', status:'Applied placeholder', lessonId:'lending-data-abt', updateType:'Data workflow', displayText:'Map borrower, loan, behavior, target and validation fields before modeling.', evidenceNote:'Official field examples require data dictionary review.', linkedReviewViews:['academic-notes','credit-promotion-queue'], nextAction:'Complete field grouping.' },
  { id:'safe-validation-placeholder', title:'Validation placeholder', status:'Applied placeholder', lessonId:'credit-model-validation', updateType:'Output interpretation', displayText:'Validation should separate ranking, calibration, stability and business usefulness.', evidenceNote:'Metric list still needs confirmed refs and KS cross-check.', linkedReviewViews:['credit-scoring-review','credit-promotion-queue'], nextAction:'Confirm metric list and caveats.' },
  { id:'safe-policy-placeholder', title:'Policy placeholder', status:'Pending refs', lessonId:'credit-decision-policy', updateType:'Policy', displayText:'Score bands and cutoffs remain conditional examples until reviewed evidence exists.', evidenceNote:'Rules vary by institution; avoid universal claims.', linkedReviewViews:['credit-scoring-review','credit-promotion-queue'], nextAction:'Look for explicit examples.' },
  { id:'safe-interview-link', title:'Interview bridge', status:'Review link', lessonId:'credit-model-validation', updateType:'Career bridge', displayText:'Explain how a credit score supports a lending decision without becoming the decision itself.', evidenceNote:'Useful for practice; model-family claims remain pending.', linkedReviewViews:['interview-prep','credit-promotion-queue'], nextAction:'Move after interpretation refs are confirmed.' }
]

export const bankingSafeUpdateSummary: BankingSafeUpdateSummary = {
  total: bankingSafeUpdates.length,
  applied: bankingSafeUpdates.filter((x)=>x.status==='Applied placeholder').length,
  pending: bankingSafeUpdates.filter((x)=>x.status==='Pending refs').length,
  reviewLinks: bankingSafeUpdates.filter((x)=>x.status==='Review link').length
}
