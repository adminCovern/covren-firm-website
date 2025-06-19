'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, Users, ChevronDown, Brain, Lock, Rocket, Globe, Award, TrendingUp, CheckCircle2, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import HeroSection from '@/components/sections/hero-section'
import GlassCard from "@/components/ui/glass-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Define section refs type
type SectionRefs = {
  [key: string]: React.RefObject<HTMLElement>
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('')
  const [assessmentScore, setAssessmentScore] = useState(0)
  const [showAssessment, setShowAssessment] = useState(false)
  const [assessmentAnswers, setAssessmentAnswers] = useState<boolean[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  // Create refs for sections
  const sectionRefs: SectionRefs = {
    impact: { current: null },
    technologies: { current: null },
    manifesto: { current: null },
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

  const calculateAssessment = (answers: boolean[]) => {
    const score = (answers.filter(a => a).length / answers.length) * 100
    setAssessmentScore(score)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Trust Indicators Bar */}
      <section className="py-6 bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900 border-y border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Industry Leading Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Global Deployment Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Covren Impact Section */}
      <section ref={sectionRefs.impact} id="impact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/50">
              Proven Results
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Covren Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations worldwide trust us to transform their AI capabilities into competitive advantages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlassCard>
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-cyan-400 mb-4" />
                <CardTitle className="text-2xl text-white">3X Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Average operational efficiency improvement reported by our clients within 6 months
                </p>
              </CardContent>
            </GlassCard>

            <GlassCard>
              <CardHeader>
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <CardTitle className="text-2xl text-white">100% Sovereign</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Complete data ownership and control maintained across all deployments
                </p>
              </CardContent>
            </GlassCard>

            <GlassCard>
              <CardHeader>
                <Rocket className="w-12 h-12 text-cyan-400 mb-4" />
               <CardTitle className="text-2xl text-white">Custom Timelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Tailored deployment schedules that match your project's complexity and requirements
                </p>
              </CardContent>
            </GlassCard>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Why Organizations Choose Sovereign AI</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                  <p className="text-gray-300">Data Control & Ownership</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">Zero</div>
                  <p className="text-gray-300">Vendor Lock-in Risk</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
                  <p className="text-gray-300">Scalability Potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Technologies We Command Section */}
      <section ref={sectionRefs.technologies} id="technologies" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/50">
              Tech Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Command
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building sovereign AI solutions with industry-leading technologies
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
        </div>
      </section>

      {/* AI Sovereignty Manifesto Section */}
      <section ref={sectionRefs.manifesto} id="manifesto" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/50">
                Our Philosophy
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The AI Sovereignty Manifesto
              </h2>
            </div>

            <GlassCard className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Own Your Intelligence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    In the age of AI, sovereignty isn't just about data—it's about owning the very intelligence 
                    that drives your organization. We believe every organization deserves complete control over 
                    their AI destiny.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Build Without Boundaries</h3>
                  <p className="text-gray-300 leading-relaxed">
                    True innovation happens when you're free from vendor lock-in and platform limitations. 
                    Our sovereign AI solutions give you the freedom to build, deploy, and scale on your terms.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Secure by Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Security isn't an afterthought—it's the foundation. Every solution we build starts with 
                    zero-trust architecture and ends with you having complete control over access and governance.
                  </p>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
                    "We don't just build AI systems. We build empires."
                  </p>
                 <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cyan-500/25"
                    asChild
                  >
                    <Link href="/contact">
                      Start Your Sovereignty Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section ref={sectionRefs.comparison} id="comparison" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/50">
              Why Choose Covren
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Sovereignty Difference
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See why forward-thinking organizations choose sovereign AI over traditional solutions
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional AI */}
              <GlassCard className="border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-400 flex items-center gap-2">
                    <XCircle className="w-6 h-6" />
                    Traditional AI Vendors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Vendor lock-in with proprietary platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Your data trains their models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Limited customization options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Recurring subscription costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Black-box solutions with no transparency</span>
                    </li>
                  </ul>
                </CardContent>
              </GlassCard>

              {/* Covren Sovereign AI */}
              <GlassCard className="border-cyan-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500/20 to-transparent w-32 h-32" />
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6" />
                    Covren Sovereign AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Complete ownership of your AI infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Your data stays yours, always</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Fully customizable to your exact needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">One-time investment, lifetime value</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Full transparency and control</span>
                    </li>
                  </ul>
                </CardContent>
              </GlassCard>
            </div>

            <motion.div 
              {...fadeInUp}
              className="mt-12 text-center"
            >
             <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cyan-500/25"
                asChild
              >
                <Link href="/contact">
                  Choose Sovereignty
                  <Shield className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Readiness Assessment */}
      <section ref={sectionRefs.assessment} id="assessment" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/50">
                Free Assessment
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Sovereignty Readiness Assessment
              </h2>
              <p className="text-xl text-gray-300">
                Discover how ready your organization is for sovereign AI
              </p>
            </div>

            <GlassCard className="p-8">
              {!showAssessment ? (
                <div className="text-center">
                  <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Take the 2-Minute Assessment
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Answer 5 quick questions to evaluate your organization's AI sovereignty readiness
                  </p>
                  <Button
                    size="lg"
                    onClick={() => setShowAssessment(true)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    Start Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  {assessmentScore === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-8">Quick Assessment</h3>
                      <div className="space-y-6">
                        {assessmentQuestions.map((question, index) => (
                          <div key={index} className="p-4 bg-gray-800/50 rounded-lg">
                            <p className="text-white mb-3">{question}</p>
                            <div className="flex gap-4">
                              <Button
                                variant="outline"
                                onClick={() => {
                                  const answers = new Array(5).fill(false)
                                  answers[index] = true
                                  if (index === 4) {
                                    calculateAssessment(answers)
                                  }
                                }}
                                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                              >
                                Yes
                              </Button>
                              <Button
                                variant="outline"
                                onClick={() => {
                                  const answers = new Array(5).fill(false)
                                  if (index === 4) {
                                    calculateAssessment(answers)
                                  }
                                }}
                                className="border-gray-500/50 text-gray-400 hover:bg-gray-500/10"
                              >
                                No
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <div className="mb-8">
                        <div className="w-32 h-32 mx-auto mb-6 relative">
                          <svg className="w-32 h-32 transform -rotate-90">
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              className="text-gray-700"
                            />
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 56}`}
                              strokeDashoffset={`${2 * Math.PI * 56 * (1 - assessmentScore / 100)}`}
                              className="text-cyan-400 transition-all duration-1000"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl font-bold text-white">{assessmentScore}%</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Your AI Sovereignty Score
                        </h3>
                        <p className="text-gray-300 mb-8">
                          {assessmentScore < 40 
                            ? "Your organization has significant opportunities to improve AI sovereignty."
                            : assessmentScore < 70
                            ? "You're on the right track but there's room for improvement."
                            : "Great! Your organization is well-positioned for AI sovereignty."}
                        </p>
                      </div>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      >
                        Get Detailed Analysis
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={sectionRefs.faq} id="faq" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/50">
                FAQ
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-900/50 border border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  What exactly is Sovereign AI?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Sovereign AI means having complete ownership and control over your AI infrastructure, models, and data. 
                  Unlike traditional cloud-based AI services, sovereign solutions run on your infrastructure, ensuring 
                  your sensitive data never leaves your control and your AI capabilities remain independent of external vendors.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-900/50 border border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  How long does implementation take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Typical implementations range from 30-90 days depending on complexity. We start with a discovery phase 
                  to understand your needs, followed by rapid prototyping and deployment. Our agile approach ensures you 
                  see value quickly while building toward your complete sovereign AI solution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-900/50 border border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  Do we need AI expertise in-house?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  No. We design our solutions to be managed by your existing IT team. We provide comprehensive training, 
                  documentation, and ongoing support. Our goal is to make sovereign AI accessible to organizations regardless 
                  of their current AI expertise level.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-900/50 border border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  What about ongoing support and updates?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We offer flexible support packages tailored to your needs. This includes model updates, security patches, 
                  performance optimization, and 24/7 technical support. You maintain full control while having expert 
                  assistance whenever needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gray-900/50 border border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  How does pricing compare to traditional AI services?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  While sovereign AI requires an initial investment, it eliminates recurring subscription fees and provides 
                  better long-term value. You own the infrastructure and can scale without per-user or per-query costs. 
                  Most organizations see ROI within 12-18 months through improved efficiency and eliminated vendor fees.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-t from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-gradient-x" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your AI Empire?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join the sovereign AI revolution. Take control of your organization's AI destiny today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cyan-500/25"
              >
                Schedule Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg"
              >
                Download Sovereignty Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
