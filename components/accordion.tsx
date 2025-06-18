'use client'

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { type?: 'single' | 'multiple', collapsible?: boolean }
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <>
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        {children}
        <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      {React.Children.map((props as any).children, (child: any) => {
        if (child?.type?.displayName === 'AccordionContent') {
          return React.cloneElement(child, { isOpen })
        }
        return null
      })}
    </>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isOpen?: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all",
      isOpen ? "animate-accordion-down" : "animate-accordion-up",
      className
    )}
    style={{
      maxHeight: isOpen ? "500px" : "0px",
      opacity: isOpen ? 1 : 0,
      transition: "all 0.3s ease-in-out"
    }}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </div>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
