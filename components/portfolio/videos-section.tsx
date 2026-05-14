"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, Download } from "lucide-react"
import { WavyLine } from "./doodles"

interface VideoCard {
  id: number
  title: string
  category: string
  thumbnail: string
  description: string
}

const videosData: VideoCard[] = [
  {
    id: 1,
    title: "Marketing IA",
    category: "AI Content Creation",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f70a504f0?w=500&h=300&fit=crop",
    description: "Generación y optimización de contenido usando inteligencia artificial aplicada a estrategias de marketing digital.",
  },
  {
    id: 2,
    title: "Viral Content Engine",
    category: "Content Strategy",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
    description: "Estrategias de producción de contenido orientado a engagement viral y alcance orgánico en redes sociales.",
  },
  {
    id: 3,
    title: "Content Analytics System",
    category: "Data Analytics",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    description: "Análisis profundo de rendimiento, evaluación de campañas y optimización basada en KPIs de conversión.",
  },
  {
    id: 4,
    title: "Campaign Calendars",
    category: "Planning & Strategy",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    description: "Diseño de secuencias de calendarios para lanzamientos y activaciones alineadas con narrativa estratégica.",
  },
  {
    id: 5,
    title: "Process Mapping & Team Flow",
    category: "Workflow Optimization",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    description: "Análisis de flujos de trabajo y diagramas operativos para mejorar eficiencia en equipos de contenido.",
  },
  {
    id: 6,
    title: "Paid Ads Strategy",
    category: "Performance Marketing",
    thumbnail: "https://images.unsplash.com/photo-1543269865-cbdf26e6efb7?w=500&h=300&fit=crop",
    description: "Diseño y ejecución de campañas pagadas con enfoque en segmentación y retorno sobre inversión.",
  },
  {
    id: 7,
    title: "Merch & Kit Support",
    category: "Brand Identity",
    thumbnail: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&h=300&fit=crop",
    description: "Creación de merchandising y recursos gráficos para reforzar identidad y adopción de productos.",
  },
  {
    id: 8,
    title: "Value Content Series",
    category: "Educational Content",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f70a504f0?w=500&h=300&fit=crop",
    description: "Desarrollo de contenido educativo e infografías para aportar valor sostenido a la audiencia.",
  },
]

function VideoCardComponent({ video, index }: { video: VideoCard; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group cursor-pointer"
    >
      <div
        className="relative overflow-hidden rounded-2xl bg-card border border-border scrapbook-shadow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden bg-secondary">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />

          {/* Pokedex Scanning Animation Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <div className="relative">
              {/* Play button */}
              <motion.div
                animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm"
              >
                <Play className="h-8 w-8 text-primary-foreground fill-primary-foreground" />
              </motion.div>

              {/* Scan lines effect */}
              {isHovered && (
                <>
                  <motion.div
                    animate={{ y: [0, 192, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent pointer-events-none"
                  />
                  {/* Corner indicators */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent" />
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Category badge */}
          <div className="absolute top-3 right-3">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
              {video.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">{video.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {video.description}
          </p>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => window.open("https://youtube.com", "_blank")}
              className="flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Play className="h-4 w-4" />
              Watch on YouTube
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a")
                link.href = "#"
                link.download = `${video.title}-infographic.pdf`
                link.click()
              }}
              className="flex-1 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Infographic
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function VideosSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="videos" className="relative py-24 md:py-32 paper-texture">
      <div className="mx-auto max-w-7xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">LATEST CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            My Latest <span className="font-serif italic text-primary">Videos</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Explora mis últimos videos y contenido de alto valor. Click en cualquier tarjeta para activar la Pokédex scanning animation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videosData.map((video, index) => (
            <VideoCardComponent key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
