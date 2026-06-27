interface PathActionBarProps {
  pathId: string
  isActive: boolean
  isPinned: boolean
  onSetActive: (pathId: string) => void
  onTogglePinned: (pathId: string) => void
}

export function PathActionBar({ pathId, isActive, isPinned, onSetActive, onTogglePinned }: PathActionBarProps) {
  return (
    <div className="path-action-bar">
      <button className={isActive ? 'active' : ''} onClick={() => onSetActive(pathId)} type="button">
        {isActive ? 'Current Path' : 'Set as Current Path'}
      </button>
      <button className={isPinned ? 'active' : ''} onClick={() => onTogglePinned(pathId)} type="button">
        {isPinned ? 'Pinned' : 'Pin Path'}
      </button>
    </div>
  )
}
