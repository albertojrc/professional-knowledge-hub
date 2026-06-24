interface ReadingGuideProps {
  title: string
  steps: string[]
}

export function ReadingGuide({ title, steps }: ReadingGuideProps) {
  return (
    <section className="reading-guide">
      <div>
        <span className="eyebrow">Reading Guide</span>
        <h2>{title}</h2>
      </div>
      <div className="reading-guide-steps">
        {steps.map((step, index) => (
          <div className="reading-step" key={step}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
