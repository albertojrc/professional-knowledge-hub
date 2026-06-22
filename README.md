# Professional Knowledge Hub

A professional learning platform for **Data Science, Banking, Finance, Economics, Management, Analytics and AI Governance**.

This repository is built as a **React + Vite + TypeScript app**, not as a static HTML page.

## Product vision

The Hub works as a professional second brain with five main experiences:

1. **Learn** — course-like modules and lessons.
2. **Interpret** — Output Atlas for reading real analytical and model outputs.
3. **Apply** — Business case playbooks.
4. **Connect** — Knowledge chains across concepts, tools, formulas, models and decisions.
5. **Reference** — formulas, models, glossary, sources and quality coverage.

## Current implementation

The first implementation includes:

- Home Dashboard
- Credit Risk Analytics module
- Calibration Plot Output Atlas page
- Formula Library
- Model Library
- Business Case Library
- Knowledge Map
- Quality Review
- Extensible data model in `src/data/knowledge`

## Local setup

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run build
npm run lint
```

## Design principles

- Main theory must be visible, not hidden behind cards.
- Modules should feel like professional courses/manuals.
- Output Atlas pages must teach interpretation deeply.
- Business cases should work like playbooks.
- Every concept should connect to formulas, models, outputs, cases and professional decisions.
