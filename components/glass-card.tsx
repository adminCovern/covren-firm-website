import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-sm bg-gray-900/30 border border-gray-800 rounded-2xl shadow-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
