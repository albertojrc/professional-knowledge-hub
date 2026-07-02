export interface ModuleCurriculumSubmodule {
  id: string
  title: string
  objective: string
  theory: string[]
  assetIds: string[]
  outputs: string[]
}

export interface ModuleCurriculum {
  id: 'data-science' | 'banking-finance' | 'cfa-certifications'
  title: string
  eyebrow: string
  description: string
  submodules: ModuleCurriculumSubmodule[]
}

export const dataScienceCurriculum: ModuleCurriculum = {
  id: 'data-science',
  title: 'Data Science Curriculum',
  eyebrow: 'Data Science',
  description: 'Study data science through ordered submodules. Open each content item to study it with the full concept-detail structure.',
  submodules: [
    { id: 'ds-foundations', title: '1. Data Foundations', objective: 'Understand data quality, table structure and SQL preparation before analysis.', theory: ['Data quality', 'Observation grain', 'SQL joins', 'Analytical base table'], assetIds: ['data-quality-report', 'sql-joins', 'analytical-base-table'], outputs: ['Data quality report', 'Joined table check', 'ABT structure'] },
    { id: 'ds-eda', title: '2. EDA & Feature Thinking', objective: 'Inspect data, detect risks and prepare useful model inputs.', theory: ['Exploratory analysis', 'Missingness', 'Outliers', 'Feature engineering'], assetIds: ['eda', 'feature-engineering', 'data-leakage'], outputs: ['EDA summary', 'Feature dictionary', 'Leakage review'] },
    { id: 'ds-validation', title: '3. Validation & Evaluation', objective: 'Validate models with the right split, metric and interpretation.', theory: ['Train/test split', 'Cross validation', 'Confusion matrix', 'ROC and PR curves'], assetIds: ['train-test-split', 'cross-validation', 'confusion-matrix', 'roc-curve', 'precision-recall-curve'], outputs: ['Validation plan', 'Metric interpretation', 'Threshold review'] },
    { id: 'ds-models', title: '4. Machine Learning Models', objective: 'Move from interpretable baselines to stronger predictive models.', theory: ['Linear regression', 'Logistic regression', 'Decision trees', 'Ensembles'], assetIds: ['linear-regression', 'logistic-regression', 'decision-tree', 'random-forest', 'xgboost'], outputs: ['Baseline model', 'Model comparison', 'Feature importance'] },
    { id: 'ds-monitoring', title: '5. Monitoring & Model Control', objective: 'Read model outputs and know when performance needs review.', theory: ['Calibration', 'Lift', 'KS', 'Drift and monitoring'], assetIds: ['calibration-plot', 'lift-curve', 'ks-statistic'], outputs: ['Monitoring view', 'Calibration review', 'Model quality note'] }
  ]
}

export const bankingCurriculum: ModuleCurriculum = {
  id: 'banking-finance',
  title: 'Banking & Finance Curriculum',
  eyebrow: 'Banking & Finance',
  description: 'Study banking analytics through credit risk, financial analysis, scoring, monitoring and governance.',
  submodules: [
    { id: 'bf-credit-core', title: '1. Credit Risk Core', objective: 'Understand borrower risk, PD and expected loss.', theory: ['Credit risk scoring', 'PD', 'LGD/EAD logic', 'Expected loss'], assetIds: ['credit-risk-scoring', 'pd', 'expected-loss'], outputs: ['PD interpretation', 'Expected loss view', 'Risk band note'] },
    { id: 'bf-financial-analysis', title: '2. Financial Analysis', objective: 'Read financial statements through ratios and cash flow.', theory: ['Financial ratios', 'Cash flow', 'Liquidity', 'Debt capacity'], assetIds: ['financial-ratios', 'cash-flow-analysis'], outputs: ['Ratio table', 'Cash flow bridge', 'Credit memo inputs'] },
    { id: 'bf-model-lifecycle', title: '3. Credit Scoring Lifecycle', objective: 'Connect ABT, features, experiment design and model handoff.', theory: ['ABT', 'Feature readiness', 'Experiment gate', 'Model card'], assetIds: ['analytical-base-table', 'data-leakage', 'feature-engineering', 'credit-risk-scoring', 'calibration-plot'], outputs: ['ABT blueprint', 'Model-ready matrix', 'Model card'] },
    { id: 'bf-portfolio-governance', title: '4. Portfolio Monitoring', objective: 'Translate model signals into monitoring and owner action.', theory: ['Score bands', 'KS', 'Calibration', 'Alert remediation'], assetIds: ['ks-statistic', 'calibration-plot', 'lift-curve', 'expected-loss'], outputs: ['Monitoring dashboard', 'Alert note', 'Portfolio decision'] },
    { id: 'bf-corporate-finance', title: '5. Corporate Finance & Valuation', objective: 'Connect cost of capital and valuation to banking decisions.', theory: ['WACC', 'CAPM', 'NPV', 'Cash flow'], assetIds: ['wacc', 'capm', 'npv', 'cash-flow-analysis', 'financial-ratios'], outputs: ['WACC table', 'NPV sensitivity', 'Valuation note'] }
  ]
}

export const cfaCurriculum: ModuleCurriculum = {
  id: 'cfa-certifications',
  title: 'CFA & Certifications Curriculum',
  eyebrow: 'CFA & Certifications',
  description: 'Choose a certification path first, then open each topic in the full concept-detail view.',
  submodules: [
    { id: 'cert-cfa-level-1', title: 'CFA Level I Foundations', objective: 'Build the core finance, economics, quant and investment base.', theory: ['Ethics', 'Quantitative methods', 'Economics', 'Financial statement analysis', 'Corporate issuers', 'Equity', 'Fixed income', 'Derivatives', 'Alternatives', 'Portfolio management'], assetIds: ['cfa-ethics', 'cfa-quant-methods', 'cfa-economics', 'cfa-fsa', 'cfa-corporate-issuers', 'cfa-equity', 'cfa-fixed-income', 'cfa-derivatives', 'cfa-alternatives', 'cfa-portfolio-management'], outputs: ['Ethics scenario note', 'Formula sheet', 'Market brief', 'Financial statement review', 'Portfolio policy outline'] },
    { id: 'cert-bmc', title: 'Bloomberg Market Concepts', objective: 'Understand macro, markets, fixed income, equities and news interpretation.', theory: ['Economic indicators', 'Currencies', 'Fixed income', 'Equities', 'Market news'], assetIds: ['cfa-economics', 'cfa-fixed-income', 'cfa-equity', 'cfa-portfolio-management'], outputs: ['Market brief', 'Indicator interpretation', 'Asset class note'] },
    { id: 'cert-bff', title: 'Bloomberg Finance Fundamentals', objective: 'Study company analysis, financial statements and market mechanics.', theory: ['Financial statements', 'Company analysis', 'Fixed income basics', 'Equity basics'], assetIds: ['cfa-fsa', 'cfa-corporate-issuers', 'cfa-equity', 'cfa-fixed-income'], outputs: ['Company snapshot', 'Ratio table', 'Finance note'] },
    { id: 'cert-terminal', title: 'Bloomberg Terminal Workflows', objective: 'Separate practical terminal workflows from conceptual certification learning.', theory: ['Navigation', 'Market monitor', 'Company lookup', 'Security lookup', 'Economic data'], assetIds: ['cfa-economics', 'cfa-equity', 'cfa-fixed-income', 'cfa-portfolio-management'], outputs: ['Workflow checklist', 'Screen interpretation', 'Market research note'] }
  ]
}
