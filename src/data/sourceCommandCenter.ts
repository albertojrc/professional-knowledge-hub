import { sourceGovernanceSummary } from './sourceGovernanceSummary'
import { promotionQueueSummary } from './promotionQueue'
import { controlledUpdateLogSummary } from './controlledUpdateLog'
import { reviewResultSummary } from './reviewResultRegistry'
import { sourceDecisionSummary } from './sourceDecisionBoard'
import type { SourceCommandCenter } from '../types/sourceCommandCenter'

export const sourceCommandCenter: SourceCommandCenter = {
  id: 'source-governance-command-center',
  title: 'Source Governance Command Center',
  executiveStatus: 'Governance system is strong, but academic source-backed upgrades remain blocked until real course evidence is reviewed.',
  executiveWarning: 'Do not mark any academic Knowledge Asset, Formula, Output or Business Case as source-backed without Decision Board approval.',
  governanceFlow: ['Review Result Registry', 'Promotion Queue', 'Decision Board', 'Controlled Update Log', 'Knowledge Hub Update'],
  signals: [
    { id: 'signal-maturity', label: 'Maturity score', value: sourceGovernanceSummary.maturityScore, status: 'Healthy', detail: sourceGovernanceSummary.maturityLabel },
    { id: 'signal-review-results', label: 'Review results', value: reviewResultSummary.total, status: reviewResultSummary.readyForDecision > 0 ? 'Needs decision' : 'Waiting', detail: `${reviewResultSummary.reviewed} reviewed and ${reviewResultSummary.readyForDecision} ready for decision.` },
    { id: 'signal-promotion-blocked', label: 'Blocked promotions', value: promotionQueueSummary.blocked, status: promotionQueueSummary.blocked > 0 ? 'Blocked' : 'Healthy', detail: 'Promotion items blocked by missing academic evidence.' },
    { id: 'signal-promotions-waiting', label: 'Promotions waiting', value: promotionQueueSummary.waitingForDecision, status: promotionQueueSummary.waitingForDecision > 0 ? 'Needs decision' : 'Healthy', detail: 'Items waiting for governance or metadata decision.' },
    { id: 'signal-update-log', label: 'Update log items', value: controlledUpdateLogSummary.total, status: controlledUpdateLogSummary.applied > 0 ? 'Healthy' : 'Waiting', detail: `${controlledUpdateLogSummary.deferred} deferred, ${controlledUpdateLogSummary.waitingForEvidence} waiting, ${controlledUpdateLogSummary.sentBack} sent back.` },
    { id: 'signal-approved-upgrades', label: 'Approved upgrades', value: sourceDecisionSummary.approved, status: sourceDecisionSummary.approved > 0 ? 'Healthy' : 'Blocked', detail: 'No academic source-backed upgrades are approved yet.' }
  ],
  actions: [
    {
      id: 'action-review-p0-packs',
      title: 'Review P0 academic source batches first',
      priority: 'P0',
      owner: 'PKOS review process',
      reason: 'Data Science, SQL and Finance packs unlock the highest-value assets and formulas.',
      linkedViews: ['Source Pack Guide', 'Source Batch Planner', 'Review Form Template'],
      nextStep: 'Use the standard review form on Data Science Core, SQL/ABT and Finance/Valuation batches.'
    },
    {
      id: 'action-clear-blocked-promotions',
      title: 'Clear high-risk blocked promotions with evidence only',
      priority: 'P0',
      owner: 'Source Decision Board',
      reason: 'Several high-risk promotions are blocked by missing course material.',
      linkedViews: ['Promotion Queue', 'Source Decision Board', 'Controlled Update Log'],
      nextStep: 'Keep blocked until matching review results contain explicit course evidence.'
    },
    {
      id: 'action-approve-metadata-only',
      title: 'Decide metadata-only promotions separately',
      priority: 'P1',
      owner: 'PKOS governance review',
      reason: 'Governance and technical shell evidence can be recorded without academic source claims.',
      linkedViews: ['Review Result Registry', 'Promotion Queue', 'Controlled Update Log'],
      nextStep: 'Approve only if wording remains metadata/governance-only.'
    },
    {
      id: 'action-preserve-no-invention-rule',
      title: 'Preserve the no-invention rule across all pages',
      priority: 'P1',
      owner: 'Quality Review',
      reason: 'The Hub must not overclaim class evidence when actual academic files have not been reviewed.',
      linkedViews: ['Quality Review', 'Source Governance', 'Controlled Update Log'],
      nextStep: 'Keep uncertain items as candidates, complements or pending evidence.'
    }
  ]
}
