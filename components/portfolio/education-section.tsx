"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap } from "lucide-react"
import { educationData } from "@/lib/portfolio-data"
import { WavyLine, CircleDoodle } from "./doodles"

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Mi <span className="font-serif italic text-primary">Educación</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10 mt-6" />

              {/* Spacer for desktop layout */}
              <div className="hidden md:block flex-1" />

              {/* Card */}
              <div className="ml-14 md:ml-0 flex-1">
                <div className="bg-card p-6 rounded-2xl border border-border scrapbook-shadow hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground font-mono">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.degree}</h3>
                  <p className="text-sm font-medium text-primary mt-1">{item.school}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute -bottom-4 right-8 text-primary/20 hidden md:block">
          <CircleDoodle className="h-12 w-12" />
        </div>
      </div>
    </section>
  )
}
