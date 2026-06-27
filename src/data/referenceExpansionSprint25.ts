import type { FormulaItem, OutputAtlasItem } from '../types/knowledge'

export const sprint25Outputs: OutputAtlasItem[] = [
  {
    id: 'data-quality-report-output',
    title: 'Data Quality Report Output',
    category: 'Data Preparation',
    usedIn: ['Data Quality Report', 'EDA', 'Analytical Base Table'],
    whatItIs: 'A structured output showing missing values, duplicates, invalid values, outliers and readiness notes before analysis or modeling.',
    exampleOutput: 'Missing rate by field, duplicate count, invalid values, outlier flags and readiness notes.',
    howToRead: ['Check row counts', 'Review missing fields', 'Inspect duplicate keys', 'Review invalid values', 'Translate issues into risk for analysis'],
    goodResult: 'Low missingness on critical fields, controlled duplicates and documented exceptions.',
    badResult: 'High missingness, unexpected row growth, duplicated keys or invalid values in decision-critical fields.',
    redFlags: ['Missing target labels', 'Duplicated customer IDs', 'Unexpected nulls after joins', 'Invalid dates'],
    howToImprove: ['Fix joins', 'Document missingness handling', 'Create validation rules', 'Rebuild features after fixes'],
    businessImpact: 'Determines whether analysis and modeling can be trusted before business decisions are made.',
    relatedConcepts: ['data-quality-report', 'analytical-base-table', 'eda', 'data-leakage'],
    relatedCases: ['Credit Risk Scoring', 'Fraud Detection', 'Dashboard QA']
  },
  {
    id: 'sql-join-reconciliation-output',
    title: 'SQL Join Reconciliation Output',
    category: 'SQL / Databases',
    usedIn: ['SQL Joins', 'Analytical Base Table', 'Data Quality Report'],
    whatItIs: 'A control output that checks whether SQL joins preserved expected rows, keys and business totals.',
    exampleOutput: 'Before join: 100,000 customers. After join: 103,420 rows. Duplicate IDs: 3.4%. Match rate: 94.2%.',
    howToRead: ['Compare row counts before and after the join', 'Check unmatched records', 'Measure duplicate key creation', 'Validate business totals'],
    goodResult: 'Row counts and match rates behave as expected given the table relationship.',
    badResult: 'Unexpected row growth, large unmatched populations or duplicated primary keys.',
    redFlags: ['Many-to-many join without aggregation', 'Inner join removing valid records', 'Nulls after enrichment joins'],
    howToImprove: ['Aggregate child tables before joining', 'Use complete join keys', 'Validate relationship cardinality', 'Add reconciliation checks'],
    businessImpact: 'Prevents silent data errors that distort dashboards, models and financial analysis.',
    relatedConcepts: ['sql-joins', 'analytical-base-table', 'data-quality-report'],
    relatedCases: ['Customer 360', 'Credit Risk ABT', 'Marketing Campaign Analytics']
  },
  {
    id: 'financial-ratio-table-output',
    title: 'Financial Ratio Table',
    category: 'Finance',
    usedIn: ['Financial Ratios', 'Credit Analysis', 'Corporate Finance'],
    whatItIs: 'A table summarizing liquidity, leverage, profitability, efficiency and coverage ratios over time or against peers.',
    exampleOutput: 'Current Ratio: 1.4x; Debt/Equity: 2.1x; EBITDA Margin: 18%; Interest Coverage: 3.2x.',
    howToRead: ['Group ratios by family', 'Compare with prior years', 'Benchmark against peers', 'Identify drivers', 'Connect results to risk or strategy'],
    goodResult: 'Ratios are stable or improving and consistent with industry economics.',
    badResult: 'Weak liquidity, high leverage, falling margins or insufficient coverage.',
    redFlags: ['One strong ratio hiding weak cash flow', 'Industry mismatch', 'Accounting distortion', 'Deterioration across several ratio families'],
    howToImprove: ['Use peer context', 'Review cash flow', 'Normalize one-offs', 'Connect ratios to business model'],
    businessImpact: 'Supports credit review, investment analysis and management diagnosis.',
    relatedConcepts: ['financial-ratios', 'cash-flow-analysis', 'wacc', 'business-model-canvas'],
    relatedCases: ['SME Credit Review', 'Corporate Lending', 'Strategy Diagnosis']
  },
  {
    id: 'cash-flow-bridge-output',
    title: 'Cash Flow Bridge',
    category: 'Finance',
    usedIn: ['Cash Flow Analysis', 'Credit Analysis', 'Valuation'],
    whatItIs: 'A bridge explaining how cash changes from starting cash to ending cash through operating, investing and financing activities.',
    exampleOutput: 'Opening cash + operating cash flow - capex + financing flows = closing cash.',
    howToRead: ['Start with opening cash', 'Review operating cash flow', 'Separate investment flows', 'Inspect financing flows', 'Explain ending cash movement'],
    goodResult: 'Operating cash flow supports reinvestment, obligations and liquidity needs.',
    badResult: 'Cash depends heavily on financing, asset sales or working capital deterioration.',
    redFlags: ['Positive profit but weak operating cash flow', 'Recurring financing dependence', 'Working capital pressure'],
    howToImprove: ['Improve collections', 'Review capex discipline', 'Manage working capital', 'Stress payment capacity'],
    businessImpact: 'Explains whether a business can fund operations, growth and obligations sustainably.',
    relatedConcepts: ['cash-flow-analysis', 'financial-ratios', 'npv', 'wacc'],
    relatedCases: ['Corporate Credit Approval', 'DCF Valuation', 'Liquidity Review']
  }
]

