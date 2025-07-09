"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileCode, BarChart2, Gauge, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: FileCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: BarChart2,
      title: "Data-Driven Development",
      description: "Leveraging analytics and metrics to guide feature design and improvements.",
    },
    {
      icon: Gauge,
      title: "Performance Focus",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Thriving in agile environments to deliver features fast.",
    },
  ]

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "APIs launched in production" },
    { number: "100+", label: "Automated test cases" },
    { number: "3", label: "Interactive dashboards delivered" },
  ]

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 font-sans">
            About <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent uppercase tracking-widest">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mb-6"></div>
          <p className="text-light-grey max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives my passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">My Story</h3>
            <div className="space-y-4 text-light-grey text-justify">
              <p>
                I'm a versatile full‑stack developer and data enthusiast who thrives on transforming ideas into robust digital experiences. With hands‑on expertise in Flask, Python, and modern web frameworks, I build clean, scalable APIs and data‑driven dashboards that help teams make smarter decisions. My passion lies at the intersection of development and data—whether I'm automating CI/CD pipelines with GitHub Actions or visualizing insights in Power BI, I'm driven to deliver reliable, high‑impact solutions.
              </p>
              <p>
                Since 2021, I've:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Built and containerized Flask REST APIs with Docker</li>
                <li>Tuned PostgreSQL databases for faster queries</li>
                <li>Written comprehensive pytest suites for rock‑solid quality</li>
                <li>Created interactive dashboards in Power BI and Python</li>
                <li>Automated end‑to‑end CI/CD workflows, catching bugs early with Thunder Client tests</li>
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Core Values</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-orange-500 text-black border-none shadow-md shadow-orange-500/20 hover:scale-105 transition-transform duration-200">Innovation</Badge>
                <Badge variant="secondary" className="bg-orange-500 text-black border-none shadow-md shadow-orange-500/20 hover:scale-105 transition-transform duration-200">Quality</Badge>
                <Badge variant="secondary" className="bg-orange-500 text-black border-none shadow-md shadow-orange-500/20 hover:scale-105 transition-transform duration-200">Collaboration</Badge>
                <Badge variant="secondary" className="bg-orange-500 text-black border-none shadow-md shadow-orange-500/20 hover:scale-105 transition-transform duration-200">Continuous Learning</Badge>
                <Badge variant="secondary" className="bg-orange-500 text-black border-none shadow-md shadow-orange-500/20 hover:scale-105 transition-transform duration-200">User-Centric</Badge>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-black border-gray-700 hover:border-orange-500 transition-all duration-200 hover:scale-105 animate-pulse-slow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-8 h-8 text-orange-500 mx-auto mb-4 transition-all duration-200 group-hover:scale-110 group-hover:text-orange-400" />
                  <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                  <p className="text-sm text-light-grey">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between gap-8 overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-fuscous-grey scrollbar-track-deep-black">
          {stats.map((stat, index) => (
            <div key={index} className="flex-1 min-w-[180px] text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-light-grey text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
