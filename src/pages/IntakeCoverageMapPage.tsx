import { useMemo, useState } from 'react'
import { intakeCoverageMapItems, intakeCoverageSummary } from '../data/intakeCoverageMap'
import type { IntakeCoverageMapItem } from '../types/intakeCoverage'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface IntakeCoverageMapPageProps { focusId?: string | null }
const allValue = 'All'
const readinessOptions = [allValue, ...Array.from(new Set(intakeCoverageMapItems.map((item) => item.readiness))).sort()]

export function IntakeCoverageMapPage({ focusId }: IntakeCoverageMapPageProps) {
  const [readiness, setReadiness] = useState(allValue)
  const [query, setQuery] = useState('')
  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return intakeCoverageMapItems.filter((item) => readiness === allValue || item.readiness === readiness).filter((item) => !q || [item.title, item.intakeId, item.readiness, ...item.coverageRecordIds, ...item.evidenceRecordIds, ...item.graphNodeIds, ...item.graphLinkIds, ...item.upgradeCandidates, ...item.validationQuestions, item.nextAction].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.title.localeCompare(b.title)))
  }, [focusId, query, readiness])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused intake coverage map</div>}<div className="hero-panel intake-coverage-hero"><div><span className="eyebrow">Sprint 2.13 · Intake-to-Coverage Mapping</span><h1>Map missing files to evidence, coverage and graph updates.</h1><p>This page shows exactly what each missing file group can unlock once real material is received and reviewed.</p></div><div className="intake-coverage-score-card"><span className="eyebrow">Mapping Summary</span><strong>{intakeCoverageSummary.total}</strong><p>intake maps</p><div className="inventory-mini-stats"><span>{intakeCoverageSummary.blocked} blocked</span><span>{intakeCoverageSummary.readyWhenReceived} ready</span><span>{intakeCoverageSummary.upgradeCandidates} candidates</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">Traceability Chain</span><h2>From file arrival to source-backed decision</h2><KnowledgeChain nodes={['Missing File', 'Intake Item', 'Course Evidence', 'Source Coverage', 'Knowledge Graph', 'Asset Upgrade Decision']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Mapping Filters</span><h2>{items.length} of {intakeCoverageMapItems.length} mappings visible</h2></div><button className="text-button" onClick={() => { setReadiness(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search coverage records, evidence records, graph links or upgrade candidates..." /><div className="library-filter-grid"><MapSelect label="Readiness" value={readiness} values={readinessOptions} onChange={setReadiness} /></div></section><section className="manual-panel"><span className="eyebrow">Mapping Records</span><h2>What each intake item updates</h2><div className="intake-coverage-grid">{items.map((item) => <MapCard key={item.id} item={item} focused={item.id === focusId} />)}</div></section></section>
}

function MapCard({ item, focused }: { item: IntakeCoverageMapItem; focused: boolean }) {
  return <article className={`intake-coverage-card ${focused ? 'focused-result-card' : ''}`}><div className="intake-coverage-card-top"><span className="eyebrow">{item.intakeId}</span><span className={`mapping-readiness-pill readiness-${item.readiness.toLowerCase().replaceAll(' ', '-')}`}>{item.readiness}</span></div><h3>{item.title}</h3><h4>Coverage records</h4><BadgeList items={item.coverageRecordIds.length ? item.coverageRecordIds : ['No coverage record yet']} tone="blue" /><h4>Course evidence records</h4><BadgeList items={item.evidenceRecordIds.length ? item.evidenceRecordIds : ['No evidence record yet']} tone="green" /><h4>Graph updates</h4><BadgeList items={[...item.graphNodeIds, ...item.graphLinkIds].length ? [...item.graphNodeIds, ...item.graphLinkIds] : ['No graph link yet']} tone="purple" /><h4>Upgrade candidates</h4><BadgeList items={item.upgradeCandidates} tone="amber" /><h4>Validation questions</h4><ul>{item.validationQuestions.map((question) => <li key={question}>{question}</li>)}</ul><h4>Update sequence</h4><KnowledgeChain nodes={item.updateSequence} /><div className="mini-result good">Next action: {item.nextAction}</div></article>
}

function MapSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
