import { getKnowledgeTooltip } from '../../data/knowledgeTooltips'

interface SmartBadgeListProps {
  items: string[]
  tone?: 'blue' | 'green' | 'amber' | 'purple' | 'red'
}

export function SmartBadgeList({ items, tone = 'blue' }: SmartBadgeListProps) {
  return (
    <div className="badge-list smart-badge-list">
      {items.map((item) => {
        const tooltip = getKnowledgeTooltip(item)
        return (
          <span className={`badge badge-${tone} smart-badge`} key={item} tabIndex={0}>
            {item}
            {tooltip && (
              <span className="knowledge-tooltip" role="tooltip">
                <strong>{tooltip.label}</strong>
                <span><b>Meaning:</b> {tooltip.meaning}</span>
                <span><b>Good signal:</b> {tooltip.goodSignal}</span>
                <span><b>Bad signal:</b> {tooltip.badSignal}</span>
                <span><b>How to improve:</b> {tooltip.howToImprove}</span>
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}
