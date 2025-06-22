'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from "next/link"
import { 
  Zap, ShieldCheck, BrainCircuit, BarChart3, Layers, Check, Settings, 
  SlidersHorizontal, Terminal, AlertTriangle, Lock, Activity, Shield,
  Crosshair, Target, Eye, Binary, Fingerprint, Key, ShieldAlert,
  Skull, Timer, Power, Swords, Bomb, Radio, AlertCircle, Command
} from 'lucide-react'

// Glitch text effect from homepage
function GlitchText({ children, className = "", intensity = "medium" }) {
  const [glitch, setGlitch] = useState(false)
  const [glitchIntensity, setGlitchIntensity] = useState(0)
  
  useEffect(() => {
    const baseInterval = intensity === "high" ? 1000 : intensity === "low" ? 5000 : 3000
    const interval = setInterval(() => {
      setGlitch(true)
      setGlitchIntensity(Math.random())
      setTimeout(() => setGlitch(false), 200)
    }, baseInterval + Math.random() * 4000)
    
    return () => clearInterval(interval)
  }, [intensity])
  
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      {glitch && (
        <>
          <span 
            className="absolute inset-0 text-red-500 opacity-80" 
            style={{ 
              transform: `translate(${-2 - glitchIntensity * 2}px, ${-2 - glitchIntensity}px)`,
              clipPath: `inset(${glitchIntensity * 40}% 0 ${60 - glitchIntensity * 40}% 0)`
            }}
          >
            {children}
          </span>
          <span 
            className="absolute inset-0 text-cyan-500 opacity-80" 
            style={{ 
              transform: `translate(${2 + glitchIntensity * 2}px, ${2 + glitchIntensity}px)`,
              clipPath: `inset(${60 - glitchIntensity * 40}% 0 ${glitchIntensity * 40}% 0)`
            }}
          >
            {children}
          </span>
        </>
      )}
    </div>
  )
}

