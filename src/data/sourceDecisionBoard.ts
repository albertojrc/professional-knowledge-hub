import type { SourceDecisionItem, SourceDecisionSummary } from '../types/sourceDecision'

export const sourceDecisionItems: SourceDecisionItem[] = [
  {
    id: 'decision-data-quality-report',
    title: 'Data Quality Report source-backed decision',
    targetObject: 'data-quality-report',
    objectType: 'Knowledge Asset',
    currentStatus: 'Evidence candidate',
    proposedDecision: 'Needs evidence',
    risk: 'High',
    requiredEvidence: ['course slide or notebook with data quality topic', 'examples of missing values, duplicates or outliers', 'output interpretation notes'],
    availableEvidence: ['project governance requires this kind of asset', 'no class file proof yet'],
    blockers: ['Data Science course files missing', 'no academic example reviewed'],
    approvalCriteria: ['source file explicitly covers data quality', 'example output is visible', 'topic can be mapped to course/module'],
    rejectionCriteria: ['only generic project instruction exists', 'no topic heading or exercise evidence appears'],
    affectedRecords: ['coverage-data-quality-report', 'evidence-data-science-files', 'map-data-science-slides'],
    nextAction: 'Keep candidate until Data Science source file is reviewed.'
  },
  {
    id: 'decision-analytical-base-table',
    title: 'Analytical Base Table source-backed decision',
    targetObject: 'analytical-base-table',
    objectType: 'Knowledge Asset',
    currentStatus: 'Evidence candidate',
    proposedDecision: 'Needs evidence',
    risk: 'High',
    requiredEvidence: ['SQL or modeling notebook with ABT design', 'target and observation-level definition', 'join or feature table workflow'],
    availableEvidence: ['professional relevance is clear', 'no class file proof yet'],
    blockers: ['SQL notebooks missing', 'no assignment output reviewed'],
    approvalCriteria: ['ABT or equivalent modeling table is shown', 'fields or features are described', 'source maps to MBD or analytics module'],
    rejectionCriteria: ['only recommended professional logic exists', 'no course file includes ABT workflow'],
    affectedRecords: ['coverage-analytical-base-table', 'evidence-data-science-files', 'map-sql-notebooks'],
    nextAction: 'Keep candidate until SQL or notebook material is reviewed.'
  },
  {
    id: 'decision-sql-joins',
    title: 'SQL Joins source-backed decision',
    targetObject: 'sql-joins',
    objectType: 'Knowledge Asset',
    currentStatus: 'Evidence candidate',
    proposedDecision: 'Needs evidence',
    risk: 'Medium',
    requiredEvidence: ['SQL exercise or slide showing join types', 'query example', 'row matching or reconciliation output'],
    availableEvidence: ['SQL is expected in the source intake plan'],
    blockers: ['SQL files not reviewed'],
    approvalCriteria: ['join concept appears in source file', 'example query or table relationship exists'],
    rejectionCriteria: ['no SQL course file is provided', 'no join example appears'],
    affectedRecords: ['coverage-sql-joins', 'map-sql-notebooks'],
    nextAction: 'Review SQL files when received.'
  },
  {
    id: 'decision-financial-ratios',
    title: 'Financial Ratios source-backed decision',
    targetObject: 'financial-ratios',
    objectType: 'Knowledge Asset',
    currentStatus: 'Evidence candidate',
    proposedDecision: 'Needs evidence',
    risk: 'High',
    requiredEvidence: ['finance slide or exercise with ratio formulas', 'worked example', 'interpretation or decision context'],
    availableEvidence: ['finance materials are requested in intake queue'],
    blockers: ['finance files missing', 'no formula source reviewed'],
    approvalCriteria: ['ratio formulas are explicitly present', 'interpretation appears in course source'],
    rejectionCriteria: ['ratios are only recommended complements', 'no finance material supports them'],
    affectedRecords: ['coverage-financial-ratios', 'evidence-finance-files', 'map-finance-materials'],
    nextAction: 'Keep candidate until finance material is reviewed.'
  },
  {
    id: 'decision-cash-flow-analysis',
    title: 'Cash Flow Analysis source-backed decision',
    targetObject: 'cash-flow-analysis',
    objectType: 'Knowledge Asset',
    currentStatus: 'Evidence candidate',
    proposedDecision: 'Needs evidence',
    risk: 'High',
    requiredEvidence: ['cash flow statement example', 'free cash flow formula or bridge', 'valuation or credit decision use case'],
    availableEvidence: ['cash flow is in intake target list'],
    blockers: ['finance files missing'],
    approvalCriteria: ['cash flow concept is in course file', 'formula or statement example is visible'],
    rejectionCriteria: ['no course material includes cash flow examples'],
    affectedRecords: ['coverage-cash-flow-analysis', 'evidence-finance-files', 'map-finance-materials'],
    nextAction: 'Keep candidate until cash flow source material is reviewed.'
  },
  {
    id: 'decision-aml-kyc',
    title: 'AML/KYC Analytics complement decision',
    targetObject: 'AML/KYC Analytics',
    objectType: 'Business Case',
    currentStatus: 'Recommended complement',
    proposedDecision: 'Keep complement',
    risk: 'Low',
    requiredEvidence: ['explicit AML or KYC course reference to upgrade beyond complement'],
    availableEvidence: ['professional relevance for banking is clear', 'no course coverage found yet'],
    blockers: ['no AML/KYC course file evidence'],
    approvalCriteria: ['source file explicitly mentions AML, KYC or compliance analytics'],
    rejectionCriteria: ['topic remains outside course material'],
    affectedRecords: ['coverage-aml-kyc'],
    nextAction: 'Keep as recommended complement unless course evidence appears.'
  }
]

export const sourceDecisionSummary: SourceDecisionSummary = {
  total: sourceDecisionItems.length,
  readyForReview: sourceDecisionItems.filter((item) => item.proposedDecision === 'Ready for review').length,
  needsEvidence: sourceDecisionItems.filter((item) => item.proposedDecision === 'Needs evidence').length,
  approved: sourceDecisionItems.filter((item) => item.proposedDecision === 'Approved source-backed').length,
  highRisk: sourceDecisionItems.filter((item) => item.risk === 'High').length
}
