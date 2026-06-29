import type { StudyPath } from '../types/studyPath'

export const studyPaths: StudyPath[] = [
  {
    id: 'data-analyst-path',
    title: 'Data Analyst Path',
    subtitle: 'From SQL and data quality to dashboards, outputs and business decisions.',
    level: 'Foundation',
    duration: '5-6 weeks',
    professionalOutcome: 'Build the professional workflow of a data analyst: query data, check quality, create analytical tables, interpret outputs and communicate decisions.',
    targetRole: 'Data Analyst / BI Analyst / Analytics Consultant',
    icon: 'DA',
    assetIds: ['sql-joins', 'data-quality-report', 'eda', 'analytical-base-table', 'feature-engineering', 'ab-testing', 'operations-dashboard'],
    moduleSequence: [
      { id: 'da-tools', title: 'Tools & Platforms Study', viewId: 'tools-platforms-study', whyItMatters: 'Start with SQL, dashboards, notebooks and documentation discipline.' },
      { id: 'da-data-science', title: 'Data Science & Analytics Study', viewId: 'data-science-analytics-study', whyItMatters: 'Learn the full workflow from data quality to validation.' },
      { id: 'da-output', title: 'Output Atlas', viewId: 'output-atlas', whyItMatters: 'Practice interpreting tables, dashboards and model outputs.' }
    ],
    outputPortfolio: ['SQL query result table', 'data quality report', 'ABT schema', 'dashboard interpretation guide', 'business insight memo'],
    practiceAgenda: ['write SQL summaries', 'explain row-count changes after joins', 'document data quality issues', 'translate dashboard signals into decisions'],
    successCriteria: ['Can explain dataset grain', 'Can identify data quality risks', 'Can interpret a dashboard without overclaiming', 'Can write a short business recommendation'],
    milestones: [
      { id: 'da-sql-foundation', title: 'SQL and data access', description: 'Learn how to extract and validate business data.', assetIds: ['sql-joins'] },
      { id: 'da-quality', title: 'Data quality and structure', description: 'Check trustworthiness before analysis.', assetIds: ['data-quality-report', 'eda', 'analytical-base-table'] },
      { id: 'da-feature-insight', title: 'Features and analytical signals', description: 'Convert raw data into useful variables and insight.', assetIds: ['feature-engineering'] },
      { id: 'da-business-testing', title: 'Decision support', description: 'Use experiments and dashboards to support business choices.', assetIds: ['ab-testing', 'operations-dashboard'] }
    ]
  },
  {
    id: 'banking-risk-analyst-path',
    title: 'Banking Risk Analyst Path',
    subtitle: 'Credit scoring, PD/LGD/EAD, model validation and lending decisions.',
    level: 'Professional',
    duration: '6-7 weeks',
    professionalOutcome: 'Understand how banks use data, scoring models, expected loss and validation outputs to approve, reject, price and monitor credit risk.',
    targetRole: 'Credit Risk Analyst / Banking Data Analyst / Risk Analytics Associate',
    icon: 'BR',
    assetIds: ['data-quality-report', 'analytical-base-table', 'logistic-regression', 'credit-risk-scoring', 'pd', 'lgd', 'ead', 'expected-loss', 'confusion-matrix', 'roc-curve', 'precision-recall-curve', 'calibration-plot', 'ks-statistic', 'xgboost'],
    moduleSequence: [
      { id: 'br-credit-study', title: 'Banking & Credit Risk Study', viewId: 'banking-credit-risk-study', whyItMatters: 'Core module for scorecards, expected loss and credit policy.' },
      { id: 'br-data-study', title: 'Data Science & Analytics Study', viewId: 'data-science-analytics-study', whyItMatters: 'Supports ABT, validation, leakage and model outputs.' },
      { id: 'br-finance', title: 'Finance & Valuation Study', viewId: 'finance-valuation-study', whyItMatters: 'Connects cash flow and ratios to credit approval.' }
    ],
    outputPortfolio: ['credit scoring memo', 'score band policy', 'expected loss table', 'calibration interpretation', 'credit approval recommendation'],
    practiceAgenda: ['interpret PD/LGD/EAD', 'write a model validation conclusion', 'explain false positives and false negatives', 'design a score-band decision policy'],
    successCriteria: ['Can explain expected loss', 'Can interpret ROC/KS/calibration', 'Can connect model output to lending policy', 'Can identify governance risks'],
    milestones: [
      { id: 'br-data-readiness', title: 'Risk data readiness', description: 'Prepare reliable data for credit modeling.', assetIds: ['data-quality-report', 'analytical-base-table'] },
      { id: 'br-scoring', title: 'Credit scoring foundations', description: 'Understand probability scoring and baseline models.', assetIds: ['logistic-regression', 'credit-risk-scoring', 'pd'] },
      { id: 'br-loss', title: 'Credit loss logic', description: 'Connect PD, LGD and EAD to expected loss.', assetIds: ['pd', 'lgd', 'ead', 'expected-loss'] },
      { id: 'br-validation', title: 'Validation outputs', description: 'Interpret discrimination, calibration and ranking separation.', assetIds: ['confusion-matrix', 'roc-curve', 'precision-recall-curve', 'calibration-plot', 'ks-statistic'] },
      { id: 'br-advanced', title: 'Advanced modeling', description: 'Understand advanced scoring models and governance limits.', assetIds: ['xgboost'] }
    ]
  },
  {
    id: 'finance-valuation-analyst-path',
    title: 'Finance / Valuation Analyst Path',
    subtitle: 'Financial statements, ratios, cash flow, WACC, CAPM, NPV and valuation logic.',
    level: 'Intermediate',
    duration: '5-6 weeks',
    professionalOutcome: 'Translate financial statements and valuation formulas into investment, lending and corporate finance decisions.',
    targetRole: 'Finance Analyst / Valuation Analyst / Corporate Banking Analyst',
    icon: 'FV',
    assetIds: ['financial-ratios', 'cash-flow-analysis', 'free-cash-flow', 'current-ratio', 'capm', 'wacc', 'npv', 'business-model-canvas'],
    moduleSequence: [
      { id: 'fv-finance-study', title: 'Finance & Valuation Study', viewId: 'finance-valuation-study', whyItMatters: 'Main module for statements, ratios, cash flow and valuation.' },
      { id: 'fv-economics-study', title: 'Economics & Markets Study', viewId: 'economics-markets-study', whyItMatters: 'Adds rates, inflation and macro assumptions to valuation.' },
      { id: 'fv-cfa', title: 'Professional Certifications', viewId: 'professional-certifications', whyItMatters: 'Connects CFA foundations and investments to finance practice.' }
    ],
    outputPortfolio: ['financial ratio table', 'cash flow bridge', 'DCF summary', 'WACC sensitivity table', 'investment recommendation memo'],
    practiceAgenda: ['interpret liquidity and leverage ratios', 'build a simple free cash flow bridge', 'explain WACC assumptions', 'compare valuation scenarios'],
    successCriteria: ['Can explain why profit differs from cash flow', 'Can interpret financial ratios in context', 'Can calculate and explain WACC/NPV logic', 'Can write a valuation conclusion'],
    milestones: [
      { id: 'fv-statements', title: 'Financial diagnosis', description: 'Read business health through statements, ratios and cash flow.', assetIds: ['financial-ratios', 'cash-flow-analysis', 'current-ratio'] },
      { id: 'fv-cash-flow', title: 'Cash flow and value', description: 'Connect cash generation to valuation and lending decisions.', assetIds: ['free-cash-flow', 'npv'] },
      { id: 'fv-capital-cost', title: 'Cost of capital', description: 'Estimate required returns and discount rates.', assetIds: ['capm', 'wacc'] },
      { id: 'fv-business-model', title: 'Business model context', description: 'Connect numbers to business model quality.', assetIds: ['business-model-canvas'] }
    ]
  },
  {
    id: 'management-strategy-path',
    title: 'Management & Strategy Path',
    subtitle: 'Strategy frameworks, market context, business models, operations and decision execution.',
    level: 'Foundation',
    duration: '4-5 weeks',
    professionalOutcome: 'Use management frameworks to diagnose business problems, compare options and turn recommendations into execution routines.',
    targetRole: 'Business Analyst / Strategy Analyst / Manager / Consultant',
    icon: 'MS',
    assetIds: ['swot', 'pestel', 'porter-five-forces', 'business-model-canvas', 'financial-ratios', 'ab-testing', 'operations-dashboard'],
    moduleSequence: [
      { id: 'ms-management-study', title: 'Management & Strategy Study', viewId: 'management-strategy-study', whyItMatters: 'Main module for SWOT, PESTEL, Porter, BMC and execution.' },
      { id: 'ms-econ', title: 'Economics & Markets Study', viewId: 'economics-markets-study', whyItMatters: 'Adds macro and market context to strategy decisions.' },
      { id: 'ms-tools', title: 'Tools & Platforms Study', viewId: 'tools-platforms-study', whyItMatters: 'Turns strategy into dashboards, KPIs and reporting workflows.' }
    ],
    outputPortfolio: ['SWOT canvas', 'PESTEL table', 'Porter five forces note', 'business model canvas', 'KPI tree', 'strategy recommendation memo'],
    practiceAgenda: ['build SWOT and PESTEL', 'compare strategic options', 'design KPIs', 'turn a framework into a decision memo'],
    successCriteria: ['Can use frameworks without being superficial', 'Can connect external context to decision risk', 'Can translate strategy into KPIs', 'Can recommend clear next actions'],
    milestones: [
      { id: 'ms-diagnosis', title: 'Strategic diagnosis', description: 'Structure internal and external analysis.', assetIds: ['swot', 'pestel'] },
      { id: 'ms-competition', title: 'Competitive strategy', description: 'Assess industry pressure and market position.', assetIds: ['porter-five-forces'] },
      { id: 'ms-business-model', title: 'Business model logic', description: 'Map how the company creates and captures value.', assetIds: ['business-model-canvas', 'financial-ratios'] },
      { id: 'ms-execution', title: 'Execution and validation', description: 'Connect strategy to experiments and dashboards.', assetIds: ['ab-testing', 'operations-dashboard'] }
    ]
  },
  {
    id: 'cfa-level-one-path',
    title: 'CFA Level I Path',
    subtitle: 'Foundations, ethics, quant, economics, FSA, corporate issuers and investment topics.',
    level: 'Professional',
    duration: '10-12 weeks',
    professionalOutcome: 'Build a structured CFA Level I study route connected to finance, economics, valuation and portfolio concepts already inside the Hub.',
    targetRole: 'CFA Candidate / Investment Analyst / Finance Professional',
    icon: 'CF',
    assetIds: ['financial-ratios', 'cash-flow-analysis', 'capm', 'wacc', 'npv', 'portfolio-return', 'bond-yield', 'present-value'],
    moduleSequence: [
      { id: 'cfa-certifications', title: 'Professional Certifications', viewId: 'professional-certifications', whyItMatters: 'Main home for CFA foundations and investment content packs.' },
      { id: 'cfa-finance', title: 'Finance & Valuation Study', viewId: 'finance-valuation-study', whyItMatters: 'Supports FSA, Corporate Issuers and valuation formulas.' },
      { id: 'cfa-economics', title: 'Economics & Markets Study', viewId: 'economics-markets-study', whyItMatters: 'Supports macro, rates, FX and market interpretation.' }
    ],
    outputPortfolio: ['CFA topic map', 'ethics decision note', 'TVM calculation sheet', 'financial statement analysis memo', 'bond yield summary', 'portfolio allocation note'],
    practiceAgenda: ['ethics scenarios', 'time value of money drills', 'FSA ratio interpretation', 'bond pricing practice', 'portfolio diversification explanation'],
    successCriteria: ['Can map CFA topics to Hub modules', 'Can explain core formulas in plain language', 'Can connect investments to portfolio decisions', 'Can practice with structured review blocks'],
    milestones: [
      { id: 'cfa-foundations', title: 'Program and ethics foundation', description: 'Understand the CFA structure and ethical decision-making.', assetIds: [] },
      { id: 'cfa-quant-econ', title: 'Quant and economics', description: 'Build the analytical and macro foundation.', assetIds: ['present-value'] },
      { id: 'cfa-fsa-corporate', title: 'FSA and corporate issuers', description: 'Connect statements, ratios and corporate decisions.', assetIds: ['financial-ratios', 'cash-flow-analysis', 'npv', 'wacc'] },
      { id: 'cfa-investments', title: 'Investment asset classes', description: 'Study equity, fixed income, derivatives, alternatives and portfolio management.', assetIds: ['capm', 'bond-yield', 'portfolio-return'] }
    ]
  },
  {
    id: 'bloomberg-market-workflow-path',
    title: 'Bloomberg Market Workflow Path',
    subtitle: 'BMC/BFF-style market monitoring, economic indicators, FX, fixed income, equities and market briefs.',
    level: 'Intermediate',
    duration: '4-5 weeks',
    professionalOutcome: 'Develop a repeatable Bloomberg-style workflow for reading markets, interpreting news and writing decision-ready market briefs.',
    targetRole: 'Market Analyst / Finance Analyst / Bloomberg Learner / Investment Intern',
    icon: 'BB',
    assetIds: ['financial-ratios', 'cash-flow-analysis', 'current-ratio', 'capm', 'wacc', 'business-model-canvas'],
    moduleSequence: [
      { id: 'bb-certifications', title: 'Professional Certifications', viewId: 'professional-certifications', whyItMatters: 'Contains BMC, BFF and Bloomberg workflow lessons.' },
      { id: 'bb-economics', title: 'Economics & Markets Study', viewId: 'economics-markets-study', whyItMatters: 'Provides macro, rates and FX interpretation foundation.' },
      { id: 'bb-tools', title: 'Tools & Platforms Study', viewId: 'tools-platforms-study', whyItMatters: 'Frames terminal-style workflows as professional outputs.' }
    ],
    outputPortfolio: ['economic release note', 'FX move note', 'yield curve note', 'company snapshot', 'financial fundamentals note', 'daily market brief'],
    practiceAgenda: ['summarize market moves', 'write a what-moved-and-why note', 'interpret yield curve changes', 'connect news to company or portfolio impact'],
    successCriteria: ['Can scan markets without getting lost', 'Can explain macro indicators clearly', 'Can write concise market briefs', 'Can connect Bloomberg-style outputs to decisions'],
    milestones: [
      { id: 'bb-market-foundation', title: 'Market monitoring foundation', description: 'Read economic indicators, rates and market expectations.', assetIds: [] },
      { id: 'bb-fx-rates', title: 'FX and fixed income view', description: 'Interpret currency moves and yield curve changes.', assetIds: ['capm'] },
      { id: 'bb-company-view', title: 'Company and fundamentals view', description: 'Use statements and ratios for company interpretation.', assetIds: ['financial-ratios', 'cash-flow-analysis', 'current-ratio'] },
      { id: 'bb-brief-writing', title: 'Market brief writing', description: 'Turn signals, charts and news into a professional summary.', assetIds: ['business-model-canvas'] }
    ]
  }
]
