export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Turning complexity into clarity</h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              I'm a freelance product strategist based in Montreal with 10+ years turning complexity into clarity. I've
              led teams through full platform migrations, payment overhauls, and supply chain transformations—the kind
              of work that touches every corner of a business. I thrive on making the ambiguous actionable and getting
              stakeholders aligned when it matters most.
            </p>

            <p>
              I bring a bias for action and a track record of driving real outcomes: streamlined operations, faster
              time-to-market, and products that actually solve problems. Whether you're navigating a critical pivot or
              building something from scratch, I'm here to help you move forward with confidence and momentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
