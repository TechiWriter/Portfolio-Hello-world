"use client"

import { motion } from "framer-motion"
import { Heart, Instagram, ExternalLink, Mail } from "lucide-react"
import { StarDoodle } from "./doodles"

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Signature */}
          <div className="flex items-center gap-3">
            <StarDoodle className="h-5 w-5 text-primary/50" />
            <p className="font-serif text-xl text-foreground">
              Sígueme en mis redes sociales
            </p>
          </div>

          {/* Social icons and Contact button */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Behance"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="/links"
              className="px-4 py-2 rounded-xl bg-accent text-accent-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Contactarme
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-border flex items-center justify-center">
          <p className="text-xs text-muted-foreground">
            Diseñado con{" "}
            <Heart className="inline h-3 w-3 text-primary" />{" "}
            y un poco de vibecoding :3
          </p>
        </div>
      </div>
    </footer>
  )
}
