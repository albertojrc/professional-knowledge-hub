import type { ModelReadyFeatureGroup, ModelReadyFeatureSummary } from '../types/modelReadyFeatureSet'

export const modelReadyFeatureGroups: ModelReadyFeatureGroup[] = [
  {
    id: 'feature-technical-controls',
    group: 'Technical controls and ABT keys',
    status: 'Governance control',
    risk: 'Low',
    purpose: 'Track the ABT grain, row uniqueness, source reference coverage and review status without leaking technical identifiers into the model.',
    candidateFields: ['abt_row_id', 'loan_id', 'field_source_ref', 'field_review_status'],
    requiredEvidence: ['pipeline generation rule', 'unique row check', 'field source reference rule'],
    transformations: ['generate stable row id', 'validate uniqueness', 'exclude technical keys from model matrix'],
    allowedUse: 'QA, traceability, reproducibility and audit documentation.',
    blockedUse: 'Do not train models using technical row ids, raw loan ids or source reference fields.',
    linkedReviewItems: ['review-row-id', 'review-loan-id', 'review-field-source-ref', 'review-review-status'],
    downstreamOutput: 'ABT audit trail and model feature exclusion list.',
    nextAction: 'Keep controls in the ABT metadata layer and exclude them from X_train.'
  },
  {
    id: 'feature-borrower-affordability',
    group: 'Borrower affordability features',
    status: 'Model-ready candidate',
    risk: 'Medium',
    purpose: 'Represent the borrower capacity signal available at application time.',
    candidateFields: ['annual_inc', 'dti', 'emp_length', 'home_ownership', 'verification_status'],
    requiredEvidence: ['LCDataDictionary field definitions', 'decision-time availability check', 'missingness profile'],
    transformations: ['winsorize extreme income values', 'bucket employment length', 'encode home ownership categories', 'flag missing verification status'],
    allowedUse: 'Candidate predictors for credit scoring after field evidence and timing review.',
    blockedUse: 'Do not use borrower attributes that are updated after origination or personally identifying fields in public outputs.',
    linkedReviewItems: ['review-borrower-features', 'review-borrower-id'],
    downstreamOutput: 'Borrower capacity feature block for the model training matrix.',
    nextAction: 'Confirm exact field names and missing-rate thresholds before promotion.'
  },
  {
    id: 'feature-credit-history',
    group: 'Credit history and bureau-style features',
    status: 'Model-ready candidate',
    risk: 'Medium',
    purpose: 'Capture historical repayment and credit usage behavior before the lending decision.',
    candidateFields: ['delinq_2yrs', 'earliest_cr_line', 'inq_last_6mths', 'open_acc', 'revol_util', 'total_acc'],
    requiredEvidence: ['field definitions', 'pre-decision timing confirmation', 'range and zero-inflation review'],
    transformations: ['derive credit_age_months', 'cap impossible negative values', 'parse utilization as numeric percent', 'create inquiry and delinquency flags'],
    allowedUse: 'Risk history predictors after timing and quality validation.',
    blockedUse: 'Do not use any bureau field refreshed after loan performance is observed.',
    linkedReviewItems: ['review-credit-history'],
    downstreamOutput: 'Credit behavior feature block for discriminatory power testing.',
    nextAction: 'Validate date parsing and range checks for every credit history field.'
  },
  {
    id: 'feature-loan-request',
    group: 'Loan request and product features',
    status: 'Hold for evidence',
    risk: 'High',
    purpose: 'Use only borrower-requested loan attributes known before approval, separating safe inputs from lender decisions.',
    candidateFields: ['loan_amnt', 'term', 'purpose', 'application_type'],
    requiredEvidence: ['input/output classification', 'field timing definition', 'business process note'],
    transformations: ['normalize loan amount', 'encode term', 'group low-frequency purposes', 'separate individual vs joint applications'],
    allowedUse: 'Loan request predictors only after input classification is approved.',
    blockedUse: 'Do not include fields that encode approval, pricing, grade assignment or final lender decision.',
    linkedReviewItems: ['review-loan-features'],
    downstreamOutput: 'Loan request feature block with safe-input flag.',
    nextAction: 'Classify each loan field as borrower input, lender output or blocked.'
  },
  {
    id: 'feature-pricing-grade',
    group: 'Pricing, grade and lender decision fields',
    status: 'Blocked from modeling',
    risk: 'High',
    purpose: 'Prevent model leakage from variables that may already summarize lender risk assessment or approval outcome.',
    candidateFields: ['int_rate', 'grade', 'sub_grade', 'installment'],
    requiredEvidence: ['pricing process rule', 'decision sequence evidence', 'owner approval if used only for benchmark analysis'],
    transformations: ['move to exclusion list', 'document block reason', 'optionally keep for post-model segmentation only'],
    allowedUse: 'Governance review, benchmark comparison or portfolio segmentation after the prediction is produced.',
    blockedUse: 'Do not train the main PD model with fields created by the lender decision process unless the owner approves a specific benchmark use case.',
    linkedReviewItems: ['review-loan-features', 'review-excluded-list'],
    downstreamOutput: 'Leakage exclusion register.',
    nextAction: 'Keep blocked by default until source timing proves a safe use case.'
  },
  {
    id: 'feature-performance-outcomes',
    group: 'Performance, payment and recovery fields',
    status: 'Blocked from modeling',
    risk: 'High',
    purpose: 'Separate target construction from predictor construction so the model does not learn future performance directly.',
    candidateFields: ['loan_status', 'total_pymnt', 'recoveries', 'collection_recovery_fee', 'last_pymnt_d', 'next_pymnt_d'],
    requiredEvidence: ['target mapping rule', 'performance window definition', 'excluded status list'],
    transformations: ['use raw status only to create target candidates', 'exclude payment fields from feature matrix', 'document post-origination timing'],
    allowedUse: 'Target definition, monitoring labels and post-model performance analysis.',
    blockedUse: 'Do not use outcome, payment, recovery or collection fields as predictors.',
    linkedReviewItems: ['review-target-raw', 'review-target-flag', 'review-excluded-list'],
    downstreamOutput: 'Target map and leakage-safe blocked field list.',
    nextAction: 'Finalize good/bad mapping and performance window before modeling.'
  },
  {
    id: 'feature-derived-stability',
    group: 'Derived stability and model-prep features',
    status: 'Hold for evidence',
    risk: 'Medium',
    purpose: 'Create interpretable derived variables from reviewed raw fields without introducing future information.',
    candidateFields: ['credit_age_months', 'income_to_loan_ratio', 'dti_band', 'revol_util_band', 'missingness_flags'],
    requiredEvidence: ['approved parent fields', 'transformation rule', 'train/test leakage check'],
    transformations: ['derive only from reviewed fields', 'fit bins on train only', 'store transformation version', 'document imputation logic'],
    allowedUse: 'Feature engineering once parent fields are reviewed and transformations are frozen.',
    blockedUse: 'Do not derive features from target, payment history or full-sample statistics.',
    linkedReviewItems: ['review-borrower-features', 'review-credit-history', 'review-cutoff-date'],
    downstreamOutput: 'Versioned feature engineering recipe.',
    nextAction: 'Promote derived variables only after parent fields and split design are approved.'
  }
]

export const modelReadyFeatureSummary: ModelReadyFeatureSummary = {
  totalGroups: modelReadyFeatureGroups.length,
  modelReadyCandidates: modelReadyFeatureGroups.filter((x) => x.status === 'Model-ready candidate').length,
  heldForEvidence: modelReadyFeatureGroups.filter((x) => x.status === 'Hold for evidence').length,
  blockedGroups: modelReadyFeatureGroups.filter((x) => x.status === 'Blocked from modeling').length,
  governanceControls: modelReadyFeatureGroups.filter((x) => x.status === 'Governance control').length,
  highRiskGroups: modelReadyFeatureGroups.filter((x) => x.risk === 'High').length
}
