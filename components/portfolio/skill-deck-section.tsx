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
  year: number
  description: string
  stats: Array<{ subject: string; value: number }>
}

// Personaliza estos datos según tus necesidades
const skillDeckData: SkillDeck[] = [
  {
    id: 1,
    title: "Marketing & IA",
    category: "AI Content Lab",
    year: 2023,
    description: "Un sistema de generación y optimización de contenido usando IA, de acuerdo a las campañas.",
    stats: [
      { subject: "Creatividad", value: 95 },
      { subject: "Impacto", value: 88 },
      { subject: "Técnica", value: 92 },
      { subject: "Composición", value: 85 },
      { subject: "Color", value: 90 },
    ],
  },
  {
    id: 2,
    title: "Viral Content Engine",
    category: "Storyboards",
    year: 2023,
    description: "Estrategia y producción de contenido orientado a engagement y alcance orgánico, optimizado con análisis heurístico y comportamiento de audiencia.",
    stats: [
      { subject: "Creatividad", value: 92 },
      { subject: "Impacto", value: 85 },
      { subject: "Técnica", value: 85 },
      { subject: "Composición", value: 88 },
      { subject: "Color", value: 90 },
    ],
  },
  {
    id: 3,
    title: "Content Analytics System",
    category: "Métricas",
    year: 2024,
    description: "Análisis de rendimiento, evaluación de campañas, hipótesis de crecimiento y optimización basada en KPIs de engagement y conversión.",
    stats: [
      { subject: "Creatividad", value: 88 },
      { subject: "Impacto", value: 92 },
      { subject: "Técnica", value: 92 },
      { subject: "Composición", value: 95 },
      { subject: "Color", value: 85 },
    ],
  },
  {
    id: 4,
    title: "Campaign Calendars",
    category: "Content Strategist",
    year: 2024,
    description: "Diseño de secuencias de calendarios para lanzamientos, activaciones y eventos, alineando narrativa, expectativa y timing.",
    stats: [
      { subject: "Creatividad", value: 85 },
      { subject: "Impacto", value: 90 },
      { subject: "Técnica", value: 90 },
      { subject: "Composición", value: 88 },
      { subject: "Color", value: 88 },
    ],
  },
  {
    id: 5,
    title: "Process Mapping & Team Flow",
    category: "Workflow",
    year: 2025,
    description: "Análisis de flujos de trabajo y creación de diagramas operativos para mejorar eficiencia en equipos de contenido y marketing.",
    stats: [
      { subject: "Creatividad", value: 97 },
      { subject: "Impacto", value: 93 },
      { subject: "Técnica", value: 93 },
      { subject: "Composición", value: 88 },
      { subject: "Color", value: 88 },
    ],
  },
  {
    id: 6,
    title: "Paid Ads Strategy",
    category: "Arte de Juegos",
    year: 2024,
    description: "Diseño y ejecución de campañas pagadas con enfoque en segmentación y retorno sobre inversión.",
    stats: [
      { subject: "Creatividad", value: 90 },
      { subject: "Impacto", value: 87 },
      { subject: "Técnica", value: 87 },
      { subject: "Composición", value: 82 },
      { subject: "Color", value: 82 },
    ],
  },
  {
    id: 7,
    title: "Merch & Product Support Kit",
    category: "Identidad de Marca",
    year: 2024,
    description: "Creación de merchandising, materiales visuales y recursos gráficos para reforzar identidad y adopción de productos.",
    stats: [
      { subject: "Creatividad", value: 86 },
      { subject: "Impacto", value: 94 },
      { subject: "Técnica", value: 94 },
      { subject: "Composición", value: 91 },
      { subject: "Color", value: 91 },
    ],
  },
  {
    id: 8,
    title: "Value Content Series",
    category: "Value Content",
    year: 2023,
    description: "Desarrollo de contenido educativo, infografías y contenido estructurado para aportar valor sostenido a la audiencia.",
    stats: [
      { subject: "Creatividad", value: 89 },
      { subject: "Impacto", value: 86 },
      { subject: "Técnica", value: 86 },
      { subject: "Composición", value: 84 },
      { subject: "Color", value: 84 },
    ],
  },
]

function SkillCard({ deck }: { deck: SkillDeck }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="h-96 cursor-pointer perspective"
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Front side */}
        <motion.div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full bg-card rounded-2xl p-6 border-2 border-primary/30 scrapbook-shadow flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm font-mono font-bold text-primary">#{String(deck.id).padStart(3, "0")}</span>
            </div>
            <span className="text-sm font-mono text-muted-foreground">{deck.year}</span>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-4 flex-1">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Zap className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Title and Category */}
          <h3 className="text-center font-bold text-foreground mb-2 text-lg">
            {deck.title}
          </h3>
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {deck.category}
            </span>
          </div>

          {/* Stats preview */}
          <div className="space-y-2 text-xs">
            {deck.stats.slice(0, 3).map((stat, idx) => (
              <div key={stat.subject} className="flex items-center justify-between">
                <span className="text-muted-foreground">{stat.subject}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.value}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.15 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tap hint */}
          <div className="mt-4 text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Eye className="h-3 w-3" />
            Toca para ver estadísticas
          </div>
        </motion.div>

        {/* Back side */}
        <motion.div
          style={{ backfaceVisibility: "hidden", rotateY: 180 }}
          className="absolute w-full h-full bg-card rounded-2xl p-6 border-2 border-primary/30 scrapbook-shadow flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold text-primary">STATS: {deck.title}</span>
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>

          {/* Radar Chart */}
          <div className="flex-1 flex items-center justify-center -mx-4">
            <ResponsiveContainer width="100%" height={140}>
              <RadarChart data={deck.stats}>
                <PolarGrid stroke="rgba(168, 85, 247, 0.2)" />
                <PolarAngleAxis dataKey="subject" tick={false} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
                <Radar
                  name="Stats"
                  dataKey="value"
                  stroke="#a855f7"
                  fill="#a855f7"
                  fillOpacity={0.6}
                  isAnimationActive={true}
                  animationBegin={0}
                  animationDuration={800}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Description */}
          <p className="text-xs text-muted-foreground leading-relaxed mb-4 text-center">
            {deck.description}
          </p>

          {/* Evolution button */}
          <button className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-3">
            Ver Evolución
            <span>&gt;</span>
          </button>

          {/* Tap hint */}
          <div className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Eye className="h-3 w-3" />
            Toca para voltear atrás
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
    <section id="skill-deck" className="relative py-24 md:py-32 paper-texture">
      <div className="mx-auto max-w-7xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">SKILL DECK LAB</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Mis Proyectos <span className="font-serif italic text-primary">Destacados</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Cada proyecto es una criatura especializada con sus propias habilidades y áreas de expertise. Toca cualquier tarjeta para revelar su radar de estadísticas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
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
