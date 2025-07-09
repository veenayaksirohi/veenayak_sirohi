"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/veenayaksirohi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/veenayak-sirohi-ab30ab227/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:veenayaksirohi@gmail.com", label: "Email" },
  ]

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const basePath = process.env.NODE_ENV === 'production' ? '/veenayak_sirohi' : '';

  return (
    <footer className="bg-deep-black border-t border-fuscous-grey">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={basePath + '/profile-avatar.png'}
                alt="Profile Avatar"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-red to-fuscous-grey bg-clip-text text-transparent">
                Veenayak Sirohi
              </span>
            </div>
            <p className="text-light-grey mb-6 max-w-md">
              Computer Science student passionate about data analysis. Skilled in Python, Pandas, and Power BI for turning data into insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-fuscous-grey rounded-lg flex items-center justify-center text-light-grey hover:text-orange-red hover:bg-deep-black transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-light-grey hover:text-orange-red transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-light-grey">
              <p>veenayaksirohi@gmail.com</p>
              <p>+91 7302223304</p>
              <p>Greater Noida, U.P</p>
            </div>
            <Button
              onClick={scrollToTop}
              size="sm"
              variant="outline"
              className="mt-4 border-fuscous-grey text-light-grey hover:bg-orange-red/10 bg-transparent"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-fuscous-grey mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-grey text-sm">© {currentYear} Veenayak Sirohi. All rights reserved.</p>
          <p className="text-light-grey text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-orange-red" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
