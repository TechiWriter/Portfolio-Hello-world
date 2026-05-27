"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { ExternalLink, Instagram, Linkedin, Youtube, TrendingUp } from "lucide-react"
import { WavyLine, StarDoodle } from "./doodles"

const socialLinks = {
  behance: "https://behance.net/vanesapacoal",
  instagram: "https://instagram.com/aniipark",
  linkedin: "https://linkedin.com/in/vanesapacoalvarez",
  youtube: "https://youtube.com/@anipark.exe",
  tiktok: "https://www.tiktok.com/@anipark.exe"
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const lastSpawnRef = useRef(0)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const aboutContainer = ref.current?.querySelector(".about-content")
    if (!aboutContainer) return

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastSpawnRef.current < 60) return // control density
      lastSpawnRef.current = now

      const star = document.createElement("div")
      star.classList.add("star-particle")
      
      const rect = aboutContainer.getBoundingClientRect()
      star.style.left = `${e.clientX - rect.left}px`
      star.style.top = `${e.clientY - rect.top}px`
      
      aboutContainer.appendChild(star)
      
      setTimeout(() => {
        star.remove()
      }, 900)
    }

    aboutContainer.addEventListener("mousemove", handleMouseMove)
    return () => {
      aboutContainer.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="about" className="relative py-24 md:py-32 paper-texture">
      <div className="mx-auto max-w-6xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Acerca <span className="font-serif italic text-primary">de Mí</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center about-content relative">
          {/* Polaroid photo with flip animation */}
          <motion.div
            initial={{ opacity: 0, rotate: -6, x: -40 }}
            animate={isInView ? { opacity: 1, rotate: -3, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <motion.div
              className="tape bg-card p-4 pb-14 scrapbook-shadow rounded-sm w-64 md:w-72"
              style={{
                perspective: "1000px",
              }}
            >
              <motion.div
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateY: isFlipped ? 180 : 0,
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Front - Original photo */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                  className="w-full aspect-square bg-secondary rounded-sm overflow-hidden"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_t0j6gdt0j6gdt0j6-mM0MSx4rWwsWU27VWMO5bcggutY8xM.png"
                    alt="Perfil"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back - New photo */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                  className="w-full aspect-square bg-secondary rounded-sm overflow-hidden"
                >
                  <img
                    src="/about-photo.png"
                    alt="Vanesa Paco"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <p className="absolute bottom-4 left-0 right-0 text-center font-serif text-lg text-muted-foreground">
                {"¡Hola soy Vane ⟡!"}
              </p>
            </motion.div>
            <div className="absolute -top-3 -right-3 text-primary/40">
              <StarDoodle className="h-8 w-8" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 md:p-8 scrapbook-shadow border border-border">
              <p className="text-foreground leading-relaxed text-base md:text-lg">
                Soy una creativa multidisciplinaria apasionada por la tecnología. Con más de 3 años de experiencia creando, gestionando y estructurando contenidos en entornos de Tecnología, Saas y Telecomunicaciones.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-base">
                Cuando no estoy creando, estoy apoyando comunidades de tecnología o testeando nuevas herramientas para automatizar y optimizar procesos.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Behance"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="TikTok"
              >
                <TrendingUp className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
