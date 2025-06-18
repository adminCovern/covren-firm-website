import { Target, Eye, ShieldCheck, Zap, Handshake, CheckCircle } from "lucide-react"

// Core Values updated to reflect AI focus
const coreValues = [
  {
    icon: ShieldCheck,
    title: "Sovereign Empowerment",
    description: "Granting clients complete ownership and control over their AI assets and digital future.",
  },
  {
    icon: Zap,
    title: "Pioneering Innovation",
    description: "Relentlessly pushing the boundaries of AI to create novel solutions and possibilities.",
  },
  {
    icon: CheckCircle,
    title: "Unrivaled Excellence",
    description: "Committing to the highest standards of quality, performance, and impact in everything we build.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnership",
    description:
      "Collaborating deeply with clients to understand their vision and co-create transformative AI strategies.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header - Updated */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl animate-subtle-glow">
            About Covren Firm
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Discover the foundation of our firm: our history, our mission, and the values that drive us to engineer the
            future of sovereign digital intelligence.
          </p>
        </div>
      </section>

      {/* Our Story Section - Updated */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Removed the grid layout that had the image and text side-by-side. Text now takes full width. */}
          <div className="max-w-3xl mx-auto text-center lg:text-left">
            {" "}
            {/* Centering content or adjust as needed */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Journey & Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded on the principles of pioneering innovation, sovereign control, and unparalleled client
                partnership, Covren Firm has grown into a distinguished AI development house known for its full-stack
                capabilities and transformative solutions. We are committed to navigating the complexities of artificial
                intelligence with precision and dedication, building what others claim is impossible.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start text-left">
                  <Target className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To empower businesses and entrepreneurs with bespoke, sovereign AI solutions that drive strategic
                      advantage and redefine industry standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start text-left">
                  <Eye className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading force in sovereign digital intelligence, recognized for our commitment to
                      groundbreaking innovation, full-stack mastery, and the profound impact we create for our clients
                      and the advancement of AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Updated */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Guiding Principles</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The principles that drive every line of code, every strategic decision, every day.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-background/50 border-primary/10 backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan-soft"
              >
                <value.icon className="h-12 w-12 text-primary mb-4 animate-float" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
