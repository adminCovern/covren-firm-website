'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { 
  Terminal, Brain, Shield, Zap, ChevronRight, Check, AlertTriangle, Lock, 
  Activity, Server, Database, Code2, Sparkles, BarChart3, Target, Users,
  Clock, Crosshair, Fingerprint, Eye, ShieldAlert, Binary, Key, Skull,
  Radio, AlertCircle, Timer, Power, Siren, Navigation
} from 'lucide-react'

// Type definitions
interface GlitchTextProps {
  children: React.ReactNode
  className?: string
  intensity?: string
}

interface TypewriterTextProps {
  text: string
  delay?: number
}

interface ApplicationProgressProps {
  currentStep: number
  totalSteps: number
}

interface QualificationScoreProps {
  score: number
}

interface SecurityScannerProps {
  active?: boolean
}

// Enhanced glitch effect
function GlitchText({ children, className = "", intensity = "medium" }: GlitchTextProps) {
  const [glitch, setGlitch] = useState(false)
  
  useEffect(() => {
    const baseInterval = intensity === "high" ? 500 : intensity === "low" ? 3000 : 1500
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 150)
    }, baseInterval + Math.random() * 2000)
    
    return () => clearInterval(interval)
  }, [intensity])
  
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      {glitch && (
        <>
          <span className="absolute inset-0 text-red-500 opacity-70" style={{ transform: 'translate(-2px, -1px)' }}>
            {children}
          </span>
          <span className="absolute inset-0 text-cyan-500 opacity-70" style={{ transform: 'translate(2px, 1px)' }}>
            {children}
          </span>
        </>
      )}
    </div>
  )
}

// Enhanced typing effect
function TypewriterText({ text, delay = 50 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, delay)
    
    return () => clearInterval(timer)
  }, [text, delay])
  
  return (
    <span>
      {displayText}
      <span className="animate-pulse text-red-500">|</span>
    </span>
  )
}

// Military-grade progress indicator
function ApplicationProgress({ currentStep, totalSteps }: ApplicationProgressProps) {
  const progress = (currentStep / totalSteps) * 100
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-red-900/50">
      {/* Scanning line */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      
      <div className="container max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Terminal className="w-5 h-5 text-red-500" />
            </motion.div>
            <span className="font-mono text-sm text-red-500 font-bold">
              <GlitchText>SOVREN://CLEARANCE.PROTOCOL</GlitchText>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">SECURITY LEVEL</span>
            <span className="text-sm text-red-400 font-mono font-bold">
              {currentStep}/{totalSteps}
            </span>
          </div>
        </div>
        <div className="relative h-2 bg-gray-900 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-red-950/30" />
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-y-0 bg-white/20"
            animate={{ 
              x: ['-100%', '200%'],
              width: ['20%', '40%', '20%']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  )
}

// Enhanced qualification visualization
function QualificationScore({ score }: QualificationScoreProps) {
  const scoreColor = score >= 80 ? 'text-green-500' : score >= 60 ? 'text-yellow-500' : 'text-red-500'
  const scoreLabel = score >= 80 ? 'WEAPON READY' : score >= 60 ? 'CLEARANCE PENDING' : 'ADDITIONAL SCREENING'
  const threatLevel = score >= 80 ? 'MINIMAL' : score >= 60 ? 'MODERATE' : 'ELEVATED'
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Outer ring animation */}
      <motion.div
        className="absolute inset-0 border-4 border-red-500/30 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity }
        }}
      />
      
      <svg width="200" height="200" className="mx-auto">
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="10"
        />
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#scoreGradient)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={565}
          initial={{ strokeDashoffset: 565 }}
          animate={{ strokeDashoffset: 565 - (565 * score) / 100 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          transform="rotate(-90 100 100)"
        />
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className={`text-5xl font-black ${scoreColor}`}>{score}%</div>
          <div className="text-sm text-gray-400 font-mono">{scoreLabel}</div>
          <div className="text-xs text-red-400 mt-1">THREAT: {threatLevel}</div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Military-grade background
function DynamicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-gray-950/20" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />
    </div>
  )
}

