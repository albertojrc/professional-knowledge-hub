export interface ScenarioPhase {
  id: string
  title: string
  moment: string
  whatHappens: string
  tools: string[]
  outputs: string[]
  decisions: string[]
  redFlags: string[]
}

export interface ProfessionalScenario {
  id: string
  title: string
  area: string
  businessProblem: string
  finalDecision: string
  phases: ScenarioPhase[]
}

export const professionalScenarios: ProfessionalScenario[] = [
  {
    id: 'credit-risk-end-to-end',
    title: 'Credit Risk End-to-End Project',
    area: 'Banking Risk',
    businessProblem: 'The bank needs to decide which applicants should be approved, rejected or sent to manual review while controlling expected loss.',
    finalDecision: 'Approve, reject, manual review, assign risk-based price, adjust limit or monitor portfolio segment.',
    phases: [
      {
        id: 'credit-business-question',
        title: 'Define the credit decision',
        moment: 'Before data extraction',
        whatHappens: 'Clarify whether the project is about application approval, portfolio monitoring, limit management, pricing or early warning.',
        tools: ['Business problem framing', 'Credit policy review', 'Risk appetite statement'],
        outputs: ['Credit decision map', 'Target definition', 'Success metric'],
        decisions: ['Define default event', 'Define observation window', 'Define performance window'],
        redFlags: ['No default definition', 'No decision owner', 'No risk appetite link']
      },
      {
        id: 'credit-sql-abt',
        title: 'Build SQL analytical base table',
        moment: 'After scope and before modeling',
        whatHappens: 'Create one row per applicant, loan or customer with features available before the decision and a target observed after the decision.',
        tools: ['SQL joins', 'CTEs', 'window functions', 'aggregation logic'],
        outputs: ['Analytical base table', 'Feature dictionary', 'Join validation report'],
        decisions: ['Keep only decision-time variables', 'Aggregate behavior windows', 'Validate entity grain'],
        redFlags: ['Future leakage', 'Join explosion', 'Duplicate customer-loan rows']
      },
      {
        id: 'credit-quality-eda',
        title: 'Data quality and EDA',
        moment: 'Before feature engineering and model training',
        whatHappens: 'Check missingness, outliers, target rate, segment differences and potential leakage.',
        tools: ['Python', 'pandas', 'EDA notebook', 'data quality checklist'],
        outputs: ['Data quality report', 'Target rate analysis', 'Segment profiling'],
        decisions: ['Clean variables', 'Remove leakage', 'Select stable features'],
        redFlags: ['Missingness by target ignored', 'Outliers removed without business review', 'No segment analysis']
      },
      {
        id: 'credit-model',
        title: 'Train and compare models',
        moment: 'After features are ready',
        whatHappens: 'Train a logistic regression baseline and an advanced challenger model such as XGBoost.',
        tools: ['scikit-learn', 'Logistic Regression', 'XGBoost', 'train/test split'],
        outputs: ['ROC-AUC', 'Gini', 'KS', 'classification report'],
        decisions: ['Select baseline/challenger', 'Compare performance and interpretability', 'Decide threshold strategy'],
        redFlags: ['Only accuracy reported', 'No baseline model', 'No temporal validation']
      },
      {
        id: 'credit-interpretation',
        title: 'Interpret outputs and translate to credit policy',
        moment: 'After evaluation and before deployment',
        whatHappens: 'Translate model outputs into risk bands, expected loss, reason codes and policy recommendations.',
        tools: ['Calibration plot', 'SHAP', 'Expected Loss formula', 'risk banding'],
        outputs: ['PD bands', 'Expected loss table', 'SHAP reason codes', 'credit memo'],
        decisions: ['Approve/reject bands', 'Manual review zone', 'Pricing by risk', 'Monitoring plan'],
        redFlags: ['High AUC but poor calibration', 'No business action per band', 'No explainability for adverse decisions']
      },
      {
        id: 'credit-monitoring',
        title: 'Monitor portfolio and model behavior',
        moment: 'After deployment or dashboard launch',
        whatHappens: 'Track population drift, calibration drift, portfolio default rate and policy impact over time.',
        tools: ['PSI', 'monitoring dashboard', 'backtesting', 'model card'],
        outputs: ['Monitoring dashboard', 'drift report', 'recalibration trigger'],
        decisions: ['Retrain', 'recalibrate', 'adjust policy', 'escalate to risk committee'],
        redFlags: ['No owner', 'No retraining threshold', 'Model used after population changes']
      }
    ]
  },
  {
    id: 'fraud-alert-end-to-end',
    title: 'Fraud Alert Prioritization Project',
    area: 'Fraud / Operations',
    businessProblem: 'The bank receives too many transaction alerts and needs to prioritize the riskiest cases without overwhelming analysts.',
    finalDecision: 'Block, allow, step-up authentication, manual review or escalation.',
    phases: [
      {
        id: 'fraud-problem',
        title: 'Define fraud operation constraints',
        moment: 'Before data extraction',
        whatHappens: 'Clarify fraud definition, analyst capacity, acceptable false positives and operational response time.',
        tools: ['Operations capacity analysis', 'fraud policy review'],
        outputs: ['Fraud decision map', 'capacity constraint', 'target definition'],
        decisions: ['Define alert volume limit', 'Define fraud label', 'Define review SLA'],
        redFlags: ['No analyst capacity limit', 'Unreliable labels', 'No cost of false positives']
      },
      {
        id: 'fraud-features',
        title: 'Create transaction behavior features',
        moment: 'After transaction extraction',
        whatHappens: 'Engineer velocity, amount, merchant, device, geo and customer history features.',
        tools: ['SQL', 'Python', 'window functions', 'feature engineering'],
        outputs: ['Transaction feature table', 'velocity features', 'device/location flags'],
        decisions: ['Choose real-time vs batch features', 'Handle rare categories', 'Define time windows'],
        redFlags: ['Features unavailable in real time', 'Label leakage', 'Ignoring customer baseline behavior']
      },
      {
        id: 'fraud-evaluation',
        title: 'Evaluate rare-event model',
        moment: 'After model training',
        whatHappens: 'Evaluate with precision-recall, top-K capture, threshold tables and operational capacity.',
        tools: ['PR curve', 'threshold table', 'confusion matrix', 'XGBoost'],
        outputs: ['Precision-recall curve', 'top-K fraud capture', 'alert volume table'],
        decisions: ['Choose threshold', 'Define alert queue priority', 'Balance false positives and missed fraud'],
        redFlags: ['Using ROC only', 'No threshold tied to capacity', 'No feedback loop']
      },
      {
        id: 'fraud-operations',
        title: 'Deploy alert workflow',
        moment: 'After threshold selection',
        whatHappens: 'Turn model scores into an operational queue with analyst feedback and escalation paths.',
        tools: ['Queue dashboard', 'case management', 'feedback labels'],
        outputs: ['Alert queue', 'analyst dashboard', 'feedback table'],
        decisions: ['Block/allow/review', 'escalation rules', 'feedback loop design'],
        redFlags: ['No investigation outcome captured', 'No audit trail', 'No SLA monitoring']
      }
    ]
  },
  {
    id: 'marketing-campaign-end-to-end',
    title: 'Marketing Campaign Analytics Project',
    area: 'Marketing Analytics',
    businessProblem: 'The business wants to target the right customers, personalize offers and measure campaign impact.',
    finalDecision: 'Who to target, what offer to send, which channel to use and whether the campaign creates incremental value.',
    phases: [
      {
        id: 'marketing-objective',
        title: 'Define campaign objective',
        moment: 'Before segmentation or modeling',
        whatHappens: 'Clarify whether the goal is acquisition, activation, cross-sell, retention, conversion or revenue growth.',
        tools: ['Marketing brief', 'customer journey map', 'KPI tree'],
        outputs: ['Campaign objective', 'target KPI', 'customer population'],
        decisions: ['Define audience', 'Define success metric', 'Define campaign window'],
        redFlags: ['No control group', 'Vague target audience', 'No incremental impact metric']
      },
      {
        id: 'marketing-segmentation',
        title: 'Segment customers',
        moment: 'Before offer personalization',
        whatHappens: 'Group customers by behavior, value, needs or predicted response.',
        tools: ['RFM', 'KMeans', 'CLV', 'behavioral profiling'],
        outputs: ['Segment profiles', 'target segments', 'persona cards'],
        decisions: ['Select target segment', 'Design offer by segment', 'Exclude low-fit customers'],
        redFlags: ['Segments without action', 'Too many segments', 'No profitability view']
      },
      {
        id: 'marketing-test',
        title: 'Measure campaign impact',
        moment: 'During and after campaign launch',
        whatHappens: 'Compare treated customers with a control group to estimate incremental lift and ROI.',
        tools: ['A/B testing', 'uplift analysis', 'ROI calculation', 'dashboard'],
        outputs: ['A/B test result', 'lift table', 'campaign ROI report'],
        decisions: ['Scale campaign', 'stop campaign', 'change offer', 'reallocate budget'],
        redFlags: ['No control group', 'Attribution confusion', 'Revenue without cost']
      }
    ]
  }
]
