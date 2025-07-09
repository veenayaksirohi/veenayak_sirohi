"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => { setStatus("sent"); formRef.current?.reset() },
        () => { setStatus("error") }
      )
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "veenayaksirohi@gmail.com",
      href: "mailto:veenayaksirohi@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7302223304",
      href: "tel:+917302223304",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Greater Noida, U.P",
      href: "https://maps.google.com/?q=Greater+Noida+U.P",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/veenayaksirohi",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/veenayak_sirohi-ab30ab227/",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:veenayaksirohi@gmail.com",
      color: "hover:text-red-400",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-deep-black/90">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-orange-red to-fuscous-grey bg-clip-text text-transparent">Touch</span>
            <div className="text-lg text-light-grey mt-2 font-semibold">Veenayak Sirohi</div>
          </h2>
          <p className="text-light-grey max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-fuscous-grey border-fuscous-grey">
            <CardHeader>
              <CardTitle className="text-white">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-light-grey">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="bg-deep-black border-fuscous-grey text-white focus:border-orange-red"
                      placeholder="Veenayak Sirohi"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-light-grey">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-deep-black border-fuscous-grey text-white focus:border-orange-red"
                      placeholder="veenayaksirohi@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-light-grey">
                    Subject
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    required
                    className="bg-deep-black border-fuscous-grey text-white focus:border-orange-red"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-light-grey">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="bg-deep-black border-fuscous-grey text-white focus:border-orange-red resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-orange-red hover:bg-orange-red/90 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </Button>
                {status === "sent" && <p className="text-green-400 text-center">Sent!</p>}
                {status === "error" && <p className="text-red-400 text-center">Error sending.</p>}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-fuscous-grey border-fuscous-grey">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 text-light-grey hover:text-orange-red transition-colors group"
                  >
                    <div className="w-12 h-12 bg-orange-red/10 rounded-lg flex items-center justify-center group-hover:bg-orange-red/20 transition-colors">
                      <info.icon className="w-6 h-6 text-orange-red" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{info.label}</div>
                      <div className="text-light-grey">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-fuscous-grey border-fuscous-grey">
              <CardHeader>
                <CardTitle className="text-white">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-deep-black rounded-lg flex items-center justify-center text-light-grey hover:text-orange-red transition-colors`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-fuscous-grey border-fuscous-grey">
              <CardHeader>
                <CardTitle className="text-white">Let's Work Together</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-light-grey mb-4">
                  As a Computer Science student with a passion for data analysis and development, I'm eager to connect with professionals and organizations seeking skills in Python, Power BI, and data-driven solutions. If you have a project, internship, or collaboration in mind, or simply want to discuss technology and analytics, I'd love to hear from you!
                </p>
                <div className="space-y-2 text-sm text-light-grey">
                  <div>• Seeking internships and entry-level roles in Data Analytics or Software Development</div>
                  <div>• Experienced with Python, Pandas, Power BI, and SQL</div>
                  <div>• Open to freelance and remote opportunities</div>
                  <div>• Enthusiastic about teamwork and continuous learning</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
