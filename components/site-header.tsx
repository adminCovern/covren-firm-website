"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Zap } from "lucide-react"
import GlowingButton from "./ui/glowing-button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

// Updated navItems to match actual section IDs on your homepage
const navItems = [
  { href: "#impact", label: "Our Impact" },
  { href: "#technologies", label: "Technology" },
  { href: "#manifesto", label: "Why Covren?" },
  { href: "#comparison", label: "Compare" },
]

// Additional navigation items for pages
const pageLinks = [
  { href: "/about", label: "About" },
  { href: "/sovren-ai", label: "SovrenAI" },
]

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle if it's an anchor link (starts with #)
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-glass-edge bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <Zap className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:animate-subtle-glow" />
          <span className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            Covren<span className="text-primary group-hover:text-foreground transition-colors">Firm</span>
          </span>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          {pageLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <GlowingButton asChild className="hidden md:inline-flex">
            <Link href="/contact">Get Started</Link>
          </GlowingButton>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-xs bg-background/90 backdrop-blur-2xl border-l border-glass-edge p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Zap className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold">
                    Covren<span className="text-primary">Firm</span>
                  </span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <div className="border-t border-gray-800 mt-3 pt-3">
                  {pageLinks.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </nav>
              <GlowingButton asChild className="mt-8 w-full">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </GlowingButton>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
