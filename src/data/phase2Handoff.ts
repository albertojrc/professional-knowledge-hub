import type { PhaseHandoffSummary } from '../types/phaseHandoff'

export const phase2Handoff: PhaseHandoffSummary = {
  phase: 'Phase 2 · Source Governance Infrastructure',
  status: 'Ready for next phase',
  executiveSummary: 'Phase 2 established the governance, routing, QA, review and promotion infrastructure required before converting academic material into source-backed Hub content. No academic source-backed upgrade is approved yet because real course files still need review.',
  sections: [
    {
      id: 'handoff-governance-system',
      title: 'Governance system',
      status: 'Complete',
      summary: 'The Hub now has a full source governance workflow from intake to promotion control.',
      completed: ['Source Command Center', 'Source Governance Summary', 'Source Decision Board', 'Promotion Queue', 'Controlled Update Log'],
      openRisks: ['academic upgrades remain blocked until course evidence is reviewed'],
      nextActions: ['use Decision Board as the final approval gate for every source-backed claim']
    },
    {
      id: 'handoff-review-system',
      title: 'Review system',
      status: 'Complete',
      summary: 'The Hub now has source packs, review batches, a standard review form and a review result registry.',
      completed: ['Source Pack Guide', 'Source Batch Planner', 'Review Form Template', 'Review Result Registry'],
      openRisks: ['pending records do not prove academic content'],
      nextActions: ['start with P0 batches: Data Science Core, SQL/ABT and Finance/Valuation']
    },
    {
      id: 'handoff-navigation-qa',
      title: 'Navigation and QA',
      status: 'Needs build verification',
      summary: 'Governance pages are connected to ViewId, App routing, Sidebar, Global Search and dedicated QA scripts.',
      completed: ['Route QA page', 'Global Search indexing', 'Sidebar cleanup', 'Sprint QA commands'],
      openRisks: ['local build has not been run inside this chat environment'],
      nextActions: ['run npm run validate locally before using the app as final']
    },
    {
      id: 'handoff-evidence-limits',
      title: 'Evidence limits',
      status: 'Blocked by missing evidence',
      summary: 'The Hub honestly separates governance evidence from academic course evidence.',
      completed: ['governance evidence recorded', 'technical shell reviewed as metadata only', 'academic upgrades blocked'],
      openRisks: ['no Data Science, SQL, Finance, Banking or Management course files have been reviewed yet'],
      nextActions: ['upload or expose real course files for batch review']
    }
  ],
  nextSteps: [
    {
      id: 'next-data-science-core',
      title: 'Start Data Science Core review',
      priority: 'P0',
      objective: 'Review core Data Science slides, notebooks and assignments to validate analytical assets.',
      unlocks: ['data-quality-report', 'eda', 'feature-engineering', 'train-test-split', 'cross-validation'],
      requiredInputs: ['slides', 'notebooks', 'assignments', 'output examples']
    },
    {
      id: 'next-sql-abt',
      title: 'Review SQL and ABT material',
      priority: 'P0',
      objective: 'Validate SQL joins, table grain, reconciliation and analytical base table logic.',
      unlocks: ['sql-joins', 'analytical-base-table', 'sql-join-reconciliation-output'],
      requiredInputs: ['SQL exercises', 'query files', 'table diagrams', 'output samples']
    },
    {
      id: 'next-finance-valuation',
      title: 'Review Finance and Valuation material',
      priority: 'P0',
      objective: 'Validate finance formulas, valuation logic and corporate finance outputs.',
      unlocks: ['financial-ratios', 'cash-flow-analysis', 'wacc', 'capm', 'npv'],
      requiredInputs: ['finance slides', 'Excel models', 'valuation cases', 'worked examples']
    },
    {
      id: 'next-banking-risk',
      title: 'Review Banking Risk material',
      priority: 'P1',
      objective: 'Validate credit risk scoring, PD/LGD/EAD and expected loss workflows.',
      unlocks: ['credit-risk-scoring', 'pd', 'lgd', 'ead', 'expected-loss'],
      requiredInputs: ['banking cases', 'risk slides', 'model outputs', 'assignments']
    }
  ]
}
