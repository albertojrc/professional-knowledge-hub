export type MlGraphType = 'roc' | 'pr' | 'calibration' | 'confusion' | 'feature-importance' | 'shap' | 'residual' | 'actual-predicted' | 'elbow' | 'cluster' | 'forecast' | 'learning-curve' | 'lift' | 'gain' | 'ks' | 'pdp'

export interface MlGraphAtlasItem {
  id: string
  title: string
  category: string
  chartType: MlGraphType
  whatItIs: string
  whenToUse: string[]
  howToBuild: string[]
  howToUse: string[]
  howToInterpret: string[]
  commonMistakes: string[]
  decisionImpact: string
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
    whatItIs: 'A threshold-independent curve that measures how well a classification model separates positive and negative cases.',
    whenToUse: ['Binary classification', 'Model comparison', 'Ranking quality review', 'Early model selection before choosing a threshold'],
    howToBuild: ['Train a classifier that outputs probabilities or scores', 'Sort observations by predicted score', 'Calculate true positive rate and false positive rate across many thresholds', 'Plot false positive rate on the x-axis and true positive rate on the y-axis', 'Calculate AUC as the global discrimination summary'],
    howToUse: ['Compare candidate models', 'Check whether the model ranks risky cases above safer cases', 'Use with PR curve and calibration before final threshold selection'],
    howToInterpret: ['The diagonal line represents random ranking', 'The closer the curve is to the top-left corner, the stronger the discrimination', 'High AUC means ranking quality, not probability accuracy', 'A model can have strong ROC-AUC but still be badly calibrated'],
    commonMistakes: ['Using ROC alone on highly imbalanced data', 'Treating AUC as approval for deployment', 'Ignoring business threshold and cost structure'],
    decisionImpact: 'Helps decide whether a model is strong enough to continue into threshold design, calibration and operational testing.',
    goodSignal: 'Curve clearly above the diagonal with strong AUC and stable performance across validation samples.',
    badSignal: 'Curve close to diagonal, unstable AUC, or good AUC with poor operational threshold behavior.',
    relatedModels: ['Logistic Regression', 'Random Forest', 'XGBoost']
  },
  {
    id: 'precision-recall',
    title: 'Precision-Recall Curve',
    category: 'Classification Evaluation',
    chartType: 'pr',
    whatItIs: 'A curve that shows how precision changes as recall increases across classification thresholds.',
    whenToUse: ['Imbalanced classification', 'Rare-event prediction', 'Fraud detection', 'Alert prioritization', 'Churn or default detection when positives are scarce'],
    howToBuild: ['Use model probabilities or scores', 'Calculate precision and recall at many thresholds', 'Plot recall on the x-axis and precision on the y-axis', 'Compare the curve to the base event rate'],
    howToUse: ['Choose alert thresholds', 'Balance operational workload against missed cases', 'Understand whether the model can find positives without overwhelming the team'],
    howToInterpret: ['High precision at useful recall means the model finds real positives efficiently', 'Precision usually falls as recall increases', 'Sharp precision drops reveal unstable threshold zones', 'Always interpret with team capacity and event cost'],
    commonMistakes: ['Ignoring the base positive rate', 'Choosing high recall without checking false positive workload', 'Comparing PR curves across datasets with different prevalence without context'],
    decisionImpact: 'Supports decisions about alert volume, investigation capacity, campaign targeting and risk escalation thresholds.',
    goodSignal: 'Precision remains materially above the base rate while recall increases to a useful level.',
    badSignal: 'Precision collapses quickly as recall increases, creating too many false positives.',
    relatedModels: ['Logistic Regression', 'Random Forest', 'XGBoost']
  },
  {
    id: 'calibration-plot',
    title: 'Calibration Plot',
    category: 'Probability Quality',
    chartType: 'calibration',
    whatItIs: 'A probability quality chart comparing predicted probabilities with observed event rates.',
    whenToUse: ['Credit risk', 'Pricing', 'Risk bands', 'Probability-based decisions', 'Any model where the score is treated as a probability'],
    howToBuild: ['Group predictions into probability bins', 'Compute average predicted probability per bin', 'Compute observed event rate per bin', 'Plot predicted probability against observed event rate', 'Compare points with the perfect calibration diagonal'],
    howToUse: ['Validate whether model probabilities can be trusted', 'Decide whether recalibration is needed', 'Test probability bands before policy decisions'],
    howToInterpret: ['Points on the diagonal are well calibrated', 'Observed rate above predicted probability means risk is underestimated', 'Observed rate below predicted probability means risk is overestimated', 'Calibration should be reviewed by score band, not only globally'],
    commonMistakes: ['Confusing discrimination with calibration', 'Using probabilities for pricing without calibration review', 'Ignoring small-bin instability'],
    decisionImpact: 'Determines whether model probabilities are reliable enough for PD bands, pricing, provisioning, approval rules or risk limits.',
    goodSignal: 'Observed rates closely follow predicted probabilities across relevant score bands.',
    badSignal: 'Large distance from diagonal, especially in high-risk or high-volume bands.',
    relatedModels: ['Logistic Regression', 'Random Forest', 'XGBoost']
  },
  {
    id: 'confusion-matrix',
    title: 'Confusion Matrix',
    category: 'Classification Decisions',
    chartType: 'confusion',
    whatItIs: 'A decision table showing true positives, false positives, true negatives and false negatives after selecting a threshold.',
    whenToUse: ['After threshold selection', 'Operational decision review', 'Error cost analysis', 'Approval, rejection, escalation or alert workflows'],
    howToBuild: ['Choose a threshold', 'Convert probabilities into predicted classes', 'Compare predicted class against actual class', 'Count true positives, false positives, true negatives and false negatives'],
    howToUse: ['Understand the types of errors the model creates', 'Estimate operational cost', 'Explain trade-offs to business teams', 'Adjust threshold to match risk appetite'],
    howToInterpret: ['False positives create unnecessary actions', 'False negatives miss real events', 'True positives show captured events', 'True negatives show correctly ignored safe cases', 'The threshold fully controls the balance'],
    commonMistakes: ['Looking only at accuracy', 'Ignoring which error is more expensive', 'Using a default 0.5 threshold without business justification'],
    decisionImpact: 'Turns model scores into concrete operating decisions such as approve, reject, review, alert or ignore.',
    goodSignal: 'The error balance matches business cost, risk appetite and operational capacity.',
    badSignal: 'The dominant error type is misaligned with business cost or regulatory risk.',
    relatedModels: ['Logistic Regression', 'Decision Tree', 'XGBoost']
  },
  {
    id: 'feature-importance',
    title: 'Feature Importance Plot',
    category: 'Model Interpretation',
    chartType: 'feature-importance',
    whatItIs: 'A ranked view of variables by how much the model uses them for prediction.',
    whenToUse: ['Tree-based models', 'Model explanation', 'Feature review', 'Leakage screening', 'Stakeholder communication'],
    howToBuild: ['Train the model', 'Extract importance values from the algorithm or permutation method', 'Rank variables from highest to lowest importance', 'Plot the top features'],
    howToUse: ['Explain model drivers', 'Detect suspicious variables', 'Communicate important predictors', 'Prioritize deeper explainability review'],
    howToInterpret: ['High importance means the model uses the variable frequently or strongly', 'Importance does not prove causality', 'Unexpected top variables require leakage and fairness review'],
    commonMistakes: ['Calling importance causal impact', 'Ignoring correlated features', 'Trusting impurity importance without checking bias'],
    decisionImpact: 'Supports feature governance, model documentation, leakage review and stakeholder explanation.',
    goodSignal: 'Important variables make business sense and are available at decision time.',
    badSignal: 'Suspicious variables dominate or reveal leakage, proxy bias or process artifacts.',
    relatedModels: ['Random Forest', 'XGBoost', 'Decision Tree']
  },
  {
    id: 'shap-summary',
    title: 'SHAP Summary Plot',
    category: 'Explainability',
    chartType: 'shap',
    whatItIs: 'An explainability graph showing how each feature pushes predictions higher or lower across observations.',
    whenToUse: ['Explainability', 'Model governance', 'High-impact decisions', 'Credit risk', 'Fraud', 'Stakeholder model review'],
    howToBuild: ['Train the model', 'Calculate SHAP values for the validation sample', 'Rank features by average absolute SHAP impact', 'Plot each observation impact per feature', 'Color points by feature value when available'],
    howToUse: ['Explain prediction drivers', 'Review direction of impact', 'Support model governance', 'Detect features with unexpected behavior'],
    howToInterpret: ['Points to the right increase the prediction', 'Points to the left decrease the prediction', 'Color shows whether high or low feature values drive the effect', 'Wide horizontal spread means strong influence'],
    commonMistakes: ['Reading SHAP as causality', 'Ignoring correlated feature effects', 'Using SHAP without checking data leakage first'],
    decisionImpact: 'Helps decide whether the model is explainable and behaviorally acceptable for governance, credit policy or risk review.',
    goodSignal: 'Effects are stable, directional and business-plausible.',
    badSignal: 'Effects contradict logic, change drastically by sample or reveal leakage.',
    relatedModels: ['XGBoost', 'Random Forest', 'Logistic Regression']
  },
  {
    id: 'residual-plot',
    title: 'Residual Plot',
    category: 'Regression Diagnostics',
    chartType: 'residual',
    whatItIs: 'A diagnostic graph of prediction errors used to detect bias, non-linearity and unstable error variance.',
    whenToUse: ['Regression models', 'Forecast diagnostics', 'Model bias checks', 'Pricing or demand prediction'],
    howToBuild: ['Generate predictions on validation data', 'Calculate residuals as actual minus predicted', 'Plot residuals against predictions or a key input variable', 'Add a zero-error reference line'],
    howToUse: ['Detect non-linearity', 'Check systematic bias', 'Find segments with poor model fit', 'Decide whether feature engineering or another model is needed'],
    howToInterpret: ['Random scatter around zero is good', 'Curves indicate missing non-linear structure', 'Fan shapes indicate unequal variance', 'Clusters indicate segment-specific errors'],
    commonMistakes: ['Only checking RMSE and ignoring error pattern', 'Ignoring segment-level residuals', 'Treating outliers as noise without business review'],
    decisionImpact: 'Decides whether a regression model is reliable enough or needs transformation, segmentation, new features or a different algorithm.',
    goodSignal: 'Residuals are randomly distributed around zero without clear pattern.',
    badSignal: 'Visible curve, cluster, bias or fan shape.',
    relatedModels: ['Linear Regression', 'Regression Trees', 'ARIMA']
  },
  {
    id: 'actual-predicted',
    title: 'Actual vs Predicted Plot',
    category: 'Regression Evaluation',
    chartType: 'actual-predicted',
    whatItIs: 'A scatter plot comparing actual values with model predictions.',
    whenToUse: ['Regression evaluation', 'Forecast evaluation', 'Model communication', 'Prediction accuracy review'],
    howToBuild: ['Generate predictions', 'Plot actual values on one axis', 'Plot predicted values on the other axis', 'Add a diagonal reference line for perfect prediction'],
    howToUse: ['Assess model fit visually', 'Detect underprediction or overprediction', 'Explain accuracy to non-technical stakeholders'],
    howToInterpret: ['Points close to the diagonal are accurate', 'Systematic deviation shows bias', 'Wide spread means high error', 'Extreme values often reveal where the model fails'],
    commonMistakes: ['Only looking at average error', 'Ignoring poor performance at extremes', 'Using the chart without checking residuals'],
    decisionImpact: 'Helps decide whether predicted values are reliable enough for planning, pricing, forecasting or budgeting.',
    goodSignal: 'Points cluster near the diagonal across the full value range.',
    badSignal: 'Large spread, systematic underprediction or poor fit at high-value cases.',
    relatedModels: ['Linear Regression', 'Random Forest Regression', 'XGBoost Regression']
  },
  {
    id: 'elbow-plot',
    title: 'Elbow Plot',
    category: 'Clustering',
    chartType: 'elbow',
    whatItIs: 'A clustering diagnostic that shows how inertia decreases as the number of clusters increases.',
    whenToUse: ['K-Means', 'Customer segmentation', 'Choosing number of clusters', 'Exploratory grouping'],
    howToBuild: ['Scale numerical features', 'Fit K-Means for several K values', 'Record inertia for each K', 'Plot K against inertia'],
    howToUse: ['Choose a practical number of clusters', 'Avoid unnecessary segments', 'Support segmentation design with evidence'],
    howToInterpret: ['The elbow indicates diminishing returns', 'No clear elbow means weak natural separation', 'Business actionability matters more than mathematical neatness'],
    commonMistakes: ['Choosing K only because of the chart', 'Ignoring whether clusters can be named and acted on', 'Using unscaled variables'],
    decisionImpact: 'Supports the choice of customer, risk or behavior segments before profiling and business activation.',
    goodSignal: 'Clear elbow and clusters can be profiled with business meaning.',
    badSignal: 'No elbow or mathematically separated clusters with no business interpretation.',
    relatedModels: ['K-Means']
  },
  {
    id: 'learning-curve',
    title: 'Learning Curve',
    category: 'Training Diagnostics',
    chartType: 'learning-curve',
    whatItIs: 'A training diagnostic comparing model performance on training and validation data as sample size increases.',
    whenToUse: ['Diagnosing overfitting', 'Diagnosing underfitting', 'Deciding whether more data could help', 'Model development'],
    howToBuild: ['Train the model with increasing sample sizes', 'Measure train score and validation score at each size', 'Plot both curves on the same graph'],
    howToUse: ['Decide whether to collect more data', 'Tune model complexity', 'Detect high variance or high bias problems'],
    howToInterpret: ['Large train-validation gap suggests overfitting', 'Both low scores suggest underfitting', 'Converging strong scores suggest healthy generalization'],
    commonMistakes: ['Assuming more data always helps', 'Ignoring validation curve shape', 'Using a metric that does not match the business problem'],
    decisionImpact: 'Guides whether to improve data, simplify model, add features or change algorithm.',
    goodSignal: 'Training and validation curves converge at strong performance.',
    badSignal: 'Persistent wide gap or both curves plateau at poor performance.',
    relatedModels: ['Any supervised model']
  },
  {
    id: 'lift-curve',
    title: 'Lift Curve',
    category: 'Ranking and Targeting',
    chartType: 'lift',
    whatItIs: 'A chart showing how much better the model is at finding positives compared with random selection.',
    whenToUse: ['Marketing targeting', 'Fraud prioritization', 'Credit risk review queues', 'Top-decile model evaluation'],
    howToBuild: ['Sort observations by predicted score', 'Split into deciles or percentiles', 'Calculate event rate in each group', 'Compare event rate with baseline event rate'],
    howToUse: ['Decide top segments to target', 'Estimate value of using the model', 'Set review or campaign cutoffs'],
    howToInterpret: ['High lift in top deciles means the model concentrates positives effectively', 'Lift near 1 means no improvement over random', 'Lift should decline as broader population is included'],
    commonMistakes: ['Ignoring population size in each decile', 'Using lift without checking business capacity', 'Confusing lift with probability calibration'],
    decisionImpact: 'Supports decisions about who to contact, review, investigate or prioritize first.',
    goodSignal: 'Top deciles show strong lift and meaningful volume.',
    badSignal: 'Lift is weak, unstable or concentrated in too few cases to be useful.',
    relatedModels: ['Logistic Regression', 'XGBoost', 'Random Forest']
  },
  {
    id: 'pdp-plot',
    title: 'Partial Dependence Plot',
    category: 'Explainability',
    chartType: 'pdp',
    whatItIs: 'A graph showing the average model prediction as one feature changes while other features are averaged out.',
    whenToUse: ['Explaining non-linear models', 'Understanding feature response curves', 'Policy and pricing review'],
    howToBuild: ['Choose a feature', 'Create a grid of feature values', 'Predict outcomes while varying that feature', 'Average predictions at each value', 'Plot feature value against average prediction'],
    howToUse: ['Understand non-linear effects', 'Check monotonicity expectations', 'Explain model behavior to stakeholders'],
    howToInterpret: ['Upward slope means higher feature values increase prediction on average', 'Flat line means limited effect', 'Sharp changes suggest thresholds or non-linear behavior'],
    commonMistakes: ['Using PDP with strongly correlated variables without caution', 'Reading average effect as individual effect', 'Treating PDP as causal'],
    decisionImpact: 'Helps review whether model behavior aligns with business logic and policy expectations.',
    goodSignal: 'Feature response is plausible and stable across key ranges.',
    badSignal: 'Response curve contradicts domain knowledge or behaves erratically.',
    relatedModels: ['Random Forest', 'XGBoost', 'Gradient Boosting']
  }
]
