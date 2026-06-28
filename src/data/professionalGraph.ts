import type { ProfessionalGraphLink, ProfessionalGraphNode, ProfessionalGraphPathway } from '../types/professionalGraph'

export const professionalGraphNodes: ProfessionalGraphNode[] = [
  { id: 'dual-degree-folder', label: "Dual Degree MIM + MBD'S", type: 'Material', area: 'Source', summary: 'Main source folder expected to contain MIM and MBD class materials.' },
  { id: 'mbd-data-science', label: 'Data Science & Machine Learning', type: 'Module', area: 'Data Science', summary: 'Expected module for ML workflows, validation and modeling assignments.' },
  { id: 'mbd-data-engineering-bi', label: 'SQL, Big Data & BI', type: 'Module', area: 'SQL / Databases', summary: 'Expected module for SQL, databases, dashboards and analytical tables.' },
  { id: 'mim-finance-economics', label: 'Finance & Economics', type: 'Module', area: 'Finance', summary: 'Expected module for finance formulas, macro concepts and valuation logic.' },
  { id: 'banking-analytics', label: 'Banking & Risk Analytics', type: 'Module', area: 'Banking', summary: 'Cross-program module connecting banking, risk and analytics workflows.' },
  { id: 'area-data-science', label: 'Data Science Workflow', type: 'Area', area: 'Data Science', summary: 'Professional area that turns business questions into data, models, outputs and decisions.' },
  { id: 'area-banking', label: 'Banking & Risk Analytics', type: 'Area', area: 'Banking', summary: 'Professional area connecting credit, fraud, AML and portfolio decisions.' },
  { id: 'area-finance', label: 'Finance & Valuation', type: 'Area', area: 'Finance', summary: 'Professional area for ratios, cash flow, valuation and credit analysis.' },
  { id: 'evidence-data-quality-report', label: 'Evidence: Data Quality Report', type: 'Evidence', area: 'Data Science', summary: 'Candidate evidence queue item for validating data quality content.' },
  { id: 'evidence-analytical-base-table', label: 'Evidence: Analytical Base Table', type: 'Evidence', area: 'SQL / Databases', summary: 'Candidate evidence queue item for validating ABT content.' },
  { id: 'evidence-financial-ratios', label: 'Evidence: Financial Ratios', type: 'Evidence', area: 'Finance', summary: 'Candidate evidence queue item for validating ratio analysis content.' },
  { id: 'evidence-cash-flow-analysis', label: 'Evidence: Cash Flow Analysis', type: 'Evidence', area: 'Finance', summary: 'Candidate evidence queue item for validating cash flow content.' },
  { id: 'data-quality-report', label: 'Data Quality Report', type: 'Asset', area: 'Data Science', summary: 'Asset explaining completeness, duplicates, validity and readiness checks.' },
  { id: 'analytical-base-table', label: 'Analytical Base Table', type: 'Asset', area: 'SQL / Databases', summary: 'Asset explaining observation-level modeling tables and feature/target structure.' },
  { id: 'sql-joins', label: 'SQL Joins', type: 'Asset', area: 'SQL / Databases', summary: 'Asset explaining how tables are combined using keys and join logic.' },
  { id: 'financial-ratios', label: 'Financial Ratios', type: 'Asset', area: 'Finance', summary: 'Asset explaining ratio families for liquidity, leverage, profitability and coverage.' },
  { id: 'cash-flow-analysis', label: 'Cash Flow Analysis', type: 'Asset', area: 'Finance', summary: 'Asset explaining operating, investing, financing and free cash flow interpretation.' },
  { id: 'data-quality-report-output', label: 'Data Quality Report Output', type: 'Output', area: 'Data Science', summary: 'Output used to interpret missing values, duplicates, outliers and readiness.' },
  { id: 'sql-join-reconciliation-output', label: 'SQL Join Reconciliation Output', type: 'Output', area: 'SQL / Databases', summary: 'Output used to verify row counts, match rates and duplicate keys after joins.' },
  { id: 'financial-ratio-table-output', label: 'Financial Ratio Table', type: 'Output', area: 'Finance', summary: 'Output used to compare financial ratios over time or against peers.' },
  { id: 'cash-flow-bridge-output', label: 'Cash Flow Bridge', type: 'Output', area: 'Finance', summary: 'Output used to explain movement from opening cash to closing cash.' },
  { id: 'missing-rate', label: 'Missing Rate', type: 'Formula', area: 'Data Science', summary: 'Formula measuring incomplete values as a share of total rows.' },
  { id: 'join-match-rate', label: 'Join Match Rate', type: 'Formula', area: 'SQL / Databases', summary: 'Formula measuring successful join enrichment against a base population.' },
  { id: 'current-ratio', label: 'Current Ratio', type: 'Formula', area: 'Finance', summary: 'Formula measuring short-term liquidity.' },
  { id: 'free-cash-flow', label: 'Free Cash Flow', type: 'Formula', area: 'Finance', summary: 'Formula measuring operating cash after capital expenditures.' },
  { id: 'credit-risk-data-quality-review', label: 'Credit Risk Data Quality Review', type: 'Case', area: 'Banking', summary: 'Case that decides if a risk dataset is ready for modeling.' },
  { id: 'credit-scoring-abt', label: 'Credit Scoring ABT', type: 'Case', area: 'Banking', summary: 'Case that structures a credit scoring analytical base table.' },
  { id: 'sme-financial-ratio-review', label: 'SME Financial Ratio Review', type: 'Case', area: 'Finance', summary: 'Case that reviews SME financial health for credit or monitoring.' },
  { id: 'cash-flow-credit-approval', label: 'Cash Flow Credit Approval', type: 'Case', area: 'Finance', summary: 'Case that tests whether cash generation supports debt service.' }
]

