"use client"
import { Button, type ButtonProps } from "@/components/ui/button" // Assuming shadcn button
import { cn } from "@/lib/utils"
import type React from "react"

interface GlowingButtonProps extends ButtonProps {
  children: React.ReactNode
  className?: string
  glowClassName?: string
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  className,
  glowClassName,
  variant = "default",
  ...props
}) => {
  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300 ease-out",
        "shadow-[0_0_10px_hsl(var(--primary)/0.5),_0_0_20px_hsl(var(--primary)/0.3)]",
        "hover:shadow-[0_0_20px_hsl(var(--primary)/0.7),_0_0_40px_hsl(var(--primary)/0.5)]",
        "hover:scale-[1.02]",
        variant === "outline" && "border-primary text-primary hover:bg-primary/10 hover:text-accent",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-accent",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Optional: more complex animated glow element if needed */}
    </Button>
  )
}

export default GlowingButton
