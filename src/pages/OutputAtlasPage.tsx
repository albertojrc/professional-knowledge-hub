import { useMemo, useState } from 'react'
import { outputAtlas } from '../data/knowledge'
import { extraOutputAtlas } from '../data/phase3Knowledge'
import { BadgeList } from '../components/ui/BadgeList'
import { ReadingGuide } from '../components/ui/ReadingGuide'

const allOutputAtlas = [...outputAtlas, ...extraOutputAtlas]

export function OutputAtlasPage() {
  const [activeOutputId, setActiveOutputId] = useState(allOutputAtlas[0]?.id ?? '')
  const output = useMemo(
    () => allOutputAtlas.find((item) => item.id === activeOutputId) ?? allOutputAtlas[0],
    [activeOutputId]
  )

  return (
    <section className="output-layout">
      <aside className="lesson-nav panel-card">
        <span className="eyebrow">Atlas Index</span>
        {allOutputAtlas.map((item, index) => (
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

      <article className="output-main readable-page">
        <header className="course-hero">
          <span className="eyebrow">{output.category}</span>
          <h1>{output.title}</h1>
          <BadgeList items={output.usedIn} tone="purple" />
        </header>

        <ReadingGuide
          title="How to interpret this output"
          steps={[
            'First understand what the output represents and what question it answers.',
            'Read the example output before judging whether the result is good or bad.',
            'Translate the interpretation into a business, banking or analytics decision.'
          ]}
        />

        <div className="manual-section section-lead">
          <span className="section-number">WHAT</span>
          <div>
            <h2>What it is</h2>
            <p>{output.whatItIs}</p>
          </div>
        </div>

        <div className="manual-section section-lead">
          <span className="section-number">SEE</span>
          <div>
            <h2>Example output</h2>
            <pre className="code-block">{output.exampleOutput}</pre>
          </div>
        </div>

        <div className="manual-section section-lead">
          <span className="section-number">READ</span>
          <div>
            <h2>How to read it</h2>
            <ul>
              {output.howToRead.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="two-column">
          <div className="manual-section result-good">
            <h2>Good result</h2>
            <p>{output.goodResult}</p>
          </div>
          <div className="manual-section result-bad">
            <h2>Bad result</h2>
            <p>{output.badResult}</p>
          </div>
        </div>

        <details className="details-card" open>
          <summary>Red flags</summary>
          <ul>
            {output.redFlags.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>

        <div className="manual-section section-lead">
          <span className="section-number">FIX</span>
          <div>
            <h2>How to improve it</h2>
            <ul>
              {output.howToImprove.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="manual-section result-impact section-lead">
          <span className="section-number">DECIDE</span>
          <div>
            <h2>Business / banking decision impact</h2>
            <p>{output.businessImpact}</p>
          </div>
        </div>
      </article>

      <aside className="context-panel panel-card">
        <span className="eyebrow">Related Knowledge</span>
        <h3>Concepts</h3>
        <BadgeList items={output.relatedConcepts} tone="blue" />
        <h3>Cases</h3>
        <BadgeList items={output.relatedCases} tone="green" />
        <div className="mini-result good">Output interpretation must lead to action.</div>
      </aside>
    </section>
  )
}
