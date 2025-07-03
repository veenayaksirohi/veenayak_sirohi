"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"

export function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Programming, Data Structures and Algorithms using Python",
      issuer: "NPTEL (IIT Madras)",
      issueDate: "Mar 2024",
      expiryDate: null,
      credentialId: "NPTEL24CS45S558604431",
      description: "Successfully completed the NPTEL course 'Programming, Data Structures and Algorithms using Python' with a consolidated score of 56%.",
      skills: ["Python", "Data Structures", "Algorithms", "Programming"],
      verificationUrl: "/certificate_img/Programming, Data Structures And Algorithms Using Python_page1.jpg",
      logo: "/nptel.jpg",
      status: "active",
      level: "Certification",
    },
    {
      id: 2,
      title: "What is Data Science?",
      issuer: "IBM (Coursera)",
      issueDate: "Nov 8, 2023",
      expiryDate: null,
      credentialId: "A7V55A58EYV4",
      description: "Successfully completed the IBM online non-credit course 'What is Data Science?' offered through Coursera.",
      skills: ["Data Science", "IBM", "Coursera", "Foundations"],
      verificationUrl: "/certificate_img/Coursera A7V55A58EYV4_page1.jpg",
      logo: "/blueCoursera-646f855eae3d677239ea9db93d6c9e17.svg",
      status: "active",
      level: "Course Certificate",
    },
    {
      id: 3,
      title: "Google Cloud Professional Cloud Developer",
      issuer: "Google Cloud",
      issueDate: "January 2023",
      expiryDate: "January 2025",
      credentialId: "GCP-PCD-67890",
      description:
        "Demonstrates proficiency in building scalable and reliable applications using Google Cloud technologies.",
      skills: ["Google Cloud Platform", "Kubernetes", "Cloud Functions", "BigQuery", "Cloud SQL"],
      verificationUrl: "https://cloud.google.com/certification/verification",
      logo: "/placeholder.svg?height=80&width=80",
      status: "active",
      level: "Professional",
    },
    {
      id: 4,
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB University",
      issueDate: "November 2022",
      expiryDate: "November 2025",
      credentialId: "MDB-CDA-11111",
      description: "Validates skills in MongoDB database development, including data modeling and aggregation.",
      skills: ["MongoDB", "Aggregation Framework", "Data Modeling", "Indexing", "Replication"],
      verificationUrl: "https://university.mongodb.com/certification/verification",
      logo: "/placeholder.svg?height=80&width=80",
      status: "active",
      level: "Associate",
    },
    {
      id: 5,
      title: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      issueDate: "September 2022",
      expiryDate: "September 2024",
      credentialId: "CSM-22222",
      description: "Demonstrates understanding of Scrum framework and ability to facilitate Scrum teams.",
      skills: ["Scrum Framework", "Agile Methodologies", "Team Facilitation", "Sprint Planning", "Retrospectives"],
      verificationUrl: "https://scrumalliance.org/certification/verification",
      logo: "/placeholder.svg?height=80&width=80",
      status: "active",
      level: "Professional",
    },
    {
      id: 6,
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Facebook)",
      issueDate: "August 2022",
      expiryDate: null,
      credentialId: "META-FED-33333",
      description: "Comprehensive program covering modern front-end development practices and React ecosystem.",
      skills: ["React", "JavaScript", "HTML/CSS", "Version Control", "UI/UX Principles"],
      verificationUrl: "https://coursera.org/verification",
      logo: "/placeholder.svg?height=80&width=80",
      status: "active",
      level: "Professional Certificate",
    },
    {
      id: 7,
      title: "Docker Certified Associate (DCA)",
      issuer: "Docker Inc.",
      issueDate: "June 2022",
      expiryDate: "June 2024",
      credentialId: "DCA-44444",
      description: "Validates skills in containerization, Docker orchestration, and container security.",
      skills: ["Docker", "Containerization", "Docker Compose", "Container Security", "Orchestration"],
      verificationUrl: "https://docker.com/certification/verification",
      logo: "/placeholder.svg?height=80&width=80",
      status: "expiring-soon",
      level: "Associate",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-600"
      case "expiring-soon":
        return "bg-yellow-600"
      case "expired":
        return "bg-red-600"
      default:
        return "bg-gray-600"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active"
      case "expiring-soon":
        return "Expiring Soon"
      case "expired":
        return "Expired"
      default:
        return "Unknown"
    }
  }

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Card key={cert.id} className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-colors">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.issuer} logo`}
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <div className="absolute -top-2 -right-2">
                      <CheckCircle className="w-6 h-6 text-green-400 bg-gray-800 rounded-full" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-white text-lg leading-tight">{cert.title}</CardTitle>
                <p className="text-blue-400 font-medium">{cert.issuer}</p>
                <div className="flex justify-center">
                  <Badge className={getStatusColor(cert.status)}>{getStatusText(cert.status)}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">{cert.description}</p>

                {/* Dates */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.expiryDate && (
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Expires: {cert.expiryDate}</span>
                    </div>
                  )}
                </div>

                {/* Level */}
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-sm text-gray-300">Level: {cert.level}</span>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm">Skills Validated:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-blue-400 text-blue-400">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="text-xs text-gray-500">Credential ID: {cert.credentialId}</div>

                {/* Verification Button */}
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Credential
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {certifications.length}
            </div>
            <div className="text-gray-400 text-sm">Total Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {certifications.filter((cert) => cert.status === "active").length}
            </div>
            <div className="text-gray-400 text-sm">Active Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {certifications.filter((cert) => cert.level.includes("Professional")).length}
            </div>
            <div className="text-gray-400 text-sm">Professional Level</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              3+
            </div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
