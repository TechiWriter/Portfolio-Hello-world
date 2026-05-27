"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { toolsData } from "@/lib/portfolio-data"
import { WavyLine } from "./doodles"
import { ChevronDown } from "lucide-react"

interface ToolCategory {
  name: string
  tools: typeof toolsData
  color: string
  description: string
}

const toolCategories: ToolCategory[] = [
  {
    name: "AI Design Tools",
    description: "Herramientas de diseño potenciadas con IA",
    color: "#7c3aed",
    tools: toolsData.filter((t) => ["Adobe Express", "Canva", "Photoshop", "Illustrator"].includes(t.name)),
  },
  {
    name: "Video Tools & Animation",
    description: "Herramientas de video y edición profesional",
    color: "#a855f7",
    tools: toolsData.filter((t) => ["Adobe Premiere", "After Effects", "Capcut"].includes(t.name)),
  },
  {
    name: "IA Tools Aplicadas",
    description: "Aplicaciones de IA en creatividad",
    color: "#c084fc",
    tools: toolsData.filter((t) => ["Figma"].includes(t.name)),
  },
]

function ToolCard({
  name,
  level,
  icon,
  delay,
  inView,
}: {
  name: string
  level: number
  icon: string
  delay: number
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 300, damping: 25 }}
      whileHover={{ scale: 1.08, y: -5 }}
      className="group"
    >
      <div className="relative p-5 rounded-2xl border-2 border-primary/30 bg-card hover:border-primary/60 transition-all duration-300 overflow-hidden">
        {/* Holographic shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
          animate={{
            x: [-100, 100],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Background glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            boxShadow: "inset 0 0 20px rgba(168, 85, 247, 0.1)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-3">
          <motion.div
            className="text-3xl font-bold"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay,
            }}
          >
            {icon}
          </motion.div>

          <div>
            <p className="font-semibold text-foreground text-sm mb-2">{name}</p>
            
            {/* Animated progress bar */}
            <div className="w-full h-2 rounded-full bg-secondary overflow-hidden border border-primary/20">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                initial={{ width: 0 }}
                animate={inView ? { width: `${level}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
              />
            </div>
            
            <p className="text-xs text-muted-foreground font-mono mt-2">{level}%</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CategorySection({
  category,
  index,
  inView,
}: {
  category: ToolCategory
  index: number
  inView: boolean
}) {
  const [isOpen, setIsOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-2 border-primary/20 rounded-2xl overflow-hidden bg-card hover:border-primary/40 transition-all"
    >
      {/* Category header */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between hover:bg-primary/5 transition-colors"
      >
        <div className="text-left">
          <h3 className="font-bold text-lg text-foreground mb-1">{category.name}</h3>
          <p className="text-sm text-muted-foreground">{category.description}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.button>

      {/* Category content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-primary/10"
          >
            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.tools.map((tool, toolIndex) => (
                <ToolCard
                  key={tool.name}
                  name={tool.name}
                  level={tool.level}
                  icon={tool.icon}
                  delay={toolIndex * 0.05}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
            Mi Pokédex creativo: herramientas especializadas en diseño, video y IA que uso diariamente.
          </p>
        </motion.div>

        <div className="space-y-6">
          {toolCategories.map((category, index) => (
            <CategorySection
              key={category.name}
              category={category}
              index={index}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
