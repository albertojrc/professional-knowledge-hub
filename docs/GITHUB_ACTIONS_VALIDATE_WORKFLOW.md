# GitHub Actions Validation Workflow

The connector blocked direct creation of `.github/workflows/validate.yml`, so this document stores the recommended workflow.

Create this file locally:

```text
.github/workflows/validate.yml
```

With this content:

```yaml
name: Validate Professional Knowledge Hub

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Registered validation
        run: npm run validate

      - name: Standalone visual checks
        run: |
          node scripts/check-516.mjs
          node scripts/check-517.mjs
          node scripts/check-520.mjs
          node scripts/check-521.mjs
          node scripts/check-522.mjs
          node scripts/check-523.mjs

      - name: Build
        run: npm run build
```

This workflow should be added after local validation confirms that `npm run build` passes.
