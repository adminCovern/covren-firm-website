"use client"
import { motion } from "framer-motion"
import GlowingButton from "@/components/ui/glowing-button"
import GlassCard from "@/components/ui/glass-card"
import { Cpu, ShieldCheck, BarChartBig, Zap } from "lucide-react"
import Link from "next/link"
import Hero3DScene from "./hero-3d-scene"

const heroCards = [
  { title: "Custom AI Models", icon: Cpu, description: "Tailored intelligence for unique challenges." },
  { title: "Sovereign Systems", icon: ShieldCheck, description: "Full control over your AI infrastructure." },
  { title: "Data Supremacy", icon: BarChartBig, description: "Unlock insights that drive decisions." },
]

export default function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[850px] md:min-h-[900px] w-full flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      {/* The 3D scene replaces the static image background */}
      <Hero3DScene />
      
      <div className="animated-gradient-hero-bg absolute inset-0 z-[-2]" />
      
      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-4 flex-grow mt-[-40px] md:mt-[-60px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Pioneering Sovereign
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-text-glow-primary">
            Digital Intelligence
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="mt-6 max-w-4xl text-lg text-foreground/90 sm:text-xl md:text-2xl tracking-wider"
          style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.7)" }}
        >
          Full-Stack AI Development | Custom Solutions | Revolutionary Products
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
          className="mt-4 text-lg text-blue-400 font-semibold animate-pulse"
        >
          Trusted by forward-thinking organizations across 5 continents
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 items-center"
        >
          <GlowingButton size="xl" asChild className="transform hover:scale-105 transition-all duration-300">
            <Link href="#contact">
              <Zap className="mr-2.5 h-5 w-5" />
              Book Your AI Strategy Session
            </Link>
          </GlowingButton>
          <span className="text-sm text-gray-400">Limited slots available</span>
        </motion.div>
        
        <motion.div
          className="mt-12 md:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-20 w-full max-w-4xl xl:max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2, delayChildren: 1.1 } },
          }}
        >
          {heroCards.map((card) => (
            <motion.div
              key={card.title}
              className="w-full"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <GlassCard
                className="flex h-full flex-col items-center text-center p-5 md:p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
                interactive={true}
                glow={true}
              >
                <card.icon className="mb-3 h-8 w-8 md:h-9 md:w-9 text-primary" />
                <h3 className="text-md md:text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-1 text-xs md:text-sm text-muted-foreground">{card.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
