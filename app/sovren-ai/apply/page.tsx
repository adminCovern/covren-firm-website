'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Terminal, Brain, Shield, Zap, ChevronRight, Check, AlertTriangle, Lock, Activity, Server, Database, Code2, Sparkles, BarChart3, Target, Users, Clock } from 'lucide-react'

// Real-time typing effect
function TypewriterText({ text, delay = 50 }) {
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
      <span className="animate-pulse">|</span>
    </span>
  )
}

// Progress indicator with live status
function ApplicationProgress({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <div className="container max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-red-500" />
            <span className="font-mono text-sm text-red-500">SOVREN://QUALIFICATION.ASSESSMENT</span>
          </div>
          <span className="text-sm text-gray-400">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-600 to-red-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  )
}

// Qualification score visualization
function QualificationScore({ score }) {
  const scoreColor = score >= 80 ? 'text-green-500' : score >= 60 ? 'text-yellow-500' : 'text-red-500'
  const scoreLabel = score >= 80 ? 'EXCELLENT FIT' : score >= 60 ? 'GOOD POTENTIAL' : 'NEEDS DISCUSSION'
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
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
        >
          <div className={`text-5xl font-black ${scoreColor}`}>{score}%</div>
          <div className="text-sm text-gray-400">{scoreLabel}</div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Dynamic background
function DynamicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-gray-950/20" />
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-red-500/20"
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
    </div>
  )
}

