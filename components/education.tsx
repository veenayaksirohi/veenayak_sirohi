"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

// Use the same basePath as in next.config.js for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/veenayak_sirohi' : '';

function Education() {
  const education = [
    {
      degree: "B.Tech - Computer Science Engineering",
      school: "GL Bajaj Institute of Technology and Management",
      location: "Uttar Pradesh, India",
      period: "Nov 2021 - Jun2025",
      gpa: undefined,
      achievements: ["Database Management Systems","Networking", "Operating Systems", "Data Structures", "Algorithms"],
      logo: `${basePath}/LogoGLBajaj.jpg`
    },
    {
      degree: "Schooling",
      school: "Dewan Public School - India",
      location: "Hapur, Uttar Pradesh, India",
      period: "Apr 2007 - Mar 2021",
      gpa: "80%",
      achievements: ["Physics", "Maths", "Chemistry"],
      logo: `${basePath}/dewan.png`
    }
  ]

  return (
    <section id="education" className="py-20 bg-deep-black/90">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-orange-red to-fuscous-grey bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-light-grey max-w-2xl mx-auto mb-8">
            A comprehensive overview of my academic background and achievements
          </p>
          <a
            href={`${basePath}/veenayak_Resume.pdf`}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-orange-red hover:bg-orange-red/90 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download PDF Resume
            </Button>
          </a>
        </div>

        <div className="w-full space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-fuscous-grey border-fuscous-grey">
              <CardHeader className="flex flex-row items-center gap-6">
                {edu.logo && (
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16">
                    <Image src={edu.logo} alt={edu.school + ' logo'} width={56} height={56} className="rounded-full object-contain" />
                  </div>
                )}
                <div className="flex-1">
                  <CardTitle className="text-white">{edu.degree}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-light-grey">
                    <div className="flex items-center">
                      <span className="font-medium">{edu.school}</span>
                      <MapPin className="w-4 h-4 mx-2 text-orange-red" />
                      <span>{edu.location}</span>
                    </div>
                    <span className="text-orange-red">{edu.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {edu.gpa && <p className="text-light-grey mb-3">{edu.degree === "Schooling" ? `Grade: ${edu.gpa}` : `CGPA: ${edu.gpa}`}</p>}
                {edu.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary" className="bg-deep-black text-light-grey border-fuscous-grey">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education;
