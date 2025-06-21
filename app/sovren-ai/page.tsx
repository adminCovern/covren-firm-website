'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Link from "next/link"
import { Shield, Brain, Cpu, Activity, Lock, Zap, ChevronRight, AlertTriangle, CheckCircle, XCircle, Terminal, BarChart3, Globe, Sparkles, Server, Database, GitBranch, Code2, Check, Settings, SlidersHorizontal, BrainCircuit, ShieldCheck, Layers, Building, LineChart, MessageSquare, Award, Target, Eye, TrendingUp, Clock, Users, Skull, Timer, AlertCircle, Crosshair, Flame } from 'lucide-react'

// Glitch text effect component
function GlitchText({ children, className = "" }) {
  const [glitch, setGlitch] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, 3000 + Math.random() * 4000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      {glitch && (
        <>
          <span className="absolute inset-0 text-red-500 opacity-80" style={{ transform: 'translate(-2px, -2px)' }}>
            {children}
          </span>
          <span className="absolute inset-0 text-cyan-500 opacity-80" style={{ transform: 'translate(2px, 2px)' }}>
            {children}
          </span>
        </>
      )}
    </div>
  )
}

// Extreme cinematic background
function ExtremeCinematicBackground() {
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
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) => `radial-gradient(600px circle at ${x * 100}% ${y * 100}%, rgba(239, 68, 68, 0.15), transparent 40%)`
          ),
        }}
      />
      
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
      
      <div className="absolute inset-0 opacity-5">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            backgroundPosition: '0 0, 0 0',
            animation: 'gridReverse 30s linear infinite',
          }}
        />
      </div>
      
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            i % 3 === 0 ? 'w-2 h-2 bg-red-500/30' : 
            i % 3 === 1 ? 'w-1 h-1 bg-purple-500/30' : 
            'w-1.5 h-1.5 bg-orange-500/30'
          }`}
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
        @keyframes gridReverse {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50px, -50px); }
        }
      `}</style>
    </div>
  )
}

