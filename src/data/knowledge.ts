import type { BusinessCase, FormulaItem, KnowledgeChain, LearningModule, Lesson, ModelItem, NavItem, OutputAtlasItem } from '../types/knowledge'

export const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', eyebrow: 'Home', description: 'Professional dashboard and current learning path.', icon: '🏠' },
  { id: 'data-science', label: 'Data Science', eyebrow: 'Core Area', description: 'Data foundations, SQL, Python, ML, time series, MLOps and GenAI.', icon: '🧠' },
  { id: 'banking-finance', label: 'Banking & Finance', eyebrow: 'Core Area', description: 'Credit, fraud, AML/KYC, AI in Banking, WACC, cash flow and rating.', icon: '🏦' },
  { id: 'credit-risk', label: 'Credit Risk Analytics', eyebrow: 'Course Module', description: 'Credit scoring, PD, calibration, SHAP and monitoring.', icon: '🎯' },
  { id: 'output-atlas', label: 'Output Atlas', eyebrow: 'Interpret', description: 'Manual for interpreting technical and business outputs.', icon: '📊' },
  { id: 'formula-library', label: 'Formula Library', eyebrow: 'Reference', description: 'Finance, risk, ML and economics formulas.', icon: '🧮' },
  { id: 'model-library', label: 'Model Library', eyebrow: 'Reference', description: 'Models with inputs, outputs and interpretation.', icon: '🤖' },
  { id: 'business-cases', label: 'Business Cases', eyebrow: 'Apply', description: 'Professional playbooks for real banking and analytics scenarios.', icon: '📁' },
  { id: 'knowledge-map', label: 'Knowledge Map', eyebrow: 'Connect', description: 'Chains connecting concepts, models, outputs and decisions.', icon: '🕸️' },
  { id: 'quality-review', label: 'Quality Review', eyebrow: 'Audit', description: 'Coverage, gaps and next content expansion priorities.', icon: '✅' }
]

export const learningModules: LearningModule[] = [
  {
    id: 'data-science-foundations',
    area: 'Data Science & Analytics',
    title: 'Data Science Foundations',
    subtitle: 'From raw data to analytical thinking',
    level: 'Foundation',
    purpose: 'Understand how data moves from sources into analysis, modeling, dashboards and professional decisions.',
    lessons: ['Data sources and granularity', 'Data quality', 'SQL analytical base tables', 'EDA', 'Feature engineering', 'Model evaluation'],
    workflow: ['Business Question', 'Data Sources', 'SQL ABT', 'Data Quality', 'EDA', 'Features', 'Model or Dashboard', 'Decision'],
    outputs: ['Data Quality Report', 'Data Dictionary', 'ABT Validation', 'EDA Summary'],
    relatedCases: ['Credit Risk / PD Scoring', 'Marketing Research to Campaign ROI'],
    sourceCoverage: ['MBD Data Science materials', 'NoSQL sessions', 'Modern Data lectures']
  },
  {
    id: 'machine-learning',
    area: 'Data Science & Analytics',
    title: 'Machine Learning Models',
    subtitle: 'How models are selected, trained, evaluated and interpreted',
    level: 'Intermediate',
    purpose: 'Build a professional understanding of classification, regression, clustering, time series and explainability.',
    lessons: ['Supervised learning', 'Classification metrics', 'Regression diagnostics', 'Clustering', 'Time series', 'Explainability', 'Monitoring'],
    workflow: ['Target Definition', 'Feature Engineering', 'Train/Test Split', 'Baseline Model', 'Advanced Model', 'Evaluation', 'Interpretation', 'Monitoring'],
    outputs: ['Classification Report', 'ROC Curve', 'PR Curve', 'Residual Plot', 'SHAP Summary', 'Forecast Interval'],
    relatedCases: ['Credit Risk / PD Scoring', 'Fraud Detection & Alert Prioritization'],
    sourceCoverage: ['Risk & Fraud Analytics', 'Time Series sessions', 'AI in Banking']
  },
  {
    id: 'banking-ai-risk',
    area: 'Banking & Finance',
    title: 'Banking AI, Risk and Governance',
    subtitle: 'AI use cases in banking with governance and decision control',
    level: 'Professional',
    purpose: 'Connect AI, risk, data readiness, explainability, human oversight and model monitoring.',
    lessons: ['AI in Banking', 'Credit Risk', 'Fraud Analytics', 'AML/KYC', 'Explainability', 'Model Risk', 'Human Oversight', 'Monitoring'],
    workflow: ['AI Use Case', 'Data Readiness', 'Model Development', 'Explainability', 'Human Oversight', 'Validation', 'Model Card', 'Monitoring'],
    outputs: ['AI Use Case Assessment', 'Model Card', 'Governance Memo', 'Monitoring Dashboard'],
    relatedCases: ['AI Banking Product Governance', 'AML / KYC Alert Triage'],
    sourceCoverage: ['AI in Banking main.pdf', 'Risk & Fraud Analytics', 'MLOps sessions']
  },
  {
    id: 'corporate-finance',
    area: 'Banking & Finance',
    title: 'Corporate Finance and Valuation',
    subtitle: 'Cash flow, ratios, WACC, CAPM, rating and valuation logic',
    level: 'Intermediate',
    purpose: 'Understand how finance outputs become investment, credit and strategy decisions.',
    lessons: ['Cash Flow', 'Ratios', 'WACC', 'CAPM', 'NPV', 'Rating', 'Valuation', 'Project Finance'],
    workflow: ['Financial Statements', 'Ratios', 'Cash Flow', 'Cost of Capital', 'Valuation', 'Sensitivity', 'Decision'],
    outputs: ['Cash Flow Bridge', 'Ratio Table', 'WACC Table', 'NPV Sensitivity', 'Rating Score'],
    relatedCases: ['SME Rating / Ratios Scoring', 'AI Banking Product Governance'],
    sourceCoverage: ['Coste de capital avanzado', 'Cash Flow notes', 'Rating variables']
  }
]

