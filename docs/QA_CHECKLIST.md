# Professional Knowledge Hub — QA Checklist

This checklist defines how to validate that the Hub is technically stable and conceptually aligned with the project goal.

## 1. Local setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## 2. Build validation

```bash
npm run build
```

Expected result:

- TypeScript compilation passes.
- Vite production build completes.
- `dist/` is generated locally.

## 3. Lint validation

```bash
npm run lint
```

Expected result:

- No ESLint errors.
- Warnings should be reviewed before final release.

## 4. Navigation validation

Check that the following sections open without blank screens:

- Dashboard
- Data Science OS
- Business OS
- Banking & Finance
- Credit Risk
- Professional Scenarios
- Decision Playbooks
- Output Atlas
- Formula Library
- Model Library
- Business Cases
- Knowledge Map
- Quality Review

## 5. Conceptual QA

Each major module should answer:

1. What is it?
2. When is it used?
3. How is it used?
4. What project moment does it belong to?
5. What output does it produce?
6. What decision does it support?
7. What should be monitored afterward?

## 6. Content QA labels

Use these labels internally while expanding content:

- `complete`: concept is sufficiently explained.
- `needs-example`: concept requires a practical example.
- `needs-source`: concept should be linked back to course material.
- `pending-expansion`: concept exists but needs deeper explanation.
- `recommended-complement`: useful concept not found in provided material.

## 7. Release readiness criteria

A release is ready only when:

- Build passes.
- Lint passes.
- Navigation works.
- Core pages are readable.
- No major concept is presented without context.
- Quality Review page reflects known gaps honestly.
