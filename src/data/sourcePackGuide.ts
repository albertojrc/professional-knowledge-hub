import type { SourcePackItem, SourcePackSummary } from '../types/sourcePack'

export const sourcePackItems: SourcePackItem[] = [
  {
    id: 'pack-data-science-core',
    title: 'Pack 1 · Data Science Core',
    priority: 'P0',
    status: 'Not uploaded',
    recommendedFiles: ['Data Science lecture slides', 'EDA notes', 'model validation slides', 'class notebooks'],
    acceptedFormats: ['PDF', 'PPTX', 'IPYNB', 'HTML export'],
    evidenceChecklist: ['topic headings', 'workflow examples', 'output screenshots', 'model evaluation examples'],
    unlocks: ['data-quality-report', 'eda', 'feature-engineering', 'train-test-split', 'cross-validation', 'course-evidence'],
    uploadOrder: ['slides first', 'notebooks second', 'assignments third'],
    reviewOutcome: 'Can validate core data science assets and output interpretation records.'
  },
  {
    id: 'pack-sql-abt',
    title: 'Pack 2 · SQL and Analytical Base Tables',
    priority: 'P0',
    status: 'Not uploaded',
    recommendedFiles: ['SQL exercises', 'database notes', 'query notebooks', 'table relationship diagrams'],
    acceptedFormats: ['SQL', 'IPYNB', 'PDF', 'CSV plus instructions'],
    evidenceChecklist: ['join examples', 'row counts', 'table grain', 'feature table logic'],
    unlocks: ['sql-joins', 'analytical-base-table', 'join-match-rate', 'sql-join-reconciliation-output', 'credit-scoring-abt'],
    uploadOrder: ['exercise prompt', 'query file', 'output sample'],
    reviewOutcome: 'Can validate ABT, SQL joins and reconciliation outputs.'
  },
  {
    id: 'pack-finance-core',
    title: 'Pack 3 · Finance and Valuation',
    priority: 'P0',
    status: 'Not uploaded',
    recommendedFiles: ['finance slides', 'valuation notes', 'Excel models', 'case handouts'],
    acceptedFormats: ['PDF', 'PPTX', 'XLSX', 'DOCX'],
    evidenceChecklist: ['formula list', 'worked examples', 'interpretation notes', 'business decision context'],
    unlocks: ['financial-ratios', 'cash-flow-analysis', 'wacc', 'capm', 'npv', 'financial-ratio-table-output', 'cash-flow-bridge-output'],
    uploadOrder: ['slides first', 'Excel model second', 'case prompt third'],
    reviewOutcome: 'Can validate finance formulas, output tables and corporate finance cases.'
  },
  {
    id: 'pack-banking-risk',
    title: 'Pack 4 · Banking and Risk Analytics',
    priority: 'P1',
    status: 'Not uploaded',
    recommendedFiles: ['credit risk cases', 'risk analytics slides', 'model validation notes', 'banking assignments'],
    acceptedFormats: ['PDF', 'PPTX', 'IPYNB', 'XLSX'],
    evidenceChecklist: ['PD/LGD/EAD definitions', 'expected loss formula', 'credit scoring workflow', 'decision examples'],
    unlocks: ['credit-risk-scoring', 'pd', 'lgd', 'ead', 'expected-loss', 'credit-risk-data-quality-review'],
    uploadOrder: ['case prompt', 'slides', 'model output'],
    reviewOutcome: 'Can validate banking assets and credit risk business cases.'
  },
  {
    id: 'pack-management-strategy',
    title: 'Pack 5 · Management and Strategy',
    priority: 'P2',
    status: 'Not uploaded',
    recommendedFiles: ['strategy slides', 'framework notes', 'management cases', 'project briefs'],
    acceptedFormats: ['PDF', 'PPTX', 'DOCX'],
    evidenceChecklist: ['framework definitions', 'case application', 'decision context', 'business implications'],
    unlocks: ['swot', 'pestel', 'business-model-canvas', 'porter-five-forces'],
    uploadOrder: ['slides', 'case brief', 'project notes'],
    reviewOutcome: 'Can validate management frameworks and strategy cases.'
  },
  {
    id: 'pack-assignments-datasets',
    title: 'Pack 6 · Assignments and Datasets',
    priority: 'P1',
    status: 'Not uploaded',
    recommendedFiles: ['assignment prompts', 'datasets', 'submission notebooks', 'rubrics'],
    acceptedFormats: ['PDF', 'CSV', 'XLSX', 'IPYNB', 'DOCX'],
    evidenceChecklist: ['assignment objective', 'dataset fields', 'expected outputs', 'grading criteria'],
    unlocks: ['business-case-library', 'output-atlas', 'knowledge-map', 'learning-session'],
    uploadOrder: ['prompt first', 'dataset second', 'solution or notebook third'],
    reviewOutcome: 'Can connect theory to practical cases, outputs and projects.'
  }
]

export const sourcePackSummary: SourcePackSummary = {
  total: sourcePackItems.length,
  p0: sourcePackItems.filter((item) => item.priority === 'P0').length,
  p1: sourcePackItems.filter((item) => item.priority === 'P1').length,
  notUploaded: sourcePackItems.filter((item) => item.status === 'Not uploaded').length,
  unlockCount: sourcePackItems.reduce((sum, item) => sum + item.unlocks.length, 0)
}
