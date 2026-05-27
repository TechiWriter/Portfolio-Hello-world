"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Package, ExternalLink, Sparkles, Youtube, Award, Zap, Workflow, Video, Palette } from "lucide-react"
import { WavyLine, StarDoodle } from "./doodles"

const rewards = [
  {
    name: "Platzi",
    benefit: "Platzi Anual",
    link: "https://platzi.com/r/anipark",
  },
  {
    name: "Claude for Marketers",
    benefit: "Free",
    link: "https://www.claudemarketers.com/?ref=7c2c3ffe",
  },
  {
    name: "Kling AI",
    benefit: "+Bonificación",
    link: "https://youtube.com",
  },
  {
    name: "V0",
    benefit: "+5 usd mensual",
    link: "https://v0.app/ref/IQEEJR",
  },
]

const badges = [
  {
    name: "Adobe Content Creator",
    link: "https://www.credly.com/badges/94056893-796a-4910-83d8-246fd73faad3",
  },
  {
    name: "Adobe Specialist",
    link: "https://www.credly.com/badges/f2692ddd-2143-4a1a-b354-b85f55789ed3",
  },
  {
    name: "AI Skills Fest",
    link: "https://youtube.com",
  },
]

const dominantAreas = [
  {
    name: "IA Tools",
    icon: Zap,
  },
  {
    name: "Gestión",
    icon: Workflow,
  },
  {
    name: "Video",
    icon: Video,
  },
  {
    name: "Diseño",
    icon: Palette,
  },
]

const PhotoCard = ({ id, frontCard, onCardClick }) => (
  <motion.div
    initial={{ opacity: 0, x: id === 1 ? -200 : 200, rotate: id === 1 ? 0 : 25 }}
    animate={{ opacity: 1, x: id === 1 ? -70 : 70, rotate: id === 1 ? 3 : 30 }}
    transition={{ 
      duration: 1.2, 
      delay: id === 1 ? 0.2 : 0.4,
      type: "spring",
      stiffness: 50,
      damping: 20
    }}
    onClick={() => onCardClick(id)}
    className="absolute flex-shrink-0 cursor-pointer"
    style={{
      zIndex: frontCard === id ? 10 : 5,
    }}
  >
    <motion.div
      animate={{ scale: frontCard === id ? 1 : 0.95 }}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.3 }}
      className="tape bg-white dark:bg-slate-900 p-6 pb-4 scrapbook-shadow rounded-sm w-72"
    >
      {/* Front - Creator Info */}
      <div className="w-full">
        <div className="w-full h-80 bg-gradient-to-br from-emerald-200 via-emerald-100 to-teal-200 dark:from-emerald-900 dark:to-teal-800 rounded-sm overflow-hidden flex items-center justify-center">
          <img 
            src={id === 1 ? "/adobe-academy.jpg" : "/claude-marketing-101.jpg"}
            alt={id === 1 ? "Adobe Academy Certification" : "Claude Marketing 101"}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative h-16 flex flex-col justify-center items-center">
          <p className="text-center font-serif italic text-2xl font-bold text-foreground">
            {id === 1 ? "Adobe Certified" : "Claude Marketing"}
          </p>
        </div>
      </div>
    </motion.div>

    {/* Decorative stars */}
    <div className="absolute -top-3 -right-3 text-primary/40">
      <StarDoodle className="h-6 w-6" />
    </div>
    <div className="absolute -bottom-1 left-3 text-primary/30">
      <Sparkles className="h-4 w-4" />
    </div>
  </motion.div>
)

