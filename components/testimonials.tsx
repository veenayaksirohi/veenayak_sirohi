"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "Tech Solutions Inc.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      content:
        "Working with this developer has been an absolute pleasure. Their attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The project was delivered on time and exceeded our expectations.",
      project: "E-commerce Platform",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      content:
        "Exceptional technical skills combined with great communication. They took ownership of the project from day one and delivered a scalable solution that has been running flawlessly for months. Highly recommended!",
      project: "Task Management System",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "Creative Agency",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      content:
        "The collaboration was seamless. They understood our design vision perfectly and implemented it with pixel-perfect precision. The final product not only looked great but also performed exceptionally well.",
      project: "Portfolio Website",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Founder",
      company: "Digital Ventures",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      content:
        "Professional, reliable, and incredibly skilled. They helped us build our MVP from scratch and provided valuable insights throughout the development process. The code quality is outstanding.",
      project: "Social Media Platform",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Engineering Manager",
      company: "TechCorp",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      content:
        "A true professional who goes above and beyond. Their problem-solving skills are impressive, and they always find efficient solutions to complex challenges. Great team player and mentor.",
      project: "API Development",
    },
    {
      id: 6,
      name: "James Miller",
      role: "Business Owner",
      company: "Local Business",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      content:
        "Transformed our business with a modern web application. The developer was patient in explaining technical concepts and delivered exactly what we needed. Our online presence has never been better.",
      project: "Business Website",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-600"}`} />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">What clients and colleagues say about working with me</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-colors relative"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" />

                {/* Rating */}
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Project */}
                <div className="text-sm text-blue-400 mb-4">Project: {testimonial.project}</div>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-gray-700 text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-gray-400 text-sm">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              5.0
            </div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              24h
            </div>
            <div className="text-gray-400 text-sm">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
