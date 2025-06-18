"use client" // For form handling

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner" // Assuming sonner is installed for toasts

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

type ContactFormInputs = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(data)
    toast.success("Your message has been sent! We'll be in touch soon.")
    reset()
  }

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl animate-subtle-glow">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help. Reach out to us with any inquiries or to schedule a consultation with our legal experts.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24 bg-background" id="consultation">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form Card */}
            <Card className="bg-card/50 border-primary/10 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below, and we'll get back to you promptly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      placeholder="" // Removed "John Doe"
                      className="mt-1 bg-background/70"
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-destructive">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="" // Removed "john.doe@example.com"
                      className="mt-1 bg-background/70"
                    />
                    {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="" // Removed "(555) 123-4567"
                      className="mt-1 bg-background/70"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="" // Removed "Inquiry about Corporate Law"
                      className="mt-1 bg-background/70"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="" // Removed "Please describe your legal needs..."
                      rows={5}
                      className="mt-1 bg-background/70"
                    />
                    {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" className="w-full animate-subtle-glow" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <div className="space-y-8">
              <Card className="bg-card/50 border-primary/10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                  <CardDescription>Reach out via phone/email.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Main Office Removed */}
                  <div className="flex items-start">
                    <Phone className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary animate-float" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a href="tel:8883264568" className="text-muted-foreground hover:text-primary">
                        888-326-4568
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary animate-float" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a href="mailto:contact@covrenfirm.com" className="text-muted-foreground hover:text-primary">
                        contact@covrenfirm.com
                      </a>
                    </div>
                  </div>
                  {/* Office Hours Removed */}
                </CardContent>
              </Card>

              {/* Map Placeholder Card Removed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
