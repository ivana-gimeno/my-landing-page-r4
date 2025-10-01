import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Add client testimonial here. What did they appreciate about working with you?",
    author: "Client Name",
    role: "Title, Company",
  },
  {
    quote: "Add client testimonial here. What did they appreciate about working with you?",
    author: "Client Name",
    role: "Title, Company",
  },
  {
    quote: "Add client testimonial here. What did they appreciate about working with you?",
    author: "Client Name",
    role: "Title, Company",
  },
]

export function FeedbackSection() {
  return (
    <section id="feedback" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Client feedback</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="space-y-6">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <p className="text-foreground/80 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="space-y-1">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
