import { useMemo, useState } from 'react'
import { courseAreaMapRecords, coverageMatrixRows, topicClusters } from '../data/courseAreaMapping'
import type { AreaRelevance, CourseAreaMapRecord, CoverageLevel } from '../types/courseAreaMapping'
import { BadgeList } from '../components/ui/BadgeList'

interface CourseAreaMapPageProps {
  focusId?: string | null
}

const allValue = 'All'
const areaOptions = [allValue, ...Array.from(new Set(courseAreaMapRecords.map((item) => item.area))).sort()]
const coverageOptions = [allValue, ...Array.from(new Set(courseAreaMapRecords.map((item) => item.currentCoverage))).sort()]
const relevanceOptions = [allValue, 'Core', 'Important', 'Supporting', 'Gap']

export function CourseAreaMapPage({ focusId }: CourseAreaMapPageProps) {
  const [area, setArea] = useState(allValue)
  const [coverage, setCoverage] = useState(allValue)
  const [relevance, setRelevance] = useState(allValue)
  const [query, setQuery] = useState('')

  const filteredAreas = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return courseAreaMapRecords
      .filter((item) => area === allValue || item.area === area)
      .filter((item) => coverage === allValue || item.currentCoverage === coverage)
      .filter((item) => relevance === allValue || item.bankingRelevance === relevance || item.dataRelevance === relevance)
      .filter((item) => {
        if (!normalizedQuery) return true
        return [item.title, item.area, item.professionalPurpose, ...item.keyTopics, ...item.existingAssets, ...item.recommendedAssets, ...item.sourceGaps].join(' ').toLowerCase().includes(normalizedQuery)
      })
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.area.localeCompare(b.area)))
  }, [area, coverage, focusId, query, relevance])

  const coreBanking = courseAreaMapRecords.filter((item) => item.bankingRelevance === 'Core').length
  const coreData = courseAreaMapRecords.filter((item) => item.dataRelevance === 'Core').length
  const lowCoverage = courseAreaMapRecords.filter((item) => ['None', 'Low'].includes(item.currentCoverage)).length

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Global Search · focused course area</div>}

      <div className="hero-panel course-area-hero">
        <div>
          <span className="eyebrow">Sprint 2.2 · Course Area Mapping</span>
          <h1>Map class material into professional knowledge domains.</h1>
          <p>This layer connects courses and materials to areas, topic clusters, existing assets, recommended assets and source gaps.</p>
        </div>
        <div className="area-map-score-card">
          <span className="eyebrow">Area Coverage</span>
          <strong>{courseAreaMapRecords.length}</strong>
          <p>professional areas mapped</p>
          <div className="inventory-mini-stats"><span>{coreBanking} banking core</span><span>{coreData} data core</span><span>{lowCoverage} low coverage</span></div>
        </div>
      </div>

      <section className="manual-panel inventory-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Area Filters</span><h2>{filteredAreas.length} of {courseAreaMapRecords.length} areas visible</h2></div>
          <button className="text-button" onClick={() => { setArea(allValue); setCoverage(allValue); setRelevance(allValue); setQuery('') }} type="button">Clear filters</button>
        </div>
        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search areas, topics, assets or gaps..." />
        <div className="library-filter-grid">
          <MapSelect label="Area" value={area} values={areaOptions} onChange={setArea} />
          <MapSelect label="Coverage" value={coverage} values={coverageOptions} onChange={setCoverage} />
          <MapSelect label="Relevance" value={relevance} values={relevanceOptions} onChange={setRelevance} />
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Professional Areas</span>
        <h2>Course-to-area mapping</h2>
        <div className="course-area-grid">
          {filteredAreas.map((record) => <AreaMapCard key={record.id} record={record} focused={record.id === focusId} />)}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Topic Clusters</span>
        <h2>Cross-course concept groups</h2>
        <div className="topic-cluster-grid">
          {topicClusters.map((cluster) => (
            <article className="topic-cluster-card" key={cluster.id}>
              <span className="eyebrow">{cluster.area}</span>
              <h3>{cluster.title}</h3>
              <p>{cluster.description}</p>
              <h4>Topics</h4><BadgeList items={cluster.topics} tone="blue" />
              <h4>Connected assets</h4><BadgeList items={cluster.connectedAssets} tone="purple" />
              <h4>Professional outputs</h4><BadgeList items={cluster.professionalOutputs} tone="green" />
              <h4>Business decisions</h4><BadgeList items={cluster.businessDecisions} tone="amber" />
            </article>
          ))}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Coverage Matrix</span>
        <h2>Module mapping status and next actions</h2>
        <div className="coverage-matrix-table">
          {coverageMatrixRows.map((row) => (
            <article className="coverage-row" key={row.id}>
              <div><strong>{row.moduleTitle}</strong><span>{row.program} · {row.area}</span></div>
              <div><b>{row.mappingStatus}</b><small>{row.sourceEvidence.join(' · ')}</small></div>
              <p>{row.nextAction}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

function AreaMapCard({ record, focused }: { record: CourseAreaMapRecord; focused: boolean }) {
  return (
    <article className={`course-area-card ${focused ? 'focused-result-card' : ''}`}>
      <div className="course-area-card-top">
        <span className="eyebrow">{record.area}</span>
        <span className={`coverage-pill coverage-${record.currentCoverage.toLowerCase()}`}>{record.currentCoverage as CoverageLevel}</span>
      </div>
      <h3>{record.title}</h3>
      <p>{record.professionalPurpose}</p>
      <div className="relevance-row"><span>Banking: {record.bankingRelevance as AreaRelevance}</span><span>Data: {record.dataRelevance as AreaRelevance}</span><span>Target: {record.targetCoverage}</span></div>
      <h4>Key topics</h4><BadgeList items={record.keyTopics} tone="blue" />
      <h4>Existing assets</h4><BadgeList items={record.existingAssets.length ? record.existingAssets : ['No mapped assets yet']} tone="green" />
      <h4>Recommended assets</h4><BadgeList items={record.recommendedAssets} tone="purple" />
      <details><summary>Source gaps to resolve</summary><ul>{record.sourceGaps.map((gap) => <li key={gap}>{gap}</li>)}</ul></details>
    </article>
  )
}

function MapSelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return (
    <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
  )
}
