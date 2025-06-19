'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, Users, ChevronDown, Brain, Lock, Rocket, Globe, Award, TrendingUp, CheckCircle2, XCircle, Star, Check, X, ExternalLink, Download, FileText, ChevronRight } from "lucide-react"
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

const assessmentQuestions = [
  {
    question: "How much does your organization currently spend on AI/ML services monthly?",
    options: [
      { text: "Less than $10,000", score: 1 },
      { text: "$10,000 - $50,000", score: 2 },
      { text: "$50,000 - $200,000", score: 3 },
      { text: "Over $200,000", score: 4 }
    ]
  },
  {
    question: "What's your biggest AI challenge right now?",
    options: [
      { text: "Rising costs", score: 4 },
      { text: "Vendor limitations", score: 3 },
      { text: "Data privacy concerns", score: 4 },
      { text: "Scaling difficulties", score: 2 }
    ]
  },
  {
    question: "How critical is data sovereignty to your organization?",
    options: [
      { text: "Nice to have", score: 1 },
      { text: "Important", score: 2 },
      { text: "Very important", score: 3 },
      { text: "Mission critical", score: 4 }
    ]
  },
  {
    question: "When do you need a sovereign AI solution?",
    options: [
      { text: "Just exploring", score: 1 },
      { text: "Within 12 months", score: 2 },
      { text: "Within 6 months", score: 3 },
      { text: "ASAP", score: 4 }
    ]
  }
]

export default function HomePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)
    
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  const totalScore = answers.reduce((sum, score) => sum + score, 0)
  const maxScore = assessmentQuestions.length * 4
  const readinessPercentage = Math.round((totalScore / maxScore) * 100)

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

      {/* The Covren Impact */}
      <section id="impact" className="py-24 relative">
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

      {/* Technologies We Command Section */}
      <section id="technologies" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Enterprise-Grade Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge open-source technologies to build your sovereign AI infrastructure
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

      {/* AI Sovereignty Manifesto */}
      <section id="manifesto" className="py-24 relative overflow-hidden">
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
                  Every API call to a third-party AI service is a vote for dependency. Every model locked behind a paywall is innovation held hostage.
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
      <section id="comparison" className="py-24 relative">
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
                      <span>Becomes a strategic asset over time</span>
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
                      <span>Perpetual expense with no ownership</span>
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

      {/* AI Readiness Assessment */}
      <section className="py-24 relative overflow-hidden">
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
              Discover if your organization is ready to break free from AI vendor dependency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <GlassCard className="p-8">
              {!showResults ? (
                <>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Question {currentQuestion + 1} of {assessmentQuestions.length}</span>
                      <span>{Math.round(((currentQuestion) / assessmentQuestions.length) * 100)}% Complete</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-cyan-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion) / assessmentQuestions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-6">
                      {assessmentQuestions[currentQuestion].question}
                    </h3>
                    <div className="space-y-3">
                      {assessmentQuestions[currentQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          onClick={() => handleAnswer(option.score)}
                          variant="outline"
                          className="w-full justify-start text-left p-4 h-auto hover:bg-primary/10 hover:border-primary transition-all"
                        >
                          <span className="text-base">{option.text}</span>
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                </>
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
                          animate={{ strokeDashoffset: 553 - (553 * readinessPercentage) / 100 }}
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
                            {readinessPercentage}%
                          </div>
                          <div className="text-sm text-muted-foreground">Ready</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {readinessPercentage >= 75 ? "You're Ready for AI Sovereignty!" :
                     readinessPercentage >= 50 ? "You're on the Path to Sovereignty" :
                     "Start Your Sovereignty Journey"}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8">
                    {readinessPercentage >= 75 ? 
                      "Your organization shows strong indicators for successful AI sovereignty implementation. The potential cost savings and strategic advantages are significant." :
                     readinessPercentage >= 50 ? 
                      "You have a solid foundation for AI sovereignty. With the right strategy and partner, you can achieve full independence from vendor lock-in." :
                      "While you may not need full sovereignty today, understanding your options now will prepare you for future growth and prevent costly dependencies."}
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
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
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
                      <h3 className="text-xl font-semibold">How long does implementation take?</h3>
                      <ChevronRight className="h-5 w-5 text-primary transition-transform group-open:rotate-90" />
                    </div>
                  </GlassCard>
                </summary>
                <div className="mt-4 px-6 text-muted-foreground">
                  <p>Implementation timelines are customized to your needs. Simple deployments can be operational in 4-6 weeks, while comprehensive enterprise implementations typically take 3-6 months. We work with your timeline and can phase the rollout to deliver value quickly while building toward full sovereignty.</p>
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
                      <h3 className="text-xl font-semibold">Can we still use cloud services?</h3>
                      <ChevronRight className="h-5 w-5 text-primary transition-transform group-open:rotate-90" />
                    </div>
                  </GlassCard>
                </summary>
                <div className="mt-4 px-6 text-muted-foreground">
                  <p>Absolutely. AI sovereignty doesn&apos;t mean avoiding the cloud—it means owning your AI assets. You can deploy on your preferred cloud provider, on-premise, or hybrid. The key is that you own and control everything, with no vendor lock-in or usage restrictions.</p>
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
