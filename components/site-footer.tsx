import Link from "next/link"
import { Zap, Shield, Award, Globe, ArrowRight } from "lucide-react"
import GlowingButton from "@/components/ui/glowing-button"

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "Why Covren?" },
  { href: "#tech", label: "Technology" },
  { href: "/sovren-ai", label: "SovrenAI" },
  { href: "/contact", label: "Contact" },
]

const trustIndicators = [
  { icon: Shield, label: "SOC2 Compliant" },
  { icon: Award, label: "100% IP Protection" },
  { icon: Globe, label: "Global Delivery" },
]

export default function SiteFooter() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="relative border-t border-glass-edge bg-gradient-to-b from-background to-card/50">
      {/* Trust Indicators Bar */}
      <div className="border-b border-glass-edge py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustIndicators.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 group mb-6">
                <Zap className="h-8 w-8 text-primary transition-all duration-300 group-hover:rotate-[15deg] group-hover:scale-110" />
                <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  CovrenFirm
                </span>
              </Link>
              <p className="text-base text-muted-foreground max-w-md mb-4">
                Building the future of sovereign digital intelligence. 
                We don't just build AI. We build empires.
              </p>
              <p className="text-lg font-semibold text-primary mb-6">
                Your AI. Your Data. Your Control.
              </p>
              <GlowingButton size="sm" asChild>
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Start Your AI Journey
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </GlowingButton>
            </div>
            
            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-lg">Navigate</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-lg">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/manifesto" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    <span className="group-hover:translate-x-1 transition-transform">AI Sovereignty Manifesto</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact?subject=Careers" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    <span className="group-hover:translate-x-1 transition-transform">Careers</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact?subject=Partnership" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    <span className="group-hover:translate-x-1 transition-transform">Partner With Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-glass-edge">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground text-center md:text-left">
                <p>&copy; {year} Covren Firm LLC. All rights reserved.</p>
                <p className="mt-1">Building Sovereign AI Solutions from Anderson, California to the World 🌍</p>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  )
}
