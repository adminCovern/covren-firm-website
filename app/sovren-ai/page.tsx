"use client"

import { motion } from "framer-motion"
import Image from "next/image" // Keep for other images if any
import Link from "next/link"
import GlassCard from "@/components/ui/glass-card"
import GlowingButton from "@/components/ui/glowing-button"
import { Zap, ShieldCheck, BrainCircuit, BarChart3, Layers, Check, Settings, SlidersHorizontal } from "lucide-react"

const platformFeatures = [
  {
    icon: Zap,
    title: "Autonomous Operations",
    description: "Automate complex workflows and decision-making processes with self-learning AI agents.",
  },
  {
    icon: BrainCircuit,
    title: "Adaptive Intelligence",
    description: "Continuously learns and adapts to new data and changing environments for optimal performance.",
  },
  {
    icon: ShieldCheck,
    title: "Sovereign Control",
    description: "Full ownership and control over your AI models, data, and operational parameters.",
  },
  {
    icon: BarChart3,
    title: "Predictive Supremacy",
    description:
      "Leverage advanced analytics to forecast trends and identify opportunities with unparalleled accuracy.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Integrates with your existing infrastructure and data sources for a unified operational view.",
  },
  {
    icon: Settings,
    title: "Customizable Core",
    description: "Tailor the platform's core logic and AI models to your specific industry and business needs.",
  },
]

const platformBenefits = [
  "Unlock unprecedented operational efficiency.",
  "Gain a decisive strategic advantage in your market.",
  "Ensure data sovereignty and security.",
  "Drive innovation with a continuously evolving AI.",
  "Transform insights into actionable intelligence.",
]

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const cardListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "circOut" } },
}

export default function SovrenAiPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero Section for SovrenAI */}
      <motion.section
        className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoframe_12560-ZNSQZfpZm51OGOk1iUWBfrhlc5OVzB.png"
            alt="SovrenAI Background"
            layout="fill"
            objectFit="cover"
            className="opacity-10 blur-sm animate-image-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            className="inline-block p-3 mb-6 bg-primary/10 rounded-full ring-2 ring-primary/30"
            variants={cardVariants}
          >
            <Zap className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl animate-text-glow-primary"
            variants={cardVariants}
          >
            SOVREN AI PLATFORM
          </motion.h1>
          <motion.p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl" variants={cardVariants}>
            Your Autonomous Digital Chief of Staff.
            <br />
            Command, Control, and Conquer with Sovereign Intelligence.
          </motion.p>
          <motion.div className="mt-10" variants={cardVariants}>
            <GlowingButton size="lg" asChild>
              <Link href="#contact-briefing">Request Private Briefing</Link>
            </GlowingButton>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        id="features"
        className="py-16 md:py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Platform Capabilities</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
              Engineered for unparalleled performance and adaptability.
            </p>
          </div>
          <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" variants={cardListVariants}>
            {platformFeatures.map((feature) => (
              <motion.div key={feature.title} variants={cardVariants}>
                <GlassCard className="flex flex-col items-start p-6 h-full hover:shadow-neon-cyan-medium transition-shadow duration-300">
                  <div className="p-3 mb-4 bg-primary/10 rounded-lg ring-1 ring-primary/20">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground flex-grow">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-16 md:py-24 bg-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={cardVariants}>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                Transform Your Enterprise with SovrenAI
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                SovrenAI is not just a tool; it's a strategic partner that empowers your organization to achieve new
                heights of productivity, innovation, and market leadership.
              </p>
              <ul className="space-y-3">
                {platformBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-muted-foreground"
                    custom={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={(i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 + 0.3, ease: "easeOut" } })}
                  >
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-xl shadow-2xl border-2 border-primary/30 animate-float"
              variants={cardVariants}
            >
              <video
                src="/videos/sovren-ai-enterprise-transform.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                aria-label="SovrenAI enterprise transformation video"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        id="contact-briefing"
        className="py-20 md:py-32 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container text-center max-w-3xl mx-auto">
          <SlidersHorizontal className="h-12 w-12 text-primary mx-auto mb-6 animate-float" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Unlock Sovereign Intelligence.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Discover how the SovrenAI Platform can revolutionize your operations. Schedule a confidential briefing with
            our strategists to explore a tailored deployment.
          </p>
          <GlowingButton size="lg" className="mt-10" asChild>
            <Link href="/contact?subject=SovrenAI+Briefing+Request">Schedule Strategic Briefing</Link>
          </GlowingButton>
        </div>
      </motion.section>
    </div>
  )
}
