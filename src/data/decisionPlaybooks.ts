export interface DecisionPlaybook {
  id: string
  title: string
  area: string
  triggerOutput: string
  whatItMeans: string
  decisionQuestion: string
  possibleActions: string[]
  decisionRules: string[]
  evidenceNeeded: string[]
  risks: string[]
  followUpMonitoring: string[]
}

export const decisionPlaybooks: DecisionPlaybook[] = [
  {
    id: 'credit-calibration-decision',
    title: 'From Calibration Plot to Credit Policy',
    area: 'Credit Risk',
    triggerOutput: 'Calibration Plot shows predicted PD is lower than observed default in high-risk bands.',
    whatItMeans: 'The model ranks clients but underestimates real risk. Decisions based on raw PD may approve too much risk or underprice loans.',
    decisionQuestion: 'Should the bank recalibrate the model, change risk bands, adjust pricing or restrict approvals?',
    possibleActions: ['Recalibrate PD', 'Adjust risk bands', 'Increase price for underestimated bands', 'Move band to manual review', 'Retrain model with recent data'],
    decisionRules: ['If observed default is materially higher than predicted PD, do not use raw PD for pricing.', 'If miscalibration is segment-specific, recalibrate by segment.', 'If calibration drift appears over time, trigger monitoring review.'],
    evidenceNeeded: ['Observed vs predicted by band', 'Segment calibration', 'Vintage analysis', 'Default trend', 'Approval rate impact'],
    risks: ['Expected loss understated', 'Capital/provisioning distortion', 'Wrong credit pricing', 'Regulatory/model risk concern'],
    followUpMonitoring: ['Monthly observed vs predicted default', 'PSI', 'Risk band distribution', 'Portfolio default rate']
  },
  {
    id: 'fraud-pr-decision',
    title: 'From Precision-Recall Curve to Fraud Operations',
    area: 'Fraud / Operations',
    triggerOutput: 'Precision-recall curve shows high recall only when alert volume becomes too large for analysts.',
    whatItMeans: 'The model can catch more fraud, but the operation may not be able to review all alerts without creating backlog and false positive friction.',
    decisionQuestion: 'Which threshold should be used given fraud losses, false positives and analyst capacity?',
    possibleActions: ['Set threshold by capacity', 'Create tiered queue', 'Use step-up authentication', 'Review only top-risk alerts', 'Improve features and feedback loop'],
    decisionRules: ['Threshold must be tied to analyst capacity.', 'Top-K precision matters more than global ROC in rare fraud cases.', 'False positives must be measured as customer friction and operational cost.'],
    evidenceNeeded: ['Precision at top K', 'Recall at top K', 'Daily alert volume', 'Analyst capacity', 'False positive cost', 'Fraud loss avoided'],
    risks: ['Operational overload', 'Customer friction', 'Missed fraud', 'Poor analyst trust in model'],
    followUpMonitoring: ['Alert volume per day', 'Investigation outcomes', 'False positive rate', 'Fraud loss trend', 'Analyst SLA']
  },
  {
    id: 'cash-flow-credit-decision',
    title: 'From Cash Flow Bridge to Credit Approval',
    area: 'Finance / Credit',
    triggerOutput: 'Cash flow bridge shows positive net income but negative free cash flow after working capital and capex.',
    whatItMeans: 'The company may appear profitable, but it does not generate enough cash to comfortably service debt.',
    decisionQuestion: 'Should the bank approve the loan, require collateral, reduce amount, adjust tenor or reject?',
    possibleActions: ['Reduce exposure', 'Require collateral', 'Adjust repayment schedule', 'Request updated working capital plan', 'Reject if debt service is not covered'],
    decisionRules: ['Do not approve based on accounting profit alone.', 'Debt service must be compared with sustainable cash generation.', 'Working capital pressure must be analyzed before setting repayment terms.'],
    evidenceNeeded: ['Operating cash flow', 'Free cash flow', 'Debt service schedule', 'Working capital trend', 'Capex needs', 'Sector benchmark'],
    risks: ['Liquidity stress', 'Covenant breach', 'Default risk', 'Overstated repayment capacity'],
    followUpMonitoring: ['Quarterly cash flow', 'Working capital days', 'Debt service coverage', 'Covenant compliance']
  },
  {
    id: 'marketing-ab-test-decision',
    title: 'From A/B Test to Marketing Budget Decision',
    area: 'Marketing Analytics',
    triggerOutput: 'A/B test shows conversion lift, but ROI is unclear after campaign cost.',
    whatItMeans: 'The campaign may increase conversion but still destroy value if incremental revenue does not exceed cost.',
    decisionQuestion: 'Should the campaign be scaled, redesigned, targeted only to certain segments or stopped?',
    possibleActions: ['Scale campaign', 'Limit to profitable segment', 'Change offer', 'Reduce channel cost', 'Stop campaign'],
    decisionRules: ['Do not scale conversion lift without incremental profit.', 'Segment-level ROI should drive targeting.', 'A campaign without a control group should not be treated as causal evidence.'],
    evidenceNeeded: ['Treatment vs control conversion', 'Incremental revenue', 'Campaign cost', 'Margin', 'Segment ROI', 'Retention impact'],
    risks: ['Budget waste', 'Wrong attribution', 'Short-term lift but poor retention', 'Over-targeting low-value customers'],
    followUpMonitoring: ['Incremental ROI', 'Retention by cohort', 'Cost per acquisition', 'Customer lifetime value']
  }
]
