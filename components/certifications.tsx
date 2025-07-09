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
      verificationUrl: "/veenayak_sirohi/certificate_img/Programming, Data Structures And Algorithms Using Python_page1.jpg",
      logo: "/veenayak_sirohi/nptel.jpg",
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
      verificationUrl: "/veenayak_sirohi/certificate_img/Coursera A7V55A58EYV4_page1.jpg",
      logo: "/veenayak_sirohi/blueCoursera-646f855eae3d677239ea9db93d6c9e17.svg",
      status: "active",
      level: "Course Certificate",
    },
    {
      id: 3,
      title: "Data Science Methodology",
      issuer: "IBM (Coursera)",
      issueDate: "Nov 18, 2023",
      expiryDate: null,
      credentialId: "F4EYNFARXCLT",
      description: "Successfully completed the IBM online non-credit course 'Data Science Methodology' offered through Coursera.",
      skills: ["Data Science", "Methodology", "IBM", "Coursera"],
      verificationUrl: "/veenayak_sirohi/certificate_img/Coursera F4EYNFARXCLT_page1.jpg",
      logo: "/veenayak_sirohi/blueCoursera-646f855eae3d677239ea9db93d6c9e17.svg",
      status: "active",
      level: "Course Certificate",
    },
    {
      id: 4,
      title: "Tools for Data Science",
      issuer: "IBM (Coursera)",
      issueDate: "Nov 15, 2023",
      expiryDate: null,
      credentialId: "8ZUMXTXVEVTQ",
      description: "Successfully completed the IBM online non-credit course 'Tools for Data Science' offered through Coursera.",
      skills: ["Data Science", "Tools", "IBM", "Coursera"],
      verificationUrl: "/veenayak_sirohi/certificate_img/Coursera 8ZUMXTXVEVTQ_page1.jpg",
      logo: "/veenayak_sirohi/blueCoursera-646f855eae3d677239ea9db93d6c9e17.svg",
      status: "active",
      level: "Course Certificate",
    },
    {
      id: 5,
      title: "Fundamentals of Cloud Security",
      issuer: "Palo Alto Networks (Beacon)",
      issueDate: "Sep 28, 2023",
      expiryDate: null,
      credentialId: "",
      description: "Successfully completed the 'Fundamentals of Cloud Security' course offered by Palo Alto Networks (Beacon).",
      skills: ["Cloud Security", "Palo Alto Networks", "Cybersecurity", "Fundamentals"],
      verificationUrl: "/veenayak_sirohi/certificate_img/Fundamentals of Cloud Security _ Beacon_page1.jpg",
      logo: "/veenayak_sirohi/palo-alto-networks-logo-png_seeklogo-384891.png",
      status: "active",
      level: "Course Certificate",
    },
    {
      id: 6,
      title: "Fundamentals of Network Security",
      issuer: "Palo Alto Networks (Beacon)",
      issueDate: "Sep 28, 2023",
      expiryDate: null,
      credentialId: "",
      description: "Successfully completed the 'Fundamentals of Network Security' course offered by Palo Alto Networks (Beacon).",
      skills: ["Network Security", "Palo Alto Networks", "Cybersecurity", "Fundamentals"],
      verificationUrl: "/veenayak_sirohi/certificate_img/Fundamentals of Network Security _ Beacon_page1.jpg",
      logo: "/veenayak_sirohi/palo-alto-networks-logo-png_seeklogo-384891.png",
      status: "active",
      level: "Course Certificate",
    },
    {
      id: 7,
      title: "The Fundamentals of SOC (Security Operations Center)",
      issuer: "Palo Alto Networks (Beacon)",
      issueDate: "Oct 5, 2023",
      expiryDate: null,
      credentialId: "",
      description: "Successfully completed the 'The Fundamentals of SOC (Security Operations Center)' course offered by Palo Alto Networks (Beacon).",
      skills: ["SOC", "Security Operations Center", "Palo Alto Networks", "Cybersecurity", "Fundamentals"],
      verificationUrl: "/veenayak_sirohi/certificate_img/The Fundamentals of SOC (Security Operations Center) _ Beacon_page1.jpg",
      logo: "/veenayak_sirohi/palo-alto-networks-logo-png_seeklogo-384891.png",
      status: "active",
      level: "Course Certificate",
    },
    {
      id: 8,
      title: "Introduction to Cybersecurity",
      issuer: "Palo Alto Networks (Beacon)",
      issueDate: "Sep 23, 2023",
      expiryDate: null,
      credentialId: "",
      description: "Successfully completed the 'Introduction to Cybersecurity' course offered by Palo Alto Networks (Beacon).",
      skills: ["Cybersecurity", "Palo Alto Networks", "Fundamentals"],
      verificationUrl: "/veenayak_sirohi/certificate_img/Introduction to Cybersecurity _ Beacon_page1.jpg",
      logo: "/veenayak_sirohi/palo-alto-networks-logo-png_seeklogo-384891.png",
      status: "active",
      level: "Course Certificate",
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
    <section id="certifications" className="py-20 bg-deep-black/90">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-red to-fuscous-grey bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-light-grey max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Card key={cert.id} className="bg-fuscous-grey border-fuscous-grey hover:border-orange-red/50 transition-colors">
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
                      <CheckCircle className="w-6 h-6 text-green-400 bg-fuscous-grey rounded-full" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-white text-lg leading-tight">{cert.title}</CardTitle>
                <p className="text-orange-red font-medium">{cert.issuer}</p>
                <div className="flex justify-center">
                  <Badge className={getStatusColor(cert.status)}>{getStatusText(cert.status)}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-light-grey text-sm">{cert.description}</p>

                {/* Dates */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-light-grey">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.expiryDate && (
                    <div className="flex items-center text-light-grey">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Expires: {cert.expiryDate}</span>
                    </div>
                  )}
                </div>

                {/* Level */}
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-orange-red" />
                  <span className="text-sm text-light-grey">Level: {cert.level}</span>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm">Skills Validated:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-orange-red text-orange-red">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="text-xs text-fuscous-grey">Credential ID: {cert.credentialId}</div>

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
                    className="w-full border-fuscous-grey text-light-grey hover:bg-orange-red/10 bg-transparent"
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
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-red to-fuscous-grey bg-clip-text text-transparent">
              {certifications.length}
            </div>
            <div className="text-light-grey text-sm">Total Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-red to-fuscous-grey bg-clip-text text-transparent">
              {certifications.filter((cert) => cert.status === "active").length}
            </div>
            <div className="text-light-grey text-sm">Active Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-red to-fuscous-grey bg-clip-text text-transparent">
              {certifications.filter((cert) => cert.level.includes("Professional")).length}
            </div>
            <div className="text-light-grey text-sm">Professional Level</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-red to-fuscous-grey bg-clip-text text-transparent">
              0
            </div>
            <div className="text-light-grey text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
