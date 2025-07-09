"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "work", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg shadow-black/40 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm border-b border-fuscous-grey" : "bg-black/80"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <img src="/veenayak_sirohi/profile-avatar.png" alt="Profile Avatar" width={32} height={32} className="rounded-full" />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-red to-fuscous-grey bg-clip-text text-transparent">
                Portfolio
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-300 border-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 hover:border-orange-500 hover:bg-orange-500/20 hover:text-orange-500 hover:scale-105 ${
                    activeSection === item.id
                      ? "text-black bg-orange-500/90 border-orange-500 shadow-md shadow-orange-500/30"
                      : "text-gray-200"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="/veenayak_sirohi/veenayak_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-400 text-black border-2 border-orange-500 shadow-md shadow-orange-500/20 hover:scale-105 transition-transform duration-200"
              >
                <Download className="w-4 h-4 mr-2 text-black" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-light-grey hover:text-orange-red p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-orange-red bg-orange-red/10"
                      : "text-light-grey hover:text-orange-red hover:bg-fuscous-grey"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <a
                  href="/veenayak_sirohi/veenayak_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="w-full bg-orange-500 hover:bg-orange-400 text-black border-2 border-orange-500"
                  >
                    <Download className="w-4 h-4 mr-2 text-black" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
