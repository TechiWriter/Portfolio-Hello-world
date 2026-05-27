"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Zap, Eye } from "lucide-react"
import { WavyLine } from "./doodles"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"

interface SkillDeck {
  id: number
  title: string
  category: string
  description: string
  stats: Array<{ subject: string; value: number }>
}

const skillDeckData: SkillDeck[] = [
  {
    id: 1,
    title: "Content Analytics System",
    category: "Métricas",
    description: "Análisis de rendimiento, evaluación de campañas, hipótesis de crecimiento y optimización basada en KPIs de engagement y conversión.",
    stats: [
      { subject: "Complejidad Técnica", value: 80 },
      { subject: "Inversión", value: 80 },
      { subject: "Conocimiento", value: 80 },
      { subject: "Creatividad", value: 40 },
      { subject: "Impacto", value: 100 },
    ],
  },
  {
    id: 2,
    title: "Campaign Calendars",
    category: "Content Strategist",
    description: "Diseño de secuencias de calendarios para lanzamientos, activaciones y eventos, alineando narrativa, expectativa y timing.",
    stats: [
      { subject: "Complejidad Técnica", value: 40 },
      { subject: "Inversión", value: 40 },
      { subject: "Conocimiento", value: 40 },
      { subject: "Creatividad", value: 40 },
      { subject: "Impacto", value: 60 },
    ],
  },
  {
    id: 3,
    title: "Viral Content Engine",
    category: "Storyboards",
    description: "Estrategia y producción de contenido orientado a engagement y alcance orgánico, optimizado con análisis de comportamiento de audiencia.",
    stats: [
      { subject: "Complejidad Técnica", value: 60 },
      { subject: "Inversión", value: 60 },
      { subject: "Conocimiento", value: 60 },
      { subject: "Creatividad", value: 100 },
      { subject: "Impacto", value: 80 },
    ],
  },
  {
    id: 4,
    title: "Process Mapping & Flow",
    category: "Workflow",
    description: "Análisis de flujos de trabajo y creación de diagramas operativos para mejorar eficiencia en equipos de contenido y marketing.",
    stats: [
      { subject: "Complejidad Técnica", value: 60 },
      { subject: "Inversión", value: 60 },
      { subject: "Conocimiento", value: 60 },
      { subject: "Creatividad", value: 40 },
      { subject: "Impacto", value: 80 },
    ],
  },
]

function SkillCard({ deck }: { deck: SkillDeck }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="h-80 cursor-pointer perspective"
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Front side */}
        <motion.div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full bg-card rounded-2xl p-6 border-2 border-primary/30 scrapbook-shadow flex flex-col hover:border-primary/60 transition-all hover:shadow-lg hover:scale-105 origin-center"
          whileHover={{ scale: 1.05 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs font-mono font-bold text-primary">#{String(deck.id).padStart(3, "0")}</span>
            </div>
            <span className="text-xs font-mono text-muted-foreground uppercase">{deck.category}</span>
          </div>

          {/* Icon with glow */}
          <div className="flex justify-center mb-3">
            <motion.div 
              className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 glow-effect"
              animate={{ 
                boxShadow: [
                  "0 0 10px rgba(168, 85, 247, 0.3)",
                  "0 0 20px rgba(168, 85, 247, 0.6)",
                  "0 0 10px rgba(168, 85, 247, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 text-primary" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-center font-bold text-foreground mb-2 text-base">
            {deck.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-muted-foreground leading-relaxed text-center flex-1 mb-2">
            {deck.description}
          </p>

          {/* Tap hint */}
          <div className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Eye className="h-3 w-3" />
            Toca para ver
          </div>
        </motion.div>

        {/* Back side */}
        <motion.div
          style={{ backfaceVisibility: "hidden", rotateY: 180 }}
          className="absolute w-full h-full bg-card rounded-2xl p-6 border-2 border-primary/30 scrapbook-shadow flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold text-primary">#{String(deck.id).padStart(3, "0")}</span>
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>

          {/* Radar Chart with 5 dimensions */}
          <div className="flex-1 flex items-center justify-center -mx-4 mb-4">
            <ResponsiveContainer width="100%" height={150}>
              <RadarChart data={deck.stats}>
                <PolarGrid stroke="rgba(168, 85, 247, 0.2)" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
                <Radar
                  name="Métricas"
                  dataKey="value"
                  stroke="#a855f7"
                  fill="#a855f7"
                  fillOpacity={0.6}
                  isAnimationActive={false}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Project button */}
          <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            Ver proyecto
            <span>&gt;</span>
          </button>

          {/* Tap hint */}
          <div className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Eye className="h-3 w-3" />
            Toca para ver
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function SkillDeckSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-24 md:py-32 paper-texture">
      <div className="mx-auto max-w-7xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Mis Proyectos <span className="font-serif italic text-primary">Destacados</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Mi trabajo vive en la intersección entre storytelling estratégico y stack técnico — no solo creo contenido, construyo los sistemas que lo hacen crecer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillDeckData.map((deck, index) => (
            <motion.div
              key={deck.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <SkillCard deck={deck} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
