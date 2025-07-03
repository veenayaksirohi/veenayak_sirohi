import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import Education from "@/components/education"
import { Work } from "@/components/work"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Work />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
