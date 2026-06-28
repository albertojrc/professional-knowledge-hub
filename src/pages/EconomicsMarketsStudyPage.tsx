import { useMemo, useState } from 'react'
import { economicsLessons, economicsStudySummary } from '../data/economicsStudy'
import type { EconomicsLesson } from '../types/economicsStudy'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface EconomicsMarketsStudyPageProps { focusId?: string | null }
const allValue = 'All'
const levelOptions = [allValue, ...Array.from(new Set(economicsLessons.map((lesson) => lesson.level))).sort()]
const statusOptions = [allValue, ...Array.from(new Set(economicsLessons.map((lesson) => lesson.status))).sort()]

export function EconomicsMarketsStudyPage({ focusId }: EconomicsMarketsStudyPageProps) {
  const [level, setLevel] = useState(allValue)
  const [status, setStatus] = useState(allValue)
  const [query, setQuery] = useState('')
  const lessons = useMemo(() => {
    const q = query.trim().toLowerCase()
    return economicsLessons.filter((lesson) => level === allValue || lesson.level === level).filter((lesson) => status === allValue || lesson.status === status).filter((lesson) => !q || [lesson.title, lesson.level, lesson.status, lesson.objective, ...lesson.materials, ...lesson.concepts, ...lesson.workflow, ...lesson.formulas, ...lesson.outputs, ...lesson.interpretation, ...lesson.decisions, ...lesson.practice, ...lesson.connections].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : levelRank(a.level) - levelRank(b.level) || a.title.localeCompare(b.title)))
  }, [focusId, level, query, status])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused economics lesson</div>}<div className="hero-panel economics-study-hero"><div><span className="eyebrow">Sprint 3.8 · Economics & Markets Study Module</span><h1>Economics and markets learning for finance, banking and strategy decisions.</h1><p>This module turns GDP, inflation, rates, central banks, FX and scenarios into interpretation workflows and business decisions.</p></div><div className="economics-study-score-card"><span className="eyebrow">Study Module</span><strong>{economicsStudySummary.totalLessons}</strong><p>{economicsStudySummary.formulas} formulas · {economicsStudySummary.outputs} outputs</p><div className="inventory-mini-stats"><span>{economicsStudySummary.practicePrompts} prompts</span><span>{economicsStudySummary.candidates} candidates</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">Study Flow</span><h2>From macro indicator to decision-ready market view</h2><KnowledgeChain nodes={['Economic Indicator', 'Macro Context', 'Market Impact', 'Business Risk', 'Decision', 'Practice']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Lesson Filters</span><h2>{lessons.length} of {economicsLessons.length} lessons visible</h2></div><button className="text-button" onClick={() => { setLevel(allValue); setStatus(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search GDP, inflation, rates, central banks, FX or scenarios..." /><div className="library-filter-grid"><StudySelect label="Level" value={level} values={levelOptions} onChange={setLevel} /><StudySelect label="Status" value={status} values={statusOptions} onChange={setStatus} /></div></section><section className="manual-panel"><span className="eyebrow">Economics Lessons</span><h2>Learn macro concepts through indicators, outputs and decisions</h2><div className="economics-study-grid">{lessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} focused={lesson.id === focusId} />)}</div></section></section>
}

function LessonCard({ lesson, focused }: { lesson: EconomicsLesson; focused: boolean }) {
  return <article className={`economics-study-card ${focused ? 'focused-result-card' : ''}`}><div className="economics-study-card-top"><span className="eyebrow">{lesson.level} · {lesson.status}</span><span className={`economics-study-pill status-${lesson.status.toLowerCase().replaceAll(' ', '-')}`}>{lesson.status}</span></div><h3>{lesson.title}</h3><p>{lesson.objective}</p><h4>Materials</h4><BadgeList items={lesson.materials} tone="blue" /><h4>Core concepts</h4><BadgeList items={lesson.concepts} tone="purple" /><h4>Professional workflow</h4><ol>{lesson.workflow.map((step) => <li key={step}>{step}</li>)}</ol><h4>Formulas and outputs</h4><BadgeList items={[...lesson.formulas, ...lesson.outputs]} tone="green" /><h4>How to interpret</h4><ul>{lesson.interpretation.map((item) => <li key={item}>{item}</li>)}</ul><h4>Business decisions</h4><BadgeList items={lesson.decisions} tone="amber" /><h4>Practice prompts</h4><ul>{lesson.practice.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul><h4>Connected areas</h4><BadgeList items={lesson.connections} tone="blue" /></article>
}

function StudySelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
function levelRank(level: EconomicsLesson['level']) { if (level === 'Foundation') return 1; if (level === 'Applied') return 2; return 3 }
