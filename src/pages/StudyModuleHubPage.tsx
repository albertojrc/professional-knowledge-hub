import { useMemo, useState } from 'react'
import { studyModuleCards, studyModuleHubSummary } from '../data/studyModuleHub'
import type { StudyModuleCard } from '../types/studyModule'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface StudyModuleHubPageProps { focusId?: string | null }
const allValue = 'All'
const priorityOptions = [allValue, ...Array.from(new Set(studyModuleCards.map((module) => module.priority))).sort()]
const statusOptions = [allValue, ...Array.from(new Set(studyModuleCards.map((module) => module.status))).sort()]

export function StudyModuleHubPage({ focusId }: StudyModuleHubPageProps) {
  const [priority, setPriority] = useState(allValue)
  const [status, setStatus] = useState(allValue)
  const [query, setQuery] = useState('')
  const modules = useMemo(() => {
    const q = query.trim().toLowerCase()
    return studyModuleCards.filter((module) => priority === allValue || module.priority === priority).filter((module) => status === allValue || module.status === status).filter((module) => !q || [module.title, module.priority, module.status, module.description, module.studyGoal, ...module.sourceMaterials, ...module.learningObjects, ...module.formulas, ...module.outputs, ...module.cases, ...module.practice, ...module.linkedViews].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : priorityRank(a.priority) - priorityRank(b.priority) || a.title.localeCompare(b.title)))
  }, [focusId, priority, query, status])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused study module</div>}<div className="hero-panel study-module-hero"><div><span className="eyebrow">Sprint 3.3 · Study-First Navigation</span><h1>Study Modules become the center of the Hub.</h1><p>Academic materials now feed the learning modules directly. Evidence and Source remain as backstage QA, while the main experience is organized around professional study areas.</p></div><div className="study-module-score-card"><span className="eyebrow">Study Modules</span><strong>{studyModuleHubSummary.total}</strong><p>{studyModuleHubSummary.core} core · {studyModuleHubSummary.readyForReview} ready for source review</p><div className="inventory-mini-stats"><span>{studyModuleHubSummary.active} active</span><span>{studyModuleHubSummary.planned} planned</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">New Learning Flow</span><h2>Sources support learning, not the other way around</h2><KnowledgeChain nodes={['Study Module', 'Academic Materials', 'Concepts', 'Formulas', 'Outputs', 'Cases', 'Practice']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Module Filters</span><h2>{modules.length} of {studyModuleCards.length} modules visible</h2></div><button className="text-button" onClick={() => { setPriority(allValue); setStatus(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search modules, materials, formulas, outputs, cases or practice..." /><div className="library-filter-grid"><ModuleSelect label="Priority" value={priority} values={priorityOptions} onChange={setPriority} /><ModuleSelect label="Status" value={status} values={statusOptions} onChange={setStatus} /></div></section><section className="manual-panel"><span className="eyebrow">Learning Modules</span><h2>Professional knowledge areas</h2><div className="study-module-grid">{modules.map((module) => <ModuleCard key={module.id} module={module} focused={module.id === focusId} />)}</div></section></section>
}

function ModuleCard({ module, focused }: { module: StudyModuleCard; focused: boolean }) {
  return <article className={`study-module-card ${focused ? 'focused-result-card' : ''}`}><div className="study-module-card-top"><span className="eyebrow">{module.priority} · {module.status}</span><span className={`study-module-status status-${module.status.toLowerCase().replaceAll(' ', '-')}`}>{module.status}</span></div><h3>{module.title}</h3><p>{module.description}</p><div className="mini-result good">Study goal: {module.studyGoal}</div><h4>Academic materials feeding this module</h4><BadgeList items={module.sourceMaterials} tone="blue" /><h4>Learning objects</h4><BadgeList items={module.learningObjects} tone="purple" /><h4>Formulas and outputs</h4><BadgeList items={[...module.formulas, ...module.outputs].length ? [...module.formulas, ...module.outputs] : ['No formula-heavy layer yet']} tone="green" /><h4>Cases and practice</h4><ul>{[...module.cases, ...module.practice].map((item) => <li key={item}>{item}</li>)}</ul><h4>Linked views</h4><BadgeList items={module.linkedViews} tone="amber" /></article>
}

function ModuleSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}

function priorityRank(priority: StudyModuleCard['priority']) {
  if (priority === 'Core') return 1
  if (priority === 'Advanced') return 2
  if (priority === 'Certification') return 3
  return 4
}
