"use client"

import { motion } from "framer-motion"

export function StarDoodle({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <path
        d="M16 2L19.5 12.5L30 16L19.5 19.5L16 30L12.5 19.5L2 16L12.5 12.5L16 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </motion.svg>
  )
}

export function SpiralDoodle({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8 }}
    >
      <path
        d="M20 20C20 17 22 15 25 15C28 15 30 17 30 20C30 25 26 29 20 29C13 29 8 24 8 17C8 9 14 3 22 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </motion.svg>
  )
}

export function HeartDoodle({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
    >
      <path
        d="M14 24S3 17 3 10C3 6 6 3 10 3C12.5 3 14 5 14 5C14 5 15.5 3 18 3C22 3 25 6 25 10C25 17 14 24 14 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </motion.svg>
  )
}

export function ArrowDoodle({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      width="60"
      height="30"
      viewBox="0 0 60 30"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.path
        d="M5 25C15 25 30 20 40 12C42 10 45 7 50 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2 }}
      />
      <path
        d="M45 3L52 5L48 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </motion.svg>
  )
}

export function WavyLine({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="20"
      viewBox="0 0 120 20"
      fill="none"
    >
      <path
        d="M0 10C10 0 20 20 30 10C40 0 50 20 60 10C70 0 80 20 90 10C100 0 110 20 120 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function CircleDoodle({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <circle
        cx="18"
        cy="18"
        r="14"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
        fill="currentColor"
        fillOpacity="0.08"
      />
    </motion.svg>
  )
}
