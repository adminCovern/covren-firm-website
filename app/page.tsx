'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Link from "next/link"
import { Shield, Brain, Cpu, Activity, Lock, Zap, ChevronRight, AlertTriangle, CheckCircle, XCircle, Terminal, BarChart3, Globe, Sparkles, Server, Database, GitBranch, Code2, Check, Settings, SlidersHorizontal, BrainCircuit, ShieldCheck, Layers, Building, LineChart, MessageSquare, Award, Target, Eye, TrendingUp, Clock, Users, Skull, Timer, AlertCircle, Crosshair, Flame, ArrowRight, Gauge, Binary, Network, Atom, Boxes, CircuitBoard } from 'lucide-react'

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

// Matrix rain effect
function MatrixRain() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("")
    const fontSize = 10
    const columns = canvas.width / fontSize
    const drops = []
    
    for(let x = 0; x < columns; x++) {
      drops[x] = 1
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#ff0000'
      ctx.font = fontSize + 'px monospace'
      
      for(let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }
    
    const interval = setInterval(draw, 35)
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-10" />
}

// Extreme cinematic background with multiple layers
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
    <>
      <div className="fixed inset-0 pointer-events-none">
        {/* Mouse-following gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: useTransform(
              [springX, springY],
              ([x, y]) => `radial-gradient(800px circle at ${x * 100}% ${y * 100}%, rgba(239, 68, 68, 0.15), transparent 40%)`
            ),
          }}
        />
        
        {/* Primary grid */}
        <div className="absolute inset-0 opacity-20">
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
        
        {/* Secondary grid */}
        <div className="absolute inset-0 opacity-10">
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
        
        {/* Floating particles */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-2 h-2 bg-red-500/30' : 
              i % 4 === 1 ? 'w-1 h-1 bg-purple-500/30' : 
              i % 4 === 2 ? 'w-1.5 h-1.5 bg-orange-500/30' :
              'w-1 h-1 bg-blue-500/30'
            }`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
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
      
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
          initial={{ top: 0 }}
          animate={{ top: '100%' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </>
  )
}

// Live threat detection system
function ThreatDetectionSystem() {
  const [threats, setThreats] = useState([])
  const [systemStatus, setSystemStatus] = useState('SCANNING')
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newThreat = {
        id: Date.now(),
        type: ['COMPETITOR', 'MARKET SHIFT', 'DISRUPTION', 'OPPORTUNITY'][Math.floor(Math.random() * 4)],
        level: Math.random() * 100,
        location: `SECTOR ${Math.floor(Math.random() * 9) + 1}`,
      }
      
      setThreats(prev => [...prev.slice(-4), newThreat])
      
      if (newThreat.level > 80) {
        setSystemStatus('CRITICAL')
      } else if (newThreat.level > 60) {
        setSystemStatus('ELEVATED')
      } else {
        setSystemStatus('MONITORING')
      }
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed top-24 right-6 z-50 w-80"
    >
      <div className="bg-black/90 backdrop-blur-xl border border-red-900/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Shield className="w-5 h-5 text-red-500" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>
            <span className="text-xs font-mono text-red-500">THREAT DETECTION ACTIVE</span>
          </div>
          <span className={`text-xs font-bold ${
            systemStatus === 'CRITICAL' ? 'text-red-500' :
            systemStatus === 'ELEVATED' ? 'text-yellow-500' :
            'text-green-500'
          }`}>
            {systemStatus}
          </span>
        </div>
        
        <div className="space-y-2">
          <AnimatePresence>
            {threats.map((threat) => (
              <motion.div
                key={threat.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-gray-900/50 rounded p-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{threat.type}</span>
                  <span className={`font-mono ${
                    threat.level > 80 ? 'text-red-500' :
                    threat.level > 60 ? 'text-yellow-500' :
                    'text-green-500'
                  }`}>
                    {threat.level.toFixed(0)}%
                  </span>
                </div>
                <div className="text-gray-600">{threat.location}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

// Extreme infrastructure monitor with classified systems
function ExtremeInfrastructureMonitor() {
  const [metrics, setMetrics] = useState({
    operations: 247382,
    threats: 5847,
    evolution: 2400,
    nodes: ['CLASSIFIED', 'CLASSIFIED', 'CLASSIFIED', 'CLASSIFIED'],
    nodeStatus: ['ACTIVE', 'ARMED', 'READY', 'SCANNING'],
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        operations: prev.operations + Math.floor(Math.random() * 1000),
        threats: prev.threats + Math.floor(Math.random() * 10),
        evolution: 2400 + Math.floor(Math.random() * 200),
      }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Holographic effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-purple-600/10 to-blue-600/10 blur-3xl" />
      
      <div className="relative bg-black/80 backdrop-blur-xl border-2 border-red-900/50 rounded-2xl p-8 overflow-hidden">
        {/* Scanning line */}
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
          initial={{ top: 0 }}
          animate={{ top: '100%' }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-black flex items-center gap-3">
            <Cpu className="w-8 h-8 text-red-500 animate-pulse" />
            <GlitchText>SOVEREIGN INFRASTRUCTURE</GlitchText>
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-green-400">ALL SYSTEMS ARMED</span>
            </div>
          </div>
        </div>
        
        {/* Classified nodes grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {metrics.nodes.map((node, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-950/50 border border-red-900/30 rounded-lg p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 to-transparent opacity-50" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 font-mono">NODE-{i + 1}</span>
                    <Lock className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="text-lg font-mono font-bold text-red-500 mb-1">
                    <GlitchText>{node}</GlitchText>
                  </div>
                  <div className="text-xs font-bold text-green-500">{metrics.nodeStatus[i]}</div>
                  <div className="mt-2 h-1 bg-gray-900 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-600 to-orange-600"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Security notice */}
        <div className="bg-red-950/20 border border-red-900/50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />
            <div className="flex-1">
              <p className="text-sm font-mono text-red-400">INFRASTRUCTURE: LEVEL 10 CLEARANCE REQUIRED</p>
              <p className="text-xs text-gray-500">Specifications available only under NDA to approved operators</p>
            </div>
            <Lock className="w-5 h-5 text-red-500" />
          </div>
        </div>
        
        {/* Live metrics */}
        <div className="grid grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/50 rounded-lg p-4 text-center border border-gray-800"
          >
            <div className="text-3xl font-mono font-black text-orange-500">
              {metrics.operations.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 uppercase mt-1">Operations/Sec</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/50 rounded-lg p-4 text-center border border-gray-800"
          >
            <div className="text-3xl font-mono font-black text-red-500">
              {metrics.threats.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 uppercase mt-1">Threats Neutralized</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/50 rounded-lg p-4 text-center border border-gray-800"
          >
            <div className="text-3xl font-mono font-black text-purple-500">
              {metrics.evolution}%
            </div>
            <div className="text-xs text-gray-500 uppercase mt-1">Evolution Rate</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Enhanced service weapon card
function ServiceWeaponCard({ service, index }) {
  const [isTargeted, setIsTargeted] = useState(false)
  const [systemAnalysis, setSystemAnalysis] = useState('SCANNING...')
  const [powerLevel, setPowerLevel] = useState(0)
  
  useEffect(() => {
    if (isTargeted) {
      const timer = setInterval(() => {
        setPowerLevel(prev => Math.min(prev + 5, 100))
      }, 50)
      
      setTimeout(() => {
        setSystemAnalysis('TARGET ACQUIRED')
      }, 1000)
      
      return () => clearInterval(timer)
    } else {
      setPowerLevel(0)
      setSystemAnalysis('SCANNING...')
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
      whileHover={{ scale: 1.02, y: -10 }}
      className="relative group h-full"
    >
      {/* Targeting system */}
      <AnimatePresence>
        {isTargeted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-20"
          >
            <div className="absolute top-4 right-4">
              <Crosshair className="w-8 h-8 text-red-500 animate-pulse" />
              <span className="absolute -bottom-6 right-0 text-xs font-mono text-red-500 whitespace-nowrap">
                {systemAnalysis}
              </span>
            </div>
            <div className="absolute inset-0 border-2 border-red-500 rounded-xl animate-pulse" />
            
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className={`relative bg-gray-950/80 backdrop-blur-xl border-2 rounded-xl p-8 h-full transition-all duration-300 overflow-hidden ${
        isTargeted 
          ? 'border-red-500 shadow-2xl shadow-red-500/50' 
          : 'border-gray-800'
      }`}>
        {/* Energy field effect */}
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
              duration: 2,
              repeat: Infinity,
            }}
          />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <service.icon className="w-16 h-16 text-red-500" />
              <div className="text-right">
                <div className="px-3 py-1 rounded text-xs font-bold bg-red-900/50 text-red-400 inline-block">
                  {service.status}
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-black mb-2">
              <GlitchText>{service.title}</GlitchText>
            </h3>
            <p className="text-sm font-mono text-gray-500 mb-1">{service.designation}</p>
            <p className="text-sm text-gray-400">{service.class}</p>
          </div>
          
          <p className="text-gray-300 mb-6">{service.description}</p>
          
          {/* Power charging meter */}
          <AnimatePresence>
            {isTargeted && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">WEAPON CHARGE</span>
                  <span className="text-xs font-mono text-red-500">{powerLevel}%</span>
                </div>
                <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600"
                    animate={{ width: `${powerLevel}%` }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Features */}
          <ul className="space-y-2 mb-8">
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                className="flex items-start gap-2 text-sm"
              >
                <Zap className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-black/50 rounded p-3 text-center border border-gray-800">
              <div className="text-xl font-black text-red-500">{service.power}</div>
              <div className="text-xs text-gray-500">POWER</div>
            </div>
            <div className="bg-black/50 rounded p-3 text-center border border-gray-800">
              <div className="text-xl font-black text-purple-500">{service.range}</div>
              <div className="text-xs text-gray-500">RANGE</div>
            </div>
            <div className="bg-black/50 rounded p-3 text-center border border-gray-800">
              <div className="text-xl font-black text-green-500">{service.impact}</div>
              <div className="text-xs text-gray-500">IMPACT</div>
            </div>
          </div>
          
          {/* Action button */}
          <Link href={service.link}>
            <motion.button
              className="w-full py-4 rounded-lg font-bold text-center transition-all relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                DEPLOY {service.codename}
                <Target className="w-5 h-5" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// Countdown system
function CountdownSystem() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 47,
    seconds: 59
  })
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev
        
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
          if (minutes < 0) {
            minutes = 59
            hours--
            if (hours < 0) {
              hours = 23
              days--
              if (days < 0) {
                days = 0
                hours = 0
                minutes = 0
                seconds = 0
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-block"
    >
      <div className="bg-black/80 backdrop-blur-xl border-2 border-red-600 rounded-xl p-6">
        <p className="text-sm text-gray-400 mb-4 text-center">PHASE 1 DEPLOYMENT WINDOW</p>
        <div className="flex items-center gap-4 font-mono">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-xs text-gray-500">DAYS</div>
          </div>
          <span className="text-2xl text-red-600 animate-pulse">:</span>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs text-gray-500">HOURS</div>
          </div>
          <span className="text-2xl text-red-600 animate-pulse">:</span>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs text-gray-500">MINS</div>
          </div>
          <span className="text-2xl text-red-600 animate-pulse">:</span>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs text-gray-500">SECS</div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-red-400 font-bold">11 POSITIONS REMAINING</p>
          <div className="mt-2 h-1 bg-gray-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-600 to-orange-600"
              initial={{ width: '0%' }}
              animate={{ width: '63%' }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Stats counter with animation
function AnimatedStat({ value, label, icon: Icon, color }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
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
      const increment = Math.ceil(value / 100)
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + increment, value))
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
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r from-${color}-600/20 to-${color}-700/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className="relative bg-black/80 backdrop-blur border border-gray-800 group-hover:border-red-500/50 rounded-xl p-8 text-center transition-all">
        <Icon className={`w-14 h-14 text-${color}-500 mx-auto mb-4`} />
        <div className={`text-5xl font-black text-${color}-500 mb-2`}>
          {count}+
        </div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </motion.div>
  )
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function HomePage() {
  const [entryComplete, setEntryComplete] = useState(false)
  const [systemStatus, setSystemStatus] = useState('INITIALIZING')
  const containerRef = useRef(null)
  
  // All 6 services as weapon systems
  const weaponSystems = [
    {
      icon: Brain,
      title: "SOVREN AI",
      codename: "COMPOUND INTELLIGENCE™",
      designation: "CMP-INT-∞",
      class: "EVOLUTIONARY WEAPON",
      description: "Self-evolving AI that multiplies in power daily. While competitors depreciate, SOVREN compounds your advantage exponentially.",
      features: [
        "24/7 autonomous business operations",
        "Compounds intelligence every 24 hours",
        "Zero human intervention required",
        "Learns and optimizes continuously"
      ],
      colorHex: "#ef4444",
      status: "ARMED",
      power: "95%",
      range: "∞",
      impact: "2400%",
      link: "/sovren-ai"
    },
    {
      icon: Code2,
      title: "CUSTOM AI",
      codename: "BESPOKE ARSENAL",
      designation: "BSP-ARS-X",
      class: "PRECISION WEAPON",
      description: "When standard solutions fail, we forge digital weapons tailored to your exact conquest requirements.",
      features: [
        "Proprietary model architectures",
        "Complete intellectual property ownership",
        "Zero dependencies on external systems",
        "Built for your specific domination"
      ],
      colorHex: "#a855f7",
      status: "READY",
      power: "88%",
      range: "CUSTOM",
      impact: "$24M+",
      link: "/custom-development"
    },
    {
      icon: Shield,
      title: "SOVEREIGN SYSTEMS",
      codename: "INDEPENDENCE DAY",
      designation: "IND-DAY-1",
      class: "AUTONOMY WEAPON",
      description: "Complete AI independence. No masters. No dependencies. Your data, your rules, your empire.",
      features: [
        "On-premise deployment architecture",
        "Military-grade security protocols",
        "100% data sovereignty guaranteed",
        "Zero vendor lock-in forever"
      ],
      colorHex: "#3b82f6",
      status: "FORTIFIED",
      power: "90%",
      range: "LOCAL",
      impact: "100%",
      link: "/sovereign-systems"
    },
    {
      icon: Building,
      title: "ENTERPRISE AI",
      codename: "CORPORATE WARFARE",
      designation: "CRP-WAR-Z",
      class: "TRANSFORMATION WEAPON",
      description: "Transform your enterprise into an AI-powered war machine. Market domination through organizational evolution.",
      features: [
        "C-suite strategic transformation",
        "Organization-wide AI deployment",
        "Legacy system annihilation",
        "Competitor elimination tactics"
      ],
      colorHex: "#10b981",
      status: "DEPLOYED",
      power: "82%",
      range: "ENTERPRISE",
      impact: "89 WINS",
      link: "/enterprise"
    },
    {
      icon: LineChart,
      title: "AI ANALYTICS",
      codename: "FUTURE SIGHT",
      designation: "FTR-SGT-7",
      class: "PREDICTIVE WEAPON",
      description: "See the future. Control the future. Predictive intelligence that eliminates uncertainty.",
      features: [
        "Real-time predictive modeling",
        "Market manipulation algorithms",
        "Competitor movement tracking",
        "Future state visualization"
      ],
      colorHex: "#f97316",
      status: "SCANNING",
      power: "78%",
      range: "TEMPORAL",
      impact: "47X",
      link: "/analytics"
    },
    {
      icon: MessageSquare,
      title: "STRATEGIC AI",
      codename: "MIND CONTROL",
      designation: "MND-CTL-9",
      class: "ADVISORY WEAPON",
      description: "Reprogram your organization's DNA. Strategic intelligence that turns vision into inevitability.",
      features: [
        "Executive decision optimization",
        "Market positioning warfare",
        "Psychological advantage systems",
        "Strategic roadmap generation"
      ],
      colorHex: "#6366f1",
      status: "ACTIVE",
      power: "71%",
      range: "MENTAL",
      impact: "∞",
      link: "/consulting"
    }
  ]
  
  // Entry sequence
  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 500))
      setSystemStatus('AUTHENTICATING')
      await new Promise(resolve => setTimeout(resolve, 800))
      setSystemStatus('WEAPONS ONLINE')
      await new Promise(resolve => setTimeout(resolve, 700))
      setEntryComplete(true)
    }
    sequence()
  }, [])
  
  // Entry screen
  if (!entryComplete) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="relative mb-8">
            <motion.div
              className="w-40 h-40 border-4 border-red-600 rounded-full mx-auto relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute inset-2 border-2 border-red-500 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 border border-red-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <Shield className="w-20 h-20 text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <h1 className="text-3xl font-black text-red-500 mb-4">
            <GlitchText>COVREN DEFENSE SYSTEMS</GlitchText>
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="font-mono">{systemStatus}</span>
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          
          <motion.div
            className="mt-8 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-red-600 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      <MatrixRain />
      <ExtremeCinematicBackground />
      <ThreatDetectionSystem />
      
      {/* Hero Section - Maximum Impact */}
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
            {/* System status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 bg-red-950/50 backdrop-blur border border-red-600 rounded-full px-8 py-3 mb-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-mono text-green-400">SYSTEMS ONLINE</span>
              </div>
              <div className="w-px h-4 bg-red-600/50" />
              <span className="text-sm font-bold text-red-400">6 WEAPONS ARMED</span>
              <div className="w-px h-4 bg-red-600/50" />
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-yellow-400">TARGETS IDENTIFIED</span>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              </div>
            </motion.div>
            
            {/* Main headline */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                WE DON'T
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 animate-gradient"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <GlitchText>SOLVE PROBLEMS</GlitchText>
              </motion.span>
              <motion.span
                className="block text-white mt-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                WE
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-gradient-reverse"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                ELIMINATE THEM
              </motion.span>
            </h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto"
            >
              Six digital weapon systems. Each engineered for total market supremacy.
              <span className="block text-red-500 font-bold mt-2">
                Your competition's nightmares have names. We built them all.
              </span>
            </motion.p>
            
            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="mb-12 flex justify-center"
            >
              <CountdownSystem />
            </motion.div>
            
            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#weapons"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-5 px-10 rounded-lg flex items-center justify-center gap-3 transition-all relative overflow-hidden group text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">EXPLORE ARSENAL</span>
                <Crosshair className="w-6 h-6 relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-black border-2 border-red-600 hover:bg-red-950/50 text-red-500 font-bold py-5 px-10 rounded-lg flex items-center justify-center gap-3 transition-all text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                INITIATE CONTACT
                <Terminal className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating indicators */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-10 hidden lg:block"
        >
          <div className="bg-black/80 backdrop-blur-xl border border-red-900/50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Skull className="w-6 h-6 text-red-500" />
              <span className="text-sm font-mono text-red-500">THREAT LEVEL</span>
            </div>
            <p className="text-3xl font-black">CRITICAL</p>
            <p className="text-sm text-gray-500 mt-1">Markets disrupted: 47</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <div className="bg-black/80 backdrop-blur-xl border border-green-900/50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-green-500" />
              <span className="text-sm font-mono text-green-500">ELIMINATIONS</span>
            </div>
            <p className="text-3xl font-black">2,847</p>
            <p className="text-sm text-gray-500 mt-1">Competition neutralized</p>
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
      
      {/* Live Infrastructure Monitor */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-4">
              <GlitchText>CLASSIFIED INFRASTRUCTURE</GlitchText>
            </h2>
            <p className="text-xl text-gray-400">Real-time sovereign system monitoring</p>
          </motion.div>
          
          <ExtremeInfrastructureMonitor />
        </div>
      </section>
      
      {/* Weapon Systems Grid */}
      <section id="weapons" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />
        
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
              className="inline-block mb-8"
            >
              <div className="flex items-center justify-center gap-4 text-red-500 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Crosshair className="w-8 h-8" />
                </motion.div>
                <span className="text-2xl font-mono">WEAPON SELECTION PROTOCOL</span>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Crosshair className="w-8 h-8" />
                </motion.div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <GlitchText>CHOOSE YOUR WEAPON</GlitchText>
              </h2>
            </motion.div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Six paths to absolute dominance. Each system engineered to obliterate specific market weaknesses.
              <span className="block text-red-500 font-bold mt-2">
                Warning: Deployment results in irreversible competitive advantages.
              </span>
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {weaponSystems.map((weapon, idx) => (
              <ServiceWeaponCard
                key={idx}
                service={weapon}
                index={idx}
              />
            ))}
          </div>
          
          {/* Deployment warning */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <div className="bg-black/80 backdrop-blur-xl border-2 border-yellow-600/50 rounded-xl p-8 max-w-3xl">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-500 animate-pulse" />
                  <p className="text-xl font-mono text-yellow-500 font-black">DEPLOYMENT PROTOCOL</p>
                  <AlertTriangle className="w-8 h-8 text-yellow-500 animate-pulse" />
                </div>
                <p className="text-gray-300 text-lg">
                  Each weapon system requires founder-level clearance. Deployment triggers immediate 
                  market transformation protocols. 
                </p>
                <p className="text-yellow-500 font-bold mt-2">
                  Once initiated, there is no rollback. Choose with conviction.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Dominance Metrics */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/10 to-transparent" />
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">DOMINANCE VERIFIED</h2>
            <p className="text-xl text-gray-400">Real-time proof of market supremacy</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedStat value={127} label="AI Systems Deployed" icon={Server} color="red" />
            <AnimatedStat value={89} label="Enterprises Transformed" icon={Building} color="purple" />
            <AnimatedStat value={2400} label="% Efficiency Gains" icon={TrendingUp} color="green" />
            <AnimatedStat value={47} label="Proprietary Innovations" icon={Brain} color="blue" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-400 mb-8">
              Trusted by industry titans who understand that second place is first loser.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-32 h-12 bg-gray-800 rounded animate-pulse" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA - Maximum urgency */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 animate-gradient" />
        </div>
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-purple-600/30 to-blue-600/30 blur-3xl" />
            <div className="relative bg-black/90 backdrop-blur-xl border-2 border-red-600 rounded-2xl p-12 md:p-16 overflow-hidden">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-2 border-red-500 rounded-2xl"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              {/* Content */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Flame className="w-20 h-20 text-red-600 mx-auto mb-6" />
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <GlitchText>READY TO DOMINATE?</GlitchText>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                The future belongs to those who strike first. Every second you hesitate, 
                your competition gets stronger. Every moment of indecision costs market share.
              </p>
              <p className="text-2xl text-red-500 font-bold mb-8">
                What are you waiting for?
              </p>
              
              <motion.a
                href="/sovren-ai"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-black py-6 px-12 rounded-lg text-xl transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">DEPLOY WEAPON SYSTEMS</span>
                <Zap className="w-6 h-6 relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                />
              </motion.a>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm text-red-400 mt-6 font-mono"
              >
                WARNING: This decision will change everything.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
