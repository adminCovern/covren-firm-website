'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from "next/link"
import { 
  Shield, Brain, Cpu, Activity, Lock, Zap, ChevronRight, AlertTriangle, 
  Terminal, BarChart3, Server, Database, Code2, Building, LineChart, 
  MessageSquare, Target, TrendingUp, Clock, Users, Crosshair, Flame, 
  Power, Fingerprint, Key, Timer, ArrowRight, Eye, Award, Sparkles,
  Layers, Globe, Rocket, Binary, Network, ShieldCheck, Swords
} from 'lucide-react'

// Disable SSR for window-dependent components
const isClient = typeof window !== 'undefined'

// Powerful text animation - no glitches, just impact
function PowerText({ children, className = "", delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  )
}

// Epic background that actually works
function DominationBackground() {
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    if (!isClient) return
    
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
      setCoordinates({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Dynamic gradient that follows mouse */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: `radial-gradient(circle 800px at ${50 + coordinates.x}% ${50 + coordinates.y}%, rgba(239, 68, 68, 0.15), transparent 40%)`
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.1 }}
        />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(239, 68, 68, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239, 68, 68, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
            }}
          />
        </div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-30" />
      </div>
    </>
  )
}

// Navigation with impact
function NavigationBar() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-red-900/50' : ''
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Shield className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-black">
              COVREN<span className="text-red-500">FIRM</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/sovren-ai" className="hover:text-red-500 transition-colors font-semibold">
              SOVREN AI
            </Link>
            <Link href="/services" className="hover:text-red-500 transition-colors font-semibold">
              SERVICES
            </Link>
            <Link href="/about" className="hover:text-red-500 transition-colors font-semibold">
              ABOUT
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2 rounded-lg font-bold transition-all"
              >
                GET STARTED
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

// Weapon Card that actually works
function WeaponCard({ weapon, index }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      className="relative group h-full"
    >
      {/* Card glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${weapon.gradient} rounded-xl blur-xl transition-opacity duration-300 ${
        isHovered ? 'opacity-30' : 'opacity-0'
      }`} />
      
      {/* Main card */}
      <div className={`relative bg-gray-950/90 backdrop-blur-xl border-2 rounded-xl h-full transition-all duration-300 overflow-hidden ${
        isHovered ? 'border-red-500 shadow-2xl shadow-red-500/20' : 'border-gray-800'
      }`}>
        <div className="p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <weapon.icon className="w-14 h-14 text-red-500" />
            </motion.div>
            <span className={`px-3 py-1 rounded text-xs font-bold ${weapon.statusColor}`}>
              {weapon.status}
            </span>
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-black mb-2">{weapon.title}</h3>
          <p className="text-sm font-mono text-gray-500 mb-1">{weapon.designation}</p>
          <p className="text-gray-400 mb-6 flex-grow">{weapon.description}</p>
          
          {/* Features */}
          <ul className="space-y-2 mb-6">
            {weapon.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <Zap className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-red-500">{weapon.power}</div>
              <div className="text-xs text-gray-500">POWER</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-500">{weapon.range}</div>
              <div className="text-xs text-gray-500">RANGE</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-500">{weapon.impact}</div>
              <div className="text-xs text-gray-500">IMPACT</div>
            </div>
          </div>
          
          {/* CTA */}
          <Link href={weapon.link}>
            <motion.button
              className="w-full py-3 rounded-lg font-bold text-center transition-all relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                DEPLOY {weapon.codename}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// Stats that actually animate properly
function StatCounter({ value, label, icon: Icon, color }) {
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
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [isVisible, value])
  
  const colors = {
    red: 'text-red-500 bg-red-500/10 border-red-500/20',
    purple: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    green: 'text-green-500 bg-green-500/10 border-green-500/20',
    blue: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
  }
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`relative ${colors[color]} backdrop-blur border rounded-xl p-8 text-center transition-all`}
    >
      <Icon className={`w-12 h-12 mx-auto mb-4 ${colors[color].split(' ')[0]}`} />
      <div className={`text-5xl font-black mb-2 ${colors[color].split(' ')[0]}`}>
        {count}+
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  )
}

