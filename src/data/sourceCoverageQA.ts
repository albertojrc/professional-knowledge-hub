import { professionalGraphLinks, professionalGraphPathways } from './professionalGraph'
import type { SourceCoverageRecord, SourceCoverageRule, SourceCoverageSummary } from '../types/sourceCoverage'

export const sourceCoverageRecords: SourceCoverageRecord[] = [
  {
    id: 'coverage-data-quality-report',
    title: 'Data Quality Report',
    objectType: 'Asset',
    area: 'Data Science',
    status: 'Evidence candidate',
    risk: 'Medium',
    linkedMaterials: ['dual-degree-folder'],
    linkedModules: ['mbd-data-science', 'mbd-data-engineering-bi'],
    linkedObjects: ['data-quality-report-output', 'missing-rate', 'credit-risk-data-quality-review'],
    evidenceAvailable: ['Expected Data Science/BI material exists in main folder but file-level inspection is pending.'],
    gaps: ['Need actual slide/notebook references', 'Need examples of missing values, duplicates or outliers from class material'],
    nextAction: 'Inspect Data Science and BI documents to confirm data quality checks and outputs.'
  },
  {
    id: 'coverage-analytical-base-table',
    title: 'Analytical Base Table',
    objectType: 'Asset',
    area: 'SQL / Databases',
    status: 'Evidence candidate',
    risk: 'Medium',
    linkedMaterials: ['dual-degree-folder'],
    linkedModules: ['mbd-data-engineering-bi', 'mbd-data-science'],
    linkedObjects: ['sql-joins', 'sql-join-reconciliation-output', 'credit-scoring-abt'],
    evidenceAvailable: ['Expected SQL/modeling material exists in main folder but exact ABT evidence is pending.'],
    gaps: ['Need ABT examples from notebooks or assignments', 'Need target definition and observation date evidence'],
    nextAction: 'Inspect SQL scripts and modeling notebooks for final analysis-ready table design.'
  },
  {
    id: 'coverage-sql-joins',
    title: 'SQL Joins',
    objectType: 'Asset',
    area: 'SQL / Databases',
    status: 'Evidence candidate',
    risk: 'Medium',
    linkedMaterials: ['dual-degree-folder'],
    linkedModules: ['mbd-data-engineering-bi'],
    linkedObjects: ['join-match-rate', 'sql-join-reconciliation-output', 'sql-customer-360-case'],
    evidenceAvailable: ['Expected SQL/database material exists but exact exercises are not yet inspected.'],
    gaps: ['Need join types covered', 'Need query examples', 'Need row reconciliation examples'],
    nextAction: 'Inspect SQL/database materials and map join examples to the asset.'
  },
  {
    id: 'coverage-financial-ratios',
    title: 'Financial Ratios',
    objectType: 'Asset',
    area: 'Finance',
    status: 'Evidence candidate',
    risk: 'Medium',
    linkedMaterials: ['dual-degree-folder'],
    linkedModules: ['mim-finance-economics'],
    linkedObjects: ['financial-ratio-table-output', 'current-ratio', 'sme-financial-ratio-review'],
    evidenceAvailable: ['Expected finance/economics material exists but formulas and examples need inspection.'],
    gaps: ['Need exact ratio list taught', 'Need formula examples', 'Need interpretation notes from cases or exercises'],
    nextAction: 'Inspect finance materials and extract all ratio formulas and interpretation rules.'
  },
  {
    id: 'coverage-cash-flow-analysis',
    title: 'Cash Flow Analysis',
    objectType: 'Asset',
    area: 'Finance',
    status: 'Evidence candidate',
    risk: 'Medium',
    linkedMaterials: ['dual-degree-folder'],
    linkedModules: ['mim-finance-economics'],
    linkedObjects: ['cash-flow-bridge-output', 'free-cash-flow', 'cash-flow-credit-approval'],
    evidenceAvailable: ['Expected finance/valuation material exists but cash flow examples need validation.'],
    gaps: ['Need cash flow statement examples', 'Need free cash flow formula coverage', 'Need credit or valuation use cases'],
    nextAction: 'Inspect finance and valuation materials for cash flow analysis coverage.'
  },
  {
    id: 'coverage-fraud-detection',
    title: 'Fraud Detection',
    objectType: 'Business Case',
    area: 'Banking',
    status: 'Recommended complement',
    risk: 'Low',
    linkedMaterials: ['dual-degree-folder'],
    linkedModules: ['banking-analytics', 'mbd-data-science'],
    linkedObjects: ['precision-recall-curve', 'lift-curve', 'confusion-matrix'],
    evidenceAvailable: ['Professionally relevant to banking analytics. Class evidence not confirmed.'],
    gaps: ['Need confirmation that fraud is explicitly covered in class materials'],
    nextAction: 'Keep as recommended complement unless fraud appears in course files.'
  },
  {
    id: 'coverage-aml-kyc',
    title: 'AML/KYC Analytics',
    objectType: 'Business Case',
    area: 'Banking',
    status: 'Recommended complement',
    risk: 'Low',
    linkedMaterials: ['dual-degree-folder'],
    linkedModules: ['banking-analytics'],
    linkedObjects: ['fraud-detection', 'graph-analytics', 'alert-triage'],
    evidenceAvailable: ['Professionally relevant to banking governance and compliance. Class evidence not confirmed.'],
    gaps: ['Need confirmation that AML/KYC or compliance analytics appears in materials'],
    nextAction: 'Keep as recommended complement until source evidence is found.'
  },
  {
    id: 'coverage-professional-graph-pending-links',
    title: 'Professional Graph Pending Links',
    objectType: 'Graph Link',
    area: 'Source QA',
    status: 'Pending inspection',
    risk: 'High',
    linkedMaterials: ['dual-degree-folder'],
    linkedModules: ['mbd-data-science', 'mbd-data-engineering-bi', 'mim-finance-economics', 'banking-analytics'],
    linkedObjects: professionalGraphLinks.filter((link) => link.strength === 'Pending').map((link) => link.id),
    evidenceAvailable: ['Graph has pending links by design to avoid premature source claims.'],
    gaps: ['Need file-level evidence for material-to-module and area-to-evidence links'],
    nextAction: 'Inspect Drive folder structure and map file names to modules before upgrading link strength.'
  },
  {
    id: 'coverage-professional-pathways',
    title: 'Professional Graph Pathways',
    objectType: 'Pathway',
    area: 'Source QA',
    status: 'Pending inspection',
    risk: 'High',
    linkedMaterials: ['dual-degree-folder'],
    linkedModules: ['mbd-data-science', 'mbd-data-engineering-bi', 'mim-finance-economics'],
    linkedObjects: professionalGraphPathways.map((pathway) => pathway.id),
    evidenceAvailable: ['Pathways are structurally valid but not yet source-backed.'],
    gaps: ['Need source evidence for each step in the pathway', 'Need exact documents supporting each asset and output'],
    nextAction: 'Create source-to-pathway evidence notes after inspecting actual files.'
  }
]

