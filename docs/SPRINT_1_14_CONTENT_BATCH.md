# Sprint 1.14 Content Expansion Batch 2

Sprint 1.14 expands the Knowledge Library with a second batch of professional assets focused on validation, risk modeling, experimentation and management frameworks.

## New assets

### Data Science Workflow

- Train/Test Split
- Cross Validation
- Data Leakage

### Model Evaluation

- Precision-Recall Curve
- Lift Curve
- KS Statistic

### Banking / Credit Risk

- Probability of Default
- Loss Given Default
- Exposure at Default

### Business / Management

- Business Model Canvas
- A/B Testing
- MLOps Monitoring

## Files added

- `src/data/knowledgeAssetsSprint14.ts`
- `src/data/knowledgeTooltipsSprint14.ts`

## Files updated

- `src/data/knowledgeAssetRegistry.ts`
- `src/data/knowledgeTooltipRegistry.ts`
- `src/data/studyPaths.ts`
- `scripts/qa-audit.mjs`

## Platform impact

The new assets are automatically available in:

- Knowledge Library
- Global Search
- Study Dashboard
- Study Paths
- Learning Session
- Quality audit

## Study path impact

The new assets strengthen these paths:

- Credit Risk Analyst Path
- Machine Learning for Banking Path
- Data Science Workflow Path
- Finance & Strategy Analyst Path
- Management Strategy Toolkit

## Validation

Run:

```bash
npm run qa:audit
npm run validate
```

Expected audit signal:

```text
QA PASS: Sprint 1 architecture and Sprint 1.14 content audit completed successfully.
```
