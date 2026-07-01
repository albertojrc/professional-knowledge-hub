import type { CommandCenterSummary, CommandCenterTrack } from '../types/moduleCommandCenter'

export const bankingFinanceTracks: CommandCenterTrack[] = [
  {
    id: 'bf-credit-risk-core',
    title: 'Credit Risk Core',
    eyebrow: 'Banking & Finance',
    level: 'Foundation',
    status: 'Primary path',
    summary: 'Understand how banks evaluate borrowers, translate risk into PD, expected loss, pricing and portfolio decisions.',
    whyItMatters: 'This is the base layer for becoming a data professional in banking. It connects finance logic with risk analytics and business decisions.',
    primaryOutputs: ['Credit memo', 'PD interpretation', 'Expected loss view', 'Risk band logic', 'Portfolio monitoring note'],
    workflow: ['Borrower profile', 'Financial/risk data', 'Risk drivers', 'PD or score', 'Risk band', 'Approval/pricing/monitoring decision'],
    coreConcepts: ['Probability of Default', 'Loss Given Default', 'Exposure at Default', 'Expected Loss', 'Risk appetite', 'Credit policy'],
    formulasAndTools: ['Expected Loss = PD × LGD × EAD', 'Bad-rate', 'Delinquency rate', 'Score bands', 'Vintage analysis'],
    practiceMoves: ['Explain why a borrower is risky', 'Translate a score into a decision', 'Read a bad-rate trend by score band'],
    connectedViews: ['Global Search', 'Credit Scoring Review', 'Model Card & Monitoring Handoff', 'Portfolio Monitoring Dashboard'],
    searchTerms: ['credit risk', 'PD', 'expected loss', 'bad-rate', 'delinquency', 'score bands'],
    nextAction: 'Use Global Search for PD, expected loss, bad-rate and score bands before opening advanced governance pages.',
    aliases: ['banking-credit-risk-study', 'credit-risk', 'credit-scoring']
  },
  {
    id: 'bf-credit-scoring-modeling',
    title: 'Credit Scoring & Model Lifecycle',
    eyebrow: 'Banking Analytics',
    level: 'Professional',
    status: 'Primary path',
    summary: 'Follow the professional lifecycle from ABT and features to experiment design, validation, model card, monitoring and remediation.',
    whyItMatters: 'This is the strongest banking-data spine already built in the project. It turns fragmented pages into one clear professional journey.',
    primaryOutputs: ['ABT blueprint', 'Feature readiness output', 'Experiment validation output', 'Model card', 'Monitoring dashboard', 'Alert remediation output'],
    workflow: ['ABT', 'Field review', 'Model-ready features', 'Experiment', 'Validation', 'Model card', 'Portfolio monitoring', 'Alert remediation'],
    coreConcepts: ['Analytical Base Table', 'Leakage', 'Cutoff date', 'Champion/challenger', 'AUC/Gini/KS', 'Calibration', 'PSI'],
    formulasAndTools: ['AUC', 'Gini', 'KS', 'Calibration gap', 'PSI', 'Confusion matrix'],
    practiceMoves: ['Explain why a feature is blocked', 'Choose a validation metric', 'Interpret calibration drift', 'Escalate a monitoring alert'],
    connectedViews: ['ABT Blueprint', 'Model-Ready Feature Set', 'Credit Scoring Experiment Blueprint', 'Alert Playbook & Remediation Workflow'],
    searchTerms: ['ABT', 'feature readiness', 'credit scoring experiment', 'model card', 'PSI', 'alert remediation'],
    nextAction: 'Treat this as the main banking analytics project path; avoid opening every governance page unless Global Search points you there.',
    aliases: ['model-ready-feature-set', 'credit-scoring-experiment-blueprint', 'model-card-monitoring-handoff', 'portfolio-monitoring-dashboard-blueprint', 'alert-remediation-workflow']
  },
  {
    id: 'bf-corporate-finance-valuation',
    title: 'Corporate Finance & Valuation',
    eyebrow: 'Finance',
    level: 'Intermediate',
    status: 'Primary path',
    summary: 'Organize finance concepts around cash flow, ratios, cost of capital, valuation and creditworthiness.',
    whyItMatters: 'Finance needs to be presented as decision logic, not a pile of formulas. This path explains how numbers become investment, credit and strategy decisions.',
    primaryOutputs: ['Cash flow bridge', 'Ratio table', 'WACC table', 'NPV sensitivity', 'Valuation summary'],
    workflow: ['Financial statements', 'Ratio analysis', 'Cash flow analysis', 'Cost of capital', 'Valuation', 'Sensitivity', 'Decision'],
    coreConcepts: ['Liquidity', 'Leverage', 'Profitability', 'Free Cash Flow', 'WACC', 'CAPM', 'NPV', 'Terminal value'],
    formulasAndTools: ['Current ratio', 'Debt/EBITDA', 'FCF', 'WACC', 'CAPM', 'NPV', 'DCF'],
    practiceMoves: ['Read a ratio table', 'Explain why cash flow matters', 'Interpret WACC movement', 'Connect valuation to a business decision'],
    connectedViews: ['Finance & Valuation Study', 'Formula Library', 'Output Atlas', 'Business Cases'],
    searchTerms: ['WACC', 'CAPM', 'DCF', 'free cash flow', 'financial ratios', 'NPV'],
    nextAction: 'Use Global Search to open formulas and outputs one by one instead of browsing many reference pages.',
    aliases: ['finance-valuation-study', 'financial-ratios', 'cash-flow-analysis']
  },
  {
    id: 'bf-portfolio-monitoring',
    title: 'Portfolio Monitoring & Governance',
    eyebrow: 'Risk Governance',
    level: 'Professional',
    status: 'Governance layer',
    summary: 'Convert model and portfolio signals into owners, alerts, remediation actions and committee-ready decisions.',
    whyItMatters: 'In banking, a model is only useful if the institution can monitor it, explain it and react when risk changes.',
    primaryOutputs: ['Monitoring dashboard', 'Alert register', 'Remediation note', 'Governance decision', 'Limitations backlog'],
    workflow: ['Monitoring signal', 'Severity triage', 'Owner assignment', 'Root-cause diagnosis', 'Remediation', 'Escalation', 'Closure'],
    coreConcepts: ['Model risk', 'Portfolio drift', 'Owner workflow', 'SLA', 'Escalation', 'Closure criteria'],
    formulasAndTools: ['PSI', 'Bad-rate by score band', 'Approval rate', 'Vintage curves', 'Alert aging'],
    practiceMoves: ['Write an alert note', 'Diagnose score migration', 'Decide whether to escalate', 'Close an alert with evidence'],
    connectedViews: ['Portfolio Monitoring Dashboard Blueprint', 'Alert Playbook & Remediation Workflow', 'Knowledge Map'],
    searchTerms: ['portfolio monitoring', 'alert triage', 'SLA', 'root cause', 'remediation', 'governance'],
    nextAction: 'Keep this visible as a professional governance layer, not a main study starting point.',
    aliases: ['portfolio-risk-monitoring-output', 'alert-remediation-output', 'credit-risk-remediation-decision']
  }
]

