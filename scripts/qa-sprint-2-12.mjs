import { existsSync, readFileSync } from 'node:fs'

const files = ['src/types/sourceIntake.ts','src/data/sourceIntake.ts','src/pages/SourceIntakePage.tsx','src/styles/sourceIntakeOS.css','docs/SPRINT_2_12_SOURCE_INTAKE.md']
const checks = [['src/types/knowledge.ts','source-intake'],['src/app/App.tsx','SourceIntakePage'],['src/components/layout/Sidebar.tsx','source-intake'],['src/main.tsx','sourceIntakeOS.css'],['src/data/sourceIntake.ts','sourceIntakeItems'],['src/pages/SourceIntakePage.tsx','sourceIntakeSummary']]
function fail(m){console.error(`QA FAIL: ${m}`);process.exitCode=1}
function file(p){if(!existsSync(p))fail(`Missing ${p}`)}
function text(p,t){if(!existsSync(p))return fail(`Missing ${p}`);if(!readFileSync(p,'utf8').includes(t))fail(`${p} missing ${t}`)}
files.forEach(file)
checks.forEach(([p,t])=>text(p,t))
if(!process.exitCode)console.log('QA PASS: Sprint 2.12 source intake audit completed successfully.')
