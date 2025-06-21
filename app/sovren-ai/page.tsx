'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Link from "next/link"
import { Shield, Brain, Cpu, Activity, Lock, Zap, ChevronRight, AlertTriangle, CheckCircle, XCircle, Terminal, BarChart3, Globe, Sparkles, Server, Database, GitBranch, Code2, Check, Settings, SlidersHorizontal, BrainCircuit, ShieldCheck, Layers } from 'lucide-react'

// Cinematic background component
function CinematicBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

useEffect(() => {
  if (typeof window === 'undefined') return
  
  const handleMouseMove = (e) => {
    const rect = document.body.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }
  
  window.addEventListener('mousemove', handleMouseMove)
  return () => window.removeEventListener('mousemove', handleMouseMove)
}, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Dynamic gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) => `radial-gradient(600px circle at ${x * 100}% ${y * 100}%, rgba(239, 68, 68, 0.15), transparent 40%)`
          ),
        }}
      />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            backgroundPosition: '0 0, 0 0',
            animation: 'grid 20s linear infinite',
          }}
        />
      </div>
      
      {/* Floating particles */}
     {[...Array(20)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute w-1 h-1 bg-red-500/30 rounded-full"
    initial={{
      x: Math.random() * 1920,
      y: Math.random() * 1080,
    }}
    animate={{
      x: Math.random() * 1920,
      y: -20,
    }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes grid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}

// Live infrastructure status component
function InfrastructureStatus() {
  const [metrics, setMetrics] = useState({
    cpu: 12,
    memory: 23,
    latency: 3,
    uptime: 99.99
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.random() * 20 + 10,
        memory: Math.random() * 30 + 20,
        latency: Math.random() * 2 + 2,
        uptime: 99.99
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/50 backdrop-blur-lg border border-red-900/30 rounded-xl p-6 mb-8"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Activity className="w-5 h-5 text-red-500" />
          Live Infrastructure Status
        </h3>
        <span className="text-xs text-green-400 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          OPERATIONAL
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">GH200 Usage</p>
          <p className="text-xl font-bold text-white">{metrics.cpu.toFixed(1)}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Memory Active</p>
          <p className="text-xl font-bold text-white">{metrics.memory.toFixed(1)}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Latency</p>
          <p className="text-xl font-bold text-white">{metrics.latency.toFixed(1)}ms</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Uptime</p>
          <p className="text-xl font-bold text-white">{metrics.uptime}%</p>
        </div>
      </div>
    </motion.div>
  )
}

// Feature comparison component
function FeatureComparison() {
  const features = [
    { name: 'Response Time', sovren: '<3ms', others: '200-500ms' },
    { name: 'Data Sovereignty', sovren: '100%', others: '0%' },
    { name: 'Scaling Limits', sovren: 'None', others: 'API Caps' },
    { name: 'Custom Models', sovren: 'Unlimited', others: 'Not Available' },
    { name: 'Infrastructure', sovren: '4x GH200', others: 'Shared Cloud' },
    { name: 'Cost at Scale', sovren: 'Fixed', others: 'Exponential' }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <motion.div
          key={feature.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg border border-gray-800"
        >
          <span className="text-sm text-gray-400">{feature.name}</span>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-green-400">{feature.sovren}</span>
            <span className="text-sm text-gray-600 line-through">{feature.others}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const platformFeatures = [
  {
    icon: Zap,
    title: "Autonomous Execution",
    description: "Doesn't automate - obliterates manual process chains in favor of real-time synthetic action.",
  },
  {
    icon: BrainCircuit,
    title: "Neural Command Core",
    description: "Real-time synthetic brain that acts without permission unless explicitly told not to.",
  },
  {
    icon: ShieldCheck,
    title: "Sovereign Control",
    description: "No containers. No SaaS. No cloud abstraction. SOVREN owns its warzone.",
  },
  {
    icon: BarChart3,
    title: "Predictive Supremacy",
    description: "Decision replacement, not decision support. Where others calculate, it concludes.",
  },
  {
    icon: Layers,
    title: "Modular Agent Framework",
    description: "Autonomous synthetic agents - modular, disposable, stackable, ruthless.",
  },
  {
    icon: Settings,
    title: "Voice-Governed Execution",
    description: "Issue a command. SOVREN listens, translates, executes. Sub-second latency.",
  },
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

export default function SovrenAIPage() {
  const [selectedTier, setSelectedTier] = useState(null)
  const [showComparison, setShowComparison] = useState(false)
  const [isApplying, setIsApplying] = useState(false)
  
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.85])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98])

  const handleApply = (tier) => {
    setIsApplying(true)
    // Simulate navigation with animation
    setTimeout(() => {
      window.location.href = `/sovren-ai/apply?tier=${tier}`
    }, 1000)
  }

  return (
    <div className="flex flex-col bg-black text-white">
      {/* Hero Section for SOVREN AI */}
      <motion.section
        className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <CinematicBackground />
        <div className="container relative z-10 text-center">
          <motion.div
            className="inline-block p-3 mb-6 bg-red-600/10 rounded-full ring-2 ring-red-600/30"
            variants={cardVariants}
          >
            <Brain className="h-10 w-10 text-red-500" />
          </motion.div>
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 sm:text-5xl md:text-6xl lg:text-7xl animate-text-glow-primary"
            variants={cardVariants}
          >
            SOVREN AI
          </motion.h1>
          <motion.p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 sm:text-2xl" variants={cardVariants}>
            You don't use it. It uses you.
          </motion.p>
          <motion.p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400" variants={cardVariants}>
            Autonomous Intelligence Command System. Where others automate, 
            it obliterates inefficiency and assumes control.
          </motion.p>
          <motion.div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center" variants={cardVariants}>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
            >
              Deploy Sovereignty
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/sovren-ai/executive-summary"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-red-500 bg-black border-2 border-red-600 rounded-lg hover:bg-red-950/50 transition-all duration-300"
            >
              Read Executive Summary
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        id="features"
        className="py-16 md:py-24 bg-gray-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl">Core Architecture</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-gray-400">
              Not decision support. Decision replacement.
            </p>
          </div>
          <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" variants={cardListVariants}>
            {platformFeatures.map((feature) => (
              <motion.div key={feature.title} variants={cardVariants}>
                <div className="flex flex-col items-start p-6 h-full bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl hover:border-red-600/50 transition-all duration-300">
                  <div className="p-3 mb-4 bg-red-600/10 rounded-lg ring-1 ring-red-600/20">
                    <feature.icon className="h-7 w-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 flex-grow">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Infrastructure Supremacy Section */}
      <motion.section
        className="py-16 md:py-24 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl mb-4">
              Deployed Across Sovereign Infrastructure
            </h2>
            <p className="text-xl text-gray-400">
              4 NVIDIA GH200 SuperChip nodes. These aren't servers. They're synthetic weapons platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900/50 backdrop-blur border border-red-600/30 rounded-lg p-6 text-center">
              <Server className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">384GB</div>
              <div className="text-sm text-gray-400">HBM3 Total</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur border border-red-600/30 rounded-lg p-6 text-center">
              <Cpu className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">1.7TB</div>
              <div className="text-sm text-gray-400">System RAM</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur border border-red-600/30 rounded-lg p-6 text-center">
              <Database className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">256</div>
              <div className="text-sm text-gray-400">vCPUs</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur border border-red-600/30 rounded-lg p-6 text-center">
              <Activity className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">16TB</div>
              <div className="text-sm text-gray-400">NVMe Storage</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-300 font-semibold">
              No containers. No SaaS. No cloud abstraction. 
              <span className="text-red-500"> SOVREN owns its warzone.</span>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative bg-black text-white overflow-hidden">
        <CinematicBackground />
        
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10"
        >
          <div className="container max-w-7xl mx-auto px-6">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-block mb-8"
              >
                <div className="flex items-center justify-center gap-3 text-red-500 mb-4">
                  <Server className="w-8 h-8" />
                  <span className="text-2xl font-mono">SOVEREIGN INFRASTRUCTURE</span>
                  <Server className="w-8 h-8" />
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400 animate-gradient">
                    AI THAT OWNS
                  </span>
                  <br />
                  <span className="text-white">THE FUTURE</span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-8"
              >
                While others beg for GPU access, we command{' '}
                <span className="text-red-500 font-bold">4x NVIDIA GH200 Superchips</span>.
                This isn't SaaS. This is sovereignty.
              </motion.p>

              {/* Tech Stack Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="inline-flex items-center gap-3 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-full px-6 py-3 mb-12"
              >
                <Code2 className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">
                  Built with <span className="text-blue-400 font-bold">React 18</span> • 
                  Same stack as SOVREN AI
                </span>
              </motion.div>
            </motion.div>

            {/* Live Infrastructure Status */}
            <InfrastructureStatus />

            {/* Application Only Warning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 blur-3xl" />
              <div className="relative bg-red-950/50 backdrop-blur-xl border border-red-600/50 rounded-2xl p-8 text-center">
                <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">SOVEREIGNTY BY APPLICATION ONLY</h3>
                <p className="text-gray-400 max-w-2xl mx-auto mb-4">
                  We don't accept everyone. You or Your organization must demonstrate readiness for true AI independence.
                  No tire-kickers. No vendor-hoppers. Only serious operators building the future.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="flex items-center gap-2 text-red-400">
                    <CheckCircle className="w-4 h-4" />
                    Direct Founder Review
                  </span>
                  <span className="flex items-center gap-2 text-red-400">
                    <CheckCircle className="w-4 h-4" />
                    Technical Assessment Required
                  </span>
                  <span className="flex items-center gap-2 text-red-400">
                    <CheckCircle className="w-4 h-4" />
                    24-48 Hour Decision
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Phase Warning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-600/30 rounded-xl p-6 mb-12 text-center"
            >
              <p className="text-lg">
                <span className="text-yellow-500 font-bold">⚡ LIMITED TIME:</span>{' '}
                Phase 1 pricing ends when we hit 30 customers. Prices triple after.{' '}
                <span className="text-yellow-400 font-bold">17 spots remaining.</span>
              </p>
            </motion.div>

            {/* Pricing Tiers */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* SOVREN Proof Tier */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
                onMouseEnter={() => setSelectedTier('proof')}
                onMouseLeave={() => setSelectedTier(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-950/80 backdrop-blur-xl border border-gray-800 group-hover:border-gray-600 rounded-2xl p-8 h-full transition-all duration-300">
                  {/* Tier Header */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold">SOVREN Proof</h3>
                      <Brain className="w-8 h-8 text-gray-600 group-hover:text-gray-400 transition-colors" />
                    </div>
                    <p className="text-gray-400">Prove sovereignty works for your organization</p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">$497</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Dedicated GH200 compute allocation</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {[
                      'Full SOVREN AI platform access',
                      'Shared GH200 infrastructure (guaranteed resources)',
                      'Unlimited API calls, no rate limits',
                      'Community Discord support',
                      'Weekly group office hours',
                      'Full documentation & tutorials',
                      'React-based SDKs & examples'
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleApply('proof')}
                    disabled={isApplying}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group border border-gray-700 hover:border-gray-500"
                  >
                    {isApplying ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>APPLY FOR PROOF ACCESS</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>

              {/* SOVREN Proof+ Tier */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
                onMouseEnter={() => setSelectedTier('proof-plus')}
                onMouseLeave={() => setSelectedTier(null)}
              >
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    FOUNDER'S CHOICE
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-red-800/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-950/80 backdrop-blur-xl border-2 border-red-900/50 group-hover:border-red-600/50 rounded-2xl p-8 h-full transition-all duration-300">
                  {/* Tier Header */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold">SOVREN Proof+</h3>
                      <Zap className="w-8 h-8 text-red-600 group-hover:text-red-500 transition-colors" />
                    </div>
                    <p className="text-gray-400">Direct access to the sovereign architects</p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">$797</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <p className="text-sm text-red-400 mt-2 font-semibold">Only 7 seats remaining</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {[
                      'Everything in SOVREN Proof',
                      'Priority support',
                      'Direct founder access',
                      'Custom onboarding session',
                      'Monthly 1-on-1 strategy calls',
                      'Beta feature early access',
                      'Custom model training consultation',
                      'Architecture review & optimization'
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleApply('proof-plus')}
                    disabled={isApplying}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 blur-xl" />
                    {isApplying ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span className="relative z-10">APPLY FOR PRIORITY ACCESS</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Comparison Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-center mb-12"
            >
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <BarChart3 className="w-5 h-5" />
                <span>See how SOVREN demolishes the competition</span>
                <ChevronRight className={`w-5 h-5 transition-transform ${showComparison ? 'rotate-90' : ''}`} />
              </button>
            </motion.div>

            {/* Feature Comparison */}
            <AnimatePresence>
              {showComparison && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-16"
                >
                  <FeatureComparison />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { icon: Shield, label: 'SOC2 Compliant', desc: 'Enterprise-grade security' },
                { icon: Lock, label: 'Zero Data Retention', desc: 'Your data, your control' },
                { icon: GitBranch, label: 'Open Source Core', desc: 'Transparency first' },
                { icon: Globe, label: '99.99% Uptime', desc: 'Sovereign reliability' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-xl p-6 text-center"
                >
                  <item.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <h4 className="font-bold mb-1">{item.label}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="text-center"
            >
              <p className="text-gray-400 mb-4">
                Not ready to apply? Watch SOVREN demolish use cases live.
              </p>
              <a 
                href="/sovren-ai/demo"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold group"
              >
                <Terminal className="w-5 h-5" />
                <span>Join Friday Demo Sessions</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <motion.section
        id="contact-briefing"
        className="py-20 md:py-32 bg-gray-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container text-center max-w-3xl mx-auto">
          <SlidersHorizontal className="h-12 w-12 text-red-500 mx-auto mb-6 animate-float" />
          <h2 className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl lg:text-5xl">
            Unlock Sovereign Intelligence.
          </h2>
          <p className="mt-6 text-lg text-gray-400 md:text-xl">
            Discover how SOVREN AI can revolutionize your operations. Schedule a confidential briefing with
            our strategists to explore a tailored deployment.
          </p>
          <Link
            href="/contact?subject=SOVREN+AI+Briefing+Request"
            className="inline-flex items-center justify-center mt-10 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
          >
            Schedule Strategic Briefing
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.section>
    </div>
  )
}
