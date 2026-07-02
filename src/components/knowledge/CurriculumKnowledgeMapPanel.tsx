import { useState } from 'react'
import { curriculumKnowledgeMap, curriculumMapSummary } from '../../data/curriculumKnowledgeMap'
import { BadgeList } from '../ui/BadgeList'
import { KnowledgeChain } from './KnowledgeChain'

export function CurriculumKnowledgeMapPanel() {
  const [selectedModuleId, setSelectedModuleId] = useState(curriculumKnowledgeMap[0]?.id ?? '')
  const selectedModule = curriculumKnowledgeMap.find((module) => module.id === selectedModuleId) ?? curriculumKnowledgeMap[0]
  if (!selectedModule) return null
  const firstSubmodule = selectedModule.submodules[0]
  return <section className="manual-panel curriculum-map-panel"><div className="library-filter-header"><div><span className="eyebrow">Curriculum map</span><h2>Module → Submodule → Topic → Output</h2></div><div className="module-capsule-stats"><strong>{curriculumMapSummary.topics}</strong><span>mapped topics</span><small>{curriculumMapSummary.submodules} submodules</small></div></div><div className="visual-pathway-tabs curriculum-map-tabs">{curriculumKnowledgeMap.map((module) => <button className={module.id === selectedModule.id ? 'selected' : ''} key={module.id} onClick={() => setSelectedModuleId(module.id)} type="button">{module.title.replace(' Curriculum', '')}</button>)}</div><article className="visual-pathway-card curriculum-map-card"><p>{selectedModule.description}</p><KnowledgeChain nodes={['Module', 'Submodule', 'Topic', 'Output', 'Decision']} /><div className="curriculum-map-submodule-grid">{selectedModule.submodules.map((submodule) => <div className="curriculum-map-submodule" key={submodule.id}><span className="eyebrow">{submodule.topics.length} topics</span><h3>{submodule.title}</h3><p>{submodule.objective}</p><BadgeList items={submodule.outputs.slice(0, 4)} tone="green" /></div>)}</div>{firstSubmodule && <div className="curriculum-map-topic-strip"><span className="eyebrow">Example topic chain</span><h3>{firstSubmodule.title}</h3><KnowledgeChain nodes={firstSubmodule.topics.slice(0, 6).map((topic) => topic.title)} /></div>}</article></section>
}
