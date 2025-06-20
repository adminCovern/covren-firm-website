'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from "next/link"
import Image from "next/image"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, Users, ChevronDown, Brain, Lock, Rocket, Globe, Award, TrendingUp, CheckCircle2, XCircle, Star, Check, X, ExternalLink, Download, FileText, ChevronRight, Server, Cpu, HardDrive, Activity, AlertCircle, Code, FileCode, Database, Cloud } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import HeroSection from '@/components/sections/hero-section'
import GlassCard from "@/components/ui/glass-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// Define section refs type
type SectionRefs = {
  [key: string]: React.RefObject<HTMLElement>
}

// Force dynamic rendering to avoid window is not defined error
export const dynamic = 'force-dynamic'

// Infrastructure metric component
function InfrastructureMetric({ label, value, suffix, icon, color }: {
  label: string
  value: string
  suffix: string
  icon: React.ReactNode
  color: 'purple' | 'blue' | 'cyan' | 'green'
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue = parseFloat(value)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        current = numericValue
        clearInterval(timer)
      }
      setDisplayValue(current)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [numericValue])

  const colorClasses = {
    purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/20 hover:border-purple-500/40',
    blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/20 hover:border-blue-500/40',
    cyan: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/20 hover:border-cyan-500/40',
    green: 'from-green-500/20 to-green-600/10 border-green-500/20 hover:border-green-500/40'
  }

  const iconColors = {
    purple: 'text-purple-400',
    blue: 'text-blue-400',
    cyan: 'text-cyan-400',
    green: 'text-green-400'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className={`relative bg-gradient-to-br ${colorClasses[color]} backdrop-blur-xl rounded-2xl p-8 border transition-all duration-300 overflow-hidden group`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className={`${iconColors[color]} mb-4`}>{icon}</div>
        <div className="mb-2">
          <motion.span 
            className="text-5xl font-bold text-white"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            {displayValue.toFixed(value.includes('.') ? 1 : 0)}
          </motion.span>
          <span className="text-2xl text-gray-400 ml-1">{suffix}</span>
        </div>
        <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
      </div>
    </motion.div>
  )
}

// Service Card Component
function ServiceCard({ title, icon, description, cta, href = "/contact", urgent = false }: {
  title: string
  icon: React.ReactNode
  description: string
  cta: string
  href?: string
  urgent?: boolean
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <GlassCard className={`p-8 h-full flex flex-col ${urgent ? 'border-red-500/30 bg-red-500/5' : ''}`}>
        <div className={`mb-4 ${urgent ? 'text-red-400' : 'text-primary'}`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        <Button variant={urgent ? 'destructive' : 'default'} className="w-full" asChild>
          <Link href={href}>
            {cta} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </GlassCard>
    </motion.div>
  )
}

// Animated 3D background component
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 64, 64]} scale={2.5}>
            <MeshDistortMaterial
              color="#8B5CF6"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

const stats = [
  { value: "87%", label: "Reduction in AI Costs" },
  { value: "100%", label: "Data Sovereignty" },
  { value: "∞", label: "Scalability" },
  { value: "Custom", label: "Timelines" }
]