export default function HomePage() {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95])
  
  const weapons = [
    {
      icon: Brain,
      title: "SOVREN AI",
      codename: "[REDACTED]",
      designation: "CLF-LVL-10",
      status: "ARMED",
      statusColor: "bg-green-900/50 text-green-400",
      description: "Classified AI system delivering 2400% efficiency gains. How it works is need-to-know. What it delivers is undeniable.",
      features: [
        "Proprietary algorithms under NDA protection",
        "Technical specs require Level 10 clearance",
        "Results that make methodology irrelevant"
      ],
      gradient: "from-red-600 to-orange-600",
      power: "95%",
      range: "∞",
      impact: "2400%",
      link: "/sovren-ai"
    },
    {
      icon: Code2,
      title: "CUSTOM AI",
      codename: "[CLASSIFIED]",
      designation: "NDA-REQ-X",
      status: "READY",
      statusColor: "bg-yellow-900/50 text-yellow-400",
      description: "Bespoke AI systems built with methods our competitors can't access, understand, or replicate. Your advantage is permanent.",
      features: [
        "Trade secret protected architectures",
        "100% your IP, zero exposure",
        "Technical details under strict NDA"
      ],
      gradient: "from-purple-600 to-pink-600",
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
      description: "Complete AI independence. No masters. No dependencies. Your data, your rules.",
      features: [
        "On-premise deployment",
        "Zero vendor lock-in",
        "100% data sovereignty"
      ],
      gradient: "from-blue-600 to-cyan-600",
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
      description: "Transform your enterprise into an AI war machine. Dominate markets through evolution.",
      features: [
        "C-suite transformation",
        "Organization-wide AI",
        "Legacy annihilation"
      ],
      gradient: "from-green-600 to-emerald-600",
      power: "82%",
      range: "GLOBAL",
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
        "Market algorithms",
        "Future visualization"
      ],
      gradient: "from-orange-600 to-yellow-600",
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
      description: "Reprogram your organization's DNA. Turn vision into market domination.",
      features: [
        "Executive optimization",
        "Strategic positioning",
        "Vision execution"
      ],
      gradient: "from-indigo-600 to-purple-600",
      power: "71%",
      range: "MENTAL",
      impact: "∞",
      link: "/consulting"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <DominationBackground />
      <NavigationBar />
      
      {/* Hero Section - MAXIMUM FUCKING IMPACT */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="container max-w-7xl mx-auto text-center relative z-10">
          {/* Status indicators */}
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
              <AlertTriangle className="w-4 h-4 text-yellow-500 animate-pulse" />
              <span className="text-xs font-mono text-yellow-400">TARGETS ACQUIRED</span>
            </div>
          </motion.div>
          
          {/* Main headline - NO GLITCHES, JUST POWER */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-none">
            <PowerText className="block mb-2">WE DON'T</PowerText>
            <PowerText delay={0.2} className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 mb-4">
              SOLVE PROBLEMS
            </PowerText>
            <PowerText delay={0.4} className="block">WE</PowerText>
            <PowerText delay={0.6} className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">
              ELIMINATE THEM
            </PowerText>
          </h1>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-400 mb-4">
              Six classified weapon systems. Each delivering results our competitors can't match—or understand.
            </p>
            <p className="text-lg md:text-xl text-red-500 font-bold">
              How we do it is classified. What we deliver is legendary.
            </p>
          </motion.div>
          
          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
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
                  <div className="text-red-500 font-bold">47</div>
                  <div className="text-xs text-gray-500 mt-1">MINS</div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-red-400 font-bold">11 POSITIONS REMAINING</p>
                <div className="mt-2 h-2 bg-gray-900 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-red-600 to-orange-600"
                    initial={{ width: 0 }}
                    animate={{ width: '63%' }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#weapons"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE ARSENAL
              <Crosshair className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="/contact"
              className="bg-black border-2 border-red-600 hover:bg-red-950/30 text-red-500 font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              INITIATE CONTACT
              <Terminal className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronRight className="w-6 h-6 text-gray-500 rotate-90" />
          </motion.div>
        </motion.div>
      </motion.section>
      
      {/* Weapon Systems - The Arsenal */}
      <section id="weapons" className="py-32 px-6 relative">
        <div className="container max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <Crosshair className="w-8 h-8 text-red-500" />
                <span className="text-2xl font-mono text-red-500">WEAPON SELECTION</span>
                <Crosshair className="w-8 h-8 text-red-500" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              CHOOSE YOUR WEAPON
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Six paths to absolute dominance. Each system engineered to obliterate specific market weaknesses.
            </p>
            <p className="text-lg text-red-500 font-bold mt-2">
              Warning: Deployment results in irreversible competitive advantages.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weapons.map((weapon, idx) => (
              <WeaponCard key={idx} weapon={weapon} index={idx} />
            ))}
          </div>
          
          {/* IP Protection Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-black/90 border-2 border-red-500/50 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="flex items-center gap-2 bg-red-950/50 px-3 py-1 rounded">
                  <Lock className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-mono text-red-400">CLASSIFIED</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-black text-red-500 mb-2">INTELLECTUAL PROPERTY NOTICE</h3>
                  <p className="text-gray-400 mb-4">
                    SOVREN AI's core technology is protected by trade secrets, patents pending, and strict classification protocols. 
                    While our competitors chase yesterday's technology, our methods remain generations ahead—and completely inaccessible.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-950/50 rounded p-3">
                      <Fingerprint className="w-5 h-5 text-red-500 mb-2" />
                      <p className="text-xs font-bold text-gray-300">BIOMETRIC VERIFICATION</p>
                      <p className="text-xs text-gray-500">Required for technical access</p>
                    </div>
                    <div className="bg-gray-950/50 rounded p-3">
                      <Key className="w-5 h-5 text-red-500 mb-2" />
                      <p className="text-xs font-bold text-gray-300">NDA MANDATORY</p>
                      <p className="text-xs text-gray-500">Before any specifications</p>
                    </div>
                    <div className="bg-gray-950/50 rounded p-3">
                      <Binary className="w-5 h-5 text-red-500 mb-2" />
                      <p className="text-xs font-bold text-gray-300">LEVEL 10 CLEARANCE</p>
                      <p className="text-xs text-gray-500">For architecture details</p>
                    </div>
                  </div>
                  <p className="text-sm text-red-400 font-mono mt-4">
                    Technical briefings available only to contracted clients under strict confidentiality agreements.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Dominance Metrics */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-red-950/5 to-transparent">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <BarChart3 className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-black mb-4">DOMINANCE VERIFIED</h2>
            <p className="text-xl text-gray-400">Real-time proof of market supremacy.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={127} label="AI Systems Deployed" icon={Server} color="red" />
            <StatCounter value={89} label="Enterprises Transformed" icon={Building} color="purple" />
            <StatCounter value={2400} label="% Efficiency Gains" icon={TrendingUp} color="green" />
            <StatCounter value={47} label="Proprietary Innovations" icon={Brain} color="blue" />
          </div>
          
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-400 mb-8">
              Trusted by industry titans who understand that second place is first loser.
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-30">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-32 h-12 bg-gray-800 rounded animate-pulse" />
              ))}
            </div>
          </motion.div>
          
          {/* Classification Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <div className="bg-black/90 border border-red-500/50 rounded-lg p-6 inline-block text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Binary className="w-6 h-6 text-red-500" />
                <Shield className="w-8 h-8 text-red-500" />
                <Lock className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-sm font-mono text-red-400 font-bold">TECHNOLOGY CLASSIFICATION: MAXIMUM</p>
              <p className="text-xs text-gray-500 mt-2">
                Core algorithms and methodologies protected under trade secret law
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Attempted reverse engineering will be prosecuted to the fullest extent
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA - Maximum Urgency */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-purple-600/10 to-blue-600/10" />
        </div>
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
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
            
            <Flame className="w-16 h-16 text-red-600 mx-auto mb-6" />
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              READY TO DOMINATE?
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              The future belongs to those who strike first. Every second you hesitate, your competition gets stronger.
            </p>
            <p className="text-2xl text-red-500 font-bold mb-8">
              What are you waiting for?
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-yellow-500 animate-pulse" />
                <span className="text-sm text-gray-400">11 positions left</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-400">2,847 competitors eliminated</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
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
            
            <p className="text-sm text-red-400 mt-6 font-mono">
              WARNING: This decision will change everything.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-red-500" />
              <span className="font-black">COVREN<span className="text-red-500">FIRM</span></span>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <span>© 2025 Covren Firm LLC</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
