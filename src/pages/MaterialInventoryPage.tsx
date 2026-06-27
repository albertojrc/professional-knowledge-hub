import { useMemo, useState } from 'react'
import { courseModules, mappingTemplateSteps, materialRecords } from '../data/materialInventory'
import type { MappingStatus, MaterialArea, MaterialPriority, MaterialRecord } from '../types/materialInventory'
import { BadgeList } from '../components/ui/BadgeList'

interface MaterialInventoryPageProps {
  focusId?: string | null
}

const allValue = 'All'
const areaOptions = [allValue, ...Array.from(new Set(materialRecords.map((item) => item.area))).sort()]
const statusOptions = [allValue, ...Array.from(new Set(materialRecords.map((item) => item.status))).sort()]
const priorityOptions = [allValue, ...Array.from(new Set(materialRecords.map((item) => item.priority))).sort()]

export function MaterialInventoryPage({ focusId }: MaterialInventoryPageProps) {
  const [area, setArea] = useState<string>(allValue)
  const [status, setStatus] = useState<string>(allValue)
  const [priority, setPriority] = useState<string>(allValue)
  const [query, setQuery] = useState('')

  const filteredMaterials = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return materialRecords
      .filter((item) => area === allValue || item.area === area)
      .filter((item) => status === allValue || item.status === status)
      .filter((item) => priority === allValue || item.priority === priority)
      .filter((item) => {
        if (!normalizedQuery) return true
        return [item.title, item.program, item.area, item.materialType, item.description, ...item.knownTopics, ...item.targetAssets, ...item.gapsToCheck].join(' ').toLowerCase().includes(normalizedQuery)
      })
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.priority.localeCompare(b.priority) || a.title.localeCompare(b.title)))
  }, [area, focusId, priority, query, status])

  const p0Count = materialRecords.filter((item) => item.priority === 'P0').length
  const pendingCount = materialRecords.filter((item) => ['Not inventoried', 'Inventory pending', 'Needs review'].includes(item.status)).length
  const mappedCount = materialRecords.filter((item) => ['Mapped to areas', 'Mapped to topics', 'Converted to assets'].includes(item.status)).length

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Global Search · focused material</div>}

      <div className="hero-panel material-inventory-hero">
        <div>
          <span className="eyebrow">Sprint 2.1 · Source Inventory System</span>
          <h1>Material inventory for source-based knowledge consolidation.</h1>
          <p>This page prepares the Hub to connect real class documents to knowledge assets, study paths, formulas, outputs, models and business cases.</p>
        </div>
        <div className="inventory-score-card">
          <span className="eyebrow">Inventory Status</span>
          <strong>{materialRecords.length}</strong>
          <p>materials registered</p>
          <div className="inventory-mini-stats"><span>{p0Count} P0</span><span>{pendingCount} pending</span><span>{mappedCount} mapped</span></div>
        </div>
      </div>

      <section className="manual-panel inventory-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Inventory Filters</span><h2>{filteredMaterials.length} of {materialRecords.length} materials visible</h2></div>
          <button className="text-button" onClick={() => { setArea(allValue); setStatus(allValue); setPriority(allValue); setQuery('') }} type="button">Clear filters</button>
        </div>
        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search materials, topics, target assets or gaps..." />
        <div className="library-filter-grid">
          <InventorySelect label="Area" value={area} values={areaOptions} onChange={setArea} />
          <InventorySelect label="Status" value={status} values={statusOptions} onChange={setStatus} />
          <InventorySelect label="Priority" value={priority} values={priorityOptions} onChange={setPriority} />
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Registered Materials</span>
        <h2>Files and folders to inspect</h2>
        <div className="material-card-grid">
          {filteredMaterials.map((material) => <MaterialCard key={material.id} material={material} focused={material.id === focusId} />)}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Course Module Registry</span>
        <h2>Expected course-to-asset mapping</h2>
        <div className="course-module-grid">
          {courseModules.map((module) => (
            <article className="course-module-card" key={module.id}>
              <span className="eyebrow">{module.program}</span>
              <h3>{module.title}</h3>
              <p>{module.purpose}</p>
              <div className="mini-result good">{module.mappingStatus}</div>
              <h4>Expected materials</h4><BadgeList items={module.expectedMaterials} tone="blue" />
              <h4>Expected assets</h4><BadgeList items={module.expectedAssets} tone="purple" />
            </article>
          ))}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Mapping Template</span>
        <h2>How each class file becomes professional knowledge</h2>
        <div className="mapping-step-grid">
          {mappingTemplateSteps.map((step, index) => (
            <article className="mapping-step-card" key={step.id}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="mini-result good">Output: {step.output}</div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

function MaterialCard({ material, focused }: { material: MaterialRecord; focused: boolean }) {
  return (
    <article className={`material-card ${focused ? 'focused-result-card' : ''}`}>
      <div className="material-card-header">
        <span className="eyebrow">{material.program}</span>
        <span className={`priority-pill priority-${material.priority.toLowerCase()}`}>{material.priority}</span>
      </div>
      <h3>{material.title}</h3>
      <p>{material.description}</p>
      <div className="material-meta-row"><span>{material.area as MaterialArea}</span><span>{material.materialType}</span><span>{material.status as MappingStatus}</span><span>{material.priority as MaterialPriority}</span></div>
      <h4>Known topics</h4><BadgeList items={material.knownTopics} tone="blue" />
      <h4>Target assets</h4><BadgeList items={material.targetAssets} tone="purple" />
      <details>
        <summary>Gaps to check</summary>
        <ul>{material.gapsToCheck.map((gap) => <li key={gap}>{gap}</li>)}</ul>
      </details>
    </article>
  )
}

function InventorySelect({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return (
    <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
  )
}
