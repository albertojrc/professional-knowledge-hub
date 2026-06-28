import type { CourseEvidenceRecord, CourseEvidenceSummary } from '../types/courseEvidence'

export const courseEvidenceRecords: CourseEvidenceRecord[] = [
  {
    id: 'evidence-project-governance',
    sourceName: 'Project requirements text',
    evidenceArea: 'Governance / Architecture',
    status: 'Extracted',
    decision: 'Governance only',
    extractedSignals: ['Knowledge Hub objective', 'Required professional areas', 'No invented information rule', 'Quality review requirement', 'Interactive platform requirement'],
    missingSignals: ['No course formulas', 'No class models', 'No academic case content'],
    relatedObjects: ['quality-review', 'knowledge-map', 'source-coverage-qa', 'source-review-execution'],
    nextAction: 'Use as governance evidence only, not as academic topic evidence.'
  },
  {
    id: 'evidence-index-shell',
    sourceName: 'degree_references / index.html',
    evidenceArea: 'Platform Shell',
    status: 'Extracted',
    decision: 'Governance only',
    extractedSignals: ['Spanish HTML shell', 'React root node', 'main.tsx entrypoint', 'MIM plus MBD banking edition title'],
    missingSignals: ['No course topics', 'No formulas', 'No models', 'No cases', 'No module list'],
    relatedObjects: ['material-inventory', 'source-review-prep', 'source-review-execution'],
    nextAction: 'Keep as platform metadata evidence only.'
  },
  {
    id: 'evidence-data-science-files',
    sourceName: 'Data Science course files',
    evidenceArea: 'Data Science / Analytics',
    status: 'Course file missing',
    decision: 'Keep pending',
    extractedSignals: [],
    missingSignals: ['Slides or notebooks not found in current pass', 'No proof for Data Quality Report', 'No proof for ABT', 'No proof for SQL Joins'],
    relatedObjects: ['data-quality-report', 'analytical-base-table', 'sql-joins', 'data-quality-report-output'],
    nextAction: 'Inspect real course PDFs, notebooks or slides before upgrading these assets.'
  },
  {
    id: 'evidence-finance-files',
    sourceName: 'Finance and Economics course files',
    evidenceArea: 'Finance / Economics',
    status: 'Course file missing',
    decision: 'Keep pending',
    extractedSignals: [],
    missingSignals: ['Finance slides not found in current pass', 'No proof for Financial Ratios', 'No proof for Cash Flow Analysis', 'No proof for WACC or NPV coverage'],
    relatedObjects: ['financial-ratios', 'cash-flow-analysis', 'wacc', 'npv', 'financial-ratio-table-output'],
    nextAction: 'Inspect finance and economics files before marking formulas as source-backed.'
  },
  {
    id: 'evidence-banking-files',
    sourceName: 'Banking and risk course files',
    evidenceArea: 'Banking / Risk',
    status: 'Course file missing',
    decision: 'Keep pending',
    extractedSignals: [],
    missingSignals: ['Banking PDFs or cases not found in current pass', 'No proof for credit risk scoring', 'No proof for PD LGD EAD or expected loss'],
    relatedObjects: ['credit-risk-scoring', 'pd', 'lgd', 'ead', 'expected-loss', 'credit-risk-data-quality-review'],
    nextAction: 'Inspect actual banking and risk materials before source-backed upgrades.'
  }
]

export const courseEvidenceSummary: CourseEvidenceSummary = {
  total: courseEvidenceRecords.length,
  extracted: courseEvidenceRecords.filter((item) => item.status === 'Extracted').length,
  insufficient: courseEvidenceRecords.filter((item) => item.status === 'Insufficient').length,
  missingCourseFiles: courseEvidenceRecords.filter((item) => item.status === 'Course file missing').length,
  readyToUpgrade: courseEvidenceRecords.filter((item) => item.decision === 'Ready to upgrade').length
}
