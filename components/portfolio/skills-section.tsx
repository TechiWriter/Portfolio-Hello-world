"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"
import { skillsData, radarData } from "@/lib/portfolio-data"
import { WavyLine, StarDoodle } from "./doodles"

function AnimatedBar({ level, delay, inView }: { level: number; delay: number; inView: boolean }) {
  return (
    <div className="h-2.5 w-full rounded-full bg-secondary overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animatedData, setAnimatedData] = useState(
    radarData.map((d) => ({ ...d, A: 0 }))
  )

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedData(radarData)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section id="skills" className="relative py-24 md:py-32 paper-texture">
      <div className="mx-auto max-w-6xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Mis <span className="font-serif italic text-primary">Habilidades</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border scrapbook-shadow"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <StarDoodle className="h-6 w-6 text-primary" />
              Competencia en Habilidades
            </h3>
            <div className="space-y-5">
              {skillsData.map((item, index) => (
                <div key={item.skill}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{item.skill}</span>
                    <span className="text-sm font-mono text-muted-foreground">{item.level}%</span>
                  </div>
                  <AnimatedBar level={item.level} delay={0.1 * index} inView={isInView} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Radar chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border scrapbook-shadow flex flex-col"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <StarDoodle className="h-6 w-6 text-primary" />
              Radar de Habilidades
            </h3>
            <div className="flex-1 min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={animatedData}>
                  <PolarGrid
                    stroke="var(--border)"
                    strokeDasharray="3 3"
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={false}
                    axisLine={false}
                  />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="var(--primary)"
                    fill="var(--primary)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
