"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in team environments",
    },
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives my passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">My Story</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience creating digital solutions that
                make a difference. My journey began with a curiosity about how things work on the web, which quickly
                evolved into a deep love for coding.
              </p>
              <p>
                I specialize in modern web technologies including React, Next.js, Node.js, and TypeScript. I believe in
                writing clean, maintainable code and creating user experiences that are both beautiful and functional.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Core Values</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Innovation</Badge>
                <Badge variant="secondary">Quality</Badge>
                <Badge variant="secondary">Collaboration</Badge>
                <Badge variant="secondary">Continuous Learning</Badge>
                <Badge variant="secondary">User-Centric</Badge>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
