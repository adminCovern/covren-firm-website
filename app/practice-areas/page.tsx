import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Building2, Gavel, Landmark, ShieldCheck, Globe, Users, TrendingUp, Handshake } from "lucide-react"

const areas = [
  {
    name: "Corporate & Commercial Law",
    description: "Advising businesses of all sizes on formation, governance, M&A, and commercial contracts.",
    icon: Building2,
    href: "/practice-areas/corporate",
    image: "/placeholder.svg?width=400&height=250",
  },
  {
    name: "Litigation & Dispute Resolution",
    description: "Representing clients in complex civil and commercial litigation, arbitration, and mediation.",
    icon: Gavel,
    href: "/practice-areas/litigation",
    image: "/placeholder.svg?width=400&height=250",
  },
  {
    name: "Real Estate Law",
    description: "Handling all aspects of real estate, including transactions, development, leasing, and zoning.",
    icon: Landmark,
    href: "/practice-areas/real-estate",
    image: "/placeholder.svg?width=400&height=250",
  },
  {
    name: "Intellectual Property & Technology",
    description:
      "Protecting and commercializing IP assets, including patents, trademarks, copyrights, and trade secrets.",
    icon: ShieldCheck,
    href: "/practice-areas/ip-tech",
    image: "/placeholder.svg?width=400&height=250",
  },
  {
    name: "International Law & Trade",
    description: "Navigating cross-border transactions, international disputes, and regulatory compliance.",
    icon: Globe,
    href: "/practice-areas/international",
    image: "/placeholder.svg?width=400&height=250",
  },
  {
    name: "Employment Law",
    description: "Counseling employers and employees on all facets of employment relationships and disputes.",
    icon: Users,
    href: "/practice-areas/employment",
    image: "/placeholder.svg?width=400&height=250",
  },
  {
    name: "Bankruptcy & Restructuring",
    description: "Assisting businesses and creditors in insolvency proceedings and financial restructuring.",
    icon: TrendingUp,
    href: "/practice-areas/bankruptcy",
    image: "/placeholder.svg?width=400&height=250",
  },
  {
    name: "Mediation & ADR",
    description:
      "Facilitating resolutions outside of court through skilled mediation and alternative dispute resolution.",
    icon: Handshake,
    href: "/practice-areas/mediation-adr",
    image: "/placeholder.svg?width=400&height=250",
  },
]

export default function PracticeAreasPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl animate-subtle-glow">
            Our Expertise
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Covren Firm offers specialized legal counsel across a diverse spectrum of practice areas. Explore how our
            dedicated teams can address your specific legal challenges.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Card
                key={area.name}
                className="flex flex-col overflow-hidden bg-card/50 border-primary/10 backdrop-blur-md transform transition-all duration-300 hover:shadow-neon-cyan-medium hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image src={area.image || "/placeholder.svg"} alt={area.name} layout="fill" objectFit="cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <area.icon className="h-10 w-10 text-primary bg-background/70 p-2 rounded-md animate-float" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{area.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-muted-foreground">{area.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="link" className="px-0 text-primary hover:text-accent">
                    <Link href={area.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Have Specific Questions?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team is ready to provide tailored advice for your unique situation. Reach out to us for a confidential
            consultation to discuss how we can assist you.
          </p>
          <Button asChild size="lg" className="mt-8 animate-subtle-glow">
            <Link href="/contact#consultation">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
