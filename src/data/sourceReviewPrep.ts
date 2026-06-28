import type { SourceReviewItem, SourceReviewSummary, SourceReviewTemplateStep } from '../types/sourceReview'

export const sourceReviewItems: SourceReviewItem[] = [
  {
    id: 'review-degree-references-index',
    title: 'degree_references / index.html',
    sourceType: 'HTML',
    sourceLocation: 'degree_references',
    configuredLocation: 'https://drive.google.com/file/d/1RAsgfGrbhFizl2xotOcEXQXfY3Z42hpg/view?usp=drivesdk',
    priority: 'Critical',
    status: 'Not reviewed',
    expectedPrograms: ['Cross-Program'],
    expectedModules: ['source-index', 'knowledge-hub-reference'],
    targetAreas: ['Source QA', 'Knowledge Architecture'],
    targetAssets: ['data-quality-report', 'analytical-base-table', 'financial-ratios', 'cash-flow-analysis'],
    targetOutputs: ['data-quality-report-output', 'financial-ratio-table-output'],
    targetCases: ['credit-risk-data-quality-review', 'sme-financial-ratio-review'],
    reviewQuestions: ['Does this file list course materials?', 'Does it define folder structure?', 'Does it already map topics to areas?', 'Can it become the source index for the Hub?'],
    metadataToCapture: ['Title', 'File role', 'Listed folders', 'Listed materials', 'Course/module labels', 'Last update clues'],
    evidenceToNote: ['Any topic names', 'Any program names', 'Any course categories', 'Any links to documents'],
    nextAction: 'Review the HTML index and extract file-level metadata before claiming source coverage.'
  },
  {
    id: 'review-degree-references-readme',
    title: 'degree_references / README.md',
    sourceType: 'Markdown',
    sourceLocation: 'degree_references',
    configuredLocation: 'https://drive.google.com/file/d/1Ei69P8E7tp9DT2elu5THBj25d25m9tJC/view?usp=drivesdk',
    priority: 'Critical',
    status: 'Not reviewed',
    expectedPrograms: ['Cross-Program'],
    expectedModules: ['source-index', 'knowledge-hub-reference'],
    targetAreas: ['Source QA', 'Knowledge Architecture'],
    targetAssets: ['data-quality-report', 'sql-joins', 'analytical-base-table'],
    targetOutputs: ['sql-join-reconciliation-output', 'abt-documentation-template-output'],
    targetCases: ['sql-customer-360-case', 'credit-scoring-abt'],
    reviewQuestions: ['Does the README describe how materials are organized?', 'Does it contain instructions or topic inventory?', 'Does it mention MIM or MBD areas?', 'Does it support any existing graph links?'],
    metadataToCapture: ['Purpose', 'Folder descriptions', 'Course labels', 'Topic lists', 'Known limitations'],
    evidenceToNote: ['Mentioned courses', 'Mentioned documents', 'Topic categories', 'Source organization rules'],
    nextAction: 'Review the README and convert source organization clues into material inventory evidence.'
  },
  {
    id: 'review-dual-degree-folder',
    title: "Dual Degree MIM + MBD'S",
    sourceType: 'Folder',
    sourceLocation: 'Google Drive folder',
    configuredLocation: 'https://drive.google.com/drive/folders/130z2MUtJcRKTNpCmNJw6TEOUz2gEdUIE',
    priority: 'Critical',
    status: 'Not reviewed',
    expectedPrograms: ['Master in Management', 'Master in Big Data / Data Science'],
    expectedModules: ['mim-strategy-management', 'mim-finance-economics', 'mbd-data-science', 'mbd-data-engineering-bi', 'banking-analytics'],
    targetAreas: ['Data Science', 'SQL / Databases', 'Banking', 'Finance', 'Economics', 'Strategy', 'Marketing', 'Operations'],
    targetAssets: ['data-quality-report', 'analytical-base-table', 'sql-joins', 'financial-ratios', 'cash-flow-analysis', 'credit-risk-scoring'],
    targetOutputs: ['data-quality-report-output', 'sql-join-reconciliation-output', 'financial-ratio-table-output', 'cash-flow-bridge-output'],
    targetCases: ['credit-risk-data-quality-review', 'credit-scoring-abt', 'sme-financial-ratio-review', 'cash-flow-credit-approval'],
    reviewQuestions: ['Which files belong to MIM?', 'Which files belong to MBD?', 'Which files are slides, PDFs, notebooks or assignments?', 'Which topics are explicitly covered?', 'Which assets can be upgraded from candidate to source-backed?'],
    metadataToCapture: ['Folder tree', 'File names', 'File types', 'Course/module labels', 'Program labels', 'Priority for extraction'],
    evidenceToNote: ['Topic headings', 'Formula references', 'Model references', 'Case names', 'Assignment outputs', 'Notebook workflows'],
    nextAction: 'Review folder structure first, then prioritize files by course area and evidence value.'
  },
  {
    id: 'review-banking-risk-materials',
    title: 'Banking and Risk Analytics Materials',
    sourceType: 'Unknown',
    sourceLocation: 'Derived from Dual Degree folder',
    configuredLocation: 'Pending file-level identification',
    priority: 'High',
    status: 'Not reviewed',
    expectedPrograms: ['Cross-Program', 'Master in Big Data / Data Science'],
    expectedModules: ['banking-analytics', 'mbd-data-science'],
    targetAreas: ['Banking', 'Data Science'],
    targetAssets: ['credit-risk-scoring', 'pd', 'lgd', 'ead', 'expected-loss', 'calibration-plot'],
    targetOutputs: ['classification-report', 'calibration-plot', 'financial-ratio-table-output'],
    targetCases: ['credit-risk-data-quality-review', 'credit-scoring-abt'],
    reviewQuestions: ['Are credit risk, fraud, AML or banking cases present?', 'Are PD, LGD, EAD or expected loss formulas covered?', 'Are model validation outputs used?'],
    metadataToCapture: ['File names', 'Banking topic coverage', 'Risk formulas', 'Case names', 'Model outputs'],
    evidenceToNote: ['Credit scoring examples', 'Risk metric formulas', 'Governance notes', 'Validation graphs'],
    nextAction: 'Identify banking/risk files inside the folder and map them to existing banking assets.'
  },
  {
    id: 'review-finance-economics-materials',
    title: 'Finance and Economics Materials',
    sourceType: 'Unknown',
    sourceLocation: 'Derived from Dual Degree folder',
    configuredLocation: 'Pending file-level identification',
    priority: 'High',
    status: 'Not reviewed',
    expectedPrograms: ['Master in Management'],
    expectedModules: ['mim-finance-economics'],
    targetAreas: ['Finance', 'Economics'],
    targetAssets: ['financial-ratios', 'cash-flow-analysis', 'wacc', 'capm', 'npv'],
    targetOutputs: ['financial-ratio-table-output', 'cash-flow-bridge-output'],
    targetCases: ['sme-financial-ratio-review', 'cash-flow-credit-approval'],
    reviewQuestions: ['Which finance formulas are explicitly covered?', 'Are cash flow and valuation cases included?', 'Are macroeconomic concepts connected to business decisions?'],
    metadataToCapture: ['Finance file names', 'Economics file names', 'Formula lists', 'Case names', 'Exercise outputs'],
    evidenceToNote: ['Ratio formulas', 'Cash flow examples', 'WACC/CAPM/NPV usage', 'Macro scenario content'],
    nextAction: 'Identify finance/economics files and extract formulas, tables and case logic.'
  }
]

