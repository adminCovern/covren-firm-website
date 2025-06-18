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
  Shield,
  Globe,
  Clock,
  Award,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    title: "FULL-STACK CUSTOM DEVELOPMENT",
    description1: "End-to-end AI solutions tailored to your exact needs.",
    description2: "100% custom code. Zero templates. Pure innovation.",
    icon: Code,
  },
  {
    title: "AI STRATEGY & CONSULTING",
    description1: "Transform your business with sovereign AI integration.",
    description2: "Strategic roadmaps that guarantee market leadership.",
    icon: BrainCircuit,
  },
  {
    title: "ENTERPRISE AI SOLUTIONS",
    description1: "Scale your operations with custom AI systems.",
    description2: "Built for sovereignty, engineered for dominance.",
    icon: Scaling,
  },
  {
    title: "SOVREN AI PLATFORM",
    description1: "Our flagship autonomous AI command system.",
    description2: "Your digital chief of staff. 24/7. Unstoppable.",
    icon: Zap,
    featured: true,
    link: "/sovren-ai",
  },
  {
    title: "AI INTEGRATION SERVICES",
    description1: "Seamlessly integrate AI into existing infrastructure.",
    description2: "Legacy modernization that pays for itself.",
    icon: Layers,
  },
  {
    title: "RESEARCH & DEVELOPMENT",
    description1: "Pushing the boundaries of what's possible.",
    description2: "Tomorrow's AI, delivered today.",
    icon: FlaskConical,
  },
]