export const creditRiskLesson: Lesson = {
  id: 'credit-scoring',
  title: 'Credit Scoring',
  subtitle: 'Turning banking data into credit decisions',
  level: 'Professional',
  purpose: 'Learn how banks transform applicant, loan, bureau and behavioral data into a score or probability of default.',
  explanation: 'Credit scoring converts customer, loan, bureau, payment and behavioral data into a risk score or probability of default. In banking, a score is not only a model output: it becomes part of credit policy, pricing, risk appetite, provisions, expected loss and portfolio monitoring.',
  professionalWorkflow: ['Banking Data', 'SQL Analytical Base Table', 'Data Quality', 'Feature Engineering', 'Logistic Regression Baseline', 'XGBoost Challenger', 'Calibration', 'Probability of Default', 'Risk Bands', 'Expected Loss', 'Monitoring'],
  outputs: ['ROC-AUC', 'Gini', 'KS', 'Calibration Plot', 'SHAP', 'PSI'],
  relatedFormulas: ['Expected Loss', 'Gini from AUC'],
  relatedModels: ['Logistic Regression', 'XGBoost', 'SHAP'],
  relatedCases: ['Credit Risk / PD Scoring'],
  decisions: ['Approve', 'Manual Review', 'Reject', 'Risk-based Pricing', 'Limit Adjustment', 'Portfolio Monitoring'],
  redFlags: ['Variable leakage after approval', 'High AUC but poor calibration', 'Risk bands without decision policy', 'No segment-level validation', 'No drift or PSI monitoring after deployment'],
  sourceCoverage: ['Credit Scoring & Best Practices in Banking', 'Risk & Fraud Analytics', 'AI in Banking', 'Rating variables and ratios']
}