export const sprint25Formulas: FormulaItem[] = [
  {
    id: 'missing-rate',
    title: 'Missing Rate',
    area: 'Data Science',
    formula: 'Missing Rate = Missing Values / Total Rows',
    variables: 'Missing Values: null or unavailable values. Total Rows: observations checked.',
    interpretation: 'Measures how incomplete a field is. High missingness on critical variables can weaken analysis and models.',
    professionalUse: 'Used in data quality reports before EDA, feature engineering, dashboards and modeling.',
    relatedItems: ['data-quality-report', 'eda', 'analytical-base-table']
  },
  {
    id: 'join-match-rate',
    title: 'Join Match Rate',
    area: 'SQL / Databases',
    formula: 'Join Match Rate = Matched Records / Main Table Records',
    variables: 'Matched Records: rows successfully enriched. Main Table Records: expected base population.',
    interpretation: 'Shows whether a join successfully enriched the expected population.',
    professionalUse: 'Used after SQL joins and ABT creation to confirm enrichment quality.',
    relatedItems: ['sql-joins', 'analytical-base-table', 'data-quality-report']
  },
  {
    id: 'current-ratio',
    title: 'Current Ratio',
    area: 'Finance',
    formula: 'Current Ratio = Current Assets / Current Liabilities',
    variables: 'Current Assets: short-term assets. Current Liabilities: short-term obligations.',
    interpretation: 'Measures short-term liquidity and ability to meet near-term obligations.',
    professionalUse: 'Used in credit analysis, company diagnosis and liquidity review.',
    relatedItems: ['financial-ratios', 'cash-flow-analysis']
  },
  {
    id: 'free-cash-flow',
    title: 'Free Cash Flow',
    area: 'Finance',
    formula: 'Free Cash Flow = Operating Cash Flow - Capital Expenditures',
    variables: 'Operating Cash Flow: cash generated by operations. Capital Expenditures: investment in long-term assets.',
    interpretation: 'Measures cash available after maintaining or expanding the asset base.',
    professionalUse: 'Used in valuation, credit review and liquidity analysis.',
    relatedItems: ['cash-flow-analysis', 'npv', 'wacc']
  }
]
