import type { ModelItem, OutputAtlasItem } from '../types/knowledge'

export const extraOutputAtlas: OutputAtlasItem[] = [
  {
    id: 'classification-report',
    title: 'Classification Report',
    category: 'Machine Learning / Classification',
    usedIn: ['Credit risk', 'Fraud', 'Churn', 'Campaign response'],
    whatItIs: 'A classification report summarizes precision, recall, F1-score and support by class. It helps understand whether a model performs equally well across target classes.',
    exampleOutput: 'Class              precision recall f1 support\nnon-default        0.93      0.88   0.90 9000\ndefault            0.34      0.51   0.41 1000\nROC-AUC: 0.78',
    howToRead: ['Precision measures how clean predicted positives are.', 'Recall measures how many real positives are captured.', 'F1 balances precision and recall.', 'Support shows how many observations exist per class.'],
    goodResult: 'Metrics are aligned with business cost and stable across important segments.',
    badResult: 'Overall accuracy looks high while the important minority class performs poorly.',
    redFlags: ['Accuracy-only interpretation', 'Minority class ignored', 'No threshold analysis', 'No segment validation'],
    howToImprove: ['Tune threshold', 'Use class weights', 'Improve feature engineering', 'Evaluate by segment', 'Collect better labels'],
    businessImpact: 'The report determines whether a model is useful for real decisions or only performs well on the majority class.',
    relatedConcepts: ['Precision', 'Recall', 'F1', 'Class imbalance'],
    relatedCases: ['Credit Risk / PD Scoring', 'Fraud Detection & Alert Prioritization']
  },
  {
    id: 'arima-output',
    title: 'ARIMA Output',
    category: 'Time Series / Forecasting',
    usedIn: ['Default rate forecast', 'Liquidity forecast', 'Demand planning', 'Operations capacity'],
    whatItIs: 'An ARIMA output reports model order, coefficients, fit statistics and residual diagnostics for a univariate time series forecast.',
    exampleOutput: 'ARIMA(1,1,1)\nAIC: -412.35\nar.L1 coef: 0.42 p=0.018\nma.L1 coef: -0.61 p=0.004\nLjung-Box p-value: 0.31\nForecast next month: 5.4% [4.8%, 6.0%]',
    howToRead: ['AIC/BIC compare candidate models.', 'Significant coefficients suggest useful time structure.', 'Residual diagnostics check whether autocorrelation remains.', 'Forecast intervals show uncertainty, not just point estimates.'],
    goodResult: 'Residuals are reasonably clean and the model beats naive or seasonal baseline in backtesting.',
    badResult: 'The model is selected by AIC only and performs poorly in temporal validation.',
    redFlags: ['Random train/test split', 'No stationarity check', 'No baseline comparison', 'No forecast intervals'],
    howToImprove: ['Check stationarity', 'Compare naive baseline', 'Try seasonal terms', 'Use temporal cross-validation', 'Consider exogenous variables'],
    businessImpact: 'ARIMA forecasts support staffing, liquidity, portfolio monitoring and planning decisions.',
    relatedConcepts: ['Stationarity', 'ACF', 'PACF', 'Forecast interval'],
    relatedCases: ['Macro Stress Scenario', 'Operations Capacity Forecasting']
  },
  {
    id: 'cash-flow-bridge',
    title: 'Cash Flow Bridge',
    category: 'Finance / Credit Analysis',
    usedIn: ['SME rating', 'Valuation', 'Project finance', 'Credit memo'],
    whatItIs: 'A cash flow bridge translates accounting profit into actual cash generation by adjusting non-cash items, working capital, capex and debt service.',
    exampleOutput: 'Net income: 1.2M\n+ Depreciation: 0.3M\n- Working capital increase: 0.5M\n- Capex: 0.7M\nFree Cash Flow: 0.3M\nDebt service: 0.4M\nEquity Cash Flow: -0.1M',
    howToRead: ['Start with profit, then remove non-cash effects.', 'Working capital can consume cash even when profit is positive.', 'Capex and debt service show whether the business can fund itself.', 'Negative equity cash flow may signal financing pressure.'],
    goodResult: 'The company generates cash after operations, working capital, capex and debt service.',
    badResult: 'The company is profitable on paper but cannot generate enough cash to pay obligations.',
    redFlags: ['Profit positive but cash flow negative', 'Working capital ignored', 'Capex omitted', 'Debt service omitted'],
    howToImprove: ['Analyze operating, investing and financing flows separately', 'Run sensitivity on revenue and working capital', 'Compare against sector', 'Track trend over time'],
    businessImpact: 'Cash flow quality affects credit approval, valuation, debt capacity and investment decisions.',
    relatedConcepts: ['Free Cash Flow', 'Debt Service', 'Working Capital', 'Rating'],
    relatedCases: ['SME Rating / Ratios Scoring']
  }
]