export const sourceCoverageRules: SourceCoverageRule[] = [
  {
    id: 'rule-no-source-claim-without-file',
    title: 'No source claim without file evidence',
    description: 'Do not mark content as source-backed unless a real file, slide, assignment or notebook supports it.',
    passCondition: 'Every source-backed item has linked material, module and evidence note.'
  },
  {
    id: 'rule-complement-label',
    title: 'Recommended complements must be explicit',
    description: 'Professionally useful topics that are not found in class material must remain labeled as complements.',
    passCondition: 'Every complement has a clear professional reason and no false class claim.'
  },
  {
    id: 'rule-pending-links',
    title: 'Pending graph links must stay visible',
    description: 'Links that depend on uninspected files must remain marked as pending until validated.',
    passCondition: 'Pending links are counted and shown in Source Coverage QA.'
  },
  {
    id: 'rule-gaps-next-action',
    title: 'Every gap needs a next action',
    description: 'A gap without a next action is not operationally useful.',
    passCondition: 'Every coverage record includes gaps and a concrete next action.'
  }
]

export const sourceCoverageSummary: SourceCoverageSummary = {
  total: sourceCoverageRecords.length,
  sourceBacked: sourceCoverageRecords.filter((item) => item.status === 'Source-backed').length,
  evidenceCandidates: sourceCoverageRecords.filter((item) => item.status === 'Evidence candidate').length,
  recommendedComplements: sourceCoverageRecords.filter((item) => item.status === 'Recommended complement').length,
  pendingInspection: sourceCoverageRecords.filter((item) => item.status === 'Pending inspection').length,
  needsReview: sourceCoverageRecords.filter((item) => item.status === 'Needs review').length,
  highRisk: sourceCoverageRecords.filter((item) => item.risk === 'High').length
}

export const pendingGraphLinks = professionalGraphLinks.filter((link) => link.strength === 'Pending')
export const strongGraphLinks = professionalGraphLinks.filter((link) => link.strength === 'Strong')