export default function SovrenApplicationUltimate() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [qualificationScore, setQualificationScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNextStep = () => {
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
              <h2 className="text-3xl font-bold mb-4">Let's Start With The Basics</h2>
              <p className="text-gray-400">Tell us who's ready to command sovereign AI</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300"
                  placeholder="John"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300"
                  placeholder="Geary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300"
                  placeholder="your@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Company *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300"
                  placeholder="Acme Corp"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Role *</label>
                <input
                  type="text"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300"
                  placeholder="Founder / CTO / Head of AI"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Company Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300"
                  placeholder="https://company.com"
                />
              </div>
            </div>
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
              <h2 className="text-3xl font-bold mb-4">Company Intelligence Profile</h2>
              <p className="text-gray-400">Help us understand your organization's AI readiness</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Company Size *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['1-10', '11-50', '51-200', '201-1000', '1000+'].map(size => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, companySize: size }))}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        formData.companySize === size
                          ? 'bg-red-600/20 border-red-500 text-white'
                          : 'bg-gray-900/30 border-gray-700 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {size} employees
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Industry *</label>
                <select
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300"
                >
                  <option value="">Select your industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">AI Maturity Level *</label>
                <div className="space-y-3">
                  {[
                    { value: 'exploring', label: 'Exploring', desc: 'Just starting our AI journey' },
                    { value: 'beginner', label: 'Beginner', desc: 'Using basic AI tools and APIs' },
                    { value: 'intermediate', label: 'Intermediate', desc: 'Multiple AI implementations in production' },
                    { value: 'advanced', label: 'Advanced', desc: 'AI is core to our operations' }
                  ].map(level => (
                    <button
                      key={level.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, aiMaturity: level.value }))}
                      className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                        formData.aiMaturity === level.value
                          ? 'bg-red-600/20 border-red-500'
                          : 'bg-gray-900/30 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="font-semibold">{level.label}</div>
                      <div className="text-sm text-gray-400">{level.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Current AI Spend (Monthly) *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['0-500', '500-2000', '2000-5000', '5000+'].map(spend => (
                    <button
                      key={spend}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, currentSpend: spend }))}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        formData.currentSpend === spend
                          ? 'bg-red-600/20 border-red-500 text-white'
                          : 'bg-gray-900/30 border-gray-700 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      ${spend}
                    </button>
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
              <h2 className="text-3xl font-bold mb-4">Technical Sovereignty Assessment</h2>
              <p className="text-gray-400">Let's understand your infrastructure needs</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Current AI Stack *</label>
                <textarea
                  name="currentStack"
                  required
                  rows={3}
                  value={formData.currentStack}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="OpenAI API, Claude, local LLMs, vector databases, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Data Sensitivity Level *</label>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { value: 'low', label: 'Low', desc: 'Public data only' },
                    { value: 'medium', label: 'Medium', desc: 'Some proprietary data' },
                    { value: 'high', label: 'High', desc: 'Critical IP & customer data' }
                  ].map(level => (
                    <button
                      key={level.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, dataSensitivity: level.value }))}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        formData.dataSensitivity === level.value
                          ? 'bg-red-600/20 border-red-500'
                          : 'bg-gray-900/30 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <Shield className={`w-6 h-6 mb-2 mx-auto ${
                        formData.dataSensitivity === level.value ? 'text-red-500' : 'text-gray-600'
                      }`} />
                      <div className="font-semibold">{level.label}</div>
                      <div className="text-sm text-gray-400">{level.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Expected Scaling Needs *</label>
                <textarea
                  name="scalingNeeds"
                  required
                  rows={3}
                  value={formData.scalingNeeds}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Current usage patterns, expected growth, peak loads..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Implementation Timeline *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: 'immediate', label: 'Immediate', icon: Zap },
                    { value: 'month', label: 'Within 30 days', icon: Clock },
                    { value: 'quarter', label: 'Within 3 months', icon: Target },
                    { value: 'exploring', label: 'Just exploring', icon: Brain }
                  ].map(timeline => (
                    <button
                      key={timeline.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, timeline: timeline.value }))}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        formData.timeline === timeline.value
                          ? 'bg-red-600/20 border-red-500'
                          : 'bg-gray-900/30 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <timeline.icon className={`w-6 h-6 mb-2 mx-auto ${
                        formData.timeline === timeline.value ? 'text-red-500' : 'text-gray-600'
                      }`} />
                      <div className="text-sm">{timeline.label}</div>
                    </button>
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
              <h2 className="text-3xl font-bold mb-4">The Sovereignty Commitment</h2>
              <p className="text-gray-400">Final questions to ensure mutual success</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Why AI Sovereignty? Why Now? *</label>
                <textarea
                  name="whySovereignty"
                  required
                  rows={4}
                  value={formData.whySovereignty}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="What's driving your need for sovereign AI? What triggered this search?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Biggest AI Challenge *</label>
                <textarea
                  name="biggestChallenge"
                  required
                  rows={3}
                  value={formData.biggestChallenge}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="What's the #1 problem you need SOVREN to solve?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Success Metrics *</label>
                <textarea
                  name="successMetrics"
                  required
                  rows={3}
                  value={formData.successMetrics}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 backdrop-blur border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="How will you measure success with SOVREN? What outcomes matter most?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Commitment Level *</label>
                <div className="space-y-3">
                  {[
                    { 
                      value: 'high', 
                      label: 'High Commitment', 
                      desc: 'Ready to deploy sovereign AI as core infrastructure',
                      color: 'text-green-500' 
                    },
                    { 
                      value: 'medium', 
                      label: 'Strategic Initiative', 
                      desc: 'Part of our AI transformation roadmap',
                      color: 'text-yellow-500' 
                    },
                    { 
                      value: 'low', 
                      label: 'Exploring Options', 
                      desc: 'Evaluating sovereign vs vendor solutions',
                      color: 'text-gray-500' 
                    }
                  ].map(level => (
                    <button
                      key={level.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, commitment: level.value }))}
                      className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                        formData.commitment === level.value
                          ? 'bg-red-600/20 border-red-500'
                          : 'bg-gray-900/30 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Check className={`w-5 h-5 mt-0.5 ${
                          formData.commitment === level.value ? level.color : 'text-gray-600'
                        }`} />
                        <div>
                          <div className="font-semibold">{level.label}</div>
                          <div className="text-sm text-gray-400">{level.desc}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
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
            className="text-4xl font-bold mb-4"
          >
            {qualificationScore >= 80 ? 
              'Welcome to the Sovereign Elite' : 
              qualificationScore >= 60 ? 
              'Strong Sovereignty Potential' : 
              'Let\'s Build Your Path to Sovereignty'
            }
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="text-xl text-gray-400 mb-8"
          >
            Your application has been submitted for founder review.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
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
                  <p className="font-semibold">Founder Review (24-48 hours)</p>
                  <p className="text-sm text-gray-400">Brian personally reviews every application</p>
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
                  <p className="font-semibold">Discovery Call</p>
                  <p className="text-sm text-gray-400">Deep dive into your sovereignty needs</p>
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
                  <p className="font-semibold">Live SOVREN Demo</p>
                  <p className="text-sm text-gray-400">See sovereignty crush your use case</p>
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
              Questions? Email me directly:
            </p>
            <a 
              href="mailto:sovereignty@covrenfirm.com" 
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold"
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
          <Brain className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-2xl font-bold mb-4">
            <TypewriterText text="Analyzing sovereignty readiness..." />
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <DynamicBackground />
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
          <button
            type="button"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              currentStep === 1
                ? 'bg-gray-900/30 text-gray-600 cursor-not-allowed'
                : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            {[...Array(totalSteps)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i + 1 <= currentStep ? 'bg-red-500' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
          
          <motion.button
            type="button"
            onClick={handleNextStep}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            {currentStep === totalSteps ? 'Submit Application' : 'Continue'}
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
