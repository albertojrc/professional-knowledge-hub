export interface OperatingSystemStage {
  id: string
  title: string
  moment: string
  whatItIs: string
  whenToUse: string
  howToUse: string[]
  whatToAnalyze: string[]
  outputs: string[]
  redFlags: string[]
  nextStage: string
}

export const dataScienceOperatingSystem: OperatingSystemStage[] = [
  {
    id: 'business-question',
    title: 'Business Question Definition',
    moment: 'Before touching data',
    whatItIs: 'The translation of a business problem into a precise analytical question, target decision and success metric.',
    whenToUse: 'At the very beginning of any project, analysis, model, dashboard or business case.',
    howToUse: [
      'Define the decision that must be made.',
      'Identify the stakeholder and operational context.',
      'Write the target question in measurable language.',
      'Define what good output would change in the business.'
    ],
    whatToAnalyze: ['Decision owner', 'Business impact', 'Target population', 'Time horizon', 'Success metric'],
    outputs: ['Problem statement', 'Decision map', 'Success metric', 'Project scope'],
    redFlags: ['Starting with a model instead of a decision', 'No stakeholder', 'No measurable target', 'Vague business value'],
    nextStage: 'Data Source Mapping'
  },
  {
    id: 'data-sources',
    title: 'Data Source Mapping',
    moment: 'Before extraction',
    whatItIs: 'The inventory of systems, tables, documents or APIs that contain the information needed to answer the business question.',
    whenToUse: 'After the business question is clear and before SQL, Python, BI or modeling work begins.',
    howToUse: [
      'List source systems such as core banking, CRM, bureau, transactions, ERP or external data.',
      'Identify owners, refresh frequency and data access restrictions.',
      'Define the entity: customer, account, loan, transaction, company or time period.',
      'Document fields that may become features or KPIs.'
    ],
    whatToAnalyze: ['Source reliability', 'Granularity', 'Refresh frequency', 'Legal access', 'Sensitive fields'],
    outputs: ['Source map', 'Data access checklist', 'Entity definition', 'Initial data dictionary'],
    redFlags: ['No data owner', 'Unclear granularity', 'Sensitive data without controls', 'Mixing entities in one dataset'],
    nextStage: 'SQL Analytical Base Table'
  },
  {
    id: 'sql-abt',
    title: 'SQL Analytical Base Table',
    moment: 'Extraction and dataset construction',
    whatItIs: 'A clean project-ready table where each row represents the entity being analyzed and each column represents a validated feature, KPI or target.',
    whenToUse: 'When the required data is stored in relational databases or when several tables must be joined into one analytical dataset.',
    howToUse: [
      'Select the correct base entity and grain.',
      'Join customer, product, transaction and outcome tables carefully.',
      'Separate observation window and performance window.',
      'Aggregate historical behavior into features.',
      'Validate row counts after each join.'
    ],
    whatToAnalyze: ['Duplicate keys', 'Join explosion', 'Observation window', 'Target window', 'Row count reconciliation'],
    outputs: ['ABT table', 'SQL query', 'Feature table', 'Join validation report'],
    redFlags: ['Duplicates after joins', 'Future information leakage', 'Wrong time window', 'No row count validation'],
    nextStage: 'Data Quality Review'
  },
  {
    id: 'data-quality',
    title: 'Data Quality Review',
    moment: 'Immediately after extraction and before EDA/modeling',
    whatItIs: 'A structured review of completeness, consistency, validity, uniqueness, leakage and business plausibility.',
    whenToUse: 'Always before building charts, dashboards, statistics or models.',
    howToUse: [
      'Check missing values by column and segment.',
      'Validate IDs, dates, categories and numeric ranges.',
      'Detect duplicates and inconsistent records.',
      'Check target leakage and future variables.',
      'Document quality decisions.'
    ],
    whatToAnalyze: ['Missingness', 'Duplicates', 'Invalid dates', 'Outliers', 'Leakage', 'Business plausibility'],
    outputs: ['Data quality report', 'Missingness table', 'Leakage checklist', 'Cleaning plan'],
    redFlags: ['Skipping quality checks', 'Cleaning without documenting', 'Dropping outliers without business review', 'Using future variables'],
    nextStage: 'EDA and Statistical Profiling'
  },
  {
    id: 'eda',
    title: 'EDA and Statistical Profiling',
    moment: 'After data quality and before feature engineering/modeling',
    whatItIs: 'Exploratory analysis that reveals distributions, relationships, outliers, segment differences and target behavior.',
    whenToUse: 'Before deciding features, models, transformations, dashboards or hypotheses.',
    howToUse: [
      'Profile numeric and categorical variables.',
      'Plot distributions and outliers.',
      'Compare variables by target or business segment.',
      'Review correlations and potential multicollinearity.',
      'Summarize insight before modeling.'
    ],
    whatToAnalyze: ['Distribution shape', 'Outliers', 'Correlation', 'Target separation', 'Segment behavior'],
    outputs: ['EDA notebook', 'Histogram', 'Boxplot', 'Correlation matrix', 'Insight summary'],
    redFlags: ['EDA without business interpretation', 'Ignoring target split', 'Overtrusting correlation', 'No segment view'],
    nextStage: 'Feature Engineering'
  },
  {
    id: 'feature-engineering',
    title: 'Feature Engineering',
    moment: 'After EDA and before model training',
    whatItIs: 'The process of transforming raw variables into predictive, explainable and decision-useful features.',
    whenToUse: 'When raw data does not directly represent the behavior, risk, value or process you want to model.',
    howToUse: [
      'Create behavioral aggregations over valid time windows.',
      'Encode categories carefully.',
      'Scale variables when the model requires it.',
      'Create ratios, trends, recency and frequency variables.',
      'Document every feature with business meaning.'
    ],
    whatToAnalyze: ['Predictive signal', 'Business logic', 'Leakage risk', 'Feature stability', 'Interpretability'],
    outputs: ['Feature table', 'Feature dictionary', 'Feature importance baseline', 'Transformation pipeline'],
    redFlags: ['Feature has no business meaning', 'Leakage', 'Too many unstable features', 'No feature dictionary'],
    nextStage: 'Model Selection'
  },
  {
    id: 'model-selection',
    title: 'Model Selection',
    moment: 'After features are ready and before training',
    whatItIs: 'The choice of analytical method based on problem type, data structure, interpretability needs and business constraints.',
    whenToUse: 'When deciding whether to use classification, regression, clustering, forecasting, optimization or a dashboard-only analysis.',
    howToUse: [
      'Identify the problem type: predict, explain, segment, forecast or optimize.',
      'Start with a simple baseline.',
      'Choose advanced models only when they add value.',
      'Consider interpretability, governance and deployment constraints.',
      'Define evaluation metrics before training.'
    ],
    whatToAnalyze: ['Target type', 'Data size', 'Class imbalance', 'Interpretability requirement', 'Cost of errors'],
    outputs: ['Modeling plan', 'Baseline model', 'Metric definition', 'Validation strategy'],
    redFlags: ['Choosing XGBoost by default', 'No baseline', 'No metric linked to business cost', 'Ignoring governance'],
    nextStage: 'Model Training and Evaluation'
  },
  {
    id: 'evaluation',
    title: 'Model Training and Evaluation',
    moment: 'After model selection and during experimentation',
    whatItIs: 'The process of training candidate models and interpreting whether they are technically valid and business useful.',
    whenToUse: 'When a predictive or analytical model is needed to support a decision.',
    howToUse: [
      'Train baseline and challenger models.',
      'Use the correct split: temporal for time series, stratified for classification when needed.',
      'Evaluate using metrics tied to business cost.',
      'Compare segments, not only global metrics.',
      'Document model tradeoffs.'
    ],
    whatToAnalyze: ['ROC-AUC', 'Precision/Recall', 'Calibration', 'Residuals', 'Backtest error', 'Segment performance'],
    outputs: ['Model report', 'Classification report', 'Calibration plot', 'SHAP summary', 'Residual diagnostics'],
    redFlags: ['Accuracy-only evaluation', 'Random split for time series', 'No threshold analysis', 'No segment validation'],
    nextStage: 'Interpretation and Decision Translation'
  },
  {
    id: 'interpretation',
    title: 'Interpretation and Decision Translation',
    moment: 'After evaluation and before deployment/dashboard decision',
    whatItIs: 'The translation of technical outputs into business meaning, recommended action and risk controls.',
    whenToUse: 'Whenever outputs need to influence a decision, presentation, dashboard, committee or operating process.',
    howToUse: [
      'Explain what the model or analysis found.',
      'Translate metrics into decision consequences.',
      'Identify false positive and false negative costs.',
      'Prepare red flags and limitations.',
      'Recommend decision policy or next action.'
    ],
    whatToAnalyze: ['Business tradeoff', 'Decision threshold', 'Explainability', 'Fairness', 'Risk appetite'],
    outputs: ['Executive insight', 'Decision memo', 'Threshold table', 'Reason codes', 'Risk notes'],
    redFlags: ['Technical metrics without decision', 'No limitation section', 'No business owner', 'No explainability'],
    nextStage: 'Dashboard or Deployment'
  },
  {
    id: 'dashboard-deployment',
    title: 'Dashboard or Deployment',
    moment: 'After interpretation and decision approval',
    whatItIs: 'The delivery layer where insights become dashboards, scoring tools, APIs, reports or operational workflows.',
    whenToUse: 'When the analysis must be used repeatedly by stakeholders or operational teams.',
    howToUse: [
      'Choose dashboard, batch scoring, API or app depending on the use case.',
      'Define user workflow and decision moments.',
      'Publish clear KPIs, explanations and filters.',
      'Set access controls and refresh logic.',
      'Create documentation and ownership.'
    ],
    whatToAnalyze: ['User adoption', 'Refresh frequency', 'KPI definitions', 'Latency', 'Access control'],
    outputs: ['Dashboard', 'Scoring file', 'API endpoint', 'Model card', 'User guide'],
    redFlags: ['Dashboard without decision', 'No refresh control', 'No owner', 'No documentation'],
    nextStage: 'Monitoring and Improvement'
  },
  {
    id: 'monitoring',
    title: 'Monitoring and Improvement',
    moment: 'After deployment and during production use',
    whatItIs: 'The continuous review of data drift, model performance, business impact, user adoption and risk events.',
    whenToUse: 'After any model, dashboard or analytical system is deployed or used repeatedly.',
    howToUse: [
      'Track performance metrics over time.',
      'Monitor population drift and data quality changes.',
      'Compare predicted vs observed outcomes.',
      'Collect user and operational feedback.',
      'Trigger recalibration, retraining or redesign when needed.'
    ],
    whatToAnalyze: ['PSI', 'Performance decay', 'Calibration drift', 'Business KPI impact', 'User feedback'],
    outputs: ['Monitoring dashboard', 'Drift report', 'Retraining trigger', 'Incident log', 'Improvement backlog'],
    redFlags: ['No monitoring after launch', 'No owner', 'No retraining rule', 'Model silently degrades'],
    nextStage: 'Back to Business Question if business context changes'
  }
]
