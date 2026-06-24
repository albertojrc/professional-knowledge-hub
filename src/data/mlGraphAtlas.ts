export interface MlGraphAtlasItem {
  id: string
  title: string
  category: string
  chartType: 'roc' | 'pr' | 'calibration' | 'confusion' | 'feature-importance' | 'shap' | 'residual' | 'actual-predicted' | 'elbow' | 'cluster' | 'forecast' | 'learning-curve'
  whatItIs: string
  whenToUse: string[]
  howToBuild: string[]
  howToUse: string[]
  howToInterpret: string[]
  goodSignal: string
  badSignal: string
  relatedModels: string[]
}

export const mlGraphAtlas: MlGraphAtlasItem[] = [
  {
    id: 'roc-curve',
    title: 'ROC Curve',
    category: 'Classification Evaluation',
    chartType: 'roc',
    whatItIs: 'Compares true positive rate against false positive rate across many thresholds.',
    whenToUse: ['Binary classification', 'Model comparison', 'Ranking quality review'],
    howToBuild: ['Use predicted probabilities', 'Calculate TPR and FPR across thresholds', 'Plot FPR on x-axis and TPR on y-axis'],
    howToUse: ['Compare models', 'Check discrimination power', 'Support threshold analysis'],
    howToInterpret: ['Closer to top-left is better', 'Diagonal means random', 'AUC does not prove calibration'],
    goodSignal: 'Curve clearly above diagonal with strong AUC.',
    badSignal: 'Curve close to diagonal or good AUC with poor business threshold behavior.',
    relatedModels: ['Logistic Regression', 'Random Forest', 'XGBoost']
  },
  {
    id: 'precision-recall',
    title: 'Precision-Recall Curve',
    category: 'Classification Evaluation',
    chartType: 'pr',
    whatItIs: 'Shows the trade-off between precision and recall across thresholds.',
    whenToUse: ['Imbalanced classification', 'Rare-event prediction', 'Alert prioritization'],
    howToBuild: ['Use predicted probabilities', 'Calculate precision and recall by threshold', 'Plot recall against precision'],
    howToUse: ['Choose thresholds', 'Balance false positives and missed positives', 'Align model with operational capacity'],
    howToInterpret: ['Higher precision at useful recall is better', 'Sharp drops indicate unstable threshold regions', 'Use with capacity and cost information'],
    goodSignal: 'Precision remains acceptable while recall increases.',
    badSignal: 'Precision collapses quickly as recall increases.',
    relatedModels: ['Logistic Regression', 'Random Forest', 'XGBoost']
  },
  {
    id: 'calibration-plot',
    title: 'Calibration Plot',
    category: 'Probability Quality',
    chartType: 'calibration',
    whatItIs: 'Compares predicted probabilities with observed event rates.',
    whenToUse: ['Probability-based decisions', 'Risk scoring', 'Pricing and approval bands'],
    howToBuild: ['Group predictions into bins', 'Compute average predicted probability', 'Compute observed event rate', 'Plot predicted vs observed'],
    howToUse: ['Validate probability quality', 'Detect underestimation or overestimation', 'Decide if recalibration is needed'],
    howToInterpret: ['Diagonal means well calibrated', 'Observed above predicted means risk is underestimated', 'Observed below predicted means risk is overestimated'],
    goodSignal: 'Observed rates closely follow predicted probabilities.',
    badSignal: 'Large distance from diagonal.',
    relatedModels: ['Logistic Regression', 'Random Forest', 'XGBoost']
  },
  {
    id: 'confusion-matrix',
    title: 'Confusion Matrix',
    category: 'Classification Decisions',
    chartType: 'confusion',
    whatItIs: 'Shows true positives, false positives, true negatives and false negatives after selecting a threshold.',
    whenToUse: ['After threshold selection', 'Operational decision review', 'Error cost analysis'],
    howToBuild: ['Choose threshold', 'Convert scores to classes', 'Compare predicted and actual classes', 'Count TP, FP, TN and FN'],
    howToUse: ['Understand error types', 'Estimate business cost', 'Explain decision trade-offs'],
    howToInterpret: ['False positives create unnecessary actions', 'False negatives miss real events', 'Threshold changes the matrix'],
    goodSignal: 'Error balance matches business risk appetite.',
    badSignal: 'Error type is misaligned with business cost.',
    relatedModels: ['Logistic Regression', 'Decision Tree', 'XGBoost']
  },
  {
    id: 'feature-importance',
    title: 'Feature Importance Plot',
    category: 'Model Interpretation',
    chartType: 'feature-importance',
    whatItIs: 'Ranks variables by how much the model uses them for prediction.',
    whenToUse: ['Tree-based models', 'Model explanation', 'Feature review'],
    howToBuild: ['Train the model', 'Extract importance values', 'Rank variables', 'Plot top features'],
    howToUse: ['Explain model drivers', 'Detect suspicious variables', 'Communicate important predictors'],
    howToInterpret: ['High importance means high model usage', 'Importance is not causality', 'Unexpected top variables require review'],
    goodSignal: 'Important variables make business sense and are available at decision time.',
    badSignal: 'Suspicious or leakage-like variables dominate.',
    relatedModels: ['Random Forest', 'XGBoost', 'Decision Tree']
  },
  {
    id: 'shap-summary',
    title: 'SHAP Summary Plot',
    category: 'Explainability',
    chartType: 'shap',
    whatItIs: 'Shows how features push predictions higher or lower across observations.',
    whenToUse: ['Explainability', 'Model governance', 'High-impact decisions'],
    howToBuild: ['Train model', 'Calculate SHAP values', 'Rank features by average impact', 'Plot distribution of impacts'],
    howToUse: ['Explain drivers', 'Review direction of impact', 'Support model governance'],
    howToInterpret: ['Right side increases prediction', 'Left side decreases prediction', 'Color shows high or low feature values'],
    goodSignal: 'Effects are stable and business-plausible.',
    badSignal: 'Effects contradict logic or reveal leakage.',
    relatedModels: ['XGBoost', 'Random Forest', 'Logistic Regression']
  },
  {
    id: 'residual-plot',
    title: 'Residual Plot',
    category: 'Regression Diagnostics',
    chartType: 'residual',
    whatItIs: 'Plots prediction errors to detect bias, non-linearity or unequal error variance.',
    whenToUse: ['Regression models', 'Forecast diagnostics', 'Model bias checks'],
    howToBuild: ['Predict values', 'Calculate residuals', 'Plot residuals against predictions or key variables'],
    howToUse: ['Detect non-linearity', 'Check bias', 'Find systematic errors'],
    howToInterpret: ['Random scatter around zero is good', 'Curves show missing structure', 'Fan shape shows unequal variance'],
    goodSignal: 'Residuals are randomly distributed around zero.',
    badSignal: 'Visible pattern, curve or fan shape.',
    relatedModels: ['Linear Regression', 'Regression Trees', 'ARIMA']
  },
  {
    id: 'elbow-plot',
    title: 'Elbow Plot',
    category: 'Clustering',
    chartType: 'elbow',
    whatItIs: 'Shows how clustering inertia changes as the number of clusters increases.',
    whenToUse: ['K-Means', 'Customer segmentation', 'Choosing number of clusters'],
    howToBuild: ['Fit K-Means for different K values', 'Record inertia', 'Plot K vs inertia'],
    howToUse: ['Choose practical K', 'Avoid unnecessary segments', 'Support segmentation design'],
    howToInterpret: ['Elbow shows diminishing returns', 'No elbow means weak natural separation', 'Business actionability matters'],
    goodSignal: 'Clear elbow and meaningful segments.',
    badSignal: 'No elbow or segments cannot be interpreted.',
    relatedModels: ['K-Means']
  }
]
