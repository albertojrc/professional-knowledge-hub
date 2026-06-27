import { useState } from 'react'
import type { AssetProgressStatus } from '../types/learningProgress'
import type { StudyPath } from '../types/studyPath'
import { studyPaths } from '../data/studyPaths'
import { getPathAssets, getStudyPathProgress } from '../data/studyPathProgress'
import { BadgeList } from '../components/ui/BadgeList'

interface AssetProgressApi {
  getAssetStatus: (assetId: string) => AssetProgressStatus
}

interface StudyPathsPageProps {
  assetProgress: AssetProgressApi
  onOpenAsset: (assetId: string) => void
}

export function StudyPathsPage({ assetProgress, onOpenAsset }: StudyPathsPageProps) {
  const [activePathId, setActivePathId] = useState(studyPaths[0]?.id ?? '')
  const activePath = studyPaths.find((path) => path.id === activePathId) ?? studyPaths[0]
  const activeProgress = getStudyPathProgress(activePath, assetProgress)

  return (
    <section className="page-stack">
      <div className="hero-panel study-path-hero">
        <div>
          <span className="eyebrow">Sprint 1.10 · Study Path Builder</span>
          <h1>Professional learning paths built from your Knowledge Assets.</h1>
          <p>Choose a role-based path and follow the recommended sequence of concepts, models, formulas and frameworks.</p>
        </div>
        <div className="study-path-score">
          <span className="eyebrow">Active Path Progress</span>
          <strong>{activeProgress.percentage}%</strong>
          <div className="study-score-bar"><i style={{ width: `${activeProgress.percentage}%` }} /></div>
          <p>{activePath.title}</p>
        </div>
      </div>

      <section className="study-path-layout">
        <aside className="study-path-list panel-card">
          <span className="eyebrow">Available Paths</span>
          {studyPaths.map((path) => {
            const progress = getStudyPathProgress(path, assetProgress)
            return (
              <button className={`study-path-tab ${path.id === activePath.id ? 'active' : ''}`} key={path.id} onClick={() => setActivePathId(path.id)} type="button">
                <span className="asset-icon small">{path.icon}</span>
                <div><strong>{path.title}</strong><small>{path.targetRole}</small></div>
                <b>{progress.percentage}%</b>
              </button>
            )
          })}
        </aside>

        <article className="study-path-main">
          <PathOverview path={activePath} progress={activeProgress} onOpenAsset={onOpenAsset} />
        </article>
      </section>
    </section>
  )
}

function PathOverview({ path, progress, onOpenAsset }: { path: StudyPath; progress: ReturnType<typeof getStudyPathProgress>; onOpenAsset: (assetId: string) => void }) {
  return (
    <div className="path-overview-stack">
      <section className="manual-panel path-header-card">
        <span className="asset-icon">{path.icon}</span>
        <div>
          <span className="eyebrow">{path.level} · {path.duration}</span>
          <h2>{path.title}</h2>
          <p>{path.subtitle}</p>
          <BadgeList items={[path.targetRole, path.professionalOutcome]} tone="blue" />
        </div>
      </section>

      {progress.nextAsset && (
        <section className="manual-panel next-asset-panel">
          <span className="eyebrow">Next Recommended Asset</span>
          <h2>{progress.nextAsset.title}</h2>
          <p>{progress.nextAsset.summary}</p>
          <button className="primary-button" onClick={() => onOpenAsset(progress.nextAsset.id)} type="button">Continue with {progress.nextAsset.title}</button>
        </section>
      )}

      <section className="manual-panel">
        <span className="eyebrow">Path Metrics</span>
        <div className="path-metric-grid">
          <div><strong>{progress.percentage}%</strong><span>path progress</span></div>
          <div><strong>{progress.studying}</strong><span>studying</span></div>
          <div><strong>{progress.reviewed}</strong><span>reviewed</span></div>
          <div><strong>{progress.mastered}</strong><span>mastered</span></div>
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Milestones</span>
        <h2>How this path is structured</h2>
        <div className="path-milestone-grid">
          {path.milestones.map((milestone, index) => {
            const milestoneAssets = getPathAssets({ ...path, assetIds: milestone.assetIds })
            return (
              <article className="path-milestone-card" key={milestone.id}>
                <span>{index + 1}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
                <div className="path-asset-mini-list">
                  {milestoneAssets.map((asset) => (
                    <button key={asset.id} onClick={() => onOpenAsset(asset.id)} type="button">
                      <strong>{asset.title}</strong>
                      <small>{asset.area} · {asset.category}</small>
                    </button>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Full Asset Sequence</span>
        <h2>Recommended learning order</h2>
        <div className="path-asset-sequence">
          {progress.assets.map((asset, index) => (
            <button className="path-asset-row" key={asset.id} onClick={() => onOpenAsset(asset.id)} type="button">
              <span>{index + 1}</span>
              <div><strong>{asset.title}</strong><small>{asset.area} · {asset.category}</small></div>
              <b>{asset.difficulty}</b>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
