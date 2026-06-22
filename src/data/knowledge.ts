import type { BusinessCase, FormulaItem, KnowledgeChain, Lesson, ModelItem, NavItem, OutputAtlasItem } from '../types/knowledge'

export const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    eyebrow: 'Home',
    description: 'Professional dashboard and current learning path.',
    icon: '🏠'
  },
  {
    id: 'credit-risk',
    label: 'Credit Risk Analytics',
    eyebrow: 'Course Module',
    description: 'Credit scoring, PD, calibration, SHAP and monitoring.',
    icon: '🏦'
  },
  {
    id: 'output-atlas',
    label: 'Output Atlas',
    eyebrow: 'Interpret',
    description: 'Manual for interpreting technical and business outputs.',
    icon: '📊'
  },
  {
    id: 'formula-library',
    label: 'Formula Library',
    eyebrow: 'Reference',
    description: 'Finance, risk, ML and economics formulas.',
    icon: '🧮'
  },
  {
    id: 'model-library',
    label: 'Model Library',
    eyebrow: 'Reference',
    description: 'Models with inputs, outputs and interpretation.',
    icon: '🤖'
  },
  {
    id: 'business-cases',
    label: 'Business Cases',
    eyebrow: 'Apply',
    description: 'Professional playbooks for real banking and analytics scenarios.',
    icon: '📁'
  },
  {
    id: 'knowledge-map',
    label: 'Knowledge Map',
    eyebrow: 'Connect',
    description: 'Chains connecting concepts, models, outputs and decisions.',
    icon: '🕸️'
  },
  {
    id: 'quality-review',
    label: 'Quality Review',
    eyebrow: 'Audit',
    description: 'Coverage, gaps and next content expansion priorities.',
    icon: '✅'
  }
]

export const creditRiskLesson: Lesson = {
  id: 'credit-scoring',
  title: 'Credit Scoring',
  subtitle: 'Turning banking data into credit decisions',
  level: 'Professional',
  purpose: 'Learn how banks transform applicant, loan, bureau and behavioral data into a score or probability of default.',
  explanation:
    'Credit scoring converts customer, loan, bureau, payment and behavioral data into a risk score or probability of default. In banking, a score is not only a model output: it becomes part of credit policy, pricing, risk appetite, provisions, expected loss and portfolio monitoring.',
  professionalWorkflow: [
    'Banking Data',
    'SQL Analytical Base Table',
    'Data Quality',
    'Feature Engineering',
    'Logistic Regression Baseline',
    'XGBoost Challenger',
    'Calibration',
    'Probability of Default',
    'Risk Bands',
    'Expected Loss',
    'Monitoring'
  ],
  outputs: ['ROC-AUC', 'Gini', 'KS', 'Calibration Plot', 'SHAP', 'PSI'],
  relatedFormulas: ['Expected Loss', 'Gini from AUC'],
  relatedModels: ['Logistic Regression', 'XGBoost', 'SHAP'],
  relatedCases: ['Credit Risk / PD Scoring'],
  decisions: ['Approve', 'Manual Review', 'Reject', 'Risk-based Pricing', 'Limit Adjustment', 'Portfolio Monitoring'],
  redFlags: [
    'Variable leakage after approval',
    'High AUC but poor calibration',
    'Risk bands without decision policy',
    'No segment-level validation',
    'No drift or PSI monitoring after deployment'
  ],
  sourceCoverage: [
    'Credit Scoring & Best Practices in Banking',
    'Risk & Fraud Analytics',
    'AI in Banking',
    'Rating variables and ratios'
  ]
}

export const outputAtlas: OutputAtlasItem[] = [
  {
    id: 'calibration-plot',
    title: 'Calibration Plot',
    category: 'Credit Risk / Model Evaluation',
    usedIn: ['PD models', 'Pricing', 'Risk bands', 'Expected Loss', 'Model monitoring'],
    whatItIs:
      'A calibration plot compares predicted probabilities against observed outcomes. In credit risk, it checks whether predicted PD behaves like real default probability.',
    exampleOutput:
      'Bin predicted PD: 10%–15%\nAverage predicted PD: 12.3%\nObserved default rate: 18.7%\nInterpretation: the model underestimates risk in this band.',
    howToRead: [
      'If predicted PD is close to observed default, calibration is good.',
      'If observed default is higher, the model underestimates risk.',
      'If observed default is lower, the model overestimates risk.',
      'Read calibration by score band, product, customer segment and time period.'
    ],
    goodResult:
      'Predicted probabilities are close to observed default rates across score bands, products, vintages and customer segments.',
    badResult:
      'The model ranks clients well but gives probabilities that are too optimistic or too conservative.',
    redFlags: [
      'AUC high but calibration poor',
      'High-risk band underestimated',
      'No recalibration plan',
      'No segment-level calibration check',
      'No observed vs predicted monitoring'
    ],
    howToImprove: [
      'Isotonic calibration',
      'Platt scaling',
      'Segment-level recalibration',
      'More recent training data',
      'Monitoring observed vs predicted default'
    ],
    businessImpact:
      'Calibration affects pricing, approval, provisions, capital, risk appetite, expected loss and monitoring. A poorly calibrated model can approve too much risk or reject profitable customers unnecessarily.',
    relatedConcepts: ['PD', 'Expected Loss', 'Risk Bands', 'Monitoring', 'PSI'],
    relatedCases: ['Credit Risk / PD Scoring']
  }
]

