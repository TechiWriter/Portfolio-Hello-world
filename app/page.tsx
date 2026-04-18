"use client"

import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { SkillDeckSection } from "@/components/portfolio/skill-deck-section"
import { ToolsSection } from "@/components/portfolio/tools-section"
import { PokedexSection } from "@/components/portfolio/pokedex-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <SkillDeckSection />
      <ToolsSection />
      <PokedexSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
