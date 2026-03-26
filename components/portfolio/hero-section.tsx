"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { StarDoodle, SpiralDoodle, HeartDoodle } from "./doodles"

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20">
          <StarDoodle className="h-12 w-12" />
        </div>
        <div className="absolute top-40 right-20 text-accent/30">
          <SpiralDoodle className="h-16 w-16" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-primary/15">
          <HeartDoodle className="h-10 w-10" />
        </div>
        <div className="absolute bottom-48 right-1/3 text-accent/20">
          <StarDoodle className="h-8 w-8" />
        </div>
        {/* Large faded circle */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Avatar / Illustration */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mx-auto mb-6 relative inline-block"
        >
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-primary/10 border-4 border-primary/20 flex items-center justify-center mx-auto">
            <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-primary" />
          </div>
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <StarDoodle className="h-4 w-4 text-accent-foreground" />
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight text-balance"
        >
          Vanesa {" "}
          <span className="text-primary font-serif italic">Paco</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-muted-foreground font-medium tracking-wide"
        >
          Content Marketer &bull; Content Writer Specialist &bull; Adobe Content Creator
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Me considero una persona autodidacta, curiosa por naturaleza y apasionada por integrar Tecnología y Marketing.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Explorar portafolio
          </button>
          <button
            onClick={() => handleScroll("#pokedex")}
            className="px-8 py-3 rounded-xl bg-card text-card-foreground font-semibold text-sm border-2 border-primary/30 hover:border-primary/60 hover:-translate-y-0.5 transition-all duration-200 scrapbook-shadow"
          >
            Stack creativo
          </button>
        </motion.div>


      </div>
    </section>
  )
}