export const formulas: FormulaItem[] = [
  {
    id: 'expected-loss',
    title: 'Expected Loss',
    area: 'Banking Risk',
    formula: 'EL = PD × LGD × EAD',
    variables: 'PD = Probability of Default; LGD = Loss Given Default; EAD = Exposure at Default.',
    interpretation: 'Expected Loss translates credit risk into expected monetary loss.',
    professionalUse: 'Pricing, provisioning, limit setting, portfolio monitoring and risk appetite.',
    relatedItems: ['Credit Scoring', 'Risk Bands', 'Calibration Plot']
  },
  {
    id: 'gini',
    title: 'Gini from AUC',
    area: 'Credit Risk / ML',
    formula: 'Gini = 2 × AUC - 1',
    variables: 'AUC = Area under the ROC curve.',
    interpretation: 'Gini measures discriminatory power, but it does not prove probability calibration.',
    professionalUse: 'Model comparison and credit score validation.',
    relatedItems: ['ROC-AUC', 'Credit Scoring', 'Model Evaluation']
  },
  {
    id: 'wacc',
    title: 'WACC / CMPC',
    area: 'Corporate Finance',
    formula: 'WACC = Ke × E/(D+E) + Kd × (1-t) × D/(D+E)',
    variables: 'Ke = cost of equity; Kd = cost of debt; E = equity; D = debt; t = tax rate.',
    interpretation: 'WACC estimates the average cost of financing a company or project.',
    professionalUse: 'Valuation, AI business cases, project finance and investment decisions.',
    relatedItems: ['CAPM', 'NPV', 'Investment Decision']
  }
]

export const models: ModelItem[] = [
  {
    id: 'logistic-regression',
    title: 'Logistic Regression',
    family: 'Classification',
    objective: 'Estimate the probability of a binary event such as default, churn or fraud.',
    inputs: 'Clean target, explainable features, train/test split and variables available at decision time.',
    outputs: 'Probabilities, coefficients, odds ratios, ROC-AUC, confusion matrix and calibration plot.',
    interpretation: 'The probability is not the decision. The threshold depends on cost, policy and operational capacity.',
    goodResult: 'Calibrated probabilities, coherent drivers and stable performance across segments.',
    badResult: 'High accuracy with rare classes, leakage or poor calibration.',
    applications: ['PD baseline', 'Churn', 'Campaign response', 'Fraud baseline']
  },
  {
    id: 'xgboost',
    title: 'XGBoost',
    family: 'Gradient Boosting',
    objective: 'Capture nonlinear relationships and interactions in tabular data.',
    inputs: 'Behavioral, transaction, customer, product, historical and macro features.',
    outputs: 'Probability score, feature importance, SHAP values, ROC-AUC and PR curve.',
    interpretation: 'Must be paired with calibration, SHAP, threshold analysis and monitoring.',
    goodResult: 'Improves baseline with coherent drivers and stable validation.',
    badResult: 'Opaque model, overfitting, poor calibration or no monitoring plan.',
    applications: ['Fraud scoring', 'Credit risk', 'AML triage', 'Next best offer']
  }
]

export const businessCases: BusinessCase[] = [
  {
    id: 'credit-risk-pd',
    title: 'Credit Risk / PD Scoring',
    area: 'Banking Risk',
    businessQuestion: 'Which applicants have higher default risk and what decision should the bank make?',
    dataRequired: ['Loan applications', 'Customer profile', 'Bureau data', 'Payment history', 'Income', 'Product info', 'Macro variables'],
    workflow: [
      'Build SQL analytical base table',
      'Run data quality checks',
      'EDA by target',
      'Feature engineering',
      'Train logistic baseline',
      'Train XGBoost challenger',
      'Evaluate ROC/Gini/KS',
      'Calibrate PD',
      'Create risk bands',
      'Explain with SHAP',
      'Monitor PSI/performance'
    ],
    tools: ['SQL', 'Python', 'scikit-learn', 'XGBoost', 'SHAP', 'Power BI/Tableau', 'MLOps monitoring'],
    outputs: ['PD Score', 'ROC-AUC', 'Gini', 'KS', 'Calibration Plot', 'SHAP Summary', 'PSI'],
    decision: 'Approve, manual review, reject, adjust price, adjust limit or monitor portfolio.',
    governance: 'Model card, validation, human oversight for edge cases, monitoring thresholds and escalation.',
    relatedModules: ['Credit Scoring', 'Model Evaluation', 'Calibration', 'Expected Loss', 'MLOps']
  }
]

export const knowledgeChains: KnowledgeChain[] = [
  {
    id: 'credit-risk-chain',
    title: 'Credit Risk Chain',
    nodes: ['Banking Data', 'SQL ABT', 'Data Quality', 'Feature Engineering', 'Logistic Regression', 'XGBoost', 'Calibration', 'PD', 'Risk Bands', 'Expected Loss', 'Monitoring'],
    professionalUse: 'Convert data into a controlled credit decision.'
  },
  {
    id: 'output-decision-chain',
    title: 'Output to Decision Chain',
    nodes: ['Model Output', 'Interpretation', 'Red Flags', 'Business Meaning', 'Decision Policy', 'Monitoring'],
    professionalUse: 'Avoid treating technical metrics as decisions without business translation.'
  }
]
