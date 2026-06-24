import { useMemo, useState } from 'react'
import { outputAtlas } from '../data/knowledge'
import { BadgeList } from '../components/ui/BadgeList'

export function OutputAtlasPage() {
  const [activeOutputId, setActiveOutputId] = useState(outputAtlas[0]?.id ?? '')
  const output = useMemo(
    () => outputAtlas.find((item) => item.id === activeOutputId) ?? outputAtlas[0],
    [activeOutputId]
  )

  return (
    <section className="output-layout">
      <aside className="lesson-nav panel-card">
        <span className="eyebrow">Atlas Index</span>
        {outputAtlas.map((item, index) => (
          <button
            className={`lesson-nav-item ${item.id === output.id ? 'active' : ''}`}
            key={item.id}
            onClick={() => setActiveOutputId(item.id)}
            type="button"
          >
            <span>{index + 1}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </aside>

      <article className="output-main">
        <header className="course-hero">
          <span className="eyebrow">{output.category}</span>
          <h1>{output.title}</h1>
          <BadgeList items={output.usedIn} tone="purple" />
        </header>

        <div className="manual-section">
          <h2>1. What it is</h2>
          <p>{output.whatItIs}</p>
        </div>

        <div className="manual-section">
          <h2>2. Example output</h2>
          <pre className="code-block">{output.exampleOutput}</pre>
        </div>

        <div className="manual-section">
          <h2>3. How to read it</h2>
          <ul>
            {output.howToRead.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="two-column">
          <div className="manual-section result-good">
            <h2>4. Good result</h2>
            <p>{output.goodResult}</p>
          </div>
          <div className="manual-section result-bad">
            <h2>5. Bad result</h2>
            <p>{output.badResult}</p>
          </div>
        </div>

        <details className="details-card" open>
          <summary>6. Red flags</summary>
          <ul>
            {output.redFlags.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>

        <div className="manual-section">
          <h2>7. How to improve it</h2>
          <ul>
            {output.howToImprove.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="manual-section result-impact">
          <h2>8. Business / banking decision impact</h2>
          <p>{output.businessImpact}</p>
        </div>
      </article>

      <aside className="context-panel panel-card">
        <span className="eyebrow">Related Knowledge</span>
        <h3>Concepts</h3>
        <BadgeList items={output.relatedConcepts} tone="blue" />
        <h3>Cases</h3>
        <BadgeList items={output.relatedCases} tone="green" />
      </aside>
    </section>
  )
}
