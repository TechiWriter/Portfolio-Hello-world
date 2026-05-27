"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Download } from "lucide-react"
import { videosData, type Video } from "@/lib/portfolio-data"
import { WavyLine } from "./doodles"

function VideoCard({ video, index }: { video: Video; index: number }) {
  const downloadInfographic = () => {
    // Create a canvas to generate a PNG image
    const canvas = document.createElement("canvas")
    canvas.width = 1200
    canvas.height = 675
    const ctx = canvas.getContext("2d")
    
    if (ctx) {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#f3e8ff")
      gradient.addColorStop(1, "#e9d5ff")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw border
      ctx.strokeStyle = video.color
      ctx.lineWidth = 8
      ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40)
      
      // Draw title
      ctx.font = "bold 48px sans-serif"
      ctx.fillStyle = video.color
      ctx.textAlign = "center"
      ctx.fillText(video.title, canvas.width / 2, 150)
      
      // Draw category
      ctx.font = "36px sans-serif"
      ctx.fillStyle = video.color + "88"
      ctx.fillText(video.category, canvas.width / 2, 220)
      
      // Draw description
      ctx.font = "24px sans-serif"
      ctx.fillStyle = "#666"
      ctx.textAlign = "center"
      const words = video.description.split(" ")
      let line = ""
      let y = 320
      
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " "
        const metrics = ctx.measureText(testLine)
        if (metrics.width > canvas.width - 100) {
          ctx.fillText(line, canvas.width / 2, y)
          line = words[i] + " "
          y += 40
        } else {
          line = testLine
        }
      }
      ctx.fillText(line, canvas.width / 2, y)
    }
    
    // Download the canvas as PNG
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob)
        const element = document.createElement("a")
        element.setAttribute("href", url)
        element.setAttribute("download", `${video.title.replace(/\s+/g, "-").toLowerCase()}-infographic.png`)
        element.style.display = "none"
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
        URL.revokeObjectURL(url)
      }
    }, "image/png")
  }

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
          {/* Header bar with scanning indicators */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary/10 border-b border-primary/20">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs font-mono text-primary font-bold">
                #{String(video.id).padStart(3, "0")}
              </span>
            </div>
            <span className="text-xs font-mono text-muted-foreground">{video.category.toUpperCase()}</span>
          </div>

          {/* Thumbnail area */}
          <div className="relative overflow-hidden h-40 bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center p-4">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover rounded-lg opacity-60 group-hover:opacity-75 transition-opacity"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-3 flex-1">
            <div>
              <h3 className="text-base font-bold text-foreground line-clamp-2">
                {video.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-3">
              {video.description}
            </p>

            {/* Action buttons */}
            <div className="flex gap-2 pt-2 mt-auto">
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-primary-foreground transition-all hover:shadow-md active:scale-95"
                style={{ backgroundColor: video.color }}
              >
                <Play className="h-3.5 w-3.5" />
                Ver
              </a>
              <button
                onClick={downloadInfographic}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border border-border text-foreground hover:bg-secondary/50 transition-colors active:scale-95"
              >
                <Download className="h-3.5 w-3.5" />
                Infografía
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function VideosSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="videos" className="relative py-24 md:py-32">
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
            My Latest <span className="font-serif italic text-primary">Videos</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Sección in progress los iré subiendo muy pronto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosData.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
