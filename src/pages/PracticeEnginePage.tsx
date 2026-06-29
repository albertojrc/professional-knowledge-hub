import { useMemo, useState } from 'react'
import { studyDrills, studyDrillSummary } from '../data/studyDrills'
import type { StudyDrill } from '../types/studyDrill'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface PracticeEnginePageProps { focusId?: string | null }
const allValue = 'All'
const typeOptions = [allValue, ...Array.from(new Set(studyDrills.map((item) => item.type))).sort()]
const areaOptions = [allValue, ...Array.from(new Set(studyDrills.map((item) => item.area))).sort()]

export function PracticeEnginePage({ focusId }: PracticeEnginePageProps) {
  const [type, setType] = useState(allValue)
  const [area, setArea] = useState(allValue)
  const [query, setQuery] = useState('')
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return studyDrills
      .filter((item) => type === allValue || item.type === type)
      .filter((item) => area === allValue || item.area === area)
      .filter((item) => !q || [item.title, item.type, item.area, item.level, item.prompt, item.context, item.solution, item.explanation, ...(item.choices ?? []), ...item.connectedModules, ...item.outputs, ...item.tags].join(' ').toLowerCase().includes(q))
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.area.localeCompare(b.area) || a.title.localeCompare(b.title)))
  }, [area, focusId, query, type])
  return <section className="page-stack">{focusId && <div className="deep-link-banner">Opened from Global Search · focused practice drill</div>}<div className="hero-panel practice-engine-hero"><div><span className="eyebrow">Sprint 3.15 · Practice Engine v1</span><h1>Practice, recall, interpret and decide across the Hub.</h1><p>Use quizzes, flashcards, mini-cases, interpretation drills, decision questions, CFA practice and Bloomberg-style briefs to turn knowledge into usable skill.</p></div><div className="practice-engine-score"><span className="eyebrow">Practice Set</span><strong>{studyDrillSummary.total}</strong><p>{studyDrillSummary.drills} drills · {studyDrillSummary.cases} mini-cases</p><div className="inventory-mini-stats"><span>{studyDrillSummary.quizzes} quizzes</span><span>{studyDrillSummary.certifications} cert drills</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">Practice Flow</span><h2>Prompt → attempt → reveal → explanation → connected module</h2><KnowledgeChain nodes={['Question', 'Attempt', 'Reveal', 'Explanation', 'Output', 'Module Review']} /></section><section className="manual-panel inventory-filter-panel"><div className="library-filter-header"><div><span className="eyebrow">Practice Filters</span><h2>{visible.length} of {studyDrills.length} drills visible</h2></div><button className="text-button" onClick={() => { setType(allValue); setArea(allValue); setQuery('') }} type="button">Clear filters</button></div><input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search SQL, cash flow, CFA, Bloomberg, SWOT or model outputs..." /><div className="library-filter-grid"><PracticeSelect label="Type" value={type} values={typeOptions} onChange={setType} /><PracticeSelect label="Area" value={area} values={areaOptions} onChange={setArea} /></div></section><section className="manual-panel"><span className="eyebrow">Practice Queue</span><h2>Work through the prompts before revealing the solution</h2><div className="practice-engine-grid">{visible.map((item) => <PracticeCard key={item.id} item={item} focused={item.id === focusId} />)}</div></section></section>
}
function PracticeCard({ item, focused }: { item: StudyDrill; focused: boolean }) { const [revealed, setRevealed] = useState(false); const typeClass = item.type.toLowerCase().split(' ').join('-'); return <article className={`practice-card ${focused ? 'focused-result-card' : ''}`}><div className="practice-card-top"><span className="eyebrow">{item.area} · {item.level}</span><span className={`practice-pill type-${typeClass}`}>{item.type}</span></div><h3>{item.title}</h3><p>{item.context}</p><div className="practice-prompt"><strong>Prompt</strong><span>{item.prompt}</span></div>{item.choices?.length ? <div className="practice-choices">{item.choices.map((choice) => <button key={choice} type="button">{choice}</button>)}</div> : null}<button className="primary-button" onClick={() => setRevealed((value) => !value)} type="button">{revealed ? 'Hide solution' : 'Reveal solution'}</button>{revealed && <div className="practice-solution"><h4>Solution</h4><p>{item.solution}</p><h4>Why</h4><p>{item.explanation}</p></div>}<h4>Outputs</h4><BadgeList items={item.outputs} tone="green" /><h4>Review modules</h4><BadgeList items={item.connectedModules} tone="blue" /><h4>Tags</h4><BadgeList items={item.tags} tone="purple" /></article> }
function PracticeSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) { return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label> }
