
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Zap, Shield, Clock, ArrowRight, Building, Users, Target, CheckCircle } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import GlassCard from "@/components/ui/glass-card"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    aiSpend: "",
    timeline: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  // Create mailto link with form data
  const createMailtoLink = () => {
    const subject = `AI Sovereignty Inquiry from ${formData.name} - ${formData.company}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone || 'Not provided'}
Current AI Spend: ${formData.aiSpend || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Message:
${formData.message}
    `.trim()

    return `mailto:inquiries@covren.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const stats = [
    { icon: Users, value: "50+", label: "Implementations" },
    { icon: Shield, value: "100%", label: "Data Sovereignty" },
    { icon: Target, value: "87%", label: "Cost Reduction" }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Start Your AI Sovereignty Journey
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to break free from vendor lock-in? Let&apos;s discuss how we can architect your path to AI independence.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Form - Takes up 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <GlassCard className="p-8">
                <h2 className="text-3xl font-bold mb-2">Tell Us About Your AI Challenges</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 bg-background/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1 bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="aiSpend">Current Monthly AI Spend</Label>
                      <select
                        id="aiSpend"
                        value={formData.aiSpend}
                        onChange={handleChange}
                        className="w-full mt-1 px-3 py-2 bg-background/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select range</option>
                        <option value="Less than $10k">Less than $10k</option>
                        <option value="$10k - $50k">$10k - $50k</option>
                        <option value="$50k - $200k">$50k - $200k</option>
                        <option value="Over $200k">Over $200k</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Implementation Timeline</Label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full mt-1 px-3 py-2 bg-background/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="Just exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">How can we help you achieve AI sovereignty? *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-1 bg-background/50"
                      required
                    />
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full animate-glow-soft" 
                    asChild
                    disabled={!formData.name || !formData.email || !formData.company || !formData.message}
                  >
                    <a href={createMailtoLink()}>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </a>
                  </Button>
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Info - Takes up 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Contact Card */}
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:8883264568" className="text-muted-foreground hover:text-primary transition-colors">
                        (888) 326-4568
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:inquiries@covren.com" className="text-muted-foreground hover:text-primary transition-colors">
                        inquiries@covren.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Response Time</h4>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Why Choose Covren Card */}
              <GlassCard className="p-8 bg-gradient-to-br from-primary/10 to-cyan-500/10">
                <h3 className="text-2xl font-bold mb-6">Why Organizations Choose Covren</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">50+ successful AI sovereignty implementations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Average 87% cost reduction by year 3</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Complete knowledge transfer, no vendor lock-in</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Custom implementation timelines</span>
                  </li>
                </ul>
              </GlassCard>

              {/* Download Guide CTA */}
              <GlassCard className="p-8 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
                <h4 className="text-xl font-bold mb-2">Not Ready to Talk?</h4>
                <p className="text-muted-foreground mb-6">
                  Download our comprehensive AI Sovereignty Guide
                </p>
                <Button variant="secondary" size="lg" className="w-full" asChild>
                  <a href="/downloads/sovereign-ai-guide.pdf" download="Sovereign-AI-Guide-CovrenFirm.pdf">
                    Download Free Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
