import type { ModelItem } from '../types/knowledge'

export const phase4Models: ModelItem[] = [
  {
    id:'linear-regression-phase4',
    title:'Linear Regression',
    family:'Supervised Learning / Regression',
    objective:'Estimate a continuous numeric outcome and explain how input variables relate to that outcome.',
    inputs:'Clean numeric target, explanatory variables, train/test split, checks for outliers, multicollinearity and residual behavior.',
    outputs:'Coefficients, intercept, predicted values, residuals, R-squared, RMSE, MAE and diagnostic plots.',
    interpretation:'Coefficients show the expected change in the target when a variable changes, holding other variables constant. Model quality depends on residual behavior and whether assumptions are reasonable.',
    goodResult:'Stable coefficients, reasonable error, residuals without obvious structure and interpretation that fits business logic.',
    badResult:'High error, unstable coefficients, strong residual patterns, leakage or relationships that do not make business sense.',
    applications:['sales forecasting baseline','pricing analysis','cost driver analysis','financial performance drivers','management reporting']
  },
  {
    id:'logistic-regression-advanced',
    title:'Logistic Regression Advanced',
    family:'Supervised Learning / Classification',
    objective:'Estimate the probability of a binary outcome and support interpretable classification decisions.',
    inputs:'Binary target, well-defined observation grain, clean features, class balance review, train/test split and calibration check.',
    outputs:'Predicted probabilities, odds ratios, classification report, ROC curve, precision-recall curve, calibration curve and threshold table.',
    interpretation:'The model estimates probability, not just class labels. Threshold selection should be based on business cost, recall/precision tradeoff and calibration quality.',
    goodResult:'Probabilities are well ranked, calibrated and interpretable with stable drivers.',
    badResult:'High accuracy but poor recall, unstable variables, poor calibration or thresholds selected without business logic.',
    applications:['credit scoring','customer churn','lead conversion','approval policy design','risk segmentation']
  },
  {
    id:'decision-tree-model',
    title:'Decision Tree',
    family:'Tree-Based Models',
    objective:'Create an interpretable rule-based model for classification or regression.',
    inputs:'Structured features, target variable, max depth limits, minimum samples per split and validation data.',
    outputs:'Tree diagram, split rules, feature importance, predictions and leaf-level segment performance.',
    interpretation:'Each split creates a decision rule. Shallow trees are easier to explain; deep trees may memorize training data.',
    goodResult:'Simple tree structure, meaningful splits, stable validation performance and rules that make business sense.',
    badResult:'Very deep tree, unstable performance, noisy split rules or high train performance with weak validation.',
    applications:['policy rules','customer segmentation','credit review support','operations triage','explainable decision support']
  },
  {
    id:'random-forest-model',
    title:'Random Forest',
    family:'Ensemble Models',
    objective:'Improve predictive performance by combining many decision trees trained on different samples and features.',
    inputs:'Structured dataset, target variable, feature set, validation data, tree count and depth controls.',
    outputs:'Predictions, probability scores, feature importance, out-of-bag score and performance metrics.',
    interpretation:'The model reduces single-tree instability but becomes less directly interpretable. Feature importance helps explain drivers but should be checked carefully.',
    goodResult:'Better validation performance than a single tree, stable feature importance and no major overfitting signs.',
    badResult:'Opaque model with weak validation gain, feature importance dominated by leakage or performance that fails on new data.',
    applications:['risk ranking','customer analytics','operations prediction','classification baselines','feature screening']
  },
  {
    id:'gradient-boosting-model',
    title:'Gradient Boosting',
    family:'Ensemble Models',
    objective:'Build a strong predictive model by sequentially improving weak learners and reducing previous errors.',
    inputs:'Structured features, target, validation set, learning rate, tree depth, number of estimators and regularization settings.',
    outputs:'Predictions, probability scores, feature importance, validation curves and performance metrics.',
    interpretation:'Gradient boosting can capture complex patterns, but performance must be balanced with overfitting control and explainability.',
    goodResult:'Strong validation performance, controlled gap between train and test metrics and coherent top drivers.',
    badResult:'Overfit model, unstable performance, hard-to-explain drivers or gains created by leakage.',
    applications:['credit scoring challenger model','customer churn prediction','ranking problems','forecast feature modeling','advanced tabular prediction']
  },
  {
    id:'time-series-forecasting-models',
    title:'Time Series Forecasting Models',
    family:'Forecasting',
    objective:'Forecast future values using time patterns such as trend, seasonality and autocorrelation.',
    inputs:'Time-indexed series, frequency, missing date handling, trend/seasonality review, holdout period and relevant events.',
    outputs:'Forecast values, confidence intervals, residual diagnostics, forecast error metrics and scenario forecasts.',
    interpretation:'Forecasts depend on historical patterns and assumptions. Structural breaks, seasonality shifts and external events can reduce reliability.',
    goodResult:'Forecast errors are stable, residuals look reasonable and the forecast explains trend and seasonality clearly.',
    badResult:'Model misses structural breaks, ignores seasonality, overfits history or presents forecasts without uncertainty.',
    applications:['sales forecasting','financial planning','demand forecasting','market trend monitoring','capacity planning']
  },
  {
    id:'clustering-kmeans-model',
    title:'K-Means Clustering',
    family:'Unsupervised Learning / Clustering',
    objective:'Group observations into segments based on similarity without using a target variable.',
    inputs:'Scaled numeric features, selected number of clusters, feature relevance review and segment validation.',
    outputs:'Cluster labels, cluster centers, segment profiles, inertia and visual cluster summaries.',
    interpretation:'Clusters are not automatically meaningful. They must be profiled, named and connected to a business action.',
    goodResult:'Segments are distinct, interpretable, stable and useful for decisions.',
    badResult:'Clusters are arbitrary, hard to explain, unstable or driven by scale and irrelevant variables.',
    applications:['customer segmentation','portfolio grouping','behavioral profiling','marketing targeting','operations grouping']
  },
  {
    id:'pca-model',
    title:'Principal Component Analysis',
    family:'Unsupervised Learning / Dimensionality Reduction',
    objective:'Reduce many correlated variables into fewer components that capture most of the variation.',
    inputs:'Scaled numeric variables, correlation review and decision on number of components.',
    outputs:'Principal components, explained variance ratio, loadings and transformed feature matrix.',
    interpretation:'Components summarize patterns in the data but may be harder to explain than original variables. Loadings help interpret what each component represents.',
    goodResult:'A smaller number of components captures meaningful variation and reduces noise or multicollinearity.',
    badResult:'Components are hard to explain, lose important information or are used without business interpretation.',
    applications:['feature compression','risk factor analysis','visualization','multicollinearity reduction','analytics preprocessing']
  },
  {
    id:'graph-analytics-models',
    title:'Graph Analytics Models',
    family:'Network / Graph Analytics',
    objective:'Analyze relationships between entities using nodes, edges and network structure.',
    inputs:'Node table, edge table, relationship type, graph direction, weights and business definition of connection.',
    outputs:'Centrality ranking, communities, shortest paths, network visualization and relationship summaries.',
    interpretation:'Graph outputs reveal relationship structure, influence, clusters and connection patterns that table-only analysis may miss.',
    goodResult:'Network patterns are interpretable and linked to a clear business question.',
    badResult:'Graph is visually interesting but not connected to a decision or built from poorly defined relationships.',
    applications:['relationship mapping','customer networks','supply chain analysis','influence analysis','entity connection review']
  },
  {
    id:'model-selection-guide',
    title:'Model Selection Guide',
    family:'Model Governance / Selection',
    objective:'Choose an appropriate model based on the business question, target type, interpretability need, data quality and deployment context.',
    inputs:'Business question, target definition, data structure, interpretability requirement, performance goal and operational constraints.',
    outputs:'Recommended model shortlist, baseline model, evaluation plan, interpretation plan and governance notes.',
    interpretation:'The best model is not always the most complex one. A useful model must be fit for purpose, explainable enough and reliable in the decision context.',
    goodResult:'Model choice is justified by problem type, data quality, metrics and business use.',
    badResult:'Model is selected because it is trendy, complex or high-performing on one metric without decision fit.',
    applications:['analytics project scoping','credit model planning','forecast planning','classification projects','model governance']
  }
]
