import { studyPaths } from '../../data/studyPaths'
import { getStudyPathProgress } from '../../data/studyPathProgress'
import type { AssetProgressStatus } from '../../types/learningProgress'

interface CurrentPathPanelProps {
  activePathId: string | null
  getAssetStatus: (assetId: string) => AssetProgressStatus
  onOpenAsset: (assetId: string) => void
  onOpenStudyPaths: () => void
}

export function CurrentPathPanel({ activePathId, getAssetStatus, onOpenAsset, onOpenStudyPaths }: CurrentPathPanelProps) {
  const currentPath = studyPaths.find((path) => path.id === activePathId)

  if (!currentPath) {
    return (
      <section className="manual-panel current-path-panel empty">
        <span className="eyebrow">Current Path</span>
        <h2>No active study path yet</h2>
        <p>Choose a role-based route and set it as your current path.</p>
        <button className="primary-button" onClick={onOpenStudyPaths} type="button">Choose Study Path</button>
      </section>
    )
  }

  const progress = getStudyPathProgress(currentPath, { getAssetStatus })

  return (
    <section className="manual-panel current-path-panel">
      <div>
        <span className="eyebrow">Current Path</span>
        <h2>{currentPath.title}</h2>
        <p>{currentPath.professionalOutcome}</p>
      </div>
      <div className="current-path-score">
        <strong>{progress.percentage}%</strong>
        <div className="study-score-bar"><i style={{ width: `${progress.percentage}%` }} /></div>
      </div>
      {progress.nextAsset && (
        <button className="primary-button" onClick={() => onOpenAsset(progress.nextAsset.id)} type="button">
          Continue: {progress.nextAsset.title}
        </button>
      )}
      <button className="text-button" onClick={onOpenStudyPaths} type="button">Manage Study Paths</button>
    </section>
  )
}