export const sourceReviewTemplateSteps: SourceReviewTemplateStep[] = [
  {
    id: 'step-file-metadata',
    title: 'Capture file metadata',
    purpose: 'Understand what the material is before extracting knowledge.',
    checklist: ['Record file/folder name', 'Identify file type', 'Identify program', 'Identify course/module', 'Record visible topic headings'],
    output: 'File metadata note'
  },
  {
    id: 'step-topic-extraction',
    title: 'Extract topics and evidence',
    purpose: 'Find explicit class coverage that can support Hub content.',
    checklist: ['Extract concepts', 'Extract formulas', 'Extract models', 'Extract outputs', 'Extract cases/examples'],
    output: 'Source evidence notes'
  },
  {
    id: 'step-map-to-hub',
    title: 'Map to Hub objects',
    purpose: 'Connect source evidence to assets, outputs, formulas and cases.',
    checklist: ['Map to existing assets', 'Map to outputs', 'Map to formulas', 'Map to business cases', 'Create recommended gaps if missing'],
    output: 'Source-to-Hub mapping'
  },
  {
    id: 'step-upgrade-status',
    title: 'Upgrade evidence status',
    purpose: 'Move records from candidate/pending to source-backed only when evidence exists.',
    checklist: ['Confirm source quote or section', 'Update coverage status', 'Update graph link strength', 'Document remaining gaps'],
    output: 'Coverage update decision'
  }
]

export const sourceReviewSummary: SourceReviewSummary = {
  totalItems: sourceReviewItems.length,
  criticalItems: sourceReviewItems.filter((item) => item.priority === 'Critical').length,
  highPriorityItems: sourceReviewItems.filter((item) => item.priority === 'High').length,
  notReviewed: sourceReviewItems.filter((item) => item.status === 'Not reviewed').length,
  mappedTargets: sourceReviewItems.reduce((sum, item) => sum + item.targetAssets.length + item.targetOutputs.length + item.targetCases.length, 0)
}
