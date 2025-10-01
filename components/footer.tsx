import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-20 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to work together?</h2>
        <p className="text-xl text-background/80">Let's talk about your next project</p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
          <a href="mailto:ivana@gimeno.ca">Stay in touch</a>
        </Button>
        {/* </CHANGE> */}
        <div className="pt-12 text-sm text-background/60">© {new Date().getFullYear()} Ivana. All rights reserved.</div>
      </div>
    </footer>
  )
}