export const outputAtlas: OutputAtlasItem[] = [
  {
    id: 'calibration-plot', title: 'Calibration Plot', category: 'Credit Risk / Model Evaluation', usedIn: ['PD models', 'Pricing', 'Risk bands', 'Expected Loss', 'Model monitoring'],
    whatItIs: 'A calibration plot compares predicted probabilities against observed outcomes. In credit risk, it checks whether predicted PD behaves like real default probability.',
    exampleOutput: 'Bin predicted PD: 10%–15%\nAverage predicted PD: 12.3%\nObserved default rate: 18.7%\nInterpretation: the model underestimates risk in this band.',
    howToRead: ['If predicted PD is close to observed default, calibration is good.', 'If observed default is higher, the model underestimates risk.', 'If observed default is lower, the model overestimates risk.', 'Read calibration by score band, product, customer segment and time period.'],
    goodResult: 'Predicted probabilities are close to observed default rates across score bands, products, vintages and customer segments.',
    badResult: 'The model ranks clients well but gives probabilities that are too optimistic or too conservative.',
    redFlags: ['AUC high but calibration poor', 'High-risk band underestimated', 'No recalibration plan', 'No segment-level calibration check', 'No observed vs predicted monitoring'],
    howToImprove: ['Isotonic calibration', 'Platt scaling', 'Segment-level recalibration', 'More recent training data', 'Monitoring observed vs predicted default'],
    businessImpact: 'Calibration affects pricing, approval, provisions, capital, risk appetite, expected loss and monitoring. A poorly calibrated model can approve too much risk or reject profitable customers unnecessarily.',
    relatedConcepts: ['PD', 'Expected Loss', 'Risk Bands', 'Monitoring', 'PSI'], relatedCases: ['Credit Risk / PD Scoring']
  },
  {
    id: 'precision-recall-curve', title: 'Precision-Recall Curve', category: 'Fraud / Imbalanced Classification', usedIn: ['Fraud detection', 'AML triage', 'Rare event modeling', 'Alert prioritization'],
    whatItIs: 'A precision-recall curve shows the tradeoff between capturing real positives and keeping predicted positives useful when the target event is rare.',
    exampleOutput: 'PR-AUC: 0.39\nPrecision at top 5%: 42%\nRecall at top 5%: 51%\nOperational capacity: 1,350 alerts/day',
    howToRead: ['Precision tells how many alerts are useful.', 'Recall tells how many real events are captured.', 'For fraud and AML, operational capacity matters as much as model score.', 'A high recall with very low precision may overwhelm analysts.'],
    goodResult: 'The selected threshold captures meaningful risk while producing an alert volume the team can review.',
    badResult: 'The model catches more events but creates too many false positives and operational backlog.',
    redFlags: ['Using ROC only for rare classes', 'No top-K analysis', 'No link to analyst capacity', 'No feedback loop from investigation outcomes'],
    howToImprove: ['Create velocity features', 'Tune threshold by capacity', 'Use cost-sensitive evaluation', 'Add feedback loop labels', 'Segment thresholds by product/channel'],
    businessImpact: 'This output determines whether fraud/AML models are useful in operations or just technically impressive.',
    relatedConcepts: ['Precision', 'Recall', 'Threshold', 'Alert Queue'], relatedCases: ['Fraud Detection & Alert Prioritization']
  },
  {
    id: 'shap-summary', title: 'SHAP Summary Plot', category: 'Explainability / AI Governance', usedIn: ['Credit scoring', 'Fraud models', 'AML triage', 'Marketing propensity'],
    whatItIs: 'A SHAP summary plot explains which variables push model predictions up or down across observations.',
    exampleOutput: 'Top drivers: utilization_ratio, late_payments_6m, bureau_score, income_stability. Local PD moves from 4.1% baseline to 12.7%.',
    howToRead: ['Ranked variables are the strongest model drivers.', 'Color or direction shows whether high/low values increase the prediction.', 'SHAP explains model behavior, not causality.', 'Local SHAP helps explain one decision.'],
    goodResult: 'Drivers are coherent, stable, legal, explainable and aligned with business intuition.',
    badResult: 'Sensitive variables, proxies or leakage dominate the explanation.',
    redFlags: ['Proxy discrimination', 'Post-decision variables', 'No local explanation', 'Drivers changing unexpectedly over time'],
    howToImprove: ['Remove leakage', 'Review sensitive proxies', 'Document reason codes', 'Validate by segment', 'Monitor driver stability'],
    businessImpact: 'SHAP supports reason codes, risk committees, governance and responsible AI review.',
    relatedConcepts: ['Explainability', 'Reason Codes', 'Model Risk'], relatedCases: ['Credit Risk / PD Scoring', 'AI Banking Product Governance']
  }
]

