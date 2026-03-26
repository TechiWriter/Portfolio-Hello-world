"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { toolsData } from "@/lib/portfolio-data"
import { WavyLine } from "./doodles"

function CircularProgress({
  level,
  icon,
  name,
  delay,
  inView,
}: {
  level: number
  icon: string
  name: string
  delay: number
  inView: boolean
}) {
  const radius = 38
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (level / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3 group"
    >
      <div className="relative w-24 h-24 md:w-28 md:h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
          {/* Background circle */}
          <circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="6"
          />
          {/* Progress circle */}
          <motion.circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          />
        </svg>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-primary font-mono">{icon}</span>
          <motion.span
            className="text-xs font-mono text-muted-foreground mt-0.5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.8 }}
          >
            {level}%
          </motion.span>
        </div>
      </div>
      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors text-center">
        {name}
      </span>
    </motion.div>
  )
}

export function ToolsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tools" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Mis <span className="font-serif italic text-primary">Herramientas</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            El software creativo y plataformas que uso diariamente para dar vida a las ideas.
          </p>
        </motion.div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border scrapbook-shadow">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10">
            {toolsData.map((tool, index) => (
              <CircularProgress
                key={tool.name}
                level={tool.level}
                icon={tool.icon}
                name={tool.name}
                delay={0.08 * index}
                inView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
