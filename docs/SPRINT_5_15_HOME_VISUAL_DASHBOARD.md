# Sprint 5.15 — Home Visual Dashboard

## Purpose

Sprint 5.15 converts Home from a technical project dashboard into the visual entry point for the whole Professional Knowledge Hub.

## Why

After UX Reorg 3, the main modules use the Visual Learning Studio pattern. Home also needs to match that direction so the first screen feels like a professional learning platform rather than a backend control panel.

## Added UX structure

Home now includes:

- lesson-style toolbar and breadcrumb
- hero card with platform positioning
- main module gateway cards
- visual study flow
- hidden command actions for Global Search, Learning Session and Study Paths
- Continue Studying and Recommended Next sections
- backstage tools moved below the primary experience
- right-side study tracker
- current path panel
- output preview
- interpretation checklist
- progress by domain

## Navigation rule

The visible sidebar remains fixed at five modules:

1. Home
2. Data Science
3. Banking & Finance
4. CFA & Certifications
5. Knowledge Map

Home may surface backstage tools, but it must not turn them into primary navigation.

## Validation

Run:

```bash
npm run qa:sprint515
```

or full validation:

```bash
npm run validate
```
