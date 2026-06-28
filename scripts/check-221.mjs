import { existsSync } from 'node:fs'
const files=['src/types/controlledUpdateLog.ts','src/data/controlledUpdateLog.ts','src/pages/ControlledUpdateLogPage.tsx','src/styles/controlledUpdateLogOS.css','docs/SPRINT_2_21_CONTROLLED_UPDATE_LOG.md']
const missing=files.filter((file)=>!existsSync(file))
if(missing.length){console.error(missing.join('\n'));process.exit(1)}
console.log('Sprint 2.21 check passed.')
