'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from "next/link"
import { 
  Brain, Code2, Shield, Building, LineChart, MessageSquare,
  ChevronRight, Zap, Lock, Globe, Database, Server,
  Users, Target, Sparkles, Award, Layers, TrendingUp,
  ArrowRight, Power, Rocket, Binary, Network, ShieldCheck,
  Crosshair, Flame, Timer, AlertTriangle
} from 'lucide-react'

// Power Text Animation
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

// Epic Background
function DominationBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black" />
      <motion.div
        className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          x: [-100, 0, -100],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 -left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </div>
  )
}

// Navigation
function NavigationBar() {
  const [scrolled, setScrolled] = useState(false)
  
  React.useEffect(() => {
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
            <Link href="/services" className="hover:text-red-500 transition-colors font-semibold text-red-500">
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

// Service Card Component
function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      className="relative group h-full"
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl transition-opacity duration-300 ${
        isHovered ? 'opacity-30' : 'opacity-0'
      }`} />
      
      {/* Main card */}
      <div className={`relative bg-gray-950/90 backdrop-blur-xl border-2 rounded-2xl h-full transition-all duration-300 overflow-hidden ${
        isHovered ? 'border-red-500 shadow-2xl shadow-red-500/20' : 'border-gray-800'
      }`}>
        <div className="p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start gap-6 mb-6">
            <motion.div
              className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
              animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <service.icon className="w-8 h-8 text-white" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-black mb-1">{service.title}</h3>
              <p className="text-gray-400 text-sm font-mono">{service.subtitle}</p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
          
          {/* Features */}
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Stats & CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className={`text-3xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.stats.metric}
              </span>
              <span className="text-sm text-gray-500">{service.stats.label}</span>
            </div>
            
            <Link href={service.link}>
              <motion.button
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} text-white font-bold px-6 py-3 rounded-lg transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const services = [
    {
      id: 'sovren-ai',
      icon: Brain,
      title: 'SOVREN AI Platform',
      subtitle: 'Compound Intelligence™',
      description: 'Revolutionary AI that evolves with your business daily. While static AI depreciates, SOVREN compounds in value—learning, adapting, and multiplying your competitive advantage 24/7.',
      features: [
        'Self-improving intelligence that compounds knowledge',
        '24/7 autonomous business operations',
        'Learns and optimizes your unique patterns',
        'Complete data sovereignty and control'
      ],
      stats: { metric: '2400%', label: 'Efficiency gain' },
      cta: 'Experience Evolution',
      link: '/sovren-ai',
      gradient: 'from-red-600 to-orange-600'
    },
    {
      id: 'custom-dev',
      icon: Code2,
      title: 'Custom AI Development',
      subtitle: 'Bespoke Intelligence Systems',
      description: 'When off-the-shelf fails, we build empires. Architect proprietary AI systems designed for your exact challenges, with complete IP ownership and zero dependencies.',
      features: [
        'Proprietary model architectures',
        'Full-stack implementation',
        'Complete intellectual property ownership',
        'Military-grade security and compliance'
      ],
      stats: { metric: '127+', label: 'Systems deployed' },
      cta: 'Build Your Empire',
      link: '/custom-development',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'enterprise',
      icon: Building,
      title: 'Enterprise Transformation',
      subtitle: 'AI-Powered Evolution',
      description: 'Transform your enterprise into an AI powerhouse. Strategic integration that revolutionizes operations, multiplies productivity, and creates insurmountable competitive advantages.',
      features: [
        'C-suite advisory and roadmapping',
        'Organizational AI transformation',
        'Legacy system modernization',
        'Change management expertise'
      ],
      stats: { metric: '$24M+', label: 'Value generated' },
      cta: 'Transform Today',
      link: '/enterprise',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'sovereign',
      icon: Shield,
      title: 'Sovereign Infrastructure',
      subtitle: 'Own Your AI Future',
      description: 'Deploy AI systems you completely own and control. No vendor lock-in, no data leakage, no compromises. Your intelligence, your infrastructure, your rules.',
      features: [
        'On-premise deployment options',
        'Zero vendor dependencies',
        'Complete data sovereignty',
        'Regulatory compliance built-in'
      ],
      stats: { metric: '100%', label: 'Data control' },
      cta: 'Claim Sovereignty',
      link: '/sovereign-systems',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'analytics',
      icon: LineChart,
      title: 'AI Analytics & Intelligence',
      subtitle: 'Predictive Power Unleashed',
      description: 'Turn data into predictive, actionable intelligence. Custom analytics systems that don\'t just report the past—they command the future.',
      features: [
        'Predictive modeling systems',
        'Real-time decision engines',
        'Custom dashboard solutions',
        'Automated insight generation'
      ],
      stats: { metric: '47x', label: 'Faster decisions' },
      cta: 'Unlock Intelligence',
      link: '/analytics',
      gradient: 'from-orange-600 to-yellow-600'
    },
    {
      id: 'consulting',
      icon: MessageSquare,
      title: 'Strategic AI Consulting',
      subtitle: 'Navigate the Revolution',
      description: 'Expert guidance through the AI transformation. From technology stack assessment to competitive advantage mapping, we architect your path to dominance.',
      features: [
        'AI readiness assessment',
        'Technology stack optimization',
        'Competitive advantage mapping',
        'Implementation strategies'
      ],
      stats: { metric: '89', label: 'Enterprises guided' },
      cta: 'Get Strategic',
      link: '/consulting',
      gradient: 'from-indigo-600 to-violet-600'
    }
  ]
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <DominationBackground />
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-950/50 backdrop-blur border border-red-500/50 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-sm font-mono text-red-400">FULL-SPECTRUM AI DOMINANCE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <PowerText>SIX WAYS TO</PowerText>
              <PowerText delay={0.2} className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
                COMMAND THE FUTURE
              </PowerText>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              From revolutionary AI platforms to bespoke enterprise solutions, 
              we don't just implement technology—we engineer dominance.
            </motion.p>
          </motion.div>
          
          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 inline-flex items-center gap-3 bg-yellow-950/20 border border-yellow-500/30 rounded-lg px-6 py-3"
          >
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-mono text-yellow-500">
              WARNING: Each service creates irreversible competitive advantages
            </span>
          </motion.div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="py-32 px-6 border-t border-gray-800">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              WHY <span className="text-red-500">COVREN</span> DOMINATES
            </h2>
            <p className="text-xl text-gray-400">
              While others offer tools, we deliver transformation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "OWNERSHIP",
                covren: "100% your code, your data, your empire",
                others: "Vendor lock-in, subscription slavery",
                icon: Lock
              },
              {
                title: "EVOLUTION",
                covren: "AI that improves daily, compounds value",
                others: "Static tools that depreciate",
                icon: TrendingUp
              },
              {
                title: "RESULTS",
                covren: "2400% average efficiency gains",
                others: "Marginal improvements at best",
                icon: Target
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-950/90 backdrop-blur border border-gray-800 rounded-xl p-6">
                  <item.icon className="w-8 h-8 text-red-500 mb-4" />
                  <h3 className="text-xl font-black mb-4">{item.title}</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-green-950/30 border border-green-500/30 rounded-lg p-4">
                      <p className="text-sm font-bold text-green-500 mb-1">COVREN</p>
                      <p className="text-sm text-gray-300">{item.covren}</p>
                    </div>
                    
                    <div className="bg-red-950/20 border border-red-500/20 rounded-lg p-4">
                      <p className="text-sm font-bold text-red-500 mb-1">OTHERS</p>
                      <p className="text-sm text-gray-400">{item.others}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 blur-3xl" />
            <div className="relative bg-gradient-to-br from-gray-950 to-black border-2 border-red-600 rounded-2xl p-12 text-center">
              <Award className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                WHICH FUTURE WILL YOU BUILD?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Every service. One mission. Your dominance.
              </p>
              
              {/* Countdown */}
              <div className="bg-black/50 border border-red-500/30 rounded-lg p-4 inline-block mb-8">
                <p className="text-sm text-gray-400 mb-2">LIMITED PHASE 1 POSITIONS</p>
                <div className="flex items-center gap-2 text-2xl font-mono font-bold text-red-500">
                  <Timer className="w-6 h-6" />
                  <span>11 REMAINING</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Strategy Call
                </motion.a>
                <motion.a
                  href="/sovren-ai/apply"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply for SOVREN AI
                </motion.a>
              </div>
            </div>
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
