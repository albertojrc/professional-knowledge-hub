import type { CommandCenterTrack } from '../types/moduleCommandCenter'

export const modelRefreshChallengerTrack: CommandCenterTrack = {
  id: 'bf-model-refresh-challenger-review',
  title: 'Model Refresh & Challenger Review',
  eyebrow: 'Model Governance',
  level: 'Professional',
  status: 'Governance layer',
  summary: 'Decide when a champion credit model should be monitored, recalibrated, refreshed, challenged or promoted through a controlled governance workflow.',
  whyItMatters: 'A model refresh is not just retraining. In banking, every model change needs evidence, performance review, calibration, stability, explainability, owners, rollout controls and a rollback plan.',
  primaryOutputs: ['Refresh trigger memo', 'Champion vs challenger table', 'Segment performance grid', 'Refresh decision log', 'Post-refresh monitoring plan'],
  workflow: ['Monitoring trigger', 'Performance diagnosis', 'Challenger build', 'Governance review', 'Controlled deployment', 'Post-refresh monitoring'],
  coreConcepts: ['Champion model', 'Challenger model', 'Recalibration', 'Out-of-time validation', 'Calibration drift', 'Segment stability', 'Rollback criteria'],
  formulasAndTools: ['AUC', 'Gini', 'KS', 'Calibration curve', 'Brier score', 'PSI / CSI', 'Score band bad-rate'],
  practiceMoves: ['Explain whether a model needs refresh or only monitoring', 'Compare champion and challenger evidence', 'Write a promote / hold / recalibrate decision', 'Define post-refresh monitoring thresholds'],
  connectedViews: ['Portfolio Monitoring Dashboard Blueprint', 'Alert Playbook & Remediation Workflow', 'Model Card & Monitoring Handoff', 'Credit Scoring Experiment Blueprint'],
  searchTerms: ['model refresh', 'champion challenger', 'challenger model', 'calibration drift', 'model governance', 'model retraining', 'rollback plan'],
  nextAction: 'Use this path after monitoring or alert remediation shows that the current champion model may no longer be sufficient.',
  aliases: ['model-refresh-challenger-review', 'champion-challenger-review', 'model-refresh', 'challenger-model']
}
