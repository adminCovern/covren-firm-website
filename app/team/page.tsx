import { Zap } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="flex flex-col bg-background">
      {/* Page Header */}
      <section className="bg-card py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <Zap className="h-16 w-16 text-primary mx-auto mb-6 animate-float" />
        </div>
      </section>
    </div>
  )
}
