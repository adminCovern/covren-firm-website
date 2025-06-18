"use client"

import HeroSection from "@/components/sections/hero-section"
import GlassCard from "@/components/ui/glass-card"
import GlowingButton from "@/components/ui/glowing-button"
import {
  Code,
  BrainCircuit,
  Scaling,
  Layers,
  FlaskConical,
  CheckCircle,
  Zap,
  BarChart3,
  Cpu,
  Eye,
  Mail,
  Database,
  GitBranch,
  Cloud,
  Settings2,
  Activity,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    title: "FULL-STACK CUSTOM DEVELOPMENT",
    description1: "End-to-end AI solutions tailored to your exact needs.",
    description2: "What competitors can't do, we specialize in.",
    icon: Code,
  },
  {
    title: "AI STRATEGY & CONSULTING",
    description1: "Transform your business with sovereign AI integration.",
    description2: "Strategic roadmaps for AI dominance.",
    icon: BrainCircuit,
  },
  {
    title: "ENTERPRISE AI SOLUTIONS",
    description1: "Scale your operations with custom AI systems.",
    description2: "Built for sovereignty, designed for dominance.",
    icon: Scaling,
  },
  {
    title: "SOVREN AI PLATFORM",
    description1: "Our flagship autonomous AI command system.",
    description2: "Digital chief of staff for entrepreneurs.",
    icon: Zap,
    featured: true,
    link: "/sovren-ai",
  },
  {
    title: "AI INTEGRATION SERVICES",
    description1: "Seamlessly integrate AI into existing infrastructure.",
    description2: "Legacy modernization through AI transformation.",
    icon: Layers,
  },
  {
    title: "RESEARCH & DEVELOPMENT",
    description1: "Pushing the boundaries of what's possible.",
    description2: "Custom AI models and architectures.",
    icon: FlaskConical,
  },
]

const differentiators = [
  {
    title: "Full-Stack Capability",
    description: "From hardware to human interface, we control the entire AI pipeline.",
  },
  {
    title: "True Custom Development",
    description: "Bespoke AI, not repurposed templates. Solutions as unique as your challenges.",
  },
  {
    title: "Sovereign Solutions",
    description: "Empowering you with complete ownership and control over your AI assets.",
  },
]

const techArsenalItems = [
  { name: "Next.js & React", icon: Code, category: "Frontend & Full-Stack" },
  { name: "Python", icon: Code, category: "Backend & AI/ML" },
  { name: "Three.js / WebGL", icon: Layers, category: "3D & Visualization" },
  { name: "TensorFlow & PyTorch", icon: BrainCircuit, category: "Machine Learning" },
  { name: "CUDA & HPC", icon: Cpu, category: "High-Performance Computing" },
  { name: "Kubernetes & Docker", icon: Cloud, category: "DevOps & Scalability" },
  { name: "PostgreSQL & Vector DBs", icon: Database, category: "Data Management" },
  { name: "Git & CI/CD", icon: GitBranch, category: "Version Control & Automation" },
]

