import type { BusinessCase } from '../types/knowledge'

export const sprint26BusinessCases: BusinessCase[] = [
  {
    id: 'credit-risk-data-quality-review',
    title: 'Credit Risk Data Quality Review',
    area: 'Banking / Risk Analytics',
    businessQuestion: 'Can the credit risk dataset be trusted before building or validating a scoring model?',
    dataRequired: ['Customer master data', 'Loan/application data', 'Default labels', 'Payment history', 'Credit bureau fields', 'Observation dates'],
    workflow: ['Define decision population', 'Run Data Quality Report', 'Check missing rates', 'Check duplicate customer/application keys', 'Validate target labels', 'Document exclusions and fixes', 'Approve or block modeling'],
    tools: ['Data Quality Report', 'Missing Rate', 'SQL Join Reconciliation Output', 'EDA', 'Analytical Base Table'],
    outputs: ['Data Quality Report Output', 'Missing value table', 'Duplicate report', 'Target label quality note', 'Model readiness decision'],
    decision: 'Decide whether the credit risk dataset is ready for modeling, needs remediation or should be rejected until source issues are fixed.',
    governance: 'Evidence status: Class evidence candidate. Validate against data science, SQL and banking materials before marking this case as source-backed.',
    relatedModules: ['data-quality-report', 'missing-rate', 'analytical-base-table', 'credit-risk-scoring', 'pd']
  },
  {
    id: 'credit-scoring-abt',
    title: 'Credit Scoring Analytical Base Table',
    area: 'Banking / Data Science',
    businessQuestion: 'How should a credit scoring ABT be structured so features, target and time windows are valid?',
    dataRequired: ['Applicant data', 'Account data', 'Transactions or balances', 'Product data', 'Default outcome', 'Observation date'],
    workflow: ['Define ABT grain', 'Set observation date', 'Join source tables', 'Create historical features', 'Attach default label', 'Run join reconciliation', 'Check leakage', 'Document feature dictionary'],
    tools: ['Analytical Base Table', 'SQL Joins', 'Join Match Rate', 'Data Leakage', 'Feature Engineering'],
    outputs: ['ABT Documentation Template', 'SQL Join Reconciliation Output', 'Feature dictionary', 'Target definition note'],
    decision: 'Approve the modeling table structure and feature logic before model training starts.',
    governance: 'Evidence status: Class evidence candidate. Validate against SQL, data science and modeling assignments before marking this case as source-backed.',
    relatedModules: ['analytical-base-table', 'sql-joins', 'join-match-rate', 'data-leakage', 'feature-engineering']
  },
  {
    id: 'sql-customer-360-case',
    title: 'SQL Customer 360 Case',
    area: 'SQL / Analytics',
    businessQuestion: 'Can customer, product and transaction sources be joined into one reliable analytical view?',
    dataRequired: ['Customer table', 'Account table', 'Transaction table', 'Product table', 'Relationship keys', 'Reference data'],
    workflow: ['Identify primary keys', 'Map table relationships', 'Choose join strategy', 'Reconcile row counts', 'Check unmatched records', 'Create customer-level summary', 'Document known limitations'],
    tools: ['SQL Joins', 'Join Match Rate', 'Data Quality Report', 'Analytical Base Table'],
    outputs: ['SQL Join Reconciliation Output', 'Customer 360 table', 'Unmatched records report', 'Join quality note'],
    decision: 'Decide whether the customer 360 table can be used for dashboards, segmentation or modeling.',
    governance: 'Evidence status: Class evidence candidate. Validate against SQL/database class files before marking source-backed.',
    relatedModules: ['sql-joins', 'join-match-rate', 'data-quality-report', 'analytical-base-table']
  },
  {
    id: 'sme-financial-ratio-review',
    title: 'SME Financial Ratio Review',
    area: 'Finance / Banking',
    businessQuestion: 'Is the SME financially healthy enough to support credit approval or continued monitoring?',
    dataRequired: ['Balance sheet', 'Income statement', 'Debt schedule', 'Peer or industry benchmarks', 'Historical statements'],
    workflow: ['Calculate liquidity ratios', 'Calculate leverage ratios', 'Calculate profitability ratios', 'Review coverage ratios', 'Compare historical trends', 'Benchmark peers', 'Summarize credit implications'],
    tools: ['Financial Ratios', 'Current Ratio', 'Debt-to-equity', 'Financial Ratio Table', 'Business Model Canvas'],
    outputs: ['Financial Ratio Table', 'Ratio trend analysis', 'Peer benchmark note', 'Credit risk memo'],
    decision: 'Support approve, reject, reprice, request collateral or monitor more closely based on financial health.',
    governance: 'Evidence status: Class evidence candidate. Validate exact ratios and finance cases from class materials before marking source-backed.',
    relatedModules: ['financial-ratios', 'current-ratio', 'cash-flow-analysis', 'business-model-canvas']
  },
  {
    id: 'cash-flow-credit-approval',
    title: 'Cash Flow Credit Approval',
    area: 'Finance / Banking',
    businessQuestion: 'Can the borrower generate enough cash to service debt under normal and stressed conditions?',
    dataRequired: ['Cash flow statement', 'Income statement', 'Capex plan', 'Debt service schedule', 'Working capital data', 'Scenario assumptions'],
    workflow: ['Review operating cash flow', 'Adjust for working capital', 'Estimate free cash flow', 'Analyze capex needs', 'Compare against debt service', 'Stress cash flow assumptions', 'Make credit recommendation'],
    tools: ['Cash Flow Analysis', 'Free Cash Flow', 'Cash Flow Bridge', 'Financial Ratios', 'NPV'],
    outputs: ['Cash Flow Bridge', 'Free cash flow table', 'Debt service capacity note', 'Stress scenario memo'],
    decision: 'Decide whether the borrower has sufficient payment capacity and what terms, covenants or collateral are needed.',
    governance: 'Evidence status: Class evidence candidate. Validate against finance, valuation and credit materials before marking source-backed.',
    relatedModules: ['cash-flow-analysis', 'free-cash-flow', 'financial-ratios', 'npv', 'wacc']
  }
]
