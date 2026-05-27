"use client"

import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { CreatorDashboardSection } from "@/components/portfolio/creator-dashboard-section"
import { VideosSection } from "@/components/portfolio/videos-section"
import { BlogSection } from "@/components/portfolio/blog-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CreatorDashboardSection />
      <VideosSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
