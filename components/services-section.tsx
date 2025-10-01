import { Card } from "@/components/ui/card"
import { Lightbulb, Workflow, Target, Users } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Product Strategy",
    description: "Define clear product vision and roadmaps that align with business goals and user needs.",
  },
  {
    icon: Workflow,
    title: "Process Optimization",
    description: "Streamline operations and workflows to increase efficiency and reduce time-to-market.",
  },
  {
    icon: Target,
    title: "Platform Migrations",
    description: "Lead complex technical transitions with minimal disruption and maximum impact.",
  },
  {
    icon: Users,
    title: "Stakeholder Alignment",
    description: "Get teams and leadership on the same page to move forward with confidence.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Things I can help you with</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="p-8 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
