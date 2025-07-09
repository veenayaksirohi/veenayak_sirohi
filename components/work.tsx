"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function Work() {
  const experiences = [
    {
      title: "Internship Trainee",
      company: "Impressico Business Solutions",
      location: "Noida, Uttar Pradesh, India",
      period: "Apr 2025 - Jun 2025",
      type: "Internship",
      description: "During my Apr–Jun 2025 internship at Impressico, I built Flask‑based REST APIs, optimized PostgreSQL databases, wrote pytest suites, containerized services with Docker, and automated CI/CD with GitHub Actions, catching bugs early with Thunder Client.",
      responsibilities: [
        "Built Flask-based REST APIs",
        "Optimized PostgreSQL databases",
        "Wrote pytest suites for automated testing",
        "Containerized services with Docker",
        "Automated CI/CD with GitHub Actions",
        "Caught bugs early with Thunder Client"
      ],
      technologies: [
        "Flask",
        "Python",
        "pytest",
        "RDBMS",
        "PostgreSQL",
        "REST APIs",
        "API Testing",
        "Docker",
        "Docker Products",
        "Git",
        "GitHub",
        "GitHub Actions",
        "CI/CD",
        "Thunder Client"
      ],
      achievements: [
        "Automated API Testing: Developed and integrated pytest suites, reducing manual testing time by 40% and increasing bug detection rate.",
        "Database Optimization: Improved PostgreSQL query performance, resulting in a 25% faster data retrieval for core endpoints.",
        "Containerization: Successfully containerized all backend services with Docker, enabling seamless local development and deployment.",
        "CI/CD Implementation: Set up GitHub Actions workflows for continuous integration and deployment, reducing deployment errors and manual steps.",
        "API Documentation: Created clear API documentation and Thunder Client collections, streamlining onboarding for new developers.",
        "Collaboration: Collaborated with cross-functional teams to deliver project milestones on time."
      ]
    }
  ]

  return (
    <section id="work" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 font-sans">
            Work <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent uppercase tracking-widest">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mb-6"></div>
          <p className="text-light-grey max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-black border-gray-700 hover:border-orange-500 transition-all duration-200 hover:scale-105 animate-pulse-slow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-white mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-light-grey">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-2 text-orange-500" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <div className="flex items-center text-orange-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <Badge variant="outline" className="border-2 border-orange-500 text-orange-500 bg-black hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:text-white hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
                      {exp.type === 'Full-time' ? <span>🏢 Full-time</span> : exp.type === 'Internship' ? <span>🕒 Internship</span> : <span>{exp.type}</span>}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-light-grey">{exp.description}</p>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-light-grey">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-gradient-to-r from-orange-500 to-orange-400 text-white border-none shadow-md shadow-orange-500/20 hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-light-grey">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
