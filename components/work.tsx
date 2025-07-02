"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function Work() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "Jan 2023 - Present",
      type: "Full-time",
      description: "Leading development of enterprise-level web applications and mentoring junior developers.",
      responsibilities: [
        "Architected and developed scalable web applications using React, Next.js, and Node.js",
        "Led a team of 5 developers in agile development processes",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with product managers and designers to deliver user-centric solutions",
        "Optimized application performance resulting in 40% faster load times",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
      achievements: [
        "Employee of the Quarter Q2 2023",
        "Led successful migration to microservices architecture",
        "Reduced bug reports by 50% through improved testing practices",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Creative Agency",
      location: "San Francisco, CA",
      period: "Jun 2022 - Dec 2022",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated closely with design teams.",
      responsibilities: [
        "Built 15+ responsive websites for various clients using React and Vue.js",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Optimized websites for SEO and performance",
        "Mentored 2 junior developers and conducted code reviews",
        "Integrated third-party APIs and payment systems",
      ],
      technologies: ["React", "Vue.js", "JavaScript", "SASS", "Webpack", "Figma"],
      achievements: [
        "Improved average website performance scores by 30%",
        "Successfully delivered all projects on time and within budget",
        "Received excellent client feedback on all projects",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "Jan 2022 - May 2022",
      type: "Full-time",
      description: "Contributed to the development of the company's main product and internal tools.",
      responsibilities: [
        "Developed new features for the main web application using React",
        "Fixed bugs and improved existing functionality",
        "Wrote unit tests to ensure code quality",
        "Participated in daily standups and sprint planning",
        "Collaborated with backend developers to integrate APIs",
      ],
      technologies: ["React", "JavaScript", "HTML", "CSS", "Jest", "Git"],
      achievements: [
        "Successfully completed onboarding program in record time",
        "Contributed to 20+ feature releases",
        "Maintained 95% code coverage in assigned modules",
      ],
    },
    {
      title: "Web Development Intern",
      company: "Local Web Agency",
      location: "Austin, TX",
      period: "Sep 2021 - Dec 2021",
      type: "Internship",
      description: "Gained hands-on experience in web development while supporting various client projects.",
      responsibilities: [
        "Assisted in building client websites using HTML, CSS, and JavaScript",
        "Learned version control with Git and collaborative development",
        "Participated in client meetings and project planning sessions",
        "Performed website maintenance and updates",
        "Created documentation for development processes",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Git"],
      achievements: [
        "Completed all assigned tasks ahead of schedule",
        "Received offer for full-time position upon graduation",
        "Built personal portfolio website as final project",
      ],
    },
  ]

  return (
    <section id="work" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-white mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <div className="flex items-center text-blue-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300">{exp.description}</p>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
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
                        <span className="text-gray-300">{achievement}</span>
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
