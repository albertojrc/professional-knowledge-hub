interface BadgeListProps {
  items: string[]
  tone?: 'blue' | 'green' | 'amber' | 'purple' | 'red'
}

export function BadgeList({ items, tone = 'blue' }: BadgeListProps) {
  return (
    <div className="badge-list">
      {items.map((item) => (
        <span className={`badge badge-${tone}`} key={item}>
          {item}
        </span>
      ))}
    </div>
  )
}
