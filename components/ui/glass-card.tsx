"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react"

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  glow?: boolean // For special glow effect
  interactive?: boolean // For hover animations
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className, glow = false, interactive = true, ...props }) => {
  const cardVariants = interactive
    ? {
        rest: { scale: 1, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" },
        hover: {
          scale: 1.03,
          boxShadow: glow
            ? "0 0 25px hsl(var(--primary)), 0 0 50px hsl(var(--primary) / 0.7), inset 0 0 15px hsl(var(--primary) / 0.5)"
            : "0 0 20px hsl(var(--primary) / 0.4), 0 0 35px hsl(var(--primary) / 0.2)",
          transition: { duration: 0.3, ease: "circOut" },
        },
      }
    : {}

  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover={interactive ? "hover" : undefined}
      className={cn(
        "rounded-xl border border-glass-edge bg-glass-bg p-6 shadow-xl backdrop-blur-xl",
        "transition-shadow duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
