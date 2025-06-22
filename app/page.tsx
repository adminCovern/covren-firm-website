'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Link from "next/link"
import { Shield, Brain, Cpu, Activity, Lock, Zap, ChevronRight, AlertTriangle, CheckCircle, XCircle, Terminal, BarChart3, Globe, Sparkles, Server, Database, GitBranch, Code2, Check, Settings, SlidersHorizontal, BrainCircuit, ShieldCheck, Layers, Building, LineChart, MessageSquare, Award, Target, Eye, TrendingUp, Clock, Users, Skull, Timer, AlertCircle, Crosshair, Flame, ArrowRight, Gauge, Binary, Network, Atom, Boxes, CircuitBoard, Wifi, Power, Radar, Satellite, Command, Fingerprint, Key, ShieldAlert, ShieldOff, Swords, Bomb, Navigation, Compass, Map, Anchor, Radio } from 'lucide-react'

// Disable SSR for window-dependent components
const isClient = typeof window !== 'undefined'

// Glitch text effect component
function GlitchText({ children, className = "", intensity = "medium" }) {
  const [glitch, setGlitch] = useState(false)
  
  useEffect(() => {
    const baseInterval = intensity === "high" ? 1000 : intensity === "low" ? 5000 : 3000
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, baseInterval + Math.random() * 2000)
    
    return () => clearInterval(interval)
  }, [intensity])
  
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      {glitch && (
        <>
          <span 
            className="absolute inset-0 text-red-500 opacity-70 z-0" 
            style={{ 
              transform: `translate(-2px, -1px)`,
              clipPath: `inset(${Math.random() * 50}% 0 ${Math.random() * 50}% 0)`
            }}
          >
            {children}
          </span>
          <span 
            className="absolute inset-0 text-cyan-500 opacity-70 z-0" 
            style={{ 
              transform: `translate(2px, 1px)`,
              clipPath: `inset(${Math.random() * 50}% 0 ${Math.random() * 50}% 0)`
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  )
}

// Matrix rain effect - simplified for performance
function MatrixRain() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    if (!isClient) return
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}COVREN"
    const chars = matrix.split("")
    const fontSize = 10
    const columns = canvas.width / fontSize
    const drops = []
    
    for(let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * -100)
    }
    
    let lastTime = 0
    const fps = 30
    const fpsInterval = 1000 / fps
    
    function draw(currentTime) {
      const deltaTime = currentTime - lastTime
      
      if (deltaTime > fpsInterval) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        ctx.fillStyle = '#ff0000'
        ctx.font = fontSize + 'px monospace'
        
        for(let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)]
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)
          
          if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
        }
        
        lastTime = currentTime
      }
      
      requestAnimationFrame(draw)
    }
    
    const animationId = requestAnimationFrame(draw)
    
    window.addEventListener('resize', resizeCanvas)
    
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])
  
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-20" style={{ zIndex: 1 }} />
}

// Background with animated gradients
function CinematicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-purple-950/20" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />
    </div>
  )
}

