export type MlChartType = 'roc' | 'pr' | 'calibration' | 'confusion' | 'feature-importance' | 'shap' | 'residual' | 'actual-predicted' | 'elbow' | 'cluster' | 'forecast' | 'learning-curve' | 'lift' | 'gain' | 'ks' | 'pdp'

interface MlMiniChartProps {
  type: MlChartType
  title: string
}

export function MlMiniChart({ type, title }: MlMiniChartProps) {
  if (type === 'confusion') return <ConfusionChart title={title} />
  if (type === 'feature-importance') return <BarChart title={title} values={[92, 78, 61, 44, 31]} labels={['Income', 'Utilization', 'Age', 'Balance', 'Tenure']} note="Top bars show the strongest drivers used by the model." />
  if (type === 'shap') return <BarChart title={title} values={[88, 74, 64, 48, 35]} labels={['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E']} note="Longer bars indicate stronger average prediction impact." />
  if (type === 'elbow') return <LineChart title={title} points="20,120 70,70 120,45 170,35 220,30 270,27" xLabel="Number of clusters" yLabel="Inertia" note="Look for the elbow where improvement starts slowing." />
  if (type === 'residual') return <ScatterChart title={title} residual xLabel="Predicted value" yLabel="Residual" note="Good residuals look randomly scattered around zero." />
  if (type === 'cluster') return <ScatterChart title={title} clustered xLabel="Component 1" yLabel="Component 2" note="Separated groups are easier to profile and act on." />
  if (type === 'forecast') return <LineChart title={title} points="20,95 65,92 110,82 155,76 200,70 245,64 290,58" forecast xLabel="Time" yLabel="Value" note="Forecast line should include uncertainty thinking." />
  if (type === 'learning-curve') return <LineChart title={title} points="20,105 70,82 120,66 170,56 220,51 270,49" secondPoints="20,145 70,111 120,86 170,66 220,55 270,51" xLabel="Training size" yLabel="Score error" note="Gap between curves shows variance or overfitting risk." />
  if (type === 'actual-predicted') return <ScatterChart title={title} diagonal xLabel="Actual" yLabel="Predicted" note="Points should stay close to the diagonal." />
  if (type === 'pr') return <LineChart title={title} points="20,35 65,42 110,54 155,68 200,84 245,108 290,136" xLabel="Recall" yLabel="Precision" note="Use this for rare-event and alert models." />
  if (type === 'calibration') return <LineChart title={title} points="20,145 70,118 120,98 170,72 220,50 270,30" secondPoints="20,150 70,126 120,102 170,78 220,54 270,30" xLabel="Predicted probability" yLabel="Observed rate" note="Perfect calibration follows the reference line." />
  if (type === 'lift') return <BarChart title={title} values={[280, 210, 160, 120, 95]} labels={['Top 10%', 'Top 20%', 'Top 30%', 'Top 40%', 'Top 50%']} note="Higher lift in top bands means better targeting power." />
  if (type === 'gain') return <LineChart title={title} points="20,145 70,106 120,77 170,55 220,40 270,32" xLabel="Population targeted" yLabel="Positive cases captured" note="Shows how quickly positives are captured as coverage grows." />
  if (type === 'ks') return <LineChart title={title} points="20,145 70,112 120,80 170,55 220,42 270,38" secondPoints="20,145 70,132 120,118 170,96 220,70 270,38" xLabel="Score band" yLabel="Cumulative share" note="Maximum separation is the KS statistic." />
  if (type === 'pdp') return <LineChart title={title} points="20,130 70,118 120,95 170,70 220,58 270,54" xLabel="Feature value" yLabel="Average prediction" note="Shows average model response as one feature changes." />
  return <LineChart title={title} points="20,145 70,118 120,92 170,70 220,48 270,28" diagonal xLabel="False positive rate" yLabel="True positive rate" note="Closer to top-left means stronger class separation." />
}

