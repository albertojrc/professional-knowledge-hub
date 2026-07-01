import { useMemo, useState } from 'react'
import type { ViewId } from '../../types/knowledge'
import type { CommandCenterSummary, CommandCenterTrack } from '../../types/moduleCommandCenter'
import { BadgeList } from '../ui/BadgeList'
import { ReadingGuide } from '../ui/ReadingGuide'
import { KnowledgeChain } from '../knowledge/KnowledgeChain'
import { ModuleSearchCapsules } from '../search/ModuleSearchCapsules'

interface VisualModuleStudioProps {
  moduleTitle: string
  moduleEyebrow: string
  icon: string
  description: string
  summary: CommandCenterSummary
  tracks: CommandCenterTrack[]
  focusId?: string | null
  searchTitle: string
  searchDescription: string
  areaHints: string[]
  targetViews: ViewId[]
  keywords: string[]
  onNavigate?: (view: ViewId, focusId?: string | null) => void
  onOpenAsset?: (assetId: string) => void
}

const lessonSections = ['Path', 'Workflow', 'Outputs', 'Concepts', 'Practice', 'Capsules']

export function VisualModuleStudio({ moduleTitle, moduleEyebrow, icon, description, summary, tracks, focusId, searchTitle, searchDescription, areaHints, targetViews, keywords, onNavigate, onOpenAsset }: VisualModuleStudioProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const focused = tracks.find((track) => track.id === focusId || track.aliases?.includes(focusId ?? ''))
  const selected = focused ?? tracks.find((track) => track.id === selectedId) ?? tracks[0]
  const primaryOutputs = selected.primaryOutputs.slice(0, 6)
  const routeTargets = selected.connectedViews.slice(0, 5)

  const trackStats = useMemo(() => [
    `${summary.totalTracks} learning paths`,
    `${summary.outputs} professional outputs`,
    `${summary.professionalTracks} professional layers`
  ], [summary])

  return (
    <section className="concept-learning-page visual-module-studio">
      <div className="lesson-toolbar visual-module-toolbar">
        <span className="text-button">{moduleEyebrow}</span>
        <div className="lesson-breadcrumb"><span>Professional Knowledge Hub</span><b>›</b><span>{moduleTitle}</span><b>›</b><strong>{selected.title}</strong></div>
        <div className="lesson-progress"><span>Module status</span><div><i /></div><strong>{selected.status}</strong></div>
      </div>

      <div className="concept-two-pane visual-module-grid">
        <article className="concept-main lesson-paper visual-module-paper">
          <header className="concept-hero lesson-hero visual-module-hero">
            <span className="asset-icon large">{icon}</span>
            <div>
              <span className="eyebrow">{selected.eyebrow} · {selected.level}</span>
              <h1>{moduleTitle}</h1>
              <p>{description}</p>
              <BadgeList items={[selected.status, selected.level, ...trackStats]} tone="blue" />
            </div>
          </header>

          <nav className="lesson-section-tabs" aria-label="Module sections">{lessonSections.map((section, index) => <span key={section}>{index + 1}. {section}</span>)}</nav>

          <section className="visual-track-picker" aria-label={`${moduleTitle} paths`}>
            {tracks.map((track) => <button className={`visual-track-chip ${track.id === selected.id ? 'selected' : ''}`} key={track.id} onClick={() => setSelectedId(track.id)} type="button"><span>{track.level}</span><strong>{track.title}</strong></button>)}
          </section>

          <ReadingGuide title={`How to study ${selected.title}`} steps={['Start with the business question and the professional output.', 'Understand the workflow, core concepts and formulas/tools together.', 'Finish by opening the real search capsules connected to this path.']} />

          <section className="lesson-block"><div className="lesson-block-title"><span>1</span><h2>What is this path?</h2></div><p>{selected.summary}</p></section>
          <section className="lesson-block insight-block"><div className="lesson-block-title"><span>2</span><h2>Why it matters</h2></div><p>{selected.whyItMatters}</p></section>

          <section className="lesson-block output-learning-block">
            <div className="lesson-block-title"><span>3</span><h2>Professional workflow</h2></div>
            <KnowledgeChain nodes={selected.workflow} />
          </section>

          <section className="three-column-soft visual-module-columns">
            <div className="lesson-block"><h3>Outputs to build</h3><BadgeList items={primaryOutputs} tone="blue" /></div>
            <div className="lesson-block"><h3>Core concepts</h3><BadgeList items={selected.coreConcepts.slice(0, 8)} tone="purple" /></div>
            <div className="lesson-block"><h3>Formulas & tools</h3><BadgeList items={selected.formulasAndTools.slice(0, 8)} tone="green" /></div>
          </section>

          <section className="lesson-block tip-block"><div className="lesson-block-title"><span>✓</span><h2>Practice moves</h2></div><ul className="clean-list">{selected.practiceMoves.map((item) => <li key={item}>{item}</li>)}</ul></section>

          <ModuleSearchCapsules title={searchTitle} eyebrow="Real Search Layer" description={searchDescription} areaHints={areaHints} targetViews={targetViews} keywords={keywords} focusId={focusId} onNavigate={onNavigate} onOpenAsset={onOpenAsset} />
        </article>

        <aside className="concept-output-panel visual-module-side">
          <div className="output-panel-card progress-panel"><span className="eyebrow">Study Tracker</span><h2>{selected.title}</h2><p>{selected.nextAction}</p><BadgeList items={selected.searchTerms.slice(0, 8)} tone="amber" /></div>
          <div className="output-panel-card"><span className="eyebrow">Output View</span><h2>{primaryOutputs[0] ?? 'Professional Output'}</h2><div className="visual-output-preview"><span /> <i /> <b /></div><p>Use this panel to connect learning with the output you should be able to build or interpret.</p></div>
          <div className="output-panel-card success-panel"><h3>Interpretation checklist</h3><ul><li>What business question does this answer?</li><li>Which output proves understanding?</li><li>Which decision becomes possible?</li></ul></div>
          <div className="output-panel-card"><h3>Connected views</h3><BadgeList items={routeTargets} tone="blue" /></div>
          <div className="output-panel-card source-panel"><h3>Module rule</h3><p>Every topic must connect to a concept, workflow, output, decision and real capsule from the search index.</p></div>
        </aside>
      </div>
    </section>
  )
}