const impactMetrics = [
  {
    icon: TrendingUp,
    title: "90% Cost Reduction",
    description: "Eliminate vendor dependencies and recurring fees"
  },
  {
    icon: Shield,
    title: "Complete Control",
    description: "Your models, your data, your infrastructure—forever"
  },
  {
    icon: Zap,
    title: "Unlimited Scale",
    description: "No API limits, no usage caps, no surprise bills"
  },
  {
    icon: Award,
    title: "Proven Frameworks",
    description: "Battle-tested architectures and best practices"
  }
]

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('')
  const [assessmentScore, setAssessmentScore] = useState(0)
  const [showAssessment, setShowAssessment] = useState(false)
  const [assessmentAnswers, setAssessmentAnswers] = useState<boolean[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [demoProcessing, setDemoProcessing] = useState(false)
  const [demoResults, setDemoResults] = useState<any>(null)

  // Create refs for sections
  const sectionRefs: SectionRefs = {
    impact: { current: null },
    infrastructure: { current: null },
    apiCrisis: { current: null },
    services: { current: null },
    technologies: { current: null },
    manifesto: { current: null },
    demo: { current: null },
    comparison: { current: null },
    assessment: { current: null },
    faq: { current: null }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const assessmentQuestions = [
    "Do you have full control over your AI models and data?",
    "Can you deploy AI solutions on your own infrastructure?",
    "Are you confident in your AI security measures?",
    "Do you have the capability to customize AI for your needs?",
    "Is your organization prepared for AI regulations?"
  ]

  const handleAssessmentAnswer = (answer: boolean) => {
    const newAnswers = [...assessmentAnswers, answer]
    setAssessmentAnswers(newAnswers)
    
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Calculate score when all questions answered
      const score = (newAnswers.filter(a => a).length / newAnswers.length) * 100
      setAssessmentScore(score)
    }
  }

  const resetAssessment = () => {
    setAssessmentAnswers([])
    setCurrentQuestionIndex(0)
    setAssessmentScore(0)
    setShowAssessment(false)
  }

  const simulateDemo = async (isVendor: boolean) => {
    setDemoProcessing(true)
    
    if (isVendor) {
      // Simulate vendor AI delays and failures
      await new Promise(resolve => setTimeout(resolve, 3000))
      setDemoResults({
        type: 'vendor',
        status: 'Rate Limited',
        message: 'API quota exceeded. Please try again in 24 hours.',
        cost: '$47.82'
      })
    } else {
      // Simulate SOVREN AI instant processing
      await new Promise(resolve => setTimeout(resolve, 300))
      setDemoResults({
        type: 'sovren',
        status: 'Processed',
        message: 'Analysis complete. Full sovereignty maintained.',
        latency: '3ms',
        cost: 'Included in subscription'
      })
    }
    
    setDemoProcessing(false)
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Trust Indicators Bar */}
      <section className="py-8 border-y border-glass-edge bg-background/50 backdrop-blur-sm">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>SOC2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" />
              <span>Zero Data Retention</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>Open-Source Foundation</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Powerhouse Section - PREMIUM VERSION */}
      <section ref={sectionRefs.infrastructure} id="infrastructure" className="py-24 relative overflow-hidden bg-black">
        <AnimatedBackground />
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-6xl md:text-8xl font-bold mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundImage: "linear-gradient(to right, #8B5CF6, #06B6D4, #8B5CF6)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              4 GH200 Superchips
            </motion.h2>
            <p className="text-3xl md:text-4xl text-white font-light mb-4">
              Your Escape from API Surveillance
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              While OpenAI logs every API call by court order, we offer complete data sovereignty
            </p>
          </motion.div>

          {/* Premium Infrastructure Metrics */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-3xl" />
            <div className="relative grid md:grid-cols-4 gap-6">
              <InfrastructureMetric
                label="Active GPUs"
                value="4"
                suffix="/4"
                icon={<Server className="w-8 h-8" />}
                color="purple"
              />
              <InfrastructureMetric
                label="Memory Available"
                value="1.7"
                suffix="TB"
                icon={<Cpu className="w-8 h-8" />}
                color="blue"
              />
              <InfrastructureMetric
                label="Processing Power"
                value="288"
                suffix="vCPUs"
                icon={<HardDrive className="w-8 h-8" />}
                color="cyan"
              />
              <InfrastructureMetric
                label="Uptime"
                value="99.99"
                suffix="%"
                icon={<Activity className="w-8 h-8" />}
                color="green"
              />
            </div>
          </div>

          {/* Critical Alert Banner */}
          <motion.div 
            className="mb-12 p-6 bg-red-500/10 border border-red-500/30 rounded-2xl backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="text-red-500">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-red-400">OpenAI Court Order Alert</h3>
                <p className="text-gray-300">
                  OpenAI is now legally required to log all API sessions and user data. 
                  Law firms and enterprises using OpenAI APIs are exposing privileged information.
                </p>
              </div>
              <Button variant="destructive" asChild>
                <Link href="#api-crisis">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Infrastructure Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              Infrastructure Superiority
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Our Infrastructure</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>3.6 TB/s NVLink-C2C bandwidth</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>384 GB HBM3 GPU memory</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>16 TB NVMe SSD storage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>&lt;3ms inference latency</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Zero external logging</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-red-400">Cloud/API Providers</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span>Limited PCIe bandwidth</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span>Shared GPU resources</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span>Metered storage costs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span>200ms+ average latency</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span>Court-ordered logging (OpenAI)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Liberation Services - NEW SECTION */}
      <section ref={sectionRefs.apiCrisis} id="api-crisis" className="py-24 relative bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-red-400">Escape</span> API Surveillance.{" "}
              <span className="text-green-400">Embrace</span> Sovereignty.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your confidential data is being logged. Every prompt. Every response. 
              We help you break free in weeks, not months.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard className="p-8 border-red-500/20 bg-red-500/5 h-full">
                <h3 className="text-2xl font-bold mb-4 text-red-400">The API Crisis</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>OpenAI logs all API data by court order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Your proprietary data stored indefinitely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Client confidentiality at risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Compliance nightmares for law firms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Zero control over data retention</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard className="p-8 border-yellow-500/20 bg-yellow-500/5 h-full">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Migration Path</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Full API audit & risk assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Custom sovereign infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Seamless migration strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Zero downtime transition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Complete data repatriation</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard className="p-8 border-green-500/20 bg-green-500/5 h-full">
                <h3 className="text-2xl font-bold mb-4 text-green-400">True Sovereignty</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Your infrastructure, your rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>No external logging ever</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Complete compliance control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Privileged data stays privileged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Audit trails you control</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block p-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl border border-red-500/30 backdrop-blur-xl">
              <p className="text-3xl font-bold text-red-400 mb-4">
                Time is Running Out
              </p>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                Every API call is another data point logged forever. 
                Law firms and enterprises can't afford to wait.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                Start Your API Exodus Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Covren Impact */}
      <section ref={sectionRefs.impact} id="impact" className="py-24 relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              The Covren Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your AI infrastructure from a cost center into a strategic asset
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full hover:scale-105 transition-transform duration-300">
                  <metric.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{metric.title}</h3>
                  <p className="text-muted-foreground">{metric.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-6">Why Organizations Choose Covren</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  Strategic Asset Creation
                </h4>
                <p className="text-muted-foreground">
                  Transform AI from an expense into an appreciating asset that compounds in value over time
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  Risk Mitigation
                </h4>
                <p className="text-muted-foreground">
                  Eliminate vendor lock-in, data breaches, and compliance violations with complete control
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  Innovation Freedom
                </h4>
                <p className="text-muted-foreground">
                  Build proprietary capabilities that become your competitive moat, not your vendor's
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Covren Services Overview - NEW SECTION */}
      <section ref={sectionRefs.services} id="services" className="py-24 relative bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Complete Sovereignty Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From API migration to full-stack development, we deliver independence
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ServiceCard
                title="API Migration Services"
                icon={<Shield className="w-8 h-8" />}
                description="Escape surveillance. Migrate from OpenAI and other logged APIs to sovereign infrastructure."
                cta="Break Free from APIs"
                urgent={true}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ServiceCard
                title="SOVREN AI Platform"
                icon={<Brain className="w-8 h-8" />}
                description="Our flagship AI platform. Complete sovereignty, unlimited scale, zero surveillance."
                cta="Explore SOVREN AI"
                href="/sovren-ai"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ServiceCard
                title="Infrastructure Design"
                icon={<Server className="w-8 h-8" />}
                description="Custom sovereign infrastructure tailored to your compliance and security needs."
                cta="Design Your Stack"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <ServiceCard
                title="Compliance Solutions"
                icon={<Lock className="w-8 h-8" />}
                description="Navigate regulations while maintaining complete data control and audit trails."
                cta="Ensure Compliance"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <ServiceCard
                title="Migration Consulting"
                icon={<Rocket className="w-8 h-8" />}
                description="Strategic guidance for transitioning from vendor dependence to sovereignty."
                cta="Plan Your Migration"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <ServiceCard
                title="Custom Development"
                icon={<FileCode className="w-8 h-8" />}
                description="Full-stack sovereign solutions built for your unique requirements."
                cta="Build Sovereign"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies We Command Section */}
      <section ref={sectionRefs.technologies} id="technologies" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Technologies We Command
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building sovereign AI solutions with industry-leading technologies and custom implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {/* AI/ML Technologies */}
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" 
                  alt="PyTorch" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">PyTorch</p>
            </div>
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
                  alt="TensorFlow" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">TensorFlow</p>
            </div>
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" 
                  alt="HuggingFace" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">HuggingFace</p>
            </div>
            
            {/* Cloud & Infrastructure */}
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" 
                  alt="AWS" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">AWS</p>
            </div>
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" 
                  alt="Azure" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">Azure</p>
            </div>
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
                  alt="Docker" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">Docker</p>
            </div>
            
            {/* Development Stack */}
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                  alt="Python" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">Python</p>
            </div>
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                  alt="React" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">React</p>
            </div>
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                  alt="Node.js" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">Node.js</p>
            </div>
            
            {/* Data & Security */}
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                  alt="PostgreSQL" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">PostgreSQL</p>
            </div>
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                  alt="MongoDB" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">MongoDB</p>
            </div>
            <div className="tech-logo-wrapper group">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" 
                  alt="Kubernetes" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white text-sm mt-2 text-center opacity-80">Kubernetes</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground">
              Plus 20+ additional tools and frameworks tailored to your specific needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sovereignty Demo Section */}
      <section ref={sectionRefs.demo} id="demo" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/5 to-background" />
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Experience Sovereignty in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the difference between vendor dependence and true AI sovereignty
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <GlassCard className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Vendor AI Simulation */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-red-400">Vendor AI</h3>
                  <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                    <p className="text-sm text-red-400 mb-2">API Status</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Rate Limit</span>
                        <span className="text-red-400">429 - Too Many Requests</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Queue Position</span>
                        <span className="text-yellow-400">47th in line</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Monthly Cost</span>
                        <span className="text-red-400">$12,847 (over limit)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Data Logging</span>
                        <span className="text-red-400">All sessions logged</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => simulateDemo(true)}
                    disabled={demoProcessing}
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    {demoProcessing ? 'Waiting in Queue...' : 'Try Vendor AI (Slow)'}
                  </Button>
                </div>

                {/* SOVREN AI Simulation */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-green-400">SOVREN AI</h3>
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <p className="text-sm text-green-400 mb-2">Infrastructure Status</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Processing Power</span>
                        <span className="text-green-400">100% Available</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Latency</span>
                        <span className="text-green-400">3ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Monthly Cost</span>
                        <span className="text-green-400">Fixed: See Pricing</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Data Logging</span>
                        <span className="text-green-400">Never - Full Sovereignty</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => simulateDemo(false)}
                    disabled={demoProcessing}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600"
                  >
                    {demoProcessing ? 'Processing...' : 'Process with SOVREN AI (Instant)'}
                  </Button>
                </div>
              </div>

              {/* Demo Results */}
              <AnimatePresence>
                {demoResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-6 rounded-lg ${
                      demoResults.type === 'vendor' 
                        ? 'bg-red-500/10 border border-red-500/20' 
                        : 'bg-green-500/10 border border-green-500/20'
                    }`}
                  >
                    <h4 className={`text-lg font-semibold mb-2 ${
                      demoResults.type === 'vendor' ? 'text-red-400' : 'text-green-400'
                    }`}>
                      {demoResults.status}
                    </h4>
                    <p className="text-muted-foreground mb-2">{demoResults.message}</p>
                    <div className="flex items-center gap-4 text-sm">
                      {demoResults.latency && (
                        <span>Latency: <strong className="text-green-400">{demoResults.latency}</strong></span>
                      )}
                      <span>Cost: <strong className={demoResults.type === 'vendor' ? 'text-red-400' : 'text-green-400'}>{demoResults.cost}</strong></span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Live Demo Area */}
              <div className="mt-8 p-6 bg-secondary/50 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Try It Yourself</h4>
                <textarea
                  placeholder="Paste your data challenge here..."
                  className="w-full p-4 bg-background/50 border border-white/10 rounded-lg text-white placeholder-gray-400 min-h-[100px]"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Experience the difference between waiting for APIs and instant processing
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* AI Sovereignty Manifesto */}
      <section ref={sectionRefs.manifesto} id="manifesto" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              The AI Sovereignty Manifesto
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why settling for vendor dependence is accepting digital colonization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Your AI Should Serve You, Not Vice Versa</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Every API call to a third-party AI service is a vote for dependency. Every model locked behind a paywall is innovation held hostage. Every session logged by court order is sovereignty surrendered.
                </p>
                <p>
                  We believe in a different future—one where your AI infrastructure is as sovereign as your business itself. Where your models improve with your data. Where your costs decrease as you scale.
                </p>
                <p className="font-semibold text-foreground">
                  This isn&apos;t just about technology. It&apos;s about independence.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Complete Data Control</h4>
                    <p className="text-sm text-muted-foreground">Your data never leaves your infrastructure. Full compliance, zero compromises.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Unlimited Scaling</h4>
                    <p className="text-sm text-muted-foreground">No usage limits, no tier restrictions. Scale to millions without penalty.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Lock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">True Independence</h4>
                    <p className="text-sm text-muted-foreground">No vendor can change terms, raise prices, or shut down your AI.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard className="p-8 text-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mb-6"
                >
                  <FileText className="h-24 w-24 mx-auto text-primary animate-glow" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">
                  Download the Complete Guide to AI Sovereignty
                </h3>
                <p className="text-muted-foreground mb-6">
                  50+ pages of frameworks, case studies, and implementation strategies
                </p>
                <Button size="lg" className="w-full animate-glow-soft" asChild>
                  <a href="/downloads/sovereign-ai-guide.pdf" download="Sovereign-AI-Guide-CovrenFirm.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download Sovereignty Guide
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  No email required • Instant download
                </p>
              </GlassCard>
              <div className="absolute -bottom-4 -right-4 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 h-32 w-32 bg-cyan-500/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section ref={sectionRefs.comparison} id="comparison" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Sovereignty vs. Dependency
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The choice that defines your organization&apos;s AI future
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <GlassCard className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    Sovereign AI (Covren)
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>One-time investment, decreasing costs over time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Your data never leaves your control</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unlimited users, requests, and use cases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Custom models trained on your data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Complete independence and control</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No court-ordered logging ever</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 bg-gradient-to-br from-red-500/5 to-red-500/10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <X className="h-6 w-6 text-red-500" />
                    Vendor-Dependent AI
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Recurring fees that increase with scale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Your data processed on external servers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Usage caps and tier restrictions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Generic models, no customization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Subject to vendor changes and outages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Sessions logged by court order (OpenAI)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-r from-primary/5 to-cyan-500/5 text-center">
                <p className="text-lg font-semibold mb-4">
                  The average organization saves <span className="text-primary">$2.4 million</span> over 5 years with sovereign AI
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Calculate Your Savings <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* SOVREN AI CTA - Instead of Pricing */}
      <section className="py-24 relative bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Discover SOVREN AI
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our flagship sovereignty platform. No APIs. No surveillance. No limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-cyan-500 hover:opacity-90" asChild>
                <Link href="/sovren-ai">
                  Explore SOVREN AI <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Discuss Your Needs
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Readiness Assessment - WITH ORIGINAL YES/NO BOOLEAN SCORING */}
      <section ref={sectionRefs.assessment} id="assessment" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              AI Sovereignty Readiness Assessment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how ready your organization is for sovereign AI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="p-8">
              {!showAssessment ? (
                <div className="text-center">
                  <Brain className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Take the 2-Minute Assessment
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Answer 5 quick questions to evaluate your organization's AI sovereignty readiness
                  </p>
                  <Button
                    size="lg"
                    onClick={() => setShowAssessment(true)}
                    className="bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90"
                  >
                    Start Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  {assessmentScore === 0 && assessmentAnswers.length < assessmentQuestions.length ? (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-2xl font-bold mb-8">Quick Assessment</h3>
                      
                      {/* Progress indicator */}
                      <div className="mb-8">
                        <div className="flex justify-between text-sm text-muted-foreground mb-2">
                          <span>Question {currentQuestionIndex + 1} of {assessmentQuestions.length}</span>
                          <span>{Math.round((currentQuestionIndex / assessmentQuestions.length) * 100)}% Complete</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-cyan-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${(currentQuestionIndex / assessmentQuestions.length) * 100}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      <div className="p-6 bg-secondary/50 rounded-lg">
                        <p className="text-xl mb-6">{assessmentQuestions[currentQuestionIndex]}</p>
                        <div className="flex gap-4 justify-center">
                          <Button
                            onClick={() => handleAssessmentAnswer(true)}
                            size="lg"
                            className="bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90"
                          >
                            Yes
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleAssessmentAnswer(false)}
                            size="lg"
                            className="border-muted-foreground/50 hover:bg-secondary"
                          >
                            No
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="mb-8">
                        <div className="relative w-48 h-48 mx-auto mb-6">
                          <svg className="w-48 h-48 transform -rotate-90">
                            <circle
                              cx="96"
                              cy="96"
                              r="88"
                              stroke="currentColor"
                              strokeWidth="12"
                              fill="none"
                              className="text-secondary"
                            />
                            <motion.circle
                              cx="96"
                              cy="96"
                              r="88"
                              stroke="url(#gradient)"
                              strokeWidth="12"
                              fill="none"
                              strokeLinecap="round"
                              strokeDasharray={553}
                              initial={{ strokeDashoffset: 553 }}
                              animate={{ strokeDashoffset: 553 - (553 * assessmentScore) / 100 }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#06B6D4" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div>
                              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                                {assessmentScore}%
                              </div>
                              <div className="text-sm text-muted-foreground">Ready</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-4">
                        {assessmentScore >= 80 ? "You're Ready for AI Sovereignty!" :
                         assessmentScore >= 60 ? "Strong Foundation for Sovereignty" :
                         assessmentScore >= 40 ? "Good Potential for Growth" :
                         "Start Your Sovereignty Journey"}
                      </h3>
                      
                      <p className="text-muted-foreground mb-8">
                        {assessmentScore >= 80 ? 
                          "Your organization shows excellent readiness for AI sovereignty implementation. You have the foundation in place to take control of your AI infrastructure." :
                         assessmentScore >= 60 ? 
                          "You have many of the key elements in place. With strategic planning, you can achieve full AI sovereignty and eliminate vendor dependencies." :
                         assessmentScore >= 40 ?
                          "While there's room for improvement, you have a solid starting point. We can help you build the capabilities needed for AI independence." :
                          "Every journey starts with a single step. Understanding AI sovereignty now will prepare you for future growth and prevent costly vendor lock-in."}
                      </p>

                      <div className="space-y-4">
                        <Button size="lg" className="w-full" asChild>
                          <Link href="/contact">
                            Get Your Custom Sovereignty Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="w-full"
                          onClick={resetAssessment}
                        >
                          Retake Assessment
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={sectionRefs.faq} id="faq" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about achieving AI sovereignty
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <details className="group">
                <summary className="cursor-pointer list-none">
                  <GlassCard className="p-6 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">What exactly is AI sovereignty?</h3>
                      <ChevronRight className="h-5 w-5 text-primary transition-transform group-open:rotate-90" />
                    </div>
                  </GlassCard>
                </summary>
                <div className="mt-4 px-6 text-muted-foreground">
                  <p>AI sovereignty means complete ownership and control over your AI infrastructure, models, and data. Instead of relying on third-party APIs and services, you own the entire stack—from hardware to models to applications. This gives you unlimited scaling, zero vendor lock-in, and complete data privacy.</p>
                </div>
              </details>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <details className="group">
                <summary className="cursor-pointer list-none">
                  <GlassCard className="p-6 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">How do we migrate from OpenAI and other APIs?</h3>
                      <ChevronRight className="h-5 w-5 text-primary transition-transform group-open:rotate-90" />
                    </div>
                  </GlassCard>
                </summary>
                <div className="mt-4 px-6 text-muted-foreground">
                  <p>Our API migration service includes a complete audit of your current API usage, risk assessment, and a phased migration plan. We build sovereign infrastructure tailored to your needs, ensure zero downtime during transition, and handle complete data repatriation. Most migrations complete in 4-8 weeks.</p>
                </div>
              </details>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <details className="group">
                <summary className="cursor-pointer list-none">
                  <GlassCard className="p-6 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">What&apos;s the real ROI?</h3>
                      <ChevronRight className="h-5 w-5 text-primary transition-transform group-open:rotate-90" />
                    </div>
                  </GlassCard>
                </summary>
                <div className="mt-4 px-6 text-muted-foreground">
                  <p>Organizations typically see 87% cost reduction by year 3 compared to SaaS AI services. Beyond cost savings, you gain unlimited scalability, complete data control, and the ability to build proprietary AI capabilities that become competitive advantages. The average break-even point is 14-18 months.</p>
                </div>
              </details>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <details className="group">
                <summary className="cursor-pointer list-none">
                  <GlassCard className="p-6 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Do we need AI expertise in-house?</h3>
                      <ChevronRight className="h-5 w-5 text-primary transition-transform group-open:rotate-90" />
                    </div>
                  </GlassCard>
                </summary>
                <div className="mt-4 px-6 text-muted-foreground">
                  <p>Not initially. We handle the complex implementation and provide comprehensive training for your team. Our goal is to transfer knowledge, not create dependencies. Many clients start with minimal AI expertise and develop strong capabilities through our partnership.</p>
                </div>
              </details>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <details className="group">
                <summary className="cursor-pointer list-none">
                  <GlassCard className="p-6 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">What about the OpenAI court order?</h3>
                      <ChevronRight className="h-5 w-5 text-primary transition-transform group-open:rotate-90" />
                    </div>
                  </GlassCard>
                </summary>
                <div className="mt-4 px-6 text-muted-foreground">
                  <p>OpenAI is now legally required to log all API sessions and user data. This means every prompt, every response, and all metadata is stored indefinitely. For law firms, healthcare providers, and enterprises handling sensitive data, this is a critical compliance risk. Our sovereign infrastructure ensures your data never leaves your control—no logging, no surveillance, complete privacy.</p>
                </div>
              </details>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-t from-primary/10 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Ready to Build Your AI Empire?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Join the sovereign AI revolution. Take control of your organization&apos;s AI destiny today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="animate-glow-soft" asChild>
                <Link href="/contact">
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/downloads/sovereign-ai-guide.pdf" download="Sovereign-AI-Guide-CovrenFirm.pdf">
                  Download Sovereignty Guide
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