function ChartFrame({ title, children, xLabel, yLabel, note }: { title: string; children: React.ReactNode; xLabel?: string; yLabel?: string; note?: string }) {
  return (
    <div className="ml-chart-card">
      <div className="ml-chart-header">
        <h3>{title}</h3>
        {yLabel && <span>{yLabel}</span>}
      </div>
      {children}
      {xLabel && <div className="chart-axis-label">{xLabel}</div>}
      {note && <p className="chart-note">{note}</p>}
    </div>
  )
}

function LineChart({ title, points, secondPoints, diagonal, forecast, xLabel, yLabel, note }: { title: string; points: string; secondPoints?: string; diagonal?: boolean; forecast?: boolean; xLabel?: string; yLabel?: string; note?: string }) {
  return (
    <ChartFrame title={title} xLabel={xLabel} yLabel={yLabel} note={note}>
      <svg viewBox="0 0 320 180" role="img" aria-label={title}>
        <line x1="28" y1="150" x2="300" y2="150" className="axis" />
        <line x1="28" y1="20" x2="28" y2="150" className="axis" />
        <line x1="28" y1="106" x2="300" y2="106" className="grid-line" />
        <line x1="28" y1="63" x2="300" y2="63" className="grid-line" />
        {diagonal && <line x1="28" y1="150" x2="290" y2="28" className="reference" />}
        {forecast && <path d="M220 70 C240 52 265 52 290 58" className="forecast-band" />}
        {secondPoints && <polyline points={secondPoints} className="chart-line secondary" />}
        <polyline points={points} className="chart-line" />
        <circle cx="270" cy="28" r="4" className="dot" />
      </svg>
    </ChartFrame>
  )
}

function BarChart({ title, values, labels, note }: { title: string; values: number[]; labels: string[]; note?: string }) {
  return (
    <ChartFrame title={title} note={note}>
      <div className="bar-stack">
        {values.map((value, index) => (
          <div className="bar-row" key={labels[index]}>
            <span>{labels[index]}</span>
            <div><i style={{ width: `${Math.min(value, 100)}%` }} /></div>
          </div>
        ))}
      </div>
    </ChartFrame>
  )
}

function ScatterChart({ title, residual, clustered, diagonal, xLabel, yLabel, note }: { title: string; residual?: boolean; clustered?: boolean; diagonal?: boolean; xLabel?: string; yLabel?: string; note?: string }) {
  const points = [[52,98],[74,84],[93,105],[118,71],[138,87],[155,62],[178,73],[202,50],[230,59],[254,38]]
  return (
    <ChartFrame title={title} xLabel={xLabel} yLabel={yLabel} note={note}>
      <svg viewBox="0 0 320 180" role="img" aria-label={title}>
        <line x1="28" y1="150" x2="300" y2="150" className="axis" />
        <line x1="28" y1="20" x2="28" y2="150" className="axis" />
        <line x1="28" y1="88" x2="300" y2="88" className={residual ? 'reference' : 'grid-line'} />
        {diagonal && <line x1="36" y1="145" x2="285" y2="30" className="reference" />}
        {points.map(([x, y], index) => (
          <circle key={`${x}-${y}`} cx={x} cy={clustered && index > 5 ? y + 35 : y} r="5" className={clustered && index > 5 ? 'dot secondary' : 'dot'} />
        ))}
      </svg>
    </ChartFrame>
  )
}

function ConfusionChart({ title }: { title: string }) {
  return (
    <ChartFrame title={title} note="Rows are actual classes; columns are predicted classes. Review FP and FN based on business cost.">
      <div className="confusion-grid">
        <div className="matrix-cell good">TN<br /><strong>820</strong><small>Correct negative</small></div>
        <div className="matrix-cell warn">FP<br /><strong>95</strong><small>False alert</small></div>
        <div className="matrix-cell bad">FN<br /><strong>42</strong><small>Missed case</small></div>
        <div className="matrix-cell good">TP<br /><strong>143</strong><small>Correct positive</small></div>
      </div>
    </ChartFrame>
  )
}