export const formulas: FormulaItem[] = [
  { id: 'expected-loss', title: 'Expected Loss', area: 'Banking Risk', formula: 'EL = PD × LGD × EAD', variables: 'PD = Probability of Default; LGD = Loss Given Default; EAD = Exposure at Default.', interpretation: 'Expected Loss translates credit risk into expected monetary loss.', professionalUse: 'Pricing, provisioning, limit setting, portfolio monitoring and risk appetite.', relatedItems: ['Credit Scoring', 'Risk Bands', 'Calibration Plot'] },
  { id: 'gini', title: 'Gini from AUC', area: 'Credit Risk / ML', formula: 'Gini = 2 × AUC - 1', variables: 'AUC = Area under the ROC curve.', interpretation: 'Gini measures discriminatory power, but it does not prove probability calibration.', professionalUse: 'Model comparison and credit score validation.', relatedItems: ['ROC-AUC', 'Credit Scoring', 'Model Evaluation'] },
  { id: 'wacc', title: 'WACC / CMPC', area: 'Corporate Finance', formula: 'WACC = Ke × E/(D+E) + Kd × (1-t) × D/(D+E)', variables: 'Ke = cost of equity; Kd = cost of debt; E = equity; D = debt; t = tax rate.', interpretation: 'WACC estimates the average cost of financing a company or project.', professionalUse: 'Valuation, AI business cases, project finance and investment decisions.', relatedItems: ['CAPM', 'NPV', 'Investment Decision'] },
  { id: 'capm', title: 'CAPM', area: 'Corporate Finance', formula: 'Ke = Rf + β × (Rm - Rf)', variables: 'Rf = risk-free rate; β = market beta; Rm - Rf = market risk premium.', interpretation: 'CAPM estimates the cost of equity based on systematic market risk.', professionalUse: 'WACC, valuation, investment analytics and risk-return decisions.', relatedItems: ['WACC', 'Beta', 'Valuation'] },
  { id: 'current-ratio', title: 'Current Ratio', area: 'Financial Statements / Rating', formula: 'Current Ratio = Current Assets / Current Liabilities', variables: 'Current assets and current liabilities from the balance sheet.', interpretation: 'Measures short-term liquidity and ability to meet obligations.', professionalUse: 'SME credit rating, liquidity analysis and business banking decisions.', relatedItems: ['Rating', 'Liquidity', 'Credit Memo'] }
]

export const models: ModelItem[] = [
  { id: 'logistic-regression', title: 'Logistic Regression', family: 'Classification', objective: 'Estimate the probability of a binary event such as default, churn or fraud.', inputs: 'Clean target, explainable features, train/test split and variables available at decision time.', outputs: 'Probabilities, coefficients, odds ratios, ROC-AUC, confusion matrix and calibration plot.', interpretation: 'The probability is not the decision. The threshold depends on cost, policy and operational capacity.', goodResult: 'Calibrated probabilities, coherent drivers and stable performance across segments.', badResult: 'High accuracy with rare classes, leakage or poor calibration.', applications: ['PD baseline', 'Churn', 'Campaign response', 'Fraud baseline'] },
  { id: 'xgboost', title: 'XGBoost', family: 'Gradient Boosting', objective: 'Capture nonlinear relationships and interactions in tabular data.', inputs: 'Behavioral, transaction, customer, product, historical and macro features.', outputs: 'Probability score, feature importance, SHAP values, ROC-AUC and PR curve.', interpretation: 'Must be paired with calibration, SHAP, threshold analysis and monitoring.', goodResult: 'Improves baseline with coherent drivers and stable validation.', badResult: 'Opaque model, overfitting, poor calibration or no monitoring plan.', applications: ['Fraud scoring', 'Credit risk', 'AML triage', 'Next best offer'] },
  { id: 'arima', title: 'ARIMA', family: 'Time Series', objective: 'Forecast univariate time series using autoregression, differencing and moving-average structure.', inputs: 'Ordered time series, regular frequency, temporal split and stationarity checks.', outputs: 'p,d,q parameters, coefficients, AIC/BIC, residual diagnostics and forecast intervals.', interpretation: 'A useful ARIMA should beat a baseline and leave residuals without strong autocorrelation.', goodResult: 'Reasonable residual diagnostics, stable backtest and useful forecast intervals.', badResult: 'Random split, no stationarity check, no baseline comparison or no forecast interval.', applications: ['Default rate forecast', 'Liquidity forecast', 'Demand forecast'] },
  { id: 'kmeans', title: 'K-Means', family: 'Clustering', objective: 'Group observations by similarity when there is no target variable.', inputs: 'Scaled numeric variables with outliers reviewed.', outputs: 'Cluster labels, centroids, silhouette score and cluster profiles.', interpretation: 'Clusters are only useful when translated into business profiles and actions.', goodResult: 'Clear, stable, interpretable segments with business meaning.', badResult: 'Mathematical groups without actionable interpretation.', applications: ['Customer segmentation', 'Risk groups', 'Marketing personas'] }
]

