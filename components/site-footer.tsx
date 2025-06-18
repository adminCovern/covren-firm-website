'use client'

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Lock, Shield } from "lucide-react"

export function SiteFooter() {
  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // If we're not on the home page and clicking a section link
    if (window.location.pathname !== '/' && href.startsWith('#')) {
      window.location.href = '/' + href
      return
    }
    
    // If we're on the home page, just scroll to the section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Covren Firm</h3>
            <p className="text-gray-400 mb-4">
              Building Sovereign AI Solutions for Forward-Thinking Organizations Worldwide
            </p>
            <div className="flex space-x-4">
              <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                <Lock className="w-3 h-3 mr-1" />
                SOC 2 Compliant
              </Badge>
              <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                <Shield className="w-3 h-3 mr-1" />
                ISO 27001
              </Badge>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/sovren-ai" className="hover:text-cyan-400 transition-colors">
                  SOVREN AI Platform
                </Link>
              </li>
              <li>
                <a 
                  href="#manifesto" 
                  onClick={(e) => handleAnchorClick(e, '#manifesto')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  AI Sovereignty Manifesto
                </a>
              </li>
              <li>
                <a 
                  href="#technologies" 
                  onClick={(e) => handleAnchorClick(e, '#technologies')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Technologies We Command
                </a>
              </li>
              <li>
                <a 
                  href="#comparison" 
                  onClick={(e) => handleAnchorClick(e, '#comparison')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Why Choose Covren
                </a>
              </li>
              <li>
                <a 
                  href="#assessment" 
                  onClick={(e) => handleAnchorClick(e, '#assessment')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  AI Readiness Assessment
                </a>
              </li>
            </ul>
          </div>
          
          {/* Navigate */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sovren-ai" className="hover:text-cyan-400 transition-colors">
                  SovrenAI
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Covren Firm LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