export const professionalGraphLinks: ProfessionalGraphLink[] = [
  { id: 'l1', from: 'dual-degree-folder', to: 'mbd-data-science', type: 'contains', strength: 'Pending', explanation: 'Folder must be inspected to confirm exact materials.' },
  { id: 'l2', from: 'dual-degree-folder', to: 'mbd-data-engineering-bi', type: 'contains', strength: 'Pending', explanation: 'Folder must be inspected to confirm SQL and BI coverage.' },
  { id: 'l3', from: 'dual-degree-folder', to: 'mim-finance-economics', type: 'contains', strength: 'Pending', explanation: 'Folder must be inspected to confirm finance and economics coverage.' },
  { id: 'l4', from: 'mbd-data-science', to: 'area-data-science', type: 'maps to', strength: 'Medium', explanation: 'Expected module aligns with data science workflow topics.' },
  { id: 'l5', from: 'mbd-data-engineering-bi', to: 'area-data-science', type: 'maps to', strength: 'Medium', explanation: 'SQL and BI support the data science foundation.' },
  { id: 'l6', from: 'mim-finance-economics', to: 'area-finance', type: 'maps to', strength: 'Medium', explanation: 'Finance module supports valuation, ratios and cash flow topics.' },
  { id: 'l7', from: 'banking-analytics', to: 'area-banking', type: 'maps to', strength: 'Medium', explanation: 'Banking analytics supports risk and decision workflows.' },
  { id: 'l8', from: 'area-data-science', to: 'evidence-data-quality-report', type: 'validates', strength: 'Pending', explanation: 'Data quality evidence still needs source inspection.' },
  { id: 'l9', from: 'area-data-science', to: 'evidence-analytical-base-table', type: 'validates', strength: 'Pending', explanation: 'ABT evidence still needs source inspection.' },
  { id: 'l10', from: 'area-finance', to: 'evidence-financial-ratios', type: 'validates', strength: 'Pending', explanation: 'Financial ratio evidence still needs source inspection.' },
  { id: 'l11', from: 'area-finance', to: 'evidence-cash-flow-analysis', type: 'validates', strength: 'Pending', explanation: 'Cash flow evidence still needs source inspection.' },
  { id: 'l12', from: 'evidence-data-quality-report', to: 'data-quality-report', type: 'explains', strength: 'Medium', explanation: 'Evidence candidate generated the formal source-aware asset.' },
  { id: 'l13', from: 'evidence-analytical-base-table', to: 'analytical-base-table', type: 'explains', strength: 'Medium', explanation: 'Evidence candidate generated the formal source-aware asset.' },
  { id: 'l14', from: 'evidence-financial-ratios', to: 'financial-ratios', type: 'explains', strength: 'Medium', explanation: 'Evidence candidate generated the formal source-aware asset.' },
  { id: 'l15', from: 'evidence-cash-flow-analysis', to: 'cash-flow-analysis', type: 'explains', strength: 'Medium', explanation: 'Evidence candidate generated the formal source-aware asset.' },
  { id: 'l16', from: 'data-quality-report', to: 'data-quality-report-output', type: 'produces', strength: 'Strong', explanation: 'The asset is interpreted through its formal output.' },
  { id: 'l17', from: 'data-quality-report', to: 'missing-rate', type: 'uses', strength: 'Strong', explanation: 'Missing rate is a core data quality formula.' },
  { id: 'l18', from: 'sql-joins', to: 'sql-join-reconciliation-output', type: 'produces', strength: 'Strong', explanation: 'Join reconciliation is the control output for SQL joins.' },
  { id: 'l19', from: 'sql-joins', to: 'join-match-rate', type: 'uses', strength: 'Strong', explanation: 'Join match rate measures enrichment quality.' },
  { id: 'l20', from: 'analytical-base-table', to: 'sql-joins', type: 'depends on', strength: 'Strong', explanation: 'ABTs usually depend on correct joins and feature tables.' },
  { id: 'l21', from: 'financial-ratios', to: 'financial-ratio-table-output', type: 'produces', strength: 'Strong', explanation: 'Ratio tables are the output used to interpret financial ratio analysis.' },
  { id: 'l22', from: 'financial-ratios', to: 'current-ratio', type: 'uses', strength: 'Strong', explanation: 'Current ratio is a core liquidity ratio.' },
  { id: 'l23', from: 'cash-flow-analysis', to: 'cash-flow-bridge-output', type: 'produces', strength: 'Strong', explanation: 'Cash flow bridge explains cash movement.' },
  { id: 'l24', from: 'cash-flow-analysis', to: 'free-cash-flow', type: 'uses', strength: 'Strong', explanation: 'Free cash flow is a central cash flow metric.' },
  { id: 'l25', from: 'data-quality-report-output', to: 'credit-risk-data-quality-review', type: 'supports', strength: 'Strong', explanation: 'The output supports the case decision to approve or block modeling.' },
  { id: 'l26', from: 'analytical-base-table', to: 'credit-scoring-abt', type: 'supports', strength: 'Strong', explanation: 'The ABT asset supports the credit scoring table case.' },
  { id: 'l27', from: 'financial-ratio-table-output', to: 'sme-financial-ratio-review', type: 'supports', strength: 'Strong', explanation: 'The ratio table supports SME credit review.' },
  { id: 'l28', from: 'cash-flow-bridge-output', to: 'cash-flow-credit-approval', type: 'supports', strength: 'Strong', explanation: 'The bridge supports the debt capacity decision.' }
]