export const cfaCertificationTracks: CommandCenterTrack[] = [
  {
    id: 'cfa-core-roadmap',
    title: 'CFA Level I Roadmap',
    eyebrow: 'CFA First',
    level: 'Foundation',
    status: 'Primary path',
    summary: 'A clear CFA-first path that groups ethics, quantitative methods, economics, financial statement analysis, corporate issuers, portfolio and asset classes.',
    whyItMatters: 'The certification module should feel like an exam command center, not a mixed list of unrelated credential cards.',
    primaryOutputs: ['Exam topic map', 'Formula checklist', 'Practice queue', 'Weak-area log', 'Revision plan'],
    workflow: ['Topic map', 'Concept block', 'Formula block', 'Example question', 'Practice set', 'Error log', 'Revision'],
    coreConcepts: ['Ethics', 'Quantitative Methods', 'Economics', 'FSA', 'Corporate Issuers', 'Portfolio Management', 'Equity', 'Fixed Income', 'Derivatives', 'Alternatives'],
    formulasAndTools: ['Time value of money', 'Statistics', 'Financial ratios', 'Cost of capital', 'Bond pricing', 'Portfolio risk/return'],
    practiceMoves: ['Study one LOS-style block', 'Solve practice questions', 'Log mistakes', 'Return through Global Search for weak terms'],
    connectedViews: ['Global Search', 'Formula Library', 'Output Atlas', 'Finance & Valuation Study'],
    searchTerms: ['CFA', 'Level I', 'ethics', 'quantitative methods', 'FSA', 'fixed income', 'portfolio management'],
    nextAction: 'Make CFA the default certification path and keep Bloomberg as supporting workflow, not the main module.',
    aliases: ['professional-certifications', 'cfa-foundations', 'cfa-investments']
  },
  {
    id: 'cfa-finance-foundations',
    title: 'Finance Foundations for CFA',
    eyebrow: 'Finance Base',
    level: 'Foundation',
    status: 'Primary path',
    summary: 'Study the finance pieces that support CFA: financial statements, ratios, cash flow, cost of capital and valuation basics.',
    whyItMatters: 'This connects your MIM finance material with the CFA exam logic so the module does not feel detached from the rest of the hub.',
    primaryOutputs: ['Ratio interpretation', 'Cash flow interpretation', 'Cost of capital note', 'Valuation logic map'],
    workflow: ['Statement line item', 'Ratio/formula', 'Interpretation', 'Exam-style trap', 'Business decision'],
    coreConcepts: ['Financial statements', 'Accruals', 'Liquidity ratios', 'Leverage ratios', 'Free cash flow', 'WACC'],
    formulasAndTools: ['Current ratio', 'ROE', 'Debt/Equity', 'FCF', 'WACC', 'CAPM'],
    practiceMoves: ['Explain a ratio in plain English', 'Identify whether a formula is liquidity, leverage or profitability', 'Connect ratios to credit and valuation'],
    connectedViews: ['Banking & Finance Hub', 'Formula Library', 'Business Cases'],
    searchTerms: ['financial ratios', 'cash flow', 'WACC', 'ROE', 'free cash flow', 'CFA FSA'],
    nextAction: 'Use this path when CFA formulas feel abstract; connect each one to a finance output.',
    aliases: ['finance-valuation-study', 'formula-library']
  },
  {
    id: 'cfa-investments-portfolio',
    title: 'Investments & Portfolio Management',
    eyebrow: 'CFA Application',
    level: 'Intermediate',
    status: 'Practice layer',
    summary: 'Group equity, fixed income, derivatives, alternatives and portfolio management into a practical decision workflow.',
    whyItMatters: 'This keeps CFA from becoming memorization. Each topic should answer: what instrument, what risk, what return, what decision?',
    primaryOutputs: ['Asset class comparison', 'Bond pricing logic', 'Risk/return interpretation', 'Portfolio allocation note'],
    workflow: ['Instrument', 'Cash flows', 'Risk drivers', 'Valuation metric', 'Portfolio role', 'Decision'],
    coreConcepts: ['Equity valuation', 'Fixed income', 'Duration', 'Convexity', 'Derivatives payoff', 'Diversification'],
    formulasAndTools: ['Bond price', 'Yield', 'Duration', 'Expected return', 'Variance', 'Sharpe ratio'],
    practiceMoves: ['Explain the risk of a bond', 'Compare equity and fixed income outputs', 'Read a portfolio risk/return view'],
    connectedViews: ['CFA Investments Pack', 'Model Library', 'Output Atlas'],
    searchTerms: ['equity', 'fixed income', 'duration', 'convexity', 'derivatives', 'portfolio risk'],
    nextAction: 'Use Global Search to open one instrument or metric at a time and avoid browsing huge content packs.',
    aliases: ['cfa-investment-lessons', 'model-library', 'output-atlas']
  },
  {
    id: 'cfa-bloomberg-support',
    title: 'Bloomberg as Support Tool',
    eyebrow: 'Supporting Workflow',
    level: 'Intermediate',
    status: 'Reference layer',
    summary: 'Keep Bloomberg Market Concepts and terminal-style workflows as supporting tools for market interpretation, not the center of the certification module.',
    whyItMatters: 'This reduces noise. Bloomberg is useful, but the module should be anchored in CFA and finance learning outcomes.',
    primaryOutputs: ['Market brief', 'Economic calendar note', 'Yield curve interpretation', 'Security snapshot'],
    workflow: ['Market question', 'Bloomberg-style function/output', 'Interpretation', 'CFA/finance connection', 'Brief decision'],
    coreConcepts: ['Economic indicators', 'Yield curve', 'Market data', 'Equity screen', 'Fixed income screen'],
    formulasAndTools: ['Economic calendar', 'Yield curve', 'Security description', 'Market monitor'],
    practiceMoves: ['Write a short market brief', 'Connect a market output to CFA economics', 'Explain a yield curve movement'],
    connectedViews: ['Bloomberg Learning Pack', 'Economics & Markets Study', 'Tools & Platforms Study'],
    searchTerms: ['Bloomberg', 'BMC', 'economic calendar', 'yield curve', 'market brief', 'terminal workflow'],
    nextAction: 'Use Bloomberg only when it supports a CFA or finance concept you are already studying.',
    aliases: ['bloomberg-learning', 'tools-platforms-study', 'economics-markets-study']
  }
]

export const bankingFinanceSummary: CommandCenterSummary = {
  title: 'Banking & Finance Command Center',
  shortName: 'Banking & Finance',
  totalTracks: bankingFinanceTracks.length,
  primaryTracks: bankingFinanceTracks.filter((track) => track.status === 'Primary path').length,
  professionalTracks: bankingFinanceTracks.filter((track) => track.level === 'Professional').length,
  outputs: bankingFinanceTracks.flatMap((track) => track.primaryOutputs).length
}

export const cfaCertificationSummary: CommandCenterSummary = {
  title: 'CFA & Certifications Command Center',
  shortName: 'CFA & Certifications',
  totalTracks: cfaCertificationTracks.length,
  primaryTracks: cfaCertificationTracks.filter((track) => track.status === 'Primary path').length,
  professionalTracks: cfaCertificationTracks.filter((track) => track.level === 'Professional').length,
  outputs: cfaCertificationTracks.flatMap((track) => track.primaryOutputs).length
}
