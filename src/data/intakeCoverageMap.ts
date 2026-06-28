import type { IntakeCoverageMapItem, IntakeCoverageSummary } from '../types/intakeCoverage'

export const intakeCoverageMapItems: IntakeCoverageMapItem[] = [
  {
    id: 'map-data-science-slides',
    intakeId: 'intake-data-science-slides',
    title: 'Data Science materials to evidence coverage',
    readiness: 'Blocked by missing file',
    coverageRecordIds: ['coverage-data-quality-report', 'coverage-analytical-base-table'],
    evidenceRecordIds: ['evidence-data-science-files'],
    graphNodeIds: ['area-data-science', 'data-quality-report', 'analytical-base-table'],
    graphLinkIds: ['l8', 'l9', 'l12', 'l13'],
    upgradeCandidates: ['data-quality-report', 'eda', 'feature-engineering', 'train-test-split', 'cross-validation'],
    validationQuestions: ['Does the file explicitly cover data quality checks?', 'Does it show EDA or feature workflow?', 'Does it include outputs that can be interpreted?'],
    updateSequence: ['capture metadata', 'extract topic headings', 'update course evidence', 'update source coverage', 'upgrade valid assets only'],
    nextAction: 'When Data Science files arrive, inspect them before upgrading any asset.'
  },
  {
    id: 'map-sql-notebooks',
    intakeId: 'intake-sql-notebooks',
    title: 'SQL notebooks to ABT and join coverage',
    readiness: 'Blocked by missing file',
    coverageRecordIds: ['coverage-sql-joins', 'coverage-analytical-base-table'],
    evidenceRecordIds: ['evidence-data-science-files'],
    graphNodeIds: ['sql-joins', 'analytical-base-table', 'sql-join-reconciliation-output'],
    graphLinkIds: ['l18', 'l19', 'l20', 'l26'],
    upgradeCandidates: ['sql-joins', 'analytical-base-table', 'join-match-rate', 'sql-join-reconciliation-output'],
    validationQuestions: ['Are SQL joins explicitly used?', 'Are row counts reconciled?', 'Is an analysis-ready table created?'],
    updateSequence: ['review notebook or SQL file', 'extract query examples', 'map outputs', 'update graph links', 'update source coverage'],
    nextAction: 'Use SQL files to validate join and ABT assets.'
  },
  {
    id: 'map-finance-materials',
    intakeId: 'intake-finance-materials',
    title: 'Finance materials to formula and case coverage',
    readiness: 'Blocked by missing file',
    coverageRecordIds: ['coverage-financial-ratios', 'coverage-cash-flow-analysis'],
    evidenceRecordIds: ['evidence-finance-files'],
    graphNodeIds: ['area-finance', 'financial-ratios', 'cash-flow-analysis'],
    graphLinkIds: ['l10', 'l11', 'l14', 'l15', 'l21', 'l22', 'l23', 'l24'],
    upgradeCandidates: ['financial-ratios', 'cash-flow-analysis', 'current-ratio', 'free-cash-flow', 'wacc', 'npv'],
    validationQuestions: ['Are formulas explicitly taught?', 'Are worked examples included?', 'Are cases connected to decisions?'],
    updateSequence: ['extract formulas', 'extract examples', 'map to formula library', 'map to cases', 'update coverage'],
    nextAction: 'Use finance materials to validate formulas and finance cases.'
  },
  {
    id: 'map-banking-risk-cases',
    intakeId: 'intake-banking-risk-cases',
    title: 'Banking risk cases to credit risk coverage',
    readiness: 'Blocked by missing file',
    coverageRecordIds: ['coverage-professional-graph-pending-links'],
    evidenceRecordIds: ['evidence-banking-files'],
    graphNodeIds: ['area-banking', 'credit-risk-data-quality-review', 'credit-scoring-abt'],
    graphLinkIds: ['l7', 'l25', 'l26'],
    upgradeCandidates: ['credit-risk-scoring', 'pd', 'lgd', 'ead', 'expected-loss', 'credit-risk-data-quality-review'],
    validationQuestions: ['Does the file cover credit risk or scoring?', 'Are PD/LGD/EAD/EL defined?', 'Is there a banking decision case?'],
    updateSequence: ['extract case context', 'extract risk formulas', 'map model outputs', 'update business cases', 'update source coverage'],
    nextAction: 'Use banking cases to validate risk analytics assets.'
  },
  {
    id: 'map-management-strategy',
    intakeId: 'intake-management-strategy',
    title: 'Management materials to strategy coverage',
    readiness: 'Blocked by missing file',
    coverageRecordIds: [],
    evidenceRecordIds: [],
    graphNodeIds: [],
    graphLinkIds: [],
    upgradeCandidates: ['business-model-canvas', 'swot', 'pestel', 'porter-five-forces'],
    validationQuestions: ['Which frameworks are explicitly covered?', 'Are cases provided?', 'What decision does each framework support?'],
    updateSequence: ['extract framework names', 'capture cases', 'map to management assets', 'flag complements'],
    nextAction: 'Use MIM strategy files to validate management assets.'
  },
  {
    id: 'map-datasets-assignments',
    intakeId: 'intake-datasets-assignments',
    title: 'Assignments and datasets to applied case coverage',
    readiness: 'Blocked by missing file',
    coverageRecordIds: ['coverage-professional-pathways'],
    evidenceRecordIds: ['evidence-data-science-files', 'evidence-finance-files', 'evidence-banking-files'],
    graphNodeIds: ['credit-risk-data-quality-review', 'credit-scoring-abt', 'sme-financial-ratio-review', 'cash-flow-credit-approval'],
    graphLinkIds: ['l25', 'l26', 'l27', 'l28'],
    upgradeCandidates: ['business-case-library', 'output-atlas', 'knowledge-map'],
    validationQuestions: ['What output was required?', 'What dataset fields were used?', 'What decision was asked?'],
    updateSequence: ['capture assignment objective', 'capture dataset schema', 'extract required outputs', 'map to business cases', 'update pathways'],
    nextAction: 'Use assignments to connect theory to professional cases.'
  }
]

export const intakeCoverageSummary: IntakeCoverageSummary = {
  total: intakeCoverageMapItems.length,
  readyWhenReceived: intakeCoverageMapItems.filter((item) => item.readiness === 'Ready when received').length,
  blocked: intakeCoverageMapItems.filter((item) => item.readiness === 'Blocked by missing file').length,
  upgradeCandidates: intakeCoverageMapItems.reduce((sum, item) => sum + item.upgradeCandidates.length, 0)
}
