import { useMemo, useState } from 'react'
import type { AssetProgressMap, AssetProgressStatus } from '../types/learningProgress'
import { assetProgressWeight } from '../types/learningProgress'

const storageKey = 'pkos.assetProgress.v1'

function readProgress(): AssetProgressMap {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.localStorage.getItem(storageKey)
    if (!raw) return {}
    return JSON.parse(raw) as AssetProgressMap
  } catch {
    return {}
  }
}

function writeProgress(progress: AssetProgressMap) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(storageKey, JSON.stringify(progress))
}

export function useAssetProgress() {
  const [progress, setProgress] = useState<AssetProgressMap>(() => readProgress())

  const setAssetStatus = (assetId: string, status: AssetProgressStatus) => {
    setProgress((current) => {
      const next: AssetProgressMap = {
        ...current,
        [assetId]: {
          assetId,
          status,
          updatedAt: new Date().toISOString()
        }
      }
      writeProgress(next)
      return next
    })
  }

  const resetAssetStatus = (assetId: string) => {
    setProgress((current) => {
      const next = { ...current }
      delete next[assetId]
      writeProgress(next)
      return next
    })
  }

  const getAssetStatus = (assetId: string): AssetProgressStatus => progress[assetId]?.status ?? 'Not started'

  const summary = useMemo(() => {
    const records = Object.values(progress)
    const mastered = records.filter((record) => record.status === 'Mastered').length
    const reviewed = records.filter((record) => record.status === 'Reviewed').length
    const studying = records.filter((record) => record.status === 'Studying').length
    const weightedTotal = records.reduce((sum, record) => sum + assetProgressWeight[record.status], 0)
    const averageProgress = records.length ? Math.round(weightedTotal / records.length) : 0

    return { records, mastered, reviewed, studying, averageProgress }
  }, [progress])

  return { progress, summary, getAssetStatus, setAssetStatus, resetAssetStatus }
}
