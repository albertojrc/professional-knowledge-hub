import type { StudyPath } from '../types/studyPath'

export const studyPaths: StudyPath[] = [
  {
    id: 'credit-risk-analyst',
    title: 'Credit Risk Analyst Path',
    subtitle: 'From probability models to expected loss and credit decisioning.',
    level: 'Professional',
    duration: '4-5 weeks',
    professionalOutcome: 'Understand how credit scoring, calibration, PD, LGD, EAD, expected loss and model outputs translate into lending policy.',
    targetRole: 'Credit Risk Analyst / Banking Data Analyst',
    icon: 'CR',
    assetIds: ['data-quality-report', 'analytical-base-table', 'logistic-regression', 'credit-risk-scoring', 'pd', 'lgd', 'ead', 'expected-loss', 'roc-curve', 'precision-recall-curve', 'confusion-matrix', 'calibration-plot', 'ks-statistic', 'xgboost'],
    milestones: [
      { id: 'risk-data-foundation', title: 'Risk data foundation', description: 'Prepare trustworthy risk modeling data.', assetIds: ['data-quality-report', 'analytical-base-table'] },
      { id: 'risk-foundation', title: 'Risk foundations', description: 'Understand binary risk scoring and probability outputs.', assetIds: ['logistic-regression', 'credit-risk-scoring', 'pd'] },
      { id: 'risk-components', title: 'Credit loss components', description: 'Connect PD, LGD and EAD to expected loss.', assetIds: ['pd', 'lgd', 'ead', 'expected-loss'] },
      { id: 'risk-validation', title: 'Model validation', description: 'Interpret discrimination, error trade-offs, calibration and score separation.', assetIds: ['roc-curve', 'precision-recall-curve', 'confusion-matrix', 'calibration-plot', 'ks-statistic'] },
      { id: 'risk-advanced-models', title: 'Advanced scoring', description: 'Use advanced tabular models with governance and interpretation.', assetIds: ['xgboost'] }
    ]
  },
  {
    id: 'machine-learning-banking',
    title: 'Machine Learning for Banking Path',
    subtitle: 'Models, outputs and interpretation for regulated financial use cases.',
    level: 'Advanced',
    duration: '5-6 weeks',
    professionalOutcome: 'Build a practical mental model of ML methods, validation, monitoring and governance needs for banking analytics.',
    targetRole: 'ML Analyst / Risk Analytics / Fraud Analytics',
    icon: 'ML',
    assetIds: ['data-quality-report', 'analytical-base-table', 'train-test-split', 'cross-validation', 'data-leakage', 'decision-tree', 'random-forest', 'xgboost', 'logistic-regression', 'confusion-matrix', 'roc-curve', 'precision-recall-curve', 'calibration-plot', 'feature-engineering', 'mlops-monitoring'],
    milestones: [
      { id: 'ml-data-foundation', title: 'Data foundation', description: 'Create trustworthy model-ready data.', assetIds: ['data-quality-report', 'analytical-base-table'] },
      { id: 'ml-validation-foundation', title: 'Validation foundation', description: 'Build model evaluation discipline before training advanced models.', assetIds: ['train-test-split', 'cross-validation', 'data-leakage'] },
      { id: 'ml-models', title: 'Model families', description: 'Understand interpretable models and ensemble methods.', assetIds: ['decision-tree', 'random-forest', 'xgboost', 'logistic-regression'] },
      { id: 'ml-evaluation', title: 'Evaluation outputs', description: 'Read model outputs as business decisions.', assetIds: ['confusion-matrix', 'roc-curve', 'precision-recall-curve', 'calibration-plot'] },
      { id: 'ml-production-thinking', title: 'Production thinking', description: 'Connect features, models and monitoring to real banking workflows.', assetIds: ['feature-engineering', 'mlops-monitoring'] }
    ]
  },
  {
    id: 'data-science-workflow',
    title: 'Data Science Workflow Path',
    subtitle: 'From business question to data, features, model, output and decision.',
    level: 'Foundation',
    duration: '4-5 weeks',
    professionalOutcome: 'Understand the end-to-end structure of a serious analytics project, including SQL, validation and experimentation.',
    targetRole: 'Data Analyst / Junior Data Scientist / Analytics Consultant',
    icon: 'DS',
    assetIds: ['sql-joins', 'data-quality-report', 'eda', 'analytical-base-table', 'feature-engineering', 'train-test-split', 'cross-validation', 'data-leakage', 'linear-regression', 'logistic-regression', 'confusion-matrix', 'roc-curve', 'precision-recall-curve', 'ab-testing'],
    milestones: [
      { id: 'workflow-sql-data', title: 'Build the data foundation', description: 'Connect source tables and check quality before analysis.', assetIds: ['sql-joins', 'data-quality-report', 'analytical-base-table'] },
      { id: 'workflow-diagnosis', title: 'Diagnose the data', description: 'Profile data and understand what can be trusted.', assetIds: ['eda'] },
      { id: 'workflow-features', title: 'Create signals', description: 'Transform raw data into decision-ready variables.', assetIds: ['feature-engineering', 'data-leakage'] },
      { id: 'workflow-validation', title: 'Validate properly', description: 'Split, validate and compare models honestly.', assetIds: ['train-test-split', 'cross-validation'] },
      { id: 'workflow-models', title: 'Model and evaluate', description: 'Train baseline models and interpret outputs.', assetIds: ['linear-regression', 'logistic-regression', 'confusion-matrix', 'roc-curve', 'precision-recall-curve'] },
      { id: 'workflow-experiments', title: 'Experiment and decide', description: 'Use experiments to estimate business impact.', assetIds: ['ab-testing'] }
    ]
  },
  {
    id: 'finance-strategy-analyst',
    title: 'Finance & Strategy Analyst Path',
    subtitle: 'Valuation logic, financial analysis and strategic diagnosis.',
    level: 'Intermediate',
    duration: '4-5 weeks',
    professionalOutcome: 'Connect financial formulas, cash flow analysis and strategy frameworks to support business decisions and client analysis.',
    targetRole: 'Finance Analyst / Strategy Analyst / Corporate Banking Analyst',
    icon: 'FS',
    assetIds: ['financial-ratios', 'cash-flow-analysis', 'wacc', 'capm', 'npv', 'porter-five-forces', 'swot', 'pestel', 'business-model-canvas'],
    milestones: [
      { id: 'finance-analysis-foundation', title: 'Financial diagnosis', description: 'Read business health through ratios and cash flow.', assetIds: ['financial-ratios', 'cash-flow-analysis'] },
      { id: 'finance-capital', title: 'Capital and return', description: 'Estimate required return and discount rates.', assetIds: ['capm', 'wacc'] },
      { id: 'finance-investment', title: 'Investment decisioning', description: 'Translate cash flows into value creation.', assetIds: ['npv'] },
      { id: 'strategy-context', title: 'Strategic context', description: 'Analyze company, industry and business model environment.', assetIds: ['porter-five-forces', 'swot', 'pestel', 'business-model-canvas'] }
    ]
  },
  {
    id: 'management-strategy-toolkit',
    title: 'Management Strategy Toolkit',
    subtitle: 'Core frameworks for diagnosing markets, firms and strategic choices.',
    level: 'Foundation',
    duration: '2-3 weeks',
    professionalOutcome: 'Use strategy frameworks to structure business problems and turn diagnosis into decisions.',
    targetRole: 'Manager / Consultant / Business Analyst',
    icon: 'ST',
    assetIds: ['financial-ratios', 'porter-five-forces', 'swot', 'pestel', 'business-model-canvas', 'ab-testing'],
    milestones: [
      { id: 'industry-view', title: 'Industry view', description: 'Analyze competitive pressure and profitability.', assetIds: ['porter-five-forces'] },
      { id: 'company-view', title: 'Company view', description: 'Organize internal, financial and external diagnosis.', assetIds: ['swot', 'business-model-canvas', 'financial-ratios'] },
      { id: 'macro-view', title: 'Macro view', description: 'Translate external forces into business implications.', assetIds: ['pestel'] },
      { id: 'test-decisions', title: 'Test decisions', description: 'Use experiments to validate strategic and marketing changes.', assetIds: ['ab-testing'] }
    ]
  }
]
