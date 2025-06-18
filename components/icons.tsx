import { Building, type LightbulbIcon as LucideProps } from "lucide-react"

export const Icons = {
  Logo: (props: LucideProps) => (
    // Using Building as a placeholder, replace with actual SVG or component
    // For a text logo, you can do:
    // <span className="text-2xl font-bold tracking-tight text-primary">Covren<span className="text-foreground">Firm</span></span>
    <Building {...props} />
  ),
}
