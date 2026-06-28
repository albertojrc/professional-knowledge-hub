import type { FinanceValuationStudyLesson, FinanceValuationStudySummary } from '../types/financeValuationStudy'

export const financeValuationLessons: FinanceValuationStudyLesson[] = [
  {
    id: 'financial-statement-foundations',
    title: 'Financial Statement Foundations',
    level: 'Foundation',
    evidenceStatus: 'Professional complement',
    sourceMaterials: ['Finance slides and statement analysis materials pending review'],
    studyObjective: 'Understand how the income statement, balance sheet and cash flow statement connect to business performance.',
    coreConcepts: ['income statement', 'balance sheet', 'cash flow statement', 'assets', 'liabilities', 'equity', 'profitability'],
    workflow: ['identify statement type', 'read revenue and costs', 'review assets and liabilities', 'connect profit to cash flow', 'summarize business condition'],
    formulas: ['gross-margin', 'net-margin', 'asset-turnover'],
    outputs: ['financial statement summary', 'common-size statement', 'performance note'],
    interpretation: ['profitability does not always mean cash generation', 'balance sheet structure reveals leverage and liquidity', 'statement links explain business quality'],
    businessDecisions: ['assess company performance', 'prepare credit review', 'support valuation assumptions', 'identify red flags'],
    practicePrompts: ['Explain why net income and cash flow can differ.', 'List three questions to ask when reviewing a balance sheet.'],
    connections: ['Finance & Valuation', 'Banking & Credit Risk Study', 'Professional Certifications']
  },
  {
    id: 'financial-ratio-analysis',
    title: 'Financial Ratio Analysis',
    level: 'Applied',
    evidenceStatus: 'Source candidate',
    sourceMaterials: ['Finance ratio materials pending review', 'SME financial ratio review case'],
    studyObjective: 'Use liquidity, leverage, profitability and efficiency ratios to assess financial health.',
    coreConcepts: ['liquidity', 'leverage', 'profitability', 'efficiency', 'benchmarking', 'trend analysis'],
    workflow: ['select ratio family', 'calculate ratios', 'compare over time', 'compare to peers', 'identify red flags', 'write conclusion'],
    formulas: ['current-ratio', 'quick-ratio', 'debt-to-equity', 'gross-margin', 'roe', 'roa'],
    outputs: ['financial ratio table', 'ratio trend chart', 'peer comparison note'],
    interpretation: ['ratios need context and comparison', 'liquidity ratios show short-term resilience', 'leverage ratios show financing risk', 'profitability ratios show business quality'],
    businessDecisions: ['approve credit request', 'request guarantees', 'prioritize deeper review', 'support investment thesis'],
    practicePrompts: ['Interpret a current ratio below 1.', 'Explain why a high ROE can be good or risky.'],
    connections: ['Formula Library', 'Business Case Library', 'Banking & Credit Risk Study']
  },
  {
    id: 'cash-flow-analysis',
    title: 'Cash Flow Analysis',
    level: 'Applied',
    evidenceStatus: 'Source candidate',
    sourceMaterials: ['Cash flow analysis materials pending review', 'cash-flow-credit-approval case'],
    studyObjective: 'Analyze operating, investing and financing cash flows to judge sustainability and decision quality.',
    coreConcepts: ['operating cash flow', 'capital expenditure', 'free cash flow', 'working capital', 'cash conversion', 'debt service'],
    workflow: ['start from operating cash flow', 'adjust for capex', 'review working capital', 'compare to debt service', 'assess sustainability', 'link to decision'],
    formulas: ['free-cash-flow', 'operating-cash-flow-margin', 'cash-conversion-ratio', 'debt-service-coverage'],
    outputs: ['cash flow bridge', 'free cash flow table', 'credit cash flow memo'],
    interpretation: ['cash flow shows capacity to fund operations and obligations', 'working capital swings can distort short-term cash', 'free cash flow supports valuation and lending decisions'],
    businessDecisions: ['approve loan', 'set covenant', 'adjust valuation assumption', 'flag liquidity risk'],
    practicePrompts: ['Explain why positive EBITDA may not mean strong cash flow.', 'Build a simple free cash flow bridge.'],
    connections: ['Banking & Credit Risk Study', 'Business Case Library', 'Output Atlas']
  },
  {
    id: 'time-value-dcf-valuation',
    title: 'Time Value of Money and DCF Valuation',
    level: 'Applied',
    evidenceStatus: 'Professional complement',
    sourceMaterials: ['Valuation notes and Excel models pending review'],
    studyObjective: 'Understand how discounted cash flow turns future cash flows into present value.',
    coreConcepts: ['time value of money', 'discount rate', 'present value', 'terminal value', 'forecast period', 'sensitivity analysis'],
    workflow: ['forecast free cash flow', 'choose discount rate', 'estimate terminal value', 'discount cash flows', 'calculate enterprise value', 'test sensitivities'],
    formulas: ['present-value', 'npv', 'terminal-value', 'enterprise-value'],
    outputs: ['DCF model summary', 'valuation sensitivity table', 'investment memo'],
    interpretation: ['valuation is assumption-sensitive', 'discount rate reflects risk', 'terminal value often drives a large part of enterprise value'],
    businessDecisions: ['invest or pass', 'negotiate price', 'test downside case', 'compare valuation methods'],
    practicePrompts: ['Explain why a higher discount rate lowers valuation.', 'List three assumptions that drive a DCF model.'],
    connections: ['Professional Certifications', 'Formula Library', 'Economics & Markets']
  },
  {
    id: 'wacc-capm-cost-of-capital',
    title: 'WACC, CAPM and Cost of Capital',
    level: 'Advanced',
    evidenceStatus: 'Professional complement',
    sourceMaterials: ['Corporate finance and valuation materials pending review'],
    studyObjective: 'Use cost of capital concepts to evaluate investment risk and valuation assumptions.',
    coreConcepts: ['cost of equity', 'cost of debt', 'capital structure', 'beta', 'market risk premium', 'WACC'],
    workflow: ['estimate cost of equity', 'estimate after-tax cost of debt', 'define capital weights', 'calculate WACC', 'test sensitivity', 'document assumptions'],
    formulas: ['capm', 'wacc', 'after-tax-cost-of-debt'],
    outputs: ['cost of capital table', 'WACC sensitivity table', 'valuation assumption memo'],
    interpretation: ['WACC combines debt and equity financing cost', 'CAPM links expected return to market risk', 'small WACC changes can create large valuation changes'],
    businessDecisions: ['approve project hurdle rate', 'support investment valuation', 'compare financing options', 'stress-test assumptions'],
    practicePrompts: ['Explain CAPM in business language.', 'Calculate WACC from a simple debt/equity mix.'],
    connections: ['Formula Library', 'Professional Certifications', 'Finance & Valuation']
  }
]

const unique = (items: string[]) => Array.from(new Set(items))
export const financeValuationStudySummary: FinanceValuationStudySummary = {
  totalLessons: financeValuationLessons.length,
  sourceCandidates: financeValuationLessons.filter((lesson) => lesson.evidenceStatus === 'Source candidate').length,
  formulas: unique(financeValuationLessons.flatMap((lesson) => lesson.formulas)).length,
  outputs: unique(financeValuationLessons.flatMap((lesson) => lesson.outputs)).length,
  practicePrompts: financeValuationLessons.flatMap((lesson) => lesson.practicePrompts).length
}
