import type { ViewId } from '../types/knowledge'
import { VisualSearchStudio } from '../components/search/VisualSearchStudio'

interface GlobalSearchPageProps {
  query: string
  onQueryChange: (query: string) => void
  onNavigate: (view: ViewId, focusId?: string | null) => void
  onOpenAsset: (assetId: string) => void
}

export function GlobalSearchPage({ query, onQueryChange, onNavigate, onOpenAsset }: GlobalSearchPageProps) {
  return <VisualSearchStudio query={query} onQueryChange={onQueryChange} onNavigate={onNavigate} onOpenAsset={onOpenAsset} />
}
