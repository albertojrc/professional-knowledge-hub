export interface DetailedMlModel {
  id: string
  title: string
  family: string
  problemType: string
  whatItIs: string
  whenToUse: string[]
  howToBuild: string[]
  keyOutputs: string[]
  outputGraphs: string[]
  howToInterpret: string[]
  strengths: string[]
  limitations: string[]
  businessUseCases: string[]
}

export const detailedMlModels: DetailedMlModel[] = [
  {
    id: 'linear-regression',
    title: 'Linear Regression',
    family: 'Supervised Learning',
    problemType: 'Regression',
    whatItIs: 'A model that estimates a continuous numerical outcome using a linear relationship between input variables and the target.',
    whenToUse: ['When the target is continuous', 'When interpretability is important', 'When you need a baseline for more complex regression models'],
    howToBuild: ['Define a continuous target variable', 'Clean missing values and outliers', 'Encode categorical variables', 'Train/test split', 'Fit the model', 'Evaluate residuals and error metrics'],
    keyOutputs: ['Coefficients', 'Predicted value', 'Residuals', 'R²', 'RMSE', 'MAE'],
    outputGraphs: ['Actual vs Predicted Plot', 'Residual Plot', 'Error Distribution'],
    howToInterpret: ['Coefficient sign shows direction of effect', 'Coefficient magnitude shows approximate marginal impact', 'Residual patterns reveal missing non-linear relationships or bias'],
    strengths: ['Highly interpretable', 'Fast to train', 'Good baseline'],
    limitations: ['Assumes linear relationships', 'Sensitive to outliers', 'Can underperform with complex non-linear behavior'],
    businessUseCases: ['Sales forecasting', 'Price impact estimation', 'Cost prediction', 'Financial ratio modeling']
  },
  {
    id: 'logistic-regression',
    title: 'Logistic Regression',
    family: 'Supervised Learning',
    problemType: 'Classification',
    whatItIs: 'A classification model that estimates the probability of a binary outcome such as default, churn or fraud.',
    whenToUse: ['When the target is binary', 'When probability interpretation is needed', 'When regulators or stakeholders need explainability'],
    howToBuild: ['Define the positive class', 'Build features available before the decision', 'Split train/test data', 'Train the model', 'Evaluate ROC-AUC, PR-AUC and calibration', 'Choose a decision threshold'],
    keyOutputs: ['Predicted probability', 'Class prediction', 'Coefficients', 'Odds ratios', 'Confusion matrix'],
    outputGraphs: ['ROC Curve', 'Precision-Recall Curve', 'Calibration Plot', 'Confusion Matrix'],
    howToInterpret: ['Predicted probability estimates event likelihood', 'Coefficients explain direction of feature effect', 'Threshold controls trade-off between false positives and false negatives'],
    strengths: ['Interpretable', 'Good baseline', 'Probability output is useful for decision bands'],
    limitations: ['Can miss non-linear effects', 'Needs careful calibration', 'Performance may be limited with complex interactions'],
    businessUseCases: ['Credit default prediction', 'Customer churn', 'Fraud screening baseline', 'Marketing response prediction']
  },
  {
    id: 'decision-tree',
    title: 'Decision Tree',
    family: 'Supervised Learning',
    problemType: 'Classification / Regression',
    whatItIs: 'A rule-based model that splits data into branches using feature thresholds to produce predictions.',
    whenToUse: ['When you need simple rules', 'When non-linear splits matter', 'When explaining segmentation logic is useful'],
    howToBuild: ['Prepare clean features', 'Train the tree', 'Control depth and minimum samples', 'Evaluate overfitting', 'Prune or tune the model'],
    keyOutputs: ['Tree rules', 'Feature splits', 'Predicted class/value', 'Feature importance'],
    outputGraphs: ['Tree Diagram', 'Feature Importance', 'Confusion Matrix'],
    howToInterpret: ['Follow paths from root to leaf', 'Early splits are usually more important', 'Deep branches may overfit small segments'],
    strengths: ['Easy to explain', 'Captures non-linearity', 'Handles mixed variable types'],
    limitations: ['Can overfit quickly', 'Unstable to small data changes', 'Often weaker than ensembles'],
    businessUseCases: ['Policy rule design', 'Customer segmentation', 'Risk rule explanation', 'Operational triage']
  },
  {
    id: 'random-forest',
    title: 'Random Forest',
    family: 'Ensemble Learning',
    problemType: 'Classification / Regression',
    whatItIs: 'An ensemble of many decision trees trained on random subsets of data and features to improve stability and accuracy.',
    whenToUse: ['When you need stronger performance than a single tree', 'When data has non-linear relationships', 'When you want robust feature importance'],
    howToBuild: ['Train many trees', 'Tune number of trees and depth', 'Validate with cross-validation', 'Review feature importance and errors'],
    keyOutputs: ['Predictions', 'Predicted probabilities', 'Feature importance', 'Out-of-bag performance'],
    outputGraphs: ['Feature Importance', 'ROC Curve', 'Precision-Recall Curve', 'Partial Dependence Plot'],
    howToInterpret: ['Feature importance shows influential variables', 'Probabilities may need calibration', 'Use PDP/SHAP to understand relationships'],
    strengths: ['Strong performance', 'Less overfitting than single trees', 'Handles non-linearity well'],
    limitations: ['Less transparent than one tree', 'Can be slower', 'Feature importance can be biased'],
    businessUseCases: ['Fraud detection', 'Credit scoring challenger', 'Churn prediction', 'Operational risk classification']
  },
  {
    id: 'xgboost',
    title: 'XGBoost / Gradient Boosting',
    family: 'Ensemble Learning',
    problemType: 'Classification / Regression',
    whatItIs: 'A boosting model that builds trees sequentially, where each new tree tries to correct previous errors.',
    whenToUse: ['When predictive performance is critical', 'When relationships are complex', 'When tabular data is the main input'],
    howToBuild: ['Prepare train/validation/test sets', 'Handle missing values and categories', 'Tune learning rate, depth and estimators', 'Evaluate performance and calibration', 'Interpret with SHAP'],
    keyOutputs: ['Predictions', 'Probabilities', 'Feature importance', 'SHAP values'],
    outputGraphs: ['ROC Curve', 'PR Curve', 'SHAP Summary Plot', 'Feature Importance', 'Calibration Plot'],
    howToInterpret: ['High performance must be checked against overfitting', 'SHAP explains feature contribution', 'Calibration decides whether probabilities can support pricing or risk bands'],
    strengths: ['Excellent tabular performance', 'Captures complex patterns', 'Flexible'],
    limitations: ['Requires tuning', 'Less transparent', 'Can overfit if validation is weak'],
    businessUseCases: ['Credit risk', 'Fraud detection', 'Propensity scoring', 'Customer lifetime value prediction']
  },
  {
    id: 'kmeans',
    title: 'K-Means Clustering',
    family: 'Unsupervised Learning',
    problemType: 'Clustering',
    whatItIs: 'An algorithm that groups observations into clusters based on similarity to cluster centers.',
    whenToUse: ['When there is no target variable', 'When you need customer or behavior segments', 'When discovering natural groups is useful'],
    howToBuild: ['Select meaningful numerical features', 'Scale variables', 'Choose number of clusters', 'Fit K-Means', 'Profile and name clusters'],
    keyOutputs: ['Cluster labels', 'Cluster centers', 'Inertia', 'Segment profiles'],
    outputGraphs: ['Elbow Plot', 'Cluster Scatter Plot', 'Cluster Profile Chart'],
    howToInterpret: ['Clusters only matter if they are actionable', 'Cluster centers describe average behavior', 'Elbow plot helps choose number of clusters'],
    strengths: ['Simple and fast', 'Useful for segmentation', 'Easy to operationalize'],
    limitations: ['Requires choosing K', 'Sensitive to scaling', 'Assumes roughly spherical clusters'],
    businessUseCases: ['Customer segmentation', 'Product usage groups', 'Risk segment discovery', 'Marketing personalization']
  },
  {
    id: 'pca',
    title: 'Principal Component Analysis',
    family: 'Dimensionality Reduction',
    problemType: 'Feature Compression / Visualization',
    whatItIs: 'A technique that transforms many correlated variables into fewer components that explain most variance.',
    whenToUse: ['When many variables are correlated', 'When you need dimensionality reduction', 'When visualizing high-dimensional data'],
    howToBuild: ['Scale numerical features', 'Fit PCA', 'Check explained variance', 'Choose number of components', 'Use components for visualization or modeling'],
    keyOutputs: ['Principal components', 'Explained variance ratio', 'Loadings'],
    outputGraphs: ['Scree Plot', 'PCA Scatter Plot', 'Loading Plot'],
    howToInterpret: ['Explained variance shows information retained', 'Loadings show which variables drive each component', 'PCA components are less directly interpretable than original variables'],
    strengths: ['Reduces dimensionality', 'Handles multicollinearity', 'Useful for visualization'],
    limitations: ['Can reduce interpretability', 'Linear method', 'Requires scaling'],
    businessUseCases: ['Risk factor compression', 'Customer behavior visualization', 'Preprocessing before clustering', 'Survey analytics']
  },
  {
    id: 'arima',
    title: 'ARIMA / SARIMA',
    family: 'Time Series',
    problemType: 'Forecasting',
    whatItIs: 'A statistical forecasting model that uses past values, differencing and past errors to forecast future values. SARIMA adds seasonality.',
    whenToUse: ['When data is ordered over time', 'When forecasting demand, sales or balances', 'When trend/seasonality must be modeled'],
    howToBuild: ['Check stationarity', 'Difference if needed', 'Inspect ACF/PACF', 'Fit ARIMA/SARIMA', 'Validate residuals and forecast error'],
    keyOutputs: ['Forecast', 'Confidence intervals', 'Residuals', 'AIC/BIC', 'Model coefficients'],
    outputGraphs: ['Forecast Plot', 'Residual Plot', 'ACF/PACF Plot'],
    howToInterpret: ['Forecast intervals show uncertainty', 'Residuals should look like noise', 'Seasonal patterns require SARIMA or external regressors'],
    strengths: ['Strong classical baseline', 'Interpretable time-series structure', 'Good for stable patterns'],
    limitations: ['Needs stationarity work', 'Weak with sudden structural breaks', 'May need external variables'],
    businessUseCases: ['Sales forecasting', 'Liquidity planning', 'Demand forecasting', 'Economic indicator projection']
  }
]
