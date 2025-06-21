'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useAnimation } from 'framer-motion'
import Link from "next/link"
import { Shield, Brain, Cpu, Activity, Lock, Zap, ChevronRight, AlertTriangle, CheckCircle, XCircle, Terminal, BarChart3, Globe, Sparkles, Server, Database, GitBranch, Code2, Check, Settings, SlidersHorizontal, BrainCircuit, ShieldCheck, Layers, Building, LineChart, MessageSquare, Award, Target, Eye, TrendingUp, Clock, Users, Skull, Timer, AlertCircle, Crosshair, Flame, ArrowRight, Gauge, Binary, Network, Atom, Boxes, CircuitBoard, Wifi, Power, Radar, Satellite, Command, Fingerprint, Key, ShieldAlert, ShieldOff, Swords, Bomb, Navigation, Compass, Map, Anchor, Radio } from 'lucide-react'

// Glitch text effect component with enhanced animations
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
          <span 
            className="absolute inset-0 text-yellow-500 opacity-60" 
            style={{ 
              transform: `translate(0px, ${glitchIntensity * 4}px)`,
              clipPath: `inset(${30 + glitchIntensity * 20}% 0 ${30 - glitchIntensity * 20}% 0)`
            }}
          >
            {children}
          </span>
        </>
      )}
    </div>
  )
}

// Matrix rain effect with enhanced performance
function MatrixRain() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}COVREN".split("")
    const fontSize = 10
    const columns = canvas.width / fontSize
    const drops = []
    const colors = ['#ef4444', '#a855f7', '#3b82f6', '#10b981', '#f97316']
    
    for(let x = 0; x < columns; x++) {
      drops[x] = 1
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.font = fontSize + 'px monospace'
      
      for(let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        const colorIndex = Math.floor(Math.random() * colors.length)
        ctx.fillStyle = colors[colorIndex]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      
      animationRef.current = requestAnimationFrame(draw)
    }
    
    draw()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-10 z-0" />
}

