export interface KnowledgeTooltip {
  label: string
  meaning: string
  goodSignal: string
  badSignal: string
  howToImprove: string
}

export const knowledgeTooltips: Record<string, KnowledgeTooltip> = {
  'r squared': {
    label: 'R squared',
    meaning: 'Measures the proportion of variance in the target explained by the model. It is useful for regression, but it does not prove causality or guarantee good predictions.',
    goodSignal: 'Higher is usually better, but context matters. In controlled business problems, values above 0.70 can be strong; in noisy behavioral or financial data, lower values may still be useful.',
    badSignal: 'Very low values mean the model explains little of the target. Extremely high values can also indicate leakage or overfitting.',
    howToImprove: 'Add better predictors, capture non-linear effects, segment the population, remove leakage, treat outliers and compare with more flexible models.'
  },
  'mae': {
    label: 'MAE',
    meaning: 'Mean Absolute Error. It measures the average absolute difference between actual and predicted values in the same units as the target.',
    goodSignal: 'Lower is better. A good value is one that is small enough to support the business decision, for example acceptable pricing, demand or loss error.',
    badSignal: 'High MAE means the model is frequently far from the real value.',
    howToImprove: 'Improve features, clean outliers, model segments separately, review target definition and compare regression algorithms.'
  },
  'mse': {
    label: 'MSE',
    meaning: 'Mean Squared Error. It squares prediction errors, so large errors are penalized more heavily than small errors.',
    goodSignal: 'Lower is better, especially when large errors are very costly.',
    badSignal: 'High MSE means large errors are happening and may dominate model performance.',
    howToImprove: 'Investigate outliers, review high-error segments, use transformations, improve features or choose a model that handles non-linearity better.'
  },
  'rmse': {
    label: 'RMSE',
    meaning: 'Root Mean Squared Error. It is the square root of MSE and is expressed in the same unit as the target.',
    goodSignal: 'Lower is better. It should be compared with the average target value and the business tolerance for error.',
    badSignal: 'High RMSE means the model makes large errors, especially on difficult or extreme observations.',
    howToImprove: 'Analyze residuals, improve feature engineering, treat extreme values and compare with stronger regression models.'
  },
  'auc': {
    label: 'AUC',
    meaning: 'Area Under the ROC Curve. It measures how well a classification model ranks positive cases above negative cases.',
    goodSignal: 'Closer to 1 is better. Above 0.70 is often useful, above 0.80 is strong, but this depends on the problem and data quality.',
    badSignal: 'Near 0.50 means the model ranks almost randomly. High AUC with poor calibration can still be risky.',
    howToImprove: 'Improve features, handle class imbalance, remove leakage, tune model complexity and validate across time or segments.'
  },
  'gini': {
    label: 'Gini',
    meaning: 'A discrimination metric commonly used in credit risk. It is calculated as 2 x AUC - 1.',
    goodSignal: 'Higher is better. In credit risk, strong models often show materially positive Gini, but acceptable levels depend on portfolio and data.',
    badSignal: 'Low Gini means weak ranking power. Very high Gini may indicate leakage.',
    howToImprove: 'Improve borrower features, review target windows, check leakage, use stronger models and validate stability.'
  },
  'ks': {
    label: 'KS',
    meaning: 'Kolmogorov-Smirnov statistic. It measures the maximum separation between cumulative positive and negative distributions.',
    goodSignal: 'Higher separation is better when stable across validation samples.',
    badSignal: 'Low KS means weak separation. Unstable KS across time means the model may not generalize.',
    howToImprove: 'Improve features, recalibrate score bands, validate over time and investigate drift.'
  },
  'precision': {
    label: 'Precision',
    meaning: 'Of all cases predicted as positive, precision measures how many were actually positive.',
    goodSignal: 'High precision is good when false positives are expensive, such as fraud investigations or manual reviews.',
    badSignal: 'Low precision means many false alerts or wasted actions.',
    howToImprove: 'Raise the threshold, improve features, use better ranking models and align alert volume with team capacity.'
  },
  'recall': {
    label: 'Recall',
    meaning: 'Of all actual positive cases, recall measures how many the model captured.',
    goodSignal: 'High recall is good when missing positives is costly, such as fraud, default or churn risk.',
    badSignal: 'Low recall means the model misses many real positive cases.',
    howToImprove: 'Lower the threshold, improve event signals, handle class imbalance and use cost-sensitive evaluation.'
  },
  'predicted value': {
    label: 'Predicted value',
    meaning: 'The numerical value estimated by a regression or forecasting model.',
    goodSignal: 'Good when predictions are close to actual values and error is acceptable for the decision.',
    badSignal: 'Bad when predictions systematically overestimate or underestimate important cases.',
    howToImprove: 'Review residuals, add better predictors, transform variables, segment the model or use a more flexible algorithm.'
  },
  'coefficients': {
    label: 'Coefficients',
    meaning: 'Model parameters that indicate the estimated relationship between each predictor and the target.',
    goodSignal: 'Good when signs and magnitudes are stable, interpretable and aligned with domain logic.',
    badSignal: 'Bad when signs are unstable, contradictory or inflated by multicollinearity.',
    howToImprove: 'Check correlations, standardize variables, remove redundant predictors, regularize the model and validate coefficients across samples.'
  },
  'intercept': {
    label: 'Intercept',
    meaning: 'The expected model value when all predictors are zero. It anchors the regression equation.',
    goodSignal: 'Useful when zero has a meaningful interpretation or when it supports the equation structure.',
    badSignal: 'Can be misleading when zero is outside the realistic range of the predictors.',
    howToImprove: 'Center variables, review scale, and avoid overinterpreting the intercept when zero is not meaningful.'
  },
  'residuals': {
    label: 'Residuals',
    meaning: 'Residuals are prediction errors: actual value minus predicted value.',
    goodSignal: 'Good when residuals are randomly scattered around zero with no clear pattern.',
    badSignal: 'Patterns, curves, clusters or fan shapes indicate bias, non-linearity or unequal error variance.',
    howToImprove: 'Add missing variables, transform features, handle outliers, segment the population or use a more suitable model.'
  },
  'linearity': {
    label: 'Linearity',
    meaning: 'The assumption that the relationship between predictors and target can be reasonably represented as linear.',
    goodSignal: 'Good when scatterplots and residuals do not show strong curves or systematic patterns.',
    badSignal: 'Bad when residuals show curves or model errors change systematically across predictor values.',
    howToImprove: 'Add transformations, interaction terms, splines, segmentation or non-linear models.'
  },
  'independent errors': {
    label: 'Independent errors',
    meaning: 'The assumption that residuals are not correlated with each other.',
    goodSignal: 'Good when there is no visible serial correlation or grouped error structure.',
    badSignal: 'Bad when errors are correlated over time, by customer, branch, region or segment.',
    howToImprove: 'Use time-series models, clustered standard errors, mixed models or add missing group/time features.'
  },
  'homoscedasticity': {
    label: 'Homoscedasticity',
    meaning: 'The assumption that error variance is roughly constant across predicted values or predictor ranges.',
    goodSignal: 'Good when residual spread is similar across the full prediction range.',
    badSignal: 'Bad when residuals form a fan shape, meaning errors grow or shrink with the prediction level.',
    howToImprove: 'Transform the target, use robust standard errors, segment the model or use algorithms that handle changing variance.'
  },
  'no strong multicollinearity': {
    label: 'No strong multicollinearity',
    meaning: 'Predictors should not be excessively correlated with each other because that makes coefficient interpretation unstable.',
    goodSignal: 'Good when VIF values are low and coefficients remain stable across samples.',
    badSignal: 'Bad when coefficients flip signs, become huge or lose stability due to redundant predictors.',
    howToImprove: 'Remove redundant variables, combine features, use PCA, regularization or domain-based feature selection.'
  },
  'normally distributed residuals for inference': {
    label: 'Normally distributed residuals for inference',
    meaning: 'For statistical inference in linear regression, residuals should be approximately normal, especially for small samples.',
    goodSignal: 'Good when residual histogram or QQ plot is reasonably close to normal.',
    badSignal: 'Bad when residuals are highly skewed or heavy-tailed, making p-values and confidence intervals less reliable.',
    howToImprove: 'Transform the target, treat outliers, use robust methods or rely more on predictive validation than inference.'
  }
}

export function getKnowledgeTooltip(label: string): KnowledgeTooltip | undefined {
  return knowledgeTooltips[label.trim().toLowerCase()]
}
