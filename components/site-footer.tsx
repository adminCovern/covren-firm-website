import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Lock, Shield } from "lucide-react"

export function SiteFooter() {
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
                <Link href="/#manifesto" className="hover:text-cyan-400 transition-colors">
                  AI Sovereignty Manifesto
                </Link>
              </li>
              <li>
                <Link href="/#technologies" className="hover:text-cyan-400 transition-colors">
                  Technologies We Command
                </Link>
              </li>
              <li>
                <Link href="/#comparison" className="hover:text-cyan-400 transition-colors">
                  Why Choose Covren
                </Link>
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
