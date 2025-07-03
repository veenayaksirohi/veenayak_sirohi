"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Calendar, MapPin } from "lucide-react"

function Resume() {
  const education = [
    {
      degree: "B.Tech - Computer Science Engineering",
      school: "GL Bajaj Institute of Technology and Management",
      location: "Uttar Pradesh, India",
      period: "Nov 2021 - Jun2025",
      gpa: undefined,
      achievements: ["Database Management Systems","Networking", "Operating Systems", "Data Structures", "Algorithms"]
    },
    {
      degree: "Schooling",
      school: "Dewan Public School - India",
      location: "Hapur, Uttar Pradesh, India",
      period: "Apr 2007 - Mar 2021",
      gpa: "80%",
      achievements: []
    }
  ]

  const experience = [
    {
      title: "Internship Trainee",
      company: "Impressico Business Solutions",
      location: "Noida, Uttar Pradesh, India",
      period: "Apr 2025 - Jun 2025",
      description: "Built REST APIs, optimized databases, automated testing, and streamlined DevOps as an intern at Impressico Business Solutions.",
      achievements: [
        "Developed and tested Flask-based REST APIs, improving bug detection and reducing manual QA time.",
        "Optimized PostgreSQL queries, increasing data retrieval speed by 25%.",
        "Automated CI/CD with Docker and GitHub Actions, enabling faster, error-free deployments."
      ],
    },
  ]

  const skills = {
    Programming: ["Python", "Data Structures & Algorithms", "JavaScript", "HTML & CSS", "Flask","API Testing", "REST APIs"],
    DataScience: ["Data Analysis", "Power BI", "SQL", "Data Visualization", "PostgreSQL"],
    DevOps: ["Docker", "GitHub Actions", "CI/CD"],
    Tools: ["Thunder Client", "Git", "GitHub"]
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

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-10 text-white flex items-center">
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
                    {edu.gpa && <p className="text-gray-300 mb-3">{edu.degree === "Schooling" ? `Grade: ${edu.gpa}` : `CGPA: ${edu.gpa}`}</p>}
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
            <h3 className="text-2xl font-semibold mb-10 mt-16 text-white flex items-center">
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
            <h3 className="text-2xl font-semibold mb-10 text-white">Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-blue-400 text-blue-400">
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

export default Resume;
