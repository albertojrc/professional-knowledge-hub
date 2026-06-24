type MlChartType = 'roc' | 'pr' | 'calibration' | 'confusion' | 'feature-importance' | 'shap' | 'residual' | 'actual-predicted' | 'elbow' | 'cluster' | 'forecast' | 'learning-curve'

interface MlMiniChartProps {
  type: MlChartType
  title: string
}

export function MlMiniChart({ type, title }: MlMiniChartProps) {
  if (type === 'confusion') {
    return (
      <div className="ml-chart-card">
        <h3>{title}</h3>
        <div className="confusion-grid">
          <div className="matrix-cell good">TN<br /><strong>820</strong></div>
          <div className="matrix-cell warn">FP<br /><strong>95</strong></div>
          <div className="matrix-cell bad">FN<br /><strong>42</strong></div>
          <div className="matrix-cell good">TP<br /><strong>143</strong></div>
        </div>
      </div>
    )
  }

  if (type === 'feature-importance') {
    return <BarChart title={title} values={[92, 78, 61, 44, 31]} labels={['Income', 'Utilization', 'Age', 'Balance', 'Tenure']} />
  }

  if (type === 'shap') {
    return <BarChart title={title} values={[88, 74, 64, 48, 35]} labels={['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E']} />
  }

  if (type === 'elbow') {
    return <LineChart title={title} points="20,120 70,70 120,45 170,35 220,30 270,27" />
  }

  if (type === 'residual') {
    return <ScatterChart title={title} residual />
  }

  if (type === 'cluster') {
    return <ScatterChart title={title} clustered />
  }

  if (type === 'forecast') {
    return <LineChart title={title} points="20,95 65,92 110,82 155,76 200,70 245,64 290,58" forecast />
  }

  if (type === 'learning-curve') {
    return <LineChart title={title} points="20,105 70,82 120,66 170,56 220,51 270,49" secondPoints="20,145 70,111 120,86 170,66 220,55 270,51" />
  }

  if (type === 'actual-predicted') {
    return <ScatterChart title={title} diagonal />
  }

  if (type === 'pr') {
    return <LineChart title={title} points="20,35 65,42 110,54 155,68 200,84 245,108 290,136" />
  }

  if (type === 'calibration') {
    return <LineChart title={title} points="20,145 70,118 120,98 170,72 220,50 270,30" secondPoints="20,150 70,126 120,102 170,78 220,54 270,30" />
  }

  return <LineChart title={title} points="20,145 70,118 120,92 170,70 220,48 270,28" diagonal />
}

function LineChart({ title, points, secondPoints, diagonal, forecast }: { title: string; points: string; secondPoints?: string; diagonal?: boolean; forecast?: boolean }) {
  return (
    <div className="ml-chart-card">
      <h3>{title}</h3>
      <svg viewBox="0 0 320 180" role="img" aria-label={title}>
        <line x1="20" y1="150" x2="300" y2="150" className="axis" />
        <line x1="20" y1="20" x2="20" y2="150" className="axis" />
        {diagonal && <line x1="20" y1="150" x2="290" y2="28" className="reference" />}
        {forecast && <path d="M245 64 L290 58" className="forecast-band" />}
        {secondPoints && <polyline points={secondPoints} className="chart-line secondary" />}
        <polyline points={points} className="chart-line" />
      </svg>
    </div>
  )
}

function BarChart({ title, values, labels }: { title: string; values: number[]; labels: string[] }) {
  return (
    <div className="ml-chart-card">
      <h3>{title}</h3>
      <div className="bar-stack">
        {values.map((value, index) => (
          <div className="bar-row" key={labels[index]}>
            <span>{labels[index]}</span>
            <div><i style={{ width: `${value}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScatterChart({ title, residual, clustered, diagonal }: { title: string; residual?: boolean; clustered?: boolean; diagonal?: boolean }) {
  const points = [
    [52, 98], [74, 84], [93, 105], [118, 71], [138, 87], [155, 62], [178, 73], [202, 50], [230, 59], [254, 38]
  ]
  return (
    <div className="ml-chart-card">
      <h3>{title}</h3>
      <svg viewBox="0 0 320 180" role="img" aria-label={title}>
        <line x1="20" y1="150" x2="300" y2="150" className="axis" />
        <line x1="20" y1="20" x2="20" y2="150" className="axis" />
        {residual && <line x1="20" y1="88" x2="300" y2="88" className="reference" />}
        {diagonal && <line x1="30" y1="145" x2="285" y2="30" className="reference" />}
        {points.map(([x, y], index) => (
          <circle key={`${x}-${y}`} cx={x} cy={clustered && index > 5 ? y + 35 : y} r="5" className={clustered && index > 5 ? 'dot secondary' : 'dot'} />
        ))}
      </svg>
    </div>
  )
}
