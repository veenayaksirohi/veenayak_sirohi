import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Internship Trainee",
    company: "Impressico Business Solutions",
    location: "Noida, Uttar Pradesh, India",
    period: "Apr 2025 - Jun 2025",
    type: "Internship",
    description:
      "During my Apr–Jun 2025 internship at Impressico, I built Flask‑based REST APIs, optimized PostgreSQL databases, wrote pytest suites, containerized services with Docker, and automated CI/CD with GitHub Actions, catching bugs early with Thunder Client.",
    skills: [
      "Flask",
      "Python (Programming Language)",
      "pytest",
      "RDBMS",
      "PostgreSQL",
      "REST APIs",
      "API Testing",
      "docker",
      "Docker Products",
      "Git",
      "GitHub",
      "GitHub action",
      "Continuous Integration and Continuous Delivery (CI/CD)",
      "cicd",
      "Thunder client"
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">My professional journey</p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Building className="w-6 h-6 text-blue-400" />
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-white">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-blue-400 font-medium">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Skills Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-slate-700/50 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
