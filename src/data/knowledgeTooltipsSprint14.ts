import type { KnowledgeTooltip } from './knowledgeTooltips'

export const sprint14KnowledgeTooltips: Record<string, KnowledgeTooltip> = {
  'train performance': {
    label: 'Train Performance',
    meaning: 'Performance measured on the data used to fit the model.',
    goodSignal: 'Good when it is strong but still close to validation or test performance.',
    badSignal: 'Very high train performance with much lower test performance suggests overfitting.',
    howToImprove: 'Simplify the model, regularize, reduce leakage, validate features and compare against cross-validation.'
  },
  'test performance': {
    label: 'Test Performance',
    meaning: 'Performance measured on data not used during model training or tuning.',
    goodSignal: 'Good when it remains strong and stable versus training and validation results.',
    badSignal: 'Weak test performance means the model may not generalize to real decisions.',
    howToImprove: 'Improve features, reduce overfitting, redesign validation and ensure the test set represents the future population.'
  },
  'generalization gap': {
    label: 'Generalization Gap',
    meaning: 'The difference between training performance and out-of-sample performance.',
    goodSignal: 'Small gap means the model generalizes reasonably well.',
    badSignal: 'Large gap means overfitting, leakage or unstable patterns may exist.',
    howToImprove: 'Use simpler models, cross-validation, regularization, better splits and leakage checks.'
  },
  'mean score': {
    label: 'Mean Score',
    meaning: 'Average validation performance across cross-validation folds.',
    goodSignal: 'Higher mean score is good when it is stable across folds.',
    badSignal: 'High mean score with high variance may be unreliable.',
    howToImprove: 'Inspect fold variance, improve data quality, use better features and ensure folds reflect the business problem.'
  },
  'score standard deviation': {
    label: 'Score Standard Deviation',
    meaning: 'How much validation performance changes across folds.',
    goodSignal: 'Low standard deviation means model performance is stable.',
    badSignal: 'High standard deviation suggests instability, small samples or distribution differences.',
    howToImprove: 'Use more data, better stratification, time-aware validation or simpler models.'
  },
  'validation variance': {
    label: 'Validation Variance',
    meaning: 'The degree to which validation scores fluctuate across splits or folds.',
    goodSignal: 'Low variance means the model behaves consistently across samples.',
    badSignal: 'High variance means performance depends too much on the specific split.',
    howToImprove: 'Use cross-validation, reduce model complexity and check sample representativeness.'
  },
  'average precision': {
    label: 'Average Precision',
    meaning: 'A summary of the Precision-Recall Curve across thresholds.',
    goodSignal: 'Higher is better, especially for rare-event detection.',
    badSignal: 'Low average precision means the model struggles to identify positives efficiently.',
    howToImprove: 'Improve rare-event features, tune thresholds, handle class imbalance and compare models on PR curves.'
  },
  'lift': {
    label: 'Lift',
    meaning: 'How much better a model-selected group performs compared with random selection.',
    goodSignal: 'Lift above 1 in top segments means the model adds prioritization value.',
    badSignal: 'Lift near 1 means the model is close to random for that segment.',
    howToImprove: 'Improve ranking features, validate score bands, review target definition and monitor lift over time.'
  },
  'capture rate': {
    label: 'Capture Rate',
    meaning: 'The share of total positive events captured within a selected top-scored segment.',
    goodSignal: 'High capture rate in a small top segment means strong prioritization.',
    badSignal: 'Low capture rate means the model misses too many important cases.',
    howToImprove: 'Improve model ranking, adjust threshold or target a larger segment if business capacity allows.'
  },
  'decile event rate': {
    label: 'Decile Event Rate',
    meaning: 'The observed event rate within each score decile or band.',
    goodSignal: 'Good when higher-risk deciles show clearly higher event rates.',
    badSignal: 'Flat or noisy deciles suggest weak ranking or unstable score bands.',
    howToImprove: 'Improve features, recalibrate score bands and validate with larger samples.'
  },
  'bad rate': {
    label: 'Bad Rate',
    meaning: 'The observed default or negative outcome rate in a population or score band.',
    goodSignal: 'Good when it aligns with expected risk bands and business appetite.',
    badSignal: 'Unexpectedly high or unstable bad rates indicate risk deterioration or calibration issues.',
    howToImprove: 'Review score calibration, segment quality, underwriting policy and macro conditions.'
  },
  'conversion rate': {
    label: 'Conversion Rate',
    meaning: 'The percentage of users or customers who complete the desired action.',
    goodSignal: 'Higher conversion is good when quality and profitability remain acceptable.',
    badSignal: 'Low conversion may mean weak offer, bad targeting, friction or poor product-market fit.',
    howToImprove: 'Improve targeting, messaging, user experience, pricing and test changes through experiments.'
  },
  'uplift': {
    label: 'Uplift',
    meaning: 'The incremental improvement caused by a treatment versus a control group.',
    goodSignal: 'Positive uplift with meaningful business impact supports rollout.',
    badSignal: 'Negative or insignificant uplift means the change may not work or evidence is insufficient.',
    howToImprove: 'Improve experiment design, sample size, targeting and hypothesis clarity.'
  },
  'p-value': {
    label: 'P-value',
    meaning: 'A statistical measure of how surprising the observed result would be if there were no true effect.',
    goodSignal: 'Small p-value may support evidence of an effect, assuming the experiment was designed properly.',
    badSignal: 'Large p-value means the observed difference may be due to noise.',
    howToImprove: 'Increase sample size, reduce noise, predefine metrics and avoid peeking or repeated testing abuse.'
  },
  'confidence interval': {
    label: 'Confidence Interval',
    meaning: 'A range of plausible values for an estimated effect or metric.',
    goodSignal: 'Narrow interval fully above the business threshold supports a confident decision.',
    badSignal: 'Wide interval or interval crossing zero means uncertainty remains high.',
    howToImprove: 'Increase sample size, reduce variance and improve measurement quality.'
  },
  'sample size': {
    label: 'Sample Size',
    meaning: 'The number of observations included in an analysis or experiment.',
    goodSignal: 'Large enough to detect the expected effect with acceptable confidence.',
    badSignal: 'Too small can produce noisy or misleading results.',
    howToImprove: 'Run the test longer, broaden eligible population or increase event volume.'
  },
  'population stability index': {
    label: 'Population Stability Index',
    meaning: 'PSI measures how much a population distribution has shifted compared with a baseline.',
    goodSignal: 'Low PSI means the population is relatively stable.',
    badSignal: 'High PSI suggests drift that may reduce model reliability.',
    howToImprove: 'Investigate segment changes, recalibrate, retrain or adjust policy if drift is persistent.'
  },
  'data drift': {
    label: 'Data Drift',
    meaning: 'A change in input feature distributions between training and production data.',
    goodSignal: 'Low drift means the production population resembles training conditions.',
    badSignal: 'High drift may cause model performance degradation.',
    howToImprove: 'Monitor features, investigate business changes, retrain or update feature definitions.'
  },
  'prediction drift': {
    label: 'Prediction Drift',
    meaning: 'A change in the distribution of model scores or predictions over time.',
    goodSignal: 'Stable prediction distribution when the business population is stable.',
    badSignal: 'Unexpected shifts may indicate data drift, policy change or model degradation.',
    howToImprove: 'Review input drift, score bands, deployment changes and outcome trends.'
  },
  'calibration drift': {
    label: 'Calibration Drift',
    meaning: 'A change over time in how well predicted probabilities match observed outcomes.',
    goodSignal: 'Observed rates remain close to predicted probabilities across score bands.',
    badSignal: 'Large gaps between predicted and observed rates indicate unreliable probabilities.',
    howToImprove: 'Recalibrate probabilities, update models, review macro conditions and monitor by segment.'
  }
}
