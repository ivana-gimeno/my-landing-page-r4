"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col items-start gap-8">
          <Image
            src="/images/profile.jpeg"
            alt="Ivana"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">Hey there, I'm Ivana.</h1>

            <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed text-balance">
              Your partner in working smarter, staying organized, and shipping with purpose.
            </p>

            <Button
              size="lg"
              className="mt-4 text-lg px-8 py-6"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
