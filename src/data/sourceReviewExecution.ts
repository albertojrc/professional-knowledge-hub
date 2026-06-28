import type { SourceExecutionRecord, SourceExecutionSummary } from '../types/sourceExecution'

export const sourceExecutionRecords: SourceExecutionRecord[] = [
  {
    id: 'execution-index-html',
    title: 'First review: index.html',
    reviewedSource: 'degree_references / index.html',
    status: 'Reviewed',
    decision: 'No upgrade',
    evidenceFound: ['HTML shell found', 'App root div found', 'main.tsx entrypoint found', 'Page title references IE University MIM + MBD reference and banking edition'],
    evidenceLimits: ['No academic topic list found', 'No formulas found', 'No models found', 'No course modules found', 'No business cases found'],
    affectedHubObjects: ['Source Review Prep', 'Material Inventory', 'Source Coverage QA'],
    coverageUpdate: 'Can support app/source-shell metadata only. It cannot upgrade any academic asset to source-backed.',
    nextAction: 'Keep source review status as reviewed for metadata, but keep academic coverage as pending.'
  },
  {
    id: 'execution-project-brief',
    title: 'First review: project brief requirements',
    reviewedSource: 'Project prompt / requirements text',
    status: 'Reviewed',
    decision: 'Keep candidate',
    evidenceFound: ['Mission is to create an interactive professional Knowledge Hub', 'Required areas include Data Science, Management, Banking, Finance, Economics and Analytics', 'Rules require no invented information and recommended complements when topics are not in documents', 'Required platform includes dashboard, filters, map, formulas, models, cases and study paths', 'Required workflow includes inventory, classification, map, architecture, content, build and quality review'],
    evidenceLimits: ['This is project instruction evidence, not course-content evidence', 'It does not prove that specific finance, banking or data science topics were taught in class'],
    affectedHubObjects: ['Dashboard', 'Knowledge Map', 'Study Paths', 'Quality Review', 'Source Coverage QA'],
    coverageUpdate: 'Can validate architecture and governance rules. It cannot upgrade class-topic assets to source-backed.',
    nextAction: 'Use this as governance evidence while inspecting actual class files for academic evidence.'
  },
  {
    id: 'execution-readme-md',
    title: 'First review: README.md',
    reviewedSource: 'degree_references / README.md',
    status: 'Blocked',
    decision: 'Keep pending',
    evidenceFound: ['README was listed in project context as configured material'],
    evidenceLimits: ['Readable content was not found in the first file_search pass', 'No metadata or topic evidence can be extracted yet'],
    affectedHubObjects: ['Source Review Prep', 'Source Coverage QA'],
    coverageUpdate: 'Keep README review pending until content can be inspected directly.',
    nextAction: 'Retry source lookup or use the Drive connector if file_search cannot surface readable README content.'
  },
  {
    id: 'execution-course-content-status',
    title: 'First review: course-content evidence status',
    reviewedSource: 'Available configured sources in first pass',
    status: 'No course evidence',
    decision: 'No upgrade',
    evidenceFound: ['Project architecture evidence exists', 'App-shell metadata exists'],
    evidenceLimits: ['No slide deck, PDF, notebook, spreadsheet or assignment content was reviewed in this pass', 'No source-backed upgrade is allowed for Data Quality Report, ABT, SQL Joins, Financial Ratios or Cash Flow Analysis yet'],
    affectedHubObjects: ['data-quality-report', 'analytical-base-table', 'sql-joins', 'financial-ratios', 'cash-flow-analysis'],
    coverageUpdate: 'All Sprint 2.4 source-aware assets remain class evidence candidates, not source-backed assets.',
    nextAction: 'Inspect actual class PDFs, notebooks and slides from the Dual Degree folder.'
  }
]

export const sourceExecutionSummary: SourceExecutionSummary = {
  total: sourceExecutionRecords.length,
  reviewed: sourceExecutionRecords.filter((item) => item.status === 'Reviewed').length,
  blocked: sourceExecutionRecords.filter((item) => item.status === 'Blocked').length,
  noCourseEvidence: sourceExecutionRecords.filter((item) => item.status === 'No course evidence').length,
  upgradesAllowed: sourceExecutionRecords.filter((item) => item.decision === 'Upgrade allowed').length
}
