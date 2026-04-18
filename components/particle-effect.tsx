"use client"

import { useEffect } from "react"

export function ParticleEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only create particles in the about section
      const aboutSection = document.querySelector("#about")
      if (!aboutSection) return

      const rect = aboutSection.getBoundingClientRect()
      const isInAboutSection =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom

      if (!isInAboutSection) return

      // Create a new particle
      const particle = document.createElement("div")
      particle.className = "star-particle"
      particle.style.left = e.clientX + "px"
      particle.style.top = e.clientY + "px"
      particle.style.setProperty("--tx", Math.random() * 100 - 50 + "px")

      document.body.appendChild(particle)

      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove()
      }, 900)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return null
}