export function CreatorDashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [frontCard, setFrontCard] = useState(1)

  const handleCardClick = (cardId) => {
    setFrontCard(cardId === 1 ? 2 : 1)
  }

  return (
    <section id="creator-dashboard" className="relative py-24 md:py-32">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Skill Deck <span className="font-serif italic text-primary">Creator</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Construyo contenido híbrido que combina herramientas tradicionales con IAs Generativas. Si eres creador y learnaholic como yo, accede a descuentos y cursos de plataformas que he testeado rigurosamente.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch lg:items-center relative">
          {/* LEFT - Condensed Cards */}
          <div className="w-full lg:w-2/5 space-y-4">
            {/* Badges Oficiales - Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="creator-rewards-card rounded-2xl border-2 border-primary/30 backdrop-blur-md p-4 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.03) 100%)",
                boxShadow: "0 8px 32px rgba(168, 85, 247, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.15)",
              }}
            >
              {/* Decorative tape */}
              <div className="absolute -top-1 right-6 w-6 h-10 bg-gradient-to-b from-primary/20 to-primary/10 transform -rotate-12 rounded-sm opacity-50" />

              <div className="relative z-10">
                <div className="flex items-center gap-1.5 mb-2">
                  <Award className="h-3.5 w-3.5 text-primary" />
                  <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider">Badges Oficiales</p>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Acreditados por las empresas de Adobe, Crehana y Microsoft.</p>

                {/* Badges Grid - 3 Columns */}
                <div className="grid grid-cols-3 gap-2">
                  {badges.map((badge) => (
                    <motion.a
                      key={badge.name}
                      href={badge.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -1 }}
                      className="flex flex-col items-center justify-center p-2 rounded-lg bg-secondary/30 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 transition-all group text-center"
                    >
                      <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors mb-1">
                        <Award className="h-3 w-3 text-primary" />
                      </div>
                      <p className="font-semibold text-foreground text-xs leading-tight">{badge.name}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Áreas Dominantes - Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="creator-rewards-card rounded-2xl border-2 border-primary/30 backdrop-blur-md p-4 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.03) 100%)",
                boxShadow: "0 8px 32px rgba(168, 85, 247, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.15)",
              }}
            >
              {/* Decorative tape */}
              <div className="absolute -top-1 right-6 w-6 h-10 bg-gradient-to-b from-primary/20 to-primary/10 transform -rotate-12 rounded-sm opacity-50" />

              <div className="relative z-10">
                <div className="flex items-center gap-1.5 mb-2">
                  <Zap className="h-3.5 w-3.5 text-primary" />
                  <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider">Áreas Dominantes</p>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Para la gestión y creación de contenidos aplico diferentes herramientas que aplican estas áreas.</p>

                {/* Areas Grid - 4 Columns */}
                <div className="grid grid-cols-4 gap-3">
                  {dominantAreas.map((area) => {
                    const IconComponent = area.icon
                    return (
                      <div
                        key={area.name}
                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/30 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 transition-all group text-center"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors mb-2">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <p className="font-semibold text-foreground text-xs leading-tight">{area.name}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Creator Rewards - Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="creator-rewards-card rounded-2xl border-2 border-primary/30 backdrop-blur-md p-4 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.03) 100%)",
                boxShadow: "0 8px 32px rgba(168, 85, 247, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.15)",
              }}
            >
              {/* Decorative tape */}
              <div className="absolute -top-1 right-6 w-6 h-10 bg-gradient-to-b from-primary/20 to-primary/10 transform -rotate-12 rounded-sm opacity-50" />

              <div className="relative z-10">
                <div className="flex items-center gap-1.5 mb-2">
                  <Package className="h-3.5 w-3.5 text-primary" />
                  <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider">Creator Rewards</p>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Ingresa a estos links referidos y accede a recompensas especiales</p>

                {/* Rewards Grid - 3 Columns */}
                <div className="grid grid-cols-3 gap-2">
                  {rewards.map((reward) => (
                    <motion.a
                      key={reward.name}
                      href={reward.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -1 }}
                      className="flex flex-col items-center justify-center p-2 rounded-lg bg-secondary/30 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 transition-all group text-center"
                    >
                      <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors mb-1">
                        <Youtube className="h-3 w-3 text-primary" />
                      </div>
                      <p className="font-semibold text-foreground text-xs leading-tight">{reward.name}</p>
                      <span className="px-1.5 py-0.5 rounded-full text-xs font-bold text-primary bg-primary/15 border border-primary/30 mt-1">
                        {reward.benefit}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - Photo Cards (Overlapped) */}
          <div className="w-full lg:w-3/5 flex justify-center relative h-96">
            <PhotoCard id={1} frontCard={frontCard} onCardClick={handleCardClick} />
            <PhotoCard id={2} frontCard={frontCard} onCardClick={handleCardClick} />
          </div>
        </div>
      </div>
    </section>
  )
}
