"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download, ExternalLink, Mail, Instagram, Linkedin, Facebook } from "lucide-react"
import { WavyLine, StarDoodle } from "./doodles"

const socialLinks = {
  behance: "https://behance.net/vanesapacoal",
  instagram: "https://instagram.com/aniipark",
  linkedin: "https://linkedin.com/in/vanesapacoalvarez",
  facebook: "https://facebook.com/vanesapacoalvarez",
  email: "mailto:vanesapaco.a@gmail.com"
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Polaroid photo */}
          <motion.div
            initial={{ opacity: 0, rotate: -6, x: -40 }}
            animate={isInView ? { opacity: 1, rotate: -3, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="tape bg-card p-4 pb-14 scrapbook-shadow rounded-sm w-64 md:w-72">
              <div className="w-full aspect-square bg-secondary rounded-sm overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_t0j6gdt0j6gdt0j6-mM0MSx4rWwsWU27VWMO5bcggutY8xM.png"
                  alt="Perfil"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="absolute bottom-4 left-0 right-0 text-center font-serif text-lg text-muted-foreground">
                {"¡Hola soy Vane ⟡!"}
              </p>
            </div>
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
                Soy una creativa multidisciplinaria apasionada por la tecnología. Con más de 2 años de experiencia creando, gestionando y estructurando contenidos en entornos de Tecnología y Saas.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-base">
                Cuando no estoy creando contenido, me encontrarás apoyando comunidades de tecnología o explorando nuevas herramientas digitales para mejorar productividad y automatización.
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
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.email}
                className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:-translate-y-0.5 transition-all shadow-md"
              >
                <Download className="h-4 w-4" />
                Descargar CV
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector("#contact")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                Contactarme
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
