import type { KnowledgeAsset } from '../types/knowledgeAsset'
import { knowledgeAssetRegistry } from '../data/knowledgeAssetRegistry'
import { BadgeList } from '../components/ui/BadgeList'

interface KnowledgeLibraryPageProps {
  onOpenAsset: (assetId: string) => void
}

const areas = ['Data Science', 'Banking', 'Finance', 'Management']

export function KnowledgeLibraryPage({ onOpenAsset }: KnowledgeLibraryPageProps) {
  return (
    <section className="page-stack">
      <div className="hero-panel academy-hero">
        <span className="eyebrow">Professional Knowledge Library</span>
        <h1>One connected library for business, data science and banking knowledge.</h1>
        <p>
          Every concept is stored as a reusable knowledge asset with explanation, interpretation,
          outputs, business applications, banking applications and related concepts.
        </p>
        <div className="badge-list">
          <button className="primary-button" onClick={() => onOpenAsset('linear-regression')} type="button">Open Linear Regression</button>
          <button className="primary-button" onClick={() => onOpenAsset('xgboost')} type="button">Open XGBoost</button>
          <button className="primary-button" onClick={() => onOpenAsset('expected-loss')} type="button">Open Expected Loss</button>
        </div>
      </div>

      <section className="manual-panel">
        <span className="eyebrow">Core Areas</span>
        <h2>Explore knowledge by professional area</h2>
        <div className="academy-area-grid">
          {areas.map((area) => {
            const count = knowledgeAssetRegistry.filter((asset) => asset.area === area).length
            return (
              <div className="academy-area-card" key={area}>
                <strong>{area}</strong>
                <span>{count} assets</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Knowledge Assets</span>
        <h2>{knowledgeAssetRegistry.length} reusable professional concepts</h2>
        <div className="asset-grid">
          {knowledgeAssetRegistry.map((asset) => (
            <AssetCard asset={asset} key={asset.id} onOpen={() => onOpenAsset(asset.id)} />
          ))}
        </div>
      </section>
    </section>
  )
}

function AssetCard({ asset, onOpen }: { asset: KnowledgeAsset; onOpen: () => void }) {
  return (
    <button className="asset-card" onClick={onOpen} type="button">
      <span className="asset-icon">{asset.icon}</span>
      <span className="eyebrow">{asset.type} · {asset.difficulty}</span>
      <h3>{asset.title}</h3>
      <p>{asset.summary}</p>
      <BadgeList items={[asset.area, asset.category]} tone="blue" />
    </button>
  )
}
