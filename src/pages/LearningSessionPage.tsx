import type { AssetProgressStatus } from '../types/learningProgress'
import { studyPaths } from '../data/studyPaths'
import { getPathAssets, getStudyPathProgress } from '../data/studyPathProgress'
import { AssetProgressControl } from '../components/ui/AssetProgressControl'
import type { ViewId } from '../types/knowledge'

interface AssetProgressApi {
  getAssetStatus: (assetId: string) => AssetProgressStatus
  setAssetStatus: (assetId: string, status: AssetProgressStatus) => void
}

interface PathPrefsApi {
  prefs: { activePathId: string | null; pinnedPathIds: string[] }
}

interface LearningSessionPageProps {
  assetProgress: AssetProgressApi
  pathPrefs: PathPrefsApi
  onOpenAsset: (assetId: string) => void
  onNavigate: (view: ViewId) => void
}

const sessionChecklist = [
  'Read the concept definition and business intuition.',
  'Review outputs, metrics, assumptions and tooltips.',
  'Connect the concept to a banking, finance or management decision.',
  'Mark the asset as Reviewed or Mastered when the session is complete.'
]

export function LearningSessionPage({ assetProgress, pathPrefs, onOpenAsset, onNavigate }: LearningSessionPageProps) {
  const activePath = studyPaths.find((path) => path.id === pathPrefs.prefs.activePathId) ?? studyPaths[0]

  if (!activePath) {
    return (
      <section className="page-stack">
        <div className="manual-panel"><h1>No study path available yet.</h1></div>
      </section>
    )
  }

  const progress = getStudyPathProgress(activePath, assetProgress)
  const assets = getPathAssets(activePath)
  const currentAsset = assets.find((asset) => assetProgress.getAssetStatus(asset.id) === 'Studying') ?? assets.find((asset) => assetProgress.getAssetStatus(asset.id) === 'Not started') ?? assets[0]
  const upcomingAssets = assets.filter((asset) => asset.id !== currentAsset?.id && !['Reviewed', 'Mastered'].includes(assetProgress.getAssetStatus(asset.id))).slice(0, 4)

  if (!currentAsset) {
    return (
      <section className="page-stack">
        <div className="manual-panel"><h1>This path has no assets yet.</h1></div>
      </section>
    )
  }

  const currentStatus = assetProgress.getAssetStatus(currentAsset.id)

  return (
    <section className="page-stack">
      <div className="hero-panel learning-session-hero">
        <div>
          <span className="eyebrow">Sprint 1.12 · Learning Session</span>
          <h1>Focused study session for your current professional path.</h1>
          <p>Use this mode to study one asset at a time, update your progress and continue through the path without losing context.</p>
          <div className="badge-list">
            <button className="primary-button" onClick={() => onOpenAsset(currentAsset.id)} type="button">Open Current Asset</button>
            <button className="primary-button" onClick={() => onNavigate('study-paths')} type="button">Manage Study Paths</button>
          </div>
        </div>
        <div className="session-score-card">
          <span className="eyebrow">Path Progress</span>
          <strong>{progress.percentage}%</strong>
          <div className="study-score-bar"><i style={{ width: `${progress.percentage}%` }} /></div>
          <p>{activePath.title}</p>
        </div>
      </div>

      <section className="learning-session-layout">
        <article className="manual-panel session-current-card">
          <span className="eyebrow">Current Asset</span>
          <h2>{currentAsset.title}</h2>
          <p>{currentAsset.summary}</p>
          <div className="session-asset-meta">
            <span>{currentAsset.area}</span>
            <span>{currentAsset.category}</span>
            <span>{currentAsset.difficulty}</span>
            <span>{currentStatus}</span>
          </div>
          <AssetProgressControl status={currentStatus} onChange={(status) => assetProgress.setAssetStatus(currentAsset.id, status)} />
          <button className="primary-button" onClick={() => onOpenAsset(currentAsset.id)} type="button">Study full concept page</button>
        </article>

        <aside className="manual-panel session-checklist-card">
          <span className="eyebrow">Session Checklist</span>
          <h2>Before closing this session</h2>
          <ul>
            {sessionChecklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </aside>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Up Next</span>
        <h2>Next assets in this path</h2>
        {upcomingAssets.length > 0 ? (
          <div className="session-next-grid">
            {upcomingAssets.map((asset) => (
              <button className="session-next-card" key={asset.id} onClick={() => onOpenAsset(asset.id)} type="button">
                <span className="asset-icon small">{asset.icon}</span>
                <strong>{asset.title}</strong>
                <small>{asset.area} · {asset.category}</small>
              </button>
            ))}
          </div>
        ) : (
          <div className="empty-library-state"><p>No pending assets in this path. Nice work.</p></div>
        )}
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Full Session Path</span>
        <h2>{activePath.title}</h2>
        <div className="session-path-list">
          {assets.map((asset, index) => {
            const status = assetProgress.getAssetStatus(asset.id)
            return (
              <button className={asset.id === currentAsset.id ? 'active' : ''} key={asset.id} onClick={() => onOpenAsset(asset.id)} type="button">
                <span>{index + 1}</span>
                <div><strong>{asset.title}</strong><small>{asset.area} · {asset.category}</small></div>
                <b>{status}</b>
              </button>
            )
          })}
        </div>
      </section>
    </section>
  )
}