const differentiators = [
  {
    title: "Full-Stack Capability",
    description: "From bare metal to user interface, we control the entire AI pipeline. No dependencies. No limitations. No excuses.",
  },
  {
    title: "True Custom Development",
    description: "Bespoke AI, not repurposed templates. Every algorithm, every model, every line of code is crafted specifically for your unique challenges.",
  },
  {
    title: "Sovereign Solutions",
    description: "Complete ownership and control. Deploy on your infrastructure, modify without restrictions, evolve without us. True digital independence.",
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
    icon: Activity,
    description: "Training AI agents to master tasks and optimize strategies through interactive learning.",
  },
  {
    name: "Generative AI & Model Customization",
    icon: Settings2,
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
                <GlassCard className="flex h-full flex-col p-6 md:p-7 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300" glow={service.featured}>
                  <div className="mb-4 flex items-center">
                    <service.icon
                      className={`mr-3 h-7 w-7 ${service.featured ? "text-primary animate-subtle-glow" : "text-primary/70"}`}
                    />
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="mb-2 text-sm text-muted-foreground">{service.description1}</p>
                  <p className="text-sm text-muted-foreground flex-grow">{service.description2}</p>
                  {service.link && (
                    <Link href={service.link} className="text-primary hover:underline font-medium mt-4">
                      Learn More →
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
                <GlassCard className="h-full p-8 text-center hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                  <CheckCircle className="mx-auto mb-4 h-10 w-10 text-primary animate-float" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* NEW: The Covren Impact Section */}
      <motion.section
        className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            The Covren Impact
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Our clients don't just implement AI - they dominate with it.
          </p>
          
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={cardListVariants}
          >
            <motion.div variants={cardVariants}>
              <GlassCard className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">340%</div>
                <div className="text-sm text-muted-foreground">Avg Productivity Increase</div>
              </GlassCard>
            </motion.div>
            <motion.div variants={cardVariants}>
              <GlassCard className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Process Automation</div>
              </GlassCard>
            </motion.div>
            <motion.div variants={cardVariants}>
              <GlassCard className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">6 mo</div>
                <div className="text-sm text-muted-foreground">Average ROI Timeline</div>
              </GlassCard>
            </motion.div>
            <motion.div variants={cardVariants}>
              <GlassCard className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </GlassCard>
            </motion.div>
          </motion.div>
          
          <p className="mt-12 text-center text-xl text-muted-foreground italic max-w-3xl mx-auto">
            "Every line of code we write is an investment in your competitive advantage."
          </p>
        </div>
      </motion.section>

      {/* NEW: AI Sovereignty Manifesto */}
      <motion.section
        className="py-20 md:py-32 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl mb-12">
            The AI Sovereignty Manifesto
          </h2>
          <GlassCard className="max-w-4xl mx-auto p-8 md:p-12" glow={true}>
            <p className="text-2xl text-foreground leading-relaxed mb-8 font-light text-center">
              "In an age where your data is currency and your AI is your competitive edge, 
              sovereignty isn't optional—it's survival."
            </p>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <span className="text-primary text-2xl">▸</span>
                <p><span className="text-primary font-semibold">We believe</span> every organization deserves complete ownership of their AI destiny.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary text-2xl">▸</span>
                <p><span className="text-primary font-semibold">We reject</span> vendor lock-in, black-box solutions, and data dependencies.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary text-2xl">▸</span>
                <p><span className="text-primary font-semibold">We deliver</span> AI systems you own, control, and can evolve independently.</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </motion.section>

      {/* Technology Arsenal Section - Updated */}
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
              Our AI-Powered Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Leveraging cutting-edge AI and deep specializations to transform how organizations harness the power of intelligent technology.
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

      {/* NEW: Comparison Section */}
      <motion.section
        className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl mb-4">
            Why Organizations Choose Covren
          </h2>
          <p className="text-center text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto mb-16">
            While others offer templates, we build empires.
          </p>
          
          <GlassCard className="max-w-5xl mx-auto p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                  <CheckCircle className="h-8 w-8" />
                  Covren Firm
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">100% Custom Development</span>
                      <p className="text-muted-foreground text-sm mt-1">Bespoke AI, built from scratch for your needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Complete Ownership</span>
                      <p className="text-muted-foreground text-sm mt-1">You own all code, models, data, and IP</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Sovereign Infrastructure</span>
                      <p className="text-muted-foreground text-sm mt-1">Deploy on your servers, maintain full control</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Results Guaranteed</span>
                      <p className="text-muted-foreground text-sm mt-1">100% money-back if we don't deliver</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">Elite In-House Team</span>
                      <p className="text-muted-foreground text-sm mt-1">Not outsourced, not offshored, all experts</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="opacity-50">
                <h3 className="text-2xl font-bold text-gray-500 mb-8 flex items-center gap-3">
                  <span className="text-3xl">✗</span>
                  Typical Consultancy
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                    <div>
                      <span className="font-semibold">Template Solutions</span>
                      <p className="text-gray-600 text-sm mt-1">One-size-fits-all approaches</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                    <div>
                      <span className="font-semibold">Licensed Access Only</span>
                      <p className="text-gray-600 text-sm mt-1">Pay forever, own nothing</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                    <div>
                      <span className="font-semibold">Vendor Lock-In</span>
                      <p className="text-gray-600 text-sm mt-1">Trapped in their ecosystem</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                    <div>
                      <span className="font-semibold">Best Effort Only</span>
                      <p className="text-gray-600 text-sm mt-1">No guarantees, just invoices</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                    <div>
                      <span className="font-semibold">Outsourced Development</span>
                      <p className="text-gray-600 text-sm mt-1">Lowest bidder delivers</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </motion.section>

      {/* NEW: AI Readiness Assessment */}
      <motion.section
        className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl mb-6">
            Is Your Organization AI-Ready?
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto mb-10">
            Take our 2-minute assessment and discover your AI transformation potential
          </p>
          <GlowingButton size="xl" asChild className="transform hover:scale-105 transition-all duration-300">
            <Link href="/contact?subject=AIAssessment">
              <BarChart3 className="mr-2 h-5 w-5" />
              Start Free AI Assessment
            </Link>
          </GlowingButton>
          <p className="mt-6 text-sm text-muted-foreground">
            Join 500+ leaders who've discovered their AI opportunity
          </p>
        </div>
      </motion.section>

      {/* NEW: Trust Indicators Bar */}
      <motion.section
        className="py-12 bg-black border-y border-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 text-foreground"
            variants={cardListVariants}
          >
            <motion.div variants={cardVariants} className="flex items-center gap-3 hover:text-primary transition-colors">
              <Shield className="h-8 w-8" />
              <div>
                <div className="font-semibold">SOC2 Compliant</div>
                <div className="text-xs text-muted-foreground">Enterprise Security</div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="flex items-center gap-3 hover:text-primary transition-colors">
              <Award className="h-8 w-8" />
              <div>
                <div className="font-semibold">100% IP Protection</div>
                <div className="text-xs text-muted-foreground">You Own Everything</div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="flex items-center gap-3 hover:text-primary transition-colors">
              <Globe className="h-8 w-8" />
              <div>
                <div className="font-semibold">Global Delivery</div>
                <div className="text-xs text-muted-foreground">5 Continents Served</div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="flex items-center gap-3 hover:text-primary transition-colors">
              <Clock className="h-8 w-8" />
              <div>
                <div className="font-semibold">24/7 Support</div>
                <div className="text-xs text-muted-foreground">Always Available</div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="flex items-center gap-3 hover:text-primary transition-colors">
              <CheckCircle className="h-8 w-8" />
              <div>
                <div className="font-semibold">Results Guaranteed</div>
                <div className="text-xs text-muted-foreground">Or Money Back</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Updated Contact Section */}
      <motion.section
        id="contact"
        className="py-20 md:py-32 bg-gradient-to-t from-blue-900/20 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <GlassCard className="max-w-3xl mx-auto p-8 md:p-12 text-center" glow={true}>
            <Mail className="h-12 w-12 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Build the Impossible?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl mb-8">
              Partner with Covren Firm to transform your vision into sovereign digital reality. 
              Let's discuss how our custom AI solutions can redefine your future.
            </p>
            
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-8 inline-block">
              <p className="text-red-400 font-semibold">
                ⚡ Limited Availability: Currently accepting 3 new partnerships for Q2 2025
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Average project waitlist: 4-6 weeks
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GlowingButton size="xl" asChild className="transform hover:scale-105 transition-all duration-300">
                <Link href="/contact?subject=ProjectInquiry" className="flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  <span>Book Your AI Strategy Session</span>
                </Link>
              </GlowingButton>
              <span className="text-muted-foreground">or</span>
              <Link href="/sovren-ai" className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors">
                Explore SovrenAI Platform →
              </Link>
            </div>
          </GlassCard>
        </div>
      </motion.section>

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 bg-card/90 backdrop-blur-sm text-foreground p-4 rounded-lg shadow-2xl z-50 border border-primary/20 hidden md:block">
        <div className="text-sm font-semibold flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <div>
            <div>SOC2 Compliant</div>
            <div className="text-xs text-muted-foreground">Your AI. Your Data. Your Control.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
