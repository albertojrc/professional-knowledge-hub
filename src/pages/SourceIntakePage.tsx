import { useMemo, useState } from 'react'
import { sourceIntakeItems, sourceIntakeSummary } from '../data/sourceIntake'
import type { SourceIntakeItem } from '../types/sourceIntake'
import { BadgeList } from '../components/ui/BadgeList'

interface SourceIntakePageProps { focusId?: string | null }
const allValue = 'All'
const priorityOptions = [allValue, ...Array.from(new Set(sourceIntakeItems.map((item) => item.priority))).sort()]
const areaOptions = [allValue, ...Array.from(new Set(sourceIntakeItems.map((item) => item.targetArea))).sort()]
const typeOptions = [allValue, ...Array.from(new Set(sourceIntakeItems.map((item) => item.fileType))).sort()]

export function SourceIntakePage({ focusId }: SourceIntakePageProps) {
  const [priority, setPriority] = useState(allValue)
  const [area, setArea] = useState(allValue)
  const [fileType, setFileType] = useState(allValue)
  const [query, setQuery] = useState('')
  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sourceIntakeItems.filter((item) => priority === allValue || item.priority === priority).filter((item) => area === allValue || item.targetArea === area).filter((item) => fileType === allValue || item.fileType === fileType).filter((item) => !q || [item.title, item.fileType, item.priority, item.status, item.program, item.targetArea, item.whyNeeded, ...item.unlocks, ...item.acceptableFormats, ...item.minimumEvidenceNeeded, item.nextAction].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : priorityRank(b.priority) - priorityRank(a.priority) || a.title.localeCompare(b.title)))
  }, [area, fileType, focusId, priority, query])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused source intake item</div>}<div className="hero-panel source-intake-hero"><div><span className="eyebrow">Sprint 2.12 · Missing Course Files Intake</span><h1>What files are needed to unlock source-backed knowledge?</h1><p>This page defines missing course files, acceptable formats, minimum evidence and the Hub objects each file can upgrade.</p></div><div className="source-intake-score-card"><span className="eyebrow">Intake Queue</span><strong>{sourceIntakeSummary.total}</strong><p>file groups needed</p><div className="inventory-mini-stats"><span>{sourceIntakeSummary.critical} critical</span><span>{sourceIntakeSummary.high} high</span><span>{sourceIntakeSummary.needed} needed</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">Upload Logic</span><h2>One source file can unlock many Hub objects</h2><p>For example, one finance case with formulas and outputs could support Financial Ratios, Cash Flow Analysis, Formula Library items and Business Case Library records.</p></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Intake Filters</span><h2>{items.length} of {sourceIntakeItems.length} items visible</h2></div><button className="text-button" onClick={() => { setPriority(allValue); setArea(allValue); setFileType(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search missing files, formats, assets or evidence needed..." /><div className="library-filter-grid"><IntakeSelect label="Priority" value={priority} values={priorityOptions} onChange={setPriority} /><IntakeSelect label="Area" value={area} values={areaOptions} onChange={setArea} /><IntakeSelect label="File type" value={fileType} values={typeOptions} onChange={setFileType} /></div></section><section className="manual-panel"><span className="eyebrow">Missing File Groups</span><h2>Prioritized intake queue</h2><div className="source-intake-grid">{items.map((item) => <IntakeCard key={item.id} item={item} focused={item.id === focusId} />)}</div></section></section>
}

function IntakeCard({ item, focused }: { item: SourceIntakeItem; focused: boolean }) {
  return <article className={`source-intake-card ${focused ? 'focused-result-card' : ''}`}><div className="source-intake-card-top"><span className="eyebrow">{item.fileType} · {item.program}</span><span className={`intake-priority-pill priority-${item.priority.toLowerCase()}`}>{item.priority}</span></div><h3>{item.title}</h3><div className="material-meta-row"><span>{item.status}</span><span>{item.targetArea}</span></div><p>{item.whyNeeded}</p><h4>Unlocks</h4><BadgeList items={item.unlocks} tone="purple" /><h4>Accepted formats</h4><BadgeList items={item.acceptableFormats} tone="blue" /><h4>Minimum evidence needed</h4><ul>{item.minimumEvidenceNeeded.map((point) => <li key={point}>{point}</li>)}</ul><h4>Intake checklist</h4><ul>{item.intakeChecklist.map((point) => <li key={point}>{point}</li>)}</ul><div className="mini-result good">Next action: {item.nextAction}</div></article>
}

function IntakeSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}

function priorityRank(priority: SourceIntakeItem['priority']) {
  if (priority === 'Critical') return 4
  if (priority === 'High') return 3
  if (priority === 'Medium') return 2
  return 1
}