const techSpecializations = [
  {
    name: "Natural Language Processing",
    icon: BrainCircuit,
    description: "Advanced understanding and generation of human language for complex interactions.",
  },
  {
    name: "Computer Vision & Image Analysis",
    icon: Eye,
    description: "Enabling systems to interpret, analyze, and act on visual information with precision.",
  },
  {
    name: "Predictive Analytics & Forecasting",
    icon: BarChart3,
    description: "Leveraging data to forecast future trends, behaviors, and outcomes with high accuracy.",
  },
  {
    name: "Autonomous AI Agents",
    icon: Zap,
    description: "Developing self-governing AI entities capable of complex decision-making and operations.",
  },
  {
    name: "Reinforcement Learning Systems",
    icon: Activity, // Changed icon
    description: "Training AI agents to master tasks and optimize strategies through interactive learning.",
  },
  {
    name: "Generative AI & Model Customization",
    icon: Settings2, // Changed icon
    description: "Creating novel content and fine-tuning foundational models for specific applications.",
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const cardListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
}

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <HeroSection />
      <motion.section
        id="services"
        className="py-20 md:py-32 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Our Unmatched AI Capabilities
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            We deliver end-to-end AI solutions, from strategic consulting to bespoke development and deployment.
          </p>
          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={cardListVariants}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={cardVariants}>
                <GlassCard className="flex h-full flex-col p-6 md:p-7" glow={service.featured}>
                  <div className="mb-4 flex items-center">
                    <service.icon
                      className={`mr-3 h-7 w-7 ${service.featured ? "text-primary animate-subtle-glow" : "text-primary/70"}`}
                    />
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="mb-2 text-sm text-muted-foreground">{service.description1}</p>
                  <p className="text-sm text-muted-foreground flex-grow">{service.description2}</p>{" "}
                  {/* Added flex-grow */}
                  {service.link && (
                    <Link href={service.link} className="text-primary hover:underline font-medium">
                      Learn More
                    </Link>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        id="about"
        className="py-20 md:py-32 bg-gradient-to-b from-background to-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            What Sets Covren Firm Apart
          </h2>
          <p className="mt-4 text-center text-lg italic text-muted-foreground md:text-xl max-w-2xl mx-auto">
            "While others offer templates, we build empires."
          </p>
          <motion.div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3" variants={cardListVariants}>
            {differentiators.map((item) => (
              <motion.div key={item.title} variants={cardVariants}>
                <GlassCard className="h-full p-8 text-center">
                  <CheckCircle className="mx-auto mb-4 h-10 w-10 text-primary animate-float" />
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Redesigned Technology Arsenal Section */}
      <motion.section
        id="tech"
        className="py-20 md:py-32 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="container">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Our Technological Prowess
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Leveraging a cutting-edge arsenal and deep specializations to engineer the future of AI.
            </p>
          </div>

          <motion.div className="mb-16 md:mb-20" variants={cardVariants}>
            <GlassCard className="p-8 md:p-10" glow={false}>
              <h3 className="mb-8 text-2xl font-semibold text-foreground text-center tracking-wide">
                Core Technology Arsenal
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8"
                variants={cardListVariants}
              >
                {techArsenalItems.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="group flex flex-col items-center text-center"
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="mb-3 p-4 bg-primary/5 border border-primary/20 rounded-xl group-hover:bg-primary/10 group-hover:shadow-neon-cyan-soft transition-all duration-300">
                      <tech.icon className="h-8 w-8 md:h-10 md:w-10 text-primary transition-colors duration-300" />
                    </div>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                      {tech.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{tech.category}</p>
                  </motion.div>
                ))}
              </motion.div>
            </GlassCard>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <h3 className="mb-10 md:mb-12 text-2xl font-semibold text-foreground text-center tracking-wide">
              Deep Specializations
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={cardListVariants}
            >
              {techSpecializations.map((spec) => (
                <motion.div key={spec.name} variants={cardVariants}>
                  <GlassCard className="p-6 md:p-7 h-full hover:shadow-neon-cyan-medium transition-shadow duration-300">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 flex-shrink-0 p-3 bg-primary/10 rounded-lg ring-1 ring-primary/20">
                        <spec.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{spec.name}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="py-20 md:py-32 bg-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <GlassCard className="max-w-3xl mx-auto p-8 md:p-12 text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              Ready to Build the Impossible?
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl mb-8">
              Partner with Covren Firm to transform your vision into sovereign digital reality. Let's discuss how our
              custom AI solutions can redefine your future.
            </p>
            <div className="flex justify-center">
              <GlowingButton size="xl" asChild>
                {" "}
                {/* Larger button */}
                <Link href="/contact?subject=ProjectInquiry" className="flex flex-col items-center gap-y-2 py-3">
                  <Zap className="h-6 w-6" /> <span>Discuss Your Project</span>
                </Link>
              </GlowingButton>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Or explore our{" "}
              <Link href="/sovren-ai" className="text-primary hover:underline font-medium">
                SovrenAI Platform
              </Link>{" "}
              for autonomous solutions.
            </p>
          </GlassCard>
        </div>
      </motion.section>
    </div>
  )
}