// Enhanced cinematic background with multiple parallax layers
function ExtremeCinematicBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 150 })
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 150 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        
        {/* Dynamic mouse-following gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: useTransform(
              [smoothMouseX, smoothMouseY],
              ([x, y]) => `radial-gradient(800px circle at ${x * 100}% ${y * 100}%, rgba(239, 68, 68, 0.15), transparent 40%)`
            ),
          }}
        />
        
        {/* Secondary mouse gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: useTransform(
              [smoothMouseX, smoothMouseY],
              ([x, y]) => `radial-gradient(1200px circle at ${(1 - x) * 100}% ${(1 - y) * 100}%, rgba(147, 51, 234, 0.1), transparent 50%)`
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
        
        {/* Tertiary hexagon grid */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animation: 'float 40s ease-in-out infinite',
            }}
          />
        </div>
        
        {/* Floating particles system */}
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 5 === 0 ? 'w-3 h-3 bg-red-500/30' : 
              i % 5 === 1 ? 'w-2 h-2 bg-purple-500/30' : 
              i % 5 === 2 ? 'w-1 h-1 bg-orange-500/40' :
              i % 5 === 3 ? 'w-2 h-2 bg-blue-500/30' :
              'w-1 h-1 bg-green-500/40'
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
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20,
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        
        <style jsx>{`
          @keyframes grid {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          @keyframes gridReverse {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-50px, -50px); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}</style>
      </div>
      
      {/* Scanline effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
          initial={{ top: 0 }}
          animate={{ top: '100%' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          initial={{ top: '100%' }}
          animate={{ top: 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      
      {/* Vignette effect */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />
      </div>
    </>
  )
}

// Enhanced threat detection system with live data
function ThreatDetectionSystem() {
  const [threats, setThreats] = useState([])
  const [systemStatus, setSystemStatus] = useState('SCANNING')
  const [threatLevel, setThreatLevel] = useState(0)
  const [activeProtocols, setActiveProtocols] = useState([])
  
  useEffect(() => {
    // Initialize protocols
    setActiveProtocols([
      { id: 1, name: 'FIREWALL', status: 'ACTIVE', strength: 98 },
      { id: 2, name: 'AI SHIELD', status: 'ARMED', strength: 100 },
      { id: 3, name: 'QUANTUM ENCRYPTION', status: 'ONLINE', strength: 95 },
      { id: 4, name: 'NEURAL DEFENSE', status: 'SCANNING', strength: 87 }
    ])
    
    const interval = setInterval(() => {
      const threatTypes = ['COMPETITOR', 'MARKET SHIFT', 'DISRUPTION', 'OPPORTUNITY', 'VULNERABILITY', 'INTRUSION']
      const newThreat = {
        id: Date.now(),
        type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
        level: Math.random() * 100,
        location: `SECTOR ${Math.floor(Math.random() * 12) + 1}`,
        velocity: Math.random() * 100,
        eta: Math.floor(Math.random() * 300) + 60,
      }
      
      setThreats(prev => [...prev.slice(-5), newThreat])
      
      const avgThreatLevel = threats.reduce((acc, t) => acc + t.level, newThreat.level) / (threats.length + 1)
      setThreatLevel(avgThreatLevel)
      
      if (avgThreatLevel > 80) {
        setSystemStatus('CRITICAL')
      } else if (avgThreatLevel > 60) {
        setSystemStatus('ELEVATED')
      } else if (avgThreatLevel > 40) {
        setSystemStatus('MODERATE')
      } else {
        setSystemStatus('MONITORING')
      }
    }, 2000)
    
    return () => clearInterval(interval)
  }, [threats])
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed top-24 right-6 z-50 w-96"
    >
      <div className="bg-black/90 backdrop-blur-xl border border-red-900/50 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-red-950/50 border-b border-red-900/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Shield className="w-6 h-6 text-red-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              </div>
              <span className="text-sm font-mono text-red-500 font-bold">THREAT DETECTION MATRIX</span>
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded ${
              systemStatus === 'CRITICAL' ? 'bg-red-900/50 text-red-400' :
              systemStatus === 'ELEVATED' ? 'bg-yellow-900/50 text-yellow-400' :
              systemStatus === 'MODERATE' ? 'bg-blue-900/50 text-blue-400' :
              'bg-green-900/50 text-green-400'
            }`}>
              {systemStatus}
            </span>
          </div>
          
          {/* Overall threat meter */}
          <div className="mt-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500">System Load</span>
              <span className="text-red-400 font-mono">{threatLevel.toFixed(1)}%</span>
            </div>
            <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${
                  threatLevel > 80 ? 'bg-gradient-to-r from-red-600 to-orange-600' :
                  threatLevel > 60 ? 'bg-gradient-to-r from-yellow-600 to-orange-600' :
                  threatLevel > 40 ? 'bg-gradient-to-r from-blue-600 to-yellow-600' :
                  'bg-gradient-to-r from-green-600 to-blue-600'
                }`}
                animate={{ width: `${threatLevel}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
        
        {/* Active protocols */}
        <div className="p-4 border-b border-gray-800">
          <p className="text-xs font-mono text-gray-500 mb-2">ACTIVE PROTOCOLS</p>
          <div className="grid grid-cols-2 gap-2">
            {activeProtocols.map((protocol) => (
              <div key={protocol.id} className="bg-gray-900/50 rounded p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400">{protocol.name}</span>
                  <span className={`text-xs font-bold ${
                    protocol.status === 'ACTIVE' || protocol.status === 'ARMED' ? 'text-green-500' :
                    protocol.status === 'ONLINE' ? 'text-blue-500' :
                    'text-yellow-500'
                  }`}>{protocol.strength}%</span>
                </div>
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-600 to-emerald-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${protocol.strength}%` }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Threat list */}
        <div className="p-4 max-h-64 overflow-y-auto">
          <p className="text-xs font-mono text-gray-500 mb-2">LIVE THREAT FEED</p>
          <div className="space-y-2">
            <AnimatePresence>
              {threats.map((threat) => (
                <motion.div
                  key={threat.id}
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.9 }}
                  className="bg-gray-900/50 rounded p-3 border border-gray-800"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-gray-300">{threat.type}</span>
                    <span className={`text-xs font-mono ${
                      threat.level > 80 ? 'text-red-500' :
                      threat.level > 60 ? 'text-yellow-500' :
                      'text-green-500'
                    }`}>
                      {threat.level.toFixed(0)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{threat.location}</span>
                    <span>ETA: {threat.eta}s</span>
                  </div>
                  <div className="mt-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-600 to-orange-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${threat.velocity}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Footer stats */}
        <div className="bg-gray-900/50 border-t border-gray-800 p-3">
          <div className="grid grid-cols-3 gap-2 text-center">
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
      </div>
    </motion.div>
  )
}

// Enhanced infrastructure monitor with classified systems
function ExtremeInfrastructureMonitor() {
  const [metrics, setMetrics] = useState({
    operations: 247382,
    threats: 5847,
    evolution: 2400,
    efficiency: 97.8,
    nodes: ['CLASSIFIED', 'CLASSIFIED', 'CLASSIFIED', 'CLASSIFIED', 'CLASSIFIED', 'CLASSIFIED'],
    nodeStatus: ['ACTIVE', 'ARMED', 'READY', 'SCANNING', 'FORTIFIED', 'ENCRYPTED'],
    nodeActivity: [0, 0, 0, 0, 0, 0],
    systemHealth: {
      cpu: 0,
      memory: 0,
      network: 0,
      storage: 0,
    }
  })
  
  const [selectedNode, setSelectedNode] = useState(null)
  const [accessDenied, setAccessDenied] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        operations: prev.operations + Math.floor(Math.random() * 1000),
        threats: prev.threats + Math.floor(Math.random() * 10),
        evolution: 2400 + Math.floor(Math.random() * 200),
        efficiency: 95 + Math.random() * 4.9,
        nodeActivity: prev.nodeActivity.map(() => Math.random() * 100),
        systemHealth: {
          cpu: 20 + Math.random() * 30,
          memory: 30 + Math.random() * 40,
          network: 1000 + Math.random() * 4000,
          storage: 60 + Math.random() * 20,
        }
      }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  
  const handleNodeClick = (index) => {
    setSelectedNode(index)
    setAccessDenied(true)
    setTimeout(() => setAccessDenied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Holographic effect layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-purple-600/10 to-blue-600/10 blur-3xl animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent animate-pulse" />
      
      <div className="relative bg-black/80 backdrop-blur-xl border-2 border-red-900/50 rounded-2xl overflow-hidden">
        {/* Scanning lines */}
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
          initial={{ top: 0 }}
          animate={{ top: '100%' }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"
          initial={{ left: 0 }}
          animate={{ left: '100%' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Header */}
        <div className="p-8 border-b border-red-900/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Cpu className="w-10 h-10 text-red-500" />
                <motion.div
                  className="absolute inset-0 w-10 h-10 border-2 border-red-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h3 className="text-3xl font-black">
                  <GlitchText intensity="high">SOVEREIGN INFRASTRUCTURE</GlitchText>
                </h3>
                <p className="text-sm text-gray-500 font-mono">CLEARANCE LEVEL 10 REQUIRED</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-gray-500">SYSTEM EFFICIENCY</p>
                <p className="text-2xl font-bold text-green-500">{metrics.efficiency.toFixed(1)}%</p>
              </div>
              <div className="flex flex-col gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-1 ${i < Math.floor(metrics.efficiency / 20) ? 'bg-green-500' : 'bg-gray-700'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Classified nodes grid */}
        <div className="p-8">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {metrics.nodes.map((node, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNodeClick(i)}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-950/50 border border-red-900/30 rounded-lg p-4 overflow-hidden">
                  {/* Node activity background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-red-950/20 to-transparent"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500 font-mono">NODE-{i + 1}</span>
                      <Lock className="w-4 h-4 text-red-500" />
                    </div>
                    <div className="text-lg font-mono font-bold text-red-500 mb-1">
                      <GlitchText>{node}</GlitchText>
                    </div>
                    <div className={`text-xs font-bold ${
                      ['ACTIVE', 'ARMED', 'FORTIFIED'].includes(metrics.nodeStatus[i]) ? 'text-green-500' :
                      ['READY', 'SCANNING'].includes(metrics.nodeStatus[i]) ? 'text-yellow-500' :
                      'text-blue-500'
                    }`}>{metrics.nodeStatus[i]}</div>
                    
                    {/* Activity meter */}
                    <div className="mt-2 h-1 bg-gray-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-600 to-orange-600"
                        animate={{ width: `${metrics.nodeActivity[i]}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    
                    <div className="mt-1 text-xs text-gray-600 font-mono">
                      {metrics.nodeActivity[i].toFixed(0)}% LOAD
                    </div>
                  </div>
                  
                  {/* Access denied overlay */}
                  <AnimatePresence>
                    {accessDenied && selectedNode === i && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-red-950/90 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <ShieldAlert className="w-8 h-8 text-red-500 mx-auto mb-2" />
                          <p className="text-xs font-bold text-red-400">ACCESS DENIED</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Security notice */}
          <div className="bg-red-950/20 border border-red-900/50 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 animate-pulse" />
              <div className="flex-1">
                <p className="text-sm font-mono text-red-400 font-bold mb-1">CLASSIFIED INFRASTRUCTURE</p>
                <p className="text-xs text-gray-500 mb-3">
                  Hardware specifications exceed industry classification standards. Details available only under strict NDA to approved Level 10 operators.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-black/50 rounded p-3 text-center">
                    <Fingerprint className="w-6 h-6 text-red-500 mx-auto mb-1" />
                    <p className="text-xs text-gray-500">BIOMETRIC</p>
                  </div>
                  <div className="bg-black/50 rounded p-3 text-center">
                    <Key className="w-6 h-6 text-red-500 mx-auto mb-1" />
                    <p className="text-xs text-gray-500">2FA REQUIRED</p>
                  </div>
                  <div className="bg-black/50 rounded p-3 text-center">
                    <ShieldCheck className="w-6 h-6 text-red-500 mx-auto mb-1" />
                    <p className="text-xs text-gray-500">NDA ONLY</p>
                  </div>
                  <div className="bg-black/50 rounded p-3 text-center">
                    <Lock className="w-6 h-6 text-red-500 mx-auto mb-1" />
                    <p className="text-xs text-gray-500">ENCRYPTED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* System health metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 rounded-lg p-4 border border-gray-800"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">CPU LOAD</span>
                <Cpu className="w-4 h-4 text-orange-500" />
              </div>
              <div className="text-2xl font-mono font-bold text-orange-500">
                {metrics.systemHealth.cpu.toFixed(1)}%
              </div>
              <div className="mt-2 h-1 bg-gray-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-600 to-red-600"
                  animate={{ width: `${metrics.systemHealth.cpu}%` }}
                />
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 rounded-lg p-4 border border-gray-800"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">MEMORY</span>
                <Database className="w-4 h-4 text-purple-500" />
              </div>
              <div className="text-2xl font-mono font-bold text-purple-500">
                {metrics.systemHealth.memory.toFixed(1)}%
              </div>
              <div className="mt-2 h-1 bg-gray-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                  animate={{ width: `${metrics.systemHealth.memory}%` }}
                />
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 rounded-lg p-4 border border-gray-800"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">NETWORK</span>
                <Wifi className="w-4 h-4 text-blue-500" />
              </div>
              <div className="text-2xl font-mono font-bold text-blue-500">
                {(metrics.systemHealth.network / 1000).toFixed(1)}GB/s
              </div>
              <div className="mt-2 h-1 bg-gray-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-600"
                  animate={{ width: `${(metrics.systemHealth.network / 5000) * 100}%` }}
                />
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 rounded-lg p-4 border border-gray-800"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">STORAGE</span>
                <Server className="w-4 h-4 text-green-500" />
              </div>
              <div className="text-2xl font-mono font-bold text-green-500">
                {metrics.systemHealth.storage.toFixed(1)}%
              </div>
              <div className="mt-2 h-1 bg-gray-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-600 to-emerald-600"
                  animate={{ width: `${metrics.systemHealth.storage}%` }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Live metrics dashboard */}
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-orange-950/20 to-black border border-orange-900/30 rounded-lg p-6 text-center"
            >
              <Activity className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl font-mono font-black text-orange-500">
                {metrics.operations.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 uppercase mt-1">Operations/Sec</div>
              <div className="mt-3 text-xs text-gray-600">
                +{Math.floor(Math.random() * 100)} from last second
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-lg p-6 text-center"
            >
              <Shield className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <div className="text-3xl font-mono font-black text-red-500">
                {metrics.threats.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 uppercase mt-1">Threats Neutralized</div>
              <div className="mt-3 text-xs text-gray-600">
                99.97% success rate
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-950/20 to-black border border-purple-900/30 rounded-lg p-6 text-center"
            >
              <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-mono font-black text-purple-500">
                {metrics.evolution}%
              </div>
              <div className="text-xs text-gray-500 uppercase mt-1">Evolution Rate</div>
              <div className="mt-3 text-xs text-gray-600">
                Compound daily growth
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Enhanced service weapon card with full animations
function ServiceWeaponCard({ service, index }) {
  const [isTargeted, setIsTargeted] = useState(false)
  const [systemAnalysis, setSystemAnalysis] = useState('SCANNING...')
  const [powerLevel, setPowerLevel] = useState(0)
  const [threatAssessment, setThreatAssessment] = useState(null)
  const cardRef = useRef(null)
  
  useEffect(() => {
    if (isTargeted) {
      const powerTimer = setInterval(() => {
        setPowerLevel(prev => Math.min(prev + 2, 100))
      }, 30)
      
      const analysisSteps = [
        { time: 500, status: 'ANALYZING...' },
        { time: 1000, status: 'CALIBRATING...' },
        { time: 1500, status: 'TARGET LOCKED' },
      ]
      
      analysisSteps.forEach(({ time, status }) => {
        setTimeout(() => setSystemAnalysis(status), time)
      })
      
      setTimeout(() => {
        setThreatAssessment({
          compatibility: 85 + Math.random() * 15,
          impact: 90 + Math.random() * 10,
          readiness: 95 + Math.random() * 5,
        })
      }, 2000)
      
      return () => clearInterval(powerTimer)
    } else {
      setPowerLevel(0)
      setSystemAnalysis('SCANNING...')
      setThreatAssessment(null)
    }
  }, [isTargeted])
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseEnter={() => setIsTargeted(true)}
      onMouseLeave={() => setIsTargeted(false)}
      whileHover={{ scale: 1.02, y: -10, transition: { duration: 0.3 } }}
      className="relative group h-full"
    >
      {/* Targeting system overlay */}
      <AnimatePresence>
        {isTargeted && (
          <>
            {/* Main targeting UI */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none z-20"
            >
              {/* Crosshair */}
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Crosshair className="w-8 h-8 text-red-500" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -bottom-6 right-0 text-xs font-mono text-red-500 whitespace-nowrap"
                >
                  {systemAnalysis}
                </motion.span>
              </div>
              
              {/* Animated border */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="none"
                  stroke="url(#borderGradient)"
                  strokeWidth="2"
                  rx="12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
                <defs>
                  <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500" />
                <div className="absolute top-0 left-0 w-0.5 h-full bg-red-500" />
              </div>
              <div className="absolute top-0 right-0 w-12 h-12">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-red-500" />
                <div className="absolute top-0 right-0 w-0.5 h-full bg-red-500" />
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500" />
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-red-500" />
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-red-500" />
                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-red-500" />
              </div>
            </motion.div>
            
            {/* Threat assessment overlay */}
            {threatAssessment && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur border border-red-500/50 rounded-lg p-3 z-30"
              >
                <p className="text-xs font-mono text-red-400 mb-2">THREAT ASSESSMENT</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Compatibility</span>
                    <span className="text-green-500">{threatAssessment.compatibility.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Impact Factor</span>
                    <span className="text-yellow-500">{threatAssessment.impact.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Deploy Ready</span>
                    <span className="text-red-500">{threatAssessment.readiness.toFixed(1)}%</span>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
      
      {/* Main card */}
      <div className={`relative bg-gray-950/80 backdrop-blur-xl border-2 rounded-xl h-full transition-all duration-300 overflow-hidden ${
        isTargeted 
          ? 'border-red-500 shadow-2xl shadow-red-500/50' 
          : 'border-gray-800'
      }`}>
        {/* Energy field effect */}
        <AnimatePresence>
          {isTargeted && (
            <>
              <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                style={{
                  background: `radial-gradient(circle at center, ${service.colorHex}40, transparent)`,
                }}
              />
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.1, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                style={{
                  background: `radial-gradient(circle at center, ${service.colorHex}20, transparent)`,
                }}
              />
            </>
          )}
        </AnimatePresence>
        
        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <motion.div
                animate={isTargeted ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="w-16 h-16 text-red-500" />
              </motion.div>
              <div className="text-right">
                <div className={`px-3 py-1 rounded text-xs font-bold inline-block ${
                  service.status === 'ARMED' || service.status === 'ACTIVE' ? 'bg-green-900/50 text-green-400' :
                  service.status === 'READY' || service.status === 'SCANNING' ? 'bg-yellow-900/50 text-yellow-400' :
                  service.status === 'FORTIFIED' || service.status === 'DEPLOYED' ? 'bg-blue-900/50 text-blue-400' :
                  'bg-red-900/50 text-red-400'
                }`}>
                  {service.status}
                </div>
                <p className="text-xs text-gray-500 mt-1">{service.clearance}</p>
              </div>
            </div>
            <h3 className="text-2xl font-black mb-2">
              <GlitchText intensity={isTargeted ? "high" : "low"}>{service.title}</GlitchText>
            </h3>
            <p className="text-sm font-mono text-gray-500 mb-1">{service.designation}</p>
            <p className="text-sm text-gray-400">{service.class}</p>
          </div>
          
          <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
          
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
                {powerLevel === 100 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-green-500 text-center mt-1 font-bold"
                  >
                    READY TO DEPLOY
                  </motion.p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Features list */}
          <ul className="space-y-2 mb-8">
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                className="flex items-start gap-2 text-sm"
              >
                <motion.div
                  animate={isTargeted ? { rotate: 360 } : {}}
                  transition={{ duration: 2, repeat: isTargeted ? Infinity : 0, ease: "linear" }}
                >
                  <Zap className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                </motion.div>
                <span className="text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 rounded p-3 text-center border border-gray-800"
            >
              <Power className="w-4 h-4 text-red-500 mx-auto mb-1" />
              <div className="text-xl font-black text-red-500">{service.power}</div>
              <div className="text-xs text-gray-500">POWER</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 rounded p-3 text-center border border-gray-800"
            >
              <Radar className="w-4 h-4 text-purple-500 mx-auto mb-1" />
              <div className="text-xl font-black text-purple-500">{service.range}</div>
              <div className="text-xs text-gray-500">RANGE</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 rounded p-3 text-center border border-gray-800"
            >
              <Bomb className="w-4 h-4 text-green-500 mx-auto mb-1" />
              <div className="text-xl font-black text-green-500">{service.impact}</div>
              <div className="text-xs text-gray-500">IMPACT</div>
            </motion.div>
          </div>
          
          {/* Additional metrics */}
          {service.metrics && (
            <div className="grid grid-cols-2 gap-2 mb-6">
              {Object.entries(service.metrics).map(([key, value]) => (
                <div key={key} className="bg-gray-900/50 rounded p-2">
                  <p className="text-xs text-gray-500 capitalize">{key}</p>
                  <p className="text-sm font-bold text-gray-300">{value}</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Action button */}
          <Link href={service.link}>
            <motion.button
              className="w-full py-4 rounded-lg font-bold text-center transition-all relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isTargeted && powerLevel < 100}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isTargeted && powerLevel < 100 ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    CHARGING...
                  </>
                ) : (
                  <>
                    DEPLOY {service.codename}
                    <Target className="w-5 h-5" />
                  </>
                )}
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={isTargeted ? { x: '100%' } : {}}
                transition={{ duration: 1, repeat: isTargeted ? Infinity : 0 }}
              />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// Countdown system with urgency
function CountdownSystem() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 47,
    seconds: 59
  })
  
  const [urgencyLevel, setUrgencyLevel] = useState('normal')
  
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
        
        // Update urgency level
        if (days === 0 && hours < 12) {
          setUrgencyLevel('critical')
        } else if (days < 3) {
          setUrgencyLevel('high')
        } else if (days < 7) {
          setUrgencyLevel('medium')
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  const getUrgencyColor = () => {
    switch (urgencyLevel) {
      case 'critical': return 'from-red-600 to-orange-600'
      case 'high': return 'from-orange-600 to-yellow-600'
      case 'medium': return 'from-yellow-600 to-green-600'
      default: return 'from-red-600 to-red-700'
    }
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-block"
    >
      <div className={`bg-black/80 backdrop-blur-xl border-2 ${
        urgencyLevel === 'critical' ? 'border-red-600 animate-pulse' : 'border-red-600'
      } rounded-xl p-6 relative overflow-hidden`}>
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, red 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, red 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, red 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <p className="text-sm text-gray-400 mb-4 text-center relative z-10">PHASE 1 DEPLOYMENT WINDOW</p>
        
        <div className="flex items-center gap-3 font-mono relative z-10">
          <div className="text-center">
            <motion.div
              className={`text-4xl font-bold bg-gradient-to-r ${getUrgencyColor()} bg-clip-text text-transparent`}
              animate={urgencyLevel === 'critical' ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, repeat: urgencyLevel === 'critical' ? Infinity : 0 }}
            >
              {String(timeLeft.days).padStart(2, '0')}
            </motion.div>
            <div className="text-xs text-gray-500">DAYS</div>
          </div>
          
          <span className="text-2xl text-red-600 animate-pulse">:</span>
          
          <div className="text-center">
            <div className={`text-4xl font-bold bg-gradient-to-r ${getUrgencyColor()} bg-clip-text text-transparent`}>
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-500">HOURS</div>
          </div>
          
          <span className="text-2xl text-red-600 animate-pulse">:</span>
          
          <div className="text-center">
            <div className={`text-4xl font-bold bg-gradient-to-r ${getUrgencyColor()} bg-clip-text text-transparent`}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-500">MINS</div>
          </div>
          
          <span className="text-2xl text-red-600 animate-pulse">:</span>
          
          <div className="text-center">
            <div className={`text-4xl font-bold bg-gradient-to-r ${getUrgencyColor()} bg-clip-text text-transparent`}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-500">SECS</div>
          </div>
        </div>
        
        <div className="mt-4 text-center relative z-10">
          <p className={`text-xs font-bold ${
            urgencyLevel === 'critical' ? 'text-red-400 animate-pulse' : 'text-red-400'
          }`}>
            11 POSITIONS REMAINING
          </p>
          <div className="mt-2 h-2 bg-gray-900 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${getUrgencyColor()}`}
              initial={{ width: '0%' }}
              animate={{ width: '63%' }}
              transition={{ duration: 2 }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">19 of 30 positions filled</p>
        </div>
        
        {urgencyLevel === 'critical' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-red-600/10 animate-pulse pointer-events-none"
          />
        )}
      </div>
    </motion.div>
  )
}

// Enhanced stats counter with particle effects
function AnimatedStat({ value, label, icon: Icon, color, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState([])
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
        setCount(prev => {
          const newCount = Math.min(prev + increment, value)
          if (newCount === value) {
            // Create celebration particles
            setParticles(Array.from({ length: 10 }, (_, i) => ({
              id: i,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            })))
          }
          return newCount
        })
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
      <div className="relative bg-black/80 backdrop-blur border border-gray-800 group-hover:border-red-500/50 rounded-xl p-8 text-center transition-all overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${color === 'red' ? 'ef4444' : color === 'purple' ? 'a855f7' : color === 'green' ? '10b981' : '3b82f6'}' fill-opacity='0.03'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <motion.div
          animate={isVisible ? { rotate: [0, 360] } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative z-10"
        >
          <Icon className={`w-14 h-14 text-${color}-500 mx-auto mb-4`} />
        </motion.div>
        
        <div className={`text-5xl font-black text-${color}-500 mb-2 relative z-10`}>
          {count}{suffix}
        </div>
        <div className="text-sm text-gray-400 relative z-10">{label}</div>
        
        {/* Celebration particles */}
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className={`absolute w-2 h-2 bg-${color}-500 rounded-full`}
              initial={{ 
                x: '50%', 
                y: '50%',
                scale: 0,
                opacity: 1
              }}
              animate={{ 
                x: `calc(50% + ${particle.x}px)`,
                y: `calc(50% + ${particle.y}px)`,
                scale: 1,
                opacity: 0
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => {
                setParticles(prev => prev.filter(p => p.id !== particle.id))
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// Navigation indicator
function NavigationIndicator({ sections, currentSection }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            whileHover={{ x: 5 }}
            className="relative group"
          >
            <Link href={`#${section.id}`}>
              <div className={`w-3 h-3 rounded-full border-2 transition-all ${
                currentSection === section.id
                  ? 'bg-red-500 border-red-500 scale-125'
                  : 'bg-transparent border-gray-600 hover:border-red-500'
              }`} />
            </Link>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/90 px-3 py-1 rounded text-xs whitespace-nowrap pointer-events-none"
            >
              {section.label}
            </motion.span>
          </motion.div>
        ))}
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
  const [currentSection, setCurrentSection] = useState('hero')
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  
  // Navigation sections
  const sections = [
    { id: 'hero', label: 'COMMAND CENTER' },
    { id: 'infrastructure', label: 'INFRASTRUCTURE' },
    { id: 'weapons', label: 'WEAPON SYSTEMS' },
    { id: 'metrics', label: 'DOMINANCE' },
    { id: 'deploy', label: 'DEPLOY' },
  ]
  
  // All 6 services as weapon systems
  const weaponSystems = [
    {
      icon: Brain,
      title: "SOVREN AI",
      codename: "COMPOUND INTELLIGENCE™",
      designation: "CMP-INT-∞",
      class: "EVOLUTIONARY WEAPON",
      clearance: "LEVEL 7",
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
      metrics: {
        "Efficiency Gain": "2400%",
        "Decision Speed": "47x",
        "Cost Reduction": "92%",
        "ROI Timeline": "30 days"
      },
      link: "/sovren-ai"
    },
    {
      icon: Code2,
      title: "CUSTOM AI",
      codename: "BESPOKE ARSENAL",
      designation: "BSP-ARS-X",
      class: "PRECISION WEAPON",
      clearance: "LEVEL 8",
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
      metrics: {
        "Dev Speed": "10x",
        "IP Value": "100%",
        "Security": "Military",
        "Scalability": "∞"
      },
      link: "/custom-development"
    },
    {
      icon: Shield,
      title: "SOVEREIGN SYSTEMS",
      codename: "INDEPENDENCE DAY",
      designation: "IND-DAY-1",
      class: "AUTONOMY WEAPON",
      clearance: "LEVEL 10",
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
      metrics: {
        "Data Control": "100%",
        "Uptime": "99.99%",
        "Compliance": "Total",
        "Independence": "Absolute"
      },
      link: "/sovereign-systems"
    },
    {
      icon: Building,
      title: "ENTERPRISE AI",
      codename: "CORPORATE WARFARE",
      designation: "CRP-WAR-Z",
      class: "TRANSFORMATION WEAPON",
      clearance: "LEVEL 9",
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
      metrics: {
        "Transformation": "Total",
        "ROI": "340%",
        "Time to Value": "90 days",
        "Market Share": "+47%"
      },
      link: "/enterprise"
    },
    {
      icon: LineChart,
      title: "AI ANALYTICS",
      codename: "FUTURE SIGHT",
      designation: "FTR-SGT-7",
      class: "PREDICTIVE WEAPON",
      clearance: "LEVEL 6",
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
      metrics: {
        "Accuracy": "97.3%",
        "Prediction Range": "180 days",
        "Data Processing": "TB/sec",
        "Insights": "Real-time"
      },
      link: "/analytics"
    },
    {
      icon: MessageSquare,
      title: "STRATEGIC AI",
      codename: "MIND CONTROL",
      designation: "MND-CTL-9",
      class: "ADVISORY WEAPON",
      clearance: "LEVEL 5",
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
      metrics: {
        "Strategy Success": "94%",
        "Decision Quality": "10x",
        "Market Position": "Top 3",
        "Execution Speed": "5x"
      },
      link: "/consulting"
    }
  ]
  
  // Track current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      sections.forEach(section => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section.id)
          }
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])
  
  // Entry sequence
  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 500))
      setSystemStatus('AUTHENTICATING')
      await new Promise(resolve => setTimeout(resolve, 800))
      setSystemStatus('LOADING WEAPONS')
      await new Promise(resolve => setTimeout(resolve, 700))
      setSystemStatus('SYSTEMS ARMED')
      await new Promise(resolve => setTimeout(resolve, 500))
      setEntryComplete(true)
    }
    sequence()
  }, [])
  
  // Entry screen
  if (!entryComplete) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center relative z-10"
        >
          <div className="relative mb-8">
            <motion.div
              className="w-40 h-40 mx-auto relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border-4 border-red-600 rounded-full" />
              <div className="absolute inset-2 border-2 border-red-500 rounded-full" />
              <div className="absolute inset-4 border border-red-400 rounded-full" />
              <div className="absolute inset-6 border border-red-300 rounded-full animate-pulse" />
            </motion.div>
            <Shield className="w-20 h-20 text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <h1 className="text-3xl font-black text-red-500 mb-4">
            <GlitchText intensity="high">COVREN DEFENSE SYSTEMS</GlitchText>
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-500 mb-8">
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="font-mono">{systemStatus}</span>
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          
          <motion.div
            className="flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
              >
                <div className="w-3 h-3 bg-red-600 rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-red-600 rounded-full animate-ping" />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-xs text-gray-600 font-mono"
          >
            INITIALIZING WEAPON SYSTEMS...
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
      <NavigationIndicator sections={sections} currentSection={currentSection} />
      
      {/* Hero Section - Maximum Impact */}
      <motion.section
        id="hero"
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
            {/* System status badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-green-950/50 backdrop-blur border border-green-600 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-green-400">SYSTEMS ONLINE</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-red-950/50 backdrop-blur border border-red-600 rounded-full px-4 py-2">
                <Crosshair className="w-4 h-4 text-red-500" />
                <span className="text-xs font-bold text-red-400">6 WEAPONS ARMED</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-yellow-950/50 backdrop-blur border border-yellow-600 rounded-full px-4 py-2">
                <AlertCircle className="w-4 h-4 text-yellow-500 animate-pulse" />
                <span className="text-xs font-mono text-yellow-400">TARGETS IDENTIFIED</span>
              </div>
            </motion.div>
            
            {/* Main headline with staggered animation */}
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
                <GlitchText intensity="high">SOLVE PROBLEMS</GlitchText>
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
            
            {/* Subtitle with typewriter effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto"
            >
              Six digital weapon systems. Each engineered for total market supremacy.
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="block text-red-500 font-bold mt-2"
              >
                Your competition's nightmares have names. We built them all.
              </motion.span>
            </motion.p>
            
            {/* Countdown with enhanced urgency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="mb-12 flex justify-center"
            >
              <CountdownSystem />
            </motion.div>
            
            {/* Action buttons with energy effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
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
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </motion.a>
              
              <motion.a
                href="/contact"
                className="bg-black border-2 border-red-600 hover:bg-red-950/50 text-red-500 font-bold py-5 px-10 rounded-lg flex items-center justify-center gap-3 transition-all text-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">INITIATE CONTACT</span>
                <Terminal className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-red-600/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating threat indicators */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-10 hidden lg:block"
        >
          <div className="bg-black/80 backdrop-blur-xl border border-red-900/50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Skull className="w-6 h-6 text-red-500" />
              </motion.div>
              <span className="text-sm font-mono text-red-500">THREAT LEVEL</span>
            </div>
            <p className="text-3xl font-black">CRITICAL</p>
            <p className="text-sm text-gray-500 mt-1">Markets disrupted: 47</p>
            <div className="mt-3 h-1 bg-gray-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-600 to-orange-600"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.7 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <div className="bg-black/80 backdrop-blur-xl border border-green-900/50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-green-500" />
              <span className="text-sm font-mono text-green-500">ELIMINATIONS</span>
            </div>
            <p className="text-3xl font-black">2,847</p>
            <p className="text-sm text-gray-500 mt-1">Competition neutralized</p>
            <div className="grid grid-cols-3 gap-1 mt-3">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-green-500 rounded-sm"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-500"
          >
            <ChevronRight className="w-6 h-6 rotate-90" />
          </motion.div>
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
      <section id="infrastructure" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />
        
        <div className="container max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="inline-block mb-6"
            >
              <div className="flex items-center justify-center gap-4 text-red-500 mb-4">
                <Server className="w-8 h-8" />
                <span className="text-2xl font-mono">CLASSIFIED INFRASTRUCTURE</span>
                <Server className="w-8 h-8" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <GlitchText intensity="medium">SOVEREIGN SYSTEM MONITORING</GlitchText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-time analysis of infrastructure that shouldn't exist. Specifications beyond classification.
            </p>
          </motion.div>
          
          <ExtremeInfrastructureMonitor />
        </div>
      </section>
      
      {/* Weapon Systems Grid */}
      <section id="weapons" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
        
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
                  <Crosshair className="w-10 h-10" />
                </motion.div>
                <span className="text-2xl font-mono">WEAPON SELECTION PROTOCOL</span>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Crosshair className="w-10 h-10" />
                </motion.div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <GlitchText intensity="high">CHOOSE YOUR WEAPON</GlitchText>
              </h2>
            </motion.div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Six paths to absolute dominance. Each system engineered to obliterate specific market weaknesses.
              <span className="block text-red-500 font-bold mt-2">
                Warning: Deployment results in irreversible competitive advantages.
              </span>
            </p>
            
            {/* Weapon system stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-400">ARMED & READY</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                <span className="text-gray-400">CHARGING</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-gray-400">FORTIFIED</span>
              </div>
            </motion.div>
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
              <div className="bg-black/80 backdrop-blur-xl border-2 border-yellow-600/50 rounded-xl p-8 max-w-3xl relative overflow-hidden">
                {/* Animated warning stripes */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #eab308 10px, #eab308 20px)',
                    animation: 'slide 1s linear infinite',
                  }} />
                </div>
                
                <div className="relative z-10">
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
                  
                  {/* Protocol steps */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <Fingerprint className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">BIOMETRIC SCAN</p>
                    </div>
                    <div className="text-center">
                      <Key className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">AUTHORIZATION</p>
                    </div>
                    <div className="text-center">
                      <Power className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">DEPLOYMENT</p>
                    </div>
                  </div>
                </div>
                
                <style jsx>{`
                  @keyframes slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(20px); }
                  }
                `}</style>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Dominance Metrics */}
      <section id="metrics" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/10 to-transparent" />
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="inline-block mb-6"
            >
              <BarChart3 className="w-12 h-12 text-red-500 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">DOMINANCE VERIFIED</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-time proof of market supremacy. Numbers that make competitors weep.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <AnimatedStat value={127} label="AI Systems Deployed" icon={Server} color="red" />
            <AnimatedStat value={89} label="Enterprises Transformed" icon={Building} color="purple" />
            <AnimatedStat value={2400} label="% Efficiency Gains" icon={TrendingUp} color="green" suffix="%" />
            <AnimatedStat value={47} label="Proprietary Innovations" icon={Brain} color="blue" />
          </div>
          
          {/* Additional metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">OPERATIONAL EXCELLENCE</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <p className="text-sm text-gray-400">Autonomous Operations</p>
              </div>
              <div className="text-center">
                <Shield className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-500 mb-2">99.99%</div>
                <p className="text-sm text-gray-400">System Uptime</p>
              </div>
              <div className="text-center">
                <Zap className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-500 mb-2"><3ms</div>
                <p className="text-sm text-gray-400">Response Time</p>
              </div>
            </div>
          </motion.div>
          
          {/* Client logos placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-400 mb-8">
              Trusted by industry titans who understand that second place is first loser.
            </p>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-10" />
              <motion.div
                className="flex items-center gap-8"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="w-32 h-12 bg-gray-800 rounded flex-shrink-0 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA - Maximum urgency */}
      <section id="deploy" className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 animate-gradient" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgMCBMIDAgMCBMIDQwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjAwMDAiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
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
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-red-500" />
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-red-500" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-red-500" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-red-500" />
              
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
                <GlitchText intensity="high">READY TO DOMINATE?</GlitchText>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                The future belongs to those who strike first. Every second you hesitate, 
                your competition gets stronger. Every moment of indecision costs market share.
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl text-red-500 font-bold mb-8"
              >
                What are you waiting for?
              </motion.p>
              
              {/* Urgency indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
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
                {/* Energy pulse effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-red-600"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
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
