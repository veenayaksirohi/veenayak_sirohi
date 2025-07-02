"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Database, Cloud, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React/Next.js", level: 95, description: "Advanced component architecture and SSR" },
        { name: "TypeScript", level: 90, description: "Type-safe development and advanced patterns" },
        { name: "JavaScript (ES6+)", level: 95, description: "Modern JS features and best practices" },
        { name: "HTML5/CSS3", level: 90, description: "Semantic markup and modern CSS" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first CSS framework" },
        { name: "Vue.js", level: 75, description: "Component-based development" },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", level: 90, description: "Server-side JavaScript and APIs" },
        { name: "Express.js", level: 85, description: "RESTful API development" },
        { name: "Python", level: 80, description: "Django and Flask frameworks" },
        { name: "GraphQL", level: 75, description: "Query language and runtime" },
        { name: "REST APIs", level: 90, description: "API design and implementation" },
      ],
    },
    {
      icon: Database,
      title: "Database & Storage",
      color: "text-purple-400",
      skills: [
        { name: "PostgreSQL", level: 85, description: "Relational database design and optimization" },
        { name: "MongoDB", level: 80, description: "NoSQL database and aggregation" },
        { name: "Redis", level: 70, description: "Caching and session management" },
        { name: "Prisma", level: 75, description: "Database ORM and migrations" },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", level: 80, description: "EC2, S3, Lambda, RDS" },
        { name: "Docker", level: 85, description: "Containerization and orchestration" },
        { name: "Vercel", level: 90, description: "Deployment and hosting" },
        { name: "GitHub Actions", level: 75, description: "CI/CD pipelines" },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Workflow",
      color: "text-yellow-400",
      skills: [
        { name: "Git", level: 95, description: "Version control and collaboration" },
        { name: "VS Code", level: 90, description: "Development environment setup" },
        { name: "Figma", level: 75, description: "Design collaboration and prototyping" },
        { name: "Jest/Testing", level: 80, description: "Unit and integration testing" },
      ],
    },
    {
      icon: Palette,
      title: "Soft Skills",
      color: "text-pink-400",
      skills: [
        { name: "Problem Solving", level: 95, description: "Analytical thinking and debugging" },
        { name: "Team Leadership", level: 85, description: "Mentoring and project management" },
        { name: "Communication", level: 90, description: "Technical writing and presentations" },
        { name: "Agile/Scrum", level: 80, description: "Agile methodologies and sprint planning" },
      ],
    },
  ]

  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Professional",
    "MongoDB Certified Developer",
    "Scrum Master Certified",
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <category.icon className={`w-6 h-6 mr-3 ${category.color}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="border-blue-400 text-blue-400 px-4 py-2">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
