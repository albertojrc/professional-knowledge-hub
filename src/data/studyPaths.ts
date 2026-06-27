import type { StudyPath } from '../types/studyPath'

export const studyPaths: StudyPath[] = [
  {
    id: 'credit-risk-analyst',
    title: 'Credit Risk Analyst Path',
    subtitle: 'From probability models to expected loss and credit decisioning.',
    level: 'Professional',
    duration: '3-4 weeks',
    professionalOutcome: 'Understand how credit scoring, calibration, expected loss and model outputs translate into lending policy.',
    targetRole: 'Credit Risk Analyst / Banking Data Analyst',
    icon: 'CR',
    assetIds: ['logistic-regression', 'credit-risk-scoring', 'calibration-plot', 'expected-loss', 'roc-curve', 'confusion-matrix', 'xgboost'],
    milestones: [
      { id: 'risk-foundation', title: 'Risk foundations', description: 'Understand binary risk scoring and probability outputs.', assetIds: ['logistic-regression', 'credit-risk-scoring'] },
      { id: 'risk-validation', title: 'Model validation', description: 'Interpret discrimination, error trade-offs and calibration.', assetIds: ['roc-curve', 'confusion-matrix', 'calibration-plot'] },
      { id: 'risk-financial-impact', title: 'Financial impact', description: 'Convert risk estimates into expected loss and policy decisions.', assetIds: ['expected-loss', 'xgboost'] }
    ]
  },
  {
    id: 'machine-learning-banking',
    title: 'Machine Learning for Banking Path',
    subtitle: 'Models, outputs and interpretation for regulated financial use cases.',
    level: 'Advanced',
    duration: '4-5 weeks',
    professionalOutcome: 'Build a practical mental model of ML methods, graphs and governance needs for banking analytics.',
    targetRole: 'ML Analyst / Risk Analytics / Fraud Analytics',
    icon: 'ML',
    assetIds: ['decision-tree', 'random-forest', 'xgboost', 'logistic-regression', 'confusion-matrix', 'roc-curve', 'calibration-plot', 'feature-engineering'],
    milestones: [
      { id: 'ml-models', title: 'Model families', description: 'Understand interpretable models and ensemble methods.', assetIds: ['decision-tree', 'random-forest', 'xgboost', 'logistic-regression'] },
      { id: 'ml-evaluation', title: 'Evaluation outputs', description: 'Read model outputs as business decisions.', assetIds: ['confusion-matrix', 'roc-curve', 'calibration-plot'] },
      { id: 'ml-production-thinking', title: 'Production thinking', description: 'Connect features and models to real banking workflows.', assetIds: ['feature-engineering'] }
    ]
  },
  {
    id: 'data-science-workflow',
    title: 'Data Science Workflow Path',
    subtitle: 'From business question to data, features, model, output and decision.',
    level: 'Foundation',
    duration: '2-3 weeks',
    professionalOutcome: 'Understand the end-to-end structure of a serious analytics project.',
    targetRole: 'Data Analyst / Junior Data Scientist / Analytics Consultant',
    icon: 'DS',
    assetIds: ['eda', 'feature-engineering', 'linear-regression', 'logistic-regression', 'confusion-matrix', 'roc-curve'],
    milestones: [
      { id: 'workflow-diagnosis', title: 'Diagnose the data', description: 'Profile data and understand what can be trusted.', assetIds: ['eda'] },
      { id: 'workflow-features', title: 'Create signals', description: 'Transform raw data into decision-ready variables.', assetIds: ['feature-engineering'] },
      { id: 'workflow-models', title: 'Model and evaluate', description: 'Train baseline models and interpret outputs.', assetIds: ['linear-regression', 'logistic-regression', 'confusion-matrix', 'roc-curve'] }
    ]
  },
  {
    id: 'finance-strategy-analyst',
    title: 'Finance & Strategy Analyst Path',
    subtitle: 'Valuation logic, cost of capital and strategic diagnosis.',
    level: 'Intermediate',
    duration: '3 weeks',
    professionalOutcome: 'Connect financial formulas with strategy frameworks to support business decisions.',
    targetRole: 'Finance Analyst / Strategy Analyst / Corporate Banking Analyst',
    icon: 'FS',
    assetIds: ['wacc', 'capm', 'npv', 'porter-five-forces', 'swot', 'pestel'],
    milestones: [
      { id: 'finance-capital', title: 'Capital and return', description: 'Estimate required return and discount rates.', assetIds: ['capm', 'wacc'] },
      { id: 'finance-investment', title: 'Investment decisioning', description: 'Translate cash flows into value creation.', assetIds: ['npv'] },
      { id: 'strategy-context', title: 'Strategic context', description: 'Analyze company and industry environment.', assetIds: ['porter-five-forces', 'swot', 'pestel'] }
    ]
  },
  {
    id: 'management-strategy-toolkit',
    title: 'Management Strategy Toolkit',
    subtitle: 'Core frameworks for diagnosing markets, firms and strategic choices.',
    level: 'Foundation',
    duration: '2 weeks',
    professionalOutcome: 'Use strategy frameworks to structure business problems and turn diagnosis into decisions.',
    targetRole: 'Manager / Consultant / Business Analyst',
    icon: 'ST',
    assetIds: ['porter-five-forces', 'swot', 'pestel'],
    milestones: [
      { id: 'industry-view', title: 'Industry view', description: 'Analyze competitive pressure and profitability.', assetIds: ['porter-five-forces'] },
      { id: 'company-view', title: 'Company view', description: 'Organize internal and external diagnosis.', assetIds: ['swot'] },
      { id: 'macro-view', title: 'Macro view', description: 'Translate external forces into business implications.', assetIds: ['pestel'] }
    ]
  }
]