export const businessCases: BusinessCase[] = [
  { id: 'credit-risk-pd', title: 'Credit Risk / PD Scoring', area: 'Banking Risk', businessQuestion: 'Which applicants have higher default risk and what decision should the bank make?', dataRequired: ['Loan applications', 'Customer profile', 'Bureau data', 'Payment history', 'Income', 'Product info', 'Macro variables'], workflow: ['Build SQL analytical base table', 'Run data quality checks', 'EDA by target', 'Feature engineering', 'Train logistic baseline', 'Train XGBoost challenger', 'Evaluate ROC/Gini/KS', 'Calibrate PD', 'Create risk bands', 'Explain with SHAP', 'Monitor PSI/performance'], tools: ['SQL', 'Python', 'scikit-learn', 'XGBoost', 'SHAP', 'Power BI/Tableau', 'MLOps monitoring'], outputs: ['PD Score', 'ROC-AUC', 'Gini', 'KS', 'Calibration Plot', 'SHAP Summary', 'PSI'], decision: 'Approve, manual review, reject, adjust price, adjust limit or monitor portfolio.', governance: 'Model card, validation, human oversight for edge cases, monitoring thresholds and escalation.', relatedModules: ['Credit Scoring', 'Model Evaluation', 'Calibration', 'Expected Loss', 'MLOps'] },
  { id: 'fraud-alerts', title: 'Fraud Detection & Alert Prioritization', area: 'Banking Operations', businessQuestion: 'Which transactions should be reviewed first without overwhelming analysts?', dataRequired: ['Transactions', 'Merchant', 'Device', 'Location', 'Customer history', 'Chargebacks', 'Session behavior'], workflow: ['Extract transactions', 'Build velocity features', 'Handle class imbalance', 'Train fraud model', 'Evaluate PR curve', 'Set threshold by capacity', 'Create alert queue', 'Human review', 'Feedback loop'], tools: ['SQL', 'Python', 'XGBoost', 'Precision-Recall analysis', 'Queue dashboard'], outputs: ['PR Curve', 'Confusion Matrix', 'Threshold Table', 'Alert Queue', 'False Positive Report', 'SHAP Waterfall'], decision: 'Block, allow, request authentication, manual review or escalate.', governance: 'Audit trail, human review for sensitive decisions and feedback loop from investigations.', relatedModules: ['Fraud Analytics', 'Model Evaluation', 'Operations Capacity', 'MLOps'] },
  { id: 'sme-rating', title: 'SME Rating / Ratios Scoring', area: 'Finance / Credit', businessQuestion: 'Does the company have enough solvency, liquidity and cash flow to receive credit?', dataRequired: ['Balance sheet', 'Income statement', 'Cash flow statement', 'Debt schedule', 'Sector benchmark', 'Qualitative inputs'], workflow: ['Read statements', 'Compute ratios', 'Normalize ratios', 'Bucket scores', 'Apply qualitative overlay', 'Assign rating', 'Write credit memo'], tools: ['Excel', 'Python', 'Ratio analysis', 'Binning', 'Credit memo'], outputs: ['Ratio Table', 'Bucketed Scores', 'Rating Letter', 'Credit Memo'], decision: 'Approve, price risk, require collateral, reduce exposure, reject or monitor.', governance: 'Document assumptions, ratio transformations and qualitative overlay.', relatedModules: ['Corporate Finance', 'Ratios', 'Credit Risk'] }
]

export const knowledgeChains: KnowledgeChain[] = [
  { id: 'credit-risk-chain', title: 'Credit Risk Chain', nodes: ['Banking Data', 'SQL ABT', 'Data Quality', 'Feature Engineering', 'Logistic Regression', 'XGBoost', 'Calibration', 'PD', 'Risk Bands', 'Expected Loss', 'Monitoring'], professionalUse: 'Convert data into a controlled credit decision.' },
  { id: 'output-decision-chain', title: 'Output to Decision Chain', nodes: ['Model Output', 'Interpretation', 'Red Flags', 'Business Meaning', 'Decision Policy', 'Monitoring'], professionalUse: 'Avoid treating technical metrics as decisions without business translation.' },
  { id: 'ai-governance-chain', title: 'AI Banking Governance Chain', nodes: ['AI Use Case', 'Data Readiness', 'Model Development', 'Explainability', 'Human Oversight', 'Validation', 'Model Card', 'Monitoring'], professionalUse: 'Evaluate whether an AI banking use case can be deployed responsibly.' },
  { id: 'finance-valuation-chain', title: 'Finance Valuation Chain', nodes: ['Cash Flow', 'Cost of Debt', 'Cost of Equity', 'WACC', 'NPV', 'Sensitivity', 'Investment Decision'], professionalUse: 'Turn financial analysis into a value creation decision.' }
]
