export interface BusinessOperatingStage {
  id: string
  title: string
  businessFunction: string
  moment: string
  whatItIs: string
  whenToUse: string
  howToUse: string[]
  dataNeeded: string[]
  analysisMethods: string[]
  outputs: string[]
  decision: string
  redFlags: string[]
}

export const businessOperatingSystem: BusinessOperatingStage[] = [
  {
    id: 'strategy-diagnosis',
    title: 'Strategy Diagnosis',
    businessFunction: 'Management / Strategy',
    moment: 'Before defining initiatives, investments or analytical projects',
    whatItIs: 'A structured diagnosis of the company position, external environment, internal capabilities and strategic problem.',
    whenToUse: 'When the business question is broad: growth, competition, market entry, product direction, transformation or performance decline.',
    howToUse: ['Clarify the strategic objective.', 'Map market forces, competitors and internal resources.', 'Identify constraints and strategic choices.', 'Translate the strategy question into measurable business hypotheses.'],
    dataNeeded: ['Market size', 'Competitor data', 'Customer segments', 'Financial performance', 'Operational KPIs'],
    analysisMethods: ['SWOT', 'Porter Five Forces', 'PESTEL', 'BCG Matrix', 'Benchmarking'],
    outputs: ['Strategic diagnosis', 'Problem tree', 'Hypothesis map', 'Priority initiatives'],
    decision: 'Choose where to compete, what to prioritize and what analytical work is worth doing.',
    redFlags: ['Framework used as decoration', 'No numbers behind strategy', 'No explicit tradeoff', 'No connection to execution']
  },
  {
    id: 'finance-decision',
    title: 'Financial Decision Analysis',
    businessFunction: 'Finance',
    moment: 'Before approving investments, credit, pricing, projects or strategic initiatives',
    whatItIs: 'The translation of business actions into cash flow, risk, return, value and financial sustainability.',
    whenToUse: 'Whenever a decision affects profitability, capital, funding, valuation, creditworthiness or investment priority.',
    howToUse: ['Collect financial statements or project assumptions.', 'Build cash flow logic.', 'Calculate ratios, WACC, NPV or IRR when relevant.', 'Run sensitivity analysis.', 'Translate numbers into recommendation.'],
    dataNeeded: ['Income statement', 'Balance sheet', 'Cash flow statement', 'Debt schedule', 'Cost of capital', 'Project assumptions'],
    analysisMethods: ['Ratio analysis', 'Cash flow bridge', 'WACC', 'CAPM', 'NPV', 'IRR', 'Sensitivity analysis'],
    outputs: ['Ratio table', 'Cash flow bridge', 'WACC table', 'NPV scenario', 'Investment memo'],
    decision: 'Approve, reject, resize, reprice, finance or redesign a business initiative.',
    redFlags: ['Profit confused with cash', 'No sensitivity analysis', 'Ignoring cost of capital', 'No risk-adjusted view']
  },
  {
    id: 'marketing-growth',
    title: 'Marketing Growth Analysis',
    businessFunction: 'Marketing',
    moment: 'Before launching, optimizing or evaluating campaigns and customer growth actions',
    whatItIs: 'A customer-centered analysis of segmentation, acquisition, conversion, retention, profitability and campaign impact.',
    whenToUse: 'When the business wants to grow customers, improve conversion, reduce churn, personalize offers or measure campaign ROI.',
    howToUse: ['Define target customer and campaign objective.', 'Segment customers using behavior and value.', 'Estimate propensity or uplift when possible.', 'Test campaign impact.', 'Measure ROI and retention impact.'],
    dataNeeded: ['Customer profile', 'Transactions', 'Campaign exposure', 'Channel data', 'Churn labels', 'Revenue and cost'],
    analysisMethods: ['Segmentation', 'CLV', 'Propensity model', 'Uplift modeling', 'A/B testing', 'Attribution analysis'],
    outputs: ['Segment profiles', 'Target list', 'Campaign dashboard', 'A/B test result', 'ROI report'],
    decision: 'Who to target, what offer to send, which channel to use and whether campaign spend is justified.',
    redFlags: ['Targeting without segments', 'No control group', 'Revenue measured without cost', 'Confusing correlation with campaign impact']
  },
  {
    id: 'operations-performance',
    title: 'Operations Performance Analysis',
    businessFunction: 'Operations',
    moment: 'When a process is slow, costly, unstable, capacity constrained or customer-impacting',
    whatItIs: 'A process-based analysis of flow, bottlenecks, capacity, quality, service levels and operational risk.',
    whenToUse: 'For queues, claims, onboarding, fraud review, call centers, loan approval, branch operations or back-office processes.',
    howToUse: ['Map the process and handoffs.', 'Measure cycle time, volume, errors and capacity.', 'Identify bottlenecks.', 'Forecast demand if needed.', 'Recommend process or staffing changes.'],
    dataNeeded: ['Process logs', 'Timestamps', 'Volumes', 'Capacity', 'Error rates', 'SLA data'],
    analysisMethods: ['Process mapping', 'Bottleneck analysis', 'Forecasting', 'Queue analysis', 'Root cause analysis'],
    outputs: ['Process map', 'Bottleneck report', 'Capacity forecast', 'SLA dashboard', 'Improvement backlog'],
    decision: 'Automate, staff, simplify, reprioritize, redesign or monitor the process.',
    redFlags: ['Optimizing one step while hurting the whole process', 'No timestamp quality', 'Ignoring demand seasonality', 'No owner for improvement']
  },
  {
    id: 'economics-context',
    title: 'Economic Context Translation',
    businessFunction: 'Economics / Banking Strategy',
    moment: 'Before forecasting, stress testing, pricing, credit policy or investment assumptions',
    whatItIs: 'The translation of macroeconomic conditions into business assumptions, risk scenarios and management decisions.',
    whenToUse: 'When inflation, interest rates, unemployment, GDP, FX, monetary policy or regulation may affect business outcomes.',
    howToUse: ['Identify relevant macro drivers.', 'Connect drivers to portfolio or business KPIs.', 'Build base, upside and downside scenarios.', 'Translate scenarios into risk, pricing or growth assumptions.'],
    dataNeeded: ['Inflation', 'Interest rates', 'GDP', 'Unemployment', 'FX', 'Sector indicators', 'Central bank data'],
    analysisMethods: ['Macro dashboard', 'Scenario analysis', 'Sensitivity analysis', 'Stress testing', 'Time series forecasting'],
    outputs: ['Macro context memo', 'Scenario table', 'Stress assumptions', 'Policy recommendation'],
    decision: 'Adjust pricing, risk appetite, forecasts, capital planning, product strategy or investment assumptions.',
    redFlags: ['Macro commentary without business link', 'One scenario only', 'No time horizon', 'No sensitivity to key drivers']
  }
]
