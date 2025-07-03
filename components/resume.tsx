"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Calendar, MapPin } from "lucide-react"

export function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      location: "City, State",
      period: "2018 - 2022",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Computer Science Honor Society", "Outstanding Student Award"],
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Tech Academy",
      location: "Online",
      period: "2022",
      achievements: ["Top 5% of cohort", "Best Final Project Award"],
    },
  ]

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2023 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "City, State",
      period: "2022 - 2023",
      description: "Developed responsive web applications and collaborated with design teams.",
      achievements: ["Built 15+ client websites", "Reduced load times by 30%", "Mentored junior developers"],
    },
  ]

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    Backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    Tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
    "Soft Skills": ["Leadership", "Communication", "Problem Solving", "Team Work"],
  }

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my education, experience, and skills
          </p>
          <a
            href="/veenayak_sirohi/veenayak_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Download className="w-4 h-4 mr-2" />
              Download PDF Resume
            </Button>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">{edu.degree}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-400">
                      <div className="flex items-center">
                        <span className="font-medium">{edu.school}</span>
                        <MapPin className="w-4 h-4 mx-2" />
                        <span>{edu.location}</span>
                      </div>
                      <span className="text-blue-400">{edu.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {edu.gpa && <p className="text-gray-300 mb-3">GPA: {edu.gpa}</p>}
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Experience */}
            <h3 className="text-2xl font-semibold mb-6 mt-12 text-white flex items-center">
              <ExternalLink className="w-5 h-5 mr-2 text-blue-400" />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">{exp.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-400">
                      <div className="flex items-center">
                        <span className="font-medium">{exp.company}</span>
                        <MapPin className="w-4 h-4 mx-2" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="text-blue-400">{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge key={index} variant="outline" className="border-blue-400 text-blue-400">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
