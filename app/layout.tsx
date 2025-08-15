import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Veenayak Sirohi - Portfolio",
  description:
    "A modern, responsive portfolio website for Veenayak Sirohi. Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View projects, skills, certifications, and experience.",
  keywords: "Veenayak Sirohi, portfolio, full stack developer, react, next.js, node.js, typescript, web development, projects, skills, certifications, resume, github, linkedin",
  authors: [{ name: "Veenayak Sirohi", url: "https://www.linkedin.com/in/veenayaksirohi" }],
  creator: "Veenayak Sirohi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://veenayaksirohi.github.io/veenayak_sirohi/",
    title: "Veenayak Sirohi - Portfolio",
    description: "A modern, responsive portfolio website for Veenayak Sirohi. Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Veenayak Sirohi Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'Next.js, Tailwind CSS, shadcn/ui, Lucide',
  icons: [
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/veenayak_sirohi/favicon.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/veenayak_sirohi/icon.png' },
    // You can add more sizes if you have them
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
