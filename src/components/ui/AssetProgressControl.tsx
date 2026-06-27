import type { AssetProgressStatus } from '../../types/learningProgress'
import { assetProgressStatuses, assetProgressWeight } from '../../types/learningProgress'

interface AssetProgressControlProps {
  status: AssetProgressStatus
  onChange: (status: AssetProgressStatus) => void
  compact?: boolean
}

export function AssetProgressControl({ status, onChange, compact = false }: AssetProgressControlProps) {
  return (
    <div className={`asset-progress-control ${compact ? 'compact' : ''}`}>
      <div className="asset-progress-topline">
        <span>Learning status</span>
        <strong>{status}</strong>
      </div>
      <div className="asset-progress-bar"><i style={{ width: `${assetProgressWeight[status]}%` }} /></div>
      <div className="asset-status-options">
        {assetProgressStatuses.map((item) => (
          <button className={item === status ? 'active' : ''} key={item} onClick={() => onChange(item)} type="button">
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
