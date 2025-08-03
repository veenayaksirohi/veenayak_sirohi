"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const words = [
  "Power BI Enthusiast",
  "Python Developer",
  "Data Analytics Enthusiast"
]

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const currentWord = words[currentWordIndex]

    if (!isDeleting && displayedText.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1))
      }, 120)
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1000)
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1))
      }, 60)
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }, 400)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWordIndex])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-black animate-pulse-slow"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-b from-gray-900 to-gray-800 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuscous-grey/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest mb-4 mt-12 font-sans">
                <span className="block text-white">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent uppercase tracking-widest">
                  Veenayak Sirohi
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mb-6"></div>
              <div className="hero-title text-xl md:text-2xl text-light-grey mb-6 flex flex-wrap items-center gap-2">
                <span className="title-text">Computer Science Student</span>
                <span className="title-separator">|</span>
                <span className="title-text typing-text">
                  {displayedText}
                  <span className="blinking-cursor text-orange-500">|</span>
                </span>
              </div>
              <p className="text-lg text-light-grey max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Computer Science student passionate about data analysis. Skilled in Python, Pandas, and Power BI for turning data into insights.
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto my-6"></div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-400 text-black px-8 py-3 shadow-md shadow-orange-500/20 hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowDown className="ml-2 w-4 h-4 text-black" />
              </Button>
              <a
                href="/veenayak_sirohi/veenayak_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-black border-2 border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white shadow-md shadow-orange-500/20 hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/veenayaksirohi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button size="icon" variant="ghost" className="text-gray-400 border-2 border-orange-500 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/veenayak_sirohi-ab30ab227/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button size="icon" variant="ghost" className="text-gray-400 border-2 border-orange-500 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="mailto:veenayaksirohi@gmail.com"
                aria-label="Email"
              >
                <Button size="icon" variant="ghost" className="text-gray-400 border-2 border-orange-500 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 p-1">
                <div className="w-full h-full rounded-full bg-deep-black flex items-center justify-center overflow-hidden">
                  <img
                    src="/veenayak_sirohi/profile-avatar.jpg"
                    alt="Profile Avatar"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-fuscous-grey rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* Removed scroll indicator down arrow button */}
      </div>
    </section>
  )
}
