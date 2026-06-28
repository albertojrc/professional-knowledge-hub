import type { AcademicSourceFile, AcademicSourceSummary } from '../types/academicSource'

export const academicSourceFiles: AcademicSourceFile[] = [
  {
    id: 'dual-degree-folder-primary',
    title: "Dual Degree MIM + MBD'S",
    driveId: '130z2MUtJcRKTNpCmNJw6TEOUz2gEdUIE',
    url: 'drive-folder',
    format: 'Folder',
    area: 'Unknown',
    status: 'Needs classification',
    evidencePotential: 'High',
    targetReviewBatch: 'academic-review-workspace',
    targetHubObjects: ['material-inventory', 'course-evidence'],
    likelyEvidence: ['program folders', 'course files', 'assignments'],
    classificationNotes: ['Primary Dual Degree folder discovered.', 'Needs folder-level inventory.'],
    nextAction: 'Classify child files by academic area.'
  },
  {
    id: 'graph-algorithms-lecture',
    title: 'LECTURE #10.3_ GRAPH ALGORITHMS.pdf',
    driveId: '1D9F6ir5ltdLbVEue_iqMQiEBTaTVlBZO',
    url: 'drive-file',
    format: 'PDF',
    area: 'Data Science',
    status: 'Ready for review',
    evidencePotential: 'High',
    targetReviewBatch: 'academic-data-science-core',
    targetHubObjects: ['graph-algorithms', 'network-analysis', 'knowledge-map'],
    likelyEvidence: ['graph algorithms', 'nodes and edges', 'network logic'],
    classificationNotes: ['Title indicates graph analytics content.'],
    nextAction: 'Extract algorithms, outputs and applications.'
  },
  {
    id: 'retail-credit-scoring',
    title: 'RetailCreditScoring.pdf',
    driveId: '141t7H9JwjncXnXfmQOGu3MCvhwH7gq8r',
    url: 'drive-file',
    format: 'PDF',
    area: 'Banking & Credit Risk',
    status: 'Ready for review',
    evidencePotential: 'High',
    targetReviewBatch: 'academic-banking-risk',
    targetHubObjects: ['credit-risk-scoring', 'pd', 'expected-loss'],
    likelyEvidence: ['scoring workflow', 'risk segmentation', 'lending decision context'],
    classificationNotes: ['High priority for Banking and Credit Risk.'],
    nextAction: 'Review as banking risk source.'
  },
  {
    id: 'variance-ks-testing',
    title: 'Session_10_Variance_and_KS_Testing_with_Solutions.pdf',
    driveId: '1XZiEJfSfitCLJ6GoLzjdOphKttwn4K2x',
    url: 'drive-file',
    format: 'PDF',
    area: 'Data Science',
    status: 'Ready for review',
    evidencePotential: 'High',
    targetReviewBatch: 'academic-data-science-core',
    targetHubObjects: ['ks-statistic', 'variance-testing', 'model-validation'],
    likelyEvidence: ['variance testing', 'KS test', 'solutions'],
    classificationNotes: ['Strong candidate for validation content.'],
    nextAction: 'Extract definitions, formulas and interpretation rules.'
  },
  {
    id: 'lc-data-dictionary',
    title: 'LCDataDictionary.xlsx',
    driveId: '1UYwuipIwPRImT_sAkiQP-EuHrbEie7gn',
    url: 'drive-file',
    format: 'Spreadsheet',
    area: 'Banking & Credit Risk',
    status: 'Ready for review',
    evidencePotential: 'High',
    targetReviewBatch: 'academic-sql-abt',
    targetHubObjects: ['data-dictionary', 'analytical-base-table', 'feature-engineering'],
    likelyEvidence: ['field definitions', 'data schema', 'feature meaning'],
    classificationNotes: ['Supports schema, ABT and feature engineering review.'],
    nextAction: 'Inspect rows and map fields to ABT assets.'
  },
  {
    id: 'imb467-05',
    title: '05-IMB467.pdf',
    driveId: '1345_VR228ehchMzhqlo2twg7MSdeN-or',
    url: 'drive-file',
    format: 'PDF',
    area: 'Unknown',
    status: 'Needs classification',
    evidencePotential: 'Medium',
    targetReviewBatch: 'academic-review-workspace',
    targetHubObjects: ['course-evidence', 'material-inventory'],
    likelyEvidence: ['course lecture', 'module content'],
    classificationNotes: ['Filename alone is not enough to classify safely.'],
    nextAction: 'Classify after content review.'
  }
]

export const academicSourceSummary: AcademicSourceSummary = {
  total: academicSourceFiles.length,
  folders: academicSourceFiles.filter((file) => file.format === 'Folder').length,
  pdfs: academicSourceFiles.filter((file) => file.format === 'PDF').length,
  spreadsheets: academicSourceFiles.filter((file) => file.format === 'Spreadsheet').length,
  highPotential: academicSourceFiles.filter((file) => file.evidencePotential === 'High').length,
  readyForReview: academicSourceFiles.filter((file) => file.status === 'Ready for review').length,
  needsClassification: academicSourceFiles.filter((file) => file.status === 'Needs classification').length
}
