import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Award } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description:
      "Lead development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
    achievements: [
      "Improved application performance by 40% through optimization",
      "Led team of 5 developers on major product redesign",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored 3 junior developers who were promoted within 6 months",
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    highlights: ["Team Leadership", "Performance Optimization", "Mentoring"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    type: "Full-time",
    description:
      "Developed MVP and scaled platform from 0 to 50k users. Built responsive web applications and RESTful APIs with focus on user experience.",
    achievements: [
      "Built entire frontend from scratch using React and TypeScript",
      "Designed and implemented RESTful API serving 1M+ requests/day",
      "Reduced page load times by 50% through code splitting and optimization",
      "Integrated payment processing with Stripe and PayPal",
    ],
    technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Stripe"],
    highlights: ["MVP Development", "API Design", "Payment Integration"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "2019 - 2020",
    type: "Full-time",
    description:
      "Created responsive websites and web applications for diverse clients. Collaborated with designers and backend developers to deliver pixel-perfect implementations.",
    achievements: [
      "Delivered 15+ client projects with 100% on-time completion rate",
      "Improved client satisfaction scores by 25% through better UX",
      "Implemented responsive designs supporting all device types",
      "Reduced development time by 30% through component reusability",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "SASS"],
    highlights: ["Client Projects", "Responsive Design", "UX Focus"],
  },
  {
    title: "Junior Web Developer",
    company: "WebDev Studio",
    location: "Los Angeles, CA",
    period: "2018 - 2019",
    type: "Full-time",
    description:
      "Started career building websites and learning modern web development practices. Gained experience in both frontend and backend technologies.",
    achievements: [
      "Completed 20+ website projects for small businesses",
      "Learned React, Node.js, and modern development workflows",
      "Contributed to open-source projects and internal tools",
      "Received 'Rising Star' award for exceptional growth",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    highlights: ["Career Start", "Rapid Learning", "Award Recognition"],
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Berkeley",
    period: "2014 - 2018",
    gpa: "3.8/4.0",
    achievements: ["Dean's List", "CS Honor Society", "Hackathon Winner"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">My professional journey and educational background</p>
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
                    <h4 className="font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-slate-700/50 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <Badge
                          key={highlightIndex}
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-400" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-blue-400 font-medium">{edu.school}</p>
                      <p className="text-gray-400">GPA: {edu.gpa}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <Badge
                          key={achIndex}
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30"
                        >
                          {achievement}
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
