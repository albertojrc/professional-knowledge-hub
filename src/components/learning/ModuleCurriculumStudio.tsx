import { useState } from 'react'
import { knowledgeAssetRegistry } from '../../data/knowledgeAssetRegistry'
import type { ModuleCurriculum, ModuleCurriculumSubmodule } from '../../data/moduleCurriculum'
import { BadgeList } from '../ui/BadgeList'

interface ModuleCurriculumStudioProps {
  curriculum: ModuleCurriculum
  focusId?: string | null
  onOpenAsset: (assetId: string) => void
}

export function ModuleCurriculumStudio({ curriculum, focusId, onOpenAsset }: ModuleCurriculumStudioProps) {
  const focusedSubmodule = curriculum.submodules.find((submodule) => submodule.id === focusId || submodule.assetIds.includes(focusId ?? ''))
  const [selectedId, setSelectedId] = useState(focusedSubmodule?.id ?? curriculum.submodules[0]?.id ?? '')
  const selected = curriculum.submodules.find((submodule) => submodule.id === selectedId) ?? focusedSubmodule ?? curriculum.submodules[0]

  if (!selected) {
    return <section className="concept-learning-page"><div className="module-capsule-empty"><strong>No submodules found.</strong><p>This module needs curriculum content before it can be studied.</p></div></section>
  }

  return (
    <section className="concept-learning-page curriculum-studio-page">
      <div className="lesson-toolbar visual-reference-toolbar">
        <span className="text-button">{curriculum.eyebrow}</span>
        <div className="lesson-breadcrumb"><span>Professional Knowledge Hub</span><b>›</b><strong>{curriculum.title}</strong></div>
        <div className="lesson-progress"><span>Submodules</span><div><i style={{ width: `${Math.min(100, curriculum.submodules.length * 16)}%` }} /></div><strong>{curriculum.submodules.length}</strong></div>
      </div>

      <div className="concept-two-pane visual-reference-grid">
        <article className="concept-main lesson-paper visual-reference-main">
          <ModuleHeader curriculum={curriculum} />
          <SubmoduleNavigation submodules={curriculum.submodules} selectedId={selected.id} onSelect={setSelectedId} />
          <SubmoduleDetail submodule={selected} onOpenAsset={onOpenAsset} />
        </article>

        <aside className="concept-output-panel visual-reference-side">
          <div className="output-panel-card progress-panel"><span className="eyebrow">Current Submodule</span><h2>{selected.title}</h2><p>{selected.objective}</p></div>
          <div className="output-panel-card"><h3>Theory structure</h3><BadgeList items={selected.theory} tone="purple" /></div>
          <div className="output-panel-card success-panel"><h3>Required output</h3><BadgeList items={selected.outputs} tone="green" /></div>
          <div className="output-panel-card"><h3>Learning rule</h3><p>Open one topic at a time. Each topic opens the full detail view with definition, use, interpretation, outputs and applications.</p></div>
        </aside>
      </div>
    </section>
  )
}

function ModuleHeader({ curriculum }: { curriculum: ModuleCurriculum }) {
  const icon = curriculum.id === 'data-science' ? 'DS' : curriculum.id === 'banking-finance' ? 'BF' : 'CFA'
  return <header className="concept-hero lesson-hero visual-reference-hero"><span className="asset-icon large">{icon}</span><div><span className="eyebrow">Module Curriculum</span><h1>{curriculum.title}</h1><p>{curriculum.description}</p></div></header>
}

function SubmoduleNavigation({ submodules, selectedId, onSelect }: { submodules: ModuleCurriculumSubmodule[]; selectedId: string; onSelect: (id: string) => void }) {
  return <section className="manual-panel"><div className="library-filter-header"><div><span className="eyebrow">Submodule navigation</span><h2>Choose a submodule first.</h2></div></div><div className="visual-reference-card-grid">{submodules.map((submodule) => <button className={`visual-reference-card ${selectedId === submodule.id ? 'selected' : ''}`} key={submodule.id} onClick={() => onSelect(submodule.id)} type="button"><span className="eyebrow">{submodule.assetIds.length} topics</span><h3>{submodule.title}</h3><p>{submodule.objective}</p></button>)}</div></section>
}

function SubmoduleDetail({ submodule, onOpenAsset }: { submodule: ModuleCurriculumSubmodule; onOpenAsset: (assetId: string) => void }) {
  const assets = submodule.assetIds.map((id) => knowledgeAssetRegistry.find((asset) => asset.id === id)).filter(Boolean)
  return <section className="manual-panel"><div className="library-filter-header"><div><span className="eyebrow">{submodule.title}</span><h2>Ordered topics</h2></div></div><div className="three-column-soft"><div><h3>Theory</h3><BadgeList items={submodule.theory} tone="blue" /></div><div><h3>Outputs</h3><BadgeList items={submodule.outputs} tone="green" /></div><div><h3>Study rule</h3><p>Study the concept first, then connect it to formulas, dashboards, models or cases.</p></div></div><div className="visual-reference-card-grid">{assets.map((asset) => asset && <button className="visual-reference-card" key={asset.id} onClick={() => onOpenAsset(asset.id)} type="button"><span className="eyebrow">{asset.type} · {asset.difficulty}</span><h3>{asset.title}</h3><p>{asset.summary}</p><div className="search-result-meta"><span>{asset.category}</span><span>Open detail view</span></div></button>)}</div></section>
}
