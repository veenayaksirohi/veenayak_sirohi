"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      longDescription:
        "Built a comprehensive e-commerce platform from scratch using Next.js and Node.js. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard for inventory and sales analytics.",
      image: "/placeholder.svg?height=300&width=500",
      category: "fullstack",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Order tracking and management",
        "Admin dashboard with analytics",
      ],
      liveUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/username/ecommerce-platform",
      status: "completed",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      longDescription:
        "Developed a modern task management application similar to Trello/Asana. The app features drag-and-drop functionality, real-time collaboration, team management, and progress tracking with beautiful data visualizations.",
      image: "/placeholder.svg?height=300&width=500",
      category: "frontend",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      features: [
        "Drag and drop task management",
        "Real-time collaboration",
        "Team and project management",
        "Progress tracking and analytics",
        "File attachments and comments",
        "Mobile responsive design",
      ],
      liveUrl: "https://taskmanager-demo.vercel.app",
      githubUrl: "https://github.com/username/task-manager",
      status: "completed",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive maps.",
      longDescription:
        "Created a comprehensive weather dashboard that provides current weather conditions, 7-day forecasts, and interactive weather maps. The app uses geolocation API and integrates with multiple weather services for accurate data.",
      image: "/placeholder.svg?height=300&width=500",
      category: "frontend",
      technologies: ["Vue.js", "JavaScript", "Weather API", "Mapbox", "Chart.js"],
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Interactive weather maps",
        "Location-based services",
        "Weather alerts and notifications",
        "Historical weather data",
      ],
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/username/weather-dashboard",
      status: "completed",
    },
    {
      id: 4,
      title: "Social Media API",
      description: "A RESTful API for a social media platform with authentication, posts, and real-time messaging.",
      longDescription:
        "Built a scalable REST API for a social media platform. The API handles user authentication, post creation and management, friend connections, real-time messaging, and content moderation with comprehensive documentation.",
      image: "/placeholder.svg?height=300&width=500",
      category: "backend",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      features: [
        "User authentication with JWT",
        "CRUD operations for posts",
        "Friend/follower system",
        "Real-time messaging",
        "Content moderation",
        "API documentation with Swagger",
      ],
      liveUrl: "https://social-api-docs.vercel.app",
      githubUrl: "https://github.com/username/social-media-api",
      status: "completed",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and deployed on Vercel.",
      longDescription:
        "Designed and developed this portfolio website to showcase my projects and skills. Features include smooth animations, responsive design, contact form integration, and optimized performance for fast loading times.",
      image: "/placeholder.svg?height=300&width=500",
      category: "frontend",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design",
        "Smooth animations",
        "Contact form integration",
        "SEO optimization",
        "Fast loading performance",
        "Dark/light theme support",
      ],
      liveUrl: "https://portfolio-demo.vercel.app",
      githubUrl: "https://github.com/username/portfolio",
      status: "completed",
    },
    {
      id: 6,
      title: "AI Chat Application",
      description: "An AI-powered chat application with natural language processing and conversation memory.",
      longDescription:
        "Currently developing an AI chat application that uses OpenAI's GPT API for natural language processing. The app features conversation memory, context awareness, and multiple AI personalities for different use cases.",
      image: "/placeholder.svg?height=300&width=500",
      category: "fullstack",
      technologies: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma", "WebSocket"],
      features: [
        "AI-powered conversations",
        "Conversation memory",
        "Multiple AI personalities",
        "Real-time messaging",
        "User authentication",
        "Chat history and export",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/username/ai-chat-app",
      status: "in-progress",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-deep-black/90">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-orange-red to-fuscous-grey bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-light-grey max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={
                  filter === category.id
                    ? "bg-orange-red hover:bg-orange-red/90 text-white"
                    : "border-fuscous-grey text-light-grey hover:bg-fuscous-grey"
                }
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-fuscous-grey border-fuscous-grey hover:border-orange-red/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={project.status === "completed" ? "default" : "secondary"}
                    className={project.status === "completed" ? "bg-green-600" : "bg-orange-red/80 text-white"}
                  >
                    {project.status === "completed" ? "Completed" : "In Progress"}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-white group-hover:text-orange-red transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-light-grey text-sm">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-deep-black text-light-grey border-fuscous-grey">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-light-grey space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-orange-red rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-orange-red hover:bg-orange-red/90 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-fuscous-grey text-light-grey hover:bg-fuscous-grey bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-light-grey">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
