import type { SourceIntakeItem, SourceIntakeSummary } from '../types/sourceIntake'

export const sourceIntakeItems: SourceIntakeItem[] = [
  {
    id: 'intake-data-science-slides',
    title: 'Data Science / Analytics slides or PDFs',
    fileType: 'Slides',
    priority: 'Critical',
    status: 'Needed',
    program: 'Master in Big Data / Data Science',
    targetArea: 'Data Science',
    whyNeeded: 'Required to verify whether Data Quality Report, EDA, feature engineering and model validation were covered in class.',
    unlocks: ['data-quality-report', 'eda', 'feature-engineering', 'train-test-split', 'cross-validation', 'course-evidence'],
    acceptableFormats: ['PDF', 'PPTX', 'Google Slides export', 'lecture notes'],
    minimumEvidenceNeeded: ['topic headings', 'method definitions', 'workflow examples', 'model output examples'],
    intakeChecklist: ['upload or expose readable file', 'identify course name', 'identify module/week', 'extract topic list', 'map to assets'],
    nextAction: 'Provide the main Data Science lecture files or make them readable through the connected source.'
  },
  {
    id: 'intake-sql-notebooks',
    title: 'SQL / Database notebooks or exercises',
    fileType: 'Notebook',
    priority: 'Critical',
    status: 'Needed',
    program: 'Master in Big Data / Data Science',
    targetArea: 'SQL / Databases',
    whyNeeded: 'Required to validate SQL Joins, ABT logic, row reconciliation and source-to-model table creation.',
    unlocks: ['sql-joins', 'analytical-base-table', 'join-match-rate', 'sql-join-reconciliation-output', 'credit-scoring-abt'],
    acceptableFormats: ['ipynb', 'SQL file', 'PDF exercise', 'CSV plus instructions'],
    minimumEvidenceNeeded: ['join examples', 'table relationship examples', 'query outputs', 'exercise instructions'],
    intakeChecklist: ['capture file metadata', 'extract SQL concepts', 'record join examples', 'map to ABT asset'],
    nextAction: 'Provide SQL files, notebooks or database exercises from the program.'
  },
  {
    id: 'intake-finance-materials',
    title: 'Finance / Valuation materials',
    fileType: 'PDF',
    priority: 'Critical',
    status: 'Needed',
    program: 'Master in Management',
    targetArea: 'Finance',
    whyNeeded: 'Required to verify financial ratios, cash flow, WACC, CAPM, NPV and valuation logic.',
    unlocks: ['financial-ratios', 'cash-flow-analysis', 'wacc', 'capm', 'npv', 'financial-ratio-table-output', 'cash-flow-bridge-output'],
    acceptableFormats: ['PDF', 'PPTX', 'Excel model', 'case handout'],
    minimumEvidenceNeeded: ['formula list', 'worked example', 'interpretation notes', 'case or exercise'],
    intakeChecklist: ['identify finance course file', 'extract formulas', 'capture examples', 'map to formula library'],
    nextAction: 'Provide finance and valuation files from the MIM program.'
  },
  {
    id: 'intake-banking-risk-cases',
    title: 'Banking / Credit Risk cases',
    fileType: 'Case',
    priority: 'High',
    status: 'Needed',
    program: 'Cross-program / Banking',
    targetArea: 'Banking',
    whyNeeded: 'Required to validate credit risk scoring, PD/LGD/EAD, expected loss and business cases.',
    unlocks: ['credit-risk-scoring', 'pd', 'lgd', 'ead', 'expected-loss', 'credit-risk-data-quality-review'],
    acceptableFormats: ['PDF case', 'slides', 'assignment', 'model notebook'],
    minimumEvidenceNeeded: ['risk metric definitions', 'credit scoring workflow', 'case decision', 'model output interpretation'],
    intakeChecklist: ['extract risk formulas', 'capture case workflow', 'map decision outputs', 'update source coverage'],
    nextAction: 'Provide banking, credit risk or risk analytics cases and exercises.'
  },
  {
    id: 'intake-management-strategy',
    title: 'Management / Strategy materials',
    fileType: 'Slides',
    priority: 'Medium',
    status: 'Needed',
    program: 'Master in Management',
    targetArea: 'Management',
    whyNeeded: 'Required to validate strategy frameworks, business model canvas, SWOT, PESTEL and management cases.',
    unlocks: ['business-model-canvas', 'swot', 'pestel', 'porter-five-forces', 'management-strategy-toolkit'],
    acceptableFormats: ['PDF', 'PPTX', 'case brief', 'reading notes'],
    minimumEvidenceNeeded: ['framework explanation', 'case application', 'decision context'],
    intakeChecklist: ['identify strategy file', 'extract frameworks', 'connect to cases', 'mark complements clearly'],
    nextAction: 'Provide MIM management and strategy files.'
  },
  {
    id: 'intake-datasets-assignments',
    title: 'Datasets and graded assignments',
    fileType: 'Dataset',
    priority: 'High',
    status: 'Needed',
    program: 'Cross-program',
    targetArea: 'Analytics / Applied Work',
    whyNeeded: 'Required to connect theory to actual outputs, notebooks, submissions and practical workflows.',
    unlocks: ['business-case-library', 'output-atlas', 'knowledge-map', 'learning-session'],
    acceptableFormats: ['CSV', 'XLSX', 'ipynb', 'assignment PDF', 'submission instructions'],
    minimumEvidenceNeeded: ['dataset description', 'assignment objective', 'expected outputs', 'rubric or instructions'],
    intakeChecklist: ['capture objective', 'capture dataset fields', 'extract required outputs', 'map to business case'],
    nextAction: 'Provide assignment prompts, datasets and notebooks where possible.'
  }
]

export const sourceIntakeSummary: SourceIntakeSummary = {
  total: sourceIntakeItems.length,
  critical: sourceIntakeItems.filter((item) => item.priority === 'Critical').length,
  high: sourceIntakeItems.filter((item) => item.priority === 'High').length,
  needed: sourceIntakeItems.filter((item) => item.status === 'Needed').length,
  received: sourceIntakeItems.filter((item) => item.status === 'Received').length,
  reviewed: sourceIntakeItems.filter((item) => item.status === 'Reviewed').length
}
