"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Layers } from "lucide-react"
import { projectsData, categories, type ProjectCategory } from "@/lib/portfolio-data"
import { WavyLine } from "./doodles"

function ProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="bg-card rounded-2xl border border-border overflow-hidden scrapbook-shadow hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        {/* Project preview */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <Layers
                className="h-10 w-10 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110"
                style={{ color: project.color }}
              />
              <p className="text-sm font-medium text-foreground/60">{project.type}</p>
            </div>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground text-primary font-medium text-sm">
              <ExternalLink className="h-4 w-4" />
              Ver Proyecto
            </button>
          </div>
        </div>
        {/* Info */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: `${project.color}18`,
                color: project.color,
              }}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
          </div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 md:py-32 paper-texture">
      <div className="mx-auto max-w-6xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Mis <span className="font-serif italic text-primary">Proyectos</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
