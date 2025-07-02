"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Image from "next/image"

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt:
        "Learn best practices for structuring large React applications using TypeScript, including advanced patterns and performance optimization techniques.",
      content:
        "In this comprehensive guide, we'll explore how to build maintainable and scalable React applications using TypeScript. We'll cover component architecture, state management patterns, and performance optimization strategies that will help you create robust applications.",
      image: "/placeholder.svg?height=200&width=400",
      category: "React",
      author: "Your Name",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Performance", "Architecture"],
      featured: true,
    },
    {
      id: 2,
      title: "Modern CSS Techniques for Better User Interfaces",
      excerpt:
        "Explore the latest CSS features and techniques that can help you create stunning and responsive user interfaces with better performance.",
      content:
        "CSS has evolved significantly in recent years. In this article, we'll dive into modern CSS techniques including CSS Grid, Flexbox, custom properties, and container queries that will revolutionize how you approach styling.",
      image: "/placeholder.svg?height=200&width=400",
      category: "CSS",
      author: "Your Name",
      publishDate: "2024-01-10",
      readTime: "6 min read",
      tags: ["CSS", "UI/UX", "Responsive Design", "Web Design"],
      featured: false,
    },
    {
      id: 3,
      title: "API Design Best Practices for Node.js Applications",
      excerpt:
        "A comprehensive guide to designing RESTful APIs with Node.js, including authentication, error handling, and documentation strategies.",
      content:
        "Building robust APIs is crucial for modern web applications. This guide covers everything from API design principles to implementation details, including security best practices and performance optimization.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Backend",
      author: "Your Name",
      publishDate: "2024-01-05",
      readTime: "10 min read",
      tags: ["Node.js", "API", "Backend", "REST"],
      featured: true,
    },
    {
      id: 4,
      title: "Deploying Next.js Applications to Production",
      excerpt:
        "Step-by-step guide to deploying Next.js applications with various hosting providers and optimization techniques for production environments.",
      content:
        "Deployment is a critical phase in the development lifecycle. Learn how to deploy Next.js applications efficiently using different platforms like Vercel, Netlify, and AWS, with focus on performance and security.",
      image: "/placeholder.svg?height=200&width=400",
      category: "DevOps",
      author: "Your Name",
      publishDate: "2023-12-28",
      readTime: "7 min read",
      tags: ["Next.js", "Deployment", "DevOps", "Production"],
      featured: false,
    },
    {
      id: 5,
      title: "Understanding JavaScript Closures and Scope",
      excerpt:
        "Deep dive into JavaScript closures, lexical scope, and how they work under the hood with practical examples and use cases.",
      content:
        "Closures are one of the most powerful features in JavaScript. This article explains how closures work, their practical applications, and common pitfalls to avoid when working with them.",
      image: "/placeholder.svg?height=200&width=400",
      category: "JavaScript",
      author: "Your Name",
      publishDate: "2023-12-20",
      readTime: "9 min read",
      tags: ["JavaScript", "Fundamentals", "Closures", "Scope"],
      featured: false,
    },
    {
      id: 6,
      title: "Database Design Patterns for Web Applications",
      excerpt:
        "Explore common database design patterns and when to use them in web applications, including relational and NoSQL approaches.",
      content:
        "Good database design is the foundation of any successful application. Learn about different design patterns, normalization techniques, and how to choose between SQL and NoSQL databases.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Database",
      author: "Your Name",
      publishDate: "2023-12-15",
      readTime: "12 min read",
      tags: ["Database", "SQL", "NoSQL", "Design Patterns"],
      featured: true,
    },
  ]

  const categories = ["All", "React", "CSS", "Backend", "DevOps", "JavaScript", "Database"]
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Blog Posts
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge and insights about web development, programming, and technology
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white">Featured Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600">{post.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-between text-blue-400 hover:text-white hover:bg-blue-600/20"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white">Recent Articles</h3>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3 space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-600">{post.category}</Badge>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>

                      <h4 className="text-xl font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer">
                        {post.title}
                      </h4>

                      <p className="text-gray-300">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="ghost" className="text-blue-400 hover:text-white hover:bg-blue-600/20 p-0">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
