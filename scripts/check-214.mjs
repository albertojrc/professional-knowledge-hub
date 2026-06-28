import { existsSync } from 'node:fs'
const files=['src/types/sourceDecision.ts','src/data/sourceDecisionBoard.ts','src/pages/SourceDecisionBoardPage.tsx','src/styles/sourceDecisionOS.css','docs/SPRINT_2_14_SOURCE_DECISION_BOARD.md']
const missing=files.filter((file)=>!existsSync(file))
if(missing.length){console.error(missing.join('\n'));process.exit(1)}
console.log('Sprint 2.14 check passed.')
