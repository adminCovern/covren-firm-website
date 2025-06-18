import Link from "next/link"
import { Zap } from "lucide-react" // Removed Twitter, Linkedin, Github as they are no longer used

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "Why Covren?" },
  { href: "#tech", label: "Technology" },
  { href: "/sovren-ai", label: "SovrenAI" },
  { href: "/contact", label: "Contact" },
]

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-glass-edge bg-background/50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <Zap className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-[15deg]" />
              <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                CovrenFirm
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building the future of sovereign digital intelligence.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">&copy; {year} Covren Firm LLC. All rights reserved.</p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-2 gap-8">
            {" "}
            {/* Adjusted sm:grid-cols-2 */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigate</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* "Connect" section and its content have been removed */}
          </div>
        </div>
      </div>
    </footer>
  )
}