// Threat scanner overlay
function ThreatScanner({ active = false }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none z-30"
        >
          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute top-4 right-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Crosshair className="w-8 h-8 text-red-500" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Access denied overlay for classified features
function ClassifiedOverlay({ show = false }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl z-40 flex items-center justify-center"
        >
          <div className="text-center">
            <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
            <p className="text-xl font-mono text-red-500 font-black mb-2">ACCESS DENIED</p>
            <p className="text-sm text-gray-500">LEVEL 10 CLEARANCE REQUIRED</p>
            <p className="text-xs text-gray-600 mt-4">Technical specifications classified under NDA</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Military-grade feature card
function WeaponFeatureCard({ feature, index }) {
  const [isTargeted, setIsTargeted] = useState(false)
  const [accessDenied, setAccessDenied] = useState(false)
  
  const handleTechnicalClick = () => {
    setAccessDenied(true)
    setTimeout(() => setAccessDenied(false), 2000)
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsTargeted(true)}
      onMouseLeave={() => setIsTargeted(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group h-full"
    >
      <ThreatScanner active={isTargeted} />
      
      {/* Main card */}
      <div className={`relative bg-gray-950/90 backdrop-blur-xl border-2 rounded-xl h-full transition-all duration-300 overflow-hidden ${
        isTargeted ? 'border-red-500 shadow-2xl shadow-red-500/20' : 'border-gray-800'
      }`}>
        {/* Energy field effect */}
        {isTargeted && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
        
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              animate={isTargeted ? { rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="p-3 bg-red-950/30 rounded-lg border border-red-900/50"
            >
              <feature.icon className="w-8 h-8 text-red-500" />
            </motion.div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-green-400">ACTIVE</span>
            </div>
          </div>
          
          <h3 className="text-xl font-black text-white mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-400 flex-grow mb-4">{feature.description}</p>
          
          {/* Technical details button - triggers classified */}
          <button
            onClick={handleTechnicalClick}
            className="flex items-center gap-2 text-xs text-red-500 hover:text-red-400 transition-colors group/btn"
          >
            <Lock className="w-4 h-4" />
            <span className="font-mono">VIEW TECHNICAL SPECS</span>
            <Binary className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </button>
        </div>
        
        <ClassifiedOverlay show={accessDenied} />
      </div>
    </motion.div>
  )
}

// Live system status indicator
function SystemStatus() {
  const [status, setStatus] = useState({
    cpu: 89,
    memory: 76,
    threat: 12,
    efficiency: 2400
  })
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus({
        cpu: 85 + Math.random() * 10,
        memory: 70 + Math.random() * 15,
        threat: Math.random() * 30,
        efficiency: 2300 + Math.random() * 200
      })
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-black/80 backdrop-blur-xl border border-red-900/50 rounded-lg p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <Activity className="w-5 h-5 text-red-500 animate-pulse" />
        <span className="text-sm font-mono text-red-500 font-bold">SOVREN CORE STATUS</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">CPU LOAD</p>
          <p className="text-xl font-mono font-bold text-orange-500">{status.cpu.toFixed(1)}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">MEMORY</p>
          <p className="text-xl font-mono font-bold text-purple-500">{status.memory.toFixed(1)}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">THREATS</p>
          <p className="text-xl font-mono font-bold text-red-500">{Math.floor(status.threat)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">EFFICIENCY</p>
          <p className="text-xl font-mono font-bold text-green-500">{Math.floor(status.efficiency)}%</p>
        </div>
      </div>
    </motion.div>
  )
}

// Platform features - MODIFIED TO REMOVE TECHNICAL DETAILS
const platformFeatures = [
  {
    icon: Zap,
    title: "AUTONOMOUS WARFARE",
    description: "Deploy AI agents that operate 24/7 with zero human intervention. How they work is classified. What they deliver is legendary.",
  },
  {
    icon: BrainCircuit,
    title: "ADAPTIVE DOMINATION",
    description: "Systems that evolve faster than your competition can respond. Technical details require Level 10 clearance.",
  },
  {
    icon: ShieldCheck,
    title: "SOVEREIGN CONTROL",
    description: "Complete ownership of your AI arsenal. No dependencies. No masters. No compromises.",
  },
  {
    icon: BarChart3,
    title: "PREDICTIVE SUPREMACY",
    description: "See the future. Control the future. Our methods are proprietary. Our results are undeniable.",
  },
  {
    icon: Layers,
    title: "SEAMLESS INTEGRATION",
    description: "Deploys into any infrastructure. How it integrates is our secret. That it dominates is your advantage.",
  },
  {
    icon: Settings,
    title: "CUSTOMIZABLE CORE",
    description: "Tailored to your conquest requirements. Architecture details protected under strict NDA.",
  },
]

// Benefits focused on RESULTS not methods
const platformBenefits = [
  "2400% efficiency gains (verified across 127 deployments)",
  "Eliminate competition through AI supremacy",
  "100% data sovereignty - your kingdom, your rules",
  "24/7 autonomous operations that never sleep",
  "Results that speak louder than methodology",
]

export default function SovrenAiPage() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const [threatLevel, setThreatLevel] = useState('MODERATE')
  const [accessAttempts, setAccessAttempts] = useState(0)
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      {/* Scanning lines */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
          animate={{ y: ['-100%', '100vh'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ opacity }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-32"
      >
        <div className="container max-w-7xl mx-auto text-center relative z-10">
          {/* Classification badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-red-950/50 backdrop-blur border border-red-900/50 rounded-full px-6 py-3 mb-8"
          >
            <ShieldAlert className="w-5 h-5 text-red-500 animate-pulse" />
            <span className="font-mono text-sm text-red-400 font-bold">CLASSIFIED WEAPON SYSTEM</span>
            <Lock className="w-5 h-5 text-red-500" />
          </motion.div>
          
          {/* Main title */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4">
              <GlitchText intensity="high">SOVREN AI</GlitchText>
            </h1>
            <p className="text-2xl md:text-3xl font-mono text-red-500">
              COMPOUND INTELLIGENCE WARFARE SYSTEM
            </p>
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Your autonomous digital weapon that compounds in power every 24 hours.
            While competitors chase yesterday's AI, SOVREN evolves beyond their comprehension.
          </motion.p>
          
          {/* Warning box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-black/90 border-2 border-yellow-600/50 rounded-xl p-6 max-w-2xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-yellow-500 animate-pulse" />
              <p className="font-mono text-yellow-500 font-bold">DEPLOYMENT WARNING</p>
              <AlertTriangle className="w-6 h-6 text-yellow-500 animate-pulse" />
            </div>
            <p className="text-sm text-gray-400">
              How SOVREN achieves 2400% efficiency gains is classified. Technical architecture requires NDA and biometric verification.
              What matters: it works, it dominates, it's yours.
            </p>
          </motion.div>
          
          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/sovren-ai/apply">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-lg font-bold flex items-center gap-2 group"
              >
                REQUEST DEPLOYMENT
                <Target className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAccessAttempts(prev => prev + 1)}
              className="bg-black border-2 border-red-600 hover:bg-red-950/30 px-8 py-4 rounded-lg font-bold flex items-center gap-2"
            >
              VIEW TECHNICAL SPECS
              <Lock className="w-5 h-5" />
            </motion.button>
          </motion.div>
          
          {/* Access attempts warning */}
          <AnimatePresence>
            {accessAttempts > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-sm text-red-400 font-mono"
              >
                ACCESS DENIED - {accessAttempts} ATTEMPT{accessAttempts > 1 ? 'S' : ''} LOGGED
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Live System Status */}
      <section className="py-20 px-6 relative z-10">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-4xl font-black mb-4 flex items-center gap-4">
                  <Crosshair className="w-10 h-10 text-red-500" />
                  WEAPON CAPABILITIES
                </h2>
                <p className="text-lg text-gray-400">
                  Six deployment vectors. Each delivering market domination through classified methods.
                </p>
              </motion.div>
              
              {/* Features grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {platformFeatures.map((feature, idx) => (
                  <WeaponFeatureCard key={idx} feature={feature} index={idx} />
                ))}
              </div>
            </div>
            
            {/* System status sidebar */}
            <div className="space-y-6">
              <SystemStatus />
              
              {/* IP Protection notice */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-black/80 backdrop-blur-xl border border-red-900/50 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Fingerprint className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-mono text-red-500 font-bold">SECURITY PROTOCOL</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">
                  SOVREN's core technology is protected by trade secrets and patents pending. 
                  Technical specifications available only to contracted clients under strict NDA.
                </p>
                <div className="flex items-center gap-2 text-xs text-red-400">
                  <Key className="w-4 h-4" />
                  <span className="font-mono">LEVEL 10 CLEARANCE REQUIRED</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-red-950/5 to-transparent relative z-10">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              VERIFIED DOMINANCE METRICS
            </h2>
            <p className="text-xl text-gray-400">
              Results speak louder than methodology. Numbers don't lie.
            </p>
          </motion.div>
          
          {/* Benefits with military styling */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-red-500 mb-6 flex items-center gap-3">
                <Swords className="w-8 h-8" />
                TRANSFORMATION OUTCOMES
              </h3>
              <ul className="space-y-4">
                {platformBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="relative mt-1">
                      <Check className="w-5 h-5 text-green-500" />
                      <motion.div
                        className="absolute inset-0 w-5 h-5 border border-green-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Live metrics display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-black/80 backdrop-blur-xl border-2 border-red-500/50 rounded-xl p-8">
                <h3 className="text-xl font-mono text-red-500 mb-6">REAL-TIME IMPACT METRICS</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm text-gray-400">Efficiency Gain</span>
                      <span className="text-2xl font-mono font-bold text-green-500">2,400%</span>
                    </div>
                    <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-600 to-emerald-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm text-gray-400">Decision Speed</span>
                      <span className="text-2xl font-mono font-bold text-purple-500">47x</span>
                    </div>
                    <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: '87%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm text-gray-400">Cost Reduction</span>
                      <span className="text-2xl font-mono font-bold text-orange-500">92%</span>
                    </div>
                    <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-orange-600 to-red-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Security seal */}
              <div className="absolute -bottom-4 -right-4 bg-black border-2 border-red-500 rounded-full p-3">
                <Shield className="w-8 h-8 text-red-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative z-10">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black/90 backdrop-blur-xl border-2 border-red-600 rounded-2xl p-12 md:p-16 relative overflow-hidden"
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 border-2 border-red-500 rounded-2xl"
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            <Power className="w-16 h-16 text-red-600 mx-auto mb-6" />
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              READY FOR SOVEREIGN INTELLIGENCE?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the elite who've discovered that asking "how" is less important than witnessing "what."
              SOVREN delivers results that redefine possible.
            </p>
            
            <Link href="/sovren-ai/apply">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 px-10 py-5 rounded-lg font-black text-xl flex items-center gap-3 mx-auto group"
              >
                BEGIN DEPLOYMENT SEQUENCE
                <Zap className="w-6 h-6 group-hover:animate-pulse" />
              </motion.button>
            </Link>
            
            <p className="text-sm text-red-400 mt-6 font-mono">
              WARNING: This technology is not for the timid.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
