# Deploy Readiness Checklist

Use this checklist before publishing the Professional Knowledge Hub.

## 1. Install and validate

```bash
npm install
npm run validate
```

## 2. Run standalone sprint checks

```bash
node scripts/check-516.mjs
node scripts/check-517.mjs
node scripts/check-520.mjs
node scripts/check-521.mjs
node scripts/check-522.mjs
node scripts/check-523.mjs
node scripts/check-524.mjs
node scripts/check-525.mjs
node scripts/check-526.mjs
node scripts/check-527.mjs
node scripts/check-528.mjs
node scripts/check-529.mjs
node scripts/check-530.mjs
node scripts/check-531.mjs
node scripts/check-532.mjs
node scripts/check-533.mjs
node scripts/check-534.mjs
node scripts/check-535.mjs
node scripts/check-536.mjs
```

## 3. Run technical checks

```bash
npm run lint
npm run build
```

## 4. Product smoke test

Open the app and review the main product flow:

- Home
- Data Science
- Banking & Finance
- CFA & Certifications
- Knowledge Map
- Global Search

## 5. Curriculum smoke test

Each main module should follow:

```text
Module → Submodule → Topic → Deep Detail View
```

Review:

- Data Science submodule navigation
- Banking & Finance submodule navigation
- CFA certification-path navigation
- Topic cards opening deep detail views
- Deep detail views showing concrete study path and decision brief
- Output View showing a correct visual type or professional fallback

## 6. Search smoke test

Review:

- Global Search result opens exact topic detail when the result is a knowledge asset
- Global Search result opens focused submodule when result maps to a submodule
- Module search capsules show curriculum context
- Search labels show `Open topic detail`, `Open focused submodule`, or `Open exact view`

## 7. Knowledge Map smoke test

Review:

- Knowledge Map shows the curriculum map panel
- The map explains Module → Submodule → Topic → Output → Decision
- Professional graph nodes still render
- Pathways and relationship cards still render

## 8. UX smoke test

Review:

- Two-pane pages collapse correctly on smaller screens
- Buttons, cards, inputs and selects have visible focus states
- Empty states explain what to do next
- Side panels summarize instead of duplicating the page
- Long text remains readable

## 9. Deploy rule

Only deploy after:

```bash
npm run validate
npm run lint
npm run build
```

all pass locally.

Do not deploy if a visual route is broken, a topic cannot open its detail page, or a search result opens the wrong destination.
