import { useMemo, useState } from 'react'
import { financeValuationLessons, financeValuationStudySummary } from '../data/financeValuationStudy'
import type { FinanceValuationStudyLesson } from '../types/financeValuationStudy'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface FinanceValuationStudyPageProps { focusId?: string | null }
const allValue = 'All'
const levelOptions = [allValue, ...Array.from(new Set(financeValuationLessons.map((lesson) => lesson.level))).sort()]
const evidenceOptions = [allValue, ...Array.from(new Set(financeValuationLessons.map((lesson) => lesson.evidenceStatus))).sort()]

export function FinanceValuationStudyPage({ focusId }: FinanceValuationStudyPageProps) {
  const [level, setLevel] = useState(allValue)
  const [evidence, setEvidence] = useState(allValue)
  const [query, setQuery] = useState('')
  const lessons = useMemo(() => {
    const q = query.trim().toLowerCase()
    return financeValuationLessons.filter((lesson) => level === allValue || lesson.level === level).filter((lesson) => evidence === allValue || lesson.evidenceStatus === evidence).filter((lesson) => !q || [lesson.title, lesson.level, lesson.evidenceStatus, lesson.studyObjective, ...lesson.sourceMaterials, ...lesson.coreConcepts, ...lesson.workflow, ...lesson.formulas, ...lesson.outputs, ...lesson.interpretation, ...lesson.businessDecisions, ...lesson.practicePrompts, ...lesson.connections].join(' ').toLowerCase().includes(q)).sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : levelRank(a.level) - levelRank(b.level) || a.title.localeCompare(b.title)))
  }, [evidence, focusId, level, query])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused finance lesson</div>}<div className="hero-panel finance-study-hero"><div><span className="eyebrow">Sprint 3.7 · Finance & Valuation Study Module</span><h1>Finance learning organized around statements, ratios, cash flow and valuation.</h1><p>This module turns finance concepts into formulas, outputs, interpretation and business decisions for banking, investment and management use cases.</p></div><div className="finance-study-score-card"><span className="eyebrow">Study Module</span><strong>{financeValuationStudySummary.totalLessons}</strong><p>{financeValuationStudySummary.sourceCandidates} source candidates · {financeValuationStudySummary.formulas} formulas</p><div className="inventory-mini-stats"><span>{financeValuationStudySummary.outputs} outputs</span><span>{financeValuationStudySummary.practicePrompts} prompts</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">Study Flow</span><h2>From financial statements to decision-ready valuation</h2><KnowledgeChain nodes={['Financial Data', 'Ratio / Cash Flow Analysis', 'Formula', 'Output', 'Interpretation', 'Business Decision', 'Practice']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Lesson Filters</span><h2>{lessons.length} of {financeValuationLessons.length} lessons visible</h2></div><button className="text-button" onClick={() => { setLevel(allValue); setEvidence(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search ratios, cash flow, DCF, WACC, CAPM, NPV or valuation..." /><div className="library-filter-grid"><StudySelect label="Level" value={level} values={levelOptions} onChange={setLevel} /><StudySelect label="Evidence" value={evidence} values={evidenceOptions} onChange={setEvidence} /></div></section><section className="manual-panel"><span className="eyebrow">Finance Lessons</span><h2>Learn through formulas, outputs and business decisions</h2><div className="finance-study-grid">{lessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} focused={lesson.id === focusId} />)}</div></section></section>
}

function LessonCard({ lesson, focused }: { lesson: FinanceValuationStudyLesson; focused: boolean }) {
  return <article className={`finance-study-card ${focused ? 'focused-result-card' : ''}`}><div className="finance-study-card-top"><span className="eyebrow">{lesson.level} · {lesson.evidenceStatus}</span><span className={`finance-study-pill status-${lesson.evidenceStatus.toLowerCase().replaceAll(' ', '-')}`}>{lesson.evidenceStatus}</span></div><h3>{lesson.title}</h3><p>{lesson.studyObjective}</p><h4>Source materials</h4><BadgeList items={lesson.sourceMaterials} tone="blue" /><h4>Core concepts</h4><BadgeList items={lesson.coreConcepts} tone="purple" /><h4>Professional workflow</h4><ol>{lesson.workflow.map((step) => <li key={step}>{step}</li>)}</ol><h4>Formulas and outputs</h4><BadgeList items={[...lesson.formulas, ...lesson.outputs]} tone="green" /><h4>How to interpret</h4><ul>{lesson.interpretation.map((item) => <li key={item}>{item}</li>)}</ul><h4>Business decisions</h4><BadgeList items={lesson.businessDecisions} tone="amber" /><h4>Practice prompts</h4><ul>{lesson.practicePrompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul><h4>Connected areas</h4><BadgeList items={lesson.connections} tone="blue" /></article>
}

function StudySelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}

function levelRank(level: FinanceValuationStudyLesson['level']) {
  if (level === 'Foundation') return 1
  if (level === 'Applied') return 2
  return 3
}
