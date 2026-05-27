"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, Lightbulb, TrendingUp, Sparkles, ExternalLink } from "lucide-react"
import { WavyLine } from "./doodles"

interface BlogPost {
  id: number
  title: string
  description: string
  category: string
  categoryIcon: React.ReactNode
  categoryColor: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Libros para creativos y marketers",
    description: "Una colección de ideas, diseño y pensamiento estratégico para crear mejor contenido sin saturarse.",
    category: "Conceptos",
    categoryIcon: <Lightbulb className="h-4 w-4" />,
    categoryColor: "#14b8a6",
  },
  {
    id: 2,
    title: "Por qué la campaña de Duolingo funciona tan bien",
    description: "Análisis del caos controlado: cómo el carácter del búho verde rompió todos los manuales de marca y ganó.",
    category: "Reseñas de Campañas",
    categoryIcon: <TrendingUp className="h-4 w-4" />,
    categoryColor: "#06b6d4",
  },
  {
    id: 3,
    title: "Cómo crear un tracker de contenido",
    description: "La mayoría de los dashboards de Notion se abandonan en la primera semana. Aquí el sistema que me funciona.",
    category: "Gadgets Notion",
    categoryIcon: <BookOpen className="h-4 w-4" />,
    categoryColor: "#7c3aed",
  },
]

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-card rounded-2xl border-2 border-primary/30 overflow-hidden pokedex-glow h-full flex flex-col"
        >
          {/* Header bar with numbering and category */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary/10 border-b border-primary/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs font-mono text-primary font-bold">
                #{String(post.id).padStart(3, "0")}
              </span>
            </div>
            <span className="text-xs font-mono text-muted-foreground">{post.category}</span>
          </div>

          {/* Icon area */}
          <div
            className="relative overflow-hidden h-40 flex items-center justify-center p-4"
            style={{
              background: `linear-gradient(135deg, ${post.categoryColor}15 0%, ${post.categoryColor}05 100%)`,
            }}
          >
            <div className="text-6xl" style={{ color: post.categoryColor }}>
              {post.categoryIcon}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-3 flex-1">
            <h3 className="text-base font-bold text-foreground line-clamp-2">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-3">
              {post.description}
            </p>

            {/* Action button */}
            <button
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-primary-foreground transition-all hover:shadow-md active:scale-95 mt-auto"
              style={{ backgroundColor: "#7c3aed" }}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Leer
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" className="relative py-24 md:py-32">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Mi <span className="font-serif italic text-primary">Blog</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Recursos, análisis y herramientas para marketers curiosos y apasionados por aprender. Toca cualquier tarjeta para leer el artículo completo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