// Security scanner animation
function SecurityScanner({ active = false }: SecurityScannerProps) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-40"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, ease: 'linear' }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: 3 }}
              className="text-green-500 text-center"
            >
              <Fingerprint className="w-24 h-24 mx-auto mb-4" />
              <p className="font-mono text-sm">BIOMETRIC VERIFICATION IN PROGRESS</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function SovrenApplicationUltimate() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [qualificationScore, setQualificationScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [securityScan, setSecurityScan] = useState(false)
  const totalSteps = 4
  
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    website: '',
    
    // Company Profile
    companySize: '',
    industry: '',
    aiMaturity: '',
    currentSpend: '',
    
    // Technical Assessment
    currentStack: '',
    dataSensitivity: '',
    scalingNeeds: '',
    timeline: '',
    
    // Sovereignty Readiness
    whySovereignty: '',
    biggestChallenge: '',
    successMetrics: '',
    commitment: ''
  })

  const calculateQualificationScore = () => {
    let score = 0
    
    // Company size scoring
    if (formData.companySize === '51-200' || formData.companySize === '201-1000') score += 20
    else if (formData.companySize === '11-50') score += 15
    else if (formData.companySize === '1000+') score += 25
    else score += 10
    
    // AI maturity scoring
    if (formData.aiMaturity === 'advanced') score += 25
    else if (formData.aiMaturity === 'intermediate') score += 20
    else if (formData.aiMaturity === 'beginner') score += 15
    else score += 10
    
    // Current spend scoring
    if (formData.currentSpend === '5000+') score += 25
    else if (formData.currentSpend === '2000-5000') score += 20
    else if (formData.currentSpend === '500-2000') score += 15
    else score += 10
    
    // Timeline scoring
    if (formData.timeline === 'immediate') score += 20
    else if (formData.timeline === 'month') score += 15
    else if (formData.timeline === 'quarter') score += 10
    else score += 5
    
    // Add bonus for strong answers
    if (formData.whySovereignty.length > 100) score += 10
    if (formData.commitment === 'high') score += 10
    
    return Math.min(score, 100)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNextStep = () => {
    // Trigger security scan on step 3
    if (currentStep === 3) {
      setSecurityScan(true)
      setTimeout(() => setSecurityScan(false), 2000)
    }
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    setIsAnalyzing(true)
    
    // Simulate analysis
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const score = calculateQualificationScore()
    setQualificationScore(score)
    setIsAnalyzing(false)
    setShowResults(true)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block mb-4"
              >
                <div className="p-4 bg-red-950/30 rounded-full border-2 border-red-500/50">
                  <Shield className="w-12 h-12 text-red-500" />
                </div>
              </motion.div>
              <h2 className="text-3xl font-black mb-4">
                <GlitchText>IDENTITY VERIFICATION</GlitchText>
              </h2>
              <p className="text-gray-400">Initiating Level 10 clearance protocol</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">FIRST NAME *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300"
                  placeholder="CLASSIFIED"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">LAST NAME *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300"
                  placeholder="CLASSIFIED"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">SECURE EMAIL *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300"
                  placeholder="operator@command.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">ORGANIZATION *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300"
                  placeholder="[REDACTED]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">CLEARANCE LEVEL *</label>
                <input
                  type="text"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300"
                  placeholder="Commander / Strategic Officer / Tech Lead"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">VERIFICATION URL</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300"
                  placeholder="https://classified.domain"
                />
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-yellow-950/20 border border-yellow-600/50 rounded-lg p-4 flex items-start gap-3"
            >
              <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400">
                All information is encrypted and transmitted through military-grade channels. 
                False declarations will result in immediate termination of access protocols.
              </p>
            </motion.div>
          </motion.div>
        )
        
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                className="inline-block mb-4"
              >
                <div className="p-4 bg-orange-950/30 rounded-full border-2 border-orange-500/50">
                  <Target className="w-12 h-12 text-orange-500" />
                </div>
              </motion.div>
              <h2 className="text-3xl font-black mb-4">TARGET ASSESSMENT</h2>
              <p className="text-gray-400">Analyzing organizational combat readiness</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">FORCE STRENGTH *</label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {['1-10', '11-50', '51-200', '201-1000', '1000+'].map(size => (
                    <motion.button
                      key={size}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, companySize: size }))}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 font-mono text-sm ${
                        formData.companySize === size
                          ? 'bg-red-600/20 border-red-500 text-white shadow-lg shadow-red-500/30'
                          : 'bg-gray-900/30 border-gray-700 text-gray-400 hover:border-red-900'
                      }`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">OPERATIONAL THEATER *</label>
                <select
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300"
                >
                  <option value="">SELECT BATTLEGROUND</option>
                  <option value="technology">TECHNOLOGY WARFARE</option>
                  <option value="finance">FINANCIAL DOMINANCE</option>
                  <option value="healthcare">MEDICAL SUPREMACY</option>
                  <option value="retail">COMMERCE CONTROL</option>
                  <option value="manufacturing">INDUSTRIAL POWER</option>
                  <option value="consulting">STRATEGIC OPERATIONS</option>
                  <option value="other">CLASSIFIED SECTOR</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">AI COMBAT EXPERIENCE *</label>
                <div className="space-y-3">
                  {[
                    { value: 'exploring', label: 'RECONNAISSANCE', desc: 'Scouting AI capabilities', icon: Eye },
                    { value: 'beginner', label: 'BASIC TRAINING', desc: 'Initial AI deployments', icon: Activity },
                    { value: 'intermediate', label: 'COMBAT READY', desc: 'Multiple AI operations active', icon: Crosshair },
                    { value: 'advanced', label: 'SPECIAL FORCES', desc: 'AI-driven strategic dominance', icon: Skull }
                  ].map(level => (
                    <motion.button
                      key={level.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, aiMaturity: level.value }))}
                      whileHover={{ x: 5 }}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left group ${
                        formData.aiMaturity === level.value
                          ? 'bg-red-600/20 border-red-500 shadow-lg shadow-red-500/30'
                          : 'bg-gray-900/30 border-gray-700 hover:border-red-900'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <level.icon className={`w-8 h-8 ${
                          formData.aiMaturity === level.value ? 'text-red-500' : 'text-gray-600'
                        }`} />
                        <div>
                          <div className="font-bold">{level.label}</div>
                          <div className="text-sm text-gray-400">{level.desc}</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">MONTHLY WAR CHEST (AI BUDGET) *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['0-500', '500-2000', '2000-5000', '5000+'].map(spend => (
                    <motion.button
                      key={spend}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, currentSpend: spend }))}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        formData.currentSpend === spend
                          ? 'bg-green-600/20 border-green-500 text-white shadow-lg shadow-green-500/30'
                          : 'bg-gray-900/30 border-gray-700 text-gray-400 hover:border-green-900'
                      }`}
                    >
                      <div className="text-lg font-mono font-bold">${spend}</div>
                      <div className="text-xs text-gray-500">MONTHLY</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )
        
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2 }}
                className="inline-block mb-4"
              >
                <div className="p-4 bg-purple-950/30 rounded-full border-2 border-purple-500/50">
                  <Binary className="w-12 h-12 text-purple-500" />
                </div>
              </motion.div>
              <h2 className="text-3xl font-black mb-4">TECHNICAL RECONNAISSANCE</h2>
              <p className="text-gray-400">Assessing sovereignty requirements</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">CURRENT ARSENAL (TECH STACK) *</label>
                <textarea
                  name="currentStack"
                  required
                  rows={3}
                  value={formData.currentStack}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 resize-none font-mono"
                  placeholder="[CLASSIFIED SYSTEMS DETECTED]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">INTELLIGENCE CLASSIFICATION *</label>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { value: 'low', label: 'PUBLIC', desc: 'Open intelligence', color: 'green', icon: Eye },
                    { value: 'medium', label: 'RESTRICTED', desc: 'Proprietary data', color: 'yellow', icon: ShieldAlert },
                    { value: 'high', label: 'TOP SECRET', desc: 'Critical assets', color: 'red', icon: Lock }
                  ].map(level => (
                    <motion.button
                      key={level.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, dataSensitivity: level.value }))}
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 rounded-lg border-2 transition-all duration-300 relative overflow-hidden group ${
                        formData.dataSensitivity === level.value
                          ? level.color === 'green' ? 'bg-green-600/20 border-green-500 shadow-lg shadow-green-500/30' :
                            level.color === 'yellow' ? 'bg-yellow-600/20 border-yellow-500 shadow-lg shadow-yellow-500/30' :
                            'bg-red-600/20 border-red-500 shadow-lg shadow-red-500/30'
                          : 'bg-gray-900/30 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      {formData.dataSensitivity === level.value && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                      
                      <Shield className={`w-10 h-10 mb-3 mx-auto relative z-10 ${
                        formData.dataSensitivity === level.value 
                          ? level.color === 'green' ? 'text-green-500' :
                            level.color === 'yellow' ? 'text-yellow-500' :
                            'text-red-500'
                          : 'text-gray-600'
                      }`} />
                      <div className="font-bold relative z-10">{level.label}</div>
                      <div className="text-xs text-gray-400 relative z-10">{level.desc}</div>
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">DEPLOYMENT PARAMETERS *</label>
                <textarea
                  name="scalingNeeds"
                  required
                  rows={3}
                  value={formData.scalingNeeds}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Mission objectives, operational tempo, resource allocation..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">DEPLOYMENT TIMELINE *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: 'immediate', label: 'DEFCON 1', desc: 'Deploy NOW', icon: Siren, color: 'red' },
                    { value: 'month', label: 'RAPID', desc: '30 days', icon: Timer, color: 'orange' },
                    { value: 'quarter', label: 'PLANNED', desc: '90 days', icon: Target, color: 'yellow' },
                    { value: 'exploring', label: 'RECON', desc: 'Evaluating', icon: Radio, color: 'blue' }
                  ].map(timeline => (
                    <motion.button
                      key={timeline.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, timeline: timeline.value }))}
                      whileHover={{ y: -5 }}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 group ${
                        formData.timeline === timeline.value
                          ? timeline.color === 'red' ? 'bg-red-600/20 border-red-500' :
                            timeline.color === 'orange' ? 'bg-orange-600/20 border-orange-500' :
                            timeline.color === 'yellow' ? 'bg-yellow-600/20 border-yellow-500' :
                            'bg-blue-600/20 border-blue-500'
                          : 'bg-gray-900/30 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <timeline.icon className={`w-8 h-8 mb-2 mx-auto ${
                        formData.timeline === timeline.value 
                          ? timeline.color === 'red' ? 'text-red-500' :
                            timeline.color === 'orange' ? 'text-orange-500' :
                            timeline.color === 'yellow' ? 'text-yellow-500' :
                            'text-blue-500'
                          : 'text-gray-600'
                      } group-hover:animate-pulse`} />
                      <div className="font-bold text-sm">{timeline.label}</div>
                      <div className="text-xs text-gray-500">{timeline.desc}</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )
        
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <div className="p-4 bg-red-950/30 rounded-full border-2 border-red-500/50">
                  <Power className="w-12 h-12 text-red-500" />
                </div>
              </motion.div>
              <h2 className="text-3xl font-black mb-4">FINAL AUTHORIZATION</h2>
              <p className="text-gray-400">Confirming sovereignty commitment protocols</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">MISSION OBJECTIVE *</label>
                <textarea
                  name="whySovereignty"
                  required
                  rows={4}
                  value={formData.whySovereignty}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Why sovereign AI? What triggered this protocol? What's your endgame?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">PRIMARY TARGET *</label>
                <textarea
                  name="biggestChallenge"
                  required
                  rows={3}
                  value={formData.biggestChallenge}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 resize-none"
                  placeholder="What enemy must SOVREN eliminate?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">VICTORY CONDITIONS *</label>
                <textarea
                  name="successMetrics"
                  required
                  rows={3}
                  value={formData.successMetrics}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border-2 border-gray-800 hover:border-red-900 focus:border-red-500 rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 resize-none"
                  placeholder="How will you measure SOVREN's dominance?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-red-400 mb-2">COMMITMENT AUTHORIZATION *</label>
                <div className="space-y-3">
                  {[
                    { 
                      value: 'high', 
                      label: 'FULL DEPLOYMENT', 
                      desc: 'Ready to unleash sovereign AI warfare',
                      color: 'text-green-500',
                      icon: Skull
                    },
                    { 
                      value: 'medium', 
                      label: 'STRATEGIC INITIATIVE', 
                      desc: 'Phased AI transformation protocol',
                      color: 'text-yellow-500',
                      icon: Navigation
                    },
                    { 
                      value: 'low', 
                      label: 'RECONNAISSANCE', 
                      desc: 'Evaluating tactical options',
                      color: 'text-blue-500',
                      icon: Radio
                    }
                  ].map(level => (
                    <motion.button
                      key={level.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, commitment: level.value }))}
                      whileHover={{ x: 10 }}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left relative overflow-hidden ${
                        formData.commitment === level.value
                          ? 'bg-red-600/20 border-red-500'
                          : 'bg-gray-900/30 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      {formData.commitment === level.value && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      )}
                      
                      <div className="flex items-start gap-3 relative z-10">
                        <div className="mt-0.5">
                          <level.icon className={`w-6 h-6 ${
                            formData.commitment === level.value ? level.color : 'text-gray-600'
                          }`} />
                        </div>
                        <div>
                          <div className="font-bold flex items-center gap-2">
                            {level.label}
                            {formData.commitment === level.value && (
                              <Check className="w-4 h-4 text-green-500" />
                            )}
                          </div>
                          <div className="text-sm text-gray-400">{level.desc}</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-red-950/20 border border-red-600/50 rounded-lg p-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />
                <p className="font-mono text-red-500 font-bold text-sm">FINAL WARNING</p>
              </div>
              <p className="text-xs text-gray-400">
                Submission initiates irreversible deployment protocols. False information will result in 
                immediate termination of access. Sovereign AI transformation cannot be undone.
              </p>
            </motion.div>
          </motion.div>
        )
        
      default:
        return null
    }
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <DynamicBackground />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-2xl w-full text-center"
        >
          {/* Security clearance badge */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-black/80 backdrop-blur border-2 border-red-500/50 rounded-lg px-6 py-3">
              <Lock className="w-5 h-5 text-red-500" />
              <span className="font-mono text-red-400 font-bold">CLEARANCE EVALUATION COMPLETE</span>
              <Lock className="w-5 h-5 text-red-500" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8"
          >
            <QualificationScore score={qualificationScore} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-4xl font-black mb-4"
          >
            <GlitchText intensity="medium">
              {qualificationScore >= 80 ? 
                'WEAPON SYSTEMS AUTHORIZED' : 
                qualificationScore >= 60 ? 
                'PROVISIONAL CLEARANCE GRANTED' : 
                'ADDITIONAL SCREENING REQUIRED'
              }
            </GlitchText>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="text-xl text-gray-400 mb-8"
          >
            Your dossier has been encrypted and transmitted to command.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="bg-gray-900/50 backdrop-blur border-2 border-gray-800 rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
              <Navigation className="w-6 h-6 text-red-500" />
              DEPLOYMENT SEQUENCE
            </h2>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2 }}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="font-bold">Command Review (24-48 hours)</p>
                  <p className="text-sm text-gray-400">Founder personally evaluates all applications</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4 }}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="font-bold">Strategic Briefing</p>
                  <p className="text-sm text-gray-400">Deep dive into sovereignty requirements</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.6 }}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <p className="font-bold">Live Weapons Demo</p>
                  <p className="text-sm text-gray-400">Witness SOVREN obliterate your use case</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            <p className="text-gray-400 mb-4">
              Secure communications channel:
            </p>
            <a 
              href="mailto:sovereignty@covrenfirm.com" 
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-bold font-mono"
            >
              sovereignty@covrenfirm.com
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <DynamicBackground />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mb-6"
          >
            <Brain className="w-16 h-16 text-red-500 mx-auto" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-4">
            <TypewriterText text="ANALYZING THREAT VECTORS..." />
          </h2>
          <div className="flex items-center justify-center gap-2">
            <motion.div
              className="w-3 h-3 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-3 h-3 bg-orange-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-yellow-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-4 font-mono">
            CLEARANCE LEVEL DETERMINATION IN PROGRESS
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <DynamicBackground />
      <SecurityScanner active={securityScan} />
      <ApplicationProgress currentStep={currentStep} totalSteps={totalSteps} />
      
      <div className="relative z-10 container max-w-4xl mx-auto px-6 py-24 mt-16">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between mt-12"
        >
          <motion.button
            type="button"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            whileHover={{ scale: currentStep > 1 ? 1.05 : 1 }}
            whileTap={{ scale: currentStep > 1 ? 0.95 : 1 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
              currentStep === 1
                ? 'bg-gray-900/30 text-gray-600 cursor-not-allowed'
                : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800 hover:border-red-900'
            }`}
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            RETREAT
          </motion.button>
          
          <div className="flex items-center gap-3">
            {[...Array(totalSteps)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: i + 1 === currentStep ? [1, 1.2, 1] : 1,
                  backgroundColor: i + 1 <= currentStep ? '#ef4444' : '#374151'
                }}
                transition={{ duration: 0.5 }}
                className={`w-3 h-3 rounded-full transition-all duration-300`}
              />
            ))}
          </div>
          
          <motion.button
            type="button"
            onClick={handleNextStep}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-red-500/30"
          >
            {currentStep === totalSteps ? 'DEPLOY' : 'ADVANCE'}
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
