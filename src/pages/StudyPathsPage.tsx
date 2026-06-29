import { useState } from 'react'
import type { AssetProgressStatus } from '../types/learningProgress'
import type { StudyPath } from '../types/studyPath'
import { studyPaths } from '../data/studyPaths'
import { getPathAssets, getStudyPathProgress } from '../data/studyPathProgress'
import { BadgeList } from '../components/ui/BadgeList'
import { PathActionBar } from '../components/study/PathActionBar'

interface AssetProgressApi { getAssetStatus: (assetId: string) => AssetProgressStatus }
interface PathPrefsApi { prefs: { activePathId: string | null; pinnedPathIds: string[] }; setActivePath: (pathId: string) => void; togglePinnedPath: (pathId: string) => void; isPinnedPath: (pathId: string) => boolean }
interface StudyPathsPageProps { assetProgress: AssetProgressApi; onOpenAsset: (assetId: string) => void; pathPrefs: PathPrefsApi }

export function StudyPathsPage({ assetProgress, onOpenAsset, pathPrefs }: StudyPathsPageProps) {
  const [activePathId, setActivePathId] = useState(pathPrefs.prefs.activePathId ?? studyPaths[0]?.id ?? '')
  const activePath = studyPaths.find((path) => path.id === activePathId) ?? studyPaths[0]
  const activeProgress = getStudyPathProgress(activePath, assetProgress)

  return (
    <section className="page-stack">
      <div className="hero-panel study-path-hero">
        <div><span className="eyebrow">Sprint 3.14 · Study Paths 2.0</span><h1>Role-based learning routes for your professional Knowledge Hub.</h1><p>Choose a career-style path, follow the module sequence, build outputs and practice until the concepts become usable at work.</p></div>
        <div className="study-path-score"><span className="eyebrow">Active Path Progress</span><strong>{activeProgress.percentage}%</strong><div className="study-score-bar"><i style={{ width: `${activeProgress.percentage}%` }} /></div><p>{activePath.title}</p></div>
      </div>

      <section className="study-path-layout">
        <aside className="study-path-list panel-card">
          <span className="eyebrow">Professional Paths</span>
          {studyPaths.map((path) => {
            const progress = getStudyPathProgress(path, assetProgress)
            const isCurrent = pathPrefs.prefs.activePathId === path.id
            const isPinned = pathPrefs.isPinnedPath(path.id)
            return <button className={`study-path-tab ${path.id === activePath.id ? 'active' : ''}`} key={path.id} onClick={() => setActivePathId(path.id)} type="button"><span className="asset-icon small">{path.icon}</span><div><strong>{path.title}</strong><small>{path.targetRole}{isCurrent ? ' · Current' : ''}{isPinned ? ' · Pinned' : ''}</small></div><b>{progress.percentage}%</b></button>
          })}
        </aside>

        <article className="study-path-main">
          <PathOverview path={activePath} progress={activeProgress} onOpenAsset={onOpenAsset} pathPrefs={pathPrefs} />
        </article>
      </section>
    </section>
  )
}

function PathOverview({ path, progress, onOpenAsset, pathPrefs }: { path: StudyPath; progress: ReturnType<typeof getStudyPathProgress>; onOpenAsset: (assetId: string) => void; pathPrefs: PathPrefsApi }) {
  return (
    <div className="path-overview-stack">
      <section className="manual-panel path-header-card"><span className="asset-icon">{path.icon}</span><div><span className="eyebrow">{path.level} · {path.duration}</span><h2>{path.title}</h2><p>{path.subtitle}</p><BadgeList items={[path.targetRole, path.professionalOutcome]} tone="blue" /><PathActionBar pathId={path.id} isActive={pathPrefs.prefs.activePathId === path.id} isPinned={pathPrefs.isPinnedPath(path.id)} onSetActive={pathPrefs.setActivePath} onTogglePinned={pathPrefs.togglePinnedPath} /></div></section>
      {progress.nextAsset && <section className="manual-panel next-asset-panel"><span className="eyebrow">Next Recommended Asset</span><h2>{progress.nextAsset.title}</h2><p>{progress.nextAsset.summary}</p><button className="primary-button" onClick={() => onOpenAsset(progress.nextAsset.id)} type="button">Continue with {progress.nextAsset.title}</button></section>}
      <section className="manual-panel"><span className="eyebrow">Path Metrics</span><div className="path-metric-grid"><div><strong>{progress.percentage}%</strong><span>path progress</span></div><div><strong>{progress.studying}</strong><span>studying</span></div><div><strong>{progress.reviewed}</strong><span>reviewed</span></div><div><strong>{progress.mastered}</strong><span>mastered</span></div></div></section>
      {path.moduleSequence?.length ? <section className="manual-panel"><span className="eyebrow">Module Sequence</span><h2>Where to study inside the Hub</h2><div className="path-module-sequence">{path.moduleSequence.map((step, index) => <article className="path-module-card" key={step.id}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.whyItMatters}</p><small>{step.viewId}</small></div></article>)}</div></section> : null}
      {path.outputPortfolio?.length ? <section className="manual-panel"><span className="eyebrow">Output Portfolio</span><h2>Artifacts this path should help you produce</h2><BadgeList items={path.outputPortfolio} tone="green" /></section> : null}
      {path.practiceAgenda?.length || path.successCriteria?.length ? <section className="study-path-two-column"><div className="manual-panel"><span className="eyebrow">Practice Agenda</span><h2>What to drill</h2><ul className="path-check-list">{path.practiceAgenda?.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="manual-panel"><span className="eyebrow">Success Criteria</span><h2>How you know it is working</h2><ul className="path-check-list">{path.successCriteria?.map((item) => <li key={item}>{item}</li>)}</ul></div></section> : null}
      <section className="manual-panel"><span className="eyebrow">Milestones</span><h2>How this path is structured</h2><div className="path-milestone-grid">{path.milestones.map((milestone, index) => { const milestoneAssets = getPathAssets({ ...path, assetIds: milestone.assetIds }); return <article className="path-milestone-card" key={milestone.id}><span>{index + 1}</span><h3>{milestone.title}</h3><p>{milestone.description}</p>{milestoneAssets.length ? <div className="path-asset-mini-list">{milestoneAssets.map((asset) => <button key={asset.id} onClick={() => onOpenAsset(asset.id)} type="button"><strong>{asset.title}</strong><small>{asset.area} · {asset.category}</small></button>)}</div> : <div className="mini-result warning">This milestone uses module lessons rather than Knowledge Assets.</div>}</article> })}</div></section>
      <section className="manual-panel"><span className="eyebrow">Full Asset Sequence</span><h2>Recommended Knowledge Asset order</h2>{progress.assets.length ? <div className="path-asset-sequence">{progress.assets.map((asset, index) => <button className="path-asset-row" key={asset.id} onClick={() => onOpenAsset(asset.id)} type="button"><span>{index + 1}</span><div><strong>{asset.title}</strong><small>{asset.area} · {asset.category}</small></div><b>{asset.difficulty}</b></button>)}</div> : <div className="mini-result warning">This path is mostly module-based. Use the module sequence above.</div>}</section>
    </div>
  )
}
