import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "Project Title 1",
    description: "Add your project description here. Describe the challenge, your approach, and the impact.",
    tags: ["Strategy", "Migration"],
  },
  {
    title: "Project Title 2",
    description: "Add your project description here. Describe the challenge, your approach, and the impact.",
    tags: ["Optimization", "Process"],
  },
  {
    title: "Project Title 3",
    description: "Add your project description here. Describe the challenge, your approach, and the impact.",
    tags: ["Platform", "Transformation"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Past projects</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