// Threat Detection System - Fixed positioning
function ThreatDetectionSystem() {
  const [threats, setThreats] = useState([])
  const [systemStatus, setSystemStatus] = useState('MONITORING')
  const [threatLevel, setThreatLevel] = useState(58.1)
  
  useEffect(() => {
    const interval = setInterval(() => {
      const threatTypes = ['COMPETITOR', 'MARKET SHIFT', 'INTRUSION', 'VULNERABILITY']
      const newThreat = {
        id: Date.now(),
        type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
        level: 50 + Math.random() * 40,
        location: `SECTOR ${Math.floor(Math.random() * 12) + 1}`,
        eta: Math.floor(Math.random() * 300) + 60,
      }
      
      setThreats(prev => [...prev.slice(-3), newThreat])
      setThreatLevel(prev => Math.min(100, prev + (Math.random() * 4 - 2)))
      
      if (threatLevel > 80) {
        setSystemStatus('CRITICAL')
      } else if (threatLevel > 60) {
        setSystemStatus('ELEVATED')
      } else {
        setSystemStatus('MONITORING')
      }
    }, 3000)
    
    return () => clearInterval(interval)
  }, [threatLevel])
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-24 right-6 w-96 hidden xl:block"
      style={{ zIndex: 40 }}
    >
      <div className="bg-black/90 backdrop-blur-xl border border-red-500/50 rounded-lg overflow-hidden shadow-2xl shadow-red-500/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-950 to-black p-4 border-b border-red-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
              <span className="text-sm font-mono text-red-500 font-bold">THREAT DETECTION MATRIX</span>
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded ${
              systemStatus === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
              systemStatus === 'ELEVATED' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-green-500/20 text-green-400'
            }`}>
              {systemStatus}
            </span>
          </div>
          
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500">System Load</span>
              <span className="text-red-400 font-mono">{threatLevel.toFixed(1)}%</span>
            </div>
            <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-600 to-orange-600"
                animate={{ width: `${threatLevel}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
        
        {/* Active protocols */}
        <div className="p-4 border-b border-red-500/20">
          <p className="text-xs font-mono text-gray-500 mb-2">ACTIVE PROTOCOLS</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: 'FIREWALL', strength: 98 },
              { name: 'AI SHIELD', strength: 100 },
              { name: 'QUANTUM ENCRYPTION', strength: 95 },
              { name: 'NEURAL DEFENSE', strength: 87 }
            ].map((protocol, i) => (
              <div key={i} className="bg-gray-900/50 rounded p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400">{protocol.name}</span>
                  <span className="text-xs font-bold text-green-500">{protocol.strength}%</span>
                </div>
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-600 to-emerald-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${protocol.strength}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Threat list */}
        <div className="p-4">
          <p className="text-xs font-mono text-gray-500 mb-2">LIVE THREAT FEED</p>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            <AnimatePresence mode="popLayout">
              {threats.map((threat) => (
                <motion.div
                  key={threat.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gray-900/50 rounded p-2 border border-gray-800"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-300">{threat.type}</span>
                    <span className={`text-xs font-mono ${
                      threat.level > 80 ? 'text-red-500' :
                      threat.level > 60 ? 'text-yellow-500' :
                      'text-green-500'
                    }`}>
                      {threat.level.toFixed(0)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                    <span>{threat.location}</span>
                    <span>ETA: {threat.eta}s</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-900/50 p-3 flex justify-around text-center">
          <div>
            <p className="text-xs text-gray-500">BLOCKED</p>
            <p className="text-sm font-bold text-red-500">2,847</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">ACTIVE</p>
            <p className="text-sm font-bold text-yellow-500">{threats.length}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">NEUTRALIZED</p>
            <p className="text-sm font-bold text-green-500">99.7%</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Service Card Component
function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group h-full"
    >
      <div className={`relative bg-black/80 backdrop-blur-xl border-2 rounded-xl h-full transition-all duration-300 overflow-hidden ${
        isHovered ? 'border-red-500 shadow-2xl shadow-red-500/30' : 'border-gray-800'
      }`}>
        {/* Background effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <service.icon className="w-12 h-12 text-red-500" />
            </motion.div>
            <div className={`px-3 py-1 rounded text-xs font-bold ${service.statusColor}`}>
              {service.status}
            </div>
          </div>
          
          <h3 className="text-2xl font-black mb-2">
            <GlitchText intensity={isHovered ? "high" : "low"}>{service.title}</GlitchText>
          </h3>
          <p className="text-sm font-mono text-gray-500 mb-4">{service.designation}</p>
          <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
          
          {/* Features */}
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <Zap className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-red-500">{service.power}</div>
              <div className="text-xs text-gray-500">POWER</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-500">{service.range}</div>
              <div className="text-xs text-gray-500">RANGE</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-500">{service.impact}</div>
              <div className="text-xs text-gray-500">IMPACT</div>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link href={service.link}>
            <motion.button
              className="w-full py-3 rounded-lg font-bold text-center transition-all relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                DEPLOY {service.codename}
                <ArrowRight className="w-4 h-4" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
                style={{ opacity: 0.1 }}
              />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// Stats counter
function AnimatedStat({ value, label, icon: Icon, color }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    if (!isClient) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [isVisible])
  
  useEffect(() => {
    if (isVisible && count < value) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + Math.ceil(value / 50), value))
      }, 20)
      return () => clearTimeout(timer)
    }
  }, [isVisible, count, value])
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-black/60 backdrop-blur border border-gray-800 group-hover:border-red-500/50 rounded-xl p-6 text-center transition-all">
        <Icon className={`w-12 h-12 ${color} mx-auto mb-4`} />
        <div className={`text-4xl font-black ${color} mb-2`}>
          {count}+
        </div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </motion.div>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null

  const services = [
    {
      icon: Brain,
      title: "SOVREN AI",
      codename: "COMPOUND",
      designation: "CMP-INT-∞",
      status: "ARMED",
      statusColor: "bg-green-900/50 text-green-400",
      description: "Self-evolving AI that multiplies in power daily. While competitors depreciate, SOVREN compounds.",
      features: [
        "24/7 autonomous operations",
        "Compounds intelligence daily",
        "Zero human intervention"
      ],
      gradient: "from-red-600/20 to-orange-600/20",
      power: "95%",
      range: "∞",
      impact: "2400%",
      link: "/sovren-ai"
    },
    {
      icon: Code2,
      title: "CUSTOM AI",
      codename: "BESPOKE",
      designation: "BSP-ARS-X",
      status: "READY",
      statusColor: "bg-yellow-900/50 text-yellow-400",
      description: "When standard solutions fail, we forge digital weapons tailored to your conquest.",
      features: [
        "Proprietary architectures",
        "Complete IP ownership",
        "Zero dependencies"
      ],
      gradient: "from-purple-600/20 to-pink-600/20",
      power: "88%",
      range: "CUSTOM",
      impact: "$24M+",
      link: "/custom-development"
    },
    {
      icon: Shield,
      title: "SOVEREIGN SYSTEMS",
      codename: "FORTRESS",
      designation: "IND-DAY-1",
      status: "FORTIFIED",
      statusColor: "bg-blue-900/50 text-blue-400",
      description: "Complete AI independence. No masters. No dependencies. Your empire, your rules.",
      features: [
        "On-premise deployment",
        "Military-grade security",
        "100% data sovereignty"
      ],
      gradient: "from-blue-600/20 to-cyan-600/20",
      power: "90%",
      range: "LOCAL",
      impact: "100%",
      link: "/sovereign-systems"
    },
    {
      icon: Building,
      title: "ENTERPRISE AI",
      codename: "WARFARE",
      designation: "CRP-WAR-Z",
      status: "DEPLOYED",
      statusColor: "bg-purple-900/50 text-purple-400",
      description: "Transform your enterprise into an AI-powered war machine. Dominate or be dominated.",
      features: [
        "C-suite transformation",
        "Organization-wide AI",
        "Legacy annihilation"
      ],
      gradient: "from-green-600/20 to-emerald-600/20",
      power: "82%",
      range: "ENTERPRISE",
      impact: "89 WINS",
      link: "/enterprise"
    },
    {
      icon: LineChart,
      title: "AI ANALYTICS",
      codename: "FORESIGHT",
      designation: "FTR-SGT-7",
      status: "SCANNING",
      statusColor: "bg-orange-900/50 text-orange-400",
      description: "See the future. Control the future. Predictive intelligence that eliminates uncertainty.",
      features: [
        "Real-time prediction",
        "Market manipulation",
        "Future visualization"
      ],
      gradient: "from-orange-600/20 to-yellow-600/20",
      power: "78%",
      range: "TEMPORAL",
      impact: "47X",
      link: "/analytics"
    },
    {
      icon: MessageSquare,
      title: "STRATEGIC AI",
      codename: "MINDCTRL",
      designation: "MND-CTL-9",
      status: "ACTIVE",
      statusColor: "bg-indigo-900/50 text-indigo-400",
      description: "Reprogram your organization's DNA. Turn vision into inevitability.",
      features: [
        "Executive optimization",
        "Market positioning",
        "Strategic generation"
      ],
      gradient: "from-indigo-600/20 to-purple-600/20",
      power: "71%",
      range: "MENTAL",
      impact: "∞",
      link: "/consulting"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MatrixRain />
      <CinematicBackground />
      <ThreatDetectionSystem />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container max-w-7xl mx-auto text-center relative z-10">
          {/* Status badges */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-green-950/50 backdrop-blur border border-green-500/50 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-green-400">SYSTEMS ONLINE</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-red-950/50 backdrop-blur border border-red-500/50 rounded-full px-4 py-2">
              <Crosshair className="w-4 h-4 text-red-500" />
              <span className="text-xs font-bold text-red-400">6 WEAPONS ARMED</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-950/50 backdrop-blur border border-yellow-500/50 rounded-full px-4 py-2">
              <AlertCircle className="w-4 h-4 text-yellow-500 animate-pulse" />
              <span className="text-xs font-mono text-yellow-400">TARGETS IDENTIFIED</span>
            </div>
          </motion.div>
          
          {/* Main headline */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              className="block mb-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              WE DON'T
            </motion.span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <GlitchText intensity="high">SOLVE PROBLEMS</GlitchText>
            </motion.span>
            <motion.span
              className="block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              WE
            </motion.span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
            >
              ELIMINATE THEM
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-400 mb-4">
              Six digital weapon systems. Each engineered for total market supremacy.
            </p>
            <p className="text-lg md:text-xl text-red-500 font-bold">
              Your competition's nightmares have names. We built them all.
            </p>
          </motion.div>
          
          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="mb-12 flex justify-center"
          >
            <div className="bg-black/80 backdrop-blur-xl border-2 border-red-500/50 rounded-xl p-6 inline-block">
              <p className="text-sm text-gray-400 mb-3">PHASE 1 DEPLOYMENT WINDOW</p>
              <div className="flex items-center gap-3 font-mono text-3xl md:text-4xl">
                <div className="text-center">
                  <div className="text-red-500 font-bold">14</div>
                  <div className="text-xs text-gray-500 mt-1">DAYS</div>
                </div>
                <span className="text-red-500 animate-pulse">:</span>
                <div className="text-center">
                  <div className="text-red-500 font-bold">23</div>
                  <div className="text-xs text-gray-500 mt-1">HOURS</div>
                </div>
                <span className="text-red-500 animate-pulse">:</span>
                <div className="text-center">
                  <div className="text-red-500 font-bold">45</div>
                  <div className="text-xs text-gray-500 mt-1">MINS</div>
                </div>
                <span className="text-red-500 animate-pulse">:</span>
                <div className="text-center">
                  <div className="text-red-500 font-bold">10</div>
                  <div className="text-xs text-gray-500 mt-1">SECS</div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-red-400 font-bold">11 POSITIONS REMAINING</p>
                <div className="mt-2 h-2 bg-gray-900 rounded-full overflow-hidden">
                  <div className="h-full w-[63%] bg-gradient-to-r from-red-600 to-orange-600" />
                </div>
                <p className="text-xs text-gray-500 mt-1">19 of 30 positions filled</p>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#weapons"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all text-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE ARSENAL
              <Crosshair className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </motion.a>
            
            <motion.a
              href="/contact"
              className="bg-black border-2 border-red-600 hover:bg-red-950/30 text-red-500 font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              INITIATE CONTACT
              <Terminal className="w-5 h-5" />
            </motion.a>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-6 h-6 text-gray-500 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Side panels */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-10 hidden lg:block"
        >
          <div className="bg-black/80 backdrop-blur-xl border border-red-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Skull className="w-5 h-5 text-red-500" />
              <span className="text-sm font-mono text-red-500">THREAT LEVEL</span>
            </div>
            <p className="text-2xl font-black">CRITICAL</p>
            <p className="text-xs text-gray-500 mt-1">Markets disrupted: 47</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <div className="bg-black/80 backdrop-blur-xl border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-green-500" />
              <span className="text-sm font-mono text-green-500">ELIMINATIONS</span>
            </div>
            <p className="text-2xl font-black">2,847</p>
            <p className="text-xs text-gray-500 mt-1">Competition neutralized</p>
          </div>
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section id="weapons" className="py-20 px-6 relative">
        <div className="container max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Crosshair className="w-8 h-8 text-red-500" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
                <GlitchText>WEAPON SELECTION PROTOCOL</GlitchText>
              </h2>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Crosshair className="w-8 h-8 text-red-500" />
              </motion.div>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Six paths to absolute dominance. Each system engineered to obliterate specific market weaknesses.
            </p>
            <p className="text-md md:text-lg text-red-500 font-bold mt-2">
              Warning: Deployment results in irreversible competitive advantages.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} index={idx} />
            ))}
          </div>
          
          {/* Deployment Protocol */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <div className="bg-black/80 backdrop-blur-xl border-2 border-yellow-500/50 rounded-xl p-8 max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 animate-pulse" />
                <p className="text-xl font-mono text-yellow-500 font-bold">DEPLOYMENT PROTOCOL</p>
                <AlertTriangle className="w-6 h-6 text-yellow-500 animate-pulse" />
              </div>
              <p className="text-gray-300 mb-2">
                Each weapon system requires founder-level clearance. Deployment triggers immediate market transformation protocols.
              </p>
              <p className="text-yellow-500 font-bold">
                Once initiated, there is no rollback. Choose with conviction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <BarChart3 className="w-10 h-10 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black mb-2">DOMINANCE VERIFIED</h2>
            <p className="text-lg text-gray-400">Real-time proof of market supremacy.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedStat value={127} label="AI Systems Deployed" icon={Server} color="text-red-500" />
            <AnimatedStat value={89} label="Enterprises Transformed" icon={Building} color="text-purple-500" />
            <AnimatedStat value={2400} label="% Efficiency Gains" icon={TrendingUp} color="text-green-500" />
            <AnimatedStat value={47} label="Proprietary Innovations" icon={Brain} color="text-blue-500" />
          </div>
          
          {/* Additional metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-black/60 backdrop-blur-xl border border-gray-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">OPERATIONAL EXCELLENCE</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <p className="text-sm text-gray-400 mt-1">Autonomous Operations</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-500">99.99%</div>
                <p className="text-sm text-gray-400 mt-1">System Uptime</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-500">&lt;3ms</div>
                <p className="text-sm text-gray-400 mt-1">Response Time</p>
              </div>
            </div>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-6">Trusted by industry titans who understand that second place is first loser.</p>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-purple-600/10 to-blue-600/10" />
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black/90 backdrop-blur-xl border-2 border-red-600 rounded-2xl p-12 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 border-2 border-red-500 rounded-2xl"
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            <Flame className="w-16 h-16 text-red-600 mx-auto mb-6" />
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <GlitchText intensity="high">READY TO DOMINATE?</GlitchText>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              The future belongs to those who strike first. Every second you hesitate, your competition gets stronger.
            </p>
            <p className="text-xl md:text-2xl text-red-500 font-bold mb-8">
              What are you waiting for?
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-yellow-500 animate-pulse" />
                <span className="text-sm text-gray-400">11 positions left</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-400">2,847 competitors eliminated</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-400">2400% avg gains</span>
              </div>
            </div>
            
            <motion.a
              href="/sovren-ai"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-black py-5 px-10 rounded-lg text-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DEPLOY WEAPON SYSTEMS
              <Zap className="w-6 h-6" />
            </motion.a>
            
            <p className="text-sm text-red-400 mt-6 font-mono animate-pulse">
              WARNING: This decision will change everything.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
