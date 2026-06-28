import { reviewFormSummary, reviewFormTemplate } from '../data/reviewFormTemplate'
import type { ReviewFormField, ReviewFormSection } from '../types/reviewForm'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

export function ReviewFormTemplatePage() {
  return <section className="page-stack"><div className="hero-panel review-form-hero"><div><span className="eyebrow">Sprint 2.18 · Review Form Template</span><h1>Standard template for every source review batch.</h1><p>This form ensures each batch captures metadata, topic proof, formulas, outputs, cases, decision notes and upgrade recommendations in the same structure.</p></div><div className="review-form-score-card"><span className="eyebrow">Template Summary</span><strong>{reviewFormSummary.sections}</strong><p>{reviewFormSummary.fields} fields · {reviewFormSummary.requiredFields} required</p><div className="inventory-mini-stats"><span>{reviewFormSummary.completionRules} rules</span><span>{reviewFormTemplate.appliesTo.length} batches</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">Review Flow</span><h2>{reviewFormTemplate.title}</h2><KnowledgeChain nodes={reviewFormTemplate.reviewFlow} /><h4>Applies to</h4><BadgeList items={reviewFormTemplate.appliesTo} tone="purple" /></section><section className="manual-panel"><span className="eyebrow">Template Sections</span><h2>What must be captured in each review</h2><div className="review-form-grid">{reviewFormTemplate.sections.map((section) => <SectionCard key={section.id} section={section} />)}</div></section><section className="manual-panel"><span className="eyebrow">Completion Rules</span><h2>When a review is complete enough for decision board</h2><div className="review-rule-grid">{reviewFormTemplate.completionRules.map((rule, index) => <article className="review-rule-card" key={rule}><span className="eyebrow">Rule {index + 1}</span><p>{rule}</p></article>)}</div></section></section>
}

function SectionCard({ section }: { section: ReviewFormSection }) {
  return <article className="review-form-card"><span className="eyebrow">{section.title}</span><h3>{section.purpose}</h3><div className="review-field-list">{section.fields.map((field) => <FieldRow key={field.id} field={field} />)}</div></article>
}

function FieldRow({ field }: { field: ReviewFormField }) {
  return <div className="review-field-row"><div><strong>{field.label}</strong><span>{field.fieldType} · {field.requirement}</span><p>{field.purpose}</p></div><BadgeList items={field.examples} tone={field.requirement === 'Required' ? 'amber' : 'blue'} /></div>
}
