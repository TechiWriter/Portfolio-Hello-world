"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"
import { ChevronRight, Zap, Eye } from "lucide-react"
import { projectsData, type Project } from "@/lib/portfolio-data"
import { WavyLine } from "./doodles"

function PokedexCard({ project, index }: { project: Project; index: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="perspective-1000"
    >
      <motion.div
        className="relative w-full cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Front of card */}
        <AnimatePresence mode="wait">
          {!flipped ? (
            <motion.div
              key="front"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -180 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl border-2 border-primary/30 overflow-hidden pokedex-glow"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-primary/10 border-b border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-mono text-primary font-bold">
                    #{String(project.id).padStart(3, "0")}
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Icon area */}
                <div
                  className="w-full aspect-square max-w-[120px] mx-auto rounded-xl mb-4 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)`,
                    border: `2px solid ${project.color}30`,
                  }}
                >
                  <Zap className="h-12 w-12" style={{ color: project.color }} />
                </div>

                <h3 className="text-lg font-bold text-foreground text-center">{project.title}</h3>

                {/* Type badge */}
                <div className="flex justify-center mt-2">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    {project.type}
                  </span>
                </div>

                {/* Stats bars */}
                <div className="mt-4 space-y-2">
                  {project.stats.slice(0, 3).map((stat) => (
                    <div key={stat.subject} className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground w-20 truncate">
                        {stat.subject}
                      </span>
                      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: project.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.value}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground w-8 text-right">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tap hint */}
                <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                  <Eye className="h-3 w-3" />
                  Toca para ver estadísticas
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ rotateY: -180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 180 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl border-2 border-primary/30 overflow-hidden pokedex-glow"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-primary/10 border-b border-primary/20">
                <span className="text-xs font-mono text-primary font-bold">
                  STATS: {project.title}
                </span>
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              </div>

              {/* Radar chart */}
              <div className="p-4">
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="70%"
                      data={project.stats}
                    >
                      <PolarGrid stroke="var(--border)" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
                      />
                      <Radar
                        name="Stats"
                        dataKey="value"
                        stroke={project.color}
                        fill={project.color}
                        fillOpacity={0.25}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mt-3 text-center">
                  {project.description}
                </p>

                {/* View evolution button */}
                <button
                  className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                  style={{ backgroundColor: project.color }}
                >
                  Ver Evolución
                  <ChevronRight className="h-4 w-4" />
                </button>

                <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1">
                  <Eye className="h-3 w-3" />
                  Toca para voltear atrás
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export function PokedexSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pokedex" className="relative py-24 md:py-32">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">STACK CREATIVO</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Skill Deck {" "}
            <span className="font-serif italic text-primary">Lab</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Mi ecosistema de capacidades,como certificaciones, reconocimientos y liderazgo. Toca cualquier tarjeta para revelar sus estadísticas completas y ruta de evolución.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project, index) => (
            <PokedexCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
