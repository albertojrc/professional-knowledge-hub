import { useState } from 'react'

interface PathPrefs {
  activePathId: string | null
  pinnedPathIds: string[]
}

const storageKey = 'pkos.pathPrefs.v1'

function readPrefs(): PathPrefs {
  if (typeof window === 'undefined') return { activePathId: null, pinnedPathIds: [] }
  try {
    const raw = window.localStorage.getItem(storageKey)
    if (!raw) return { activePathId: null, pinnedPathIds: [] }
    return JSON.parse(raw) as PathPrefs
  } catch {
    return { activePathId: null, pinnedPathIds: [] }
  }
}

function writePrefs(prefs: PathPrefs) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(storageKey, JSON.stringify(prefs))
}

export function usePathPrefs() {
  const [prefs, setPrefs] = useState<PathPrefs>(() => readPrefs())

  const setActivePath = (pathId: string) => {
    setPrefs((current) => {
      const next = { ...current, activePathId: pathId }
      writePrefs(next)
      return next
    })
  }

  const togglePinnedPath = (pathId: string) => {
    setPrefs((current) => {
      const exists = current.pinnedPathIds.includes(pathId)
      const next = {
        ...current,
        pinnedPathIds: exists ? current.pinnedPathIds.filter((id) => id !== pathId) : [...current.pinnedPathIds, pathId]
      }
      writePrefs(next)
      return next
    })
  }

  const isPinnedPath = (pathId: string) => prefs.pinnedPathIds.includes(pathId)

  return { prefs, setActivePath, togglePinnedPath, isPinnedPath }
}