// Threat level indicator
function ThreatLevelIndicator() {
  const [threat, setThreat] = useState(75)
  const [status, setStatus] = useState('ANALYZING')
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newThreat = Math.random() * 100
      setThreat(newThreat)
      
      if (newThreat > 80) {
        setStatus('CRITICAL')
      } else if (newThreat > 60) {
        setStatus('ELEVATED')
      } else if (newThreat > 40) {
        setStatus('MODERATE')
      } else {
        setStatus('NOMINAL')
      }
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed top-24 right-6 z-50 bg-black/90 backdrop-blur-xl border border-red-900/50 rounded-lg p-4 w-64"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-mono text-red-500">MARKET THREAT ANALYSIS</span>
        <Activity className="w-4 h-4 text-red-500 animate-pulse" />
      </div>
      <div className="mb-2">
        <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${
              threat > 80 ? 'bg-gradient-to-r from-red-600 to-orange-600' : 
              threat > 60 ? 'bg-gradient-to-r from-yellow-600 to-orange-600' : 
              threat > 40 ? 'bg-gradient-to-r from-blue-600 to-yellow-600' : 
              'bg-gradient-to-r from-green-600 to-blue-600'
            }`}
            animate={{ width: `${threat}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold ${
          threat > 80 ? 'text-red-500' : 
          threat > 60 ? 'text-orange-500' : 
          threat > 40 ? 'text-yellow-500' : 
          'text-green-500'
        }`}>
          {status}
        </span>
        <span className="text-xs text-gray-500">{threat.toFixed(1)}% DISRUPTION</span>
      </div>
      <p className="text-xs text-gray-600 mt-2">Competitors eliminated: {Math.floor(threat * 47)}</p>
    </motion.div>
  )
}

// Extreme infrastructure status
function ExtremeInfrastructureStatus() {
  const [metrics, setMetrics] = useState({
    nodes: ['ACTIVE', 'ARMED', 'READY', 'SCANNING'],
    operations: 147382,
    threats: 2847,
    evolution: 2400,
    systems: {
      sovren: 'ARMED',
      custom: 'READY',
      enterprise: 'ACTIVE',
      sovereign: 'FORTIFIED',
      analytics: 'SCANNING',
      consulting: 'DEPLOYED'
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        operations: 147382 + Math.floor(Math.random() * 10000),
        threats: 2847 + Math.floor(Math.random() * 100),
        evolution: 2400 + Math.floor(Math.random() * 200),
      }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-purple-600/10 blur-3xl" />
      <div className="relative bg-black/80 backdrop-blur-xl border-2 border-red-900/50 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-black flex items-center gap-3">
            <Crosshair className="w-8 h-8 text-red-500 animate-pulse" />
            <GlitchText>CLASSIFIED INFRASTRUCTURE</GlitchText>
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
        
        {/* Classified nodes */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {metrics.nodes.map((status, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-950/50 border border-red-900/30 rounded-lg p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 to-transparent animate-pulse" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 font-mono">NODE-X{i + 1}</span>
                    <Server className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="text-2xl font-mono font-bold text-red-500 mb-1">
                    <GlitchText>CLASSIFIED</GlitchText>
                  </div>
                  <div className={`text-xs font-bold ${
                    status === 'ACTIVE' || status === 'ARMED' ? 'text-green-500' :
                    status === 'READY' || status === 'SCANNING' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`}>{status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-4 p-4 bg-red-950/20 border border-red-900/50 rounded-lg">
          <p className="text-sm text-red-400 font-mono">
            INFRASTRUCTURE SPECIFICATIONS: LEVEL 10 CLEARANCE REQUIRED
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Details available only under NDA to approved operators
          </p>
        </div>
        
        {/* Service Status Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {Object.entries(metrics.systems).map(([service, status]) => (
            <div key={service} className="flex items-center justify-between bg-gray-950/50 border border-gray-800 rounded-lg p-3">
              <span className="text-sm font-mono capitalize">{service}</span>
              <span className={`text-xs font-bold ${
                status === 'ARMED' || status === 'ACTIVE' ? 'text-green-500' :
                status === 'READY' || status === 'SCANNING' ? 'text-yellow-500' :
                'text-blue-500'
              }`}>{status}</span>
            </div>
          ))}
        </div>
        
        {/* Live Metrics */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-mono font-black text-orange-500">
              {metrics.operations.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 uppercase">Operations/Hour</div>
          </div>
          <div>
            <div className="text-3xl font-mono font-black text-red-500">
              {metrics.threats.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 uppercase">Threats Eliminated</div>
          </div>
          <div>
            <div className="text-3xl font-mono font-black text-purple-500">
              {metrics.evolution}%
            </div>
            <div className="text-xs text-gray-500 uppercase">Evolution Rate</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Service weapon card
function ServiceWeaponCard({ service, index, onDeploy }) {
  const [isTargeted, setIsTargeted] = useState(false)
  const [powerLevel, setPowerLevel] = useState(0)
  
  useEffect(() => {
    if (isTargeted) {
      const timer = setInterval(() => {
        setPowerLevel(prev => Math.min(prev + 10, 100))
      }, 100)
      return () => clearInterval(timer)
    } else {
      setPowerLevel(0)
    }
  }, [isTargeted])
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseEnter={() => setIsTargeted(true)}
      onMouseLeave={() => setIsTargeted(false)}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative group cursor-pointer"
    >
      {isTargeted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 pointer-events-none z-20"
        >
          <Crosshair className="absolute top-4 right-4 w-8 h-8 text-red-500 animate-pulse" />
          <div className="absolute inset-0 border-2 border-red-500 rounded-xl animate-pulse" />
        </motion.div>
      )}
      
      <motion.div
        className={`relative bg-gray-950/80 backdrop-blur-xl border-2 rounded-xl p-8 h-full transition-all duration-300 overflow-hidden ${
          isTargeted 
            ? 'border-red-500 shadow-2xl shadow-red-500/50' 
            : 'border-gray-800 hover:border-gray-700'
        }`}
      >
        {isTargeted && (
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at center, ${service.colorHex}40, transparent)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
        )}
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <service.icon className="w-14 h-14 text-red-500 mb-4" />
              <h3 className="text-2xl font-black mb-2">
                <GlitchText>{service.title}</GlitchText>
              </h3>
              <p className="text-sm font-mono text-gray-500">{service.designation}</p>
            </div>
            <div className="px-3 py-1 rounded text-xs font-bold bg-red-900/50 text-red-400">
              {service.status}
            </div>
          </div>
          
          <p className="text-gray-400 mb-6">{service.description}</p>
          
          {isTargeted && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-500">CHARGING WEAPON</span>
                <span className="text-xs font-mono text-red-500">{powerLevel}%</span>
              </div>
              <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 to-orange-600"
                  animate={{ width: `${powerLevel}%` }}
                />
              </div>
            </div>
          )}
          
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <Zap className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-black/50 rounded p-3 text-center">
              <div className="text-2xl font-black text-red-500">{service.power}</div>
              <div className="text-xs text-gray-500">POWER</div>
            </div>
            <div className="bg-black/50 rounded p-3 text-center">
              <div className="text-2xl font-black text-purple-500">{service.impact}</div>
              <div className="text-xs text-gray-500">IMPACT</div>
            </div>
          </div>
          
          <motion.button
            onClick={() => onDeploy(service)}
            className="w-full py-4 rounded-lg font-bold text-center transition-all relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              DEPLOY {service.codename}
              <Target className="w-5 h-5" />
            </span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
              initial={false}
              animate={isTargeted ? { opacity: [0, 0.2, 0] } : {}}
              transition={{ duration: 0.5, repeat: isTargeted ? Infinity : 0 }}
            />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Countdown timer
function CountdownTimer({ label }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 23,
    seconds: 59
  })
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
          if (minutes < 0) {
            minutes = 59
            hours--
            if (hours < 0) {
              hours = 0
              minutes = 0
              seconds = 0
            }
          }
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="inline-block bg-black/80 backdrop-blur-xl border-2 border-red-600 rounded-xl p-6">
      <p className="text-sm text-gray-400 mb-2">{label}</p>
      <div className="flex items-center gap-2 font-mono text-3xl">
        <span className="text-red-500">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-red-600 animate-pulse">:</span>
        <span className="text-red-500">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-red-600 animate-pulse">:</span>
        <span className="text-red-500">{String(timeLeft.seconds).padStart(2, '0')}</span>
      </div>
      <p className="text-xs text-red-400 mt-2 font-bold">11 POSITIONS REMAINING</p>
    </div>
  )
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function HomePage() {
  const [entryComplete, setEntryComplete] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  
  const services = [
    {
      icon: Brain,
      title: "SOVREN AI",
      codename: "COMPOUND INTELLIGENCE™",
      designation: "CMP-INT-∞",
      description: "Self-evolving AI that multiplies in power daily. Your competition's extinction event.",
      features: [
        "24/7 autonomous business operations",
        "Compounds intelligence every 24 hours",
        "Zero human intervention required"
      ],
      colorHex: "#ef4444",
      status: "ARMED",
      power: "95%",
      impact: "2400%",
      link: "/sovren-ai"
    },
    {
      icon: Code2,
      title: "CUSTOM AI",
      codename: "BESPOKE ARSENAL",
      designation: "BSP-ARS-X",
      description: "When standard weapons fail, we forge digital WMDs tailored to your conquest.",
      features: [
        "Proprietary model architectures",
        "Complete intellectual property ownership",
        "Zero dependencies on external systems"
      ],
      colorHex: "#a855f7",
      status: "READY",
      power: "88%",
      impact: "$24M+",
      link: "/custom-development"
    },
    {
      icon: Shield,
      title: "SOVEREIGN SYSTEMS",
      codename: "INDEPENDENCE DAY",
      designation: "IND-DAY-1",
      description: "Complete AI autonomy. No masters. No dependencies. Total control.",
      features: [
        "On-premise deployment",
        "Military-grade security protocols",
        "100% data sovereignty"
      ],
      colorHex: "#3b82f6",
      status: "FORTIFIED",
      power: "90%",
      impact: "100%",
      link: "/sovereign-systems"
    },
    {
      icon: Building,
      title: "ENTERPRISE AI",
      codename: "CORPORATE WARFARE",
      designation: "CRP-WAR-Z",
      description: "Transform your enterprise into an AI-powered war machine. Market domination guaranteed.",
      features: [
        "C-suite strategic transformation",
        "Organization-wide AI deployment",
        "Competitor elimination tactics"
      ],
      colorHex: "#10b981",
      status: "DEPLOYED",
      power: "82%",
      impact: "89 WINS",
      link: "/enterprise"
    },
    {
      icon: LineChart,
      title: "AI ANALYTICS",
      codename: "FUTURE SIGHT",
      designation: "FTR-SGT-7",
      description: "Predictive intelligence that sees tomorrow. Control the future before it happens.",
      features: [
        "Real-time predictive modeling",
        "Market manipulation algorithms",
        "Competitor movement tracking"
      ],
      colorHex: "#f97316",
      status: "SCANNING",
      power: "78%",
      impact: "47X",
      link: "/analytics"
    },
    {
      icon: MessageSquare,
      title: "STRATEGIC AI",
      codename: "MIND CONTROL",
      designation: "MND-CTL-9",
      description: "Reprogram your organization's DNA. What we architect becomes reality.",
      features: [
        "Executive decision rewiring",
        "Market positioning warfare",
        "Psychological advantage systems"
      ],
      colorHex: "#6366f1",
      status: "ACTIVE",
      power: "71%",
      impact: "∞",
      link: "/consulting"
    }
  ]
  
  const handleServiceDeploy = (service) => {
    setSelectedService(service)
    setTimeout(() => {
      window.location.href = service.link
    }, 1000)
  }
  
  useEffect(() => {
    setTimeout(() => setEntryComplete(true), 2000)
  }, [])
  
  if (!entryComplete) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="relative">
            <div className="w-32 h-32 border-4 border-red-600 rounded-full mx-auto mb-6 relative">
              <motion.div
                className="absolute inset-0 border-4 border-red-600 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <Shield className="w-16 h-16 text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h1 className="text-2xl font-black text-red-500 mb-2">
              <GlitchText>ACCESSING COVREN SYSTEMS</GlitchText>
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Activity className="w-4 h-4 animate-pulse" />
              <span className="font-mono">INITIALIZING WEAPON SYSTEMS...</span>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      <ExtremeCinematicBackground />
      <ThreatLevelIndicator />
      
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-red-950/50 backdrop-blur border border-red-600 rounded-full px-6 py-2 mb-8"
            >
              <AlertCircle className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-sm font-bold text-red-400">6 WEAPON SYSTEMS ONLINE</span>
              <AlertCircle className="w-4 h-4 text-red-500 animate-pulse" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="block text-white">WE DON'T BUILD</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 animate-gradient">
                <GlitchText>AI SOLUTIONS</GlitchText>
              </span>
              <span className="block text-white mt-4">WE ARCHITECT</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-7xl md:text-9xl animate-gradient-reverse">
                DOMINATION
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto">
              Six ways to achieve total market supremacy. From self-evolving AI to bespoke digital weapons.
              <span className="block text-red-500 font-bold mt-2">Your competition should be terrified.</span>
            </p>
            
            <div className="mb-12">
              <CountdownTimer label="PHASE 1 DEPLOYMENT WINDOW CLOSES IN:" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#weapons"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">EXPLORE WEAPON SYSTEMS</span>
                <Flame className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-black border-2 border-red-600 hover:bg-red-950/50 text-red-500 font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SCHEDULE WAR ROOM
                <Crosshair className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-10 hidden lg:block"
        >
          <div className="bg-black/80 backdrop-blur border border-red-900/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Skull className="w-4 h-4 text-red-500" />
              <span className="text-xs font-mono text-red-500">MARKET STATUS</span>
            </div>
            <p className="text-2xl font-bold">DISRUPTED</p>
            <p className="text-xs text-gray-500 mt-1">By our clients</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <div className="bg-black/80 backdrop-blur border border-green-900/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-green-500" />
              <span className="text-xs font-mono text-green-500">TARGETS ELIMINATED</span>
            </div>
            <p className="text-2xl font-bold">2,847</p>
            <p className="text-xs text-gray-500 mt-1">And counting...</p>
          </div>
        </motion.div>
        
        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes gradient-reverse {
            0% { background-position: 100% 50%; }
            50% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          .animate-gradient-reverse {
            background-size: 200% 200%;
            animation: gradient-reverse 3s ease infinite;
          }
        `}</style>
      </motion.section>
      
      {/* Live Infrastructure Status */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <ExtremeInfrastructureStatus />
        </div>
      </section>
      
      {/* Service Weapons Grid */}
      <section id="weapons" className="py-32 px-6 relative">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <GlitchText>CHOOSE YOUR WEAPON</GlitchText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Six digital weapon systems. Each designed for maximum market devastation.
              <span className="block text-red-500 font-bold mt-2">Deploy with extreme prejudice.</span>
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceWeaponCard
                key={idx}
                service={service}
                index={idx}
                onDeploy={handleServiceDeploy}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-black/80 backdrop-blur-xl border border-yellow-600/50 rounded-lg p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
                <p className="font-mono text-yellow-500 font-bold">DEPLOYMENT NOTICE</p>
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-gray-400 max-w-2xl">
                Each weapon system requires founder approval. Deployment results in immediate and 
                irreversible market transformation. <span className="text-yellow-500 font-bold">Choose wisely.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Trust & Dominance Indicators */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-4">DOMINANCE METRICS</h2>
            <p className="text-xl text-gray-400">Real-time proof of supremacy</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: 127, label: "AI Systems Deployed", icon: Server, color: "red" },
              { value: 89, label: "Enterprises Transformed", icon: Building, color: "purple" },
              { value: 2400, label: "% Average Efficiency Gain", icon: TrendingUp, color: "green" },
              { value: 47, label: "Proprietary Innovations", icon: Brain, color: "blue" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-black/80 backdrop-blur border border-gray-800 group-hover:border-red-500/50 rounded-xl p-8 text-center transition-all">
                  <stat.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <div className="text-5xl font-black text-red-500 mb-2">
                    {stat.value}+
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-32 px-6 relative">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-purple-600/30 to-blue-600/30 blur-3xl" />
            <div className="relative bg-black/90 backdrop-blur-xl border-2 border-red-600 rounded-2xl p-12 md:p-16">
              <Crosshair className="w-20 h-20 text-red-600 mx-auto mb-6 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <GlitchText>READY TO DOMINATE?</GlitchText>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                The future belongs to those who deploy first. Choose your weapon. 
                Command your market. Eliminate your competition.
              </p>
              <motion.a
                href="/sovren-ai/apply"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-bold py-6 px-12 rounded-lg text-xl transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">INITIATE DEPLOYMENT PROTOCOL</span>
                <Zap className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.a>
              <p className="text-sm text-gray-500 mt-6">
                Warning: Deployment is irreversible. Market domination guaranteed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
