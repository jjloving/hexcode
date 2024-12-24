'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { MotionDiv } from "@/components/motion/MotionSection"
import { Send } from "lucide-react"
import emailjs from '@emailjs/browser'
import { useToast } from "@/components/ui/use-toast"
import { EMAILJS_CONFIG } from "@/lib/emailjs"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form,
        EMAILJS_CONFIG.publicKey
      )

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      })

      // Reset the form
      form.reset()
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="p-6 border-blue-900/50 bg-blue-950/30 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-200">Send a Message</h2>
            <p className="text-gray-400">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="from_name" className="text-sm text-gray-400">
                  Name
                </label>
                <Input
                  id="from_name"
                  name="from_name"
                  placeholder="Your name"
                  required
                  className="bg-blue-950/50 border-blue-900/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="reply_to" className="text-sm text-gray-400">
                  Email
                </label>
                <Input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  placeholder="Your email"
                  required
                  className="bg-blue-950/50 border-blue-900/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-gray-400">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Message subject"
                required
                className="bg-blue-950/50 border-blue-900/50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-gray-400">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
                className="min-h-[150px] bg-blue-950/50 border-blue-900/50"
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </Card>
    </MotionDiv>
  )
} 