export const extraModels: ModelItem[] = [
  {
    id: 'sarima',
    title: 'SARIMA',
    family: 'Seasonal Time Series',
    objective: 'Forecast a time series with recurring seasonal patterns.',
    inputs: 'Regular time series frequency, enough history to observe seasonality, temporal split and baseline comparison.',
    outputs: 'Seasonal order, coefficients, AIC/BIC, residual diagnostics, forecast intervals and error metrics.',
    interpretation: 'SARIMA is useful when seasonality is real and improves forecast over a seasonal naive baseline.',
    goodResult: 'Seasonal components have business meaning and improve out-of-sample forecast accuracy.',
    badResult: 'Seasonality is forced into a short or noisy series without validation.',
    applications: ['Monthly default rates', 'Liquidity cycles', 'Operations demand', 'Sales seasonality']
  },
  {
    id: 'garch',
    title: 'GARCH',
    family: 'Volatility Modeling',
    objective: 'Model changing volatility and volatility clustering in financial returns.',
    inputs: 'Return series, not raw prices, with appropriate diagnostics and train/test periods.',
    outputs: 'Omega, alpha, beta, persistence and conditional volatility forecast.',
    interpretation: 'Alpha reacts to new shocks; beta measures persistence. Alpha plus beta close to one indicates persistent volatility.',
    goodResult: 'Captures volatility clustering and produces useful risk forecasts.',
    badResult: 'Applied to prices instead of returns or used without residual diagnostics.',
    applications: ['Market risk', 'Portfolio risk', 'VaR inputs', 'Stress monitoring']
  },
  {
    id: 'random-forest',
    title: 'Random Forest',
    family: 'Ensemble Learning',
    objective: 'Train many decision trees and combine them to improve robustness and nonlinear prediction.',
    inputs: 'Clean tabular data, target variable, train/test split and tuned depth/leaf parameters.',
    outputs: 'Prediction score, feature importance, out-of-bag estimate and validation metrics.',
    interpretation: 'Random Forest is a strong nonlinear baseline, but feature importance can be biased and should be interpreted carefully.',
    goodResult: 'Stable performance with reduced overfitting compared with a single decision tree.',
    badResult: 'Used as a black box without calibration, explainability or segment validation.',
    applications: ['Fraud baseline', 'Credit risk challenger', 'Churn prediction', 'Propensity modeling']
  },
  {
    id: 'pca',
    title: 'PCA',
    family: 'Dimensionality Reduction',
    objective: 'Reduce many correlated variables into fewer components that explain most variance.',
    inputs: 'Scaled numeric variables, reviewed missing values and interpretation plan.',
    outputs: 'Principal components, explained variance ratio, loadings and transformed dataset.',
    interpretation: 'PCA components are mathematical directions of variance; they require careful interpretation before business use.',
    goodResult: 'A small number of components explain meaningful variance and support visualization or modeling.',
    badResult: 'Components are used in business decisions without explaining what they represent.',
    applications: ['Customer behavior compression', 'Risk factor reduction', 'Visualization', 'Preprocessing']
  }
]
