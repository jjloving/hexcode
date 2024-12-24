import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MotionDiv } from "@/components/motion/MotionSection"
import { Mail, MessageSquare, Phone, MapPin, Clock, ArrowRight, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact/ContactForm"

export default function ContactPage() {
  return (
    <div className="py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-200">Contact Information</h2>
          
          <div className="grid gap-4">
            {[
              {
                icon: <Mail className="h-5 w-5" />,
                title: "Email",
                value: "contact@example.com",
                link: "mailto:contact@example.com"
              },
              {
                icon: <Phone className="h-5 w-5" />,
                title: "Phone",
                value: "+1 (234) 567-8900",
                link: "tel:+12345678900"
              },
              {
                icon: <MapPin className="h-5 w-5" />,
                title: "Location",
                value: "New York, NY, United States"
              },
              {
                icon: <Clock className="h-5 w-5" />,
                title: "Business Hours",
                value: "Mon - Fri, 9:00 AM - 6:00 PM EST"
              }
            ].map((item) => (
              <Card key={item.title} className="p-4 border-blue-900/50 bg-blue-950/30 backdrop-blur-sm">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-blue-400">{item.icon}</div>
                  <div>
                    <p className="text-sm text-gray-400">{item.title}</p>
                    {item.link ? (
                      <Link 
                        href={item.link}
                        className="text-gray-200 hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-gray-200">{item.value}</p>
                    )}
                  </div>
                </MotionDiv>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-200">Connect With Me</h2>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="group" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  )
} 