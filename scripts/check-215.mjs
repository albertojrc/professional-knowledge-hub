import { existsSync } from 'node:fs'
const files=['src/types/sourceGovernance.ts','src/data/sourceGovernanceSummary.ts','src/pages/SourceGovernanceSummaryPage.tsx','src/styles/sourceGovernanceOS.css','docs/SPRINT_2_15_SOURCE_GOVERNANCE_SUMMARY.md']
const missing=files.filter((file)=>!existsSync(file))
if(missing.length){console.error(missing.join('\n'));process.exit(1)}
console.log('Sprint 2.15 check passed.')
