import { sourceIntakeSummary } from './sourceIntake'
import { intakeCoverageSummary } from './intakeCoverageMap'
import { courseEvidenceSummary } from './courseEvidenceExtraction'
import { sourceExecutionSummary } from './sourceReviewExecution'
import { sourceCoverageSummary } from './sourceCoverageQA'
import { sourceDecisionSummary } from './sourceDecisionBoard'
import type { GovernanceSummary } from '../types/sourceGovernance'

export const sourceGovernanceSummary: GovernanceSummary = {
  maturityScore: 42,
  maturityLabel: 'Strong governance structure, academic evidence still missing',
  executiveDecision: 'Do not approve academic source-backed upgrades yet. Continue intake and review of real course files.',
  metrics: [
    { id: 'metric-intake-needed', label: 'Missing file groups', value: sourceIntakeSummary.needed, detail: 'Course files still needed for academic validation.', health: 'Evidence missing' },
    { id: 'metric-intake-maps', label: 'Intake maps', value: intakeCoverageSummary.total, detail: 'Missing files are mapped to coverage, evidence and graph updates.', health: 'Strong structure' },
    { id: 'metric-evidence-records', label: 'Evidence records', value: courseEvidenceSummary.total, detail: 'Governance evidence exists, academic course evidence remains pending.', health: 'Evidence missing' },
    { id: 'metric-review-execution', label: 'Review executions', value: sourceExecutionSummary.total, detail: 'First review pass is documented with limits.', health: 'Strong structure' },
    { id: 'metric-coverage-records', label: 'Coverage records', value: sourceCoverageSummary.total, detail: 'Coverage records track candidates, complements and pending items.', health: 'Strong structure' },
    { id: 'metric-decision-items', label: 'Decision items', value: sourceDecisionSummary.total, detail: 'Upgrade decisions have criteria and blockers.', health: 'Strong structure' },
    { id: 'metric-approved-upgrades', label: 'Approved upgrades', value: sourceDecisionSummary.approved, detail: 'No academic source-backed upgrades are approved yet.', health: 'Blocked' }
  ],
  workstreams: [
    {
      id: 'workstream-intake',
      title: 'Source Intake',
      status: 'Evidence missing',
      summary: 'The Hub knows which files are missing and what each file can unlock.',
      signals: ['critical Data Science, SQL and Finance files are needed', 'accepted formats and minimum evidence are defined'],
      risks: ['without files, academic assets cannot be upgraded'],
      nextActions: ['collect readable course PDFs, slides, notebooks, assignments and datasets']
    },
    {
      id: 'workstream-coverage',
      title: 'Source Coverage QA',
      status: 'Strong structure',
      summary: 'Coverage records are organized and visible, but most academic claims are still candidates or pending.',
      signals: ['coverage statuses exist', 'pending links are explicit', 'recommended complements are separated'],
      risks: ['source-backed label would be premature without course evidence'],
      nextActions: ['update records only after source review confirms evidence']
    },
    {
      id: 'workstream-evidence',
      title: 'Course Evidence',
      status: 'Evidence missing',
      summary: 'Governance and platform evidence exists. Academic evidence is still missing.',
      signals: ['project requirements support governance', 'index shell supports app metadata'],
      risks: ['no formulas, models, cases or class examples found yet'],
      nextActions: ['review actual course files from the dual degree material']
    },
    {
      id: 'workstream-decision',
      title: 'Decision Board',
      status: 'Strong structure',
      summary: 'Upgrade decisions have evidence requirements, blockers and approval criteria.',
      signals: ['high-risk decisions are visible', 'no upgrade is approved without evidence'],
      risks: ['manual discipline is required when future files arrive'],
      nextActions: ['apply decision criteria after each source review pass']
    }
  ]
}
