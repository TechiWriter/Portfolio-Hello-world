"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Instagram, ExternalLink } from "lucide-react"
import { WavyLine, HeartDoodle, StarDoodle } from "./doodles"

const userEmail = "vanesapaco.a@gmail.com"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with pre-filled subject and body
    const subject = `Nuevo mensaje de ${formData.name}`
    const body = `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`
    const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open default email client
    window.location.href = mailtoLink
    
    // Show confirmation message
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 paper-texture">
      <div className="mx-auto max-w-4xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Ponerse en <span className="font-serif italic text-primary">Contacto</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            ¿Tienes un proyecto en mente? Creemos algo asombroso juntos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Behance
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border scrapbook-shadow">
              {submitted ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4"
                  >
                    <Send className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </motion.div>
                  <p className="text-foreground font-medium">¡Mensaje enviado!</p>
                  <p className="text-sm text-muted-foreground mt-1">Abriendo tu cliente de correo...</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="tu@correo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!formData.name || !formData.email || !formData.message}
                  >
                    <Send className="h-4 w-4" />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative doodles */}
      <div className="absolute bottom-12 left-8 text-primary/15 hidden md:block">
        <HeartDoodle className="h-10 w-10" />
      </div>
      <div className="absolute top-20 right-12 text-accent/20 hidden md:block">
        <StarDoodle className="h-8 w-8" />
      </div>
    </section>
  )
}
