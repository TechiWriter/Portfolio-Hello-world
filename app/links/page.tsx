'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram, Mail, ExternalLink, Linkedin, Facebook } from 'lucide-react'

export default function LinksPage() {
  const links = [
    {
      title: 'Templates',
      shortTitle: 'Notion',
      description: 'Plantillas para organizar tu vida',
      href: '#',
    },
    {
      title: 'Automatiza',
      shortTitle: 'Notion',
      description: 'Aprende a automatizar procesos',
      href: '#',
    },
    {
      title: 'Blogs',
      shortTitle: '',
      description: 'Mis últimos artículos y tips',
      href: '#',
    },
    {
      title: 'Afiliados',
      shortTitle: 'Descuentos',
      description: 'Descuentos en mis herramientas favoritas',
      href: '#',
    },
  ]

  const socials = [
    { icon: ExternalLink, href: '#', label: 'Website' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-25 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden flex flex-col">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-5" />
        <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-5" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-5" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-8 md:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md space-y-8"
        >
          {/* Profile Section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4">
            <div className="relative">
              {/* Outer ring animation */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-300/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ width: '140px', height: '140px', left: '-4px', top: '-4px' }}
              />

              {/* Profile image circle */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/80 dark:border-slate-800/80 shadow-xl">
                <Image
                  src="/profile-pic.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Minimalist star doodles using SVG */}
              <motion.svg
                className="absolute -top-2 -right-2 w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                animate={{ rotate: [0, 15, -15, 0], y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ color: '#a855f7' }}
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26Z" />
              </motion.svg>

              <motion.svg
                className="absolute -bottom-1 -left-3 w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                style={{ color: '#ec4899' }}
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26Z" />
              </motion.svg>

              <motion.svg
                className="absolute top-1/3 -right-4 w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                animate={{ rotate: [0, 25, -25, 0], y: [0, 6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity }}
                style={{ color: '#c084fc' }}
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26Z" />
              </motion.svg>
            </div>

            {/* Name and tagline */}
            <div className="text-center space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Vanesa <span className="font-caveat text-purple-600 dark:text-purple-400 text-4xl md:text-5xl not-italic">Paco</span>
              </h1>
              <div className="space-y-2">
                <p className="text-base text-slate-900 dark:text-white font-semibold">Content Creator</p>
                <svg className="mx-auto w-32 h-1" viewBox="0 0 128 8" preserveAspectRatio="none">
                  <path
                    d="M 0 4 Q 32 0 64 4 T 128 4"
                    stroke="#a855f7"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                Colaboraciones, ideas o networking ✨ Encuentra aquí todas las formas de conectar conmigo.
              </p>
            </div>
          </motion.div>

          {/* Links Grid */}
          <motion.div variants={itemVariants} className="flex flex-col items-center space-y-3 max-w-xs mx-auto">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:max-w-sm p-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-700 text-slate-900 dark:text-white font-semibold shadow-sm hover:shadow-md hover:border-purple-300 dark:hover:border-purple-600 transition-all"
              >
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {link.title}
                    {link.shortTitle && <span className="text-purple-600 dark:text-purple-400"> {link.shortTitle}</span>}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Social Section at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 px-4 py-8 flex flex-col items-center gap-4 border-t border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm"
      >
        {/* Social text with star icon */}
        <div className="flex items-center justify-center gap-2">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ color: '#a855f7' }}
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26Z" />
          </svg>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic">
            Sígueme en mis redes sociales
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-2 md:gap-3 flex-wrap max-w-full">
          {socials.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={index}
                href={social.href}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl border-2 border-purple-300 dark:border-purple-700 bg-white/80 dark:bg-slate-900/80 text-purple-600 dark:text-purple-400 hover:border-purple-400 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md flex-shrink-0"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </main>
  )
}

