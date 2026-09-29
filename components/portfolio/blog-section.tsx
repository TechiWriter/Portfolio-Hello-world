"use client"

import { useRef } from "react"
import NextImage from "next/image"
import { motion, useInView } from "framer-motion"
import { BookOpen, Lightbulb, TrendingUp, Sparkles, ExternalLink, Code, Gamepad2, GraduationCap, Users } from "lucide-react"
import { WavyLine } from "./doodles"

interface BlogPost {
  id: number
  title: string
  description: string
  category: string
  categoryIcon: React.ReactNode
  categoryColor: string
  image?: string
  imageAlt?: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Orquestación de Agentes con arquetipos y frameworks en Kiro",
    description: "En el Meet up de “Orquestación de agentes con arquetipos y frameworks de marketing y los llevamos al ecosistema de AWS.",
    image: "/images/orquestacion-agentes.jpg",
    imageAlt: "Foto grupal del meetup Orquestación de agentes con el arquetipo Dream Team en el Centro de Innovación",
    category: "AWS User Group",
    categoryIcon: <Lightbulb className="h-4 w-4" />,
    categoryColor: "#14b8a6",
  },
  {
    id: 2,
    title: "Herramientas para el profesional del futuro",
    description: "Análisis del caos controlado: cómo el carácter del búho verde rompió todos los manuales de marca y ganó.",
  image: "/images/herramientas-profesional.jpg",
  imageAlt: "Charla Herramientas para el profesional del futuro ante estudiantes en el auditorio de la Universidad UCATEC con AIESEC",
  category: "AIESEC",
  categoryIcon: <TrendingUp className="h-4 w-4" />,
    categoryColor: "#06b6d4",
  },
  {
    id: 3,
    title: "La falacia de la automatización",
    description: "Se creía que la era de la #automatización liberaría a las personas para que puedan dedicarse a actividades como escribir poesía, componer música, dibujar y explorar otras formas de expresión artística.",
    category: "Feria del Libro ",
    categoryIcon: <BookOpen className="h-4 w-4" />,
    categoryColor: "#7c3aed",
    image: "/images/falacia-automatizacion.png",
    imageAlt: "Presentando la charla La falacia de la automatización frente a una diapositiva que pregunta ¿Realidad?",
  },
  {
    id: 4,
    title: "PyDay Cochabamba",
    description: "Mi experiencia en el PyDay Cochabamba: una jornada de charlas, talleres y comunidad alrededor de Python, datos e inteligencia artificial.",
    category: "Python Bolivia",
  categoryIcon: <Code className="h-4 w-4" />,
  categoryColor: "#0ea5e9",
  image: "/images/pyday-cochabamba.jpg",
  imageAlt: "Foto grupal de organizadores y asistentes del PyDay Cochabamba junto a banners de PyLadies y Python Cochabamba en la Universidad UCATEC",
  },
  {
    id: 5,
    title: "3 años de la Women Game Jam",
    description: "Tres ediciones creando videojuegos junto a mujeres y diversidades: lo que aprendimos organizando, diseñando y construyendo comunidad.",
    category: "Women Game Jam",
  categoryIcon: <Gamepad2 className="h-4 w-4" />,
  categoryColor: "#ec4899",
  image: "/images/women-game-jam.jpg",
  imageAlt: "Equipo organizador de la Women Game Jam con coronas de papel junto a vasos morados WGJ en la mesa de registro",
  },
  {
    id: 6,
    title: "Platzi AI Academy y los retos",
    description: "Cómo viví los retos de Platzi AI Academy: aprendizaje práctico, proyectos con IA generativa y oportunidades para empezar en tecnología.",
    category: "Platzi",
    categoryIcon: <GraduationCap className="h-4 w-4" />,
    categoryColor: "#22c55e",
  image: "/images/platzi-live.png",
  imageAlt: "Transmisión en vivo de Platzi con el host frente a un micrófono Platzi y tres participantes en videollamada",
  },
  {
    id: 7,
    title: "Team Marketing en diferentes versiones",
    description: "Los equipos de marketing con los que he crecido: distintas etapas, formas de trabajar y proyectos que construimos juntos.",
    category: "Digital Harbor",
    categoryIcon: <Users className="h-4 w-4" />,
    categoryColor: "#a855f7",
    image: "/images/team-marketing.jpg",
    imageAlt: "Equipo de marketing de Digital Harbor haciendo gestos con las manos detrás de bolsas de regalo personalizadas",
  },
  {
    id: 8,
    title: "¿Qué hace un Media Partner en el EMMS?",
    description: "Ser partner oficial permitió regalar una asesoría personalizada y un curso creativo de Domestika a la comunidad.",
    category: "EMMS Hostinger x Doppler",
    categoryIcon: <Sparkles className="h-4 w-4" />,
    categoryColor: "#f59e0b",
    image: "/images/emms-partners.png",
    imageAlt: "Sitio web del EMMS by Doppler mostrando la sección Media Partners Starters con los logos de los partners",
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
          {post.image ? (
            <div className="relative overflow-hidden h-40">
              <NextImage
                src={post.image}
                alt={post.imageAlt ?? post.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
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
          )}

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
            Un espacio para compartir lo que aprendo construyendo en comunidad. 
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
