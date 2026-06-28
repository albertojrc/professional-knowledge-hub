import { existsSync } from 'node:fs'
const files=['src/types/intakeCoverage.ts','src/data/intakeCoverageMap.ts','src/pages/IntakeCoverageMapPage.tsx','src/styles/intakeCoverageOS.css','docs/SPRINT_2_13_INTAKE_COVERAGE_MAPPING.md']
const missing=files.filter((file)=>!existsSync(file))
if(missing.length){console.error(missing.join('\n'));process.exit(1)}
console.log('Sprint 2.13 check passed.')