export const professionalGraphPathways: ProfessionalGraphPathway[] = [
  {
    id: 'path-credit-risk-data-readiness',
    title: 'Credit Risk Data Readiness Pathway',
    purpose: 'Trace how raw class materials become a credit risk data quality decision.',
    nodeIds: ['dual-degree-folder', 'mbd-data-science', 'area-data-science', 'evidence-data-quality-report', 'data-quality-report', 'data-quality-report-output', 'missing-rate', 'credit-risk-data-quality-review'],
    decision: 'Decide whether the credit risk dataset is ready for modeling.',
    evidenceStatus: 'Class evidence candidate until files are inspected.'
  },
  {
    id: 'path-credit-scoring-abt',
    title: 'Credit Scoring ABT Pathway',
    purpose: 'Trace how SQL and data modeling concepts create a valid scoring table.',
    nodeIds: ['dual-degree-folder', 'mbd-data-engineering-bi', 'area-data-science', 'evidence-analytical-base-table', 'sql-joins', 'analytical-base-table', 'sql-join-reconciliation-output', 'join-match-rate', 'credit-scoring-abt'],
    decision: 'Approve the table structure before model training.',
    evidenceStatus: 'Class evidence candidate until SQL and notebook files are inspected.'
  },
  {
    id: 'path-sme-finance-review',
    title: 'SME Finance Review Pathway',
    purpose: 'Trace how finance material becomes a credit review decision.',
    nodeIds: ['dual-degree-folder', 'mim-finance-economics', 'area-finance', 'evidence-financial-ratios', 'financial-ratios', 'financial-ratio-table-output', 'current-ratio', 'sme-financial-ratio-review'],
    decision: 'Support approve, reject, reprice or monitor decision for an SME borrower.',
    evidenceStatus: 'Class evidence candidate until finance materials are inspected.'
  },
  {
    id: 'path-cash-flow-approval',
    title: 'Cash Flow Credit Approval Pathway',
    purpose: 'Trace how cash flow concepts become a debt service decision.',
    nodeIds: ['dual-degree-folder', 'mim-finance-economics', 'area-finance', 'evidence-cash-flow-analysis', 'cash-flow-analysis', 'cash-flow-bridge-output', 'free-cash-flow', 'cash-flow-credit-approval'],
    decision: 'Decide whether the borrower can service debt under normal and stressed conditions.',
    evidenceStatus: 'Class evidence candidate until cash flow and valuation materials are inspected.'
  }
]

export function getGraphNode(id: string) {
  return professionalGraphNodes.find((node) => node.id === id)
}
